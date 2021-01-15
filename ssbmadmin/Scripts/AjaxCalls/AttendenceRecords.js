$(document).ready(function () {
    

    $j = jQuery.noConflict();
    $j("#attendenceDate").datepicker({
        changeMonth: true,
        changeYear: true
    });
    var g_urlPrefix = "http://localhost:59206/";
    var inLat;
    var inLong;
    var outLat;
    var outLat;
    $("#getAttendence").click(function () {
        if (document.getElementById('attendenceDate').value != "" || document.getElementById('nBusFkup').value!="")
        {
            var table = document.getElementById("dtable");
            for (var i = 1; i < table.rows.length; i++)
            {
                table.deleteRow(i);
            }

            var dateDuty = $("#attendenceDate").val().split("/");
                var day = parseInt(dateDuty[1]);
                var month = parseInt(dateDuty[0]);
                var year = parseInt(dateDuty[2]);
                var g_urlPrefix = "http://localhost:59206/";
                var nBusId = parseInt(document.getElementById("nBusFkup").value);
                var objToPass = {
                    nBusId: nBusId,
                    day: day,
                    month: month,
                    year: year
                };

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TAttendence/GetAttendence",
                    data: objToPass,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                            var row = "";
                            for (var i = 0; i < resp.liAttendence.length; i++) {
                                row += '<tr>';
                                row += '<td></td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].n + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].nEntityId + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].nBusFK + '</td>';
                                row += '<td>' + resp.liAttendence[i].sFname + " " + resp.liAttendence[i].sMname + " " + resp.liAttendence[i].sLname + '</td>';
                                row += '<td>' + resp.liAttendence[i].sRegNo + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].rInLat + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].rInLong + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].rOutLat + '</td>';
                                row += '<td style="display:none;">' + resp.liAttendence[i].rOutLong + '</td>';
     
                                var start = resp.liAttendence[i].dStampIn.split("T");
                                row += '<td>' + start[1] + '</td>';
                                var stop = resp.liAttendence[i].dStampOut.split("T");
                                row += '<td>' + stop[1] + '</td>';
                            }
                            $('#dtable').append(row);
                            var table = $('#dtable').DataTable({
                                "columnDefs": [{
                                    "targets": 0,
                                    "data": null,
                                    "defaultContent": "<input type='checkBox'>"
                                }]
                            });

                            var table = document.getElementById('dtable'), row1, selcted = null;
                            for (var i = 1; i < table.rows.length; i++) {
                                table.rows[i].cells[0].onclick = function () {
                                    if (selcted == null) { selcted = this; }
                                    else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                                    this.parentElement.style.backgroundColor = "yellow";
                                    this.parentElement.parentElement.style.backgroundColor = "yellow";
                                     inLat = this.parentElement.cells[6].innerHTML;
                                     inLong = this.parentElement.cells[7].innerHTML;
                                     outLat = this.parentElement.cells[8].innerHTML;
                                     outLong = this.parentElement.cells[9].innerHTML;
                                }
                            }

                        } else { alert(resp.apiError.sErrorMessage); }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                    }
                });
            
        } else alert("Choose Bus and date to see Attendence on that day");
    });

    $("#viewLatLong").click(function () {
        var mapOptions = {
            center: new google.maps.LatLng(17.0117, 73.3363),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var location = new google.maps.LatLng(parseFloat(inLat), parseFloat(inLong));
        var markerup = new google.maps.Marker({
            position: location,

            map: map,
            icon: {
            url: "http://maps.google.com/mapfiles/kml/paddle/P.png"
        }
        });
        var location = new google.maps.LatLng(parseFloat(outLat), parseFloat(outLong));
        var markerup = new google.maps.Marker({
            position: location,

            map: map,
            icon: {
                url: "http://maps.google.com/mapfiles/kml/paddle/D.png"
            }
        });
    });
    
    });