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

    for (var i =0; i < input.length; i++ ) {

      if(input[i].value == '') {

          input[i].style.borderColor = "red";
          errormessages(1);
            if (input[i].length = input[i].length - 1) {

              System.exit(0);
            }

        } else {

          $('#output').show("slow");
          var code = "<input type=\"text\" placeholder=\""+placeholder+ "\" id=\""+inputid+"\"/>";


            document.getElementById('output').value= code;

        }


    }



}


function getInput() {




  var code = "<input type=\"text\" placeholder=\""+placeholder+ "\" id=\""+inputid+"\"/>";


    document.getElementById('output').value= code;

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
  for (var i =0; i < input.length; i++ ) {

      input[i].style.borderColor = "#cccccc";

  }

}
