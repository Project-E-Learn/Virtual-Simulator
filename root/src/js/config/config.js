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
  sideTrackSetup();
  initializeDefaultSwitchStates();
  switchedSwitchImageSetup();
  defaultSwitchImageSetup();
  initializeDefaultLedStates();
  defaultTrainPositionSetup();
  defaultTrainLocationsSetup();
  console.log('INITIALIZATION COMPLETE');
}

