function fetchData(dateTime) {
  // do ish
}

window.initControls = function() {
  var sliderEl = document.getElementById('datetime-selector');
  var datetimeValEl = document.getElementById('datetime-val');

  var scale = d3.scaleTime().domain([new Date(2016, 6, 1, 0), new Date(2017, 1, 6, 0)]).range([0,1000])

  var updateDateTime = function(e) {
    var sliderVal = e.target.value;
    var datetime = scale.invert(sliderVal)

    fetchData(datetime);
    datetimeValEl.innerHTML = datetime;
  }

  sliderEl.addEventListener("input", updateDateTime);
};