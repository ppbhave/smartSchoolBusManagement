
$(function () {
    var g_urlPrefix = "http://localhost:59206/";
   
    var data = {
        fall: true
    };
    
    $.ajax({
        type: "GET",
        dataType: "json",
        url: g_urlPrefix + "TRoutes/GetAllRoute",
        //async: false,
        data: data,
        success: function (resp) {
            result = resp;
            if (resp.apiError.jErrorVal == 0) {
                var row = "";  
              
                for (var i = 0; i < resp.liRoute.length; i++) {
                    row += '<tr>'; 
                    row += '<td></td>';
                    row += '<td>' + resp.liRoute[i].n.toString() + '</td>';
                    row += '<td>' + resp.liRoute[i].rLat1.toString() + "/" + resp.liRoute[i].rLong1.toString() + " " + resp.LiEntity[i].sLname.toString() + '</td>';
                    row += '<td>' + resp.liRoute[i].rLat2.toString() + "/ " + resp.liRoute[i].rLong2.toString() + " " + resp.LiEntity[i].sDistrict.toString() + '</td>';
                    row += '<td>' + resp.liRoute[i].nBusFK.toString() + '</td>';
                    //  row += '<td>' + '<a>View</a>' + '</td>';                   
                }
              
                $('#RouteList').append(row);
                var table = $('#RouteList').DataTable({
                   "columnDefs": [{
                        "targets": 0,
                       "data":null,
                       "defaultContent": "<input type='radio' id='R'>"
                    }
                   ]                   
                });
                //view onclick
                $("#RouteList").click(function () {
                //    seeDriverDetails(resp);
                });
              
                //row selection    
                var selcted=null;
                var table = document.getElementById('RouteList'), row1;
                for( var i=1; i< table.rows.length; i++)
                {
                    table.rows[i].cells[0].onclick = function()
                    {
                       // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                                this.parentElement.style.backgroundColor = "yellow";
                                this.style.backgroundColor = "yellow";
                                document.getElementById("n").innerHTML = this.parentElement.cells[1].innerHTML;
                                sessionStorage.setItem("RouteId",  document.getElementById("n").innerHTML); 
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

 
