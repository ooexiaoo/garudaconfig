function createHtmlAppToolbarPopup(){var s=document.createElement("div");return s.innerHTML=htmlAppToolbarPopup(),s}function createSentMessage(s){const n=document.createElement("div");n.innerHTML=`
        <div class="popup_message_snv">
            <svg class="message_img_snv" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.38636 0H4.09091L0 11.4194H2.86364L1.02273 18L9 7.35484H5.72727L8.38636 0Z" fill="white"/>
            </svg>
            <span class="message_label_snv">${s}</span>
        </div>`,n.onclick=s=>n.remove(),document.body.append(n),setTimeout(()=>{n.remove()},5e3)}function getHtmlAppToolbarButton(s){return`
    <div class="snv_w_main">
    <div id="snvWndHeader" class="snv_w_flex">
        <span class="snv_w_14"><span class="snv_w_b">Email tracker</span> by
            <a href="https://snov.io">
                <img class="snv_w_logo" src="${chrome.runtime.getURL("img/logo_png.png")}" alt="Snovio"> 
            </a>
        </span>
        <span id="snvWndUser" class="snv_w_gray" style="display: none"></span>
        <a id="snvWndLoginLink" href="https://app.snov.io/login?ref=tracker" style="display: none" class="snv_w_link">Login</a>
    </div>
    <hr class="snv_w-margin">

    <div class="snv_w_body">
        <div id="snvWndTrackerSwitch">
            <div id="snvWndDisabledLabel" class="snv_w_left" style="display: none;">Unlimited Email Tracker is currently disabled for</div>
            <div class="snv_w_account snv_w_flex">
                <div class="">${s}</div>
                <label class="switch">
                    <input id="snvWndSwitcher" class="switcher" type="checkbox">
                    <div class="slider round"></div>
                </label>
            </div>
            <div class="snv_w_left">
                <a id="snvWndNeedHelp" href="https://snov.io/knowledgebase/knowledgebase/how-to-track-your-outgoing-emails-inside-your-gmail-account/" class="snv_w_link" style="display: none;">Need help?</a>
            </div>
        </div>

        <div id="snvWndLogin" style="display: none;">
            <a href="https://app.snov.io/login?ref=tracker" class="snv_w_button">Login</a>
            <a id="snvWndButtonCreate" href="https://app.snov.io/register?signup_source=gmail_tracker_registration&ref=tracker&utm_source=tracker_extension&utm_medium=signup_form_tracker&utm_campaign=reports_in_app" class="snv_w_button">Create a free account</a>
            <div class="snv_w_left snv_ftr">
                <span>Create an account to unlock more features: CRM timeline for contacts, weekly reports, integrations, and more.</span>
                <a href="https://snov.io/knowledgebase/knowledgebase/how-to-subscribe-for-regular-summary-reports-on-your-email-opens-and-clicks-at-email-tracker/" class="snv_w_link">Learn more</a>
            </div>
        </div>

        <div id="snvWndInfo" style="display: none;">
            <hr class="snv_w">
            <div id="snvWndInfoTitle" class="snv_w_flex_s snv_sw_box">
                <div id="snvReport" class="snv_sw_gray snv_sw_gray-active">
                    <img src="${chrome.runtime.getURL("img/stats.png")}" alt="stats" class="snv_img_act"> 
                    <img src="${chrome.runtime.getURL("img/stats_pas.png")}" alt="stats" class="snv_img_pas"> 
                    <span>Report</span>
                </div>
                <div id="snvSyncToCrm" class="snv_sw_gray">
                    <img src="${chrome.runtime.getURL("img/sync.png")}" alt="sync" class="snv_img_act"> 
                    <img src="${chrome.runtime.getURL("img/sync_pas.png")}" alt="sync" class="snv_img_pas"> 
                    <span>Sync to CRM</span>
                </div>
                <img id="snvWarnIcon" src="${chrome.runtime.getURL("img/triangle-warn.png")}" alt="warning"> 
                <label class="snv_w_date" id="snvWndStatisticsLabel">
                    <input id="snvWndDatepicker" type='text' class="datepicker-here checkbox">
                    <span id="snvWndDateRange"></span>
                </label>
            </div>

            <div id="snvWndStatistics">
                <div id="resultSnv"></div>
                <table id="snvWndResult" class="snv_w_gray">
                    <tr>
                        <td>SENT</td>
                        <td>OPENED</td>
                        <td>CLICKED</td>
                    </tr>							
                    <tr>
                        <td class="snv_w_sent">
                        </td>
                        <td>
                            <span class="snv_w_opened"></span>
                            <span id="snvWndAfterOpened" class="snv_w_after"></span>
                        </td>
                        <td>
                            <span class="snv_w_clicked"></span>
                            <span id="snvWndAfterClicked" class="snv_w_after"></span>
                        </td>
                    </tr>							
                </table>
                <div class="snv_w_left snv_ftr"  id="snvWndStatFooter">
                    <div>You can receive regular summary reports to your email.</div>
                    <a href="https://app.snov.io/extensions/gmail-email-tracker" class="snv_w_link">Edit your email report preferences.</a>
                </div>
            </div>	

            <div id="snvWndSynchronize" style="display: none;">
                <div class="snv_w_account snv_w_flex">
                    <label class="switch">
                        <input id="snvWndSyncSwitcher" class="switcher" type="checkbox">
                        <div class="slider round"></div>
                    </label>
                    <div class="snv_txt_left">Synchronize contacts and data to your Snov.io account</div>
                </div>

                <div id="snvSyncHelpPanel" class="snv_ftr">
                    <span>
                        Activate to sync contacts you email to your personal CRM dashboard for easier management.
                        Each contact will contain a person's info, individual contact timeline, 
                        emails you send and receive, campaigns launched for this person, and more.
                    </span>
                    <a href="https://snov.io/knowledgebase/how-email-tracker-syncs-with-snov-io-app/" class="snv_w_link">Find out more</a>
                </div>
                
                <div id="snvSyncWarningText" class="snv_w_flex" style="display: none;">
                    Synchronization paused: this feature is unavailable on the free plan.
                </div>

                <div id="snvSyncListsPanel" style="display: none;">
                    <div>Save contacts to list</div>
                    <select class="input_snv" id="snvUserLists"></select>
                </div>
            </div>
        </div>	
    </div>
    </div>
`}function htmlAppToolbarPopup(){return`
    <div class="snv-overlay"></div>
    <div class="snv_popup_window snv_app_toolbar_popup">
        <div id="snvPopupClose">
            <img src="${chrome.runtime.getURL("img/close.png")}" alt="close"> 
        </div>
        <div class="snv_popup-title">
            Upgrade to sync your data
        </div>
        <div class="snv_popup-text">
            Contact and data synchronization is unavailable on free plans. 
            Upgrade your account to any paid plan to turn on synchronization.
        </div>
        <a href="https://app.snov.io/pricing-plans" class="snv_w_button">Upgrade</a>
    </div>`}