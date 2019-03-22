(function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;
	const videoConstraints = {};
	const button = document.getElementById('button');
	const zoomIn = document.getElementById("ZoomIn"),
		  zoomOut = document.getElementById("ZoomOut");
	var zoom = 1;



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
  	navigator.mediaDevices.enumerateDevices().then(gotDevices);

	button.addEventListener('click', event => {
	  if (typeof currentStream !== 'undefined') {
	    stopMediaTracks(currentStream);
	  }
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
	.then(function(mediaStream){
		video.srcObject = mediaStream; 
		video.onloadedmetadata = function(e){ 
			//video.play();
		}; 
		  
	 })
    .catch(error => {
      console.error(error);
		});

	});

	video.addEventListener('' , function(){
		draw(this, context, 400, 300); 

	}, false);

	zoomIn.addEventListener('click', event =>{
		zoom = zoom + 1;
     	document.getElementById("video").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';
		//drawZoomIn(video, context, 400, 300); 
		//draw(video, context, 400, 300); 
	});

	zoomOut.addEventListener('click', event =>{
     zoom = zoom - 1;
     document.getElementById("video").style['WebkitTransform'] = 'scale('+zoom+', '+zoom+')';
	});

	function draw(video, context, width, height){ 
		context.drawImage(video, 0, 0, width, height);
		setTimeout(draw, 10, video, context, width, height);
	}










})();