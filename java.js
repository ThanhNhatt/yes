const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')

let index = 0
console.log (addressbtn)
console.log (addressclose)

addressbtn.addEventListener("click" , function() {
    document.querySelector('.address-form').style.display="flex" 
   

})
addressclose.addEventListener("click" , function() {
    document.querySelector('.address-form').style.display="none" 


})

//slider
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgnumber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgnumber.length)
rightbtn.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
leftbtn.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
//slider1
const imgnumberli = document.querySelectorAll('.slider-content-left-bottom li')
imgnumberli.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right=index *100+"%" 
        image.classList.add("active")
    })
})
function removeactive(){
    let imageactive = document.querySelector('.active')
    imageactive.classList.remove("active")
}
//slider gia dung

/*slider2*/
function imgauto(){
    index=index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right=index *100+"%" 
   imgnumberli[index].classList.add("active")
}
setInterval(imgauto, 2500)
//------------------slider product111111111111111111--------------------------//
const rightbtntwo = document.querySelector('.fa-chervon-right-two')
const leftbtntwo = document.querySelector('.fa-chervon-left-two')
const imgnumbertwo = document.querySelectorAll('.slider-product-one-content-items')
console.log(imgnumbertwo)
rightbtntwo.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumbertwo.length-1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
leftbtntwo.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
// slider three//
const rightbtnthree = document.querySelector('.fa-chervon-right-three')
const leftbtnthree = document.querySelector('.fa-chervon-left-three')
const imgnumberthree = document.querySelectorAll('.slider-product-two-content-items')
console.log(imgnumberthree)
rightbtnthree.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumberthree.length-1){
        index = 0
    }
    document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
})
leftbtnthree.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumberthree.length-1
    }
    document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
})


//buton giohang//














/*countdown*/
const countdown = document.querySelector('.countdown');
const timerHours = countdown.querySelector('.hours');
const timerMinutes = countdown.querySelector('.minutes');
const timerSeconds = countdown.querySelector('.seconds');

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
  function updateClock() {
    const t = getTimeRemaining(endtime);

    
    timerHours.innerHTML = ('0' + t.hours).slice(-2);
    timerMinutes.innerHTML = ('0' + t.minutes).slice(-2);
    timerSeconds.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) +  2 * 60 * 60 * 1000);
initializeClock(deadline);
/*background*/
  

  document.getElementById('show-more-btn').addEventListener('click', function() {
    var additionalContent = document.getElementsByClassName('additional-content');
    
    for (var i = 0; i < additionalContent.length; i++) {
      additionalContent[i].style.display = 'block';
    }
    
    this.style.display = 'none';
  });

  /*sil*/
 /*global console*/

var gallary = document.getElementById('slider-screen'),
next    = document.getElementById('next-slide'),
prev    = document.getElementById('prev-slide'),
slide   = document.querySelectorAll('.slider-img'),
dataImg = document.querySelectorAll('.slider-img'),
balls  = document.querySelectorAll('.bullets li'),
slideTimer,
currentSlide = 1,
currentBall = 1;

slide[0].classList.add('active');
balls[0].classList.add('active');

next.onclick = toNext;
prev.onclick = toPrev;




// function to play the slider automatic when the page is open

function palySliderAtuomatic () {
    'use strict';
    removeActive();
    if(currentSlide > slide.length){
        currentSlide = 1;
    }		
    slide.forEach(function(i,k,slide){
        if(slide[k].getAttribute('data-img') == currentSlide){
            slide[k].classList.add('active');
            balls[k].classList.add('active');
            if(currentSlide == 1){
                gallary.setAttribute('style',`transform: translateX(0px)`);
            } else {
                gallary.setAttribute('style',`transform: translateX(calc(-1200px * ${currentSlide - 1}))`);
            }			
        }
    });		
}

slideTimer = setInterval(function(){
            currentSlide++;
            palySliderAtuomatic();
        },3000);

function toNext (){
'use strict';
clearInterval(slideTimer);
if(currentSlide < slide.length){
    currentSlide += 1;
    currentBall  += 1;
    check();
} else {
    currentSlide = 1;
    currentBall  = 1;
    check();
}
slideTimer = setInterval(function(){
            currentSlide++;
            palySliderAtuomatic();
        },3000);
}

// To get the previous slide
function toPrev (){
'use strict';
clearInterval(slideTimer);
if(currentSlide == 1){
    currentSlide = slide.length;
    currentBall  = balls.length;
    check();
} else {
    currentSlide -= 1;
    currentBall  -= 1;
    check();
}
slideTimer = setInterval(function(){
            currentSlide++;
            palySliderAtuomatic();
        },3000);
}

// click in any down ball bar

balls.forEach(function (item, key, balls){
    balls[key].onclick = function (){
        'use strict';
        clearInterval(slideTimer);
        removeActive();
        currentSlide = this.getAttribute('data-bull');
        currentBall  = this.getAttribute('data-bull');
        check();
        slideTimer = setInterval(function(){
            currentSlide++;
            palySliderAtuomatic();
        },3000);
    }
    
});


/*sil*/
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000); // Đặt thời gian chuyển slide sau mỗi 3 giây

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}



/*scroll*/

