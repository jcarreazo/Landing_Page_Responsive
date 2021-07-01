const menu = $(".menu-bar");
const nav = $(".menu-tablet-titles");
const links=$(".menu-titles-container");
$(".menu-container").hide();
var Switch=true;
const navSlide = () => {
nav.css({"display":"none"})
links.css({"display":"none"})
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
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
      
    }else{
      rotateBack();
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
  $(".menu-container").each( function() {
    $(this).show({effect:"fade",duration:500})
  });

  
}
const rotateBack=()=>{
  $("#id-menu").css({"transform": "rotate(0deg)","transition":" 0.3s ease-in"})
  setTimeout(() => {
  $("#id-menu").attr("name", "menu");
  $("#id-menu").attr("color", "white");
  }, 200);
  let increment=40
  $(".menu-container").each( function() {
    $(this).hide({effect:"fade",duration:250})
    console.log(increment);
  });

}
navSlide();

        