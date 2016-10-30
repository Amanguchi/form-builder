$(document).ready(function(){


  $('.inputdiv').hide();
  $('#output, #output2').hide();
  $('#codebutton, #resetbutton, #fillbutton').hide();


  $('#startbutton').click(function(){

      $('.inputdiv').slideToggle("fast");
      $('#codebutton, #resetbutton, #fillbutton, #info').slideToggle("fast");


  });


});
