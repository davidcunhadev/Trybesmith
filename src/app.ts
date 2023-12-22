import express from 'express';
import productsRouter from './routers/products.routers';
import ordersRouter from './routers/orders.routers';
import loginRouter from './routers/login.routers';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(ordersRouter);
app.use(loginRouter);

app.get('/', (_request, response) => {
  response.send('Servidor Online!');
});

export default app;
