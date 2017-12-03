/**
 * Created by asma on 26/12/17.
 */

var express=require('express');
var app=express();

var MongoClient=require('mongodb').MongoClient;
conn_str = 'mongodb://asma:asma@ds123926.mlab.com:23926/yelp-dev';
app.use('/img', express.static(__dirname + '/img'));
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


MongoClient.connect(conn_str, function (err, db) {
     if(!err) {



         app.get("/api/categorie/:id", function (req, res,next) {
             console.log(req.params.id);
             db.collection("commerce").find({idcat:req.params.id}).sort({ rating: -1 }).toArray(function (err,data) {
                 if (!err) {


                     res.json({data:data});

                 }


             });


         });

         app.get("/api/categories", function (req, res,next) {
             db.collection("categories").find().toArray(function (err,data) {
                 if (!err) {

                     res.json({data:data});

                 }


             });


         });

         app.get("/api/detailt/:id", function (req, res,next) {
             console.log(req.params.id);
             db.collection("commerce").find({id:parseInt(req.params.id)}).toArray(function (err,data) {
                 if (!err) {
                     res.json(data);

                 }


             });


         });


     }




        else {
        console.log('erreur cnx');
        }





    });


var port = 3000;
app.listen(port);
/*
app.listen(8888,function () {

});*/
