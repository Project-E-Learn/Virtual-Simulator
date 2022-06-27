function getExactKeysForHolder(holderId){
  return exactKeyMap.get(holderId);
}

function getHolderLockStatus(holderId){
  /** This method returns the holder lock state for the provided holder */
  console.log('Lock state for holder ' + holderId + ': ' + holderLockStateMap.get(holderId));
  return holderLockStateMap.get(holderId);
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

function lockHolder(holderId){
  /* This method locks the holder by setting the state in holder lock state map. */
  /** To add logic for checking lever position before locking the holder */
  holderLockStateMap.set(holderId,true);
  /*if(holderId != 'upperL7KeyHolder5'){
    changeSourceImage(holderId, holderLockStateImageMap.get(holderId));
  }*/
  // else{
  //   straightTrackChange();
  // }
  console.log('Holder ' + holderId + ' is locked.');
}

function unlockHolder(holderId){
  /* This method unlocks the holder by setting the state in holder lock state map. */
  /** To add logic for checking lever position before unlocking the holder */
  holderLockStateMap.set(holderId,false);
  /*if(holderId == 'upperL7KeyHolder5'){
    sideTrackChange();
  } else{*/
    changeSourceImage(holderId,holderUnlockStateImageMap.get(holderId));
  /*}*/
  console.log('Holder ' + holderId + ' is unlocked.');
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