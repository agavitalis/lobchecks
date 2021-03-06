# Lob Checks API

This is an express application that demonstrates the use of Lobs Checks API for sending physical checks.

## Application Setup

#### Clone the Repo

```bash
git clone https://github.com/agavitalis/lobchecks.git
```

#### Install dependencies

```bash
npm install
```

#### Configure Lob Credentials

- Update `Lob API Keys` with your Lob API Keys.
- Update  `Database Credentials` with your correct database Credentials
These credentials should be added in the `.env file` at the root directory of this application.

### Run server

#### In development

```bash
npm run dev
```

#### In production

```bash
npm run start
```

## Contributing
Adding features and making changes to the project.

#### Create your branch to work off

```bash
git checkout -b <type/your-branch-name>
```

#### Create pull request to master

```bash
git fetch --prune
git pull
git push --set-upstream origin <type/your-branch-name>
```

## Tech Stack

1. [Express](https://expressjs.com/): NodeJS Web framework
2. [Lob Node SDK](https://www.npmjs.com/package/lob): Lob NodeJs SDK.
3. [Mongo](https://www.mongodb.com/): A non relational database
4. [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is a MongoDB object modeling tool
6. [Handlebars](https://www.npmjs.com/package/hbs): NodeJS view templating engine
