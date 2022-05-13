function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  /** This method is triggered when a key is dragged. */
  var imageId = document.getElementById(ev.target.id);
  ev.dataTransfer.setData("keyId", ev.target.id);
  ev.dataTransfer.setDragImage(imageId, 50, 50);
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
        keyAvailabilityMap.set(heldKeyId,true);
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

$(document).ready(function(){
  $('#lever6V6').hover(function(){
    $("#lever6V6").toggleClass('transformImage');
  });
});

// document.getElementById("upperL6Key5").addEventListener("dragstart", function(e) {
//   var dragIcon = document.createElement("img");
//   dragIcon.src = "assets/PNG/111_Red.png";
//   dragIcon.style.width = "500px";
//   var div = document.createElement('div');
//   div.appendChild(dragIcon);
//   div.style.position = "absolute"; div.style.top = "0px"; div.style.left= "-500px";
//   document.querySelector('body').appendChild(div);
//   e.dataTransfer.setDragImage(div, 0, 0);
// }, false)