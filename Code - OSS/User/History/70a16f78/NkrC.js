document.addEventListener("DOMContentLoaded", function() {
    // Update date
    const currentDate = new Date();
    document.getElementById('current-date').innerText = currentDate.toDateString();

    // Update sector (example values)
    document.getElementById('latitude').innerText = '37.7749° N';
    document.getElementById('longitude').innerText = '122.4194° W';

    // Update threat (example values)
    const threats = ['Gauna','Cyber attacks', 'Data breaches', 'System intrusions'];
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
