const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = 3000;


app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


const exampleController = require('./controllers/exampleController');

app.get('/', exampleController.get);
app.post('/', exampleController.post);
app.put('/', exampleController.put);
app.delete('/', exampleController.delete);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
