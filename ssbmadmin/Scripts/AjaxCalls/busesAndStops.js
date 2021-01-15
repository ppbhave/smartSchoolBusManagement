$(function () {
    

    //*************************************getting session variables

    var studentPK = sessionStorage.getItem("studentPK");
    var studBusPK = sessionStorage.getItem("studBusPK");
    var uplocation = sessionStorage.getItem("uplatlng");
    var downlocation = sessionStorage.getItem("downlatlng");
    var upStopId=sessionStorage.getItem("upStopId");
    var downStopId = sessionStorage.getItem("downStopId");

    //**************************************** check if page accesssed in correct order.
    if (studentPK == "") { alert("student not selected"); return; }

    //***************************************eclaring the global variables
    var Class, tripdetailUp, tripdetailDown, busup, busdown;

    //********************************getting the class and seting trip details
    if (studentPK == "") { return; }
    else {
        var g_urlPrefix = "http://localhost:59206/";
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

    //**************************getting the buses for the relation
    if (studentPK== "") { return; }
    else{
    var data = {
        nEntityId: studentPK
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetBusStud",
        //async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                document.getElementById("nBusFkup").value = resp.nBusFKup;
                document.getElementById("nBusFkdown").value = resp.nBusFKdown;
                busup = resp.nBusFKup;
                busdown = resp.nBusFKdown;
            }
            else {
                alert(resp.apiError.sErrorMessage);
                busup = "";
                busdown = "";
                document.getElementById("nBusFkup").value = "";
                document.getElementById("nBusFkdown").value = "";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
        });
  }
    // ************************data operations and initialisation variables
    var  instructions = document.getElementById("instructions");
    var g_urlPrefix = "http://localhost:59206/";
    
    // ****************************************map variables
    var mapOptions = {
        center: new google.maps.LatLng(17.0117, 73.3363),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var markersup = [], markersdown = [], marker, location, markerup,markerdown;
    if (uplocation != "") {
        var latln = uplocation.split("|");
        var location = new google.maps.LatLng(parseFloat(latln[0]), parseFloat(latln[1]));
        markerup = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
                url: "http://maps.google.com/mapfiles/kml/paddle/P.png"
            }
        });
        markerup.nStopId=upStopId;
        google.maps.event.addListener(markerup, "click", function (e) {
            var content = "Pick-stop for bus: " + markerup.position.lat() + "|" + markerup.position.lng();
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            infoWindow.open(map, markerup);
        });
    }
    if (downlocation != "") {
        var latln = downlocation.split("|");
        var location = new google.maps.LatLng(parseFloat(latln[0]), parseFloat(latln[1]));
        markerdown = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
                url: "http://maps.google.com/mapfiles/kml/paddle/D.png"
            }
        });
        markerdown.nStopId = downStopId;
        google.maps.event.addListener(markerup, "click", function (e) {
            var content = "Drop-stop for bus: " + markerdown.position.lat() + "|" + markerdown.position.lng();
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            infoWindow.open(map, markerdown);
        });
    }

    $("#nBusFkup").prop("disabled", true);
    $("#nBusFkdown").prop("disabled", true);
   

    //************************************************pressed the upstop change button 
    $("#changeUp").click(function () {

        $("#nBusFkup").prop("disabled", false);
        document.getElementById("nBusFkup").value = "";
        $("#nBusFkdown").prop("disabled", true);
        document.getElementById("dbus").style.display = "none";
        alert("select the home-school bus first then proceed next");
        if(markerup!= undefined)
        markerup.setMap(null);
        document.getElementById("changeUp").style.display = "none";
        document.getElementById("changeDown").style.display = "";
        instructions.innerHTML = "*select from the given stops or click to add new stop to route";

    });

    $("#changeDown").click(function () {

        $("#nBusFkdown").prop("disabled", false);
        document.getElementById("nBusFkdown").value = "";
        $("#nBusFkup").prop("disabled", true);
        document.getElementById("ubus").style.display = "none";
        document.getElementById("dbus").style.display = "";
        alert("select the school-home bus first, then press update to final edit.");
        if (markerdown != undefined)
        markerdown.setMap(null);
        document.getElementById("updateBusStops").style.display = "";
        document.getElementById("changeDown").style.display = "none";

    });

    //******************************* function to display routes according to buses.
    $("#nBusFkup").change(function () {      
        busup = document.getElementById("nBusFkup").value;

        // markersup = showRoute(tripdetailUp, markersup, busup, map);
        var g_urlPrefix = "http://localhost:59206/";
        for (var i = 0; i < markersup.length; i++)
        { markersup[i].setMap(null); }

       
        var data = {
            nBusId: parseInt(busup)
        };
        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TRoutes/getRoutesForBus",
            async: false,
            data: data,
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                    if (resp.liRoute != null && resp.liRoute.length > 0) {
                        resp.liRoute.forEach(function (thisroute, i) {
                            if (thisroute.sTripDetail == tripdetailUp) {

                                if (thisroute.stopages != null && thisroute.stopages.length > 0) {
                                    //for (var j = 0; j < thisroute.stopages.length; j++) 
                                    thisroute.stopages.forEach(function (stop, j) {
                                        location = new google.maps.LatLng(parseFloat(stop.rStoplat), parseFloat(stop.rStopLong));
                                        if (stop.rStoplat == thisroute.rLat1 && stop.rStopLong == thisroute.rLong1 || stop.rStoplat == thisroute.rLat2 && stop.rStopLong == thisroute.rLong2) {
                                            var marker = new google.maps.Marker({
                                                position: location,
                                                map: map,
                                                icon: {
                                                    url: "http://maps.google.com/mapfiles/kml/paddle/blu-circle.png"
                                                }
                                            });
                                        }
                                        else {
                                            var marker = new google.maps.Marker({
                                                position: location,
                                                map: map,
                                                icon: {
                                                    url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
                                                }
                                            });
                                        }
                                        marker.nStopId = stop.nStopId;
                                        marker.n = thisroute.n;
                                        marker.setMap(map);
                                        markersup.push(marker);
                                    });

                                    google.maps.event.addListener(map, 'click', function (e) {
                                        marker = new google.maps.Marker({
                                            position: e.latLng,
                                            map: map,
                                            icon: {
                                                url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
                                            }
                                        });
                                        marker.n = thisroute.n;
                                        marker.setMap(map);
                                        markersup.push(marker);
                                        marker.nStopId = addstops(markersup[markersup.length - 1].n, e.latLng.lat(), e.latLng.lng());
                                        UpStopId = marker.nStopId;
                                        alert("UpStop changed to: " + e.latLng);

                                    });
                                }
                            }
                        });
                    }
                }
                else { alert(resp.apiError.sErrorMessage); }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });



        if (markersup.length <= 0) alert("The selected bus does not go for the home-school round.");
        var mark = null;
        for (var i = 0; i < markersup.length; i++) {

            google.maps.event.addListener(markersup[i], "click", function (e) {
                mark = this;
                upStopId = mark.nStopId;
                alert("UpStop changed to: " + e.latLng);
            });
        } 
       
    });
    $("#nBusFkdown").change(function () {
 
        busdown = document.getElementById("nBusFkdown").value;


        // markersdown = showRoute(tripdetailDown, markersdown, busup, map);
        var g_urlPrefix = "http://localhost:59206/";
        var markers = markersup;
        for (var i = 0; i < markersup.length; i++)
        { markersup[i].setMap(null); }
       
        var data = {
            nBusId: parseInt(busdown)
        };
        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TRoutes/getRoutesForBus",
            async: false,
            data: data,
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                    if (resp.liRoute != null && resp.liRoute.length > 0) {
                        resp.liRoute.forEach(function (thisroute, i) {
                            if (thisroute.sTripDetail == tripdetailDown) {

                                if (thisroute.stopages != null && thisroute.stopages.length > 0) {
                                    //for (var j = 0; j < thisroute.stopages.length; j++) 
                                    thisroute.stopages.forEach(function (stop, j) {
                                        location = new google.maps.LatLng(parseFloat(stop.rStoplat), parseFloat(stop.rStopLong));
                                        if (stop.rStoplat == thisroute.rLat1 && stop.rStopLong == thisroute.rLong1 || stop.rStoplat == thisroute.rLat2 && stop.rStopLong == thisroute.rLong2) {
                                            var marker = new google.maps.Marker({
                                                position: location,
                                                map: map,
                                                icon: {
                                                    url: "http://maps.google.com/mapfiles/kml/paddle/blu-circle.png"
                                                }
                                            });
                                        }
                                        else {
                                            var marker = new google.maps.Marker({
                                                position: location,
                                                map: map,
                                                icon: {
                                                    url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
                                                }
                                            });
                                        }
                                        marker.nStopId = stop.nStopId;
                                        marker.n = thisroute.n;
                                        marker.setMap(map);
                                        markersdown.push(marker);
                                    });

                                    google.maps.event.addListener(map, 'click', function (e) {
                                        marker = new google.maps.Marker({
                                            position: e.latLng,
                                            map: map,
                                            icon: {
                                                url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
                                            }
                                        });
                                        marker.n = thisroute.n;
                                        marker.setMap(map);
                                        markersdown.push(marker);
                                        marker.nStopId = addstops(markersdown[markersdown.length - 1].n, e.latLng.lat(), e.latLng.lng());
                                        downStopId = marker.nStopId;
                                        alert("DownStop changed to: " + e.latLng);

                                    });
                                }
                            }
                        });
                    }
                }
                else { alert(resp.apiError.sErrorMessage); }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });


        if (markersdown.length <= 0) alert("The selected bus does not go for the school-home round.");

        for (var i = 0; i < markersdown.length; i++) {

            google.maps.event.addListener(markersdown[i], "click", function (e) {
                mark = this;
                    downStopId = mark.nStopId;
                    alert("Downstop changed to: " + e.latLng);
            });
        }
    });
   
    $("#updateBusStops").click(function () {
        if (studBusPK == "") {
            var data = {
                nEntityId: parseInt(new Array(studentPK)),
                nBusFKup: parseInt(busup),
                nBusFKdown: parseInt(busdown),
                nStopUp: parseInt(upStopId),
                nStopDown: parseInt(downStopId)
            };
            var g_urlPrefix = "http://localhost:59206/";
            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TEntity/MapStudBus",
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        alert("New Student mapped to the service");
                        window.close();

                    } else { alert(resp.apiError.sErrorMessage); }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
        }
        else {
                var data = {
                    nEntityId: parseInt(studentPK),
                    nBusFKup: parseInt(busup),
                    nBusFKdown: parseInt(busdown),
                    nStopUp: parseInt(upStopId),
                    nStopDown: parseInt(downStopId)
                };
                var g_urlPrefix = "http://localhost:59206/";
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TEntity/updateStudBus",
                    data: data,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                            alert("Student assigned tosecified buses and specified stops.");
                           window.close();

                        } else { alert(resp.apiError.sErrorMessage); }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                    }
                });
            }
    });

});




function addstops(nRouteId, lat, long) {
    var g_urlPrefix = "http://localhost:59206/";
    var stopid;
    var data = {
        nRouteFK: parseInt(nRouteId),
        lats: parseFloat(lat),
        longs: parseFloat(long)
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TRoutes/AddStop",
        async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                alert("New Stop added");
                stopid = resp.n;
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
    return stopid;
}
