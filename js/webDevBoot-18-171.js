//console.log("Simple TODO App");
//console.log("linked to webDevBoot-18-171.html");
//console.log("created by sfdeloach on 01/31/2017");

// Trash slide effects
$('.trash').hide();

$('.item').on('mouseenter', function () {
    'use strict';
    $(this).find('.trash').show('slide');
});

$('.item').on('mouseleave', function () {
    'use strict';
    $(this).find('.trash').hide('slide');
});

// Todo slide effect
$('#plus').on('click', function () {
    'use strict';
    $('input').slideToggle();
});
