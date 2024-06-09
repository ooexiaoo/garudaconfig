function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.inner-section');
    sections.forEach(section => {
        const content = section.querySelector('.menu-content');
        if (section.id === sectionId) {
            section.style.height = '200px';
            content.style.height = '200px';
        } else {
            section.style.height = '100px';
            content.style.height = '100px';
        }
    });
}