

var constraints = { video: { deviceId: "37acb87543cb1690b5859a5372d2dabd6c9318cc5916505c584fe0c58d847569" }, audio: false };
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
