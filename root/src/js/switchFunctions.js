function toggleSwitch(switchId) {
    console.log('Switch ID: ' + switchId);
    if(switchStateMap.get(switchId) == true){
      console.log('Switch is turned off. Turning on now');
        var switchImageSource = switchSwitchedSourceMap.get(switchId);
        switchStateMap.set(switchId,false);
        changeSourceImage(switchId,switchImageSource);
      switch(switchId){
        case 'switch-z9':
          switchZ9On();
          break;
      }

    } else {
        console.log('Switch is turned on. Turning off now');
        var defaultImageSource = switchDefaultSourceMap.get(switchId);
        switchStateMap.set(switchId,true);
        changeSourceImage(switchId,defaultImageSource);
      switch(switchId){
        case 'switch-z9':
          switchZ9Off();
          break;
      }
    }
}  

function switchZ9On(){
    changeSourceImage('led-annonce','assets/PNG/Annonce_White.png');
    ledStateMap.set('led-annonce','White');
    changeSourceImage('led-zap','assets/PNG/ZAP_Red.png');
    ledStateMap.set('led-zap','Red');
    if($("#train").css("visibility") == "visible")
      moveTrainForward('train',trainLocationsMap.get('Z9')[0]);
}


function switchZ9Off(){
    changeSourceImage('led-zap','assets/PNG/ZAP_Orange.png');
    ledStateMap.set('led-zap','Orange');
}

function turnOnAnnouncement(){
  console.log(ledStateMap.get('led-annonce'));
  if(ledStateMap.get('led-annonce')=='White'){
    changeSourceImage('led-annonce','assets/PNG/Annonce_Orange.png');
    var audio = new Audio('assets/SOUND/Ding_Sound_Effect.mp3');
    audio.play(); 
    ledStateMap.set('led-annonce','Orange');
  }
}

