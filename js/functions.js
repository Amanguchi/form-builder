// Main functions for the form builder web application.
//
// @Author John Cordero


function getInput() {

  var placeholder = document.getElementById('userplaceholder').value;
  var usermaxlengthvalue = document.getElementById('usermaxlength').value;
  var sizeidvalue = document.getElementById('size').value;
  var inputid = document.getElementById('inputid').value;


//<input type="text" placeholder="" maxlength="" size ="" id="" />
var code = "<input type=\"text\" placeholder=\""+placeholder+ "\"maxlength=\""+usermaxlengthvalue+"\"";


document.getElementById('output').value= code;

}
