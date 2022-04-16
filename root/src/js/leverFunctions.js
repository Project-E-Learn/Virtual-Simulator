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
        if(leverStateMap.get(leverId) == true){
            var switchImageSource = leverSwitchedSourceMap.get(leverId);
            leverStateMap.set(leverId,false);
            changeSourceImage(leverId,switchImageSource);
            leverOnAction(leverId);
        } else {
            var defaultImageSource = leverDefaultSourceMap.get(leverId);
            leverStateMap.set(leverId,true);
            changeSourceImage(leverId,defaultImageSource);
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
    changeSourceImage('led-a1','assets/PNG/A1_ON_State.png');
    ledStateMap.set('led-a1','Orange');
    trainAppear();
}

function turnLever2A1Off(){
    changeSourceImage('led-a1','assets/PNG/A1_Normal_State.png');
    ledStateMap.set('led-a1','White');
    trainDisappear();
}

function turnLever3C111On(){
    //changeImageSource(id,newImgSrcLocation);
    changeSourceImage('led-111','assets/PNG/111_White.png');
    ledStateMap.set('led-111','White');
    changeSourceImage('tracklight1','assets/PNG/Z13_Yellow.png');
    ledStateMap.set('tracklight1','Yellow');
    changeSourceImage('tracklight3','assets/PNG/Z17_Yellow.png');
    ledStateMap.set('tracklight3','Yellow');
}

function turnLever3C111Off(){

}

function turnLever4C111On(){

}

function turnLever4C111Off(){

}

function turnLever5Ag5On(){
    changeSourceImage('led-5v6','assets/PNG/5v6_White.png');
    ledStateMap.set('led-5v6','White');
}

function turnLever5Ag5Off(){
    changeSourceImage('led-5v6','assets/PNG/5v6_Orange.png');
    ledStateMap.set('led-5v6','Orange');
}

function turnLever6V6On(){

}

function turnLever6V6Off(){

}

function trainAppear() {
  console.log('started animation');
  // let id = null;
  //const element = document.getElementById("train"); 
  document.getElementById("train").style.visibility = 'visible';
  setLeftPosition('train','6.5vw');
  //makeElementVisible('train');
  // document.getElementById("train").style.left = '6.5vw';
  // let pos = 3;
  //clearInterval(id);
  //id = setInterval(frame, 60);
  //element.style.left = '6.5vw';
  // function frame() {
  //   element.style.visibility = "visible"; 
  //   if (pos == 6.5) {
  //     clearInterval(id);
  //   } else {
  //     pos += 0.5; 
  //     element.style.left = pos + "vw"; 
  //   }
  // }
}

function trainDisappear() {
  // hideElement('train');
  //document.getElementById("train").style.left = '3vw';
  //document.getElementById("train").style.visibility = 'hidden';
  // makeElementVisible('train');
  //hideElement('train');
}