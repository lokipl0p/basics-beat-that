var mode = 0
var message =""
var myOutputValue = ""
var randomRolls = function(){
  randomInteger = Math.floor(Math.random()*6)+1
  randomInteger2 = Math.floor(Math.random()*6)+1
  return randomInteger,randomInteger2;
}
var player1 = function(input){
  if (input != ""){
    myOutputValue = "Please click 'Submit' to begin the dice roll";
    return myOutputValue
  }
}
var main = function (input) {
  if (mode == 0){
  myOutputValue = "Hello, welcome to Beat That! Kindly select click 'Submit' to begin the game!";
  mode = 1
  console.log(myOutputValue, mode)
  return myOutputValue}
  if (input != ""){
    myOutputValue = "Please click 'Submit' to begin the dice roll"
    return mode, myOutputValue;
    }
  if (mode == 1){
    randomRolls();
    myOutputValue = "Player 1 rolled " + randomInteger + " and " + randomInteger2 +
                    "<br> Please choose the order of the dice: <br> Key in '1'" +  
                    "if you would like the first die to be the first digit<br>" +
                    "Key in '2' if you would like the second die to be the second digit"
    return myOutputValue
  }
}


