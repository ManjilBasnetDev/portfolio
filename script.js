document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle navigation menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize ScrollReveal for animations
    ScrollReveal().reveal('.project-card', { 
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('.skill', { 
        delay: 200,
        distance: '50px',
        origin: 'left',
        interval: 200
    });

    // Animate skill bars on scroll
    const skillLevels = document.querySelectorAll('.skill-level');
    const animateSkills = () => {
        skillLevels.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const skillBottom = skill.getBoundingClientRect().bottom;
            if (skillTop < window.innerHeight && skillBottom > 0) {
                skill.style.width = skill.parentElement.dataset.level;
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Form submission (you'll need to implement the server-side handling)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', new FormData(contactForm));
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
});

