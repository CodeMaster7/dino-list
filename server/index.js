const express = require("express");
require("dotenv").config();
const massive = require("massive");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
massive(process.env.DB_CONNECTION)
  .then(db => {
    console.log("-- DB CONNECTED --");
    app.set("db", db);
  })
  .catch(err => console.log("massive connection fail: ", err));

// ENDPOINTS //
app.get("/check", function(req, res) {
  res.sendStatus(200);
});
app.get("/api/dino", function(req, res) {
  const db = app.get("db");
  db.get_dinos().then(dbResult => {
    res.status(200).send(dbResult);
  });
});
app.post("/api/dino", function(req, res) {
  const { name, weight, diet } = req.body;
  const db = app.get("db");
  db.add_dino([name, weight, diet]).then(dbResult => {
    res.status(200).send(dbResult);
  });
});
app.put("/api/dino/:id");
// // // // //

const port = 1337;
app.listen(port, console.log("listening on ", port));
