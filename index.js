const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 5000;

app.use(express.json());

const whitelist = ['http://localhost:5000', 'https://schnback.vercel.app/'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};


// const opt = {
//   headers: [

//   ]
// }

app.use(cors());

app.get('/', (request, response) => {
  response.send('Server funcionando');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Port: ' + port);
});
