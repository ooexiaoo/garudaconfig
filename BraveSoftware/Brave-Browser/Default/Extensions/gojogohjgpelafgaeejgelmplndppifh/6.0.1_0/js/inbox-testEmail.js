inboxTestEmail={createTestEmail:e=>{e.Compose.openNewComposeView().then(function(e){e.setToRecipients(["team@snov.io"]),e.setSubject("Welcome to Snov.io Email Tracker!"),e.setBodyHTML(`
                <div>Hi!</div>
                <div>Thank you for installing Snov.io Email Tracker. 
                    To see how it works, just press send! 
                    Once this email is opened, you will receive a push notification. 
                    You will receive a similar notification if somebody clicks the link in your email.
                </div>
                <img src="https://app.snov.io/img/tracker_test_email.png">
                <div>Find out more about how to track emails, schedule follow-ups, and set up reminders 
                <a href="https://snov.io/knowledgebase/how-to-track-your-outgoing-emails-inside-your-gmail-account/">here</a>.</div>
                <div>Happy sending :)</div>`),e.setMinimized(!0),setTimeout(()=>{e.setMinimized(!1)},100)})},showTestEmail(i){chrome.runtime.sendMessage({type:"checkTestEmail"},e=>{e.needShow&&!0===e.needShow&&(this.createTestEmail(i),chrome.runtime.sendMessage({type:"disableTestEmail"}))})}};