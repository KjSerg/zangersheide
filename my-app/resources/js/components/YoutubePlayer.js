import {closeModal, openModal} from './_fancybox-init';

export default class YoutubePlayer {
    constructor() {
        this.listen();
    }

    listen() {
        $(document).on('click', '.video-element', function (e) {
            e.preventDefault();
            console.log(2)
            const $t = $(this);
            const href = $t.attr('href');
            let $el = $(document).find('#player #videoContainer');
            if ($el.length === 0) $('#main').append('<div id="player" class="modal-window player-window"></div>');
            $el = $(document).find('#player');
            if (isValidHttpUrl(href)) {
                const videoId = href.split('v=')[1];
                const embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
                $el.html('<div id="videoContainer" class="video-container"><div class="loader"><img src="' + loader + '" alt=""></div><iframe width="1920" height="1080" src="' + embedUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
                openModal($el);
            }
        });

    }
}

export function

isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}