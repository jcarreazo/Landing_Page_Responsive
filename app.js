const menu = $(".menu-bar");
const nav = $(".menu-tablet-titles");
const navSlide = () => {
  menu.click(() => {
  runEffect();

  });
}
const runEffect=()=>{
  
        nav.toggleClass("menu-tablet-titles-desactive")
        nav.toggleClass("menu-tablet-titles-active")    

  

}
navSlide();