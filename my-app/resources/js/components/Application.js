import {burger} from "./_burger";
import {offspringScheme, hoveringOffspringScheme} from "./_offspring-scheme";
import tabs from "./_tabs";
import initSelectric from "./_selectric-init";
import Slick from "./Slick";
import YoutubePlayer from "./YoutubePlayer";
import {fancyboxInit, openModal, closeModal} from './_fancybox-init';
import {mapBuilder} from "./_map-init";
import './_accordion';
import favorites from "./_favorites";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import {hidePreloader, showPreloader, isValidForm, isJsonString, showMassage} from "./_helpers";


export default class Application {
    constructor() {
        this.init();
    }

    init() {
        const _this = this;
        $(document).ready(function () {
            _this.initPlugins();
            _this.initComponents();
            _this.cf7();
        });
        $(window).on('load resize', function () {
            offspringScheme();
        });
        _this.cf7Listener();
    }

    initComponents() {
        const _this = this;
        $(document).on('click', 'a[href^="http"]:not(.scroll-up, .product-gallery__item)', showPreloader);
        burger();
        tabs();
        hoveringOffspringScheme();
        mapBuilder();
        favorites();
        _this.blockquoteInit();
        _this.scrollUpButton();
        _this.loadMore();
        _this.formsInit();
        const y = new YoutubePlayer();
    }

    initPlugins() {
        const _this = this;
        _this.lightboxInit();
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

    cf7() {
        $(document).find('input[name="horse"]').val($(document).find('.product-section .single-main__title').eq(0).text().trim());
        $(document).find('.form-checkbox-container input[type="checkbox"]').each(function (index) {
            const $i = $(this);
            let id = $i.attr('id');
            let $icon = $i.next('.icon');
            if (id === undefined) {
                id = `checkbox-${index}`;
                $i.attr('id', id);
            }
            if ($icon.length === 0) {
                $i.after(`<label for="${id}" class="icon"></label>`);
            }

        });

    }

    cf7Listener() {
        document.addEventListener('wpcf7mailsent', function (event) {

            $('#thanks .modal-window__title').text(event.detail.apiResponse.message);
            closeModal();
            openModal($('#thanks'));
            setTimeout(function () {
                closeModal($('#thanks'));
            }, 3000);
        }, false);

        document.addEventListener('wpcf7invalid', function (event) {
            var invalid_fields = event.detail.apiResponse.invalid_fields;
            for (var a = 0; a < invalid_fields.length; a++) {
                var id = invalid_fields[a].error_id;
                $(document).find('input[aria-describedby="' + id + '"]').addClass('error');
            }
        }, false);
    }

    loadMore() {
        let load = false;
        const parser = new DOMParser();
        $(document).on('click', '.button-load-more', function (e) {
            e.preventDefault();
            const $t = $(this);
            const href = $t.attr('href');
            if (load) return;
            const $pagination = $(document).find('.pagination-container');
            showPreloader();
            $pagination.addClass('not-active');
            $.ajax({
                type: 'GET',
                url: href,
            }).done(function (r) {
                hidePreloader();
                let $requestBody = $(parser.parseFromString(r, "text/html"));
                $(document).find('.container-js').append($requestBody.find('.container-js').html());
                $pagination.html($requestBody.find('.pagination-container').html());
                load = false;
                $pagination.removeClass('not-active');
            });
        });
    }

    lightboxInit() {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a:not(.video-element)',
            pswpModule: () => import('photoswipe')
        });
        lightbox.init();
    }

    formsInit() {
        let $doc = $(document);
        $doc.ready(function () {
            $doc.on('submit', '.form-js', function (e) {
                e.preventDefault();
                let $form = $(this);
                let this_form = $form.attr('id');
                let test = isValidForm($form);
                if (test) {
                    let thisForm = document.getElementById(this_form);
                    let formData = new FormData(thisForm);
                    showPreloader();
                    $.ajax({
                        type: $form.attr('method') || 'POST',
                        url: adminAjax,
                        processData: false,
                        contentType: false,
                        data: formData,
                    }).done(function (r) {
                        $form.trigger('reset');
                        closeModal();
                        if (r) {
                            if (isJsonString(r)) {
                                let res = JSON.parse(r);
                                if (res.msg !== '' && res.msg !== undefined) {
                                    showMassage(res.msg);
                                }
                                if (res.is_reload === 'true') {
                                    window.location.reload();
                                    return false;
                                }
                                if (res.url !== undefined) {
                                    showPreloader();
                                    window.location.href = res.url;
                                }
                            } else {
                                showMassage(r);
                            }
                        }
                        hidePreloader();
                    });
                }
            });
        });
        $doc.on('input', 'input[type="tel"]', function () {
            $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁёІі]/, ''));
        });
    }

}