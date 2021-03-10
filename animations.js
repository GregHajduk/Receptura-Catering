gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(max-width: 549px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main__write',
                start: 'top center'
            }
        });
        tl.from(".about__text-left", {
                opacity: 0,
                x: -50,
                duration: 1,
            })
            .from(".about__img-left", {
                opacity: 0,
                y: 50,
                duration: 1
            }, '-=0.5');
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about__img-left',
                start: 'top center'
            }
        });
        tl2.from(".about__text-right", {
                opacity: 0,
                x: 50,
                duration: 1,
            })
            .from(".about__img-right", {
                opacity: 0,
                y: 50,
                duration: 1
            }, '-=0.5');
    }
});
ScrollTrigger.matchMedia({
    "(min-width: 550px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main__write',
                start: 'top center'
            }
        });
        tl.from(".about__text-left", {
                opacity: 0,
                x: -50,
                duration: 1,
            })
            .from(".about__img-left", {
                opacity: 0,
                y: 50,
                duration: 1
            }, '-=0.5');
        tl.from(".about__text-right", {
                opacity: 0,
                x: 50,
                duration: 1,
            }, '-=1.5')
            .from(".about__img-right", {
                opacity: 0,
                y: 50,
                duration: 1
            }, '-=1');
    }
});


ScrollTrigger.matchMedia({
    "(max-width: 549px)": function () {
        const cards = gsap.utils.toArray('.quality__card');
        cards.forEach(quality__card => {
            gsap.from(quality__card, {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            stagger: 0.3,
                scrollTrigger: {
                    trigger: quality__card,
                    start: 'top 80%'
                }
            })
        });
    }
});
ScrollTrigger.matchMedia({
    "(min-width: 550px)": function () {
        gsap.from(".quality__card", {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.quality__card',
                start: 'top 85%'
            }
        });


    }
});