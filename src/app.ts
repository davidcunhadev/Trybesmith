import express from 'express';
import productsRouter from './routers/products.router';
import ordersRouter from './routers/orders.routers';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(ordersRouter);

export default app;
