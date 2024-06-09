function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.inner-section');
    sections.forEach(section => {
        const content = section.querySelector('.inner-content');
        if (section.id === sectionId) {
            if (section.style.height === '200px') {
                section.style.height = '100px';
                content.style.height = '100px';
            } else {
                section.style.height = '200px';
                content.style.height = '200px';
            }
        } else {
            section.style.height = '100px';
            content.style.height = '100px';
        }
    });
}