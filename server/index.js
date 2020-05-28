const express = require('express')
const app = express()
const path=require('path')
const bodyParser = require('body-parser')
const port = 3000
const{Sequelize}=require('sequelize')
const sequelize = require('../database/index.js').sequelize
const Product = require("../database/index.js").Product


app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../static')))


app.get('/products', (req, res) => 
    Product.findAll().then((result)=>res.send(result))
);

app.post("/products", (req,res) => {
    
    Product.create({
       imgURL:req.body.imgURL,
       type:req.body.type,
       name:req.body.name,
       price:req.body.price

    })
    .then(result => res.send(result))
    .catch(err =>res.send(err))

    
}

);

app.put('/products', function(req,res){
    Product.update({
       price:req.body.price
    },{
        where:{
            id:req.body.id
        }
    }).then(result => res.send(result))
    .catch(err => console.log(err))
})

app.delete('/products', function(req,res){
    
    Product.destroy({
        where:{
            id:req.query.id
        }
    }).then(result => res.send("deleted"))
    .catch(err => res.send(err))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))