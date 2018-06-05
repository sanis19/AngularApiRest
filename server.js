//npm install --save opn  --> Esto hace que la libreria se guarde en package.json
//npm install express --save
const express = require('express');
const path = require('path');
const opn = require('opn');
const app = express();

app.use(express.static(__dirname + '/dist/'));

app.get('/*',function(req,res){

res.sendfile(path.join(__dirname+'/dist/index.html'));
});


app.listen(process.env.PORT || 8080);
console.log("Servidor corriendo en el puerto8080");
opn('http://localhost:8080');