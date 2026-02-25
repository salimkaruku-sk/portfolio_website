/**
 * Salim Karuku Portfolio Scripts
 */

// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for sticky nav
                behavior: 'smooth'
            });
        }
    });
});

// 2. Navbar Transformation on Scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = '#000000';
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = '#1a1a1a';
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// 3. Simple Animation Observer (Optional: Cards fade in as you scroll)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// 4. Handle CV Download Button click (Optional Analytics)
const downloadBtn = document.querySelector('.btn-sm[download]');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        console.log("CV Download initiated by user.");
    });
}
