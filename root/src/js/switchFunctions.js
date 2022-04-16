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
        case 'switch-z11':
          switchZ11On();
          break;
        case 'switch-z13':
          switchZ13On();
          break;
        case 'switch-z15':
          switchZ15On();
          break;
        case 'switch-z17':
          switchZ17On();
          break;
        case 'switch-25_4':
          switch25_4On();
          break;
        case 'switch-25_5':
          switch25_5On();
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
        case 'switch-z11':
          switchZ11Off();
          break;
        case 'switch-z13':
          switchZ13Off();
          break;
        case 'switch-z15':
          switchZ15Off();
          break;
        case 'switch-z17':
          switchZ17Off();
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

function switchZ9On(){
    changeSourceImage('led-annonce','assets/PNG/Annonce_White.png');
    ledStateMap.set('led-annonce','White');
    changeSourceImage('led-zap','assets/PNG/ZAP_Red.png');
    ledStateMap.set('led-zap','Red');
    moveTrainForward('train','25.5vw');
}


function switchZ9Off(){
    changeSourceImage('led-zap','assets/PNG/ZAP_Orange.png');
    ledStateMap.set('led-zap','Orange');
}

function switchZ11On(){
  moveTrainForward('train','32vw');
}

function switchZ11Off(){

}

function switchZ13On(){
    changeSourceImage('tracklight1','assets/PNG/Z13_Red.png');
    ledStateMap.set('tracklight1','Red');
    changeSourceImage('led-111','assets/PNG/111_Red.png');
    ledStateMap.set('led-111','Red');
    moveTrainForward('train','40vw');
}

function switchZ13Off(){
     changeSourceImage('tracklight1','assets/PNG/Z13_Ash.png');
     ledStateMap.set('tracklight1','Ash');
}

function switchZ15On(){
  moveTrainForward('train','51vw');
}

function switchZ15Off(){

}

function switchZ17On(){
  changeSourceImage('tracklight3','assets/PNG/Z17_Red.png');
  ledStateMap.set('tracklight3','Red');
  var trainObj = document.getElementById('train');
  var timeoutSetting = 0;
  if(trainObj.style.left > '46vw' && trainObj.style.top < '6vw'){
    console.log('Train has already passed Zone 13 on another route. Cannot go to 25_4 anymore.');
  } else {
    if(trainObj.style.left > '46vw'){
      moveTrainForward('train','51vw');
    } else if (trainObj.style.top < '6vw'){
      if(trainObj.style.left < '46vw'){
        moveTrainForward('train','46vw');      
        timeoutSetting += 800;
      }
      setTimeout(() => {rotateElement('train',-45);},timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {moveTrainForward('train','49.5vw');moveTrainUpward('train','6vw');}, timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {rotateElement('train',0);},timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {moveTrainForward('train','51vw');},timeoutSetting);
    }
  }
}

function switchZ17Off(){
    changeSourceImage('tracklight3','assets/PNG/Z17_Ash.png');
    ledStateMap.set('tracklight3','Ash');
}

function switch25_4On(){
  var trainObj = document.getElementById('train');
  var timeoutSetting = 0;
  if(trainObj.style.left > '46vw' && trainObj.style.top < '6vw'){
    console.log('Train has already passed Zone 13 on another route. Cannot go to 25_4 anymore.');
  } else {
    if(trainObj.style.left > '46vw'){
      moveTrainForward('train','62vw');
    } else if (trainObj.style.top < '6vw'){
      if(trainObj.style.left < '46vw'){
        moveTrainForward('train','46vw');      
        timeoutSetting += 800;
      }
      setTimeout(() => {rotateElement('train',-45);},timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {moveTrainForward('train','49.5vw');moveTrainUpward('train','6vw');}, timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {rotateElement('train',0);},timeoutSetting);
      timeoutSetting += 800;
      setTimeout(() => {moveTrainForward('train','62vw');},timeoutSetting);
    }
  }
}

function switch25_4Off(){

}

function switch25_5On(){
  if(document.getElementById('train').style.top < '6vw'){
    moveTrainForward('train','62vw');
  } else{
    console.log('Train has already passed Zone 13 on another route. Cannot go to 25_4 anymore.');
  }
}

function switch25_5Off(){

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

