import express from 'express';
import { authController } from './Controller/authController.js';

const app = express();
app.use(express.json());

// Routes d'authentification
app.get('/', authController.here);
app.post('/signup', authController.signup);
app.post('/signin', authController.signin);
app.post('/signout', authController.signout);
app.post('/refresh', authController.refresh);
app.get('/me', authController.me);

const PORT = process.env.PORT ;
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});

// const mongoURI = process.env.MONGO_URI_AUTH;

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Auth Service: Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: 'Utilisateur créé avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur de création d\'utilisateur', error: error.message  });
//     }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (!user) return res.status(401).json({ message: 'Utilisateur non trouvé' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect' });

//   const SECRET_KEY = process.env.SECRET_KEY;
//   const token = jwt.sign({ userId: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });


//   res.status(200).json({ token });
// });


//   app.get('/profile', verifyToken, (req, res) => {
// res.json({ message: `Bienvenue ${req.user.username}, voici ton profil` });
// });
  

// app.listen(5000, () => console.log('Auth Service running on port 5000'));
