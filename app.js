//WORK ON COMING UP WITH SCRIPT TO FIND OUT THE DEVICEid
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    zoomIn = document.querySelector("#ZoomIn"),
    zoomOut = document.querySelector("#ZoomOut")
// Access the device camera and stream to cameraView

var DEVICEID = 0;

#interesting fact right here

navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    if(device.label === "USB2.0 Camera (eb1a:299f)"){
        DEVICEID = device.deviceId;

    }
    else{
        DEVICEID = "B6A9250F-23F7-DCD0-F5D8-A893C0BCB6DA"
    }
  });
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});


var constraints = { video: { deviceId: DEVICEID }, audio: false };
var zoom = 1;

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
// Take a picture when cameraTrigger is tapped
zoomIn.onclick = function() {
    zoom = zoom + 1;
    document.getElementById("camera--view").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';

};

zoomOut.onclick = function() {

    zoom = zoom - 1;

    document.getElementById("camera--view").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';
}
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);



/*Third party cloud based systems - redcap (duke used to have it) → data transfer system where you can save/upload/pull from the database system that they already have
Firebase (if not encrypted) multiple cloud → webapp development platform, nodejs SDK, NPM bundler
Appjs → building desktop applications (just HTML, nodejs, etc) ---> if nodejs, it should be able to incorporate API’s
*/
