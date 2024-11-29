import express, { Application, Request, Response } from 'express';
import productsRouter from './modules/products/products.router';

const app: Application = express();

app.use(express.json());
app.use('/api/products', productsRouter);

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `stationary shop is ⚡`,
  });
});

export default app;
