var friends = require("./../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friends)

    })
    app.post("/api/friends", function (request, response) {
console.log(request.body);
        var userData = request.body;
        var userScores = request.body["scores[]"];
        var totalDiff; 
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 2000
        };

        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var friendsScore = friends[i].scores[j];
                var surveyScore = userScores[j];
                totalDiff += parseInt(surveyScore) - parseInt(friendsScore);
            }

            if (totalDiff <= bestMatch.friendDiff) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiff = totalDiff;

            }
        }

        friends.push(userData);
        response.json(bestMatch);

        // request will hold info the user sends or the FE sends to the server
        // response will be the info sent back

    })
}