# API-Recette
Develop an API to manage simple cooking recipes
1. Clonez le dépôt de la brache master :
  git clone https://github.com/benyahia01/API-Recette.git
  cd cooking-recipes-api
2. Installez les dépendances :
    npm install
3. Configurez la base de données PostgreSQL :
    - Créez une base de données PostgreSQL.
    - Créez les tables Recipe + ingredient.
    - Mettez à jour les informations de connexion à la base de données dans le fichier src/app.module.ts
    - imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'USER NAME',
          password: 'PASSWORD',
          database: 'DATABASE NAME',
          autoLoadEntities: true,
          synchronize: true,
        }),
4. Démarrez l'application :
npm run start:dev

5. Pour tester votre API sur Postman, suivez ces étapes :
   * Installation de Postman :
        - Assurez-vous d'avoir Postman installé sur votre machine. Vous pouvez le télécharger depuis Postman.
   * Configuration de l'environnement Postman :
        - Ouvrez Postman et créez un nouvel environnement.
        - Ajoutez une nouvelle variable d'environnement appelée base_url avec la valeur http://localhost:3000.
   * Création des requêtes Postman :
  - Ingrédients
* Créer un ingrédient
Méthode : POST
URL : {{base_url}}/ingredients
Corps de la requête (raw, JSON) :
json
{
  "name": "Tomato",
  "aisle": "Vegetables"
}
Envoyer la requête : Cliquez sur Send.

* Lire tous les ingrédients
Méthode : GET
URL : {{base_url}}/ingredients
Envoyer la requête : Cliquez sur Send.
* Lire un ingrédient
Méthode : GET
URL : {{base_url}}/ingredients/:id
Remplacez :id par l'identifiant de l'ingrédient que vous souhaitez lire.
Envoyer la requête : Cliquez sur Send.
* Mettre à jour un ingrédient
Méthode : PUT
URL : {{base_url}}/ingredients/:id
Remplacez :id par l'identifiant de l'ingrédient que vous souhaitez mettre à jour.
Corps de la requête (raw, JSON) :
json
Copier le code
{
  "name": "Updated Tomato",
  "aisle": "Updated Vegetables"
}
Envoyer la requête : Cliquez sur Send.
* Supprimer un ingrédient
Méthode : DELETE
URL : {{base_url}}/ingredients/:id
Remplacez :id par l'identifiant de l'ingrédient que vous souhaitez supprimer.
Envoyer la requête : Cliquez sur Send.
  - Recettes
* Créer une recette
Méthode : POST
URL : {{base_url}}/recipes
Corps de la requête (raw, JSON) :
json
Copier le code
{
  "name": "Pasta",
  "type": "lunch",
  "ingredients": [
{"id": 1,
"quantity": 100
}],
  "instructions": "Boil pasta. Add sauce."
}
Envoyer la requête : Cliquez sur Send.
* Lire toutes les recettes
Méthode : GET
URL : {{base_url}}/recipes
Envoyer la requête : Cliquez sur Send.
* Lire une recette
Méthode : GET
URL : {{base_url}}/recipes/:id
Remplacez :id par l'identifiant de la recette que vous souhaitez lire.
Envoyer la requête : Cliquez sur Send.
* Mettre à jour une recette
Méthode : PUT
URL : {{base_url}}/recipes/:id
Remplacez :id par l'identifiant de la recette que vous souhaitez mettre à jour.
Corps de la requête (raw, JSON) :
json
Copier le code
{
  "name": "Updated Pasta",
  "type": "dinner",
  "ingredients": [
    {
      "id": 1,
      "quantity": 150
    }
  ],
  "instructions": "Boil pasta. Add sauce. Serve hot."
}
Envoyer la requête : Cliquez sur Send.
* Supprimer une recette
Méthode : DELETE
URL : {{base_url}}/recipes/:id
Remplacez :id par l'identifiant de la recette que vous souhaitez supprimer.
Envoyer la requête : Cliquez sur Send.
    Gestion des Conflits
Essayer de supprimer un ingrédient référencé dans une recette
Méthode : DELETE
URL : {{base_url}}/ingredients/:id
Remplacez :id par l'identifiant de l'ingrédient référencé dans une recette.
Envoyer la requête : Cliquez sur Send.
Si l'ingrédient est référencé, vous devriez recevoir un statut HTTP 409.
Vérification du log "BAZINGA"
* Mettre à jour le nom d'une recette
Méthode : PUT
URL : {{base_url}}/recipes/:id
Remplacez :id par l'identifiant de la recette que vous souhaitez mettre à jour.
Corps de la requête (raw, JSON) :
json
Copier le code
{
  "name": "New Recipe Name",
  "type": "dinner",
  "ingredients": [
    {
      "id": 1,
      "quantity": 150
    }
  ],
  "instructions": "Updated instructions."
}
Envoyer la requête : Cliquez sur Send.
- Si le nom de la recette a changé, le mot "BAZINGA" devrait être loggé dans la console du serveur.
En suivant ces étapes, vous pouvez tester et valider les différentes fonctionnalités de  l'API avec Postman.
