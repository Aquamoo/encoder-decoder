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

var responses = {
  "a" : "b",
  "b" : "c",
  "c" : "d",
  "d" : "e",
  "e" : "f",
  "f" : "g",
  "g" : "h",
  "h" : "i",
  "i" : "j",
  "j" : "k",
  "k" : "l",
  "l" : "m",
  "m" : "n",
  "n" : "o",
  "o" : "p",
  "p" : "q",
  "q" : "r",
  "r" : "s",
  "s" : "t",
  "t" : "u",
  "u" : "v",
  "v" : "w",
  "w" : "x",
  "x" : "y",
  "y" : "z",
  "z" : "a"
}

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
askAQuestion();
 }
});

//picture alphabet

$("button").click(function(){
    $("p").append("<b>Appended text</b>");
});
