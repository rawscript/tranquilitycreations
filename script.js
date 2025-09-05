// JavaScript for Tranquility creations Architecture Website

        // Scroll Progress Indicator
        function updateScrollProgress() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            document.getElementById('scrollProgress').style.width = scrolled + '%';
        }

        // Header scroll effect
        function handleHeaderScroll() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            
            navLinks.classList.toggle('mobile-active');
            menuToggle.classList.toggle('active');
        }

        // Smooth scroll for navigation links
        function smoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            elements.forEach(element => {
                observer.observe(element);
            });
        }

        // Project filters
        function setupProjectFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');

                    const filter = btn.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.6s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        // Testimonial slider
        function setupTestimonialSlider() {
            const testimonials = [
                {
                    text: "The team at Tranquility creations delivered exceptional architectural design that exceeded our expectations. Their attention to detail and innovative approach transformed our vision into reality.",
                    author: "James Gicheha, CEO"
                },
                {
                    text: "Outstanding work! The architectural solutions provided were both innovative and practical. The team's professionalism and expertise made the entire process seamless.",
                    author: "Michael Chen, Developer"
                },
                {
                    text: "Tranquility creations created a stunning design that perfectly captured our vision. Their commitment to sustainability and modern aesthetics is truly impressive.",
                    author: "Emma Rodriguez, Homeowner"
                }
            ];

            let currentTestimonial = 0;
            const testimonialElement = document.querySelector('.testimonial');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            function updateTestimonial() {
                const testimonial = testimonials[currentTestimonial];
                testimonialElement.innerHTML = `
                    <div class="testimonial-text">"${testimonial.text}"</div>
                    <div class="testimonial-author">${testimonial.author}</div>
                `;
                
                // Add animation
                testimonialElement.style.opacity = '0';
                testimonialElement.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    testimonialElement.style.opacity = '1';
                    testimonialElement.style.transform = 'translateY(0)';
                }, 100);
            }

            prevBtn.addEventListener('click', () => {
                currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
                updateTestimonial();
            });

            nextBtn.addEventListener('click', () => {
                currentTestimonial = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
                updateTestimonial();
            });

            // Auto slide every 5 seconds
            setInterval(() => {
                currentTestimonial = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
                updateTestimonial();
            }, 5000);
        }

        // Parallax effect for hero section
        function setupParallaxEffect() {
            const hero = document.querySelector('.hero');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                hero.style.transform = `translateY(${parallax}px)`;
            });
        }

        // Counter animation for experience years
        function animateCounter() {
            const counter = document.querySelector('.experience-number h3');
            const target = 26;
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                counter.textContent = Math.floor(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        }

        // Smooth hover effects for project cards
        function setupProjectCardEffects() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                    card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                });
            });
        }

        // Form submission handler (if you add a contact form later)
        function setupContactForm() {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.innerHTML = '<p style="color: #c8ff00; text-align: center; padding: 1rem;">Thank you for your message! We\'ll get back to you soon.</p>';
                    contactForm.appendChild(successMessage);
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        contactForm.reset();
                        successMessage.remove();
                    }, 3000);
                });
            }
        }

        // Lazy loading for images
        function setupLazyLoading() {
            const images = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }

        // Add scroll-to-top button
        function setupScrollToTop() {
            const scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollToTopBtn.className = 'scroll-to-top';
            scrollToTopBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #c8ff00;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                font-size: 1.2rem;
                color: #333;
            `;
            
            document.body.appendChild(scrollToTopBtn);
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.style.opacity = '1';
                    scrollToTopBtn.style.visibility = 'visible';
                } else {
                    scrollToTopBtn.style.opacity = '0';
                    scrollToTopBtn.style.visibility = 'hidden';
                }
            });
            
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Initialize all functions when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Basic functionality
            smoothScroll();
            animateOnScroll();
            setupProjectFilters();
            setupTestimonialSlider();
            setupProjectCardEffects();
            setupContactForm();
            setupLazyLoading();
            setupScrollToTop();
            
            // Effects
            setupParallaxEffect();
            
            // Mobile menu
            document.getElementById('menuToggle').addEventListener('click', toggleMobileMenu);
            
            // Animate counter when about section is visible
            const aboutSection = document.getElementById('about');
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter();
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            counterObserver.observe(aboutSection);
        });

        // Event listeners for scroll effects
        window.addEventListener('scroll', () => {
            updateScrollProgress();
            handleHeaderScroll();
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                document.getElementById('navLinks').classList.remove('mobile-active');
                document.getElementById('menuToggle').classList.remove('active');
            }
        });

        // Preloader (optional)
        function setupPreloader() {
            const preloader = document.createElement('div');
            preloader.id = 'preloader';
            preloader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            `;
            preloader.innerHTML = `
                <div style="width: 50px; height: 50px; border: 3px solid #f0f0f0; border-top: 3px solid #c8ff00; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                </style>
            `;
            
            document.body.appendChild(preloader);
            
            window.addEventListener('load', () => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            });
        }

        // Initialize preloader
        setupPreloader();
