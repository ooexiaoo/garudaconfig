const sections = document.querySelectorAll('.inner-section');

function toggleSection(sectionId) {
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

document.addEventListener('keydown', function(event) {
    const keyCode = parseInt(event.key);
    switch (keyCode) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            let sectionId = '';
            switch (keyCode) {
                case 1:
                    sectionId = 'home-menu';
                    break;
                case 2:
                    sectionId = 'about-menu';
                    break;
                case 3:
                    sectionId = 'gallery-menu';
                    break;
                case 4:
                    sectionId = 'blog-menu';
                    break;
                case 5:
                    sectionId = 'careers-menu';
                    break;
                case 6:
                    sectionId = 'resources-menu';
                    break;
                case 7:
                    sectionId = 'contact-menu';
                    break;
            }
            toggleSection(sectionId);
            break;
        default:
            // do nothing
            break;
    }
});