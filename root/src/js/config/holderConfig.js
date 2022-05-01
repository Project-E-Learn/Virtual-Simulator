var holderLockStateMap;
var exactKeyMap;
var holderLockStateImageMap;
var holderUnlockStateImageMap;
var defaultHolderSourceMap;
var switchedHolderSourceMap;

function defaultHolderImageSetup(){
    defaultHolderSourceMap = new Map();
    defaultHolderSourceMap.set('upperL3KeyHolderAN', 'assets/PNG/AN_Left_Unlocked.png');
    defaultHolderSourceMap.set('upperL4KeyHolderAN', 'assets/PNG/AN_Left_Unlocked.png');
    defaultHolderSourceMap.set('upperL5KeyHolder', 'assets/PNG/5_5N_Right_Unlocked.png');
    defaultHolderSourceMap.set('upperL6KeyHolder5', 'assets/PNG/5_Left_Unlocked.png');
    defaultHolderSourceMap.set('lowerL2KeyHolderAN', 'assets/PNG/A1_F_Left_Unlocked.png');
    defaultHolderSourceMap.set('lowerL3KeyHolder', 'assets/PNG/C111_V3_F_Left_Unlocked.png');
    defaultHolderSourceMap.set('lowerL4KeyHolder', 'assets/PNG/C111_V1_F_Left_Unlocked.png');
    defaultHolderSourceMap.set('lowerL5KeyHolder', 'assets/PNG/Ag5_D_Right_Unlocked.png');
    defaultHolderSourceMap.set('lowerL6KeyHolder6N', 'assets/PNG/V6_L_Left_Unlocked.png');
    defaultHolderSourceMap.set('upperL7KeyHolder5', '');
}

function switchedHolderImageSetup(){
    switchedHolderSourceMap = new Map();
    switchedHolderSourceMap.set('upperL3KeyHolderAN', 'assets/PNG/AN_Right_Unlocked.png');
    switchedHolderSourceMap.set('upperL4KeyHolderAN', 'assets/PNG/AN_Right_Unlocked.png');
    switchedHolderSourceMap.set('upperL5KeyHolder', 'assets/PNG/5_5N_Left_Unlocked.png');
    switchedHolderSourceMap.set('upperL6KeyHolder5', 'assets/PNG/5_Right_Unlocked.png');
    switchedHolderSourceMap.set('lowerL2KeyHolderAN', 'assets/PNG/A1_O_Right_Unlocked.png');
    switchedHolderSourceMap.set('lowerL3KeyHolder', 'assets/PNG/C111_V3_O_Right_Unlocked.png');
    switchedHolderSourceMap.set('lowerL4KeyHolder', 'assets/PNG/C111_V1_O_Right_Unlocked.png');
    switchedHolderSourceMap.set('lowerL5KeyHolder', 'assets/PNG/Ag5_G_Left_Unlocked.png');
    switchedHolderSourceMap.set('lowerL6KeyHolder6N', 'assets/PNG/V6_R_Right_Unlocked.png');
    switchedHolderSourceMap.set('upperL7KeyHolder5', '');
}

function setupHolderLockStateImage(){
    console.log('Holder Lock State Image Map Setup Begins');
    holderLockStateImageMap = new Map();
    holderLockStateImageMap.set('upperL3KeyHolderAN', 'assets/PNG/AN_Right_Locked.png');
    holderLockStateImageMap.set('upperL4KeyHolderAN', 'assets/PNG/AN_Right_Locked.png');
    holderLockStateImageMap.set('upperL5KeyHolder', 'assets/PNG/5_5N_Right_Locked.png');
    holderLockStateImageMap.set('upperL6KeyHolder5', 'assets/PNG/5_Right_Locked.png');
    holderLockStateImageMap.set('lowerL2KeyHolderAN', 'assets/PNG/A1_F_Left_Locked.png');
    holderLockStateImageMap.set('lowerL3KeyHolder', 'assets/PNG/C111_V3_F_Left_Locked.png');
    holderLockStateImageMap.set('lowerL4KeyHolder', 'assets/PNG/C111_V1_F_Left_Locked.png');
    holderLockStateImageMap.set('lowerL5KeyHolder', 'assets/PNG/Ag5_G_Left_Locked.png');
    holderLockStateImageMap.set('lowerL6KeyHolder6N', 'assets/PNG/V6_L_Left_Locked.png');
    holderLockStateImageMap.set('upperL7KeyHolder5', '');
    console.log('Holder Lock State Image Map Setup Ends');
}

function setupHolderUnlockStateImage() {
    console.log('Holder Unlock State Map Setup Begins');
    holderUnlockStateImageMap = new Map();
    holderUnlockStateImageMap.set('upperL3KeyHolderAN', 'assets/PNG/AN_Right_Unlocked.png');
    holderUnlockStateImageMap.set('upperL4KeyHolderAN', 'assets/PNG/AN_Right_Unlocked.png');
    holderUnlockStateImageMap.set('upperL5KeyHolder', 'assets/PNG/5_5N_Right_Unlocked.png');
    holderUnlockStateImageMap.set('upperL6KeyHolder5', 'assets/PNG/5_Right_Unlocked.png');
    holderUnlockStateImageMap.set('lowerL2KeyHolderAN', 'assets/PNG/A1_F_Left_Unlocked.png');
    holderUnlockStateImageMap.set('lowerL3KeyHolder', 'assets/PNG/C111_V3_F_Left_Unlocked.png');
    holderUnlockStateImageMap.set('lowerL4KeyHolder', 'assets/PNG/C111_V1_F_Left_Unlocked.png');
    holderUnlockStateImageMap.set('lowerL5KeyHolder', 'assets/PNG/Ag5_G_Left_Unlocked.png');
    holderUnlockStateImageMap.set('lowerL6KeyHolder6N', 'assets/PNG/V6_L_Left_Unlocked.png');
    holderUnlockStateImageMap.set('upperL7KeyHolder5', '');
    console.log('Holder Unlock State Map Setup Ends');
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