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
  var heldKeyId = holderId.replace('Holder', '');
  console.log('Held key: ' + heldKeyId);
  var heldKeyElement = document.getElementById(heldKeyId);
  console.log('Held Key status: ' + heldKeyElement.style.display);
  var draggedKeyElement = document.getElementById(keyId);
  if(heldKeyElement.style.display == 'none') {
      if(validateKeyCombo(keyId, holderId)) {
          draggedKeyElement.style.display = "none";
          heldKeyElement.style.display = "block";
          console.log('Key switch complete');       
      } else {
          console.log('DropEvent Failed. Incorrect key or holder.');
      }
  } else {
      console.log('Key ' + heldKeyId + ' already available in holder ' + holderId);
      console.log('Unable to complete switch.');
  }
  console.log('Status: ' + keyId + ' = ' + draggedKeyElement.style.display + ', ' + heldKeyId + ' = ' + heldKeyElement.style.display);
}

function validateKeyCombo(keyId, holderId) {
  console.log('Validation Input: key = ' + keyId + ', holder = ' + holderId);
  var keyData = holderMap.get(holderId);
  console.log('Valid keys for holder ' + holderId + ': ' + keyData);
  console.log('Validation Result: ' + keyData.includes(keyId));
  return keyData.includes(keyId);
}
var flag_key1,flag_key2;
function rotateKey(ev) {
  var keyId = ev.target.id;
  var keyObject=document.getElementById(keyId);
  console.log('Key To Rotate: '+keyId);
  if(keyObject.style.transform=="rotate(0deg)"){
    console.log('Existing Transform Property: '+keyObject.style.transform);
    keyObject.style.transform= 'rotate(90deg)';
    console.log('Post Rotate Transform Property: '+keyObject.style.transform);
    disableKey(keyId);  
  }
  else{
    console.log('Existing Transform Property: '+keyObject.style.transform);
    keyObject.style.transform= 'rotate(0deg)';
    console.log('Post Rotate Transform Property: '+keyObject.style.transform);
    enableKey(keyId);
  }
  
}

function changeImage() {
  if(flag_key1==1&&flag_key2==1){
  var image = document.getElementById('myImage');
  if (image.src.match("matching")) {
      image.src = "assets/PNG/Ag5_D.png";
  } else {
      image.src = "assets/PNG/Ag5_G.png";
      }
}
}
 
function enableKey(keyId){

 keyAvailabilityMap.set(keyId,true);
 document.getElementById(keyId).draggable=true;
  
}
function disableKey(keyId){
  keyAvailabilityMap.set(keyId,false); 
  document.getElementById(keyId).draggable=false;
}



// var a = 0;
// function rotateMe() {
//   if(a == 0)
//   {
//     var angle = 90;
//     document.getElementById('upperL6Key5').style.transform = "rotate(" + angle +"deg)";
//     a += 90;
//   }
//   else {
//     var angle = 0;
//     document.getElementById('upperL6Key5').style.transform = "rotate(" + angle +"deg)";
//     a -= 90;
//   }
// }
// var s = true;
// function myFunction() {
//     if(keyId == "key" && holderId == "holder")
//     {
//         if(s == true)
//         {
//             document.getElementById("lever").setAttribute('src', 'assets/PNG/lever.png');
//             s = false;
//         }
//         else
//         {
//             document.getElementById("lever").setAttribute('src', 'assets/PNG/lever.png');
//             s = true;
//         }
//     }
// }
// document.getElementById("key1").style.position = "relative";
// var img = document.createElement("img");
// img.src = 'Images/key_drag.png';
// img.style.width = 20 + '%';
// img.style.height = 20 + '%';
// ev.dataTransfer.setDragImage(img, 200, 20);