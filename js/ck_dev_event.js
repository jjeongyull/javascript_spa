$(document).on('click', '.nav-a', function(){
  $('.nav-a').removeClass('active');
  $(this).addClass('active');
});
$(document).on('click', '.toggle', function(){
  $('.sidebar-nav').toggleClass('close');
});