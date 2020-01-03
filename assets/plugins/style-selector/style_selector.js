$(document).ready(function () {
    "use strict";
    $(".style-settings select option[selected]").prop("selected", true);
    $(".style-settings select input[checked]").prop("checked", true);
    $(".style-settings-icon").click(function () {
        $(this).parent().toggleClass("opened");
    });
    $(".style-settings [name='color_scheme']").change(function () {
        if ($(this).val() === "dark-mode") {
            $(".body").addClass("dark-mode");
        } else {
            $(".body").removeClass("dark-mode");
        }
    });
    $('.change-bg-color label').on('click', function () {
        var color = $(this).data('color');

        $('.body').each(function () {
            $(this).removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            $(this).addClass('color-' + color);
        });
    });
});