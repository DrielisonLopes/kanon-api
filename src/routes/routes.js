module.exports = (app) => {
    app.get('/', (req, res) => {
      res.send('Wellcome to KANON GAMING!');
    });
  
    app.get('/machine', (req, res) => {
      res.send("Let's PLAY! This is the Machone Casino!");
    });
  };
  