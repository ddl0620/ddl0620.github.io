(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    // Document Sliders
    document.addEventListener('DOMContentLoaded', function () {
        function initializePagination(sectionId, prevBtnId, nextBtnId) {
            let currentPage = 1;
            const pages = document.querySelectorAll(`#${sectionId} .document-page`);
            const totalPages = pages.length;

            function showPage(page) {
                pages.forEach((el, index) => {
                    el.classList.toggle('active', index + 1 === page);
                });
            }

            document.getElementById(nextBtnId).addEventListener('click', function () {
                if (currentPage < totalPages) {
                    currentPage++;
                    showPage(currentPage);
                }
            });

            document.getElementById(prevBtnId).addEventListener('click', function () {
                if (currentPage > 1) {
                    currentPage--;
                    showPage(currentPage);
                }
            });

            // Show the first page initially
            showPage(currentPage);
        }

        initializePagination('math-documents', 'prev-math', 'next-math');
        initializePagination('ielts-documents', 'prev-ielts', 'next-ielts');
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 10000,   // Delay between image transitions (10 seconds)
        smartSpeed: 3000,        // Speed of the image transition animation (3 seconds)
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


function showPage(page) {
    const pages = document.querySelectorAll('.job-page');
    pages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });
    const currentPageJobs = document.querySelectorAll(`.page-${page}`);
    currentPageJobs.forEach(job => {
        job.style.display = 'table-row';
    });
}

// Show the first page by default
showPage(1);


document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('nav a.center-scroll');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = window.innerHeight / 2 - targetElement.clientHeight / 2;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

