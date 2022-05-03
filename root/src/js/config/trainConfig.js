var trainLocationsMap;

function defaultTrainPositionSetup(){
    document.getElementById('train').style.left = '0vw';
    document.getElementById('train').style.top = '4vw';
}

function defaultTrainLocationsSetup(){
    trainLocationsMap = new Map();
    trainLocationsMap.set('Z9',['18vw','4vw']);
    trainLocationsMap.set('Z11',['29vw','4vw']);
    trainLocationsMap.set('Z13',['37vw','4vw']);
    trainLocationsMap.set('Z15',['50vw','4vw']);
    trainLocationsMap.set('Z17',['50vw','0vw']);
    trainLocationsMap.set('25_4',['66vw','0vw']);
    trainLocationsMap.set('25_5',['66vw','4vw']);
    trainLocationsMap.set('preSplitLeft',['45vw']);
    trainLocationsMap.set('postSplitLeft',['50vw']);
}