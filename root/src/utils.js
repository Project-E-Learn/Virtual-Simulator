function checkVisibilityStatus(elementId){
  
  var status =  getVisibilityStatus(elementId);
  console.log('Visibility of ' + elementId + ' is: ' + getVisibilityStatus(elementId));
  if(status == 'none'){
    return false;
  } else {
    console.log('Returning true');
    return true;
  }
}
function checkOrientation(elementId,angle){
  var status =  getOrientationStatus(elementId);
  if(status == 'rotate('+angle+'deg)'){
    return true;
  } else {
    return false;
  }

}
function getOrientationStatus(elementId){
  return document.getElementById(elementId).style.transform;
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

function rotateElement(elementId,angle){
  document.getElementById(elementId).style.transform= 'rotate('+angle+'deg)';
}

function removeClass(elementId,className){
  document.getElementById(elementId).classList.remove(className);
}
function addClass(elementId,className){
  document.getElementById(elementId).classList.add(className);
}

function changeSourceImage(imageId,newImagePath){
  document.getElementById(imageId).src = newImagePath;
}