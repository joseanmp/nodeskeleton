var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//var db = mongoose.connect('mongodb://localhost/backendAPI');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


//Get example
/*
var router = express.Router();
router.route('/Anything')
    .get(function(req, res){
        var query = {};
        if(req.query.type){
            query.type = req.query.type;
        }
        Book.find(query,function(err, data){
            if(err){
                res.status(500).send(err);
            }
            else res.json(data);
        });
    });
app.use('/api', router);
*/


app.get('/', function(req,res){
    res.send('Welcome to my API');
});

app.listen(port, function(){
    console.log('Running on port ' + port);
});