const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
    username: 'd15319f9-81cd-4de0-b4e4-daf358897938',
    password: 'wbWO4jzGtUiy',
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2018-09-18',
});


module.exports = assistant;