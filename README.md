## Google Cloud Function and NestJs

Starter project for Google Cloud Function and NestJs

# My environment

MacOS Monterey `Version 12.6 (21G115)`
Chip Apple M1

NodeJs `18.15.0 (with npm 9.5.0)`

# Prerequisites

You have to completely understand this documentation before we start.

https://docs.nestjs.com/faq/serverless

1. What is serverless
2. What is cold start
3. ...

## Get started

```bash
$ npm install
```

## Running the app in local

```bash
# development
$ npm run start api
$ npm run start api-admin

# watch mode
$ npm run start:dev api
$ npm run start:dev api-admin

# production mode
$ npm run start:prod api
$ npm run start:prod api-admin

# Run all aws lambda function in local
$ npm run prod:functions
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
