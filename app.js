//WORK ON COMING UP WITH SCRIPT TO FIND OUT THE DEVICEid
// Define constants

const zoomIn = document.querySelector("#ZoomIn"),
zoomOut = document.querySelector("#ZoomOut")
var zoom = 1;

    
const video = document.getElementById('video');
const button = document.getElementById('button');
const select = document.getElementById('select');
const stage = document.getElementById('stage');


var canvas = document.getElementById('c');
var context = canvas.getContext('2d');
var cw = Math.floor(canvas.clientWidth / 100);
var ch = Math.floor(canvas.clientHeight / 100);
canvas.width = cw;
canvas.height = ch;

function draw(v,c,w,h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}


function stopMediaTracks(stream) {
  stream.getTracks().forEach(track => {
    track.stop();
  });
}

function gotDevices(mediaDevices) {
  select.innerHTML = '';
  select.appendChild(document.createElement('option'));
  let count = 1;
  mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  });
}


button.addEventListener('click', event => {
  if (typeof currentStream !== 'undefined') {
    stopMediaTracks(currentStream);
  }
  const videoConstraints = {};
  if (select.value === '') {
    videoConstraints.facingMode = 'environment';
  } else {
    videoConstraints.deviceId = { exact: select.value };
  }
  const constraints = {
    video: videoConstraints,
    audio: false
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      currentStream = stream;
    draw(v,context,cw,ch);      
    return navigator.mediaDevices.enumerateDevices();
    })
    .then(gotDevices)
    .catch(error => {
      console.error(error);
    });
});

navigator.mediaDevices.enumerateDevices().then(gotDevices);

zoomIn.onclick = function() {
   zoom = zoom + 1;
     document.getElementById('video').style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';

};



// DEVICEID = "8783fc9463d9e905415a7b7c73e60b04f4b4ebbb138c05348499bf43a5bee033";
// var constraints = { video: { deviceId: DEVICEID }, audio: false };
// var zoom = 1;

// function cameraStart() {
//     navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then(function(stream) {
//         track = stream.getTracks()[0];
//         cameraView.srcObject = stream;
//     })
//     .catch(function(error) {
//         console.error("Oops. Something is broken.", error);
//     });
// }
// // Take a picture when cameraTrigger is tapped
// zoomIn.onclick = function() {
//     zoom = zoom + 1;
//     document.getElementById("camera--view").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';

// };

// zoomOut.onclick = function() {

//     zoom = zoom - 1;

//     document.getElementById("camera--view").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';
// }
// // Start the video stream when the window loads
// window.addEventListener("load", cameraStart, false);



/*Third party cloud based systems - redcap (duke used to have it) → data transfer system where you can save/upload/pull from the database system that they already have
Firebase (if not encrypted) multiple cloud → webapp development platform, nodejs SDK, NPM bundler
Appjs → building desktop applications (just HTML, nodejs, etc) ---> if nodejs, it should be able to incorporate API’s
*/
