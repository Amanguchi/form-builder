// Main functions for the form builder web application.
//
// @Author John Cordero


function getInput() {

  $('textarea').show();

  var placeholder = document.getElementById('userplaceholder').value;
  var usermaxlengthvalue = document.getElementById('usermaxlength').value;
  var sizevalue = document.getElementById('size').value;
  var inputid = document.getElementById('inputid').value;

var code = "<input type=\"text\" placeholder=\""+placeholder+ "\" maxlength=\""+usermaxlengthvalue+"\" size=\""+sizevalue+"\" id=\""+inputid+"\" />";


document.getElementById('output').value= code;

}

function resetfields() {

$('textarea').hide();
document.getElementById('userplaceholder').value = "";
document.getElementById('usermaxlength').value  = "";
document.getElementById('size').value  = "";
document.getElementById('inputid').value  = "";
document.getElementById('output').value = "";



}
