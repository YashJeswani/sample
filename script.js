(function(){
 
  $(".controller").click(function(){
    id = $(this).attr("id");
    
    $(".controller-container").find(".is_current").removeClass("is_current");
    $(this).addClass("is_current");
    $(".card").attr('class', 'card card--' + id);
    $("html").attr('class', 'bg--' + id);
    
  });
  
})();
