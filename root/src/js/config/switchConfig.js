var switchSwitchedSourceMap;
var switchDefaultSourceMap;
var switchStateMap;

function initializeDefaultSwitchStates(){
    switchStateMap= new Map();
    switchStateMap.set('switch-z9',true);
    switchStateMap.set('switch-z11',true);
    switchStateMap.set('switch-z13',true);
    switchStateMap.set('switch-z15',true);
    switchStateMap.set('switch-z17',true);
    switchStateMap.set('switch-z25_4',true);
    switchStateMap.set('switch-z25_5',true);
    switchStateMap.set('Bp_An',true);
}

function defaultSwitchImageSetup(){
    switchDefaultSourceMap = new Map();
    switchDefaultSourceMap.set('switch-z9','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-z11','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-z13','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-z15','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-z17','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-25_4','assets/PNG/switch_default.png');
    switchDefaultSourceMap.set('switch-25_5','assets/PNG/switch_default.png');

}

function switchedSwitchImageSetup(){
    switchSwitchedSourceMap = new Map();
    switchSwitchedSourceMap.set('switch-z9','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-z11','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-z13','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-z15','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-z17','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-25_4','assets/PNG/switch_ON.png');
    switchSwitchedSourceMap.set('switch-25_5','assets/PNG/switch_ON.png');
}