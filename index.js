'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "HotelServicesCapabilities1";  // TODO replace with your app ID (OPTIONAL).
const SKILL_NAME = 'Hotel Services Capabilities';
const HELP_MESSAGE = 'I can provide list of my services. I have Hotel Services, Guest Services, The Front Desk, and The Concierge. If you want to hear more details about a service please say the service name';
const DETAIL_PROMPT = ''
const HOTEL_SERVICES_CAPABILITIES = 'Hello';
//const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'GiveCapabilities': function()
    {
		
			this.emit(':tell', HELP_MESSAGE);
		
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_MESSAGE;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};