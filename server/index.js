const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

let todos = []

app.use(cors())

app.use(bodyParser.json())

// app.use(express.json())

app.post('/todos',(req,res) => {
  console.log(req.body)
  let title = req.body.title
  let priority = req.body.priority
  let dateCreated = req.body.dateCreated
  let dateCompleted = req.body.dateCompleted
  let isComplete = req.body.isComplete

  let item = {
    title: title,
    priority: priority,
    dateCreated: dateCreated,
    dateCompleted: null
  }
  todos.push(item)
  res.json(item)
})

//start the server

app.listen(3000, () => {

})
