function showPopup(e,o){$("body").append('<div class="snv-overlay"></div>'),$("body").append(`<div id="snv_popup">
    <a id="snv_popup_get_help" href="https://snov.io/knowledgebase/knowledgebase/how-to-track-your-outgoing-emails-inside-your-gmail-account/">Get help</a>
    <table align="center">
      <tr>
        <td>
          <img src="`+chrome.runtime.getURL("img/48x48.png")+`"></img>
        </td>
        <td>
          <label class="snv_popup_label"><b> Email Tracker</b></label>
        </td>
      </tr>
    </table>
    <label class="snv_popup_label">Activate for <b>`+o+`</b>?</label>
    <div class="snv_popup_warning">For Snov.io Email Tracker to function correctly, please turn off any other email tracking Chrome extensions.</div>

    <video id="media" autoplay="autoplay" muted="muted" loop="" playsinline="" style="width: 100%;">
      <source src="`+chrome.runtime.getURL("img/tracking3.mp4")+`" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <a id="snv_popup_activate" href="#">Activate</a>
    <br>
    <a id="snv_popup_never" class="snv_popup_lnk" href="#">Never for this account</a>
    <a id="snv_popup_later" class="snv_popup_lnk" href="#">Remind me later</a>
    
    </div>`),$("#snv_popup").css({position:"fixed",width:"700px",left:$(window).width()/2-350,top:$(window).height()/2-335,"z-index":16777271}),$("#snv_popup_activate").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.activated=!0,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount}),PortEvents.postMessage({type:"gaSend",message:"activateInPopup"}),document.location.reload(!0)}),$("#snv_popup_later").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.showAfter=+Date.now()+2592e5,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount})}),$("#snv_popup_never").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.never=!0,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount})}),$("#snv_popup_get_help").click(()=>{PortEvents.postMessage({type:"gaSend",message:"clickHelpInPopup"})})}