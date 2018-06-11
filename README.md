# vanillajs-todo
A vanillajs To Do app.
It is not very vanilla anymore, but still does not use any frontend framework and is insanely light weight. Here's the tech stack:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](http://mongoosejs.com/)

![A screen shot from early june '18 state.](https://i.imgur.com/I4fE9o9.png)

## Clone The Project

```sh
git clone https://github.com/mala23/vanillajs-todo
cd vanillajs-todo
yarn || npm install
[make sure a local mongodb instance is running]
npm start
```

## Drop MongoDB Database 

```sh
mongo
show dbs
use [name of db]
db.dropDatabase()
```
