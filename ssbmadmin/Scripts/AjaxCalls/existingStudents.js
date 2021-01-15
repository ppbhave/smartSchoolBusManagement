$(function () {

    var result;
    getStudntList();
    $("#AddNew").click(function () {
        sessionStorage.removeItem("studentPK");
        window.open("Studentadd.aspx", "_self");

    });
    $("#attendence").click(function () {
    if(sessionStorage.getItem("studentPK")!="")
        window.open("studAttendence.aspx", "_self");
    else alert("Choose student first");
    });
});

   
function getStudntList() {
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
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                     
                var row = "";
                for (var i = 0; i < resp.LiEntity.length; i++) {
                    row += '<tr>';
                    row += '<td></td>';
                    row += '<td style="display:none;">' + resp.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality + "," + resp.LiEntity[i].sTaluka + "," + resp.LiEntity[i].sDistrict + '</td>';
                    row += '<td>' + resp.LiEntity[i].sClass + '</td>';
                }
                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='checkBox'>"
                    }]
                });
                    var table = document.getElementById('dtable'), row1,selcted=null;
                    for (var i = 1; i < table.rows.length; i++) {
                        table.rows[i].cells[0].onclick = function () {
                            if (selcted == null) { selcted = this; }
                            else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                            this.parentElement.style.backgroundColor = "yellow";
                            this.parentElement.parentElement.style.backgroundColor = "yellow";
                           
                            document.getElementById("Fullname").innerHTML = this.parentElement.cells[2].innerHTML;
                            var studentPK=this.parentElement.cells[1].innerHTML;
                            sessionStorage.setItem("studentPK", studentPK);
                        }
                    }           

                    return ;
                } else {
                    // hide loader
                    alert(resp.apiError.sErrorMessage  + resp.n); 

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });
      
    }
