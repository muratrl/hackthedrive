(function(){

var BMWClient, config, bmw_client;
    BMWClient = this.BMWClient;
    debugger;
    config = {
        application: 'cc327fc0-30bc-4b98-b72e-f7e0cf71b074',    
        secret: '96f8eddd-ecae-4140-95aa-3e9c6a20998f',        
        hostname: 'data.api.hackthedrive.com',
        port: '80',
        version: 'v1'
    };
    bmw_client = new BMWClient(config);
    bmw_client.authorize(config.redirect_uri);
    console.log("here")
    console.log(config.redirect_uri)
}())