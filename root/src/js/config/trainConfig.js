var trainLocationsMap;

function defaultTrainPositionSetup(){
    document.getElementById('train').style.left = '0vw';
    document.getElementById('train').style.top = '4.5vw';
}

function defaultTrainLocationsSetup(){
    trainLocationsMap = new Map();
    trainLocationsMap.set('Z9',['19.5vw','4.5vw']);//24vw
    trainLocationsMap.set('Z11',['25.5vw','4.5vw']);
    trainLocationsMap.set('Z13',['31.5vw','4.5vw']);
    trainLocationsMap.set('Z15',['48.5vw','4.5vw']);
    trainLocationsMap.set('Z17',['48.5vw','0.6vw']);
    trainLocationsMap.set('25_4',['63.8vw','0.6vw']);
    trainLocationsMap.set('25_5',['63.8vw','4.5vw']);
    trainLocationsMap.set('preSplitLeft',['45vw']);
    trainLocationsMap.set('postSplitLeft',['48.5vw']);
}