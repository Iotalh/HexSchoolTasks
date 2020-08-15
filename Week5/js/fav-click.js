$(document).ready(function() {
    var product_fav = ".product-fav";
    $(".product-fav").click(function() {
        if ($(this).text() == "favorite") {
            $(this).text("favorite_border")
        } else {
            $(this).text("favorite")
        }
    });
});