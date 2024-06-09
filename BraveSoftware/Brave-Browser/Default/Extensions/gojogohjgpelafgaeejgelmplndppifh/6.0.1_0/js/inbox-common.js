let inboxAccount={},sdk,isUsingGmailMaterialUI,disableLinkTracking=!1,this_,trackHosts=[],hideNotTrackedLabel=!1,showSimpleLabels=!1,lastOpenedEmail,wasAtLettersListPage=!1;class PortEventsClass{constructor(){return PortEventsClass.instance||(this.portConnect(),PortEventsClass.instance=this),PortEventsClass.instance}portConnect(){this.port=chrome.runtime.connect({name:"snovio_email_tracker"}),this.connected=!0,this.port.onDisconnect.addListener(()=>{this.disconnect()}),this.portOnMessage()}portOnMessage(){this.port.onMessage.addListener(this.onMessageListeners)}onMessageListeners(e){"checkInboxActivation"===e.type&&(inboxAccount.value=e.value,e.value&&e.value.activated?loadInbox(sdk):e.value&&e.value.never||e.value&&e.value.showAfter&&!(+Date.now()>e.value.showAfter)||showPopup(sdk,inboxAccount.userEmail)),"getTrackHosts"===e.type&&(trackHosts=e.trackHosts),"checkStars"===e.type&&showStars(),"checkLinkTracking"===e.type&&(disableLinkTracking=!0===e.disableLinkTracking,chrome.storage.sync.set({disableLinkTracking:!0===e.disableLinkTracking})),"hideNotTrackedLabel"===e.type&&(hideNotTrackedLabel=e.hideNotTrackedLabel),"showSimpleLabels"===e.type&&(showSimpleLabels=e.showSimpleLabels),"setStatistics"===e.type&&e.list&&(e.force?inboxLists.setStatReminder(e.list):inboxLists.setStat(e.list))}disconnect(){this.connected=!1;try{this.port.onMessage.removeListener(this.onMessageListeners),this.port.disconnect()}catch(e){}finally{this.portConnect()}}postMessage(e){if(!1===this.connected)return this.disconnect(),this.postMessage(e);this.port.postMessage(e)}}let PortEvents=new PortEventsClass;function showPopup(e,t){$("body").append('<div class="snv-overlay"></div>'),$("body").append(`<div id="snv_popup">
		<a id="snv_popup_get_help" href="https://snov.io/knowledgebase/knowledgebase/how-to-track-your-outgoing-emails-inside-your-gmail-account/">Get help</a>
		<table align="center">
			<tr>
				<td>
					<img src="${chrome.runtime.getURL("img/48x48.png")}"></img>
				</td>
				<td>
					<label class="snv_popup_label"><b> Email Tracker</b></label>
				</td>
			</tr>
		</table>
		<label class="snv_popup_label">Activate for <b>${t}</b>?</label>
		<div class="snv_popup_warning">For Snov.io Email Tracker to function correctly, please turn off any other email tracking Chrome extensions.</div>

		<video id="media" autoplay="autoplay" muted="muted" loop="" playsinline="" style="width: 100%;">
			<source src="${chrome.runtime.getURL("img/tracking3.mp4")}" type="video/mp4">
			Your browser does not support the video tag.
		</video>

		<a id="snv_popup_activate" href="#">Activate</a>
		<br>
		<a id="snv_popup_never" class="snv_popup_lnk" href="#">Never for this account</a>
		<a id="snv_popup_later" class="snv_popup_lnk" href="#">Remind me later</a>
	
		</div>`),$("#snv_popup").css({position:"fixed",width:"700px",left:$(window).width()/2-350,top:$(window).height()/2-335,"z-index":16777271}),$("#snv_popup_activate").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.activated=!0,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount}),PortEvents.postMessage({type:"gaSend",message:"activateInPopup"}),document.location.reload(!0)}),$("#snv_popup_later").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.showAfter=+Date.now()+2592e5,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount})}),$("#snv_popup_never").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),inboxAccount.value.never=!0,PortEvents.postMessage({type:"updateInboxActivation",inboxAccount:inboxAccount})}),$("#snv_popup_get_help").click(()=>{PortEvents.postMessage({type:"gaSend",message:"clickHelpInPopup"})})}function showStars(){function e(e){PortEvents.postMessage({type:"setStar",star:e}),$("#snv_popup").remove(),$(".snv-overlay").remove()}$("body").append('<div class="snv-overlay"></div>'),$("body").append(`<div id="snv_popup" class="snv-popup-star">
			<div id="allStars" class="hidden brdr">
				<table align="center">
					<tr>
						<td>
							<img src="${chrome.runtime.getURL("img/48x48.png")}"></img>
						</td>
						<td>
							<label class="snv_popup_label"><b> Email Tracker</b></label>
						</td>
					</tr>
				</table>
				<img src="${chrome.runtime.getURL("img/popup_stars.gif")}"></img>
				<div id="pleaseRateUs" class="snv_popup_rate_label">Do you like Email Tracker? Please rate us in webstore.</div>
				<div class="stars" style="margin: 0 auto 35px;">
					<input type="radio" name="star" class="star-1" id="star-1"/>
					<label class="star-1" for="star-1">1</label>
					<input type="radio" name="star" class="star-2" id="star-2"/>
					<label class="star-2" for="star-2">2</label>
					<input type="radio" name="star" class="star-3" id="star-3"/>
					<label class="star-3" for="star-3">3</label>
					<input type="radio" name="star" class="star-4" id="star-4"/>
					<label class="star-4" for="star-4">4</label>
					<input type="radio" name="star" class="star-5" id="star-5"/>
					<label class="star-5" for="star-5">5</label>
					<span></span>
				</div>
				<br>
			</div>
			<div id="badEval" class="brdr" style="display:none;">We promise we will try harder to work better. Send me your suggestions at help@snov.io</div>
			<a id="snv_popup_later" class="snv_popup_lnk" href="#">Remind me later</a>
		</div>`),$("#snv_popup").css({width:"500px",left:$(window).width()/2-250,top:$(window).height()/2-250,"z-index":16777271}),$(".stars").css({background:`url("${chrome.runtime.getURL("img/stars.png")}") repeat-x 0 0`}),$(".stars span").css({background:`url("${chrome.runtime.getURL("img/stars.png")}") repeat-x 0 -60px`}),$("#star-1").click(()=>{e(1)}),$("#star-2").click(()=>{e(2)}),$("#star-3").click(()=>{e(3)}),$("#star-4").click(()=>{e(4)}),$("#star-5").click(()=>{e(5)}),$("#snv_popup_later").click(()=>{$("#snv_popup").remove(),$(".snv-overlay").remove(),PortEvents.postMessage({type:"gaSend",message:"starShowLater"})})}function loadInbox(e){inboxLists.getStat(e),inboxCompose.compose(e,inboxAccount.eIdInt32,inboxAccount.userEmail,trackHosts),inboxConversations.addSidebarContentPanel(e),inboxTestEmail.showTestEmail(e)}chrome.runtime.onMessage.addListener((e,t,s)=>{e.type,s({eId:inboxAccount.eId,eIdInt32:inboxAccount.eIdInt32}),"reloadPage"===e.type&&(document.location.reload(),s({})),"updateStatistics"===e.type&&e.msgType&&(inboxLists.updateStat(e.threadId,e.msgType),s({})),"disableReminder"===e.type&&($(document).find("#snvActivateReminder")&&($(document).find("#snvActivateReminder").prop("checked",e.activated),$(document).find("#snvActivateReminder").change()),$(document).find("#snvActivateSendLater")&&($(document).find("#snvActivateSendLater").prop("checked",e.activated),$(document).find("#snvActivateSendLater").change()),$(document).find("#snvWndSyncSwitcher")&&($(document).find("#snvWndSyncSwitcher").prop("checked",e.activated),$(document).find("#snvWndSyncSwitcher").change()),s({})),"updatePage"===e.type&&e.eId&&e.eId===inboxAccount.eId&&(document.location.reload(!0),s({}))}),inboxSDK();