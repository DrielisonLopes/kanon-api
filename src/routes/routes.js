const machineController = require('../../controller/machineController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to KANON GAMING!');
    });

    app.get('/machine/:coins', machineController.machineRoute);
};
  