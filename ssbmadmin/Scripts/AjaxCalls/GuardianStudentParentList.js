$(function () {
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        jType: 2
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetEntityList",
        data: data,
        //async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                result = resp;
                var row = "";
                for (var i = 0; i < resp.LiEntity.length; i++) {
                    row += '<tr>';
                    row += '<td></td>';
                    row += '<td>' + resp.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality + "," + resp.LiEntity[i].sTaluka + "," + resp.LiEntity[i].sDistrict + '</td>';
                   
                }

                 $('#dtableparent').append(row);
                var table = $('#dtableparent').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='checkBox'>"
                    }
                    ]
                });

                var table1 = document.getElementById('dtableparent'), row1, selcted = null;
                for (var i = 1; i < table1.rows.length; i++) {
                    table1.rows[i].cells[0].onclick = function () {
                        if (selcted == null) { selcted = this; }
                        else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                        this.parentElement.style.backgroundColor = "yellow";
                        this.parentElement.parentElement.style.backgroundColor = "yellow";
                        document.getElementById("n").innerHTML = this.parentElement.cells[1].innerHTML;
                        document.getElementById("Pname").innerHTML = this.parentElement.cells[2].innerHTML;
                        sessionStorage.setItem("parentPK", document.getElementById("n").innerHTML + "");
                    }
                }
            
                return ;
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage  + resp.n); return;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);return;
        },
    });

})

  
   
