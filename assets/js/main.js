// sliders
$(function () {
    $('.bannerCaraousel').owlCarousel({
        loop: true,
        margin: 1,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        autoplay: true,
        smartSpeed: 3000,
        // mouseDrag: false,
        touchDrag: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // :: Animation OWL Header
$('.bannerCarousel').on('translate.owl.carousel', function () {
    $('.bannerMainContent h5')
        .removeClass('animated animate__fadeInDown')
        .css({
            'opacity': '0',
            'transition': 'opacity 0.3s ease-in-out'
        });

    $('.bannerMainContent')
        .removeClass('animated animate__fadeIn')
        .css({
            'opacity': '0',
            'transition': 'opacity 0.3s ease-in-out'
        });


    $('.bannerMainImg img').removeClass('active')
});

$('.bannerCarousel').on('translated.owl.carousel', function () {
    $('.bannerMainContent h5')
        .addClass('animated animate__fadeInDown')
        .css({
            'opacity': '1',
            'transition': 'opacity 0.3s ease-in-out'
    });

    $('.bannerMainContent')
        .addClass('animated animate__fadeIn')
        .css({
            'opacity': '1',
            'transition': 'opacity 0.3s ease-in-out'
    });

    $('.bannerMainImg img').addClass('active')

});

})



// 
$(function () {
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.sectionscroll').each(function (i) {
                if ($(this).position().top <= windscroll + -80) {
                    $('.scrolling-text').eq(i).addClass('active');
                } else {
                    $('.scrolling-text').eq(i).removeClass('active');
                }
            });
        } else {
            $('.scrolling-text').removeClass('active');
            $('.scrolling-text:first').addClass('active');
        }
    }).scroll();
})

// Service Slider
$(function () {
    function initializeSwiper(selector, options) {
        return new Swiper(selector, options);
    }

    let industrySwiper = initializeSwiper('.industrySlider', {
        loop: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4.5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        spaceBetween: 20,
        breakpoints: {
            1920: {
                slidesPerView: 4.5,
                spaceBetween: 20
            },
            1028: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    let clientSwiper = initializeSwiper('.clientSlider', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1,
            disableOnInteraction: true
        },
        speed: 2000,
        slidesPerView: 6,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 10,
        breakpoints: {
            1920: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            1028: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });
});



// 
$(function () {
    $('.serviceSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})

// Important Linsks
$(function () {
    $('.ImpLinkCarousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        // navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})
$(function () {
    $('.testimonialsCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        dots: true,
        autoplay: false,
        // slideTransition: 'linear',
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})
$(function () {
    $('.newscarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})

$(function () {
    $('.clientCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        // autoplaySpeed: 4000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
})

$(function () {
    const defaultOptions = {
        background: {
            color: "transparent",
        },
        FullScreen: { enable: false, zIndex: 99 },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax : {
                        enable: true,
                        smooth: 200
                    },
                }
            },
            modes: {
                push: {
                    quantity: 900,
                },
                repulse: {
                    distance: 70,
                },
            },
        },
        particles: {
            color: {
                value: "#64b06e",
                animation: {
                    enable: true,
                    speed: 2,  // Adjust the speed of the color transition here
                    sync: false
                }
            },
            links: {
                enable: true,
                opacity: 0.9,
                distance: 180, // Default distance
                color: "#64b06e",
            },
            move: {
                enable: true,
                speed: { min: 3, max: 2 },
            },
            opacity: {
                value: { min: 0.6, max: 0.7 },
            },
            size: {
                value: { min: 1, max: 1 }
            },
        },
    };

    const darkOptions = {
        particles: {
            color: {
                value: "#11c4c2",
                animation: {
                    enable: true,
                    speed: 2,  // Keep the same transition speed for consistency
                    sync: false
                }
            },
            links: {
                color: "#11c4c2",
            }
        }
    };

    function updateLinksDistance() {
        // Determine the appropriate links.distance based on screen width
        if (window.matchMedia("(max-width: 1240px) and (min-width: 1000px)").matches) {
            defaultOptions.particles.links.distance = 120;
        } else if (window.matchMedia("(max-width: 999px) and (min-width: 768px)").matches) {
            defaultOptions.particles.links.distance = 60;
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            defaultOptions.particles.links.distance = 40;
        } else {
            // Default distance for larger screens
            defaultOptions.particles.links.distance = 180;
        }
    }

    function loadParticles() {
        const isDarkMode = $("body").hasClass("dark");

        // Update links distance based on the current screen size
        updateLinksDistance();

        const options = isDarkMode
            ? $.extend(true, {}, defaultOptions, darkOptions) // Merge dark mode options
            : defaultOptions;

        tsParticles.load("tsparticles", options);
    }

    // Initial load
    loadParticles();

    // Optional: Recalculate and reload particles on window resize
    $(window).resize(function () {
        loadParticles();
    });

    // Watch for class change in case of dynamic mode switching
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === "class") {
                loadParticles();
            }
        });
    });

    observer.observe(document.body, { attributes: true });
});



$(function () {
    const options = {
        background: {
            color: "transparent",
        },
        FullScreen: { enable: false, zIndex: 99 },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                }
            },
            modes: {
                push: {
                    quantity: 2,
                },
                repulse: {
                    distance: 50,
                },
            },
        },
        particles: {
            color: "#64b06e",
            links: {
                enable: true,
                opacity: 0.4,
                distance: 80,
                color: "#64b06e",
            },
            move: {
                enable: true,
                speed: { min: 1, max: 1 },
            },
            opacity: {
                value: { min: 0.1, max: 0.1 },
            },
            size: {
                value: { min: 1, max: 1 }
            },
        },
    }

    tsParticles.load("tsparticlestwo", options);
})





// Menu Scrolling

$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st >= 100) {
            // downscroll code
            $('.headerSection').addClass('scroll-down').removeClass('scroll-up');
        } else {
            // upscroll code
            $('.headerSection').addClass('scroll-up').removeClass('scroll-down');
        }

        if (Math.abs($('.headerSection').offset().top) <= 1) {
            $('.headerSection').removeClass('scroll-down scroll-up');
        }

        lastScrollTop = st;
    });
});



