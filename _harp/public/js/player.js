videojs('livePlayer').ready(function() {
  var player = this;
  console.log('this');

  // load the video
  player.catalog.getVideo("4522547367001", function(err, video) {
    if (err) {
      // do something here
    }
    else {
      player.catalog.load(video);
    }
  })
});