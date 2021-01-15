

$(function () {
    var studId = sessionStorage.getItem("studentPK");
    var tripdetailUp, tripdetailDown; var Class;
    if (studId == "") { return; }
    else {
        var g_urlPrefix = "http://localhost:59206/";
        var studentPK = parseInt(sessionStorage.getItem("studentPK"));
        var objToPass = {
            nEntityId: parseInt(studentPK)
        }

        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TDetails/GetDetailById",

            data: objToPass,
            async: false,
            success: function (resp2) {
                if (resp2.apiError.jErrorVal == 0) {
                    Class = resp2.sClass.split(" ")[0];
                } else alert(resp2.apiError.sErrorMessage);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });

        if (Class == "LKG" || Class == "UKG" || Class >= 5) {
            tripdetailUp = 1; tripdetailDown = 2
        } else { tripdetailUp = 3; tripdetailDown = 4; }

    }

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
            if (resp.apiError.jErrorVal == 0) {
                var upBus = document.getElementById("nBusFkup");
                var downBus = document.getElementById("nBusFkdown");
                var opt = "", opt2 = "";
                for (var i = 0; i < resp.liBus.length; i++) {
                    var data = {
                        nBusId: parseInt(resp.liBus[i].nBusId)
                    };
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: g_urlPrefix + "TRoutes/getRoutesForBus",

                        data: data,
                        success: function (resp1) {
                            if (resp1.apiError.jErrorVal == 0) {
                                if (resp1.liRoute != null && resp1.liRoute.length > 0) {
                                    resp1.liRoute.forEach(function (thisroute, j) {
                                        if (thisroute.sTripDetail == tripdetailUp) {
                                            opt = opt + '<option value=' + resp.liBus[i].nBusId + '>' + resp.liBus[i].sRegNo + '</option>';
                                            $("#nBusFkup").append(opt);
                                        }
                                        if (thisroute.sTripDetail == tripdetailDown) {
                                            opt = opt + '<option value=' + resp.liBus[i].nBusId + '>' + resp.liBus[i].sRegNo + '</option>';
                                            $("#nBusFkdown").append(opt);
                                        }
                                    });//foreach closed  
                                }
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

});






