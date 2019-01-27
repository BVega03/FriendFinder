var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8889;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

// parse application/json
app.use(express.json())

app.get(function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("you posted:\n")
    res.end(JSON.stringify(req.body, null, 2))
});

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});