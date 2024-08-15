document.addEventListener('DOMContentLoaded', () => {
    let isScrolling;
    const scrollTime = 5000; // Duration of scroll in milliseconds
    
    // Smooth scroll function
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            // Code to execute when scrolling stops
        }, scrollTime);
    });

    // Optional: Add a button or any other trigger for smooth scrolling
    document.querySelectorAll('.scroll-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            smoothScroll('#target-section'); // Adjust target section ID accordingly
        });
    });
});