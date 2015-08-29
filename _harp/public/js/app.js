function parseQueryParams(params) {
  if (!params) return {};

  // Remove the ?
  params = params.substring(1);

  var splitParams = params.split('&');

  // Turn the params into an object
  var paramsObj = {};
  splitParams.forEach(function(val, i) {
    var splitVal = val.split('=');
    var key = splitVal[0];
    var value = splitVal[1];

    paramsObj[key] = value;
  });

  return paramsObj;
}

(function(w, d) {
  var queryParams = parseQueryParams(window.location.search);

  // We want to show the flash notification on the vidtechcon.com domain
  if (w.location.host === 'vidtechcon.com' || queryParams.vtc === '1') {
    var headerEl = d.getElementsByTagName('header')[0];
    var flashNotice = d.createElement('div');
    flashNotice.classList.add('flash-notice');
    flashNotice.innerText = "You're in the right place, VidTechCon is now Demuxed!";
    d.body.insertBefore(flashNotice, headerEl);
  }
})(window, document);
