require('dotenv').config();

const { MongoClient } = require('mongodb');

const express = require('express')
const app = express()
   .set('json spaces', 2)
   .use(express.json())
   .set('port', process.env.PORT || 5555)
   .get('/', (req, res) => (res.type('html').status(200).end(`<h1>Check it</h1>`)))
   // https://gist.github.com/raineorshine/4649304
   .get('/mongo', async (req, res) => {
      const conn = await MongoClient.connect('mongodb://db:27017');
      const db = conn.db('reach-engine');
      const col = db.collection('MyDummyCollection');
      // https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6
      const val = await col.find({ age: 45 });
      const foo = await val.toArray();
      res.send({ js: foo })
   })




const serv = app.listen(app.get('port'), () => { console.log(`Listen ${serv.address().port}`) });