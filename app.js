var createError = require('http-errors');
var express = require('express');
var app = express();
var custosRoute = require('./routes/custos.js');
var planosRoute = require('./routes/planos.js');
app.use('/custos', custosRoute);
app.use('/planos', planosRoute);
/*
var Sequelize = require('sequelize');


const db = require("./config/config.json");
const connection = new Sequelize(db.development);

var conexao = connection.authenticate().then(function(){
    console.log('conexão ok');
}).catch(function (err){
    console.log('Não foi possível conectar');
}).done();
*/

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
      res.render('error');
    });
    app.use(function(req,res,next){
      res.header('Access-Control-Allow-Origin','*');
      res.header('Access-Control-Allow-Credentials',true);
      res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers','Content-Type');
      next();
    });
    
    app.listen(3300,function(){
      console.info('server at port 3300');
    });
    
    module.exports = app;
