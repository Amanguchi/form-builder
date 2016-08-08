// Main functions for the form builder web application.
//
// @Author John Cordero



function code() {

  var placeholder = document.getElementById('userplaceholder').value;
  var inputid = document.getElementById('inputid').value;
  var userplaceholder2 = document.getElementById('userplaceholder2').value;
  var inputid2 = document.getElementById('inputid2').value;
  var rows = document.getElementById('rows').value;
  var label = document.getElementById('label').value;
  var value = document.getElementById('value').value;

  var input = document.getElementsByTagName('input');

    for (var i =0; i < input.length; i++) {
        //If Fields are empty
        if(input[i].value == '') {

            input[i].style.borderColor = "red";
            errormessages(1);

          }
        //If fields contain a value
        if (input[i].value) {

          input[i].style.borderColor = "#cccccc";

          }

    }
    // If rows column contains a letter or @$()[}{!}]\]`
    if (isNaN(input[4].value)){

        input[4].style.borderColor = "red";
        errormessages(2);
    }
    //If ids are too long
     if (input[1].value.length > 15 || input[3].value.length > 15) {

      alert("It is recommended that id names remain short and sweet! ...Proceeding.");
    }

}


function errormessages(num) {

  switch (num) {
    case 0:
            console.log("Test Error!");
            break;

    case 1:

          document.getElementById('errormessages').innerHTML =
          "Make sure ALL fields have contents.";
          console.log("The user did not enter every field.");
          break;

    case 2:

          document.getElementById('errormessages').innerHTML =
          "ROWS needs to be a number!";
          console.log("The user entered a false input for the row input field.");
          break;

    default:

            console.log("There was an error within the web application!!!");

  }


}


function resetfields() {

  $('textarea').hide();

  document.getElementById('userplaceholder').value = "";
  document.getElementById('inputid').value  = "";
  document.getElementById('userplaceholder2').value  = "";
  document.getElementById('inputid2').value  = "";
  document.getElementById('rows').value = "";
  document.getElementById('label').value = "";
  document.getElementById('value').value = "";

  document.getElementById('errormessages').innerHTML = "";

  var input = document.getElementsByTagName('input');
  for (var i =0; i < input.length; i++) {

      input[i].style.borderColor = "#cccccc";

  }

}
/*
$('#output').show("slow");
var code = "<input type=\"text\" placeholder=\""+placeholder+ "\" id=\""+inputid+"\"/>";


  document.getElementById('output').value= code;
  */
