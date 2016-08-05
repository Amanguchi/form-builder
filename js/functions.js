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

      //Check needs to be done here for fields.

    }

}


function getInput() {

  $('textarea').show();


  var code = "<input type=\"text\" placeholder=\""+placeholder+ "\" id=\""+inputid+"\" />";


    document.getElementById('output').value= code;

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

}
