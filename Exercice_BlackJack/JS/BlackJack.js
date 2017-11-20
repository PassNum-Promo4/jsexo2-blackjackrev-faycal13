/*function alert_form(){
  var elem = document.getElementById("faycal");
  var changer = document.getElementById("sp").innerHTML = elem.value;

}
*/
// Etape 1 :
/*var cpuNumber;
var playerNumber;
var message;

  function blackjack() {
    var cpuNumber = Math.floor(Math.random() * 11);
    var playerNumber = document.getElementById("player_value").value;
    var message;

     // Test :

    if (cpuNumber >= playerNumber ) {
       message = "Vous avez perdu !!"
       document.getElementById("player_result").innerHTML = message;
       document.getElementById("cpu_result").innerHTML = cpuNumber;

    }else {
      message = "Vous avez gagnez !!"
      document.getElementById("player_result").innerHTML = message;
      document.getElementById("cpu_result").innerHTML = cpuNumber;
    }

  }*/
// Etape 2 :
var cpuNumber = Math.floor(Math.random() * 11);
var playerNumber = Math.floor(Math.random() * 11);
 function game() {
   var cpuNumber = Math.floor(Math.random() * 11);
   var playerNumber = Math.floor(Math.random() * 11);

 } console.log(cpuNumber + playerNumber);
