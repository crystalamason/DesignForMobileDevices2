//JavaScript


if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
          console.log('Service worker registered successfully');
        }).catch(function(err) {
          console.log('Service worker registration failed: ', err);
        });
}


function staffordMap() {
    var uluru = {lat: 52.803616, lng: -2.115849400000002};
    var map = new google.maps.Map(document.getElementById('mapStafford'), {
          zoom: 17,
          center: uluru
    });
    var image = "images/googleMarker.png";
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}

function stokeMap() {
    var uluru = {lat: 53.025075, lng: -2.1929712999999538};
    var map = new google.maps.Map(document.getElementById('mapStoke'), {
          zoom: 17,
          center: uluru
    });
    var image = "images/googleMarker.png";
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}

function tamworthMap() {
    var uluru = {lat: 52.6321433, lng: -1.6904769000000215};
    var map = new google.maps.Map(document.getElementById('mapTamworth'), {
          zoom: 17,
          center: uluru
    });
    var image = "images/googleMarker.png";
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}

var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('whereAmI'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 17
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
}