// Header Responsive
$(function(){
    $(function () {
        function initializeMenuToggle() {
            $(".hamburger").off('click').on('click', function () {
                if ($(window).width() < 1000) {
                    $(".headerNav").slideToggle();
                    $(this).toggleClass('active');
                }
            });
    
            $(".hasSub").off('click').on('click', function () {
                if ($(window).width() < 1000) {
                    var dropDownMenu = $(this).closest('li.hasSub').find(".headerSubNav");
    
                    dropDownMenu.slideToggle();
    
                    $(this).toggleClass('active');
                }
            });
        }
    
        $(document).ready(function() {
            initializeMenuToggle();
        });
    
        $(window).resize(function() {
            initializeMenuToggle();
        });
    });
    


//   sub Menu Btn
  $(document).ready(function() {
    function addPlusIcon() {
      $('.headerNav ul li.hasSub').each(function() {
        $(this).append('<i class="fa-solid fa-plus"></i>');
      });
    }
  
    function removePlusIcon() {
      $('li.hasSub i.fa-plus').remove();
    }
  
    function checkScreenWidth() {
      if ($(window).width() < 768) {
        addPlusIcon();
      } else {
        removePlusIcon();
      }
    }
  
    // Initial check
    checkScreenWidth();
  
    // Check again on window resize
    $(window).resize(function() {
      checkScreenWidth();
    });
  });
  
})
$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
});


// Header Contact
// $(function(){
//     $(document).ready(function() {
//         function addIcon(selector, iconClass) {
//             $(selector).each(function() {
//                 // Check screen size
//                 if ($(window).width() < 768) {
//                     // Empty the content of the span
//                     $(this).empty();
//                     // Add the icon
//                     $(this).html('<i class="' + iconClass + '"></i>');
//                 }
//             });
//         }
        
//         // Call the addIcon function for '.headerContact'
//         // addIcon('.defaultBtn .headerContact', 'fa-solid fa-comments');
        
//         // Call the addIcon function for '.headerCareer'
//         addIcon('.defaultBtn .headerCareer', 'fa-solid fa-user-tie');
        
//         // Re-run addIcon on window resize
//         $(window).resize(function() {
//             // addIcon('.defaultBtn .headerContact', 'fa-solid fa-comments');
//             addIcon('.defaultBtn .headerCareer', 'fa-solid fa-user-tie');
//         });
//     });
    
// })


$(function () {

    // Top Button
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})


