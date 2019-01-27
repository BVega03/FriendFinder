var friends = require("./../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function(request, response) {
        response.json(friends)

    })
    app.post("/api/friends", function(request, response) {
        // request will hold info the user sends or the FE sends to the server
        // res will be the info sent back
        
    }
    )
}