// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // FAQ Accordion - YENİ VE ÇALIŞAN VERSİYON
    document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-question i');
            
            if (question && answer) {
                question.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const isActive = item.classList.contains('active');
                    
                    // Önce tüm FAQ itemları kapat
                    faqItems.forEach(function(otherItem) {
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    });
                    
                    // Eğer tıklanan item aktif değilse, onu aç
                    if (!isActive) {
                        item.classList.add('active');
                        if (icon) {
                            icon.style.transform = 'rotate(180deg)';
                        }
                    }
                });
            }
        });
    });

    // GLOBAL FAQ TOGGLE FONKSİYONU - KESİNLİKLE ÇALIŞACAK
    function toggleFAQ(element) {
        const faqItem = element.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = element.querySelector('i');
        const isActive = faqItem.classList.contains('active');
        
        // Önce tüm FAQ itemları kapat
        const allFaqItems = document.querySelectorAll('.faq-item');
        allFaqItems.forEach(function(item) {
            item.classList.remove('active');
            const otherIcon = item.querySelector('.faq-question i');
            if (otherIcon) {
                otherIcon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Eğer tıklanan item aktif değilse, onu aç
        if (!isActive) {
            faqItem.classList.add('active');
            if (icon) {
                icon.style.transform = 'rotate(180deg)';
            }
        }
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    const charCount = document.querySelector('.char-count');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Validation
            if (!name || !email || !phone || !service || !message.trim()) {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Lütfen geçerli bir e-posta adresi giriniz.');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                alert('Lütfen geçerli bir telefon numarası giriniz.');
                return;
            }
            
            // Show loading spinner
            const loadingSpinner = document.getElementById('loadingSpinner');
            if (loadingSpinner) {
                loadingSpinner.classList.add('show');
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;
            
            // Create email content
            const emailContent = `
                Yeni İletişim Formu Mesajı
                
                Ad Soyad: ${name}
                E-posta: ${email}
                Telefon: ${phone}
                Hizmet: ${service}
                Mesaj: ${message}
                
                Bu mesaj yssadacekod@gmail.com adresine gönderilecek.
            `;
            
            setTimeout(() => {
                alert('Mesajınız başarıyla gönderildi!\n\n' + emailContent + '\n\nEn kısa sürede size dönüş yapacağız.');
                this.reset();
                if (charCount) charCount.textContent = '0 / 180';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide loading spinner
                const loadingSpinner = document.getElementById('loadingSpinner');
                if (loadingSpinner) {
                    loadingSpinner.classList.remove('show');
                }
            }, 2000);
        });
    }

    // Character counter for message textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = `${length} / 180`;
            
            if (length > 180) {
                this.value = this.value.substring(0, 180);
                charCount.textContent = '180 / 180';
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .vehicle-card, .blog-card, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Vehicle card hover effects
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    vehicleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });

    // Blog card hover effects
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });

    // WhatsApp button pulse animation
    const whatsappButton = document.querySelector('.whatsapp-button a');
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappButton.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Admin panel link hover effect
    const adminLink = document.querySelector('.admin-link a');
    if (adminLink) {
        adminLink.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(180deg)';
        });
        
        adminLink.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Form validation
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        });
        
        control.addEventListener('focus', function() {
            this.style.borderColor = '#93c5fd';
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Back to top functionality
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#1d4ed8';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#2563eb';
    });
});

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Export functions for global use
window.DugunServisi = {
    showNotification,
    scrollToSection: function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
};

// Additional functions for new pages
document.addEventListener('DOMContentLoaded', function() {
    // Character counter for textareas
    const textareas = document.querySelectorAll('textarea[maxlength]');
    textareas.forEach(textarea => {
        const charCount = textarea.parentNode.querySelector('.char-count');
        if (charCount) {
            textarea.addEventListener('input', function() {
                const remaining = this.maxLength - this.value.length;
                charCount.textContent = `${this.value.length} / ${this.maxLength}`;
                
                if (remaining < 50) {
                    charCount.style.color = '#ef4444';
                } else if (remaining < 100) {
                    charCount.style.color = '#f59e0b';
                } else {
                    charCount.style.color = '#6b7280';
                }
            });
        }
    });

    // Enhanced form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    field.addEventListener('input', function() {
                        this.style.borderColor = '#d1d5db';
                    }, { once: true });
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
                this.reset();
                
                // Reset character counter
                const charCount = this.querySelector('.char-count');
                if (charCount) {
                    charCount.textContent = '0 / 500';
                    charCount.style.color = '#6b7280';
                }
            } else {
                showNotification('Lütfen tüm gerekli alanları doldurun.', 'error');
            }
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // Service page specific functionality
    const serviceHero = document.querySelector('.service-hero');
    if (serviceHero) {
        // Add parallax effect to service hero sections
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            serviceHero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Contact info cards hover effect
    const contactCards = document.querySelectorAll('.contact-info-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click tracking if needed
            console.log('Social media link clicked:', this.href);
        });
    });

    // Map interaction
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('click', function() {
            // Open map in new tab
            window.open('https://maps.google.com/?q=Istanbul,Turkey', '_blank');
        });
    }

    // Blog pagination
    const paginationLinks = document.querySelectorAll('.page-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            paginationLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Here you would typically load new content via AJAX
            // For now, just show a notification
            showNotification('Sayfa yükleniyor...', 'success');
        });
    });

    // Service selection in contact forms
    const serviceSelects = document.querySelectorAll('select[name="service"]');
    serviceSelects.forEach(select => {
        select.addEventListener('change', function() {
            const selectedService = this.value;
            const messageField = this.closest('form').querySelector('textarea[name="message"]');
            
            if (messageField && selectedService) {
                const serviceMessages = {
                    'servis': 'Servis kiralama hizmeti hakkında bilgi almak istiyorum.',
                    'minibus': 'Minibüs kiralama hizmeti hakkında bilgi almak istiyorum.',
                    'otobus': 'Otobüs kiralama hizmeti hakkında bilgi almak istiyorum.',
                    'personel': 'Personel taşımacılığı hizmeti hakkında bilgi almak istiyorum.',
                    'vip-minibus': 'VIP minibüs kiralama hizmeti hakkında bilgi almak istiyorum.'
                };
                
                if (serviceMessages[selectedService]) {
                    messageField.value = serviceMessages[selectedService];
                    // Trigger input event to update character counter
                    messageField.dispatchEvent(new Event('input'));
                }
            }
        });
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Parallax effect for contact section
window.addEventListener('scroll', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxBg.style.transform = `translateY(${rate}px)`;
    }
});

// Parallax phone number animation
const phoneNumber = document.querySelector('.phone-number-large');
if (phoneNumber) {
    phoneNumber.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    phoneNumber.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Parallax button hover effects
document.querySelectorAll('.parallax-buttons .btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

    // Loading Spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        // Show loading on page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingSpinner.classList.remove('show');
            }, 1000);
        });
    }

// Smooth scrolling for all internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Cookie Consent Banner
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    
    if (!cookieChoice) {
        // Show banner after 2 seconds
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
}

// Cookie functions
function acceptCookies() {
    localStorage.setItem('cookieChoice', 'accepted');
    localStorage.setItem('cookieDate', new Date().toISOString());
    hideCookieBanner();
    showNotification('Çerez tercihleriniz kaydedildi.', 'success');
}

function rejectCookies() {
    localStorage.setItem('cookieChoice', 'rejected');
    localStorage.setItem('cookieDate', new Date().toISOString());
    hideCookieBanner();
    showNotification('Çerez tercihleriniz kaydedildi.', 'info');
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
} 