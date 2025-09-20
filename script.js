/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header');
    // Add a class if the scroll position is greater than or equal to 50
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
    : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*=============== ANIMATION ===============*/
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".section2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true
}})

tl.to("#fanta-img",{
    top: "165%",
    left: "-18%"
}, 'aiksath')
tl.to("#halforange-img",{
    top:"200%",
    left: "10%"
}, 'aiksath')
tl.to("#orange-img",{
    width: "15%",
    top:"215%",
    right: "0%"
}, 'aiksath')
tl.to("#leaf",{
    top:"150%",
    rotate: "130deg",
    left: "-20%"
}, 'aiksath')
tl.to("#leaf2",{
    top:"130%",
    rotate: "130deg",
    right: "90%"
}, 'aiksath')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".section3",
    start: "20% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true
}})


tl2.to("#halforange-img",{
    width:"26%",
    left: "37%",
    top: "270%"
}, 'ca')
tl2.to("#fanta-img",{
    width:"50%",
    top: "280%",
    left: "25%",
}, 'ca')