const express = require('express')
const { MongoClient } = require('mongodb');

// https://gist.github.com/raineorshine/464930
module.exports = express.Router()
    .get('/', async (req, res) => {
        const conn = await MongoClient.connect('mongodb://db:27017');
        const db = conn.db('reach-engine');
        const col = db.collection('MyDummyCollection');
        // https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6
        const val = await col.find({ age: 45 });
        const foo = await val.toArray();
        res.send({ js: foo })
    });
