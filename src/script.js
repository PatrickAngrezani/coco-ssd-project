const video = document.getElementById("webcam");
const liveView = document.getElementById("liveView");
const demosSection = document.getElementById("demos");
const enableWebcamButton = document.getElementById("webcamButton");

//check if webcam acces is supported
function getUserMediaSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

//if webcam supported, add events listener to button for when user
//wants to activate it to call enableCam function which we will define
if (getUserMediaSupported()) {
  enableWebcamButton.addEventListener("click", enableCam);
} else {
  console.warn("getUserMedia() is not supprted ny your browser");
}

//enable the live webcam view and star classification
function enableCam(event) {
  //only continue if the COCO-SSD has finished loading
  // if (!model) {
  //   return;
  // }

  //hide the webcam once button is clicked
  event.target.classList.add("removed");

  //getusermedia parameters to force video but not audio
  const constraints = {
    video: true,
  };

  //active the webcam stream
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream;
    video.addEventListener("loadeddata", predictWebcam);
  });

  //placeholder function for next step
  function predictWebcam() {}

  //pretend model has loaded so we can try out the webcam code
  const model = true;
  demosSection.classList.remove("invisible");
}
