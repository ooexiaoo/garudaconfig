document.addEventListener("DOMContentLoaded", function() {
    const messagesContainer = document.getElementById('messages-container');
    const messageInput = document.getElementById('new-message');
    const sendMessageButton = document.getElementById('send-message');
    const unreadMessagesCount = document.getElementById('unread-messages');
    const readMessagesCount = document.getElementById('read-messages');

    const currentDateElement = document.getElementById('current-date');
    const latitudeElement = document.getElementById('latitude');
    const longitudeElement = document.getElementById('longitude');
    const getLocationButton = document.getElementById('get-location');

    const commandInput = document.getElementById('command-input');
    const executeCommandButton = document.getElementById('execute-command');

    const startOperationButton = document.getElementById('start-operation');
    const currentOperationElement = document.getElementById('current-operation');
    const operationStatusElement = document.getElementById('operation-status');

    // Initializing message counts
    let unreadMessages = 0;
    let readMessages = 0;

    // Display current date
    function updateCurrentDate() {
        const now = new Date();
        currentDateElement.textContent = now.toLocaleString();
    }
    updateCurrentDate();
    setInterval(updateCurrentDate, 1000);

    // Send a new message
    sendMessageButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message-container');
            const messageSpan = document.createElement('span');
            messageSpan.classList.add('message-text');
            messageSpan.textContent = messageText;
            const deleteButton = document.createElement('span');
            deleteButton.classList.add('delete-message');
            deleteButton.textContent = '🗑';
            messageContainer.appendChild(messageSpan);
            messageContainer.appendChild(deleteButton);
            messagesContainer.appendChild(messageContainer);
            messageInput.value = '';

            // Mark message as unread
            messageSpan.addEventListener('click', function() {
                messageSpan.classList.toggle('read');
                if (messageSpan.classList.contains('read')) {
                    readMessages++;
                    unreadMessages--;
                } else {
                    readMessages--;
                    unreadMessages++;
                }
                updateMessageCounts();
            });

            // Delete message
            deleteButton.addEventListener('click', function() {
                if (messageSpan.classList.contains('read')) {
                    readMessages--;
                } else {
                    unreadMessages--;
                }
                messageContainer.remove();
                updateMessageCounts();
            });

            unreadMessages++;
            updateMessageCounts();
        }
    });

    function updateMessageCounts() {
        unreadMessagesCount.textContent = unreadMessages;
        readMessagesCount.textContent = readMessages;
    }

    // Get location
    getLocationButton.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitudeElement.textContent = position.coords.latitude.toFixed(2);
                longitudeElement.textContent = position.coords.longitude.toFixed(2);
            }, function(error) {
                console.error('Error getting location:', error);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    // Execute command
    executeCommandButton.addEventListener('click', function() {
        const command = commandInput.value.trim();
        if (command) {
            alert(`Executing command: ${command}`);
            commandInput.value = '';
        }
    });

    // Start operation
    startOperationButton.addEventListener('click', function() {
        const operations = ['Mining', 'Exploration', 'Combat Simulation', 'Resource Collection'];
        const randomOperation = operations[Math.floor(Math.random() * operations.length)];
        currentOperationElement.textContent = randomOperation;
        operationStatusElement.textContent = 'In Progress';
        setTimeout(() => {
            operationStatusElement.textContent = 'Completed';
        }, 3000);
    });
});
