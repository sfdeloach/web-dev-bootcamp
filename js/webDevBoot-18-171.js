//console.log("Simple TODO App");
//console.log("linked to webDevBoot-18-171.html");
//console.log("created by sfdeloach on 01/31/2017");

// HTML builder components
var itemHead = '<div class="item"><div class="trash">' +
    '<i class="fa fa-trash" aria-hidden="true"></i>' +
    '</div><div class="details">',
    itemFoot = '</div></div>';

var iconHead = '<i class="fa fa-',
    iconFoot = '" aria-hidden="true"></i>',
    isArrow = true;

// Item crossout
$('.item-group').on('click', '.item .details', function () {
    'use strict';
    $(this).toggleClass('crossout');
});

// Todo slide
$('#plus').on('click', function () {
    'use strict';
    var icon = isArrow ? "caret-down" : "caret-up";
    $('input').slideToggle(500, function () {
        $('#plus').html(iconHead + icon + iconFoot);
    });
    isArrow = !isArrow;
});

// Todo add new item
$("input").keypress(function (event) {
    'use strict';
    if (event.which === 13) {
        $(".item-group").append(itemHead + $("input").val() + itemFoot);
        $("input").val("");
    }
});

// Trash slide - pure CSS (:hover) used to achieve this effect
//$('.item-group').on('mouseenter', '.item', function () {
//    'use strict';
//    $(this).find('.trash').show('slide');
//});
//
//$('.item-group').on('mouseleave', '.item', function () {
//    'use strict';
//    $(this).find('.trash').hide('slide');
//});

// Trash delete
$('.item-group').on('click', '.item .trash', function () {
    'use strict';
    $(this).parent().hide('slow', function () {
        $(this).remove();
    });
});

// Enable sort
$(function () {
    'use strict';
    $(".item-group").sortable();
    $(".item-group").disableSelection();
});
