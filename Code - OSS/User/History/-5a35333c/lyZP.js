function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.inner-section');
    sections.forEach(section => {
        const content = section.querySelector('div');
        const dot = section.querySelector('.dot');
        const targetSection = document.querySelector(section.getAttribute('data-section'));
        if (section.id === sectionId) {
            section.classList.add('active');
            section.style.height = 'calc(2 * (100vh / 9))';
            content.style.height = 'calc(2 * (100vh / 9))';
            dot.style.backgroundColor = 'var(--white)'; // Set dot color for active state
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            section.classList.remove('active');
            section.style.height = 'calc(100vh / 9)';
            content.style.height = 'calc(100vh / 9)';
            dot.style.backgroundColor = 'transparent'; // Reset dot color for inactive state
        }
    });
}