export function offspringScheme() {
    const $schemes = $(document).find('.single-offspring-scheme');
    $schemes.each(function () {
        const $scheme = $(this);
        const $columns = $scheme.find('.single-offspring-scheme-column');
        $columns.each(function () {
            const $column = $(this);
            const $items = $column.find('.single-offspring-scheme-item');
            if ($items.length > 1) {
                const $odd = $column.find('.single-offspring-scheme-item:nth-child(odd)');
                $odd.each(function () {
                    const $el = $(this);
                    const $next = $el.next();
                    const elTop = $el.offset().top;
                    const nextTop = $next.offset().top;
                    const height = nextTop - elTop;
                    let $line = $el.find('.line');
                    if ($line.length === 0) {
                        $el.append('<span class="line"></span>');
                        $line = $el.find('.line');
                    }
                    if ($line.attr('style') !== 'height: ' + height + 'px;') {
                        $line.css('height', height + 'px');
                    }

                });
            }
        })
    });
}

export function hoveringOffspringScheme() {
    $(document).on("mouseenter", '.single-offspring-scheme-item', handlerIn).on("mouseleave", '.single-offspring-scheme-item', handlerOut);
}

function handlerIn(e) {
    const $t = $(this);
    const $column = $t.closest('.single-offspring-scheme-column');
    const $columnNext = $column.next();
    if ($columnNext.length === 0) return;
    const index = $t.index();
    const nextIndex = index * 2;
    const $el = $columnNext.find('.single-offspring-scheme-item').eq(nextIndex);
    const $nextEl = $el.next();
    $el.addClass('hovered');
    $nextEl.addClass('hovered');
}

function handlerOut(e) {
    const $t = $(this);
    $(document).find('.single-offspring-scheme-item').removeClass('hovered');
}