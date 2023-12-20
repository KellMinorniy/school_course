// Animate Scroll
$(document).ready(function() {
    $('a').on('click', function(event) {
        let linkScroll = this.hash;
        if (linkScroll) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(linkScroll).offset().top
            }, 1000, function() {
                window.location.hash = linkScroll;
            });
        }
    });
});