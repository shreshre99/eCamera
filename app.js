

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

if(controls){
    controls.innerHTML =  '<button class="play">play</button>'+
                          '<div id="change">' +
                            '<button class="zoomin">+</button>' +
                            '<button class="zoomout">-</button>' +
                            '<button class="left">⇠</button>' +
                            '<button class="right">⇢</button>' +
                            '<button class="up">⇡</button>' +
                            '<button class="down">⇣</button>' +
                            '<button class="rotateleft">&#x21bb;</button>' +
                            '<button class="rotateright">&#x21ba;</button>' +
                            '<button class="reset">reset</button>' +
                          '</div>';
  }


function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;


          controls.addEventListener('click',function(e){
    t = e.target;
    if(t.nodeName.toLowerCase()==='button'){

/* Check the class name of the button and act accordingly */    
      switch(t.className){

/* Toggle play functionality and button label */    
        case 'play':
          if(v.paused){
            v.play();
            t.innerHTML = 'pause';
          } else {
            v.pause();
            t.innerHTML = 'play';
          }
        break;

/* Increase zoom and set the transformation */
        case 'zoomin':
          zoom = zoom + 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Decrease zoom and set the transformation */
        case 'zoomout':
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Increase rotation and set the transformation */
        case 'rotateleft':
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright':
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;

/* Move video around by reading its left/top and altering it */
        case 'left':
          v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
        break;
        case 'right':
          v.style.left = (parseInt(v.style.left,10) + 5) + 'px';
        break;
        case 'up':
          v.style.top = (parseInt(v.style.top,10) - 5) + 'px';
        break;
        case 'down':
          v.style.top = (parseInt(v.style.top,10) + 5) + 'px';
        break;

/* Reset all to default */
        case 'reset':
          zoom = 1;
          rotate = 0;
          v.style.top = 0 + 'px';
          v.style.left = 0 + 'px';
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
      } 

  }



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
