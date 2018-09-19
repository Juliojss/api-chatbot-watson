const app = require('../config/express');
const msg = require('../controllers/mensagem');

app.post('/conversation/', msg);

module.exports = app;