const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2');


const sequelize = new Sequelize('ugur', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  });

  sequelize.authenticate()
  .then(()=> console.log("database connected"))
  .catch(err => console.log(err));

  const Person = sequelize.define("person", {
      name:{
          type: DataTypes.STRING,
          allowNull:false
      },
      lastName:{
          type: DataTypes.STRING,
          allowNull:false
          
      }
  },{
      timestamps:false
  })

  Person.sync();


  module.exports={
    Person,
    sequelize
  }