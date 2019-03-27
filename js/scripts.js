var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {

  $(".btn").click(function() {
    var text = event.target.value;
    if($("#expression").text().includes("=") == false)
    {
      if(event.target.value == "=")
      {
        $("#expression").append("=" + eval($("#expression").text()))
      }
      else {
        var exp = $("#expression").text();
        if ((exp.charAt(exp.length - 1) ==  "-" || exp.charAt(exp.length - 1) ==  "+") && (text == "+" ||  text == "-"))
        {
          $("#expression").text(exp.slice(0, exp.length - 1) + text);
        }
        else {
          $("#expression").append(text);
        }
      }
    }
    if(event.target.id == "btn-CE")
      $("#expression").text("");

  })
});
