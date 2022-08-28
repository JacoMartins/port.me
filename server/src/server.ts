import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import { ensureAuthenticated } from './middlewares/ensureAuthentication';
import { env } from 'process';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({message: err.message})
  }
  
  return res.status(500).json({error: 'Internal Server Error.'});
});

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}.`);
});