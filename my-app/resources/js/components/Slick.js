import 'slick-slider';

export default class Slick{
    constructor() {
        this.init();
    }
    init(){
        $(document).find('.single-about-gallery').each(function (){
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
}