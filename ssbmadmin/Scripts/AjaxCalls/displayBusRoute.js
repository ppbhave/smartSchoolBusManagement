$(function () {
    var mapOptions = {
        center: new google.maps.LatLng(17.0117, 73.3363),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var markers = [];
    var uniqueId = 1;
    var marker, dummyMarker; var lat = []; var long = []; var startLat = "", startLong = "", stopLat = "", stopLong = "";
    var location;
    var instructions = document.getElementById("instructions");
    var busPK = parseInt(sessionStorage.getItem("busPK"));
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        nBusId: busPK
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBusById",
        async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                document.getElementById("RegNo").innerHTML=resp.sRegNo;
            }else {alert(resp.apiError.sErrorMessage);}
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
    markers = displayMapAndRoutes(markers, map);
    $("#AddNewRoute").click(function () {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        } markers = [];
        var endpoints = 0;
        var defaultDisplay = document.getElementById("AddNewRoute").style.display;
        document.getElementById("FormRoute").style.display = defaultDisplay;
        document.getElementById("tripdiv").style.display = defaultDisplay;
        document.getElementById("AddNewRoute").style.display = "none";
       
        var uniqueId = 1;
        var marker, dummyMarker; var lat = []; var long = []; var startLat="", startLong="", stopLat="", stopLong="";
        var location;
        var instructions = document.getElementById("instructions");
   
        instructions.innerHTML = "*First Specify a Route Start and Stop locations respectively.";
     
   
        //Attach click event handler to the map.
        google.maps.event.addListener(map, 'click', function (e) {
            location = e.latLng;
            if (lat.length <= 0 || lat[0] == 0) {
                //Create a marker and placed it on the map.
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
                lat[0] = parseFloat(location.lat());
                long[0] = parseFloat(location.lng());
                google.maps.event.addListener(marker, "click", function (e) {
                    lat[0] = 0;
                    long[0] = 0;
                    this.setMap(null);
                    instructions.innerHTML = "*First Specify a Route Start and Stop locations respectively.";
                    instructions.style.color = "red";
                });
                markers.push(marker);
            }
            else if (lat.length == 1 || lat[1] == 0) {
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
                lat[1] = parseFloat(location.lat()); long[1] = parseFloat(location.lng());
                instructions.innerHTML = "*Now add the remaining stopages one by one.";
                instructions.style.color = "blue";
                markers.push(marker);
                google.maps.event.addListener(marker, "click", function (e) {
                    lat[1] = 0;
                    long[1] = 0;
                    this.setMap(null);
                    instructions.innerHTML = "*First Specify a Route Start and Stop locations respectively.";
                    instructions.style.color = "red";
                });
                
            }
            else {
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                    }
                });
                //Add marker to the array.
                lat.push(parseFloat(location.lat()));
                long.push(parseFloat(location.lng()));
                markers.push(marker);
                google.maps.event.addListener(marker, "click", function (e) {
                    lat[lat.indexOf(parseFloat(location.lat()))] = 0;
                    long[long.indexOf(parseFloat(location.lng()))] = 0;
                    this.setMap(null);
                });

            }
        });

        $("#FormRoute").click(function () {
            if (lat.length < 2 || lat[0] * lat[1] == 0 || busPK == "" ||document.getElementById("trip").value=="" ) { alert("First specify start-stop loations, the round and the bus to be assigned"); return; }
            var g_urlPrefix = "http://localhost:59206/";
            if (lat.length >= 2) {
                var stoplat = [], stoplong = [];
                for (i = 0; i < lat.length; i++)
                {
                    if(lat[i]!=0 || long[i]!=0)
                    {
                        stoplat.push(lat[i]); stoplong.push(long[i]);
                    }
                }
                var data = {
                    nBusFk: parseInt(busPK),
                    rLat1: stoplat[0],
                    rLong1: stoplong[0],
                    rLat2: stoplat[1],
                    rLong2: stoplong[1],
                    stopaLats: stoplat,
                    stopaLongs: stoplong,
                    sTripDetail: document.getElementById("trip").value,
                };

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TRoutes/AddRoute",
                    //async: false,
                    data: data,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                        
                            alert("New Route added with the selected bus.\nAdd more routes or go to next page.");
                            for (var i = 0; i < markers.length; i++)
                            {
                                markers[i].setMap(null);
                            }
                            markers = [];
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
        });
       
    });
});

function displayMapAndRoutes(markers, map) {
        var g_urlPrefix = "http://localhost:59206/";

        var location, marker, count = 0;
        var data = { nBusId: parseInt(sessionStorage.getItem("busPK")) };
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
                            var thisroute = resp.liRoute[i];
                            if (thisroute.stopages != null && thisroute.stopages.length > 0) {
                                //for (var j = 0; j < thisroute.stopages.length; j++) 
                                thisroute.stopages.forEach(function (stop, j) {

                                    location = new google.maps.LatLng(parseFloat(stop.rStoplat), parseFloat(stop.rStopLong));
                                    if (stop.rStoplat == thisroute.rLat1 && stop.rStopLong == thisroute.rLong1 || stop.rStoplat == thisroute.rLat2 && stop.rStopLong == thisroute.rLong2) {
                                         marker = new google.maps.Marker({
                                            position: location,
                                            map: map,
                                            icon: {
                                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                            }
                                         });
                                         markers.push(marker);
                                         google.maps.event.addListener(marker, "click", function (e) {
                                             var content = "The Route: " + thisroute.n;
                                             if (stop.rStoplat == thisroute.rLat1 && stop.rStopLong == thisroute.rLong1) { content += "<Startpoint>"; }
                                             else if (stop.rStopLong == thisroute.rLong2) { content += "<Stop Point>"; }
                                             content += "\n Round:" + thisroute.sTripDetail;
                                             var infoWindow = new google.maps.InfoWindow({
                                                 content: content
                                             });
                                             infoWindow.open(map, this);
                                             marker.nStopId = stop.nStopId;
                                             marker.n = thisroute.n;
                                             marker.setMap(map);
                                             
                                         });
                                    }
                                    else {
                                         marker = new google.maps.Marker({
                                            position: location,
                                            map: map,
                                            icon: {
                                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                            }
                                         });
                                         markers.push(marker);
                                         google.maps.event.addListener(marker, "click", function (e) {
                                             var content = "The Route: " + thisroute.n;
                                             if (stop.rStoplat == thisroute.rLat1 && stop.rStopLong == thisroute.rLong1) { content += "<Startpoint>"; }
                                             else if (stop.rStopLong == thisroute.rLong2) { content += "<Stop Point>"; }
                                             content += "\n Round:" + thisroute.sTripDetail;
                                             var infoWindow = new google.maps.InfoWindow({
                                                 content: content
                                             });
                                             infoWindow.open(map, this);
                                             marker.nStopId = stop.nStopId;
                                             marker.n = thisroute.n;
                                             marker.setMap(map);
                                             
                                         });
                                    }
                                });
                            }
                        });
                    }

                } else { alert(resp.apiError.sErrorMessage); }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });
        return markers;
    }
