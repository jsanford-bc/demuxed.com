(function(w, d) {
  // We want to show the flash notification on the vidtechcon.com domain
  if (w.location.host === 'vidtechcon.com') {
    var flashNotice = d.getElementById('name-change-alert');
    flashNotice.classList.remove("hidden");
  }
})(window, document);
