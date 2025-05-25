var tl = gsap.timeline()

tl.to(".page1",{
    y: "100vh",
    scale: 0.5,
    duration: 0,
    delay: 0.5,
    ease: "power2.inOut"
})

tl.to(".page1",
    {
        y:"0vh",
        // scale: 1,
        duration: 2,
        dealy: 0.5,
        ease: "power2.inOut"

    }
)


tl.to(".page1",{
    rotate:360,
    duration: 1,
    ease: "power2.inOut",
    scale: 1,


})