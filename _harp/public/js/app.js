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

function checkLiveStream(d) {
  // only show it if after 8:30am on 10/1 PST (of if asked)
  // if (Date.now() >= 1443714300000 || window.location.hash === "#live") {
  //   // show the banner
  //   var liveBannerEl = d.getElementsByClassName('live')[0];
  //   liveBannerEl.classList.remove('hidden');
  // }
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

  // Only show the live banner conditionally not on the live page
  if (window.location.pathname !== '/live.html') 
    checkLiveStream(d);
})(window, document);
