"use strict";

const express = require('express');
const app = express();


app.use(express.static(__dirname + '/'));
app.use(function (err, req, res, next) {
  console.error('error', err);
  res.status(500).send(err.response || 'Something broke!');
});

app.listen(3000, function () {
  console.log("App listening on " + 3000);
});
