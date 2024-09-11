import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__col--menu");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const anchor = document.querySelector(".anchor");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 800) {
            anchor.classList.add("active");
        }

        if (window.scrollY < 800) {
            anchor.classList.remove("active");

        }
    })

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

        gsap.utils.toArray(".section-slide").forEach((panel, i) => {
            let scrollFirst = ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
                grub: 10
            });
            gsap.to(`.section-slide--${i} .section__slide-btn`, {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: `.section-slide--${i} .section__slide-btn`,
                    containerAnimation: scrollFirst,
                    start: "center 80%",
                    end: "center 20%",
                    scrub: true
                }
            });
        })
    }
});