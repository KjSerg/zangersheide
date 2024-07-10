var stylers = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#193341"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2c5a71"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "color": "#29768a"
    }, {
        "lightness": -37
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#406d80"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#406d80"
    }]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#3e606f"
    }, {
        "weight": 2
    }, {
        "gamma": 0.84
    }]
}, {
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ffffff"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
        "weight": 0.6
    }, {
        "color": "#1a3541"
    }]
}, {
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2c5a71"
    }]
}];
export function mapBuilder() {
    if ($("#map").length > 0) {
        var mapElement = document.getElementById('map'),
            map1Latitude = mapElement.getAttribute('data-latitude'),
            map1Longtitude = mapElement.getAttribute('data-longitude');
        var mapOptions = {
            center: new google.maps.LatLng(map1Latitude, map1Longtitude),
            zoom: 11,
            disableDefaultUI: true,
            zoomControl: true,
            styles: stylers
        };
        var sb_map = new google.maps.Map(mapElement, mapOptions);
        var locations = [['', map1Latitude, map1Longtitude, mapPin]];
        var marker, link;

        for (var i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                icon: locations[i][3],
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: sb_map,
                title: locations[i][0]
            });
            link = '';
        }
    }
}
