# Étape 1 : Build Angular
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Étape 2 : Serveur Nginx
FROM nginx:alpine
COPY --from=build /app/dist/todo-frontend /usr/share/nginx/html

# Expose le port 80 pour Nginx
EXPOSE 80

# Nginx démarre automatiquement en mode daemon
