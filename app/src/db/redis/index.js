const express = require('express')
const redis = require("redis");
module.exports = express.Router()
    .get('/', (req, res) => {
        const client = redis.createClient("redis://cache:6379")
        const key = `Task: ${Math.random().toString(32).replace('.', '')}`;
        client.hmset(key, {
            done: false,
            id: key,
            name: "Simple task"
        });
        client.keys("Task:*", (err, keys) => {
            if (err) throw err; keys.forEach(key => {
                const arr = [];
                client.hgetall(key, (err, task) => {
                    if (err) throw err;
                    arr.push(task);
                    if (arr.length === keys.length) {
                        res.send(arr);
                    }
                });
            });
            client.quit();
        })
    });
