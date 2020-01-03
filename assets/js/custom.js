$(document).ready(function () {
    "use strict"; // Start of use strict
    //
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //header navbar 
    (function () {
        var header = document.querySelector("#header");
        var headroom = new Headroom(header, {
            tolerance: {
                down: 10,
                up: 20
            },
            offset: 15,
        });
        headroom.init();
    }());

    // Navbar collapse hide
    $('.navbar-collapse .collapse-close').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //Sidebar
    $('.sidebar').each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
    });
    $('.sidebar-overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.sidebar-overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        $('.sidebar').addClass('active');
        $('.sidebar-overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
    });

    //Background image
    $(".bg-img").css('backgroundImage', function () {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });

    //sidebar scroll
    $('aside, main').theiaStickySidebar({
        additionalMarginTop: 30
    });

    //back to top
    $('body').append('<div id="toTop" class="btn back-top"><span class="ti-arrow-up"></span></div>');
    $(window).on("scroll", function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on("click", function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    //Line progressbar1
    $('#progressbar1').LineProgressbar({
        percentage: 100,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar2').LineProgressbar({
        percentage: 98,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar3').LineProgressbar({
        percentage: 95,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar4').LineProgressbar({
        percentage: 95,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar5').LineProgressbar({
        percentage: 100,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar6').LineProgressbar({
        percentage: 100,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar7').LineProgressbar({
        percentage: 80,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar8').LineProgressbar({
        percentage: 85,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar9').LineProgressbar({
        percentage: 100,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar10').LineProgressbar({
        percentage: 95,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar11').LineProgressbar({
        percentage: 80,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar12').LineProgressbar({
        percentage: 90,
        height: '8px',
        radius: '15px'
    });
    $('#progressbar13').LineProgressbar({
        percentage: 90,
        height: '8px',
        radius: '15px'
    });
     $('#progressbar14').LineProgressbar({
        percentage: 95,
        height: '8px',
        radius: '15px'
    });
    //Image carousel 
    $('.image-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
    //Image carousel RTL
    $('.image-carousel-rtl').owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
    //Testimonial carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    //Testimonial carousel RTL
    $('.testimonial-carousel-rtl').owlCarousel({
        rtl: true,
        loop: true,
        dots: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    //Zoom effect
    MediumLightbox('figure.zoom-effect', {
        //margin:300
    });

    //Dotted Skills Line
    function skills() {
        var skills_dotted = $('.skills-list.dotted .dot-progress');
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find('.percentage .da').css({'width': skills_dotted_w});
        }
    }
    setTimeout(skills, 1000);

//Highlight
    var snippets = document.querySelectorAll('.snippet');
    [].forEach.call(snippets, function (snippet) {
        snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn-snippet" data-clipboard-snippet>Copy</button>');
    });
    var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboardSnippets.on('success', function (e) {
        e.clearSelection();
        showTooltip(e.trigger, 'Copied!');
    });
    clipboardSnippets.on('error', function (e) {
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    var btns = document.querySelectorAll('.btn-snippet');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', clearTooltip);
        btns[i].addEventListener('blur', clearTooltip);
    }

    function clearTooltip(e) {
        e.currentTarget.setAttribute('class', 'btn-snippet');
        e.currentTarget.removeAttribute('aria-label');
    }

    function showTooltip(elem, msg) {
        elem.setAttribute('class', 'btn-snippet tooltipped tooltipped-s');
        elem.setAttribute('aria-label', msg);
    }

    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) {
            actionMsg = 'No support :(';
        } else if (/Mac/i.test(navigator.userAgent)) {
            actionMsg = 'Press âŒ˜-' + actionKey + ' to ' + action;
        } else {
            actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
        }
        return actionMsg;
    }
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    //Filter portfolio
    shuffleme.init();

    //Lightbox gallery
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });
});

var shuffleme = (function ($) {
    var $grid = $('#grid'), //locate what we want to sort 
            $filterOptions = $('.portfolio-sorting li'), //locate the filter categories
            $sizer = $grid.find('.shuffle_sizer'), //sizer stores the size of the items

            init = function () {

                // None of these need to be executed synchronously
                setTimeout(function () {
                    listen();
                    setupFilters();
                }, 100);

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer
                });
            },
            // Set up button clicks
            setupFilters = function () {
                var $btns = $filterOptions.children();
                $btns.on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this),
                            isActive = $this.hasClass('active'),
                            group = isActive ? 'all' : $this.data('group');

                    // Hide current label, show current label in title
                    if (!isActive) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }
                    $this.toggleClass('active');
                    // Filter elements
                    $grid.shuffle('shuffle', group);
                });

                $btns = null;
            },
            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function () {
                var debouncedLayout = $.throttle(300, function () {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function () {
                    var proxyImage;

                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function () {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function () {
                    debouncedLayout();
                }, 500);
            };

    return {
        init: init
    };

}(jQuery));

 $(document).ready(function() {
    var showChar=400;
    var ellipsestext="...";
    var moretext="Show more <i class='fa fa-angle-double-right' aria-hidden='true'></i>";
    var lesstext="Show less";
    $('.more').each(function() {
        var content=$(this).html();
        if(content.length>showChar) {
            var c=content.substr(0, showChar);
            var h=content.substr(showChar, content.length-showChar);
            var html=c+'<span class="moreellipses">'+ellipsestext+'&nbsp;</span><span class="morecontent"><span>'+h+'</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';
            $(this).html(html)
        }
    }
    );
    $(".morelink").click(function() {
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext)
        }
        else {
            $(this).addClass("less");
            $(this).html(lesstext)
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return!1
    }
    )
});
