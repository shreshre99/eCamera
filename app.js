

var constraints = { video: { deviceId: "37acb87543cb1690b5859a5372d2dabd6c9318cc5916505c584fe0c58d847569" }, audio: false };





const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")


navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {

        const track = mediaStream.getVideoTracks()[0];

        let zoom = document.querySelector('#zoom');
        const capabilities = track.getCapabilities()
        // Check whether zoom is supported or not.
        if (!capabilities.zoom) {
            return;
        }track.applyConstraints({advanced : [{zoom: zoom.value}] });

        cameraView.srcObject = track;


})

/*navigator.mediaDevices.getUserMedia({video: true})
  .then(gotMedia)
  .catch(error => console.error('getUserMedia() error:', error));

function gotMedia(mediaStream) {
  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaStreamTrack);
  console.log(imageCapture);


function cameraStart(mediaStream) {
    /*navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = mediaStream.getTracks()[0];
        cameraView.srcObject = mediaStream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
*/

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
