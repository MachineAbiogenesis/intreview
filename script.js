// ===================================
// Scroll Animations with Intersection Observer
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for elements in the same container
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Skip if it's just "#" or doesn't exist
        if (targetId === '#' || targetId === '#purchase') {
            e.preventDefault();
            handleCTAClick(this.id);
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// CTA Click Tracking
// ===================================
function handleCTAClick(buttonId) {
    console.log(`CTA clicked: ${buttonId}`);

    // Here you would integrate with your payment processor
    // For example: Stripe, Gumroad, Paddle, etc.
    // Example:
    // window.location.href = 'https://your-payment-link.com';

    alert('Payment integration would go here. Replace this with your actual payment processor link.');
}

// Track all CTA buttons
const ctaButtons = document.querySelectorAll('[id$="-cta"], [id$="-cta-button"]');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href') === '#purchase') {
            e.preventDefault();
            handleCTAClick(button.id);
        }
    });
});

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if any are added later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Welcome to Interview Q&A Guide!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cLooking to customize this page? All content can be easily updated in index.html', 'font-size: 12px; color: #6b7280;');
