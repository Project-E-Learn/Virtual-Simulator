function sideTrackSetup(){
    document.getElementById('sidebarBlock').style.right = '0';
    document.getElementById('sidebarBlock').style.width = '15%';
    // document.getElementById('contentContainer').style.width = '80%';
    // document.getElementById('contentContainer').style.marginLeft = '10%';
    // document.getElementById('contentContainer').style.marginRight = '10%';
    // hideElement('sidebarBlock');
    document.getElementById("contentContainer").style.marginLeft = "0vw";
    document.getElementById("contentContainer").style.marginRight = "15%";
    document.getElementById("sidebarBlock").style.display = "block";
    document.getElementById('sidebarSplit').style.left="0.5vw";
    document.getElementById('sideTrackLeverLower').style.left="12.5vw";
    rotateElement('sideTrackLeverUpper',0);
    // sidebarKeyPosition();
//  document.getElementById('sidebarTriggerButton').innerHTML = '>';
//  document.getElementById('sidebarTrigger').style.marginRight = '25%';
}
