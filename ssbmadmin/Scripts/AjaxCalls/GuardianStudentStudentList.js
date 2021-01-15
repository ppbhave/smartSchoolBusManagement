$(function () {
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        jType: 4
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetEntityList",
        data: data,
        //async: false,
        success: function (result) {
            if (result.apiError.jErrorVal == 0) {
                var row = "";
                for (var i = 0; i < result.LiEntity.length; i++) {
                    row += '<tr>';
                    row += '<td></td>';
                    row += '<td>' + result.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + result.LiEntity[i].sFname + " " + result.LiEntity[i].sMname + " " + result.LiEntity[i].sLname + '</td>';
                    row += '<td>' + result.LiEntity[i].sLocality + "," + result.LiEntity[i].sTaluka + "," + result.LiEntity[i].sDistrict + '</td>';
                    row += '<td>' + result.LiEntity[i].sClass + '</td>';
                }

                $('#dtablestudent').append(row);
                var table = $('#dtablestudent').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='checkBox'>"
                    }
                    ]
                });

                var count = 0;

                var table = document.getElementById('dtablestudent');
                var cboxes = table.getElementsByTagName("input");
                for (var i = 0; i < cboxes.length; i++) {
                    var cbox = cboxes[i];
                    cbox.onclick = function () {
                        var currentRow = this.parentNode.parentNode;
                        var thisColumn = currentRow.getElementsByTagName("td")[0];
                        if (this.checked) { thisColumn.style.backgroundColor = "yellow"; currentRow.style.backgroundColor = "yellow"; count=count+1; document.getElementById("scount").innerHTMLL = count+""; }
                        else { thisColumn.style.backgroundColor = "white"; currentRow.style.backgroundColor = "white"; count=count-1; document.getElementById("scount").innerHTMLL = count+""; }
                    }
                }

                return;
            } else {
                // hide loader
                alert(result.apiError.sErrorMessage );
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }

    });


    return;

})

  
   
