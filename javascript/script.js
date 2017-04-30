//JavaScript

function initMap() {
    var uluru = {lat: 52.803616, lng: -2.115849400000002};
    var map = new google.maps.Map(document.getElementById('mapStafford'), {
          zoom: 4,
          center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}