var holderMap;
var lowerL2KeyHolderAN;
var upperL3KeyHolderAN;
var lowerL3KeyHolder5R;
var lowerL3KeyHolder6N;
var upperL4KeyHolderAN;
var lowerL4KeyHolder5N;
var lowerL4KeyHolder6N;
var upperL5KeyHolder5;
var upperL5KeyHolder5N;
var lowerL5KeyHolder5;
var lowerL5KeyHolder5R;
var lowerL6KeyHolder6N;
var upperL6KeyHolder5;
  
function initializeData() {
  console.log('INITIALIZE DATA'); 
  arraySetup();
  mapSetup();
  defaultKeySetup();
  console.log('INITIALIZATION COMPLETE');
}

function defaultKeySetup() {
    console.log('Key Setup Begins');
    document.getElementById('lowerL2KeyAN').style.display = 'none';
    document.getElementById('upperL3KeyAN').style.display = 'block';
    document.getElementById('upperL4KeyAN').style.display = 'block';
    document.getElementById('lowerL3Key5R').style.display = 'none';
    document.getElementById('lowerL4Key5N').style.display = 'none';
    document.getElementById('upperL5Key5N').style.display = 'block';
    document.getElementById('upperL5Key5').style.display = 'none';
    document.getElementById('lowerL5Key5').style.display = 'block';
    document.getElementById('upperL6Key5').style.display = 'block';
    document.getElementById('lowerL3Key6N').style.display = 'none';
    document.getElementById('lowerL4Key6N').style.display = 'none';
    document.getElementById('lowerL5Key5R').style.display = 'block';
    document.getElementById('lowerL6Key6N').style.display = 'block';
    console.log('Key Setup Ends');
}

function mapSetup() {
    console.log('Map Setup Begins');
    holderMap = new Map();
    holderMap.set('lowerL2KeyHolderAN', lowerL2KeyHolderAN);
    holderMap.set('upperL3KeyHolderAN', upperL3KeyHolderAN);
    holderMap.set('lowerL3KeyHolder5R', lowerL3KeyHolder5R);
    holderMap.set('lowerL3KeyHolder6N', lowerL3KeyHolder6N);
    holderMap.set('upperL4KeyHolderAN', upperL4KeyHolderAN);
    holderMap.set('lowerL4KeyHolder5N', lowerL4KeyHolder5N);
    holderMap.set('lowerL4KeyHolder6N', lowerL4KeyHolder6N);
    holderMap.set('upperL5KeyHolder5', upperL5KeyHolder5);
    holderMap.set('upperL5KeyHolder5N', upperL5KeyHolder5N);
    holderMap.set('lowerL5KeyHolder5', lowerL5KeyHolder5);    
    holderMap.set('lowerL5KeyHolder5R', lowerL5KeyHolder5R);
    holderMap.set('upperL6KeyHolder5', upperL6KeyHolder5);
    holderMap.set('lowerL6KeyHolder6N', lowerL6KeyHolder6N);
    console.log('Map Data: ' + holderMap); //to print in key-value pairs
    console.log('Map Setup Ends');
}

function arraySetup() {
    console.log('Array Setup Begins');
    lowerL2KeyHolderAN = ["lowerL2KeyAN", "upperL3KeyAN", "upperL4KeyAN"];
    upperL3KeyHolderAN = ["lowerL2KeyAN", "upperL3KeyAN", "upperL4KeyAN"];
    lowerL3KeyHolder5R = ["lowerL3Key5R", "lowerL5Key5R"];
    lowerL3KeyHolder6N = ["lowerL3Key6N", "lowerL4Key6N", "lowerL6Key6N"];
    upperL4KeyHolderAN = ["lowerL2KeyAN", "upperL3KeyAN", "upperL4KeyAN"];
    lowerL4KeyHolder5N = ["lowerL4Key5N", "upperL5Key5N"];
    lowerL4KeyHolder6N = ["lowerL3Key6N", "lowerL4Key6N", "lowerL6Key6N"];
    upperL5KeyHolder5 = ["upperL5Key5", "lowerL5Key5", "upperL6Key5"];
    upperL5KeyHolder5N = ["lowerL4Key5N", "upperL5Key5N"];
    lowerL5KeyHolder5 = ["upperL5Key5", "lowerL5Key5", "upperL6Key5"];
    lowerL5KeyHolder5R = ["lowerL3Key5R", "lowerL5Key5R"];
    upperL6KeyHolder5 = ["upperL5Key5", "lowerL5Key5", "upperL6Key5"];
    lowerL6KeyHolder6N = ["lowerL3Key6N", "lowerL4Key6N", "lowerL6Key6N"];
    console.log('Array Setup Ends');
}

function keyAvailabilityMapSetup(){
    console.log('Key Availability Map Setup Begins');
    keyAvailabilityMap = new Map();
    keyAvailabilityMap.set('lowerL2KeyAN', false);
    keyAvailabilityMap.set('upperL3KeyAN', true );
    keyAvailabilityMap.set('upperL4KeyAN', true);
    keyAvailabilityMap.set('lowerL3Key5R', false);
    keyAvailabilityMap.set('lowerL4Key5N', false);
    keyAvailabilityMap.set('upperL5Key5N', false);
    keyAvailabilityMap.set('upperL5Key5', true);
    keyAvailabilityMap.set('lowerL5Key5', true);
    keyAvailabilityMap.set('upperL6Key5', true);
    keyAvailabilityMap.set('lowerL3Key6N', false);    
    keyAvailabilityMap.set('lowerL4Key6N', false);
    keyAvailabilityMap.set('lowerL5Key5R', true);
    keyAvailabilityMap.set('lowerL6Key6N', true);
    console.log('Map Data: ' + keyAvailabilityMap); //to print in key-value pairs
    console.log('Key Availability Map Setup Ends');

}

function defaultKeyOrientationSetup() {
    console.log('Key Orientation Setup Begins');
    document.getElementById('lowerL2KeyAN').style.transform = 'rotate(0deg)';
    document.getElementById('upperL3KeyAN').style.transform = 'rotate(0deg)';
    document.getElementById('upperL4KeyAN').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL3Key5R').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL4Key5N').style.transform = 'rotate(0deg)';
    document.getElementById('upperL5Key5N').style.transform = 'rotate(0deg)';
    document.getElementById('upperL5Key5').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL5Key5').style.transform = 'rotate(0deg)';
    document.getElementById('upperL6Key5').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL3Key6N').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL4Key6N').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL5Key5R').style.transform = 'rotate(0deg)';
    document.getElementById('lowerL6Key6N').style.transform = 'rotate(0deg)';
    console.log('Key Orientation Setup Ends');
}

    
    

/*function unlock(){
    angle= new Map();
    angle.set('a',0);
}
function lock(){
    locku= new Map();
    locku.set('a',90);
}*/