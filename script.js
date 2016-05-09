$(document).ready(function() {
    $('button').click(function() {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('.displayColor').css('background-color', hue);
        $('.header .container').css('background-color', hue);
    });
});