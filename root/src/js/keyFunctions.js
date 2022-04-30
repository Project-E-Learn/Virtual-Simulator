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

function rotateKey(ev) {
    /** 
     * This turns the key to vertical if it is horizontal, and horizontal if vertical.
     * If key is turned to vertical, key is enabled for dragging.
     * If key is turned to horizontal, key is disabled for dragging.
     * */
    var keyId = ev.target.id;
    console.log('Key To Rotate: '+keyId);
    if(checkOrientation(keyId,'200')){
        rotateAndDisableKey(keyId);  
    } else if(checkOrientation(keyId,'290')){
        rotateAndEnableKey(keyId);
    }
}

function rotateAndEnableKey(keyId){
    /** This method rotates the key to vertical position, enables the draggability of a key and sets the availability as true in keyAvailabilityMap.
    * Also locks the holder if circumstances are met.
    * */
    rotateElement(keyId,200);

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
    rotateElement(keyId,290);
    keyAvailabilityMap.set(keyId,false); 
    removeClass(keyId,'dragEnabled');
    var holderId = getHolderIdForKey(keyId);
    if(holderId == UNAVAILABLE){
        console.log('Key ' + keyId + ' is not available in any holders');
    }else{    
        if(checkHolderKeysLockStatus(holderId)){
            console.log('No keys are available for dragging. Holder ' + holderId + 'can be unlocked.');
            unlockHolder(holderId);
        } else{
            console.log('Few keys are still draggable. Holder ' + holderId + ' cannot be unlocked.');
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