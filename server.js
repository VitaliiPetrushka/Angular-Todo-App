var path = require("path");
var express = require("express");
var body_parser = require("body-parser");
var app = express();
var url = "mongodb://localhost:27017/test";
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

app.listen(8080);
app.use(express.static(path.join(__dirname, "app/")));
app.use(body_parser.json());


app.get("/api/users/", function(req, res) {
   MongoClient.connect(url, function(error, db) {
      if(error) console.log("Error at connecting to the server", error);
      else {
         db.collection("users").find().toArray(function(error, docs) {
            res.json(docs);
         });
      }
      db.close();
   });
});

app.post("/api/users/", function(req, res) {
   MongoClient.connect(url, function(error, db) {
      if(error) console.log("Error at connecting to the server", error);
      else {
         db.collection("users").insertOne(req.body);
      }
      db.close();
   });
});

app.delete("/api/users/:id", function(req, res) {
   var id = req.params.id;
   MongoClient.connect(url, function(error, db) {
      if(error) console.log("Error at connecting to the server", error);
      else {
         db.collection("users").removeOne({
            _id: new mongodb.ObjectID(id)
         });
      }
      db.close();
   });
});

app.post("/api/users/:id", function (req, res) {
   var id = new mongodb.ObjectID(req.params.id);
   MongoClient.connect(url, function(error, db) {
      if(error) console.log("Error at connecting to the server", error);
      else {
         db.collection("users").updateOne({
            _id: id
         }, req.body);
      }
      db.close();
   });
});