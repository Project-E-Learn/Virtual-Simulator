function checkLeverLockStatus(leverId){
    /** This method returns true if at least one of the holders for the given lever is locked */
    var returnStatus = false;
    var holderArray = leverHolderMap.get(leverId);
    console.log('Array type: ' + typeof(holderArray));
    if(holderArray.length == 0){
        console.log('No Holders available for the lever: ' + leverId + '. Lever is free to move.');
        returnStatus = false;
    } else {
        console.log('Holders available for lever ' + leverId + ': ' + holderArray);
        console.log('Lever lock state: ' + holderArray.some(getHolderLockStatus));
        returnStatus = holderArray.some(getHolderLockStatus);
    }
    return returnStatus;
}

function changeLeverPosition(leverId){
    /** This method checks if a lever can be switched.
     *  If no holders are locked, changes the lever source images accordingly.
     *  If at least one of the holders are locked, lever source image is not changed.
     */
    if(checkLeverLockStatus(leverId)){
        console.log('Lever ' + leverId + ' is locked. Unable to switch.');
    } else{
        var holderArray = leverHolderMap.get(leverId);
        if(leverStateMap.get(leverId) == true){
            var switchImageSource = leverSwitchedSourceMap.get(leverId);
            leverStateMap.set(leverId,false);
            changeSourceImage(leverNameMap.get(leverId),switchImageSource);
            if(holderArray.length > 0){
              for(i=0; i<holderArray.length; i++){
                changeSourceImage(holderArray[i],switchedHolderSourceMap.get(holderArray[i]));
              }
            }
            leverOnAction(leverId);
        } else {
            var defaultImageSource = leverDefaultSourceMap.get(leverId);
            leverStateMap.set(leverId,true);
            changeSourceImage(leverNameMap.get(leverId),defaultImageSource);
            if(holderArray.length > 0){
              for(i=0; i<holderArray.length; i++){
                changeSourceImage(holderArray[i],defaultHolderSourceMap.get(holderArray[i]));
              }
            }
            leverOffAction(leverId);
        }
    }
}

function leverOnAction(leverId){

    switch(leverId){
      case 'lever1AuA':
        turnLever1AuAOn();
        break;

      case 'lever2A1':
        turnLever2A1On();
        break;

      case 'lever3C111':
        turnLever3C111On();
        break;

      case 'lever4C111':
        turnLever4C111On();
        break;

      case 'lever5Ag5':
        turnLever5Ag5On();
        break;

      case 'lever6V6':
        turnLever6V6On();
        break;
    
      default:
        console.log('Unable to find a lever with the ID: ' + leverId);
    }
}

function leverOffAction(leverId){

    switch(leverId){
        case 'lever1AuA':
          turnLever1AuAOff();
          break;
  
        case 'lever2A1':
          turnLever2A1Off();
          break;
  
        case 'lever3C111':
          turnLever3C111Off();
          break;
          
        case 'lever4C111':
          turnLever4C111Off();
          break;
  
        case 'lever5Ag5':
          turnLever5Ag5Off();
          break;
  
        case 'lever6V6':
          turnLever6V6Off();
          break;
      
        default:
          console.log('Unable to find a lever with the ID: ' + leverId);
      }
}


function turnLever1AuAOn(){

}

function turnLever1AuAOff(){

}

function turnLever2A1On(){
    changeSourceImage('led-a1','assets/PNG/3D_Images/elements/A1_On_State.png');
    ledStateMap.set('led-a1','Orange');
    trainAppear();
    // launc-hModal("Signal enabled without selecting proper track");
}

function turnLever2A1Off(){
    changeSourceImage('led-a1','assets/PNG/3D_Images/elements/A1_Normal_State.png');
    ledStateMap.set('led-a1','White');
    trainDisappear();
}

function turnLever3C111On(){
  if((ledStateMap.get('tracklight1')!='Red')){ 
    changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 white.png');
    ledStateMap.set('led-111','White');
    changeSourceImage('tracklight1','assets/PNG/3D_Images/elements/Z 13,15,17_Yellow.png');
    ledStateMap.set('tracklight1','Yellow');
    changeSourceImage('tracklight3','assets/PNG/3D_Images/elements/Z 13,15,17_Yellow.png');
    ledStateMap.set('tracklight3','Yellow');
  }
  else{
    console.log("z13 light is red, so functional changes for lever3 was not done");
  }
    
}
function turnLever3C111Off(){
  // 
      if((ledStateMap.get('tracklight1')!='Red'))   {
        console.log(ledStateMap.get('tracklight1'));
        changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 Red.png');
        ledStateMap.set('led-111','Red');
        changeSourceImage('tracklight1','assets/PNG/3D_Images/elements/Z 13,15,17_Ash.png');
        ledStateMap.set('tracklight1','Ash');
        changeSourceImage('tracklight3','assets/PNG/3D_Images/elements/Z 13,15,17_Ash.png');
        ledStateMap.set('tracklight3','Ash'); 
      }
      else{
        console.log("z13 light is red, so functional changes for lever3 was not done");
      }
      if($("#lowerL3KeyHolder").hasClass("emergency-use")){
        changeSourceImage('led-zap','assets/PNG/3D_Images/elements/ZAP_orange.png');
        ledStateMap.set('led-zap','Orange');
      }
      else{
        console.log("Levers turned off without using emergency box");
      }
  //if one of these lights (z13,z17) are red, dont do anything. else, do it
    //111 to red
    //z13,z17 to grey
}

function turnLever4C111On(){
  if((ledStateMap.get('tracklight1')!='Red'))   {
    changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 white.png');
    ledStateMap.set('led-111','White');
    changeSourceImage('tracklight1','assets/PNG/3D_Images/elements/Z 13,15,17_Yellow.png')
    ledStateMap.set('tracklight1','Yellow');
    changeSourceImage('tracklight2','assets/PNG/3D_Images/elements/Z 13,15,17_Yellow.png')
    ledStateMap.set('tracklight2','Yellow');
  }
  else{
    console.log("z13 light is red, so functional changes for lever4 was not done");
  }

}

function turnLever4C111Off(){
  if((ledStateMap.get('tracklight1')!='Red'))   {
    changeSourceImage('led-111','assets/PNG/3D_Images/elements/111 Red.png');
    ledStateMap.set('led-111','Red');
    changeSourceImage('tracklight1','assets/PNG/3D_Images/elements/Z 13,15,17_Ash.png')
    ledStateMap.set('tracklight1','Ash');
    changeSourceImage('tracklight2','assets/PNG/3D_Images/elements/Z 13,15,17_Ash.png')
    ledStateMap.set('tracklight2','Ash');
  }
  else{
    console.log("z13 light is red, so functional changes for lever4 was not done");
  }
  if($("#lowerL3KeyHolder").hasClass("emergency-use")){
    changeSourceImage('led-zap','assets/PNG/3D_Images/elements/ZAP_orange.png');
    ledStateMap.set('led-zap','Orange');
  }
  else{
    console.log("Levers turned off without using emergency box");
  }
  //if one of these lights are red, dont do anything. else, do it
  //Z13,z15 to grey
}

function turnLever5Ag5On(){
    changeSourceImage('led-5v6','assets/PNG/3D_Images/elements/5v6_white.png');
    ledStateMap.set('led-5v6','White');
}

function turnLever5Ag5Off(){
    changeSourceImage('led-5v6','assets/PNG/3D_Images/elements/5v6_orange.png');
    ledStateMap.set('led-5v6','Orange');
}

function turnLever6V6On(){

}

function turnLever6V6Off(){

}