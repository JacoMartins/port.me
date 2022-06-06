import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routes } from './routes';
import { ensureAuthenticated } from './middlewares/ensureAuthentication';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({message: err.message})
  }
  
  return res.status(500).json({error: 'Internal Server Error.'});
});

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running');
});