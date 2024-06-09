function showLoginRegisterPopup(){$("body").append('<div class="snv-overlay"></div>'),$("body").append(`<div class="login-register-popup login-register-popup--js">
      <div class="login-register-popup--header">
        <a href="https://snov.io/knowledgebase/how-to-track-your-outgoing-emails-inside-your-gmail-account/" class="login-register-popup--header-help">
          <img src="${chrome.runtime.getURL("img/question.svg")}" alt="question">
          <span>Help</span>
        </a>
        <div class="login-register-popup--header-info">
          <img src="${chrome.runtime.getURL("img/tracker-logo.svg")}" alt="Tracker logo">
          <div class="login-register-popup--header-info-text">
            <h1>Unlimited Email Tracker</h1>
            <span>by Snov.io</span>
          </div>
        </div>
        <div class="login-register-popup--header-close login-register-popup--header-close--js">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L5 3.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L6.41421 5L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L5 6.41421L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L3.58579 5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#949AA1"/>
          </svg>
        </div>
      </div>
      <div class="login-register-popup--body">
        <div class="login-register-popup--body-text">
          Please log in or create an account to track email opens and clicks, schedule emails, get engagement reports and more. 
          <a href="https://snov.io/knowledgebase/email_tracking/">Learn more</a>
        </div>
        <video id="media" autoplay="autoplay" muted="muted" loop="" playsinline="" style="width: 100%;">
          <source src="`+chrome.runtime.getURL("img/login.mp4")+`" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="login-register-popup--footer">
        <a href="https://app.snov.io/register?signup_source=gmail_tracker_registration&ref=tracker" class="popup-btn">Create a free account</a>
        <a href="https://app.snov.io/login?signup_source=gmail_tracker_login&ref=tracker" class="popup-btn popup-btn--white">Log in</a>
      </div>
    </div>`),$(".login-register-popup--header-close--js").click(()=>{$(".login-register-popup--js").remove(),$(".snv-overlay").remove(),chrome.storage.local.set({openLoginWindowAt:+Date.now()+432e6})})}