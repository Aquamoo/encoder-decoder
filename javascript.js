function askAQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase()
  var giveresponse = responses[input]

var fallback = ["sorry I don't understand ", "try again ", "are you sure about that", "me no hablo espanol"];


//code from my chatbot project
//copied from myself

  if (giveresponse == undefined) {
var rand = Math.floor((Math.random() * fallback.length));
var fallbackAnswer = fallback[rand];
document.getElementById("text-area").innerHTML += input + ": " + fallbackAnswer + " " + "<br/> <br/>"
}

  else {


  document.getElementById("text-area").innerHTML += input + ": " + giveresponse + " ";
  }
}

//different combos for Caesar cipher

var letters = {
  "a" : "65",
  "b" : "66",
  "c" : "67",
  "d" : "68",
  "e" : "69",
  "f" : "70",
  "g" : "71",
  "h" : "72",
  "i" : "73",
  "j" : "74",
  "k" : "75",
  "l" : "76",
  "m" : "77",
  "n" : "78",
  "o" : "79",
  "p" : "80",
  "q" : "81",
  "r" : "82",
  "s" : "83",
  "t" : "84",
  "u" : "85",
  "v" : "86",
  "w" : "87",
  "x" : "88",
  "y" : "89",
  "z" : "90"
}

$("#text-area").append(letters[e.keyCode-1])

//$(document).keydown(function(e) {
//if (e.keyCode == 13) {
//askAQuestion();
//}
//});

//picture alphabet

$("button").click(function(){
    $("p").append("<b>Appended text</b>");
});
