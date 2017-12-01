
  
//Client JS Code.. Add this to conversation.js, overwriting the init function with this
//new init function
  // Initialize the module
  function init() {
    chatUpdateSetup();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    else{
      console.log("Browser geolocation isn't supported.");
      geoSuccess(position)
    }
    setupInputBox();
  }

  //private functions
  function geoSuccess(position){
    var context = null;
    if(position && position.coords){
      context = {};
      context.long = position.coords.longitude;
      context.lat = position.coords.latitude;
    }
    // The client displays the initial message to the end user
    Api.sendRequest("", context);
  };

  //Sends in null to ask for zip code
  function geoError(){
    geoSuccess(null);
  };

