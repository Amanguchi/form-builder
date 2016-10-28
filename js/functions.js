// Main functions for the form builder web application.
//
// @Author John Cordero

function code() {

  var check = 0;

  var placeholder = document.getElementById('userplaceholder').value;
  var inputid = document.getElementById('inputid').value;
  var placeholder2 = document.getElementById('userplaceholder2').value;
  var inputid2 = document.getElementById('inputid2').value;
  var rows = document.getElementById('rows').value;
  var inputid3 = document.getElementById('inputid3').value;
  var buttonname = document.getElementById('buttonpick').value;

  var input = document.getElementsByTagName('input');

    for (var i =0; i < input.length; i++) {
        //If Fields are empty
        if(input[i].value == '') {

            input[i].style.borderColor = "red";
            errormessages(1);
            check = 1;

          }
        //If fields contain a value
        if (input[i].value) {

          input[i].style.borderColor = "#cccccc";

          }

    }
    // If rows column contains a letter or @#$
    if (isNaN(input[4].value)){

        input[4].style.borderColor = "red";
        errormessages(2);
        check = 1;
    }
    //If row number is longer than 100
    if (input[4].value >= 100) {

      alert("It is not recommended that rows are larger than 100! ...Proceeding");
    }

    //If ids are too long
     if (input[1].value.length > 15 || input[3].value.length > 15 || input[5].value.length > 15) {

      alert("It is recommended that id names remain short and sweet! ...Proceeding.");
    }

    else if (check == 0) {

      $('#output, #output2').show("slow");
      document.getElementById('errormessages').innerHTML = "";

      var code =

                  "<form role=\"form\">"
                  +"<div class=\"form-group\">"
                  +"<input class=\"form-control\" type=\"text\" placeholder=\""+placeholder+ "\" id=\""+inputid+"\"/>"
                  +"</div>"
                  +"<div class=\"form-group\">"
                  +"<input class=\"form-control\"  placeholder=\""+placeholder2+ "\" id=\""+inputid2+"\"/>"
                  +"</div>"
                  +"<div class=\"form-group\">"
                  +"<textarea class=\"form-control\"rows=\""+rows+"\" id=\""+inputid3+"\">"+"</textarea>"+"<br>"
                  +"<button type=\"submit\" class=\"btn btn-default\">"+buttonname+"\"</button>"
                  +"</div>"
                  +"</form>"

        document.getElementById('output').value= code;


    }

}

function fillfields() {

  document.getElementById('userplaceholder').value = "Your Name*";
  document.getElementById('inputid').value = "name";
  document.getElementById('userplaceholder2').value = "Your E-Mail*";
  document.getElementById('inputid2').value = "email";
  document.getElementById('rows').value = "5";
  document.getElementById('inputid3').value = "message";






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
  $('#output2').hide();

  document.getElementById('userplaceholder').value = "";
  document.getElementById('inputid').value  = "";
  document.getElementById('userplaceholder2').value  = "";
  document.getElementById('inputid2').value  = "";
  document.getElementById('rows').value = "";
  document.getElementById('inputid3').value = "";


  document.getElementById('errormessages').innerHTML = "";

  var input = document.getElementsByTagName('input');
  for (var i =0; i < input.length; i++) {

      input[i].style.borderColor = "#cccccc";

  }

}
