//WORK ON COMING UP WITH SCRIPT TO FIND OUT THE DEVICEid

var constraints = { video: { deviceId: "8B8AD18E-2C5E-F9F9-7D35-311F363872B8" }, audio: false };
var zoom = 1;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    zoomIn = document.querySelector("#ZoomIn"),
    zoomOut = document.querySelector("#ZoomOut")
// Access the device camera and stream to cameraView
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
