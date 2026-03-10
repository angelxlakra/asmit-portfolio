/**
 * Portfolio Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitcher();
    initCounters();
    initClock();
    initQuoteCarousel();
    initImageRotator();
    initExpandableModals();
});

/* ==========================================================================
   1. Theme Switcher
   ========================================================================== */
function initThemeSwitcher() {
    const themeBtn = document.getElementById('theme-switcher');
    const body = document.body;
    
    // Check local storage for preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Add a little pop animation
        themeBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeBtn.style.transform = '';
        }, 150);
    });
}

/* ==========================================================================
   2. Number Counters (Intersection Observer)
   ========================================================================== */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number, .social-count');
    const speed = 200; // The lower the slower

    const animateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/,/g, '');
        
        // Determine increment
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc).toLocaleString();
            requestAnimationFrame(() => animateCount(counter));
        } else {
            counter.innerText = target.toLocaleString() + (counter.classList.contains('stat-number') && target === 500 ? '+' : '');
        }
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/* ==========================================================================
   3. Live Clock and Date
   ========================================================================== */
function initClock() {
    const clockEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');
    if (!clockEl || !dateEl) return;

    const updateTime = () => {
        const now = new Date();
        
        // Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockEl.innerText = `${hours}:${minutes}:${seconds}`;
        
        // Date
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateEl.innerText = now.toLocaleDateString('en-US', options);
    };

    updateTime();
    setInterval(updateTime, 1000); // Update every second
}

/* ==========================================================================
   4. Quote Carousel
   ========================================================================== */
function initQuoteCarousel() {
    const quotes = document.querySelectorAll('.quote');
    if (quotes.length === 0) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        // Fade out current
        quotes[currentIndex].classList.remove('active');
        
        // Move to next
        currentIndex = (currentIndex + 1) % quotes.length;
        
        // Fade in next
        quotes[currentIndex].classList.add('active');
    }, 5000); // Rotate every 5 seconds
}

/* ==========================================================================
   5. Image Rotator
   ========================================================================== */
function initImageRotator() {
    const slides = document.querySelectorAll('.image-rotator .slide');
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    
    // Set actual placeholder images since we are currently using colored divs
    const tempImages = [
        'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop")',
        'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop")',
        'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop")'
    ];
    
    slides.forEach((slide, index) => {
        if(tempImages[index]) {
            slide.style.backgroundImage = tempImages[index];
            slide.style.backgroundColor = 'transparent';
        }
    });

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 6000); 
}

/* ==========================================================================
   6. Expandable Modals
   ========================================================================== */
function initExpandableModals() {
    const expandables = document.querySelectorAll('.expandable');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    
    if (!modalOverlay) return;

    let currentlyFocusedTile = null;

    expandables.forEach(tile => {
        tile.addEventListener('click', (e) => {
            // Prevent if clicking on something that shouldn't trigger modal (e.g. form inputs)
            if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            currentlyFocusedTile = tile;
            
            // Setup Modal Content based on tile clicked
            const clone = tile.cloneNode(true);
            
            // Clean up clone specific styles for modal view
            clone.classList.remove('bento-tile', 'expandable', 'glass-panel');
            clone.style.width = '100%';
            clone.style.height = 'auto';
            clone.style.minHeight = '300px';
            clone.style.padding = '0';
            
            // Remove the expand icon from clone
            const icon = clone.querySelector('.expand-icon');
            if(icon) icon.remove();
            
            // Unhide hidden content if it represents a form
            const hiddenContent = clone.querySelector('.hidden-content');
            if(hiddenContent) {
                hiddenContent.style.display = 'block';
                setTimeout(() => { hiddenContent.style.opacity = '1'; }, 50);
            }
            
            // If it's the model viewer, we need to ensure it initializes properly in the new DOM slot
            const modelViewer = clone.querySelector('model-viewer');
            if(modelViewer) {
                 modelViewer.style.height = '60vh';
                 modelViewer.setAttribute('camera-controls', 'true');
                 // Ensure zoom works in modal
                 modelViewer.removeAttribute('disable-zoom');
            }

            // Replace modal body content
            modalBody.innerHTML = '';
            modalBody.appendChild(clone);
            
            // Show Modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent bg scroll
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalBody.innerHTML = ''; // clean up after transition
            currentlyFocusedTile = null;
        }, 400); // match transition duration
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}
