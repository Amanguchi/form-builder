$(document).ready(function(){

  $('.inputdiv').hide();
  $('.final').hide();
  $('#output').hide();
  $('#codebutton').hide();

  $('#startbutton').click(function(){

      $('.inputdiv').toggle("fast");
      $('#codebutton').show();

  });


});
