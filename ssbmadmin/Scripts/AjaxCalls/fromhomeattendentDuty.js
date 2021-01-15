$(document).ready(function () {

    $j = jQuery.noConflict();
    $j("#dutyDate").datepicker({
        changeMonth: true,
        changeYear: true
    });

    var g_urlPrefix = "http://localhost:59206/";
   
    var data = {
        jType: 1
    };
    
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetEntityList",
        //async: false,
        data: data,
        success: function (resp) {
            result = resp;
            if (resp.apiError.jErrorVal == 0) {
                var row = "";  
              
                for (var i = 0; i < resp.LiEntity.length; i++) {
                    row += '<tr>'; 
                    row += '<td><input type="radio"></td>';
                    row += '<td style="display:none">' + resp.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality +" "+resp.LiEntity[i].sTaluka+" "+resp.LiEntity[i].sDistrict+ '</td>';                
                    row+='</tr>'
                }

                $('#attendentTable').append(row);
                var table = $('#attendentTable').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='checkBox'>"
                    }]
                });
                var selcted = null; var attendentPK;
                var table = document.getElementById('attendentTable');
                for (var i = 1; i < table.rows.length; i++) {
                    table.rows[i].cells[0].onclick = function () {
                        if (selcted == null)
                        { selcted = this; }
                        else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                        this.parentElement.style.backgroundColor = "yellow";
                        this.style.backgroundColor = "yellow";
                        attendentPK = this.parentElement.cells[1].innerHTML;
                        sessionStorage.setItem("attendentPK", attendentPK);
                    }
                }

            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage + resp.n);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });






    $("#getDuty").click(function () {
        if (document.getElementById('dutyDate')!="" && sessionStorage.getItem('attendentPK')!="")
        {
            var table = document.getElementById("dtable");
            for (var i = 1; i < table.rows.length; i++)
            {
                table.deleteRow(1);
            }

            var dateDuty = $("#dutyDate").val().split("/");
                var day = parseInt(dateDuty[1]);
                var month = parseInt(dateDuty[0]);
                var year = parseInt(dateDuty[2]);
                var g_urlPrefix = "http://localhost:59206/";
                var nattendentId = parseInt(sessionStorage.getItem("attendentPK"));
                var objToPass = {
                    nEntityId: nattendentId,
                    day: day,
                    month: month,
                    year: year
                };

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TAttendentDuty/GetDuty",
                    data: objToPass,
                    success: function (resp) {
                        if (resp.apiErrors.jErrorVal == 0) {
                            var row = "";
                            for (var i = 0; i < resp.duties.length; i++) {
                                row += '<tr>';
                                row += '<td></td>';
                                row += '<td style="display:none;">' + resp.duties[i].nDutyId + '</td>';
                                var start = resp.duties[i].dStampStart.split("T");
                                row += '<td>' + start[1] + '</td>';
                                var stop = resp.duties[i].dStampStop.split("T");
                                row += '<td>' + stop[1] + '</td>';
                                row += '<td>' + resp.duties[i].sRegNo + '</td>';
                            }
                            $('#dtable').append(row);

                        } else { alert(resp.apiErrors.sErrorMessage); }
                    },
                    error: function (error) {
                        // hide loader
                        alert(error.status + " - " + error.toString);
                    }
                });
            
        }  else alert("Choose attendent and date to see duties on that day"); });
    
    });