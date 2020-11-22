$(document).ready(function(){
    var language = "de";

    $("#homeNav").click(function(){
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("#home").fadeIn();
      });
    });

    $("#bioNav").click(function(){
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("#bio-de").fadeIn();
      });

    });

    $("#worksNav").click(function(){
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("#works").fadeIn();
      });


    });
});
