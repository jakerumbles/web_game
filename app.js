var express = require("express");
var app = express();

//routes
app.get("/", function(req, res) {
   res.send("Hello World");
});

app.listen(3000, function() {
   console.log("Server started...");
});
