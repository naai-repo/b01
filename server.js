const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.json({data:'yo'})
})
app.get('/route1', (req, res) =>{
    res.json({data:'data from shu bhai hai kiyaaaa'})
})
app.get('/route2', (req, res) =>{
    res.json({data:'data from route 2'})
})

app.listen(7827, () =>{
    console.log('server started')
})