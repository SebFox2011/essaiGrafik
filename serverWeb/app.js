const express = require('express')
const cors = require('cors')
const database = require('./database')
const app = express()

app.use(cors())
app.get('/', async function (req, res) {

  console.log('GET')
  await database.sendTestToBdd()
  await database.insertOne({id: 'coucou'})
  res.send('Hello World!')
})

app.post('/', async function (req, res) {
  console.log('POST')
  console.log(req)
  await database.sendTestToBdd()
  await database.insertOne({id: 'coucou'})
  res.send('Hello World!')
})

app.listen(3001, async function () {
  console.log('Example app listening on port 3001!')
  const count = await database.count()
  console.log(count)
})