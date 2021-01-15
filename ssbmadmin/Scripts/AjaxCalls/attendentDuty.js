$(document).ready(function () {
    
    $('#dutyDate').datepicker({
        changeMonth: true,
        changeYear: true
    });

    $("#getDuty").click(function () {
        if (sessionStorage.getItem("attendentPK") != "") {
            var table = document.getElementById("dtable");
            for (var i = 1; i < table.rows.length; i++) {
                table.deleteRow(i);
            }
            var dateDuty = $("#dutyDate").val().split("/");
            var day = parseInt(dateDuty[1]);
            var month = parseInt(dateDuty[0]);
            var year = parseInt(dateDuty[2]);
            var g_urlPrefix = "http://localhost:59206/";
            var nattendentId=parseInt(sessionStorage.getItem("attendentPK"));
            var objToPass = {
                nEntityId: nattendentId,
                day: day,
                month: month,
                year:year  };

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
                            var start=resp.duties[i].dStampStart.split("T");
                            row += '<td>' + start[1] + '</td>';
                            var stop = resp.duties[i].dStampStop.split("T");
                            row += '<td>' + stop[1] + '</td>';
                            row += '<td>' + resp.duties[i].sRegNo + '</td>';
                        }
                       $('#dtable').append(row);
                    /*     var table = $('#dtable').DataTable({
                            "columnDefs": [{
                                "targets": 0,
                                "data": null,
                                "defaultContent": "<input type='checkBox'>"
                            }]
                        });         */
                    } else { alert(resp.apiErrors.sErrorMessage); }
                },
                error:function (error) {
                    // hide loader
                    alert(error.status + " - "  + error.toString);
                }
           
            });
       }  });
    });