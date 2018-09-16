$(document).ready(function(){

  $('li[data-section="gallery"]').on("click",function(e) {
      e.preventDefault();
      $(".gallery").stop().toggle(600);
  })


})
