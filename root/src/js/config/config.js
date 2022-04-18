const UNAVAILABLE = 'UNAVAILABLE';

function initializeData() {
  console.log('INITIALIZE DATA'); 
  defaultKeySetup();
  exactKeyMapSetup();
  keyAvailabilityMapSetup();
  defaultKeyOrientationSetup();
  initalizeDrag();
  setupDefaultHolderLockState();
  initializeLeverHolderMap();
  initializeDefaultLeverStates();
  defaultLeverImageSetup();
  switchedLeverImageSetup();
  defaultKeyPosition();
  sideTrackSetup();
  changeImg();
  initializeDefaultSwitchStates();
  switchedSwitchImageSetup();
  defaultSwitchImageSetup();
  initializeDefaultLedStates();
  defaultTrainPositionSetup();
  defaultTrainLocationsSetup();
  console.log('INITIALIZATION COMPLETE');
}

function changeImg(){
    img=new Map();
    img.set('Bp_An',true);
}