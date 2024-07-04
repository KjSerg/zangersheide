import {burger} from "./_burger";

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

    }
}