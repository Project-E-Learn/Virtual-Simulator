var holderMap;
var exactKeyMap;
var keyAvailabilityMap;
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
var lever1;
var lever2;
var lever3;
var lever4;
var lever5;
var lever6;

const UNAVAILABLE = 'UNAVAILABLE';

function initializeData() {
  console.log('INITIALIZE DATA'); 
  //arraySetup();
  //mapSetup();
  defaultKeySetup();
  exactKeyMapSetup();
  keyAvailabilityMapSetup();
  defaultKeyOrientationSetup();
  initalizeDrag();
  leverChange();
  console.log('INITIALIZATION COMPLETE');
}

function defaultKeySetup() {
    console.log('Key Setup Begins');
    hideElement('lowerL2KeyAN');
    makeElementVisible('upperL3KeyAN');
    makeElementVisible('upperL4KeyAN');
    hideElement('lowerL3Key5R');
    hideElement('lowerL4Key5N');
    makeElementVisible('upperL5Key5N');
    hideElement('upperL5Key5');
    makeElementVisible('lowerL5Key5');
    makeElementVisible('upperL6Key5');
    hideElement('lowerL3Key6N');
    hideElement('lowerL4Key6N');
    makeElementVisible('lowerL5Key5R');
    makeElementVisible('lowerL6Key6N');
    console.log('Key Setup Ends');
}

//The following method is not required.
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

//The following method is not required
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

function exactKeyMapSetup(){
    console.log('Unique Key-Holder mapping begins');
    exactKeyMap = new Map();
    exactKeyMap.set('upperL3KeyHolderAN', ['upperL3KeyAN']);
    exactKeyMap.set('upperL4KeyHolderAN', ['upperL4KeyAN']);
    exactKeyMap.set('upperL5KeyHolder', ['upperL5Key5','upperL5Key5N']);
    exactKeyMap.set('upperL6KeyHolder5', ['upperL6Key5']);
    exactKeyMap.set('lowerL2KeyHolderAN', ['lowerL2KeyAN']);
    exactKeyMap.set('lowerL3KeyHolder', ['lowerL3Key5R','lowerL3Key6N']);
    exactKeyMap.set('lowerL4KeyHolder', ['lowerL4Key5N','lowerL4Key6N']);
    exactKeyMap.set('lowerL5KeyHolder', ['lowerL5Key5','lowerL5Key5R']);
    exactKeyMap.set('lowerL6KeyHolder6N', ['lowerL6Key6N']);
    console.log('Unique Key-Holder mapping ends');
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
    rotateElement('lowerL2KeyAN',0);   
    rotateElement('upperL3KeyAN',90);
    rotateElement('upperL4KeyAN',90);
    rotateElement('lowerL3Key5R',0);
    rotateElement('lowerL4Key5N',0);
    rotateElement('upperL5Key5N',0);
    rotateElement('upperL5Key5',0); 
    rotateElement('lowerL5Key5',90);
    rotateElement('upperL6Key5',90);
    rotateElement('lowerL3Key6N',0); 
    rotateElement('lowerL4Key6N',0);
    rotateElement('lowerL5Key5R',90);
    rotateElement('lowerL6Key6N',0);
    console.log('Key Orientation Setup Ends');
}
function initalizeDrag(){
    addClass('lowerL2KeyAN','dragEnabled');
    addClass('lowerL3Key5R','dragEnabled');
    addClass('lowerL4Key5N','dragEnabled');
    addClass('upperL5Key5N','dragEnabled');
    addClass('upperL5Key5','dragEnabled');
    addClass('lowerL3Key6N','dragEnabled');
    addClass('lowerL4Key6N','dragEnabled');
    addClass('lowerL6Key6N','dragEnabled');
}

function leverChange(){
    leverimg= new Map();
    leverimg.set('lever1',true);
    leverimg.set('lever2',true);
    leverimg.set('lever3',true);
    leverimg.set('lever4',true);
    leverimg.set('lever5',true);
    leverimg.set('lever6',true);
}