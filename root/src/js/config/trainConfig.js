var trainLocationsMap;

function defaultTrainPositionSetup(){
    document.getElementById('train').style.left = '0vw';
    document.getElementById('train').style.top = '4vw';
}

function defaultTrainLocationsSetup(){
    trainLocationsMap = new Map();
    trainLocationsMap.set('Z9',['10vw','4vw']);
    trainLocationsMap.set('Z11',['24vw','4vw']);
    trainLocationsMap.set('Z13',['38vw','4vw']);
    trainLocationsMap.set('Z15',['57vw','4vw']);
    trainLocationsMap.set('Z17',['57vw','0vw']);
    trainLocationsMap.set('25_4',['65vw','0vw']);
    trainLocationsMap.set('25_5',['65vw','4vw']);
    trainLocationsMap.set('preSplitLeft',['47vw']);
    trainLocationsMap.set('postSplitLeft',['51vw']);
}