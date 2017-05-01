//JavaScript

function initMap() {
    var uluru = {lat: 52.803616, lng: -2.115849400000002};
    var map = new google.maps.Map(document.getElementById('mapStafford'), {
          zoom: 17,
          center: uluru
    });
    var image = "https://crystalamason.github.io/DesignForMobileDevices2/images/filmReel";
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}