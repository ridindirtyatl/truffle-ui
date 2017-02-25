function fetchData(dateTime) {
  var baseURL = '';
  // var url = baseURL + '?dateTime=' + encodeURIComponent(dateTime);
  var url = undefined;

  if (url && fetch) {
    fetch(url)
      .then(function(res) {
        myMap.updateHeatmap(res.json);
      })
      .catch(function(err) {
        console.log("FETCH ERROR: ", err);
      })
  }
}

window.initControls = function() {
  var sliderEl = document.getElementById('datetime-selector');
  var datetimeValEl = document.getElementById('datetime-val');

  var scale = d3.scaleTime().domain([new Date(2016, 6, 1, 0), new Date(2016, 6, 7, 0)]).range([0,6])

  var updateDateTime = function(e) {
    var sliderVal = e.target.value;
    var datetime = scale.invert(sliderVal);

    fetchData(datetime);
  }

  var updateLabel = function(e) {
    var sliderVal = e.target.value;
    var datetime = scale.invert(sliderVal);

    var endSubStr = datetime.toString().indexOf('201') + 5;
    var displayString = datetime.toString().substr(0,endSubStr);

    datetimeValEl.innerHTML = displayString;
  }

  sliderEl.addEventListener("change", updateDateTime);
  sliderEl.addEventListener("input", updateLabel);
};