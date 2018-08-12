
var users = require("../data/friends.js");



module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(users.users);
  });


  app.post("/api/friends", function(req, res) {
    users.users.push(req.body);
    res.json(true);
  });

}
