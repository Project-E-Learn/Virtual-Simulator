var keyAvailabilityMap;
var lockSequenceMap;
var unlockSequenceMap;

function defaultKeySetup() {
    console.log('Key Setup Begins');
    hideElement('lowerL2KeyAN');//hideElement
    makeElementVisible('upperL3KeyAN');//makeElementVisible
    makeElementVisible('upperL4KeyAN');//makeElementVisible
    hideElement('lowerL3Key5R');
    hideElement('lowerL4Key5N');
    makeElementVisible('upperL5Key5N');//makeElementVisible
    hideElement('upperL5Key5');
    makeElementVisible('lowerL5Key5');//makeElementVisible
    makeElementVisible('upperL6Key5');//makeElementVisible
    hideElement('lowerL3Key6N');
    hideElement('lowerL4Key6N');
    makeElementVisible('lowerL5Key5R');//makeElementVisible
    makeElementVisible('lowerL6Key6N');//makeElementVisible
    hideElement('upperL7Key5');
    console.log('Key Setup Ends');
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
    keyAvailabilityMap.set('upperL7Key5', false);
    console.log('Map Data: ' + keyAvailabilityMap); //to print in key-value pairs
    console.log('Key Availability Map Setup Ends');
}

function defaultKeyOrientationSetup() {
    console.log('Key Orientation Setup Begins');
    rotateElement('lowerL2KeyAN',345);   
    rotateElement('upperL3KeyAN',460);
    rotateElement('upperL4KeyAN',460);
    rotateElement('lowerL3Key5R',345);
    rotateElement('lowerL4Key5N',345);
    rotateElement('upperL5Key5N',345);
    rotateElement('upperL5Key5',345); 
    rotateElement('lowerL5Key5',460);
    rotateElement('upperL6Key5',460);
    rotateElement('lowerL3Key6N',345); 
    rotateElement('lowerL4Key6N',345);
    rotateElement('lowerL5Key5R',460);
    rotateElement('lowerL6Key6N',345);
    rotateElement('upperL7Key5',345);
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

function initalizeLockSequence(){
    lockSequenceMap = new Map();
    lockSequenceMap.set('upperL5Key5','upperL5Key5N');    
    lockSequenceMap.set('lowerL3Key5R','lowerL3Key6N');    
    lockSequenceMap.set('lowerL4Key5N','lowerL4Key6N');    
    lockSequenceMap.set('lowerL5Key5','lowerL5Key5R');    
}

function initalizeUnlockSequence(){
    unlockSequenceMap = new Map();
    unlockSequenceMap.set('upperL5Key5N','upperL5Key5');    
    unlockSequenceMap.set('lowerL3Key6N','lowerL3Key5R');    
    unlockSequenceMap.set('lowerL4Key6N','lowerL4Key5N');    
    unlockSequenceMap.set('lowerL5Key5R','lowerL5Key5');    
}

// function defaultKeyPosition() {
//     addClass('lowerL2KeyAN','lowerL2KeyAN-initial');
//     addClass('upperL3KeyAN','upperL3KeyAN-initial');
//     addClass('lowerL3Key5R','lowerL3Key5R-initial');
//     addClass('lowerL3Key6N','lowerL3Key6N-initial');
//     addClass('upperL4KeyAN','upperL4KeyAN-initial');
//     addClass('lowerL4Key5N','lowerL4Key5N-initial');
//     addClass('lowerL4Key6N','lowerL4Key6N-initial');
//     addClass('upperL5Key5','upperL5Key5-initial');
//     addClass('upperL5Key5N','upperL5Key5N-initial');
//     addClass('lowerL5Key5','lowerL5Key5-initial');
//     addClass('lowerL5Key5R','lowerL5Key5R-initial');
//     addClass('upperL6Key5','upperL6Key5-initial');
//     addClass('lowerL6Key6N','lowerL6Key6N-initial');
// }

// function sidebarKeyPosition() {
//     addClass('lowerL2KeyAN','lowerL2KeyAN-changed');
//     addClass('upperL3KeyAN','upperL3KeyAN-changed');
//     addClass('lowerL3Key5R','lowerL3Key5R-changed');
//     addClass('lowerL3Key6N','lowerL3Key6N-changed');
//     addClass('upperL4KeyAN','upperL4KeyAN-changed');
//     addClass('lowerL4Key5N','lowerL4Key5N-changed');
//     addClass('lowerL4Key6N','lowerL4Key6N-changed');
//     addClass('upperL5Key5','upperL5Key5-changed');
//     addClass('upperL5Key5N','upperL5Key5N-changed');
//     addClass('lowerL5Key5','lowerL5Key5-changed');
//     addClass('lowerL5Key5R','lowerL5Key5R-changed');
//     addClass('upperL6Key5','upperL6Key5-changed');
//     addClass('lowerL6Key6N','lowerL6Key6N-changed');
// }

// function removePosition() {
//     removeClass('lowerL2KeyAN','lowerL2KeyAN-changed');
//     removeClass('upperL3KeyAN','upperL3KeyAN-changed');
//     removeClass('lowerL3Key5R','lowerL3Key5R-changed');
//     removeClass('lowerL3Key6N','lowerL3Key6N-changed');
//     removeClass('upperL4KeyAN','upperL4KeyAN-changed');
//     removeClass('lowerL4Key5N','lowerL4Key5N-changed');
//     removeClass('lowerL4Key6N','lowerL4Key6N-changed');
//     removeClass('upperL5Key5','upperL5Key5-changed');
//     removeClass('upperL5Key5N','upperL5Key5N-changed');
//     removeClass('lowerL5Key5','lowerL5Key5-changed');
//     removeClass('lowerL5Key5R','lowerL5Key5R-changed');
//     removeClass('upperL6Key5','upperL6Key5-changed');
//     removeClass('lowerL6Key6N','lowerL6Key6N-changed');
// }