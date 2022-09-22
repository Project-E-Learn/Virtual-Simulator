function emergencyButtonFermAction() {
  console.log("Switching emergency button - Ferm state");
  if (emergencyFerm) {
    emergencyFerm = false;
    changeSourceImage(
      "emergency-button-ferm",
      "assets/PNG/3D_Images/elements/Ferm_popped_out.png"
    );
    enableLeversnew();
  } else {
    emergencyFerm = true;
    changeSourceImage(
      "emergency-button-ferm",
      "assets/PNG/3D_Images/elements/Ferm_popped_in.png"
    );

    disableLeversnew();
  }
}

function enableLeversnew() {
  removeClass("lowerL3KeyHolder", "disableLever");
  removeClass("lowerL4KeyHolder", "disableLever");
  
  if (switchStateMap.get("switch-z13")) {
    if (leverStateMap.get("lever3C111") && leverStateMap.get("lever4C111")) {
      changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 Red.png");
      ledStateMap.set("led-111", "Red");
      console.log("LeverC111V3 and LeverC111V1 default place 111 red");
    } else {
      changeSourceImage(
        "led-111",
        "assets/PNG/3D_Images/elements/111 white.png"
      );
      ledStateMap.set("led-111", "White");
      // removeClass("lowerL3KeyHolder", "disableLever");
      //  removeClass("lowerL4KeyHolder", "disableLever");
      console.log("LeverC111V3 and LeverC111V1 is now unlocked");
      
    }
  } else {
    changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 Red.png");
    ledStateMap.set("led-111", "Red");
    console.log("No changes to lever bcoz switch-z13 in occupe");
  }
}


function enableLevers() {
  removeClass("lowerL3KeyHolder", "disableLever");
  removeClass("lowerL4KeyHolder", "disableLever");
  changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 Red.png");
  ledStateMap.set("led-111", "Red");
  console.log("LeverC111V3 and LeverC111V1 is now unlocked");
}
function disableLeversnew() {
  addClass("lowerL3KeyHolder", "disableLever");
  addClass("lowerL4KeyHolder", "disableLever");
  changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 Red.png");
  ledStateMap.set("led-111", "Red");
  console.log("LeverC111V3 and LeverC111V1 is now locked");
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

function enableLeversz9z11() {
  removeClass("lowerL3KeyHolder", "disableLever");
  removeClass("lowerL4KeyHolder", "disableLever");
  console.log("LeverC111V3 and LeverC111V1 is now unlocked");
}

function emergencyButtonAnnuAction() {
  console.log("Switching emergency button - Annu state");
  if (emergencyAnnu) {
    emergencyAnnu = false;
    changeSourceImage(
      "emergency-button-annu",
      "assets/PNG/3D_Images/elements/Annu_popped_out.png"
    );
    changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 Red.png");
    ledStateMap.set("led-111", "Red");
    changeSourceImage(
      "led-a1",
      "assets/PNG/3D_Images/elements/A1_Normal_State.png"
    );
    ledStateMap.set("led-a1", "White");
  } else {
    emergencyAnnu = true;
    changeSourceImage(
      "emergency-button-annu",
      "assets/PNG/3D_Images/elements/Annu_popped_in.png"
    );
    
    changeSourceImage("led-111", "assets/PNG/3D_Images/elements/111 white.png");
    ledStateMap.set("led-111", "White");
    changeSourceImage('led-a1','assets/PNG/3D_Images/elements/A1_On_State.png');
    ledStateMap.set('led-a1','Orange');
  }
}
