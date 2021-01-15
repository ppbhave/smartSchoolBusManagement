
$(function () {

    sessionStorage.setItem("busPK","")
    var g_urlPrefix = "http://localhost:59206/";
   
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
                  //  row += '<td>' + '<a>View</a>' + '</td>';                   
                }
              
                $('#dtable').append(row);
                var table = $('#dtable').DataTable( {
                   "columnDefs": [{
                        "targets": 0,
                       "data":null,
                       "defaultContent": "<input type='checkbox' id='R'>"
                    }
                   ]                   
                });
                var busPK;
                var table = document.getElementById('dtable'), row1, selcted = null;
                for (var i = 1; i < table.rows.length; i++) {
                    table.rows[i].cells[0].onclick = function () {
                        if (selcted == null) { selcted = this; }
                        else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                        this.parentElement.style.backgroundColor = "yellow";
                        this.parentElement.parentElement.style.backgroundColor = "yellow";
                        busPK = this.parentElement.cells[1].innerHTML;
                        sessionStorage.setItem("busPK", busPK);
                        document.getElementById("RegNo").innerHTML = this.parentElement.cells[2].innerHTML;
                    }
                }
                //view onclick
               
                $("#seeRoutes").click(function () {
                    if (sessionStorage.getItem("busPK") != "") {
                        window.open("displayBusRouts.aspx", "_self");
                    } else alert("select Bus First");
                });
              
                //row selection    
                var selcted=null;
                var table = document.getElementById('dtable'), row1, prevCheck=null;
            for( var i=1; i< table.rows.length; i++)
                {
                    table.rows[i].cells[0].onclick = function()
                    {
                       // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white"; selcted = this; }
                                this.parentElement.style.backgroundColor = "yellow";
                                this.style.backgroundColor = "yellow";
                                var busPK = this.parentElement.cells[1].innerHTML;
                                document.getElementById("RegNo").innerHTML = this.parentElement.cells[2].innerHTML;
                                sessionStorage.setItem("busPK",busPK ); 
                    }
                }  
      
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage );
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });

    $(document).on("click", "#btnSave", function () {
        var g_urlPrefix = "http://localhost:59206/";
        // Add validations first - if validated all go for below code else return error msg.

        // Start loader

        var objToPass = {
            sRegNo: $("#sRegNo").val(),
            jCapacity: $("#jCapacity").val()

        };

        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TBus/AddBus",
            data: objToPass,
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                    // hide loader
                    alert("Bus Added");
                    location.reload(true);

                } else {
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
    });

    $("#seeDriver").click(function () {
        if (sessionStorage.getItem("busPK") == "") {
            alert("select the Bus");
            document.getElementById("DriverBusId").innerHTML = null;
            document.getElementById("driverName").innerHTML = "";
        }
        else {
            var g_urlPrefix = "http://localhost:59206/";
            var busPK = sessionStorage.getItem("busPK");
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
                        }else
                        {
                            document.getElementById("DriverBusId").innerHTML = null;
                            document.getElementById("driverName").innerHTML ="";
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
    });

    $("#EditDriverBus").click(function () {
        if (sessionStorage.getItem("busPK") == "") {
            alert("select the Bus");
        }
        else if (document.getElementById("DriverBusId").innerHTML != "")
        {
        var driverBusId = document.getElementById("DriverBusId").innerHTML;
        sessionStorage.setItem("DriverBusId", driverBusId);
            window.open("DriverTable.aspx", "_self");
        }
        else {
            sessionStorage.setItem("DriverBusId", "");
            window.open("DriverTable.aspx", "_self");
        }
    });

    $("#editBtn").click(function () {
        if (sessionStorage.getItem("busPK") == "") {
            alert("select the Bus");
        }
        else {
            var g_urlPrefix = "http://localhost:59206/";
            var busPK = sessionStorage.getItem("busPK");
            var data = {
                nBusId: parseInt(busPK)
            };

            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TBus/GetBusById",
                //async: false,
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        document.getElementById("sRegNo1").value = resp.sRegNo;
                        document.getElementById("jCapacity1").value = resp.jCapacity;
                    } else {
                        // hide loader
                        alert(resp.apiError.sErrorMessage );
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
        }
    }
);

    $("#btnModify").click(function () {
        if (sessionStorage.getItem("busPK") == "") {
            alert("select the Bus");
        }
        else {
            var g_urlPrefix = "http://localhost:59206/";
            var busPK = sessionStorage.getItem("busPK");
            var data = {
                nBusId: parseInt(busPK),
                sRegNo: $("#sRegNo1").val(),
                jCapacity:$("#jCapacity1").val()
            };

            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TBus/ModifyBus",
                //async: false,
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        alert("Bus aded " + resp.apiError.sErrorMessage);
                        location.reload(true);
                    } else {
                        // hide loader
                        alert(resp.apiError.sErrorMessage );
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
        }
    }
);
});

 


   