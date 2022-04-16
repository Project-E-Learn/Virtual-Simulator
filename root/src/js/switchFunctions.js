function toggleSwitch(switchId) {
    console.log(switchId);
    if(switchStateMap.get(switchId) == true){
      var switchImageSource = switchSwitchedSourceMap.get(switchId);
      switchStateMap.set(switchId,false);
      changeSourceImage(switchId,switchImageSource);
      if(switchId=='switch-z9') {
        changeSourceImage('led-announce','assets/PNG/Announce_White.png');
        changeSourceImage('led-zap','assets/PNG/ZAP_Red.png');
        // document.getElementById('led-announce').setAttribute('src','assets/PNG/Announce_White.png');
        // document.getElementById('led-zap').setAttribute('src','assets/PNG/ZAP_Red.png');
      }
      if(switchId=='switch-z13'){
        document.getElementById('led-111').setAttribute('src','assets/PNG/111_Red.png')
        document.getElementById('tracklight1').setAttribute('src','assets/PNG/Z13_Red.png')
  
      }
      if(switchId=='switch-z17'){
        document.getElementById('tracklight3').setAttribute('src','assets/PNG/Z17_Red.png')
      }
    } else {
      var defaultImageSource = switchDefaultSourceMap.get(switchId);
      switchStateMap.set(switchId,true);
      changeSourceImage(switchId,defaultImageSource);
        if(switchId=='switch-z9') {
          document.getElementById('led-zap').setAttribute('src','assets/PNG/ZAP_Orange.png');
        }
        if(switchId=='switch-z13'){
          document.getElementById('tracklight1').setAttribute('src','assets/PNG/Z13_Ash.png')
        }
        if(switchId=='switch-z17'){
          document.getElementById('tracklight3').setAttribute('src','assets/PNG/Z17_Ash.png')
        }
    }
  }  