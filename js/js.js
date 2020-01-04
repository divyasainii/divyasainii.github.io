$(document).ready(function(){
    //web show only
    $("#web").click(function(){
        $(".graphics").hide();
    });
    $("#web").click(function(){
        $(".video").hide();
    });
    $("#web").click(function(){
        $(".web").show();
    });
    //end

    //graphics show only
    $("#graphics").click(function(){
        $(".web").hide();
    });
    $("#graphics").click(function(){
        $(".video").hide();
    });
    $("#graphics").click(function(){
        $(".graphics").show();
    });
    //end

    //video show only
    $("#video").click(function(){
        $(".graphics").hide();
    });
    $("#video").click(function(){
        $(".web").hide();
    });
    $("#video").click(function(){
        $(".video").show();
    });
    //end

    //smooth scroll beginning
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //smooth scroll end
});