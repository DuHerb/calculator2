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

var sum;


$(document).ready(function() {

  $(".btn").click(function() {
    var text = event.target.value;
    if($("#expression").text().includes("=") == false)
    {
      if(event.target.value == "=")
      {
        sum = Math.round(eval($("#expression").text()));
        colorcrazy(sum);
        $("#expression").append("=" + eval($("#expression").text()))
      }
      else {
        var exp = $("#expression").text();
        var lastsym = exp.charAt(exp.length - 1);
        //console.log(lastsym);
        if ((lastsym ==  "-" || lastsym ==  "+" || lastsym ==  "*" || lastsym ==  "/")


        && (text == "+" ||  text == "-" ||  text == "*" ||  text == "/"))
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


  $('#color').on('input', function() {
    $("body").css("background-color", $("#color").val());
   } )


   //setInterval(colorcrazy, 2000);

});



function colorcrazy () {


  $("body").css("background-color", colorcode(Math.round(sum)));



}


var randomcolor = function()
{
  var r = Math.round( Math.random() * 255);
  var g = Math.round( Math.random() * 255);
  var b = Math.round( Math.random() * 255);
  var color = "rgb(" + r + ", " + g + ", " + b + ")"
  return color;
}


var colorcode = function(number)
{
  var r = 64 + (Math.abs(number) % 2) * 128;
  var g = 64 + (isPrime(number) ? 128 : 0);
  var b = number;
  var color = "rgb(" + r + ", " + g + ", " + b + ")"
  return color;
}



function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
