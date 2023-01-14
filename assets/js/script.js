const searchBtn =document.querySelector('#search-btn');
const searchInput = document.querySelector('.search-form');
searchBtn.addEventListener("click",function(){
         searchInput.classList.toggle('active')
         shoppingChart.classList.remove('active');
         accountForm.classList.remove('active');
        
        //  loginForm.classList.remove('active');
         menu.classList.remove('active');
    });

let chartBtn =document.querySelector('#chart-btn');
let shoppingChart = document.querySelector('.shopping-chart');
chartBtn.addEventListener("click",function(){
    shoppingChart.classList.toggle('active');
    searchInput.classList.remove('active');
    accountForm.classList.remove('active');
    menu.classList.remove('active');
    
    
});
let account =document.querySelector('#login-btn');
let accountForm = document.querySelector('.account-section');
account.addEventListener("click",function(){
    accountForm.classList.toggle('active');
    searchInput.classList.remove('active');
    shoppingChart.classList.remove('active');
    menu.classList.remove('active');
    
    
})
let menuBar =document.querySelector('#menu-btn');
let menu = document.querySelector('.nav-list');
menuBar.addEventListener("click",function(){
    menu.classList.toggle('active');
    searchInput.classList.remove('active');
    shoppingChart.classList.remove('active');
    accountForm.classList.remove('active');
    
    
})
window.onscroll = () =>{

    menu.classList.remove('active');
    searchInput.classList.remove('active');
    shoppingChart.classList.remove('active');
    accountForm.classList.remove('active');
}
 

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});