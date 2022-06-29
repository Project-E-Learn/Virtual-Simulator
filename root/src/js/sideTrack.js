function openSidebar() {
  document.getElementById("contentContainer").style.marginLeft = "0vw";
  document.getElementById("contentContainer").style.marginRight = "25vw";
  document.getElementById("sidebarBlock").style.display = "inline-block";
  // sidebarKeyPosition();
  document.getElementById('sidebarTriggerButton').innerHTML = '>';
  document.getElementById('sidebarTrigger').style.marginRight = '25%';
}

function closeSidebar() {
  document.getElementById("contentContainer").style.marginLeft = "10%";
  document.getElementById("contentContainer").style.marginRight = "10%";
  document.getElementById("sidebarBlock").style.display = "none";
  // removePosition();
  document.getElementById('sidebarTriggerButton').innerHTML = '<';
  document.getElementById('sidebarTrigger').style.marginRight = '0%';
}

function toggleSidebar() {
  var sidebarContainer = document.getElementById('sidebarBlock');
  console.log('Sidebar display property: ' + sidebarContainer.style.display);
  if (sidebarContainer.style.display == 'none') {
      openSidebar();
  } else {
      closeSidebar();
  }
}

function sideTrackChange(){
  var sideTrackPosition =document.getElementById('sidebarSplit');
  var sideTrackLowerLever = document.getElementById('sideTrackLeverLower');
  console.log("Sub-track Value: ",sideTrackPosition.style.left);
  console.log("Lower lever part value: ",sideTrackLowerLever.style.left);
  if(sideTrackPosition.style.left == "0.5vw")
  {
    sideTrackPosition.style.left = "1.2vw";
    sideTrackLowerLever.style.left = "13.1vw";
    rotateElement('sideTrackLeverUpper',-20);
  }else if(sideTrackPosition.style.left == "1.2vw"){
    sideTrackPosition.style.left = "0.5vw";
    rotateElement('sideTrackLeverUpper',0);
    sideTrackLowerLever.style.left = "12.5vw";
//    changeSourceImage('led-5v6-3','assets/PNG/3D_Images/elements/5v6_orange.png');
//    ledStateMap.set('led-5v6-3','Orange');
//    changeSourceImage('led-5v6-1','assets/PNG/3D_Images/elements/5v6_orange.png');
//    ledStateMap.set('led-5v6-1','Orange');
  }

}

// function straightTrackChange(){
//   document.getElementById('sidebarSplit').style.left = "5.6vw";
//   changeSourceImage('led-5v6','assets/PNG/3D_Images/elements/5v6_white.png');
//   // setLeftPosition('sidebarSplit','7.6vw');
//   ledStateMap.set('led-5v6','White');
// }