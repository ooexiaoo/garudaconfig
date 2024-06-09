document.addEventListener("DOMContentLoaded", function() {
    // Update date
    const currentDate = new Date();
    document.getElementById('current-date').innerText = currentDate.toDateString();

    // Update sector (example values)
    document.getElementById('latitude').innerText = '37.7749° N';
    document.getElementById('longitude').innerText = '122.4194° W';

    // Update threat (example values)
    const threats = ['Cyber attacks', 'Data breaches', 'System intrusions', 'Gauna'];
    const threatList = document.getElementById('threat-list');
    threats.forEach(threat => {
        const li = document.createElement('li');
        li.innerText = threat;
        threatList.appendChild(li);
    });

    // Example event listener for executing terminal commands
    const executeButton = document.getElementById('execute-command');
    executeButton.addEventListener('click', function() {
        const commandInput = document.getElementById('command-input');
        const command = commandInput.value.trim();
        // Here you can implement logic to execute the command
        console.log('Executing command:', command);
        // Clear input field
        commandInput.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const barsContainer = document.querySelector('.bars-container');
    const screenWidth = window.innerWidth;
  
    function createBar() {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${Math.floor(Math.random() * 100)}px`; // Random height
      bar.innerText = Math.floor(Math.random() * 100); // Random value
      barsContainer.appendChild(bar);
      setTimeout(() => {
        barsContainer.removeChild(bar);
      }, 8000); // Remove bar after 2 seconds
    }
  
    function moveBars() {
      setInterval(() => {
        createBar();
      }, 4000); // Create new bar every second
    }
  
    moveBars();
  });
  