<a href="https://nestjs.com">NestJS</a>, <a href="http://typeorm.io">TypeORM</a>, <a href="https://nextjs.org">NEXT.js (v9)</a> <a href="https://material-ui.com">Material UI (v4)</a>.</p> isomorphism system


## Features

- Cross platform - Mac, Linux and Windows
- Database synchronization with entities - powered by [TypeORM](http://typeorm.io)
- Server Side Rendering - powered by [NEXT.js](https://nextjs.org)
- API server - powered by [NestJS](https://nestjs.com)
- Authentication - powered by [Passport](http://www.passportjs.org)
- [Material UI](https://material-ui.com) design

## Technologies

- Hot reloading for the developer experience :)
  - [ts-node-dev](https://github.com/whitecolor/ts-node-dev) - Compiles your TS app and restarts when files are modified
  - [NEXT.js](https://nextjs.org) - The React Framework
- Lang
  - [TypeScript](https://www.typescriptlang.org) - Javascript that scales
- Database
  - [PostgreSQL](https://www.postgresql.org) - The World's Most Advanced Open Source Relational Database
- ORM (Object-relational mapping)
  - [TypeORM](http://typeorm.io) - ORM for TypeScript and JavaScript (ES7, ES6, ES5)
- Server
  - [NestJS](https://nestjs.com) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications
      - internally using [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
  - [NEXT.js](https://nextjs.org) - The React Framework
- Environment variables
  - [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env for nodejs projects
  - [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) - A secure webpack plugin that supports dotenv and other environment variables and only exposes what you choose and use.
- User authentication
  - [Passport](http://www.passportjs.org) - Simple, unobtrusive authentication for Node.js
- UI framework
  - [React](https://reactjs.org) - A JavaScript library for building user interfaces
  - [NEXT.js](https://nextjs.org) - The React Framework
  - [Material UI](https://material-ui.com) - React components that implement Google's Material Design.

## Setup

### Database Setup

Apollo uses [PostgreSQL](https://www.postgresql.org) **v11**.

#### For Mac Users

```bash
# install postgresql@11
$ brew install postgresql@11

# if you want to start postgresql@11 in startup, try do this
$ brew services start postgresql@11

# [MUST] create user "apollouser" with password "apollopass"
$ createuser -P apollouser

# [MUST] create database "apollodb" owened by "apollouser"
$ createdb apollodb -O apollouser
```

#### For Windows Users

##### Python

Because Apollo uses [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js), we need a Python:

- Download an installer at <https://www.python.org/downloads/windows>
- Install with "Add Python 3.X to PATH" checked

##### [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

- Run `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe **as Administrator**

##### PostgreSQL

- Download an installer at <https://www.postgresql.org/download/windows> (**v11**)
- Run the installer with a flag `--install_runtimes 0` like this:

```cmd
> postgresql-11.6-3-windows-x64.exe --install_runtimes 0
```

##### pgAdmin

- Download a latest installer at <https://www.pgadmin.org/download>
- Run the pgAdmin and login with a root user
- Right click `Login/Group Roles` and `Create > Login/Group Role`
    - `General` Panel:
        - `Name`: `apollouser`
    - `Definition` Panel:
        - `Password`: `apollopass`
    - `Priviledges` Panel:
        - Check all `Yes`
- Right click `Databases` and `Create > Database`
    - `General` Tab:
        - `Database`: `apollodb`
        - `Owner`: `apollouser`

### Application Setup

```bash
# prepare `.env` and edit it for your own environments
$ cp build/.env.example .env

# install dependencies
$ yarn

# development mode
$ yarn dev

# production mode
$ yarn build
$ yarn start
```

The `.env` file is like this:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=apollouser
DB_PASSWORD=apollopass
DB_DATABASE=apollodb
DB_SYNCHRONIZE=true

APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=8088
APP_SESSION_SECRET=apollo
```

## Production Deployment

With production usages, please use [pm2](https://github.com/Unitech/pm2) for Node.js process managements.

```bash
# install pm2
$ npm install --global pm2

# run the app "Apollo" with the config `ecosystem.config.js`
$ cd apollo
$ pm2 start
```

The example `ecosystem.config.js`:

```js
module.exports = {
  apps : [{
    name: 'Apollo',
    script: '.next/production-server/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
```
