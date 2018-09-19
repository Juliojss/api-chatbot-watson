const assistant = require('../config/chatbot');


module.exports = (req, res) => {
    const { text, context = {} } = req.body;
    const params = {
      input: { text },
      workspace_id: '8ca0ea79-b149-4271-9d7b-be0fcf454f7e',
      context,
    };
    assistant.message(params, (err, response) => {
        if (err) res.status(500).json(err);
        res.json(response);
    });
};


