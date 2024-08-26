

let mm=gsap.matchMedia()
mm.add("(min-width:800px)",()=>{

    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

})










var students=setInterval(studentsDone, 10)
var branches=setInterval(branchesDone,200)
var teachers=setInterval(teachersDone,150)

var count1=1
var count2=1
var count3=1
function studentsDone(){
    count1++
    document.getElementById("count1").innerHTML=count1+"+";
    if(count1===500){
        clearInterval(students)
    }

}
function branchesDone(){
    count2++
    document.getElementById("count2").innerHTML=count2;
    if(count2===9){
        clearInterval(branches)
    }
}
function teachersDone(){
    count3++
    document.getElementById("count3").innerHTML=count3;
    if(count3===26){
        clearInterval(teachers)
    }
}

let button =document.querySelector("#menu")
let close =document.querySelector("#close")



button.addEventListener("click",function(){
    document.querySelector("ul").style.top="0%"
    button.style.display="none"
    var navtl=gsap.timeline()
navtl.to(".nav-item",{
    top:"0%",
    duration:.5
})
    navtl.from(".mnav",{
y:-50,
opacity:0,
duration:.2,
stagger:.28
    })
  
})
close.addEventListener("click",()=>{
    document.querySelector("ul").style.top="-50vh"
    button.style.display="block"

})


// GSAP
document.addEventListener("mousemove",function(delt){
gsap.to("#cursor",{
    x:delt.x,
    y:delt.y,
rotate:delt.x,


})
})
var tl =gsap.timeline()

tl.from(".loading-sides span",{
    y:50,
    x:-50,
    duration:.5,
    stagger:.30,
    opacity:0,
    scale:.8
})
tl.to(".loading-sides span",{
    y:-50,
    delay:.2,
    duration:.5,
    stagger:.20,
    opacity:0
})

tl.to(".loading-sides",{
    transform:"translateY(-100%)",
    stagger:.15,
  
    duration:.5
})
tl.from("nav",{
    opacity:0
})

tl.to("#loading",{
    display:"none"
})


var tl2=gsap.timeline()
tl2.to(".page2 span",{
    backgroundSize:"100% 100%",
    stagger:.20,
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        start:"top 20%",
        end:"top 0%",
        scrub:true,
      
    }
})
tl2.to(".code-img",{
  opacity:1,
   duration:.9,
   scrollTrigger:{
    trigger:".page2",
    scroller:"#main",
    start:"top 0%",
    end:"top -3%",
    scrub:true,

}
})


var mm2=gsap.matchMedia()
mm2.add("(max-width:799px)",()=>{
    let button =document.querySelector("#menu")
    let close =document.querySelector("#close")
  let nav=document.querySelector("ul")
    button.addEventListener("click",function(){
       
        button.style.display="none"
        gsap.to(nav,{
            top:"0%"
        })
      
    })
    close.addEventListener("click",()=>{
        gsap.to(nav,{
            top:"-50vh"
        })
        button.style.display="block"
    
    })
    var tl2=gsap.timeline()
tl2.to(".page2 span",{
    backgroundSize:"100% 100%",
    stagger:.20,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 20%",
        end:"top 0%",
        scrub:true,
      
    }
})
tl2.to(".code-img",{
  opacity:1,
   duration:.9,
   scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 0%",
    end:"top -3%",
    scrub:true,

}
})
    
})

