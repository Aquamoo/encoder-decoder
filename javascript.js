//the converter to english
var CaesarCipherToEnglish = {
  "A":"z",
  "B":"a",
  "C":"b",
  "D":"c",
  "E":"d",
  "F":"e",
  "G":"f",
  "H":"g",
  "I":"h",
  "J":"i",
  "K":"j",
  "L":"k",
  "M":"l",
  "N":"m",
  "O":"n",
  "P":"o",
  "Q":"p",
  "R":"q",
  "S":"r",
  "T":"s",
  "U":"t",
  "V":"u",
  "W":"v",
  "X":"w",
  "Y":"x",
  "Z":"y"
}
//Caesar cipher converter from english
var CaesarCipher = {
  "A":"b",
  "B":"c",
  "C":"d",
  "D":"e",
  "E":"f",
  "F":"g",
  "G":"h",
  "H":"i",
  "I":"j",
  "J":"k",
  "K":"l",
  "L":"m",
  "M":"n",
  "N":"o",
  "O":"p",
  "P":"q",
  "Q":"r",
  "R":"s",
  "S":"t",
  "T":"u",
  "U":"v",
  "V":"w",
  "W":"x",
  "X":"y",
  "Y":"z",
  "Z":"a"
}
/*event Handlers
this area i had help from max. he helped me learn how to do the functions, and
he helped me put it in order
*/
$("input[type='radio']").click(function() {
$("input:checked").prop('checked',false);
$(this).prop('checked',true);

$("#inputText").val("");
$("#textArea").text("");
      });

$("#inputArea").keydown(function(){
  if($("input:checked").val() == "echo"){
         $("#textArea").append(String.fromCharCode(event.which));
}
//puts the caesar cipher
else if($("input:checked").val() == "Caesar cipher"){
//message that will be split and encoded
var MessageToEncode = String.fromCharCode(event.which);
var Encoding = MessageToEncode.split('');
MessageToEncode = CaesarCipher[Encoding[0]];
         $("#textArea").append( MessageToEncode );
  }
  else{
    console.log("error has occured");
  }
});
//decodes from the caesar cipher to english
$("#translationInputArea").keydown(function(){
  var MessageToEncode = String.fromCharCode(event.which);
  var Encoding = MessageToEncode.split('');
  MessageToEncode = CaesarCipherToEnglish[Encoding[0]];
           $("#translationArea").append( MessageToEncode );
});
