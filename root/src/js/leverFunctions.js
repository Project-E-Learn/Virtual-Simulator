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
            tracksandsignallightoff(leverId);
        }
    }
}

function leverOnAction(leverId){

    switch(leverId){
      case 'lever3C111':
        turnLever3C111On();
        break;
      default:
        console.log('Unable to find a lever with the ID: ' + leverId);
    }
  
    if(leverId=='lever5Ag5'){
      document.getElementById('led-5v6').setAttribute('src','assets/PNG/5v6_White.png');
     
    }
    else if(leverId=='lever2A1'){
      document.getElementById('led-a1').setAttribute('src', 'assets/PNG/A1_ON_State.png');
      trainAppear();
    }
  }

function leverOffAction(leverId){
  
    if(leverId=='lever5Ag5'){
        document.getElementById('led-5v6').setAttribute('src','assets/PNG/5v6_Orange.png');
    }
    else if(leverId=='lever2A1'){
        document.getElementById('led-a1').setAttribute('src', 'assets/PNG/A1_Normal_State.png');
        trainDisappear();
    }
}

function turnLever3C111On(){
    //changeImageSource(id,newImgSrcLocation);
    document.getElementById('led-111').setAttribute('src','assets/PNG/111_White.png');
    document.getElementById('tracklight1').setAttribute('src','assets/PNG/Z13_Yellow.png');
    document.getElementById('tracklight3').setAttribute('src','assets/PNG/Z17_Yellow.png');
}

function turnLever3C111Off(){

}