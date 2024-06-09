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

document.addEventListener("DOMContentLoaded", () => {
    const messageList = document.getElementById('message-list');
    const unreadMessagesCount = document.getElementById('unread-messages');
    const readMessagesCount = document.getElementById('read-messages');
    const newMessageInput = document.getElementById('new-message');
    const sendMessageButton = document.getElementById('send-message');
    const messagesContainer = document.getElementById('messages-container'); // Define messagesContainer here

    let unreadCount = 0;
    let readCount = 0;

    // Function declarations

    function addMessage(text, isRead = false) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        const messageItem = document.createElement('span');
        messageItem.textContent = text;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-message');
        deleteButton.addEventListener('click', () => {
            messagesContainer.removeChild(messageContainer);
            updateLocalStorage();
        });

        messageContainer.appendChild(messageItem);
        messageContainer.appendChild(deleteButton);
        messagesContainer.appendChild(messageContainer);

        messageItem.classList.add(isRead ? 'read' : 'unread');
        messageItem.addEventListener('click', () => {
            if (!isRead) {
                messageItem.classList.remove('unread');
                messageItem.classList.add('read');
                unreadCount--;
                readCount++;
                updateMessageCounts();
                updateLocalStorage();
            }
        });

        if (!isRead) {
            unreadCount++;
        } else {
            readCount++;
        }
        updateMessageCounts();
        updateLocalStorage();
    }

    function updateMessageCounts() {
        unreadMessagesCount.textContent = unreadCount;
        readMessagesCount.textContent = readCount;
    }

    function updateLocalStorage() {
        const messages = [];
        messagesContainer.querySelectorAll('.message-container').forEach(container => {
            const messageText = container.querySelector('span').textContent;
            const isRead = container.querySelector('span').classList.contains('read');
            messages.push({ text: messageText, isRead: isRead });
        });
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    function loadMessages() {
        const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        storedMessages.forEach(msg => {
            addMessage(msg.text, msg.isRead);
        });
    }

    // Load messages from local storage
    loadMessages();

    sendMessageButton.addEventListener('click', () => {
        const messageText = newMessageInput.value.trim();
        if (messageText) {
            addMessage(messageText);
            newMessageInput.value = '';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const latitudeElement = document.getElementById('latitude');
    const longitudeElement = document.getElementById('longitude');
    const getLocationButton = document.getElementById('get-location');

    getLocationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        latitudeElement.textContent = latitude.toFixed(2);
        longitudeElement.textContent = longitude.toFixed(2);
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }
});
