$(document).ready(function(){

  $('.inputdiv').hide();
  $('#output').hide();
  $('#output2').hide();
  $('#codebutton').hide();
  $('#resetbutton').hide();

  $('#startbutton').click(function(){

      $('.inputdiv').slideToggle("fast");
      $('#codebutton').slideToggle("fast");
      $('#resetbutton').slideToggle("fast");

  });


});
