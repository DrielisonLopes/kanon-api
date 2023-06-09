const express = require('express');
const consign = require('consign');
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('API server is running');
});

consign()
  .include('./src/routes')
  .into(app);

