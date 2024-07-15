import {getCookie, setCookie} from "./_cockie";
import {hidePreloader, removeArrayElement} from "./_helpers";

export default function favorites() {
    $(document).on('click', '.button-favorites, .like', function (e) {
        e.preventDefault();
        const $t = $(this);
        const id = $t.attr('data-id');
        const separator = ',';
        if (id === undefined) return;
        let favorites = getCookie('favorites');
        if (!favorites) favorites = '';
        favorites = favorites.split(separator);
        if (favorites.includes(id)) {
            $t.removeClass('active');
            favorites = removeArrayElement(id, favorites);
        } else {
            $t.addClass('active');
            favorites.push(id);
        }
        favorites.join(separator);
        setCookie('favorites', favorites, 365);
        hidePreloader();
    });
}