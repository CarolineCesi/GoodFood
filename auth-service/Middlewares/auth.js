import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Accès interdit, token manquant' });

    const token = authHeader.split(' ')[1]; // Supprime "Bearer "
    if (!token) return res.status(401).json({ message: 'Token invalide' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalide' });
    }
};


module.exports = verifyToken;
