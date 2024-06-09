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

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const messageList = document.getElementById('messages-container');
        const unreadMessagesCount = document.getElementById('unread-messages');
        const readMessagesCount = document.getElementById('read-messages');
        const newMessageInput = document.getElementById('new-message');
        const sendMessageButton = document.getElementById('send-message');

        let unreadCount = 0;
        let readCount = 0;

        // Load messages from local storage
        loadMessages();

        sendMessageButton.addEventListener('click', () => {
            const messageText = newMessageInput.value.trim();
            if (messageText) {
                addMessage(messageText);
                newMessageInput.value = '';
            }
        });

        function addMessage(text, isRead = false) {
            const messageItem = document.createElement('li');
            messageItem.textContent = text;

            const deleteButton = document.createElement('span');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete-message');
            deleteButton.addEventListener('click', () => {
                messageList.removeChild(messageItem);
                updateLocalStorage();
            });

            messageItem.appendChild(deleteButton);
            messageItem.classList.add(isRead ? 'read' : 'unread');
            messageItem.addEventListener('click', () => {
                if (messageItem.classList.contains('unread')) {
                    messageItem.classList.remove('unread');
                    messageItem.classList.add('read');
                    unreadCount--;
                    readCount++;
                    updateMessageCounts();
                    updateLocalStorage();
              
