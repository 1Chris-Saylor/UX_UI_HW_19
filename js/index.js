$(document).ready(function() {
    // Define the transition duration
    var transitionDuration = '.4s';

    // Add hover effect to elements with the class "btn-hover"
    $(".btn-hover").hover(
        function() { // mouseenter
            $(this).css({
                'background-position': '100% 0',
                'transition': 'all ' + transitionDuration + ' ease-in-out',
            });
        },
        function() { // mouseleave
            $(this).css({
                'background-position': '0 0',
                'transition': 'all ' + transitionDuration + ' ease-in-out',
            });
        }
    );

    // Remove focus outline on button click
    $(".btn-hover").focus(function() {
        $(this).blur();
    });

    // Apply specific styles for the "color-3" variant
    $(".btn-hover.color-3").css({
        'background-image': 'linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)',
        'box-shadow': '0 4px 15px 0 rgba(116, 79, 168, 0.75)',
    });
});
