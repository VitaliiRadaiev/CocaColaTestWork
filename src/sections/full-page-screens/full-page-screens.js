{
    const $fullPageScreensContainer = document.querySelector('[data-full-page-screens]');
    if ($fullPageScreensContainer) {

        if (window.innerWidth >= 1024) {

            const $backgrounds = $fullPageScreensContainer.querySelector('.full-page-screens__backgrounds');
            const $content = $fullPageScreensContainer.querySelector('.full-page-screens__content');
            const $buttonsNextSlide = $fullPageScreensContainer.querySelectorAll('[data-action="next-slide"]');

            const swiperBg = new Swiper($backgrounds, {
                effect: "creative",
                speed: 800,
                direction: 'vertical',
                mousewheelControl: true,
                watchSlidesProgress: true,
                mousewheel: {
                    releaseOnEdges: true,
                },
                parallax: true,
                creativeEffect: {
                    prev: {
                        translate: [0, "-20%", -1],
                    },
                    next: {
                        translate: [0, "100%", 0],
                    },
                }
            });

            const swiperContent = new Swiper($content, {
                effect: "creative",
                speed: 800,
                direction: 'vertical',
                mousewheelControl: true,
                watchSlidesProgress: true,
                mousewheel: {
                    releaseOnEdges: true,
                },
                creativeEffect: {
                    prev: {
                        opacity: 0,
                        translate: [0, "-60%", -1],
                    },
                    next: {
                        translate: [0, "100%", 0],
                        opacity: 1,
                    },
                }
            });

            swiperContent.controller.control = swiperBg;

            $buttonsNextSlide.forEach($btn => {
                $btn.addEventListener('click', () => {
                    swiperContent.slideNext();
                })
            })
        }
    }
}