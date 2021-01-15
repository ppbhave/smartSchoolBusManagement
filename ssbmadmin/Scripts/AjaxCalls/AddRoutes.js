$(window).load(function () {
   
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
                google.maps.event.addListener(marker, "click", function (e) {
                    lat[lat.indexOf(parseFloat(location.lat()))] = 0;
                    long[long.indexOf(parseFloat(location.lng()))] = 0;
                    this.setMap(null);
                });

            }
        });

    $("#FormRoute").click(function () {
        if (lat.length<2 || lat[0]*lat[1]==0 || document.getElementById("nBusFkup").value=="") { alert("First specify start-stop loations and the bus to be assigned"); return; }
        var g_urlPrefix = "http://localhost:59206/";
        if (lat.length >= 2) {
            var stoplat = [], stoplong = [];
            for (i = 0; i < lat.legth; i++)
            {
                if(lat[i]!=0 || long[i]!=0)
                {
                    stoplat.push(lat[i]); stoplong.push(long[i]);
                }
            }
            var data = {
                nBusFk: parseInt(document.getElementById("nBusFkup").value),
                rLat1: startLat,
                rLong1: startLong,
                rLat2: stopLat,
                rLong2: stopLong,
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
                        
                        alert("New Route added with the selected bus");
                        window.open("ExistingStudents.aspx", "_self");
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

    