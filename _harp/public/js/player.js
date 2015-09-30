videojs('livePlayer').ready(function() {
  var player = this;
  console.log('this');
  
  if (player.dvrux) {
    player.dvrux({
      "bookendBefore": {
        "startTime": 1443647110000,
        "type": "text",
        "src": "This live event has not yet started"
      },
      "bookendAfter": {
        "startTime": 1443751200000,
        "type": "image",
        "src": "//solutions.brightcove.com/bcls/overlay-image.png"
      }
    });
  }

  // load the video
  player.catalog.getVideo("4521229477001", function(err, video) {
    if (err) {
      // do something here
    }
    else {
      player.catalog.load(video);
    }
  })
});