# Stack Java EE 7 / MySQL

Pile technique dockerisée constituée des composants suivants :

- frontend :
  - serveur web nginx (image Docker `nginx`)
  - application AngularJS (1.6) construite avec une chaîne de construction node, Bower, Grunt (image Docker `digitallyseamless/nodejs-bower-grunt`)
- backend :
  - application Java EE 7 de type API REST (XML/JSON)
  - serveur d'application Payara micro (image Docker `payara/micro`)
  - base de données MySQL 5.7 (image Docker `mysql`)

La pile technique est provisionnée via `docker-compose`.

