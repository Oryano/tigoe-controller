// 1. Run this example to print to console all the sources.
// 2. Determine the ID of the video source you'd like to use.
// 3. Place the ID as a string where it says 'put_desired_source_id_here'.
// 4. Comment in lines 15-21 to set options for the capture.
// 5. (Optional) remove line 14 and lines 29-39 (the gotSources function).
//    They are no longer necessary.

var capture;
var options;

    


function setup() {
  
  // This line triggers a print of all detected input sources.
  // It can be removed after the source ID has been determined.
  MediaStreamTrack.getSources(gotSources);
  
  var options = {
    video: {
      optional: [{
        sourceId: '4738a0a43b8f6aba8e3beb56c4c53ecf1e3701ca166603d150236ac5e1c6023e'
      }]
    }
  };


    // setup canvas
    var cnv = createCanvas(windowWidth, windowHeight);
    //cnv.position(0, 0);
    //do like a mirror = flip it
    cnv.style('transform: rotateY(180deg)');
  // setup camera capture
    capture = createCapture(options);
    capture.size(width, height);
    capture.position(0, 0);
    capture.style('transform: rotateY(180deg)'); //wont be neded when video.hide()
    //videoInput.hide();   

}

// This method can be removed after the source ID has been determined.
function gotSources(sources) {
  for (var i = 0; i !== sources.length; ++i) {
    if (sources[i].kind === 'audio') {
      console.log('audio: '+sources[i].label+' ID: '+sources[i].id);
    } else if (sources[i].kind === 'video') {
      console.log('video: '+sources[i].label+' ID: '+sources[i].id);
    } else {
      console.log('Some other kind of source: ', sources[i]);
    }
  }
}