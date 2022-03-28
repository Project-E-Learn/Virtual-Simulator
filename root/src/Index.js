function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  ev.dataTransfer.setData("keyId", ev.target.id);
}

function dragDrop(ev) {
  console.log('Drop event triggerred');
  ev.preventDefault();
  var keyId = ev.dataTransfer.getData("keyId");
  var holderId = ev.target.id;
  console.log('Dragged Key = ' + keyId + ', Target Holder = ' + holderId);
  var heldKeyId = getKeyBySuffixMatch(keyId,holderId); //Getting held key from current holder.
  console.log('Held key: ' + heldKeyId);

  if(heldKeyId == UNAVAILABLE){ // If held key is unavailable (means user has dragged an invalid key)
    console.log('DropEvent Failed. Incorrect key or holder.');
  } else { // if user has dragged a valid key onto the holder
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
  console.log('Suffix match: Key ID: ' + keyId + ', Holder ID: ' + holderId);
  var heldKeyId=UNAVAILABLE; //Setting a default 'UNAVAILABLE' text 
  var keyData = exactKeyMap.get(holderId);
  console.log('Keys configured for holder ' + holderId + ': ' + keyData);
  var regularExp = /lowerL\d{1}Key|upperL\d{1}Key/; //This regex will look for 'lowerL#Key' or 'upperL#Key' where '#' denotes any number.
  var draggedKeyCode=keyId.replace(regularExp,''); //Removing the string that matched : Eg: lowerL2KeyAN -> result will be AN
  console.log('Dragged key code: ' + draggedKeyCode);
  for(i=0;i<keyData.length;i++){
    var heldKeyCode = keyData[i].replace(regularExp,''); // Extracting key code from held key in the holder
    console.log('Held Key ID: ' + keyData[i] + ', Held Key code: ' + heldKeyCode);
    if(draggedKeyCode == heldKeyCode){ // If key code on held key and dragged key matches, we can conclude that user has dragged the proper key onto the holder.
      heldKeyId = keyData[i];
      break;
    } else{
      heldKeyId = UNAVAILABLE;
    }
  }
  console.log('Returning held key id: ' + heldKeyId);
  return heldKeyId; //Returning the held key
}

function getExactKeysForHolder(holderId){
  return exactKeyMap.get(holderId);
}