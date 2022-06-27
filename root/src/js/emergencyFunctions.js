function emergencyButtonFermAction(){
    console.log('Switching emergency button - Ferm state');
    if(emergencyFerm){
        emergencyFerm = false;
        disableLevers();
    } else {
        emergencyFerm = true;
        enableLevers();
    }
}

function disableLevers(){
  changeSourceImage('emergency-box','assets/PNG/3D_Images/elements/emergencyBoxOriginal.jpg');
  addClass('lowerL3KeyHolder','disableLever');
  addClass('lowerL4KeyHolder','disableLever');
/*  removeClass('lowerL3KeyHolder','emergency-use');
  removeClass('lowerL4KeyHolder','emergency-use');*/
  changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 white.png');
  ledStateMap.set('led-111','White');
  console.log('LeverC111V3 and LeverC111V1 is now locked');
}

function enableLevers(){
  changeSourceImage('emergency-box','assets/PNG/3D_Images/elements/emergencyBoxModified.jpg');
  removeClass('lowerL3KeyHolder','disableLever');
  removeClass('lowerL4KeyHolder','disableLever');
/*  addClass('lowerL3KeyHolder','emergency-use');
  addClass('lowerL4KeyHolder','emergency-use');*/
  changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 Red.png');
  ledStateMap.set('led-111','Red');
  console.log('LeverC111V3 and LeverC111V1 is now unlocked');
}