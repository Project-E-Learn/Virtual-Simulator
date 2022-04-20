var trainLocationsMap;

function defaultTrainPositionSetup(){
    document.getElementById('train').style.left = '0vw';
    document.getElementById('train').style.top = '10vw';
}

function defaultTrainLocationsSetup(){
    trainLocationsMap = new Map();
    trainLocationsMap.set('Z9',['10vw','10.6vw']);//24vw
    trainLocationsMap.set('Z11',['30vw','10.6vw']);
    trainLocationsMap.set('Z13',['39vw','10.6vw']);
    trainLocationsMap.set('Z15',['49.5vw','10.6vw']);
    trainLocationsMap.set('Z17',['49.5vw','5.9vw']);
    trainLocationsMap.set('25_4',['60vw','5.9vw']);
    trainLocationsMap.set('25_5',['60vw','10.6vw']);
    trainLocationsMap.set('preSplitLeft',['45vw']);
    trainLocationsMap.set('postSplitLeft',['48.5vw']);
}