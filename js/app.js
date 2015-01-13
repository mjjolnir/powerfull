
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
    	setTimeout(function() {
            navigator.splashscreen.hide();
    	}, 4000);
    	
        navigator.notification.confirm(
        	    'You are the winner!', // message
        	     this.onConfirm,            // callback to invoke with index of button pressed
        	    'Game Over',           // title
        	    ['Restart','Exit']     // buttonLabels
        	);
        	
        console.log('Received Event: ' + id);
    },
    
    onConfirm: function(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
};

app.initialize();