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

// function Announcement_on(a){
//   var image=document.getElementById('led-announce');
//   //if led-annonce is off, ding it. Else, dont ding it.
//   if (img.get(a)==true) 
//       {
//         var audio = new Audio('assets/SOUND/Ding_Sound_Effect.mp3');
//         audio.play();
//         image.src = "assets/PNG/Announce_Orange.png";
//         img.set(a,false);
//       } 
//       // else
//       // {
//       //   image.src = "assets/PNG/Announce_White.png";
//       //   img.set(a,true);
//       // }
// }

function trainAppear() {
  console.log('started animation');
  // let id = null;
  //const element = document.getElementById("train"); 
  document.getElementById("train").style.visibility = 'visible';
  //makeElementVisible('train');
  document.getElementById("train").style.left = '6.5vw';
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