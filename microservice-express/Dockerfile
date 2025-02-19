# 1. Utiliser une image officielle de Node.js
FROM node:18

# 2. Définir le répertoire de travail dans le conteneur
WORKDIR /app

# 3. Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# 4. Copier le reste du code
COPY . .

# 5. Exposer le port 3000
EXPOSE 3000

# 6. Lancer l’application
CMD ["node", "server.js"]
