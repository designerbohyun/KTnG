$(document).ready(function(){


  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    console.log(sct);

    if(sct <= 0){
        $('.header-box').addClass('active');
        $('.header-logo').addClass('active');
        $('.menu li a').addClass('active');
    }else{
      $('.header-box').removeClass('active');
      $('.header-logo').removeClass('active');
      $('.menu li a').removeClass('active');
  }
  });

  $('.menu-list1').click(function(){
    var height = $("#section2").offset();
    $('html, body').animate({scrollTop: height.top}, 1000);
  });

  $('.menu-list3').click(function(){
    var height1 = $("#section3").offset();
    $('html, body').animate({scrollTop: height1.top}, 1000);
  });

  $('.menu-list4').click(function(){
    var height2 = $("#section4").offset();
    $('html, body').animate({scrollTop: height2.top}, 1000);
  });

  $('.menu-list5').click(function(){
    var height3 = $("#section5").offset();
    $('html, body').animate({scrollTop: height3.top}, 1000);
  });




  media();

  function media(){

    var windowWidth = $(window).width();
    if(windowWidth >= 1920){

    //header-area

    // main-banner-area
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:{
       delay:4500,
       disableOnInteraction: false,
     },
    });

    // sec3
    var swiper = new Swiper(".thirdSwiper", {
       loop:true,
       autoplay:{
        delay:4500,
        disableOnInteraction: false,
      },
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

          //top-btn : 상단이동
      var but = $('.arrow-top-btn');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      var but = $('.logo-area');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      
      var but = $('.header-logo');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });


    }else if(windowWidth >= 1199){
          //header-area
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      if(sct <= 0){
        console.log('스크롤추가');
          $('.header-box').addClass('active');
          $('.header-logo').addClass('active');
          $('.menu li a').addClass('active');
      }else{
        $('.header-box').removeClass('active');
        $('.header-logo').removeClass('active');
        $('.menu li a').removeClass('active');
    }
    });

    // main-banner-area
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:{
       delay:4500,
       disableOnInteraction: false,
     },
    });

    // sec3
    var swiper = new Swiper(".thirdSwiper", {
       loop:true,
       autoplay:{
        delay:4500,
        disableOnInteraction: false,
      },
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

          //top-btn : 상단이동
    var but = $('.arrow-top-btn');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      var but = $('.header-logo');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      var but = $('.logo-area');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });


    }else if(windowWidth >= 959){
      //header-area
$(window).scroll(function(){
  const sct = $(window).scrollTop();
  if(sct <= 0){
    console.log('스크롤추가');
      $('.header-box').addClass('active');
      $('.header-logo').addClass('active');
      $('.menu li a').addClass('active');
  }else{
    $('.header-box').removeClass('active');
    $('.header-logo').removeClass('active');
    $('.menu li a').removeClass('active');
}
});

// main-banner-area
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay:{
   delay:4500,
   disableOnInteraction: false,
 },
});

// sec3
var swiper = new Swiper(".thirdSwiper", {
   loop:true,
   autoplay:{
    delay:4500,
    disableOnInteraction: false,
  },
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

      //top-btn : 상단이동
var but = $('.arrow-top-btn');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.header-logo');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.logo-area');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });


    }else if(windowWidth >= 759){
      //header-area
$(window).scroll(function(){
  const sct = $(window).scrollTop();
  if(sct <= 0){
    console.log('스크롤추가');
      $('.header-box').addClass('active');
      $('.header-logo').addClass('active');
      $('.menu li a').addClass('active');
  }else{
    $('.header-box').removeClass('active');
    $('.header-logo').removeClass('active');
    $('.menu li a').removeClass('active');
}
});

// main-banner-area
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay:{
   delay:4500,
   disableOnInteraction: false,
 },
});

// sec3
var swiper = new Swiper(".thirdSwiper", {
   loop:true,
   autoplay:{
    delay:4500,
    disableOnInteraction: false,
  },
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

      //top-btn : 상단이동
var but = $('.arrow-top-btn');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.header-logo');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.logo-area');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });


    }else if(windowWidth >= 500){
      //header-area
$(window).scroll(function(){
  const sct = $(window).scrollTop();
  if(sct <= 0){
    console.log('스크롤추가');
      $('.header-box').addClass('active');
      $('.header-logo').addClass('active');
      $('.menu li a').addClass('active');
  }else{
    $('.header-box').removeClass('active');
    $('.header-logo').removeClass('active');
    $('.menu li a').removeClass('active');
}
});

// main-banner-area
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay:{
   delay:4500,
   disableOnInteraction: false,
 },
});

// sec3
var swiper = new Swiper(".thirdSwiper", {
   loop:true,
   autoplay:{
    delay:4500,
    disableOnInteraction: false,
  },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

      //top-btn : 상단이동
var but = $('.arrow-top-btn');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.header-logo');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });

  var but = $('.logo-area');

  but.on('click',function(e){
    e.preventDefault();
      $('html,body').animate({
        scrollTop:0,
        },1000);
  });


    }else{

    //header-area
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      if(sct <= 0){
        console.log('스크롤추가');
          $('.header-box').addClass('active');
          $('.header-logo').addClass('active');
          $('.menu li a').addClass('active');
      }else{
        $('.header-box').removeClass('active');
        $('.header-logo').removeClass('active');
        $('.menu li a').removeClass('active');
    }
    });

    // main-banner-area
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:{
       delay:4500,
       disableOnInteraction: false,
     },
    });

    // sec3
    var swiper = new Swiper(".thirdSwiper", {
       loop:true,
       autoplay:{
        delay:4500,
        disableOnInteraction: false,
      },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

          //top-btn : 상단이동
    var but = $('.arrow-top-btn');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      var but = $('.header-logo');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });

      var but = $('.logo-area');

      but.on('click',function(e){
        e.preventDefault();
          $('html,body').animate({
            scrollTop:0,
            },1000);
      });


    }



  }
    

}); /* end */