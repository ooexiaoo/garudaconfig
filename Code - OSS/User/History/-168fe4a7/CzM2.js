document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.classList.contains("show")) {
                content.classList.remove("show");
                content.style.maxHeight = null;
            } else {
                content.classList.add("show");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
  
$(window).scroll(function(e){ 
    var $el = $('.first'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });
  