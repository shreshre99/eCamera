

var constraints = { video: { deviceId: "37acb87543cb1690b5859a5372d2dabd6c9318cc5916505c584fe0c58d847569" }, audio: false };

var zoom = 1, 
    rotate = 0; 


var stage = document.getElementById('stage'),
    v = document.getElementsByTagName('video')[0],
    controls = document.getElementById('controls');


var properties = ['transform', 'WebkitTransform', 'MozTransform',
                 'msTransform', 'OTransform'],
    prop = properties[0];

/* Iterators and stuff */    
var i,j,t;
  
/* Find out which CSS transform the browser supports */
for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      break;
    }
}



const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;

    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
