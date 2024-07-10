import {burger} from "./_burger";
import {offspringScheme, hoveringOffspringScheme} from "./_offspring-scheme";
import tabs from "./_tabs";
import initSelectric from "./_selectric-init";
import Slick from "./Slick";
import YoutubePlayer from "./YoutubePlayer";
import {fancyboxInit} from './_fancybox-init';
import {mapBuilder} from "./_map-init";
import './_accordion';

export default class Application {
    constructor() {
        this.init();
    }

    init() {
        const _this = this;
        $(document).ready(function () {
            _this.initPlugins();
            _this.initComponents();
        });
        $(window).on('load resize', function () {
            offspringScheme();
        });
    }

    initComponents() {
        const _this = this;
        burger();
        tabs();
        hoveringOffspringScheme();
        mapBuilder();
        _this.blockquoteInit();
        _this.scrollUpButton();
        const y = new YoutubePlayer();
    }

    initPlugins() {
        const _this = this;
        const sliders = new Slick();
        initSelectric();
        fancyboxInit();
        _this.initAccordion();
        console.log(3)
    }

    scrollUpButton() {
        $(document).on('click', '.scroll-up', function (e) {
            e.preventDefault()
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }

    initAccordion() {
        $(document).find('.accordion').accordion({
            closeShowed: true
        });
    }

    blockquoteInit() {
        $(document).find('.text blockquote').contents().each(function () {
            if (this.nodeType === 3) { // Node.TEXT_NODE
                var text = $(this).text().trim();
                if (text.length > 0) {
                    $(this).replaceWith('<p>' + text + '</p>');
                }
            }
        });
    }
}