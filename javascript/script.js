//JavaScript

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