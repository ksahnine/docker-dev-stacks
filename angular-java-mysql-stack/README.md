# Stack Java EE 7 / MySQL

Pile technique dockerisée constituée des composants suivants :

- frontend :
  - serveur web nginx (image Docker `nginx`)
  - application Angular (5) initialisée avec Angular CLI (image Docker `trion/ng-cli`)
- backend :
  - application Java EE 7 de type API REST (XML/JSON) 
  - serveur d'application Payara micro (image Docker `payara/micro`)
  - base de données MySQL 5.7 (image Docker `mysql`)

La pile technique est provisionnée via `docker-compose`.