// go to top with side bar nav
$(function(){
$(window).scroll(function() {
var windscroll = $(window).scrollTop();
if (windscroll >= 100) {
    $('.certiMainCard').each(function(i) {

        if ($(this).position().top <= windscroll + 140) {
            $('.sideScrollTopNav ul li.active').removeClass('active');
            $('.sideScrollTopNav ul li').eq(i).addClass('active');
        }
    });

} else {

    $('.sideScrollTopNav ul li.active').removeClass('active');
    $('.sideScrollTopNav ul li:first').addClass('active');
}

}).scroll();
$('.sidebar-button').click(function() {
    var target = $(this).data('target'); // Get the target section ID from data attribute
    $('html, body').animate({
      scrollTop: $(target).offset().top - 90 // Scroll to the top of the target section with an offset of 100px
    }, 1000); // Adjust the duration of the animation as needed
  });

})


$(function () {
    // Function to animate the counter
    function animateCounter(counterElement, finalValue, duration) {
      let start = parseInt(counterElement.textContent);
      const totalFrames = 120; // Total number of frames for the animation
      const increment = (finalValue - start) / totalFrames; // Calculate increment per frame

      // Function to update the counter value
      function updateCounter() {
        start += increment;
        counterElement.textContent = Math.floor(start);
        if ((increment > 0 && start < finalValue) || (increment < 0 && start > finalValue)) {
          requestAnimationFrame(updateCounter);
        }
      }

      updateCounter(); // Start the animation
    }

    // For each counter element, get its final value and start the animation
    $('.counter').each(function() {
      const finalValue = parseInt($(this).data('final-value'));
      animateCounter(this, finalValue, 5000); // Duration of 5 seconds
    });
  });




  $(function (){
    // $('.testiVideoSlider').owlCarousel({
    //     loop: true,
    //     margin: 1,
    //     nav: true,
    //     dots: false,
    //     autoplayHoverPause: true,
    //     navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
    //     autoplay: true,
    //     smartSpeed: 3000,
    //     mouseDrag: false,
    //     touchDrag: false,
   
    //     autoplayTimeout: 5000,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

    
  })

  $(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


// Read More... Read Less
$(document).ready(function () {
    $(".prparaReadBtn").click(function () {
        var index = $(".prparaReadBtn").index(this);
        var morePara = $(".prlistMorePara").eq(index);
        morePara.slideToggle();
        $(this).text($(this).text() === 'Expand [+]' ? 'Less [-]' : 'Expand [+]');
    });
});


// Filters
$(function(){
    $('#filters li').click(function(){
        // Remove 'active' class from all filter list items
        $('#filters li').removeClass('active');
        // Add 'active' class to the clicked filter list item
        $(this).addClass('active');
        
        var $filter = $(this).data('filter');
        if($filter != '*'){
            $('.filter-item').each(function(){
                if($(this).hasClass($filter)){
                    showed($(this));
                }
                else{
                    hidden($(this));
                }
            });
        }
        else{
            $('.filter-item').each(function(){
                showed($(this));
            });
        }

        function showed($block){
            if($block.hasClass('hidden')){
                $block.removeClass('hidden').slideToggle('slow');
            } else {
                $block.slideDown('slow');
            }
        }

        function hidden($block){
            if(!$block.hasClass('hidden')){
                $block.addClass('hidden').slideToggle('slow');
            } else {
                $block.slideUp('slow');
            }
        }
    });
});

// FAQS
$(function () {
    let question = document.querySelectorAll(".question");

    question.forEach(question => {
        question.addEventListener("click", event => {
            const active = document.querySelector(".question.active");
            if (active && active !== question) {
                active.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        })
    })

})


  
$(function () {
    const canvases = document.querySelectorAll(".canvastwo");
    const canvasCount = canvases.length;
  
    for (let i = 0; i < canvasCount; i++) {
      const canvas = canvases[i];
      const ctx = canvas.getContext("2d");
      const branding = `rgba(226, 200, 255, 1), ${Math.random() * 0.3 + 0.3})`;
      const particles = [];
      const particleCount = 20;
  
      let w = (canvas.width = innerWidth);
      let h = (canvas.height = innerHeight);
  
      function resize() {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
      }
  
      window.addEventListener("resize", resize);
  
      class Particle {
        constructor() {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
          this.color = branding;
        }
  
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x > w || this.x < 0) this.speedX *= -1;
          if (this.y > h || this.y < 0) this.speedY *= -1;
        }
  
        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
  
      function init() {
        for (let j = 0; j < particleCount; j++) {
          particles.push(new Particle());
        }
      }
  
      function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
        requestAnimationFrame(animate);
      }
  
      init();
      animate();
    }
})



// Parallux Img
var $images = $('.parallax-img');
var window_h = $(window).height();

