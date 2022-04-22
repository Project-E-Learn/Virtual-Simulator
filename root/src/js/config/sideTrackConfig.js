function sideTrackSetup(){
    document.getElementById('sidebarBlock').style.right = '0';
    document.getElementById('sidebarBlock').style.width = '25%';
    // document.getElementById('contentContainer').style.width = '80%';
    // document.getElementById('contentContainer').style.marginLeft = '10%';
    // document.getElementById('contentContainer').style.marginRight = '10%';
    // hideElement('sidebarBlock');
    document.getElementById("contentContainer").style.marginLeft = "0vw";
    document.getElementById("contentContainer").style.marginRight = "25vw";
    document.getElementById("sidebarBlock").style.display = "block";
    sidebarKeyPosition();
//  document.getElementById('sidebarTriggerButton').innerHTML = '>';
//  document.getElementById('sidebarTrigger').style.marginRight = '25%';
}