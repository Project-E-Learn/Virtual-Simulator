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
  console.log("left Value=",sideTrackPosition.style.left);
  if(sideTrackPosition.style.left == "3.5vw")
  {
    sideTrackPosition.style.left = "5.6vw";
  }else if(sideTrackPosition.style.left == "5.6vw"){
    sideTrackPosition.style.left = "3.5vw";
    changeSourceImage('led-5v6','assets/PNG/3D_Images/elements/5v6_orange.png');
    ledStateMap.set('led-5v6','Orange');
  }

}

// function straightTrackChange(){
//   document.getElementById('sidebarSplit').style.left = "5.6vw";
//   changeSourceImage('led-5v6','assets/PNG/3D_Images/elements/5v6_white.png');
//   // setLeftPosition('sidebarSplit','7.6vw');
//   ledStateMap.set('led-5v6','White');
// }