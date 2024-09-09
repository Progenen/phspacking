import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__col--menu");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    
    main.style.paddingTop = header.offsetHeight + "px";

    if (window.innerWidth <= 992) {
        document.body.append(menu);

        menu.style.marginTop = header.offsetHeight + "px";

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
        })
    }

    if (document.querySelector(".blog__slider")) {
        const blogSlider = new Swiper('.blog__slider', {
            slidesPerView: 1,
            spaceBetween: 25,
            modules: [Navigation, Pagination],
            navigation: {
                prevEl: ".blog__slider-nav-arrow--prev",
                nextEl: ".blog__slider-nav-arrow--next",
            },
            pagination: {
                el: ".blog__slider-pag"
            },
            breakpoints: {
                1200: {
                   slidesPerView: 4 
                },
                992: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                576: {
                }
            }
        })
    }

    if (window.innerWidth >= 992 && document.querySelector(".section-slides")) {

        const sectionSlides = document.querySelectorAll(".section-slide");
        const sectionSlidesBtns = document.querySelectorAll(".section-slide__btn");
        const tl = gsap.timeline();

        tl.fromTo('.section-slide--1',
            {
                y: '0',
            },
            {
                y: '0'
            }
        )

        tl.fromTo('.section-slide--2',
            {
                y: '0',
            },
            {
                y: '-100%',
            },
        );
        tl.fromTo('.section-slide--3',
            {
                y: '0',
            },
            {
                y: "-200%",
            },
            1
        )
        tl.fromTo('.section-slide--2 .section-slide__btn',
            {
                y: '0'
            },
            {
                y: "-500%"
            },
            0.9
        )
        tl.fromTo('.section-slide--2 .section-slide__top',
            {
                y: '0'
            },
            {
                y: "-70%"
            },
            0.9
        );

        tl.fromTo('.section-slide--4',
            {
                y: '0',
            },
            {
                y: '-300%'
            },
            1.2
        );
        tl.fromTo('.section-slide--3 .section-slide__btn',
            {
                y: '0'
            },
            {
                y: "-500%"
            },
            1.1
        )
        tl.fromTo('.section-slide--3 .section-slide__top',
            {
                y: '0'
            },
            {
                y: "-70%"
            },
            1.1
        );

        tl.fromTo('.section-slide--5',
            {
                y: '0',
            },
            {
                y: '-400%'
            },
            1.4
        );
        tl.fromTo('.section-slide--4 .section-slide__btn',
            {
                y: '0'
            },
            {
                y: "-500%"
            },
            1.3
        )
        tl.fromTo('.section-slide--4 .section-slide__top',
            {
                y: '0'
            },
            {
                y: "-70%"
            },
            1.3
        )
        tl.fromTo('.section-slide--6',
            {
                y: '0',
            },
            {
                y: '-500%'
            },
            1.6
        );
        
        tl.fromTo('.section-slide--5 .section-slide__btn',
            {
                y: '0'
            },
            {
                y: "-500%"
            },
            1.5        )
        tl.fromTo('.section-slide--5 .section-slide__top',
            {
                y: '0'
            },
            {
                y: "-70%"
            },
            1.5        )


        tl.fromTo('.section-slide--7',
            {
                y: '0',
            },
            {
                y: '-600%'
            },
            2.6
        );
        tl.fromTo('.section-slide--6 .section-slide__btn',
            {
                y: '0'
            },
            {
                y: "-500%"
            },
            2.4
        )
        tl.fromTo('.section-slide--6 .section-slide__top',
            {
                y: '0'
            },
            {
                y: "-70%"
            },
            2.4
        )

        ScrollTrigger.create({
            animation: tl,
            trigger: '.section-slides__wrappper',
            start: "top top", // Анимация начинается, когда элемент входит в вид на 80%
            end: "bottom bottom", // Заканчивается, когда элемент выходит из вида на 20%
            scrub: 10, // Связывает анимацию со скроллом, делает её более плавной
            markers: true, // Включает маркеры для отладки (убрать в финальной версии)
            pinSpacing: false,
            pin: true,
        })
    }
});