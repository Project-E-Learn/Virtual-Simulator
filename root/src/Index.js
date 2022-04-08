function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  /** This method is triggered when a key is dragged. */
  ev.dataTransfer.setData("keyId", ev.target.id);
}

function dragDrop(ev) {
  /** This method is triggered when a key is dropped onto a holder.
   *  Validates if a correct key is dropped onto the holder. If valid, hides the dragged key and makes the key in holder container visible.
   */
  console.log('Drop event triggerred');
  ev.preventDefault();

  var keyId = ev.dataTransfer.getData("keyId");
  var holderId = ev.target.id;
  console.log('Dragged Key = ' + keyId + ', Target Holder = ' + holderId);
  var heldKeyId = getKeyBySuffixMatch(keyId,holderId);
  console.log('Held key: ' + heldKeyId);

  if(heldKeyId == UNAVAILABLE){
    console.log('DropEvent Failed. Incorrect key or holder.');
  } else {
    console.log('Held Key visibility status: ' + getVisibilityStatus(heldKeyId));
    if(checkVisibilityStatus(heldKeyId)){
      console.log('Key ' + heldKeyId + ' already available in holder ' + holderId);
      console.log('Unable to complete switch.');
    } else{
        hideElement(keyId);
        makeElementVisible(heldKeyId);
        console.log('Key switch complete'); 
        console.log('Status: ' + keyId + ' = ' + getVisibilityStatus(keyId) + ', ' + heldKeyId + ' = ' + getVisibilityStatus(heldKeyId));
    }
  }
}

function getKeyBySuffixMatch(keyId,holderId){
  /** This method matches the dragged key suffix and holder suffix, and returns the ID of the key in the dropped holder.
   *  The regex defined below will look for 'lowerL#Key' or 'upperL#Key' where '#' denotes any number.
  */
  console.log('Suffix match: Key ID: ' + keyId + ', Holder ID: ' + holderId);
  var heldKeyId=UNAVAILABLE;
  var keyData = exactKeyMap.get(holderId);
  console.log('Keys configured for holder ' + holderId + ': ' + keyData);
  console.log('Holder ID Type: ' + typeof(holderId));
  console.log('KeyData Type: ' + typeof(keyData));
  var regularExp = /lowerL\d{1}Key|upperL\d{1}Key/; 
  var draggedKeyCode=keyId.replace(regularExp,'');
  console.log('Dragged key code: ' + draggedKeyCode);
  for(i=0;i<keyData.length;i++){
    var heldKeyCode = keyData[i].replace(regularExp,'');
    console.log('Held Key ID: ' + keyData[i] + ', Held Key code: ' + heldKeyCode);
    if(draggedKeyCode == heldKeyCode){
      heldKeyId = keyData[i];
      break;
    } else{
      heldKeyId = UNAVAILABLE;
    }
  }
  console.log('Returning held key id: ' + heldKeyId);
  return heldKeyId;
}

function getExactKeysForHolder(holderId){
  return exactKeyMap.get(holderId);
}

function rotateKey(ev) {
  /** 
   * This turns the key to vertical if it is horizontal, and horizontal if vertical.
   * If key is turned to vertical, key is enabled for dragging.
   * If key is turned to horizontal, key is disabled for dragging.
   * */
  var keyId = ev.target.id;
  console.log('Key To Rotate: '+keyId);
  if(checkOrientation(keyId,0)){
    rotateAndDisableKey(keyId);  
  } else if(checkOrientation(keyId,90)){
    rotateAndEnableKey(keyId);
  }

}

function rotateAndEnableKey(keyId){
  /** This method rotates the key to vertical position, enables the draggability of a key and sets the availability as true in keyAvailabilityMap.
   * Also locks the holder if circumstances are met.
   * */
  rotateElement(keyId,0);
  keyAvailabilityMap.set(keyId,true);
  addClass(keyId,'dragEnabled');
  var holderId = getHolderIdForKey(keyId);
  if(holderId == UNAVAILABLE){
    console.log('Key ' + keyId + ' is not available in any holders');
  } else{    
    if(checkHolderKeysUnlockStatus(holderId)){
      console.log('Few keys are draggable. Holder ' + holderId + ' can be locked.');
      lockHolder(holderId);
    } else{
      console.log('Holder ' + holderId + ' cannot be locked. None of the keys for this holder are in available state.');
    }
  }
}

function rotateAndDisableKey(keyId){
  /** This method rotates the key to horizontal position, disables the draggability of a key and sets the availability as false in keyAvailabilityMap.
  * Also unlocks the holder if circumstances are met.
  * */
  rotateElement(keyId,90);
  keyAvailabilityMap.set(keyId,false); 
  removeClass(keyId,'dragEnabled');
  var holderId = getHolderIdForKey(keyId);
  if(holderId == UNAVAILABLE){
    console.log('Key ' + keyId + ' is not available in any holders');
  } else{    
    if(checkHolderKeysLockStatus(holderId)){
      console.log('No keys are available for dragging. Holder ' + holderId + 'can be unlocked.');
      unlockHolder(holderId);
    } else{
      console.log('Few keys are still draggable. Holder ' + holderId + ' cannot be unlocked.');
    }
  }
}

