let xhr = new XMLHttpRequest();
xhr.open("GET", "../pages/scroll.html", false)
xhr.send();
document.write(xhr.response);


console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: true
            }
        })
        .to("img", {
            scale: 5,
            z: 35,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
        .to(
            ".section.hero",
            {
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            },
            "<"
        );
});

