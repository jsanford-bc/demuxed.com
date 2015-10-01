videojs('livePlayer').ready(function() {
  var player = this;
  console.log('this');
  
  if (player.dvrux) {
    player.dvrux({
      "bookendBefore": {
        "startTime": 1443714300000,
        "type": "text",
        "src": "This live event has not yet started"
      },
      "bookendAfter": {
        "startTime": 1443751200000,
        "type": "text",
        "src": "Thank you for watching!"
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