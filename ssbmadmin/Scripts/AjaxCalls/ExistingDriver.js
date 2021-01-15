
$(function () {
    $("#changeMap").click(function () {

        window.open("BusesTable.aspx", "_self");
    });
    $("#AddNew").click(function () {

        sessionStorage.removeItem("driverPK");
        window.open("DriverReg.aspx", "_self");
    });
    var g_urlPrefix = "http://localhost:59206/";
   
    var data = {
        jType: 3
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
                    row += '<td></td>';
                    row += '<td style="display:none">' + resp.LiEntity[i].nEntityId+ '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality +" "+resp.LiEntity[i].sTaluka+" "+resp.LiEntity[i].sDistrict+ '</td>';
                    //  row += '<td>' + '<a>View</a>' + '</td>';                   
                }
              
                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                   "columnDefs": [{
                        "targets": 0,
                       "data":null,
                       "defaultContent": "<input type='radio' id='R'>"
                    }
                   ]                   
                });

               
              
                //row selection    
                var selcted=null;var driverPK="";
                var table = document.getElementById('dtable'), row1;
                for( var i=1; i< table.rows.length; i++)
                {
                    table.rows[i].cells[0].onclick = function()
                    {
                       // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white";  selcted = this; }
                                this.parentElement.style.backgroundColor = "yellow";
                                this.style.backgroundColor = "yellow";
                                driverPK = this.parentElement.cells[1].innerHTML;
                                document.getElementById("FullName").innerHTML = this.parentElement.cells[2].innerHTML;
                                sessionStorage.setItem("driverPK", driverPK);
                              
                    }
                }
      
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
});

 

