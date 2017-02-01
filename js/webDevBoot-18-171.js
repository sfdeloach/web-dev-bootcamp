//console.log("Simple TODO App");
//console.log("linked to webDevBoot-18-171.html");
//console.log("created by sfdeloach on 01/31/2017");

var itemHead = '<div class="item"><div class="trash"><i class="fa fa-trash" aria-hidden="true"></i></div><div class="details">';
var itemFoot = '</div></div>';

// Item crossout
$('.item').on('click', '.details', function () {
    'use strict';
    // TODO this is not crossing out text for appended items
    $(this).toggleClass('crossout');
});

// Todo slide
$('#plus').on('click', function () {
    'use strict';
    $('input').slideToggle();
});

// Todo add new item
$("input").keypress(function (event) {
    'use strict';
    if (event.which === 13) {
        var newItem = $("input").val();
        $("input").val("");
        $(".item-group").append(itemHead + newItem + itemFoot);
    }
});

// Trash slide
$('.item-group').on('mouseenter', '.item', function () {
    'use strict';
    $(this).find('.trash').show('slide');
});

$('.item-group').on('mouseleave', '.item', function () {
    'use strict';
    $(this).find('.trash').hide('slide');
});

// Trash delete
$('.item').on('click', '.trash', function () {
    'use strict';
    // TODO this is not removing appended elements
    $(this).parent('.item').hide('slow', function () {
        $(this).remove();
    });
});