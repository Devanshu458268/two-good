

var tl=gsap.timeline();
var play= document.querySelector(".play");
var videoContainer=document.querySelector(".videoContainer");
function videoPlayButton() {
  
videoContainer.addEventListener("mouseenter",function(){

    gsap.to(play,{
        opacity:1,
        scale:1,
    })
})


videoContainer.addEventListener("mouseleave",function(){

    gsap.to(play,{
        opacity:0,
        scale:0,
    })
})
videoContainer.addEventListener("mousemove",function(data){

    gsap.to(play,{
        left:data.x-50+"px",
        top:data.y-70+"px",
        
    })
})



}
videoPlayButton();

function animations(){
    tl.from(".page1 h1",{
        y:100,
        delay:.3,
        duration:.5,
        stagger:.3,
        opacity:0,
    })
    
    tl.from(".page1 .videoContainer",{
      
        opacity:0,
        duration:.3,
        delay:.2,
    })
}
animations();



var elements= document.querySelectorAll(".child");
 
// Below commented code is optional but good for understanding purpose. No harm in using the code below

// elements.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(dets){

//         gsap.to(".cursor",{
//             scale:1,
           
//         })
//     })
// })



elements.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){

        gsap.to(".cursor",{
           scale:1,
           duration:.3,
            top:dets.y,
            left:dets.x,
            transform: 'translate(-50%,-50%)',
        })
    })
})

elements.forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){

        gsap.to(".cursor",{
            scale:0,

           
        })
    })
})


gsap.to(".nav .part1 svg",{
    transform:"translateY(-100%)",
    duration:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start: "top 5%",
        end:"top -10%",
        scrub:true,
    }
})
gsap.to(".nav .part2 .links",{
    
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start: "top 5%",
        end:"top -10%",
        scrub:true,
    }
})


