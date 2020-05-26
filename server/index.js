const express = require('express')
const app = express()
const Person = require("../database/index.js").Person
const path=require('path')
const bodyParser = require('body-parser')
const port = 3000
const{Sequelize}=require('sequelize')
const sequelize = require('../database/index.js').sequelize


app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
app.use( express.static(path.join(__dirname, 'static')))


app.get('/people', (req, res) => 
Person.findAll().then((result)=>res.send(result))
);

app.post("/people", (req,res) => {
    
    Person.create({
        name:req.body.name,
        lastName:req.body.lastName
    })
    .then(result => res.send(result))
    .catch(err =>res.send(err))
    
}

);

app.put('/people', function(req,res){
    Person.update({
        name:req.body.name,
        lastName:req.body.lastName
    },{
        where:{
            id:req.body.id
        }
    }).then(result => res.send(result))
    .catch(err => console.log(err))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))