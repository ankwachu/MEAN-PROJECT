# MEAN-APP

Application pour adopter un petit chien. 

Utilisation de MEAN (plateforme fullstack JavaScript)  
Ces composants sont :  
MongoDB  
Express  
Angular  
NodeJS  
Ces composants sont à installer si vous ne les avez pas.  

## TODOS  
1 - CRUD create a puppy (DONE)  
2 - login   
3 - adopt a puppy  
5 - upload images

    
[Démo vidéo](https://www.loom.com/share/3c6d0830a8304cfa8772d6a391a5c266)

## Installation avec docker  

installer [Docker](https://docs.docker.com/get-docker/)  

```
git clone https://github.com/ankwachu/MEAN-APP.git   
cd MEAN-APP
docker-compose up
```

## Installation sans docker
```
git clone https://github.com/ankwachu/MEAN-APP.git   
cd MEAN-APP    
```
### Dans le backend
```
cd backend
```
modifier l'url de connection dans le fichier mongodb.config.js
```
npm install
```
ouvrir 2 terminals  
dans le premier terminal
```
nodemon server
```  
dans le second terminal
```
mongo
```
message de connection:  
Listening on port 3000  
Connexion MongoDB !

### Dans le front
```
cd front
npm install
ng serve
```

Front  
http://localhost:4200/

API  
http://localhost:3000/api/dogs
