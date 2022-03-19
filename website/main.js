/*Navigation bar Toggle*/
const nab_toggle = document.querySelector('.navbar_toggle');
const nab_menu = document.querySelector('.navbar_menu');
const nab_icons = document.querySelector('.navbar_icons');

nab_toggle.addEventListener('click', () => {
  nab_menu.classList.toggle('active');
  nab_icons.classList.toggle('active');
});

/* Star */
const count     = 50;  
const blurCount = 8;
const stage = document.querySelector(".stage");
const offstar = 0;

for (let i = 0; i < count; i++) {
    setTimeout(() => {
    makeLight(i);
  }, 5 * i);}


const repeatlight =  function(){
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const removespan = document.querySelector("span");
      removespan.parentNode.removeChild(removespan);
      makeLight(i);
    }, 5 * i);
  }
}

let timer = setInterval(repeatlight,5000);
const wallpaper1 = document.querySelector('.home_wrap');
let display_cnt = 1;

const __checkposition = function(){
  wallpaper1bot = wallpaper1.getBoundingClientRect().bottom;
  if(wallpaper1bot < 0){
    clearInterval(timer);
    display_cnt = 0;
    
  }
  else if((wallpaper1bot > 0) && (display_cnt == 0)){
    repeatlight();
    timer = setInterval(repeatlight, 5000);
    display_cnt = 1;
  }
};

function scrollfinder() {
  window.addEventListener("scroll", __checkposition);
};

scrollfinder();


function makeLight(i) {
  let span = document.createElement("span");
  if (i < blurCount) {
    span.classList.add("blur");
  }
  stage.appendChild(span);

  gsap.set(span, {
    left: gsap.utils.random(0, stage.offsetWidth),
    top: gsap.utils.random(0, stage.offsetHeight),
    scale: gsap.utils.random(0.2, 1.2, 0.1),
    opacity: 0
  });

  let tl = gsap.timeline({
    paused: true,          
    onComplate: () => {    
                           
      span.remove();     
      makeLight(i);        
    }
  })

  if (i < blurCount) {
    tl.to(span, {
      opacity: gsap.utils.random(0.1, 0),
      duration: 2.8
    })

    tl.to(span, {
      y: gsap.utils.random(-80, 80),
      x: gsap.utils.random(-80, 80),
      duration: gsap.utils.random(8, 4, 4),
      ease: Power0.easeNone
    }, -0.3)

    tl.to(span, {
      opacity: 0,
      duration: 1.6
    }, ">-1.6")
                  
    tl.play();

  } else {
    tl.to(span, {
      opacity: gsap.utils.random(1, 1),
      duration: .6
    })

    tl.to(span, {
      x: gsap.utils.random(-100, 100),
      y: gsap.utils.random(-100, 100),
      duration: gsap.utils.random(8, 4, 10),
      ease: Power0.easeNone
    }, -0.6)

    tl.to(span, {
      opacity:  .3,
      duration: .6
    }, ">-0.6")

    tl.play();
  }
}

/*Main image Slide*/
var ul = document.querySelector('.slide_wrap');

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button1_toggle = document.querySelector('.btn1 a');
const button2_toggle = document.querySelector('.btn2 a');
const button3_toggle = document.querySelector('.btn3 a');
const button4_toggle = document.querySelector('.btn4 a');
const slidebox = document.querySelector('.slide_box');


function move(){

    window.addEventListener('resize', function(){ 
        let slideLen = slidebox.clientWidth;
        ul.style.transform = "translate3d(-"+slideLen*(curIndex)+"px, 0px, 0px)"
    });

    var curIndex = 0;
    let = slide_timer = setInterval(function callback(){

        let slideLen = slidebox.clientWidth;
        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+slideLen*(curIndex+1)+"px, 0px, 0px)";

        curIndex++;

},3500); 

    setInterval(function(){
    /*Main image Slide Button*/
    let slideLen = slidebox.clientWidth;
    function btn1(){
        curIndex = 0
        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+slideLen*(curIndex)+"px, 0px, 0px)"
    }
    button1.addEventListener('click', btn1);

    function btn2(){
        curIndex = 1;
        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+slideLen*(curIndex)+"px, 0px, 0px)";
    }
    button2.addEventListener('click', btn2);

    function btn3(){
        curIndex = 2;
        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+slideLen*(curIndex)+"px, 0px, 0px)";
    }
    button3.addEventListener('click', btn3);

    function btn4(){
        curIndex = 3;
        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+slideLen*(curIndex)+"px, 0px, 0px)";
    }
    button4.addEventListener('click', btn4);

        
        if(curIndex==0||curIndex==4){  
            button1_toggle.classList.add('on');
            button2_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
            }
        else if(curIndex==1){   
            button2_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
        }
        else if(curIndex==2){   
            button3_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button2_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
        }
        else if(curIndex==3){   
            button4_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button2_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
        }
        
        if(curIndex === 4){
            setTimeout(function(){
            ul.style.transition = '0s';
            ul.style.transform = "translate3d(0px, 0px, 0px)"; },201)
            curIndex = 0;
        }
    })

}
document.addEventListener("DOMContentLoaded",function(){move();});

/*About2 Typing*/
let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["#Love is love", "#Love yourself","#Love is unity"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80); 
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);


/*Roadmap Scroll*/
var animation = function () {
    var items, winH;

    var initModule = function () {
      items = document.querySelectorAll(".content2");
      winH = window.innerHeight;
      _addEventHandlers();
    }

    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };

    var _checkPosition = function () {
      for (var g = 0; g < items.length; g++) {
        var posFromTop = items[g].getBoundingClientRect().top;
        if(winH<= posFromTop){
            items[g].classList.remove("active")
        }else if (winH - 100> posFromTop) {
            items[g].classList.add("active")
        }
      }
    }

    return {
      init: initModule
    }
  }

  animation().init();

/*FAQ Button*/
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