$(window).scroll(function () {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop == 0) {
        TweenLite.to($images, 1.2, {
            yPercent: 0,
            ease: Power1.easeOut,
            overwrite: 0
        });
    }
    else {
        $images.each(function () {
            var elementOffsetTop = $(this).offset().top,
                element_h = $(this).height(),
                velocity = $(this).data('velocity');

            if (windowScrollTop + window_h > elementOffsetTop && windowScrollTop < elementOffsetTop + element_h) {
                //if in view:

                TweenLite.to($(this), 1.2, {
                    yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
                    ease: Power1.easeOut,
                    overwrite: 0
                });
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector(".scrollToTop");
    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const progressBar = document.getElementById("progress-bar");
    const pathLength = document
      .querySelector("#progress-bar > svg > path")
      .getTotalLength();
  
    scrollToTopBtn.addEventListener("click", () => {
      rootElement.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    document.addEventListener("scroll", () => {
      const scrollAmount = pathLength / 100;
      const scrollPosition = Math.round(
        ((rootElement.scrollTop || bodyElement.scrollTop) /
          ((rootElement.scrollHeight || bodyElement.scrollHeight) -
            innerHeight)) *
          100 *
          scrollAmount
      );
  
      if (scrollPosition > 5) {
        scrollToTopBtn.classList.add("showBtn");
        progressBar.style.setProperty("--scrollAmount", scrollPosition + "px");
      } else {
        scrollToTopBtn.classList.remove("showBtn");
      }
    });
  });



  // Translate Language
$(function () {
    // Event listener for language dropdown items
    $(".dropdown-menu .dropdown-item").click(function (e) {
        e.preventDefault();
        
        // Check if the clicked item is not already active
        if (!$(this).hasClass("active")) {
            var selectedLanguage = $(this).text().trim(); // Get the selected language text
            var selectedLanguageCode = $(this).find('.flag-icon').attr('class').split(' ')[1].split('-')[2]; // Extract language code from flag icon class
            
            // Show confirmation dialog
            Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to change your current language to " + selectedLanguage + "?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, I am!",
                cancelButtonText: "No, I'm Not"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Change the active class and text of the selected dropdown item
                    $(".dropdown-menu .dropdown-item").removeClass("active");
                    $(this).addClass("active");
                    $(".btn.btn-primary.dropdown-toggle span").eq(1).text(selectedLanguage);

                    // Translate the webpage content
                    translatePage(selectedLanguageCode);
                    
                    // Show success message
                    Swal.fire({
                        icon: "success",
                        title: "Amazing!",
                        text: "Your current language has been changed successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
    });

    // Function to translate the webpage content
    function translatePage(targetLanguageCode) {
        // Get all elements with the data-translate attribute
        $("[data-translate]").each(function () {
            var element = $(this);
            var textToTranslate = element.text().trim(); // Get the text to translate
            
            // Make AJAX request to Google Translate API
            $.ajax({
                url: "https://translation.googleapis.com/language/translate/v2",
                type: "POST",
                data: {
                    q: textToTranslate,
                    target: targetLanguageCode,
                    key: "YOUR_GOOGLE_TRANSLATE_API_KEY" // Replace with your Google Translate API key
                },
                success: function (response) {
                    // Update the element with the translated text
                    element.text(response.data.translations[0].translatedText);
                },
                error: function (xhr, status, error) {
                    console.error("Error translating text:", error);
                }
            });
        });
    }
});


// Dark Mode
$(function(){
    document.querySelector('.inputdark').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
})


// $(document).ready(function(){
//     $("#quickEnquiry").modal('show');
// });





// go to top with side bar nav
$(function(){
  $(window).scroll(function() {
  
  
  }).scroll();
  $('.navibtn').click(function() {
      var target = $(this).data('target'); // Get the target section ID from data attribute
      $('html, body').animate({
        scrollTop: $(target).offset().top - 200 // Scroll to the top of the target section with an offset of 100px
      }, 1000); // Adjust the duration of the animation as needed
    });
  
  })
  

  $(document).ready(function() {
    $(window).on('scroll', function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.sectionTop').each(function() {
                var sectionID = $(this).attr('id');
                if ($(this).position().top <= windscroll + 140) {
                    $('.navWrapper ul li a.active').removeClass('active');
                    $('.navWrapper ul li a[href="#' + sectionID + '"]').addClass('active');
                }
            });
        } else {
            $('.navWrapper ul li a.active').removeClass('active');
            $('.navWrapper ul li a:first').addClass('active');
        }
    });

});
