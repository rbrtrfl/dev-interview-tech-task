import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createServer } from 'http';
import { v4 as uuidv4 } from 'uuid';
import router from './routes/index.routes';
import AppDataSource from './data-source';
import 'reflect-metadata';
import logger from './middleware/logger.middleware';

const PORT = 4000;

const app = express();
app.use(cors());
app.use(morgan('short'));
app.use(express.json());
const httpServer = createServer(app);

app.use((req, res, next) => {
  res.set('random', String(uuidv4()));
  next();
});
app.use(logger);
app.use('/', router);

AppDataSource.initialize().then(async () => {
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server up and listening on port ${PORT}`); // eslint-disable-line
  });
}).catch((error) => console.log(error)); // eslint-disable-line
