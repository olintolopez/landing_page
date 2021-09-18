
/* WE DEFINE SOME VARIABLES */
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

/* WHEN WE CLICK ON MENU BUTTON */
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


/* WHEN WE SCROLL ON SCREEN */
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
}
  
