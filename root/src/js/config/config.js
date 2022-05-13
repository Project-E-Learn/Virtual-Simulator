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
  leverNameSetup();
  setupHolderLockStateImage();
  setupHolderUnlockStateImage();
  defaultHolderImageSetup();
  switchedHolderImageSetup();
  initalizeLockSequence();
  initalizeUnlockSequence();
  console.log('INITIALIZATION COMPLETE');
}

