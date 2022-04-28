$(document).ready(function(){
  var menuBtn=$(".menu-icon"), menu=$(".nav ul");
    menuBtn.click(function(){
      if(menu.hasClass("show")){
       menu.removeClass("show")
}else{
  menu.addClass("show");
}

    
    });

    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  
   


  });