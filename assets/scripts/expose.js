// expose.js
window.addEventListener('DOMContentLoaded', init);

//source lists
const audioSrcList = {
  "air-horn" : "assets/audio/air-horn.mp3",
  "car-horn" : "assets/audio/car-horn.mp3",
  "party-horn" : "assets/audio/party-horn.mp3"
};


const hornImgSrcList = {
  "air-horn" : "assets/images/air-horn.svg",
  "car-horn" : "assets/images/car-horn.svg",
  "party-horn" : "assets/images/party-horn.svg",
  "no-image" : "assets/images/no-image.png"
}

const volImgSrcList = {
  mute: "assets/icons/volume-level-0.svg",
  low: "assets/icons/volume-level-1.svg",
  med: "assets/icons/volume-level-2.svg",
  high: "assets/icons/volume-level-3.svg"
}

//document objects
let selector;
let button;
let volumeSlider;
let hornImg;
let volImg;
let horn;
let audio;
const confetti = new JSConfetti();

function init() {
  //setting up the elements
  hornImg = document.querySelector("main img");
  volImg = document.querySelector("main #volume-controls img");
  selector = document.getElementById("horn-select");
  button = document.querySelector("button");
  volumeSlider = document.querySelector("#volume-controls input");
  audio = document.querySelector("audio.hidden");
  //selecting horn
  selector.addEventListener("input", function(){
    horn = selector.value;
    updateHornImgAudioSrc();
  });
  //sliding volume
  volumeSlider.addEventListener("input", function(){
    let volume = Number(volumeSlider.value); // take the slider value
    console.log(volume);
    adjustVolume(volume);
  });
  //clicking button
  button.addEventListener("click", function(){
    if(audio.src)
      audio.play();
    if(horn === "party-horn")
      shootConfetti();
  });
 
}

function updateHornImgAudioSrc(){
  hornImg.src = hornImgSrcList[horn];
  audio.src = audioSrcList[horn];
}

function adjustVolume(volume){
  let volPercent = volume / 100;
  //set volume
  audio.volume = volPercent;
  if(volume > 66){
    volImg.src = volImgSrcList["high"];
  }
  else if(volume > 33){
    volImg.src = volImgSrcList["med"];
  }
  else if(volume > 0){
    volImg.src = volImgSrcList["low"];
  }
  else{
    volImg.src = volImgSrcList["mute"];
  }
}

function shootConfetti(){
  confetti.addConfetti();
  // confetti.clearCanvas();
}