import 'selectric';
import {showPreloader} from "./_helpers";

export default function initSelectric() {
    $(document).find('.selectric').selectric();
    $(document).on('change', '.trigger-on-select', function () {
        showPreloader();
        $(this).closest('form').trigger('submit');
    });
    $(document).on('change', '.sort-form', function () {
        showPreloader();
        const $t = $(this);
        const $form = $t.closest('form');
        const $option = $t.find('option:selected');
        const order = $option.attr('data-order') || 'ASC';
        $form.find('input[name="order"]').val(order);
        $form.trigger('submit');
    });

}