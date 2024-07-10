import 'slick-slider';

export default class Slick {
    constructor() {
        this.init();
    }

    aboutGalleryInit() {
        $(document).find('.single-about-gallery').each(function () {
            const $slider = $(this);
            $slider.slick({
                slidesToShow: 3,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1251,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 931,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 731,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 415,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        });

    }

    productGalleryInit() {
        let args = {
            slidesToShow: 1,
            dots: true,
            arrows: true
        };
        let argsNav = {
            slidesToShow: 4,
            arrows: false,
            focusOnSelect: true,
            // centerMode: true,
        };
        $(document).find('.product-gallery').each(function () {
            const $slider = $(this);
            const $wrapper = $slider.closest('.product-gallery-wrapper');
            const $nav = $wrapper.find('.product-gallery-preview');
            if ($nav.length > 0) {
                args.asNavFor = $nav;
                argsNav.asNavFor = $slider;
                $nav.slick(argsNav);
            }
            $slider.slick(args);
        });
    }

    init() {
        this.aboutGalleryInit();
        this.productGalleryInit();
    }
}