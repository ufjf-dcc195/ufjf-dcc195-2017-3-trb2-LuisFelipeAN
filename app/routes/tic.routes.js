module.exports = function(app){
  var manipulador = require("../controllers/tic.controllers")
  app.use("/velha.html",manipulador.ticTacToe)
}
