import express from 'express';
import { menuController } from './Controllers/menuController.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001; // Définit le port par défaut à 4001

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI_MENU, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));


app.get('/getMenus', menuController.getMenus);
app.get('/', menuController.here);
app.post('/createMenu', menuController.createMenu);

app.listen(PORT, () => {
    console.log(`🚀 Menu Service running on port ${PORT}`);
});
