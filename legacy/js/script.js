/* =========================================
    MAIN JAVASCRIPT LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
        OFFCANVAS MENU LOGIC
       ========================================= */
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    function toggleMenu() {
        body.classList.toggle('offcanvas-open');
    }

    if (openBtn) openBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 576 && body.classList.contains('offcanvas-open')) {
            body.classList.remove('offcanvas-open');
        }
    });

    /* =========================================
        MOBILE SHOP ACCORDION
       ========================================= */
    const shopBtn = document.getElementById('mobileShopBtn');
    if (shopBtn) {
        shopBtn.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    /* =========================================
        TOP BAR CLOSE LOGIC
       ========================================= */
    const topBar = document.getElementById('topBar');
    const closeTopBarBtn = topBar ? topBar.querySelector('.close-btn') : null;

    if (closeTopBarBtn) {
        closeTopBarBtn.addEventListener('click', () => {
            topBar.style.display = 'none';
        });
    }

    /* =========================================
        SCROLL ANIMATION & COUNTER (HERO)
       ========================================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (!target.classList.contains('fade-in')) {
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                }

                if (target.classList.contains('stat-item')) {
                    const h3 = target.querySelector('h3');
                    if (h3) animateCounter(h3);
                }

                obs.unobserve(target);
            }
        });
    }, observerOptions);

    const heroElements = document.querySelectorAll('.hero-text h1, .hero-p, .shop-btn, .stat-item, .hero-image-wrapper');

    heroElements.forEach((el, index) => {
        if (!el.classList.contains('fade-in')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.8s ease-out ${index * 0.1}s`;
        }
        counterObserver.observe(el);
    });

    function animateCounter(element) {
        const originalText = element.innerText;
        const targetNum = parseInt(originalText.replace(/,/g, '').replace('+', ''));

        if (isNaN(targetNum)) return;

        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const currentNum = Math.floor(progress * targetNum);

            element.innerText = currentNum.toLocaleString() + (originalText.includes('+') ? '+' : '');

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.innerText = originalText;
            }
        };

        window.requestAnimationFrame(step);
    }

    /* =========================================
        GENERIC FADE-IN OBSERVER
       ========================================= */
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in');

    elementsToAnimate.forEach(el => {
        fadeObserver.observe(el);
    });

    /* =========================================
        TESTIMONIAL SLIDER LOGIC
       ========================================= */
    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;
        const totalCards = track.querySelectorAll('.testimonial-card').length;

        function getItemsPerView() {
            if (window.innerWidth > 992) return 3;
            if (window.innerWidth > 768) return 2;
            return 1;
        }

        function updateSlider() {
            const itemsPerView = getItemsPerView();

            const maxIndex = Math.max(0, totalCards - itemsPerView);
            currentIndex = Math.min(currentIndex, maxIndex);

            const firstCard = track.querySelector('.testimonial-card');
            if (!firstCard) return;

            const cardWidth = firstCard.offsetWidth;
            const gap = 20;
            const moveAmount = cardWidth + gap;

            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        nextBtn.addEventListener('click', () => {
            const itemsPerView = getItemsPerView();
            const maxIndex = Math.max(0, totalCards - itemsPerView);

            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            const itemsPerView = getItemsPerView();
            const maxIndex = Math.max(0, totalCards - itemsPerView);

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateSlider();
        });

        window.addEventListener('resize', updateSlider);

        updateSlider();
    }
    /* =========================================
        Password toggle
       ========================================= */
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    if (passwordInput && togglePassword) {
        const icon = togglePassword.querySelector('i');
        togglePassword.addEventListener('click', () => {
            const isHidden = passwordInput.type === 'password';
            passwordInput.type = isHidden ? 'text' : 'password';
            icon.classList.toggle('fa-eye', isHidden);
            icon.classList.toggle('fa-eye-slash', !isHidden);
        });
    }

    const confirmPasswordInput = document.getElementById('confirm_password');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    let confirmIcon = null;

    if (toggleConfirmPassword) {
        confirmIcon = toggleConfirmPassword.querySelector('i');
    }

    if (confirmPasswordInput && toggleConfirmPassword && confirmIcon) {
        toggleConfirmPassword.addEventListener('click', () => {
            const isHidden = confirmPasswordInput.type === 'password';
            confirmPasswordInput.type = isHidden ? 'text' : 'password';
            confirmIcon.classList.toggle('fa-eye', isHidden);
            confirmIcon.classList.toggle('fa-eye-slash', !isHidden);
        });
    }
    
});