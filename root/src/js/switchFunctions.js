function toggleSwitch(switchId) {
    console.log(switchId);
    if(switchStateMap.get(switchId) == true){
        var switchImageSource = switchSwitchedSourceMap.get(switchId);
        switchStateMap.set(switchId,false);
        changeSourceImage(switchId,switchImageSource);
      switch(switchId){
        case 'switch-z9':
          switchz9On();
          break;
        case 'switch-z11':
          switchz11On();
          break;
        case 'switch-z13':
          switchz13On();
          break;
        case 'switch-z15':
          switchz15On();
          break;
        case 'switch-z17':
          switchz17On();
          break;
        case 'switch-25_4':
          switch25_4On();
          break;
        case 'switch-25_5':
          switch25_5On();
          break;
      }

    } else {
        var defaultImageSource = switchDefaultSourceMap.get(switchId);
        switchStateMap.set(switchId,true);
        changeSourceImage(switchId,defaultImageSource);
      switch(switchId){
        case 'switch-z9':
          switchz9Off();
          break;
        case 'switch-z11':
          switchz11Off();
          break;
        case 'switch-z13':
          switchz13Off();
          break;
        case 'switch-z15':
          switchz15Off();
          break;
        case 'switch-z17':
          switchz17Off();
          break;
        case 'switch-25_4':
          switch25_4Off();
          break;
        case 'switch-25_5':
          switch25_5Off();
          break;
      }
    }
}  

// function switchbpanOn(){
//     changeSourceImage('led-announce','assets/PNG/Announce_Orange.png');
//     var audio = new Audio('assets/SOUND/Ding_Sound_Effect.mp3');
//     audio.play();
// }

// function switchbpanOff(){
//     changeSourceImage('led-announce','assets/PNG/Announce_White.png');
// }

function switchz9On(){
    changeSourceImage('led-announce','assets/PNG/Announce_White.png');
    changeSourceImage('led-zap','assets/PNG/ZAP_Red.png');
}

function switchz9Off(){
    changeSourceImage('led-zap','assets/PNG/ZAP_Orange.png');
}

function switchz11On(){

}

function switchz11Off(){

}

function switchz13On(){
    changeSourceImage('tracklight1','assets/PNG/Z13_Red.png');
    changeSourceImage('led-111','assets/PNG/111_Red.png');
}

function switchz13Off(){
     changeSourceImage('tracklight1','assets/PNG/Z13_Ash.png');
}

function switchz15On(){

}

function switchz15Off(){

}

function switchz17On(){
    changeSourceImage('tracklight3','assets/PNG/Z17_Red.png');
}

function switchz17Off(){
    changeSourceImage('tracklight3','assets/PNG/Z17_Ash.png');
}

function switch25_4On(){

}

function switch25_4Off(){

}

function switch25_5On(){

}

function switch25_5Off(){

}

function turnOnAnnouncement(switchId){
  if(switchStateMap.get(switchId)==true){
    changeSourceImage('led-announce','assets/PNG/Announce_Orange.png');
    var audio = new Audio('assets/SOUND/Ding_Sound_Effect.mp3');
    audio.play(); 
    switchStateMap.set(switchId,false);
  }
}

