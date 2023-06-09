const express = require('express');
const consign = require('consign');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('API server is running');
});

consign()
  .include('./src/routes')
  .into(app);

