var holderLockStateMap;
var exactKeyMap;

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
    holderLockStateMap.set('upperL7KeyHolder5', false);
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
    exactKeyMap.set('upperL7KeyHolder5', ['upperL7Key5']);
    console.log('Unique Key-Holder mapping ends');
}