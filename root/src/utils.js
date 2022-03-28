function checkVisibilityStatus(elementId){
  var status =  document.getElementById(elementId).style.display;
  if(status == 'none'){
    return false;
  } else {
    return true;
  }
}
  
function getVisibilityStatus(elementId){
  return document.getElementById(elementId).style.display;
}
  
function makeElementVisible(elementId){
  document.getElementById(elementId).style.display = 'block';
}
  
function hideElement(elementId){
  document.getElementById(elementId).style.display = 'none';
}