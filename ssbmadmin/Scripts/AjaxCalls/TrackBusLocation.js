$(function () {
   
    //*************************************getting session variables

    var studentPK = sessionStorage.getItem("studentPK");
    var studBusPK = sessionStorage.getItem("studBusPK");
    var nBusFK; var result = false; var interval,marker=null;
    //***************************************eclaring the global variables
    var Class, tripdetailUp, tripdetailDown, nBusFK;

    // ************************start the map functions
    var mapOptions = {
        center: new google.maps.LatLng(17.0117, 73.3363),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //********************************getting the class and seting trip details
    if (studentPK == "" || studentPK==null) {
        document.getElementById("nBusFK").style.display = "none";
        document.getElementById("bus").style.display = "";
        alert("Select the bus from dropdown to get the instant locaton");
        $("#nBusFkup").change(function () {
            nBusFK = document.getElementById("nBusFkup").value;
            if (marker != null) { marker.setMap(null); marker = null;}
            clearInterval(interval);
            result = true;
            getLocation(nBusFK, map, marker);
        });
    }
    else {
        document.getElementById("nBusFK").style.display = "";
        document.getElementById("bus").style.display = "none";
        if (studBusPK == "" || studBusPK==null) {
            alert("Student not allocated to any bus");
        }

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

        if (studBusPK != "") {
            var data = {
                nEntityId: studentPK
            };
            $.ajax({
                type: "POST",
                dataType: "json",
                url: g_urlPrefix + "TEntity/GetBusStud",
                async: false,
                data: data,
                success: function (resp) {
                    if (resp.apiError.jErrorVal == 0) {
                        
                        busup = resp.nBusFKup;
                        busdown = resp.nBusFKdown;
                        var time730 = new Date();
                        time730.setHours(07, 30, 0);
                        var time1230 = new Date();
                        time1230.setHours(12, 30, 0);
                        var time530 = new Date();
                        time530.setHours(17, 30, 0);
                        var now = new Date();
                        if (now <= time730 && now <= time1230)
                        {
                                nBusFK = resp.nBusFKup;
                        } 
                        else if(now >= time730 && now <= time1230)
                        {
                            if (tripdetailUp == 3) {
                                nBusFK = resp.nBusFKup;
                            }
                            else if(tripdetailUp == 1)
                            {
                                alret("The student belongs to shift 1. He will leave the school around 12.30pm");
                             }
                        }
                        else if (now <=time530 && now >=time1230)
                        {
                            if (tripdetailDown == 2) {
                                nBusFK = resp.nBusFKdown;
                            } else if (tripdetailUp == 3) {
                                alert("The student belongs to shift 2. He will leave the school around 5.30pm");
                            }
                        }
                        else if (now >= time530) {
                            if (tripdetailDown == 2) {
                                alert("The student belongs to shift 1. Buses have completed the round.");
                            } else if (tripdetailDown == 4 ) {
                                nBusFK = resp.nBusFKdown;
                            }
                        }

                        document.getElementById("nBusFkup").value = nBusFK;
                        document.getElementById("nBusFK").innerHtml = nBusFK;
                        getLocation(nBusFK, map, marker);
                    }
                    else { alert(resp.apiError.sErrorMessage); }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(thrownError);
                }
            });
        } else { alert("Bus not allocated for the student."); return; }
    }
   

    
      
});

function  getLocation(nBusFK, map, marker) {

  
    if (marker != null) { marker.setMap(null); }

    if (nBusFK != null || nBusFK != "" && result) {
        var data = {
            nBusFK: parseInt(nBusFK)
        };
        var g_urlPrefix = "http://localhost:59206/";
        if (marker != null) { marker.setMap(null); }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TBus/getBusLocationArray",
            async: false,
            data: data,
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                    var i = 0;
                    interval = setInterval(function () {
                        if (i < resp.rLat.length) {
                            if (marker != null) { marker.setMap(null); }
                            var location = new google.maps.LatLng(parseFloat(resp.rLat[i] + ""), parseFloat(resp.rLong[i] + ""));
                            marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                icon: {
                                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                }
                            });
                            google.maps.event.addListener(marker, "click", function (e) {
                                var content = "Bus: " + getRegNo(nBusFK);
                                var infoWindow = new google.maps.InfoWindow({
                                    content: content
                                });
                                infoWindow.open(map, marker);
                            });
                            result = true;
                            i++;
                        }
                    }, 10000);
                } else { alert(resp.apiError.sErrorMessage); result = false; }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
                result = false;
            }
        });
    }
}
function getBusbyId(nBusFK) {
    var regNo;
    var g_urlPrefix = "http://localhost:59206/";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBusById",
        data: { busId: parseInt(nBusFK) },
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                regNo = resp.sRegNo;


            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage + resp.n);

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
    return regNo;
}