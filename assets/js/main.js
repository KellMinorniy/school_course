// Animate Scroll
$(document).ready(function() {
    $('a').on('click', function(event) {
        let linkHash = this.hash;
        if (linkHash) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(linkHash).offset().top
            }, 1000, function() {
                window.location.hash = linkHash;
            });
        }
    });
});