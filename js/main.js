$(document).ready(function(){
    var language = "de";
    var content = "home"


    $("#homeNav").click(function(){
      content = "home";
      $(".nav-masthead a").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("." + content + "." + language).fadeIn();
      });
    });

    $("#bioNav").click(function(){
      content = "bio";
      $(".nav-masthead a").removeClass("active");
      $(this).addClass("active")
      $(".content").fadeOut().promise().done(function(){
        $("." + content + "." + language).fadeIn();
      });

    });

    $("#worksNav").click(function(){
      content = "works";
      $(".nav-masthead  a").removeClass("active");
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

// Generates the table with all of Gerhards compositions,
// out of a json file.
function tableGenerator(){

}
