function navLangSwitch(lang){
  if (lang == "en") {
    $("#homeNav").text("Gerhard Stalze");
    $("#bioNav").text("About");
    $("#worksNav").text("Works");
    $("#contactNav").text("Contact");
    $("#lanButton").text("DE");
  } else {
    $("#homeNav").text("Gerhard Stalze");
    $("#bioNav").text("Über mich");
    $("#worksNav").text("Arbeiten");
    $("#contactNav").text("Kontakt");
    $("#worksNav").text("Werk");
    $("#lanButton").text("EN");
  }
}

$(document).ready(function(){
    var language = "de";
    var content = "home"
    var instFilter = false;

    tableGenerator(songJson);
    filterGenerator(instrumentList);
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
      $("#contactNav").click(function(){
        content = "contact";
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

    $('.dropdown-item').click(function(){
      var instrumentSelect = $(this).text();
      $(".table").fadeOut().promise().done(function(){
        $("#tbodyDe tr").each(function(){
          $(this).css("display", "");

          var instrumentList = $(this).find(".instrumentList").text().split(',');

          if( !(instrumentList.includes(instrumentSelect))){
            console.log(this);
            $(this).css("display", "none");
          };
        });
        $("#tbodyEn tr").each(function(){
          $(this).css("display", "");

          var instrumentList = $(this).find(".instrumentList").text().split(',');

          if( !(instrumentList.includes(instrumentSelect))){
            console.log(this);
            $(this).css("display", "none");
          };
        });
        $(this).fadeIn();
      });
    });
});
