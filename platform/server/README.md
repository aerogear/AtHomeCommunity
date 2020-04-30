# Open Volunteer Full Stack Server

Node.js implementation for GraphQL based API

## Integrations

- Graphback (Apollo GraphQL template)
- Keycloak (Authentication)
- AMQ Online (MQTT)
- MongoDB

## Usage

This project has been created using Graphback. 
Run the project using the following steps:

- Install

```sh
yarn install
```

- Start the Mongo database and MQTT client

```sh
docker-compose up -d
```

- Start the server

```sh
yarn start:server
```
