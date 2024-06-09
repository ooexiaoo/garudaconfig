document.addEventListener('DOMContentLoaded', (event) => {
    const ambientSound = document.getElementById('ambient-sound');
    const uiSound = document.getElementById('ui-sound');

    ambientSound.volume = 0.5;
    uiSound.volume = 0.5;

    ambientSound.play();

    const consoleInput = document.querySelector('.console-input');
    consoleInput.addEventListener('focus', () => {
        uiSound.play();
    });

    consoleInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const log = document.querySelector('.log');
            const newEntry = document.createElement('p');
            newEntry.textContent = `> ${consoleInput.value}`;
            log.appendChild(newEntry);
            consoleInput.value = '';
            uiSound.play();
        }
    });
});
