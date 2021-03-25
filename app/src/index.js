require('dotenv').config();


const express = require('express')
const app = express()
   .set('json spaces', 2)
   .use(express.json())
   .set('port', process.env.PORT || 5555)
   .get('/', (req, res) => (res.type('html').status(200).end(`<h1>Check it</h1>`)))


app.use('/redis', require('./db/redis'))
app.use('/mongo', require('./db/mongo'))

const serv = app.listen(app.get('port'), () => { console.log(`Listen ${serv.address().port}`) });