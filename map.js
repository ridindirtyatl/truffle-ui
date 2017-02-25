// You can instantiate this
var MARTAMap = function() {
  this.mapObj = {};
  this.mapEl = document.getElementById('map');
  this.mapCenter = new google.maps.LatLng(33.775723, -84.388733);
  this.busList = {};
  this.currentTime = '';
};

// This will build the map
MARTAMap.prototype.initMap = function() {
  var opts = {
    panControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    center: this.mapCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.mapObj = new google.maps.Map(this.mapEl, opts);
}

// GO!
window.onload = function() {
  window.myMap = new MARTAMap();
  myMap.initMap();
}