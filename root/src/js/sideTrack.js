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

function leftTrackChange(){
  document.getElementById('sidebarSplit').style.left = "3.5vw";
  changeSourceImage('led-5v6','assets/PNG/5v6_Orange.png');
  // setLeftPosition('sidebarSplit','7.6vw');
  ledStateMap.set('led-5v6','Orange');
}

function straightTrackChange(){

}