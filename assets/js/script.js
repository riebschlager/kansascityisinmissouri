var map, kcmoInfo, kckInfo, kcmoMarker, kckMarker;
var kcmoGeo = new google.maps.LatLng(39.089104, -94.583733);
var kckGeo = new google.maps.LatLng(39.115604, -94.657134);
var mapCenter = new google.maps.LatLng(39.13, -94.583433);
google.maps.event.addDomListener(window, 'load', init);

function showKCMO() {
    map.panTo(kcmoGeo);
    kcmoInfo.open(map, kcmoMarker);
    kckInfo.close(map, kckMarker);
    $('#kckLink').removeClass('btn-info');
    $('#kcmoLink').addClass('btn-info');
}

function showKCK() {
    map.panTo(kckGeo);
    kckInfo.open(map, kckMarker);
    kcmoInfo.close(map, kcmoMarker);
    $('#kckLink').addClass('btn-info');
    $('#kcmoLink').removeClass('btn-info');
}

function init() {
    kcmoInfo = new google.maps.InfoWindow({
        content: '<h5>Kansas City, <em>Missouri</em></h5>'
    });
    kckInfo = new google.maps.InfoWindow({
        content: '<h5>Kansas City, <em>Kansas</em></h5>'
    });
    kcmoMarker = new google.maps.Marker({
        position: kcmoGeo,
        map: map,
        visible: false
    });
    kckMarker = new google.maps.Marker({
        position: kckGeo,
        map: map,
        visible: false
    });
    var mapOptions = {
        zoom: 13,
        center: mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    kcmoMarker.setMap(map);
    kckMarker.setMap(map);
}