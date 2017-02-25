// You can instantiate this
var MARTAMap = function() {
  this.mapObj = {};
  this.mapEl = document.getElementById('map');
  this.mapCenter = new google.maps.LatLng(33.775723, -84.388733);
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

MARTAMap.prototype.updateHeatmap = function(busCollection) {
  var heatmapData = [];

  busCollection.forEach(function(bus) {
    heatmapData.push({
      location: new google.maps.LatLng(bus[0][0], bus[0][1]),
      weight: bus[1] * 100 || 1
    });
  });

  this.heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 20,
    maxIntensity: 10000
  });

// HACKKK
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
// end hack

  this.heatmap.setMap(this.mapObj);
}

window.MARTAMap = MARTAMap;