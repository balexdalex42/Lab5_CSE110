// explore.js
window.addEventListener('DOMContentLoaded', init);
//img sources
const faceImgSrcs = {
  smile: "assets/images/smiling.png",
  talk: "assets/images/smiling-open.png"
}

//html objects
const synth = window.speechSynthesis;
let selector;
let faceImg;
let button;
let textArea;
let inputStr;
let voices = []; //list of voice objs
let selectedVoice; //will be voice obj selected from the selector
let utterThis;

function init() {
  selector = document.getElementById("voice-select");
  faceImg = document.querySelector("img");
  button = document.querySelector("button");
  textArea = document.getElementById("text-to-speak");
  utterThis = new SpeechSynthesisUtterance(null);
  //initialize voices in synth
  populateVoices();
  //event handlers
  selector.addEventListener("input", function(){
    const name = selector.selectedOptions[0].getAttribute("data-name");//gets selected value
    // console.log(name);
    for(let i = 0; i < voices.length; i++){ //loop through all possible voices
      if(voices[i].name === name)
        selectedVoice = voices[i];
    }
  });

  textArea.addEventListener("input", function(){
    inputStr = textArea.value;
  });

  button.addEventListener("click", function(){
    if(inputStr){
      faceImg.src = faceImgSrcs["talk"];
      utterThis.text = inputStr;
      utterThis.voice = selectedVoice;
      synth.speak(utterThis);
    }
  });

  utterThis.addEventListener("end", function(){
    faceImg.src = faceImgSrcs["smile"];
  })

  synth.addEventListener("voiceschanged", populateVoices);
}

function populateVoices(){
  voices = synth.getVoices();
  // if(!voices.length)
  //   console.log("EMPTY!");
  for(const voice of voices){
    const option = document.createElement("option");
    option.textContent = voice.name + "(" + voice.lang + ")";
    if(voice.default)
      option.textContent += " - DEFAULT";
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    selector.appendChild(option);//adds the option to selector
    // console.log(voices);
  }
}