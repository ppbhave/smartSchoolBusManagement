$(function () {
   // var Bus = new QueryString().get("Bus");
    
    getDrivers();

    });
function getDrivers()
{
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        jType:3
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
                    row += '<td style="display:none">' + resp.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality + " " + resp.LiEntity[i].sTaluka + " " + resp.LiEntity[i].sDistrict + '</td>';
                  
                }

                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='radio' id='R'>"
                    }]
                });


                var selcted = null;
                var table = document.getElementById('dtable'), row1;
                for (var i = 1; i < table.rows.length; i++) {
                    table.rows[i].cells[0].onclick = function () {
                        // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                        this.parentElement.style.backgroundColor = "yellow";
                        this.style.backgroundColor = "yellow";
                        document.getElementById("n").innerHTML = this.parentElement.cells[1].innerHTML;
                        document.getElementById("FullName").innerHTML = this.parentElement.cells[2].innerHTML;
                        sessionStorage.setItem("driverId", document.getElementById("n").innerHTML);
                    }
                }2
                $("#mapBusDriver").click(function () {
                    Map2Bus();
                });
              

            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage +  error.statusText+ resp.n);
         
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    }); 


    function Map2Bus() {
        var driverId=sessionStorage.getItem("driverId");
        var DriverBusId = sessionStorage.getItem("DriverBusId");
        if (DriverBusId == "" || DriverBusId==null) {
            var obj = {
                nEntityId: parseInt(driverId),
                nBusFK: parseInt(sessionStorage.getItem("busPK"))
            };
            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TEntity/MapDriver",
                data: obj,
                //async: false,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        alert(resp.apiError.sErrorMessage);
                    }
                    else {
                        // hide loader
                        alert("Failed! Driver may be already mapped to other Bus.");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
            window.open("ExistingBuses.aspx", "_self");
        }else
        {
            if (confirm('Are you sure you want to change existing driver-bus Relation?')) {
                var busPK = sessionStorage.getItem("busPK");
                var DriverBusId = sessionStorage.getItem("DriverBusId");
                var data = {
                    nEntityId: parseInt(driverId),
                    DriverBusId: parseInt(DriverBusId),
                    nBusFK: parseInt(sessionStorage.getItem("busPK")),
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
                            window.open("ExistingBuses.aspx", "_self");
                        } else {
                            // hide loader
                            alert(resp.apiError.sErrorMessage);
                            window.open("ExistingBuses.aspx", "_self");
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                        window.open("ExistingBuses.aspx", "_self");
                    }
                });
            }
            else { return;}
        }

        }
}