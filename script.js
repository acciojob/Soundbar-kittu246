//your JS code here. If required.
let playButtons = document.getElementsByClassName("btn");
let stpButton = document.getElementById("stop");

let audioPlay = document.getElementById("audio");

function playMusic (){
    audioPlay.play();
}

function stopMusic (){
    audioPlay.pause();
}

for(let i=0;i<playButtons.length;i++){
    playButtons[i].addEventListener("click",playMusic);
}

stpButton.addEventListener("click",stopMusic);