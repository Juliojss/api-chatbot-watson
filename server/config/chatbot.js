const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
    username: '',
    password: '',
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2018-09-18',
});


module.exports = assistant;
