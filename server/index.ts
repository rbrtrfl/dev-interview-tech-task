import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createServer } from 'http';
import router from './routes/index';
import "reflect-metadata"

const PORT = 4000;

const app = express();
app.use(cors());
app.use(morgan('short'));
app.use(express.json());
const httpServer = createServer(app);

app.use('/', router);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server up and listening on port ${PORT}`); // eslint-disable-line
});
