$(document).ready(function() {
    $('.list-item').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    })
});