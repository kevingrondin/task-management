# Task Management API

## Init projet

```Shell
npx nest new task-management
```

keep only __app.module.ts__ and __main.ts__ on src folder and adapt __app.module.ts__

```Shell
yarn start:dev
```

## Module Task

```Shell
nest g module tasks
nest g controller tasks --no-spec
nest g service tasks --no-spec
```

__controller__ get data from __service__

Create model and add to controller and service

## Validation

```Shell
yarn add class-validator class-transformer
```

## Persist data

```Shell
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

```Shell
yarn add typeorm @nestjs/typeorm pg
yarn add rxjs@^7
```