'use strict';
var express = require('express');
var router = express.Router();
var model = require('../models/index');
//const cors = require('../middleware/cors');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
var http = require("http");  
var cors = require('cors');
var app = express();

router.post('/',cors(),async function(req, res, next) { 
  console.log('conectou');
  const{ 
    origem,destino
   } = req.body;
  
try{
  const custos = await model.custos.findOne({
    attributes:['value'],
    where:{
      origin:origem,
      destiny:destino
    }});
  

  return res.send({
    custos,
  });

}catch(error){
  console.log(error.message);
}

    });

    router.get('/',cors(),async function(req, res, next) { 
      model.custos.findAll({
        Attributes: ['origin'], group: ['origin']
      }).then(custos => res.json({
        error:false,data:custos})).catch(error=> res.json({
          error:true,
          data:[],
          error:error }));
      });

module.exports = router;