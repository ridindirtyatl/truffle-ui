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

  var scale = d3.scaleTime().domain([new Date(2016, 6, 1, 0), new Date(2017, 1, 6, 0)]).range([0,1000])

  var updateDateTime = function(e) {
    var sliderVal = e.target.value;
    var datetime = scale.invert(sliderVal);

    fetchData(datetime);
  }

  var updateLabel = function(e) {
    var sliderVal = e.target.value;
    var datetime = scale.invert(sliderVal);

    datetimeValEl.innerHTML = datetime;
  }

  sliderEl.addEventListener("change", updateDateTime);
  sliderEl.addEventListener("input", updateLabel);
};