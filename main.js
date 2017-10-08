$(function() {
    $("div.thread .post .message a").each(function(i, element) {
        var a = $(element);
        var href = a.text();
        if (href.startsWith("http")) {
            a.attr("href", href);
        }
    });
});
