$(document).ready(function() {
            // Preloader
            setTimeout(function() {
                $('.preloader').fadeOut('slow');
            }, 1000);
            
            // Initialize AOS
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
            
            // Navbar scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass('navbar-scrolled');
                    $('.back-to-top').addClass('show');
                } else {
                    $('.navbar').removeClass('navbar-scrolled');
                    $('.back-to-top').removeClass('show');
                }
            });
            
            // Smooth scroll for links
            $('a.nav-link, .btn-primary, .back-to-top').on('click', function(event) {
                if (this.hash !== '') {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                }
            });
            
            // Initialize Fancybox
            Fancybox.bind("[data-fancybox]", {
                // Options
            });
            
            // Form submission
            $('#contactForm').submit(function(e) {
                e.preventDefault();
                // Here you would normally add AJAX to submit the form data
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
            
            // WhatsApp button hover animation
            $('.whatsapp-btn').hover(
                function() {
                    $(this).css('animation', 'none');
                },
                function() {
                    $(this).css('animation', 'pulse 2s infinite');
                }
            );
            
            // Call button hover animation
            $('.call-btn').hover(
                function() {
                    $(this).css('animation', 'none');
                },
                function() {
                    $(this).css('animation', 'vibrate 1s infinite');
                }
            );
            
            // Add active class to nav item when scrolling
            $(window).scroll(function() {
                var scrollDistance = $(window).scrollTop();
                
                // Check each section
                $('section').each(function(i) {
                    if ($(this).position().top - 100 <= scrollDistance) {
                        $('.navbar-nav .nav-link.active').removeClass('active');
                        $('.navbar-nav .nav-link').eq(i).addClass('active');
                    }
                });
            });
        });
        
        // Create a dynamic year for copyright
        document.addEventListener('DOMContentLoaded', function() {
            const year = new Date().getFullYear();
            if (document.querySelector('.current-year')) {
                document.querySelector('.current-year').innerHTML = year;
            }
        });