const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// Serve any static files
app.use(express.static("static"));

app.get("/:type/:id", async function(req, res) {
  var type = req.params.type;
  var id =  req.params.id;
  var data = {"name": "ERC404m #1","description":"Name: Multichain ERC404 by muon",
  "external_url":"https://erc404.muon.net",
  "animation_url":`https://erc404-metadata.muon.net/arts/${type}.mp4`,"attributes":[{"trait_type":"Type","value": `${type}`}]}
  res.send(data);
});

app.listen(port, host, () => console.log(`Listening on port ${port}`));
