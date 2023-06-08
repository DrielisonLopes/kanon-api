import express from 'express';
import main from './routes/main';
import machine from './routes/machine';

const app = express();

app.use('/main', main);
app.use('/machine', machine);

app.listen(process.env.PORT || 3000, () => {
  console.log('API server is running');
});