//took this from a tutorial on how to deploy to heroku - betterprogramming.pub
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/inventory-manager'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/inventory-manager/index.html'));});
app.listen(process.env.PORT || 8080);