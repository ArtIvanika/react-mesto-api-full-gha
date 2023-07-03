const express = require('express');
const mongoose = require('mongoose');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { errors } = require('celebrate');
const routes = require('./routes/index');
const cors = require('cors');

const errorHandler = require('./middlewares/error-handler');

const app = express();

const { PORT = 3000 } = process.env;
// app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(requestLogger); // подключаем логгер запросов

app.use(routes);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
