# ToDo App (Spring Boot + Angular)

## Description

Application de gestion de tâches (CRUD) avec deux modules :

- **Backend (Spring Boot)** : Fournit des endpoints REST pour gérer les tâches.
- **Frontend (Angular)** : Interface utilisateur pour créer, afficher, mettre à jour et supprimer des tâches.

Chaque module est déployé dans un conteneur Docker et orchestré avec Docker Compose.

## Prérequis

- [Docker](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/)
- (Optionnel) [Maven](https://maven.apache.org/install.html) et [Angular CLI](https://angular.io/cli) si vous souhaitez modifier et reconstruire le code source.

## Arborescence du projet

```
todo-app/
  ├── backend/
  │   ├── Dockerfile
  │   ├── pom.xml
  │   └── src/...
  ├── frontend/
  │   ├── Dockerfile
  │   ├── package.json
  │   └── src/...
  └── docker-compose.yml
```

## Installation et exécution

### 1. Compiler le backend Spring Boot (si modification du code)

```bash
cd backend
mvn clean package
cd ..
```

### 2. Compiler le frontend Angular (si modification du code)

```bash
cd frontend
ng build --prod
cd ..
```

### 3. Construire les images Docker

```bash
docker compose build
```

### 4. Lancer les conteneurs

```bash
docker compose up -d
```

Cela crée deux services :

- **todo-backend** : Spring Boot écoutant sur le port 8080
- **todo-frontend** : Application Angular servie par Nginx sur le port 80

## Utilisation

1. Ouvrez votre navigateur et accédez à :
   ```
   http://localhost/
   ```
   ou, si vous utilisez Vagrant :
   ```
   http://192.168.56.6/
   ```
2. Gérez vos tâches via l'interface (ajout, modification, suppression).

## Configuration

- Dans `frontend/src/app/services/task.service.ts`, l'URL de l'API est configurée pour pointer vers le backend :
  ```typescript
  private apiUrl = 'http://192.168.56.6:8080/api/tasks';
  ```
  Adaptez cette URL en fonction de l'IP ou du domaine que vous utilisez.

## Flow Docker

1. **todo-backend** : Exécute Spring Boot et expose les API REST sur le port 8080.
2. **todo-frontend** : Sert l'application Angular via Nginx sur le port 80.
3. Le navigateur charge l'application Angular et envoie des requêtes à l'API backend pour manipuler les tâches.

## Améliorations possibles

- **Reverse Proxy** : Utilisez Nginx ou Traefik pour unifier les routes (`/api` vers le backend).
- **Variables d'environnement** : Externalisez les URLs et configurations dans un fichier `.env`.
- **Tests** : Ajoutez des tests unitaires avec JUnit pour Spring et Jasmine/Karma pour Angular.

## Licence

Ce projet est sous licence Apache 2.0.

