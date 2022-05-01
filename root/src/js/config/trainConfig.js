var trainLocationsMap;

function defaultTrainPositionSetup(){
    document.getElementById('train').style.left = '0vw';
    document.getElementById('train').style.top = '5.35vw';
}

function defaultTrainLocationsSetup(){
    trainLocationsMap = new Map();
    trainLocationsMap.set('Z9',['20vw','5.35vw']);
    trainLocationsMap.set('Z11',['29vw','5.35vw']);
    trainLocationsMap.set('Z13',['39vw','5.35vw']);
    trainLocationsMap.set('Z15',['55vw','5.35vw']);
    trainLocationsMap.set('Z17',['55vw','1.4vw']);
    trainLocationsMap.set('25_4',['70vw','1.4vw']);
    trainLocationsMap.set('25_5',['70vw','5.35vw']);
    trainLocationsMap.set('preSplitLeft',['47vw']);
    trainLocationsMap.set('postSplitLeft',['52vw']);
}