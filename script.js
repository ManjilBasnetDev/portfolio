document.addEventListener('DOMContentLoaded', () => {
    // Typewriter animation
    const typewriterElement = document.getElementById('typewriter');
    const text = "Manjil Basnet";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Section visibility animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Skill animation
    const skillsList = document.querySelector('.skills-list');
    if (skillsList) {
        skillsList.querySelectorAll('li').forEach((skill, index) => {
            skill.style.animationDelay = `${index * 0.1}s`;
            skill.style.animation = `fadeInUp 0.5s ease forwards`;
        });
    }

    // Project hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-10px)';
            project.style.boxShadow = '0 0 20px var(--primary-color)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'translateY(0)';
            project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        });
    });

    // Neon background animation
    const neonBg = document.querySelector('.neon-bg');
    let hue = 0;
    function animateNeonBg() {
        hue = (hue + 1) % 360;
        neonBg.style.background = `
            linear-gradient(45deg, hsl(${hue}, 100%, 50%) 0%, transparent 70%),
            linear-gradient(-45deg, hsl(${hue + 60}, 100%, 50%) 0%, transparent 70%)
        `;
        requestAnimationFrame(animateNeonBg);
    }
    animateNeonBg();

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        form.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message! I will get back to you soon.');
    });
});
