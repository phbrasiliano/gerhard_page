$(document).ready(function(){
    var language = "de";
    var content = "home"


    $("#homeNav").click(function(){
      content = "home";
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("." + content + "." + language).fadeIn();
      });
    });

    $("#bioNav").click(function(){
      content = "bio";
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("." + content + "." + language).fadeIn();
      });

    });

    $("#worksNav").click(function(){
      content = "works";
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("." + content + "." + language).fadeIn();
      });

    });

    $("#deButton").click(function(){
      if(language != "de"){
        language = "de";
        $(this).addClass("active")
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      };
    });


    $("#enButton").click(function(){
      if(language != "en"){
        language = "en";
        $(this).addClass("active")
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      };
    });


});
