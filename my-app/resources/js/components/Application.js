
import {burger} from "./_burger";
import {offspringScheme, hoveringOffspringScheme} from "./_offspring-scheme";
import tabs from "./_tabs";
import initSelectric from "./_selectric-init";
import Slick from "./Slick";
import {fancyboxInit} from './_fancybox-init';

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
        burger();
        tabs();
        hoveringOffspringScheme();
    }

    initPlugins() {
        const sliders = new Slick();
        initSelectric();
        fancyboxInit();
        console.log(3)
    }
}