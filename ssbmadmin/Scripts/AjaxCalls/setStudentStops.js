$(window).load(function () {
    var markers = [];
    var mapOptions = {
        center: new google.maps.LatLng(17.0117, 73.3363),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var uniqueId = 1;
        //Attach click event handler to the marker.
        google.maps.event.addListener(marker, "click", function (e) {
            var content = 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng();
            content += "<br /><input type = 'button' value = 'Delete' onclick = 'DeleteMarker(" + marker.id + ");' value = 'Delete' />";
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            infoWindow.open(map, marker);
        });

        //Add marker to the array.
        markers.push(marker);
    
$("#deleteMark").click(function () {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);

            //Remove the marker from array.
            markers.splice(i, 1);
            return;
        }
    }
});
})
