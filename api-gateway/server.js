import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import jwt from 'jsonwebtoken';
// import fs from 'fs';
// import path from 'path';

const app = express();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;
const MENU_SERVICE_URL = process.env.MENU_SERVICE_URL;

app.use('/auth', createProxyMiddleware({ target: AUTH_SERVICE_URL, changeOrigin: true }));


// Vérification des droits sur les routes protégées
// const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '../Keys/jwtpublic.pem'));
// const decodeToken = jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] }, (err, decoded) => {
//                 if (err) {
//                     return res.status(401).json({ message: 'Invalid token' });
//                 }
//             });


app.use('/menu', createProxyMiddleware({ target: MENU_SERVICE_URL, changeOrigin: true }));

app.get('/', (req, res) => {
  res.send('API Gateway is running !');
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
