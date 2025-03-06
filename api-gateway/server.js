import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import verifyJWT from './Middlewares/auth.js';

const app = express();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;
const MENU_SERVICE_URL = process.env.MENU_SERVICE_URL;

app.use('/auth', createProxyMiddleware({ target: AUTH_SERVICE_URL, changeOrigin: true }));

app.use('/menu', verifyJWT , createProxyMiddleware({ target: MENU_SERVICE_URL, changeOrigin: true }));

app.get('/', (req, res) => {
  res.send('API Gateway is running !');
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
