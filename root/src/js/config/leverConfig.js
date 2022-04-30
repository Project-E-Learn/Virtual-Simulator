var leverHolderMap;
var leverStateMap;
var leverDefaultSourceMap;
var leverSwitchedSourceMap;
var leverNameMap;

function initializeLeverHolderMap(){
    console.log('Lever Holder Map Setup Begins');
    leverHolderMap = new Map();
    leverHolderMap.set('lever1AuA',[]);
    leverHolderMap.set('lever2A1',['lowerL2KeyHolderAN']);
    leverHolderMap.set('lever3C111',['lowerL3KeyHolder','upperL3KeyHolderAN']);
    leverHolderMap.set('lever4C111',['lowerL4KeyHolder','upperL4KeyHolderAN']);
    leverHolderMap.set('lever5Ag5',['lowerL5KeyHolder','upperL5KeyHolder']);
    leverHolderMap.set('lever6V6',['lowerL6KeyHolder6N','upperL6KeyHolder5']);
    leverHolderMap.set('leverSideTrack',['upperL7KeyHolder5']);
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
    leverStateMap.set('leverSideTrack',true);
}

function defaultLeverImageSetup(){
    leverDefaultSourceMap = new Map();
    leverDefaultSourceMap.set('lever1AuA','assets/PNG/Au_A_I.png');
    leverDefaultSourceMap.set('lever2A1','assets/PNG/A1_F.png');
    leverDefaultSourceMap.set('lever3C111','assets/PNG/C111_V3_F.png');
    leverDefaultSourceMap.set('lever4C111','assets/PNG/C111_V1_F.png');
    leverDefaultSourceMap.set('lever5Ag5','assets/PNG/Ag5_D.png');
    leverDefaultSourceMap.set('lever6V6','assets/PNG/V6_L.png');
    leverDefaultSourceMap.set('leverSideTrack','');
}

function switchedLeverImageSetup(){
    leverSwitchedSourceMap = new Map();
    leverSwitchedSourceMap.set('lever1AuA','assets/PNG/Au_A_A.png');
    leverSwitchedSourceMap.set('lever2A1','assets/PNG/A1_O.png');
    leverSwitchedSourceMap.set('lever3C111','assets/PNG/C111_V3_O.png');
    leverSwitchedSourceMap.set('lever4C111','assets/PNG/C111_V1_O.png');
    leverSwitchedSourceMap.set('lever5Ag5','assets/PNG/Ag5_G.png');
    leverSwitchedSourceMap.set('lever6V6','assets/PNG/V6_R.png');
    leverSwitchedSourceMap.set('leverSideTrack','');
}

function leverNameSetup(){
    leverNameMap = new Map();
    leverNameMap.set('lever1AuA','lowerL1');
    leverNameMap.set('lever2A1','lowerL2KeyHolderAN');
    leverNameMap.set('lever3C111','lowerL3KeyHolder');
    leverNameMap.set('lever4C111','lowerL4KeyHolder');
    leverNameMap.set('lever5Ag5','lowerL5KeyHolder');
    leverNameMap.set('lever6V6','lowerL6KeyHolder6N');
}