
$(document).ready(function() { 
   $(".carousel").swiperight(function() {  
      $(this).carousel('prev');  
      });  
//add your other targets here
   $(".carousel").swipeleft(function() {  
      $(this).carousel('next');  
 });  
});  
