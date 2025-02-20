# Utilisation de l'image officielle Node.js
FROM node:18

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copier tout le reste des fichiers de l'API Gateway
COPY . .

# Exposer le port sur lequel tourne l'API Gateway
EXPOSE 3000

# Démarrer l'application
CMD ["node", "server.js"]
