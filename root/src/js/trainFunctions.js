function trainAppear() {
    console.log('started animation');
    // let id = null;
    //const element = document.getElementById("train"); 
    document.getElementById("train").style.visibility = 'visible';
    moveTrainForward('train','7vw');
    //makeElementVisible('train');
    // document.getElementById("train").style.left = '6.5vw';
    // let pos = 3;
    //clearInterval(id);
    //id = setInterval(frame, 60);
    //element.style.left = '6.5vw';
    // function frame() {
    //   element.style.visibility = "visible"; 
    //   if (pos == 6.5) {
    //     clearInterval(id);
    //   } else {
    //     pos += 0.5; 
    //     element.style.left = pos + "vw"; 
    //   }
    // }
  }
  
  function trainDisappear() {
    // hideElement('train');
    //document.getElementById("train").style.left = '3vw';
    //document.getElementById("train").style.visibility = 'hidden';
    // makeElementVisible('train');
    //hideElement('train');
  }
  
  function moveTrainForward(trainId,points){
    var trainObj = document.getElementById(trainId);
    console.log('Current train object left position: ' + getNumericAndDot(trainObj.style.left));
    console.log('New train object position: ' + getNumericAndDot(points));
    if(getNumericAndDot(points) > getNumericAndDot(trainObj.style.left)){
      trainObj.style.left = points;
    } else{
      console.log('Unable to move train object to: ' + points + '. Train is already past that point.');
    }
  }
  
  function moveTrainUpward(trainId,points){
    var trainObj = document.getElementById(trainId);
    console.log('Current train object top position: ' + trainObj.style.top);
    console.log('New train object position: ' + points);
    if(getNumericAndDot(points) < getNumericAndDot(trainObj.style.top)){
      trainObj.style.top = points;
    } else{
      console.log('Unable to move train object to: ' + points + '. Train is already past that point.');
    }
  }