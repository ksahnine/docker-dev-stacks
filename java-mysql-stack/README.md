# Stack Java EE 7 / MySQL

Pile technique dockerisée constituée des composants suivants :

- application exemple Java EE 7 de type API REST (XML/JSON)
- serveur d'application Payara micro
- base de données MySQL 5.7

L'infrastructure est provisionnée via `docker-compose`.

## Construction et démarrage

Mode opératoire de construction et déploiement :

```
mvn clean package
docker-compose up
```

Tester les services :

- ajouter un article
```
curl -H "Accept: application/json" -H "Content-Type: application/json" -d '{"title": "titre 1", "description": "Desc 1" }' -X POST http://localhost:8080/docker4java/store/articles
```

- afficher tous les articles
```
curl -H "Accept: application/json" http://localhost:8080/docker4java/store/articles
```

- afficher le détail d'un article
```
curl -H "Accept: application/json" http://localhost:8080/docker4java/store/articles/1
```

- supprimer un article
```
curl -H "Accept: application/json" -X DELETE http://localhost:8080/docker4java/store/articles/1
```

