// import express

import express, { Express, Request, Response } from 'express';
import { postAccount } from '../controllers/accountController';


const router = express.Router();

router.post('/account', postAccount);

export default router;