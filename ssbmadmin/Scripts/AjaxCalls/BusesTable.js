
$(function () {
    sessionStorage.setItem("busPK", "");

    $("#mapDrierBus").click(function () {

    
    
         var g_urlPrefix = "http://localhost:59206/";
        var nBusFK = sessionStorage.getItem("busPK");
        var nEntityId = sessionStorage.getItem("driverPK");
        if (nBusFK != "" && (sessionStorage.getItem("DriverBusId") == "" || sessionStorage.getItem("DriverBusId") == null)) {
            var data = {
                nBusFK: parseInt(nBusFK),
                nEntityId: parseInt(nEntityId)
            };

            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TEntity/MapDriver",
                //async: false,
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        alert("Bus Assigned successfully");
                        window.open("ExistingDrivers.aspx", "_self");
                    }
                    else {
                        // hide loader
                        alert(resp.apiError.sErrorMessage);

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
        }
        else if (nBusFK != "" && (sessionStorage.getItem("DriverBusId") != "" || sessionStorage.getItem("DriverBusId") != null))
        {
            if (confirm('Are you sure you want to change existing driver-bus Relation?')) {
            var busPK = sessionStorage.getItem("busPK");
            var DriverBusId = sessionStorage.getItem("DriverBusId");
            var data = {
                nEntityId: parseInt(nEntityId),
                DriverBusId: parseInt(DriverBusId),
                nBusFK: parseInt(nBusFK),
                bStatus: true
            };
            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TEntity/editBusDriver",
                //async: false,
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        alert("Successful Edit");
                        window.open("ExistingDrivers.aspx", "_self");
                    } else {
                        // hide loader
                        alert(resp.apiError.sErrorMessage);
                        window.open("ExistingDrivers.aspx", "_self");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                    window.open("ExistingDrivers.aspx", "_self");
                }
            });
        }

} else {
        // Do nothing!
        return;
}

       
    });
 
    var g_urlPrefix = "http://localhost:59206/";
    sessionStorage.setItem("busPK","");
    var busPK = sessionStorage.getItem("busPK");

    var data = {
        fAll: true
    };
    
    $.ajax({
        type: "GET",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBus",
        //async: false,
        data: data,
        success: function (resp) {
            result = resp;
            if (resp.apiError.jErrorVal == 0) {
                var row = "";  
              
                for (var i = 0; i < resp.liBus.length; i++) {
                    row += '<tr>'; 
                    row += '<td></td>';
                    row += '<td style="display:none">' + resp.liBus[i].nBusId.toString() + '</td>';
                    row += '<td>' + resp.liBus[i].sRegNo.toString() + '</td>';
                    row += '<td>' + resp.liBus[i].jCapacity.toString() + '</td>';
                   
                }
              
                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                   "columnDefs": [{
                        "targets": 0,
                       "data":null,
                       "defaultContent": "<input type='checkbox' id='R'>"
                    }
                   ]                   
                });
                //view onclick
               
              
                //row selection    
                var selcted=null;var busPK;
                var table = document.getElementById('dtable'), row1;
                for( var i=1; i< table.rows.length; i++)
                {
                    table.rows[i].cells[0].onclick = function()
                    {
                       // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                                this.parentElement.style.backgroundColor = "yellow";
                                this.style.backgroundColor = "yellow";
                                busPK = this.parentElement.cells[1].innerHTML;
                                document.getElementById("RegNo").innerHTML = this.parentElement.cells[2].innerHTML;
                                sessionStorage.setItem("busPK", busPK); 
                    }
                }
      
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage  );

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });

});

function getDriver()
{
    var data = {
        nBusFK: parseInt(busPK)
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetDriver",
        //async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                if (resp.DriverBusId != "" || resp.DriverBusId != null) {
                    document.getElementById("DriverBusId").innerHTML = resp.DriverBusId;
                    document.getElementById("driverName").innerHTML = resp.sFname + " " + resp.sMname + " " + resp.sLname;
                } else {
                    document.getElementById("DriverBusId").innerHTML = null;
                    document.getElementById("driverName").innerHTML = "";
                }
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage);
                document.getElementById("DriverBusId").innerHTML = null;
                document.getElementById("driverName").innerHTML = "";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
            document.getElementById("DriverBusId").innerHTML = null;
            document.getElementById("driverName").innerHTML = "";
        }
    });
}



