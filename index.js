// const { application } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Course Api running');
})
app.get('/course-categories', (req, res) => {
    res.send(courseCategories)
})
app.listen(port,()=> {
    console.log('Courses running on port ', port)
})