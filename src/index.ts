import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import coolieParser from 'cookie-parser';
import mongoose from 'mongoose';
import accountRoutes from './routes/accountRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;




// To be defined before routes
app.use(express.json());

// Express configuration
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(accountRoutes);


server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const MONGO_URL = process.env.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL as string);
mongoose.connection.on('error', (error: Error) => {
    console.log('MongoDB connection error: ' + error);
    process.exit(-1);
});