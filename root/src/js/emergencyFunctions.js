function emergencyButtonFermAction(){
    console.log('Switching emergency button - Ferm state');
    if(emergencyFerm){
        emergencyFerm = false;
        changeSourceImage('emergency-button-ferm','assets/PNG/3D_Images/elements/Ferm_popped_out.png');
        disableLevers();
    } else {
        emergencyFerm = true;
        changeSourceImage('emergency-button-ferm','assets/PNG/3D_Images/elements/Ferm_popped_in.png');
        enableLevers();
    }
}

function disableLevers(){
  addClass('lowerL3KeyHolder','disableLever');
  addClass('lowerL4KeyHolder','disableLever');
/*  removeClass('lowerL3KeyHolder','emergency-use');
  removeClass('lowerL4KeyHolder','emergency-use');*/
  changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 white.png');
  ledStateMap.set('led-111','White');
  console.log('LeverC111V3 and LeverC111V1 is now locked');
}

function enableLevers(){
  removeClass('lowerL3KeyHolder','disableLever');
  removeClass('lowerL4KeyHolder','disableLever');
/*  addClass('lowerL3KeyHolder','emergency-use');
  addClass('lowerL4KeyHolder','emergency-use');*/
  changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 Red.png');
  ledStateMap.set('led-111','Red');
  console.log('LeverC111V3 and LeverC111V1 is now unlocked');
}

function emergencyButtonAnnuAction(){
    console.log('Switching emergency button - Annu state');
    if(emergencyAnnu){
        emergencyAnnu = false;
        changeSourceImage('emergency-button-annu','assets/PNG/3D_Images/elements/Annu_popped_out.png');
    } else {
        emergencyAnnu = true;
        changeSourceImage('emergency-button-annu','assets/PNG/3D_Images/elements/Annu_popped_in.png');
    }
}