function checkHolderKeysUnlockStatus(holderId){
  /** This method checks if some of the keys for the given holder are in vertical and available for dragging, meaning if holder is theoretically locked. */
  var keyArray = getExactKeysForHolder(holderId);
  console.log('Keys for holder ' + holderId + ' is: ' + keyArray);
  var overallLockStatus = keyArray.some(getKeyUnlockState);
  console.log('Overlall lock status: ' + overallLockStatus);
  return overallLockStatus;
}

function checkHolderKeysLockStatus(holderId){
  /** This method checks if all the keys for the given holder are in horizontal and not available for dragging, meaning if holder is theoretically unlocked. */
  var keyArray = getExactKeysForHolder(holderId);
  console.log('Keys for holder ' + holderId + ' is: ' + keyArray);
  console.log('Key array type: ' + typeof(keyArray));
  var overallLockStatus = keyArray.every(getKeyLockState);
  console.log('Overlall lock status: ' + overallLockStatus);
  return overallLockStatus;
}

function lockHolder(holderId){
  /* This method locks the holder by setting the state in holder lock state map. */
  /** To add logic for checking lever position before locking the holder */
  holderLockStateMap.set(holderId,true);
  console.log('Holder ' + holderId + ' is locked.');
}

function unlockHolder(holderId){
  /* This method unlocks the holder by setting the state in holder lock state map. */
  /** To add logic for checking lever position before unlocking the holder */
  holderLockStateMap.set(holderId,false);
  console.log('Holder ' + holderId + ' is unlocked.');
}

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

function getHolderLockStatus(holderId){
  /** This method returns the holder lock state for the provided holder */
  console.log('Lock state for holder ' + holderId + ': ' + holderLockStateMap.get(holderId));
  return holderLockStateMap.get(holderId);
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
      tracksandsignallighton(leverId);
    } else {
      var defaultImageSource = leverDefaultSourceMap.get(leverId);
      leverStateMap.set(leverId,true);
      changeSourceImage(leverId,defaultImageSource);
      tracksandsignallightoff(leverId);
    }
  }
}

function getHolderIdForKey(keyId){
  /** This method returns the holder ID of the key passed as input.
   *  Returns the string UNAVAILABLE if no holder matches the key provided.
   * */
  var returnHolderIdValue = UNAVAILABLE;
  for (const [key, value] of exactKeyMap.entries()) {
    console.log(key, value);
    var holderId= key;
    var keyArray= exactKeyMap.get(holderId);
    if(keyArray.includes(keyId)){
      console.log(keyId + ' matched in holder ' + holderId);
      returnHolderIdValue = holderId;
      break;
    }
  }
  console.log('Holder for key ' + keyId + ' is: ' + holderId);
  return returnHolderIdValue;
}

function getKeyUnlockState(keyId){
  /* This method returns true only if orientation angle is vertical, and true in keyAvailabilityMap*/
  var resultStatus = false;
  if(checkOrientation(keyId,0) && keyAvailabilityMap.get(keyId)){
    resultStatus = true;
  }
  console.log('Unlock state for key ' + keyId + ' is: ' + resultStatus);
  return resultStatus;
}

function getKeyLockState(keyId){
  /* This method returns true if the key is visible, orientation angle is horizontal, or false in keyAvailabilityMap*/
  var resultStatus = false;
  if(checkVisibilityStatus(keyId) && (checkOrientation(keyId,90) || !keyAvailabilityMap.get(keyId))){
    resultStatus = true;
  }
  console.log('Lock state for key ' + keyId + ' is: ' + resultStatus);
  return resultStatus;
}

function Announcement_on(a){
  var image=document.getElementById('led-announce');
  if (img.get(a)==true) 
      {
        image.src = "assets/PNG/Announce_Orange.png";
        img.set(a,false);
      } 
      else
      {
        image.src = "assets/PNG/Announce_White.png";
        img.set(a,true);
      }
}
function tracksandsignallighton(leverId){
  if(leverId=='lever3C111'){
    document.getElementById('led-111').setAttribute('src','assets/PNG/111_White.png');
    document.getElementById('tracklight1').style.display = 'block';
    document.getElementById('tracklight2').style.display = 'block'; 
  }
  else if(leverId=='lever5Ag5'){
    document.getElementById('led-5v6').setAttribute('src','assets/PNG/5v6_White.png');
   
  }
  else if(leverId=='lever2A1'){
    document.getElementById('led-a1').setAttribute('src', 'assets/PNG/A1_Normal_State.png');
    trainAppear();
  }
}
function tracksandsignallightoff(leverId){
  if(leverId=='lever3C111'){
    document.getElementById('led-111').style.display = 'block';
    document.getElementById('led-111').setAttribute('src','assets/PNG/111_Red.png');
    document.getElementById('tracklight1').style.display = 'none';
    document.getElementById('tracklight2').style.display = 'none';
  }
  else if(leverId=='lever5Ag5'){
    document.getElementById('led-5v6').setAttribute('src','assets/PNG/5v6_Orange.png');
  }
  else if(leverId=='lever2A1'){
    document.getElementById('led-a1').setAttribute('src', 'assets/PNG/A1_ON_State.png');
    
    trainDisappear();
  }
  }