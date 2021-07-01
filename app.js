const navSlide = () => {
  const menu = $(".menu-bar");
  const nav = $(".menu-tablet-titles");

  menu.click(() => {
    let width=nav.css("width");
    if(nav.css("margin-right")==width){
      nav.animate({"margin-right":`-=${width}`});
    }else{
      nav.animate({"margin-right":`+=${width}`})
    }
  });
  
}
navSlide();