import {burger} from "./_burger";
import Slick from "./Slick";

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

    }

    initComponents() {
        burger();
    }

    initPlugins() {
        const sliders = new Slick();
    }
}