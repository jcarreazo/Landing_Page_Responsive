const menu = $(".menu-bar");
const nav = $(".menu-tablet-titles");
var Switch=true;
const navSlide = () => {
  menu.click(() => {
    runEffect();
    if(Switch==true){
        nav.css({"opacity": 1});
      rotateClick();
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
    }, 200);
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
  }, 200);
  
}
const rotateBack=()=>{
  $("#id-menu").css({"transform": "rotate(0deg)","transition":" 0.3s ease-in"})
  setTimeout(() => {
  $("#id-menu").attr("name", "menu");
  }, 200);
}
navSlide();

        