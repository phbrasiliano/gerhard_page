function navLangSwitch(lang){
  if (lang == "en") {
    $("#homeNav").text("Home");
    $("#bioNav").text("About");
    $("#worksNav").text("Works");
    $("#mailNav").text("Contact");
    $("#lanButton").text("DE");
  } else {
    $("#homeNav").text("Home");
    $("#bioNav").text("Über mich");
    $("#worksNav").text("Arbeiten");
    $("#mailNav").text("Kontakt");
    $("#lanButton").text("EN");
  }
}

$(document).ready(function(){
    var language = "de";
    var content = "home"

    navLangSwitch();

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

    $("#lanButton").click(function(){
      if(language != "de"){
        language = "de";
        $(this).addClass(language)
        navLangSwitch("de");
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      }else{
        language = "en";
        $(this).addClass(language)
        navLangSwitch("en");
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      };
    });

/* Old button implementation
    $("#deButton").click(function(){
      if(language != "de"){
        language = "de";
        $(this).addClass(language)
        navLangSwitch("de");
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      };
    });


    $("#enButton").click(function(){
      if(language != "en"){
        language = "en";
        $(this).addClass("active")
        navLangSwitch(language);
        $(".content").fadeOut().promise().done(function(){
          $("." + content + "." + language).fadeIn();
        });
      };
    });
*/
    console.log(songJson)
    tableGenerator(songJson);
});
