$(document).ready(function(){

  alert("close button not working");

  $('.inputdiv').hide();
  $('#output, #output2').hide();
  $('#codebutton, #resetbutton, #fillbutton, #closebutton').hide();


  $('#startbutton').click(function(){

      $('.inputdiv').slideToggle("fast");
      $('#codebutton, #resetbutton, #fillbutton, #info, #closebutton').slideToggle("fast");


  });


});
