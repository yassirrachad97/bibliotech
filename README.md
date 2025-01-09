# **Bibliotech**

Bibliotech est une application moderne de gestion de bibliothèque qui permet aux utilisateurs de rechercher, emprunter et retourner des livres en ligne. Conçue avec une architecture basée sur les microservices, l'application utilise des services AWS pour garantir une infrastructure évolutive et robuste.

---

## **Fonctionnalités**

### **Pour les utilisateurs**
- **Inscription et connexion sécurisées** : Authentification via AWS Cognito.
- **Recherche de livres** : Par titre, auteur ou catégorie.
- **Consultation des détails d’un livre** : Titre, auteur, description et disponibilité.
- **Emprunt et retour de livres** : Suivi des dates de retour et des livres empruntés.
- **Accès à l’historique des emprunts** : Liste des livres précédemment empruntés.

### **Pour les administrateurs**
- **Gestion des livres** : Ajout, modification et suppression de livres.
- **Mise à jour des disponibilités** : Gestion des informations sur les stocks de livres.

---

## **Architecture**

Le projet suit une architecture basée sur les microservices :

1. **Service d'authentification (Auth Service)**  
   - Gère l'inscription, la connexion et l'authentification des utilisateurs via JWT.

2. **Service de gestion des livres (Book Service)**  
   - Gère les fonctionnalités CRUD sur les livres ainsi que les actions d'emprunt et de retour.

3. **Frontend (Bookio Web)**  
   - Interface utilisateur développée en React.js permettant l'interaction avec les services backend.

---

## **Technologies utilisées**

- **Frontend** : React.js, TypeScript, Axios
- **Backend** : NestJS
- **Base de données** : MongoDB via Mongoose
- **Infrastructure Cloud** : AWS (Cognito, ECS/Lambda, S3, API Gateway, Secrets Manager)
- **CI/CD** : GitHub Actions, Docker
- **Tests** : Jest, React Testing Library

---

## **Installation**

### **Prérequis**
- Node.js installé sur votre machine.
- Docker pour l'orchestration des conteneurs.
- Un compte AWS pour configurer l’infrastructure cloud.

### **Étapes**
1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/yassirrachad97/bibliotech.git
   cd bibliotech

## **Démarrage du Frontend (React.js) :**

cd frontend
npm install
npm start

## **Démarrage du Backend (NestJS) :**

cd backend
npm install
npm run start:dev


## **Dockerisation : Pour exécuter tous les services via Docker :**

docker-compose up --build

## **Tests**

cd backend
npm test


## **Déploiement CI/CD**

# Lancer des tests unitaires et d'intégration.
# Construire et déployer automatiquement les services backend et frontend.