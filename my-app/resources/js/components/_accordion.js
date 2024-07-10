$.fn.accordion = function (args = {
    closeShowed: false
}) {
    const $elements = $(this);
    const titleSelector = args.title || '.accordion-title';
    const contentSelector = args.content || '.accordion-content';
    let closeShowed = args.closeShowed;
    $elements.each(function () {
        const $element = $(this);
        const $title = $element.find(titleSelector);
        const $content = $element.find(contentSelector);
        const $parent = $element.parent();
        if ($title.length > 0 && $content.length > 0) {
            $title.on('click', function (e) {
                e.preventDefault();
                const $t = $(this);

                const isShowed = $t.hasClass('active');
                if (isShowed) {
                    $element.removeClass('active');
                    $title.removeClass('active');
                    $content.removeClass('active').slideUp();
                } else {
                    if(closeShowed){
                        $parent.find(titleSelector + '.active').removeClass('active');
                        $parent.find(contentSelector + '.active').removeClass('active').slideUp();
                    }
                    $element.addClass('active');
                    $title.addClass('active');
                    $content.addClass('active').slideDown();
                }
            });
        }
    });

};