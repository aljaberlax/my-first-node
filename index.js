const express = require('express');
const res = require('express/lib/response');
const app = express()
port = process.env.PORT || 5000;
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {

    res.send('hello i am jaber noq is am adding')
})
// app.use(cors())
const users = [
    { id: 1, name: 'jaber', email: 'khay shudhu halim' },
    { id: 2, name: 'abdur rahman gazi', email: 'khay shudhu halim' },
    { id: 3, name: 'jaber', email: 'khay shudhu halim' },
    { id: 4, name: 'jaber', email: 'khay shudhu halim' },
    { id: 5, name: 'al', email: 'khay shudhu halim' }
]
app.get('/users', (req, res) => {
    console.log('quary', req.query)
    // const search=req.query.name.toLowerCase()
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(match)
    }
    else {
        res.json(users)
    }
    res.json(users)
})
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening port', port)
})