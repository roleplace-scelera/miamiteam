'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "HotelServicesCapabilities1";  // TODO replace with your app ID (OPTIONAL).
const SKILL_NAME = 'Hotel Services Capabilities';
const HELP_MESSAGE = 'I can list my capabillities';
const DETAIL_PROMPT = 'Ok, I can make a service request for delivery to your room; I can tell you the times and location of hotel services; I can set a wake up call.  Do you want to here more?'
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'WelcomePrompt': function()
    {	
		this.emit(':tell', DETAIL_PROMPT);
    },
	'MoreInfo': function()
	{
		var speechOutput = "I am sorry I cannot process that request at this time.  Is there another request I can make for you?";
		
		const service = this.event.request.intent.slots.Service.value;
		if(service == "yes")
			speechOutput = "I can also request the agenda for a group to which you are associated, provide the weather and list my capabilities";
		else if(service == "no")
			speechOutput = "Ok, well enjoy your stay";
		
		this.emit(':tell', speechOutput);
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
