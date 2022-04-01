var holderMap;
var exactKeyMap;
var keyAvailabilityMap;
var holderLockStateMap;
var leverHolderMap;
var leverStateMap;
var leverDefaultSourceMap;
var leverSwitchedSourceMap;

const UNAVAILABLE = 'UNAVAILABLE';

function initializeData() {
  console.log('INITIALIZE DATA'); 
  defaultKeySetup();
  exactKeyMapSetup();
  keyAvailabilityMapSetup();
  defaultKeyOrientationSetup();
  initalizeDrag();
  setupDefaultHolderLockState();
  initializeLeverHolderMap();
  initializeDefaultLeverStates();
  defaultLeverImageSetup();
  switchedLeverImageSetup();
  sidebarSetup();
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

function setupDefaultHolderLockState() {
    console.log('Holder Lock State Map Setup Begins');
    holderLockStateMap = new Map();
    holderLockStateMap.set('upperL3KeyHolderAN', false);
    holderLockStateMap.set('upperL4KeyHolderAN', false);
    holderLockStateMap.set('upperL5KeyHolder', true);
    holderLockStateMap.set('upperL6KeyHolder5', false);
    holderLockStateMap.set('lowerL2KeyHolderAN', true);
    holderLockStateMap.set('lowerL3KeyHolder', true);
    holderLockStateMap.set('lowerL4KeyHolder', true);
    holderLockStateMap.set('lowerL5KeyHolder', false);
    holderLockStateMap.set('lowerL6KeyHolder6N', true);
    console.log('Holder Lock State Map Setup Ends');
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

function initializeLeverHolderMap(){
    console.log('Lever Holder Map Setup Begins');
    leverHolderMap = new Map();
    leverHolderMap.set('lever1AuA',[]);
    leverHolderMap.set('lever2A1',['lowerL2KeyHolderAN']);
    leverHolderMap.set('lever3C111',['lowerL3KeyHolder','upperL3KeyHolderAN']);
    leverHolderMap.set('lever4C111',['lowerL4KeyHolder','upperL4KeyHolderAN']);
    leverHolderMap.set('lever5Ag5',['lowerL5KeyHolder','upperL5KeyHolder']);
    leverHolderMap.set('lever6V6',['lowerL6KeyHolder6N','upperL6KeyHolder5']);
    console.log('Lever Holder Map Setup Ends');
}

function initializeDefaultLeverStates(){
    leverStateMap= new Map();
    leverStateMap.set('lever1AuA',true);
    leverStateMap.set('lever2A1',true);
    leverStateMap.set('lever3C111',true);
    leverStateMap.set('lever4C111',true);
    leverStateMap.set('lever5Ag5',true);
    leverStateMap.set('lever6V6',true);
}

function defaultLeverImageSetup(){
    leverDefaultSourceMap = new Map();
    leverDefaultSourceMap.set('lever1AuA','assets/PNG/Au_A_I.png');
    leverDefaultSourceMap.set('lever2A1','assets/PNG/A1_F.png');
    leverDefaultSourceMap.set('lever3C111','assets/PNG/c111_v3_F.png');
    leverDefaultSourceMap.set('lever4C111','assets/PNG/c111_v1_F.png');
    leverDefaultSourceMap.set('lever5Ag5','assets/PNG/Ag5_D.png');
    leverDefaultSourceMap.set('lever6V6','assets/PNG/V6_L.png');
}

function switchedLeverImageSetup(){
    leverSwitchedSourceMap = new Map();
    leverSwitchedSourceMap.set('lever1AuA','assets/PNG/Au_A_A.png');
    leverSwitchedSourceMap.set('lever2A1','assets/PNG/A1_O.png');
    leverSwitchedSourceMap.set('lever3C111','assets/PNG/c111_v3_O.png');
    leverSwitchedSourceMap.set('lever4C111','assets/PNG/c111_v1_O.png');
    leverSwitchedSourceMap.set('lever5Ag5','assets/PNG/Ag5_G.png');
    leverSwitchedSourceMap.set('lever6V6','assets/PNG/V6_R.png');
}

function sidebarSetup(){
    document.getElementById('contentContainer').style.marginRight = '0%';
    document.getElementById('sidebarBlock').style.right = '0';
    hideElement('sidebarBlock');
}