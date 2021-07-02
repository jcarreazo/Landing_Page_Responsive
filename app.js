const menu = $(".menu-bar");
const nav = $(".menu-tablet-titles");
const links=$(".menu-titles-container");

var Switch=true;
const navSlide = () => {
  if($(window).width() < 768){
    $(".menu-container").hide();
    nav.css({"display":"none"})
    links.css({"display":"none"})
    Switch=true;
  }else{
    nav.css({"display":"flex"});
    links.css({"display":"flex"});
  }
  menu.click(() => {
    nav.css({"display":"flex"});
    links.css({"display":"flex"});
    setTimeout(() => {
      runEffect();
    }, 50);
    if(Switch==true){
        nav.css({"opacity": 1});
      setTimeout(() => {
        rotateClick();
      }, 100);
      $(".menu-container").each( function() {
        $(this).show({effect:"fade",duration:500})
      });
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
      
    }else{
      rotateBack();
      $(".menu-container").each( function() {
        $(this).hide({effect:"fade",duration:250})
      });

      $('html, body').css({
        overflow: 'auto',
        "overflow-x":'hidden',
        height: 'auto'
    });
    setTimeout(() => {
      nav.css({"opacity": 0})
    }, 200); setTimeout(() => {
      nav.css({"display":"none"});
      links.css({"display":"none"});
    }, 300);
    }
    Switch=!Switch
  });
  
}
const runEffect = () => {
  nav.toggleClass("menu-tablet-titles-active");
  nav.toggleClass("menu-tablet-titles-desactive");
 
  
}
const rotateClick=()=>{
  $("#id-menu").css({"transform": "rotate(180deg)","transition":" 0.3s ease-in"})
  setTimeout(() => {
    $("#id-menu").attr("name", "x");
    $("#id-menu").attr("color", "black");
  }, 200);
 

  
}
const rotateBack=()=>{
  $("#id-menu").css({"transform": "rotate(0deg)","transition":" 0.3s ease-in"})
  setTimeout(() => {
  $("#id-menu").attr("name", "menu");
  $("#id-menu").attr("color", "white");
  }, 200);

 

}
navSlide();

$( window ).resize(function() {
    if($(window).width() < 768){
    $(".menu-container").hide();
    nav.css({"display":"none"});
    links.css({"display":"none"});
    nav.removeClass("menu-tablet-titles-active");
    nav.addClass("menu-tablet-titles-desactive");
    rotateBack();
    Switch=true;
  }else{
    $(".menu-container").show();
    links.css({"display":"flex"});
  }
})