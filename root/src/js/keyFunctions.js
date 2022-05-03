function getKeyUnlockState(keyId){
    /* This method returns true only if orientation angle is vertical, and true in keyAvailabilityMap*/
    var resultStatus = false;
    if(checkOrientation(keyId,75) && keyAvailabilityMap.get(keyId)){
        resultStatus = true;
    }
    console.log('Unlock state for key ' + keyId + ' is: ' + resultStatus);
    return resultStatus;
}

function getKeyLockState(keyId){
    /* This method returns true if the key is visible, orientation angle is horizontal, or false in keyAvailabilityMap*/
    var resultStatus = false;
    if(checkVisibilityStatus(keyId) && (checkOrientation(keyId,180) || !keyAvailabilityMap.get(keyId))){
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
    if(checkOrientation(keyId,'75')){
        //No need to check for rotation, we are only unlocking here. Any vertical key can be turned anytime. Nothing blocking this action.
        rotateAndDisableKey(keyId);  
    } else if(checkOrientation(keyId,'180')){
        //Need to check if this key can be rotated
        rotateAndEnableKey(keyId);
    }
}

function rotateAndEnableKey(keyId){
    /** This method rotates the key to vertical position, enables the draggability of a key and sets the availability as true in keyAvailabilityMap.
    * Also locks the holder if circumstances are met.
    * */

    // Check if you can lock this holder. i.e., the respective lever's other holder needs to be in unlocked state to lock current holder
    var holderId = getHolderIdForKey(keyId);
    if(holderId == UNAVAILABLE){
        console.log('Key ' + keyId + ' is not available in any holders');
    } else{    
        //How to check if the current holder is in its right(upper) or left(lower) position?
        var holderIdLower = holderId.toLowerCase();
        var holderImageLower = getSourceImage(holderId).toLowerCase();
        if(((holderIdLower.includes('upper') && holderImageLower.includes('right')) || (holderIdLower.includes('lower') && holderImageLower.includes('left'))) || holderIdLower.includes('l7')){
            rotateElement(keyId,75);
            keyAvailabilityMap.set(keyId,true);
            addClass(keyId,'dragEnabled');
        } else{
            launchModal(`Cette clé ne peut pas être tournée dans cette position. Déplacez le levier pour verrouiller cette serrure.`);
            console.log(`Key ${keyId} cannot be rotated in this position. Move the lever to lock this lock.`);
        }
        if(checkHolderKeysUnlockStatus(holderId)){
            console.log('Few keys are draggable. Holder ' + holderId + ' can be locked.');
            lockHolder(holderId);
        } else{
            console.log(`Holder ${holderId} cannot be locked. None of the keys for this holder are in available state.`);
        }
    }
}

function rotateAndDisableKey(keyId){
    /** This method rotates the key to horizontal position, disables the draggability of a key and sets the availability as false in keyAvailabilityMap.
    * Also unlocks the holder if circumstances are met.
    * */
    var holderId = getHolderIdForKey(keyId);
    if(holderId == UNAVAILABLE){
        console.log('Key ' + keyId + ' is not available in any holders');
    }else{    
        rotateElement(keyId,180);
        keyAvailabilityMap.set(keyId,false); 
        removeClass(keyId,'dragEnabled');
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