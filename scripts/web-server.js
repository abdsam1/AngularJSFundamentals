var express = require('express');
var parser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
app.use(express.static(rootPath+'/app'));
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.get('/data/event/:id', function (req, res) {
    var event = fs.readFileSync('/home/samad/Downloads/AngularJSFundamentalsJoeEames/AngularFundamentalsFiles/DemoApp/app/data/event/'
    + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
});
app.post('/data/event/:id', function (req, res) {
    var event = req.body;
    fs.writeFileSync('/home/samad/Downloads/AngularJSFundamentalsJoeEames/AngularFundamentalsFiles/DemoApp/app/data/event/'
    +req.params.id+'.json', JSON.stringify(event));
    res.send(event);
});

app.listen(8000);
console.log('Listening on Port 8000');