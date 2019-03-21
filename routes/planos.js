'use strict';
var express = require('express');
var router = express.Router();
var model = require('../models/index');


const Sequelize = require('sequelize');
const Op = Sequelize.Op
var http = require("http");  




router.get('/',async function(req, res, next) {
 
    model.planos.findAll({}).then(planos => res.json({
      error:false,data:planos})).catch(error=> res.json({
        error:true,
        data:[],
        error:error }));
    });
    
module.exports = router;