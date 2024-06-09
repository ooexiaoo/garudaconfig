function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.inner-section');
    sections.forEach(section => {
        const content = section.querySelector('div');
        const dot = section.querySelector('.dot');
        if (section.id === sectionId) {
            section.classList.add('active');
            section.style.height = '200px';
            content.style.height = '200px';
            dot.style.backgroundColor = 'var(--white)'; // Set dot color for active state
        } else {
            section.classList.remove('active');
            section.style.height = '100px';
            content.style.height = '100px';
            dot.style.backgroundColor = 'transparent'; // Reset dot color for inactive state
        }
        const targetSection = section.getAttribute('data-section');
    document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    });
    
}
