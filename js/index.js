// preloader functionality
$(document).ready(function () {
    $('.loader-wrapper').fadeOut(1700);
    $('.heading-primary--main').addClass('animate--main');
    $('.heading-primary--sub').addClass('animate--sub');

    // Animate btn hover from left to right on load using btn--simulate-hover
    setTimeout(() => {
        const btns = $('.btn.btn--white');
        btns.each(function(i, btn) {
            setTimeout(function() {
                $(btn).addClass('btn--simulate-hover');
                setTimeout(function() {
                    $(btn).removeClass('btn--simulate-hover');
                }, 700); // Duration of hover effect
            }, i * 150); // Staggered delay
        });
    }, 2100); // Wait for above animations to finish first
});

// reveal main content on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
