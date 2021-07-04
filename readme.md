# Deno REST API

> This is a REST API using Deno, Oak, Deno DB and PostgreSQL

Be sure to install [https://www.postgresql.org/](postgreSQL) and create the ".env" file with your own credentials (see the **.env example** file)

## Run

```
# This project uses Denon
denon run --allow-all app.ts
```

## Routes

```
GET      /api/product
GET      /api/product/:id
POST     /api/product
PUT      /api/product/:id
DELETE   /api/product/:id
```
