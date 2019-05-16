const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// add your code here
var array = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', (req, res) => {
    res.status(200).send( {status: "ok"});
})


app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(array);
})

app.get('/api/TodoItems/:number', (req, res) => {
    res.status(200).json(array.find((item) => {
        return item.todoItemId == req.params.number;
    }));

});

app.post('/api/TodoItems/', (req, res) => {

    for (var i = 0; i < array.lenght; i++) {
        if (req.body.todoItemId == array[i].todoItemId) {
            array.splice(array[i], 1, req.body);
        } else {
            array.push(req.body);
        }
    }
    res.status(201).json(req.body);

})

app.delete('/api/TodoItems/:number', (req, res) => {
    res.status(200).json(array.splice(req.params.number, 1)[0]);
})

module.exports = app;
