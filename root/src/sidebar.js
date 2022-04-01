function openSidebar() {
    document.getElementById("contentContainer").style.marginRight = "25%";
    document.getElementById("sidebarBlock").style.width = "25%";
    document.getElementById("sidebarBlock").style.display = "inline-block";
    document.getElementById('sidebarTriggerButton').innerHTML = '>';
    document.getElementById('sidebarTrigger').style.marginRight = '25%';
  }
  function closeSidebar() {
    document.getElementById("contentContainer").style.marginRight = "0%";
    document.getElementById("sidebarBlock").style.width = "0%";
    document.getElementById("sidebarBlock").style.display = "none";
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