inboxLists={updateStat:(e,i)=>{var t,r;this.objThreads_copy&&this.objThreads_copy[e]&&("open"===i?(this.objThreads_copy[e].opens++,t={title:(showSimpleLabels?"":"Opens: ")+this.objThreads_copy[e].opens,foregroundColor:"white",backgroundColor:"#a272f9"},this.objThreads_copy[e].emitter.emit(t)):"click"===i&&(this.objThreads_copy[e].links++,t={title:(showSimpleLabels?"":"Clicks: ")+this.objThreads_copy[e].links,foregroundColor:"white",backgroundColor:"#5bae61"},this.objThreads_copy[e].emitterClick||(i=Kefir.stream(function(e){return r=e,function(){}}),this.objThreads_copy[e].rowView.addLabel(i),this.objThreads_copy[e].emitterClick=r),this.objThreads_copy[e].emitterClick)&&this.objThreads_copy[e].emitterClick.emit(t),this.objThreads_copy[e].emitterReminder)&&this.objThreads_copy[e].emitterReminder.emit({title:"(is empty)",iconUrl:"",iconClass:"snv_imgDescr_empty",onClick:()=>{}})},setStatReminder:i=>{for(threadId in i)if(this.objThreads_copy[threadId]&&i[threadId].reminder&&(this.objThreads_copy[threadId].reminder=i[threadId].reminder,!this.objThreads_copy[threadId].reminderImage)){let e="Message will be returned to your inbox ";"open"===i[threadId].reminder.remindCondition?e+="if it's not read at ":"click"===i[threadId].reminder.remindCondition?e+="if it gets no link clicks at ":"reply"===i[threadId].reminder.remindCondition?e+="if it does not receive a response at ":e+=" at ",e+=new Date(+i[threadId].reminder.remindTime).toLocaleDateString([],{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"});var t={imageUrl:chrome.runtime.getURL("img/reminder_on.png"),tooltip:e};this.objThreads_copy[threadId].rowView.addImage(t),this.objThreads_copy[threadId].reminderImage=!0}},setStat:i=>{for(key in this.objThreads)if(this.objThreads[key].rowView.destroyed)this.objThreads[key].buttonAdded=!1;else{var t,r,s,a={title:"0",foregroundColor:"white",backgroundColor:"#a272f9"},e={title:"",foregroundColor:"white",backgroundColor:"#5bae61"},o=Kefir.stream(function(e){return t=e,function(){}});if(this.objThreads[key].rowView.addLabel(o),this.objThreads[key].emitter=t,i[key]?(this.objThreads[key].opens=i[key].opens,this.objThreads[key].links=i[key].links,a.title=(showSimpleLabels?"":"Opens: ")+i[key].opens,0<i[key].links&&(e.title=(showSimpleLabels?"":"Clicks: ")+i[key].links,o=Kefir.stream(function(e){return r=e,function(){}}),this.objThreads[key].rowView.addLabel(o),this.objThreads[key].emitterClick=r),0<i[key].links&&isUsingGmailMaterialUI&&this.objThreads[key].emitterClick.emit(e),0!=i[key].opens||showSimpleLabels?(this.objThreads[key].emitter.emit(a),0<i[key].links&&!isUsingGmailMaterialUI&&this.objThreads[key].emitterClick.emit(e)):this.objThreads[key].emitter.emit({title:"Unopened",foregroundColor:"#a272f9",backgroundColor:"white"})):hideNotTrackedLabel||this.objThreads[key].emitter.emit({title:"Not tracked",foregroundColor:"#a272f9",backgroundColor:"#e7e8e9"}),this.objThreads[key].buttonAdded=!0,i[key]&&i[key].reminder){this.objThreads[key].reminder={},this.objThreads[key].reminder.remindCondition=i[key].reminder.remindCondition,this.objThreads[key].reminder.remindTime=i[key].reminder.remindTime;let e="Message will be returned to your inbox ";"open"===i[key].reminder.remindCondition?e+="if it's not read at ":"click"===i[key].reminder.remindCondition?e+="if it gets no link clicks at ":"reply"===i[key].reminder.remindCondition?e+="if it does not receive a response at ":e+=" at ",e+=new Date(+i[key].reminder.remindTime).toLocaleDateString([],{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"});a={imageUrl:chrome.runtime.getURL("img/reminder_on.png"),tooltip:e};this.objThreads[key].rowView.addImage(a),this.objThreads[key].reminderImage=!0}function n(e){var i=e.threadRowView.getSubject();e.threadRowView.getThreadIDAsync().then(e=>{inboxLists.showReminderPopup(e,i)})}!i[key]||i[key].opens||i[key].links||(e={title:"Set a reminder if your message is not read, receives no link clicks, or gets no replies",iconUrl:chrome.runtime.getURL("/img/reminder_on.png"),iconClass:"snv_imgDescr",onClick:n},this.objThreads[key].emitterReminder||(o=Kefir.stream(function(e){return s=e,function(){}}),this.objThreads[key].rowView.addButton(o),this.objThreads[key].emitterReminder=s),this.objThreads[key].emitterReminder.emit(e))}this.needUpdateStat=!1,this.objThreads_copy=this.objThreads,this.objThreads={}},showReminderPopup:(i,e)=>{var t=`
        <div style="padding: 30px 5px;" id="snv_popup">
            <div id="snvTitleReminder"></div>
            <div class="container">
                <label class="box box_1">
                    <input type="checkbox" id="snvActivateReminder" class="checkbox checkbox_1">
                    <img src="${chrome.runtime.getURL("img/chek_normal.png")}" class="img_chek img_chek_normal">
                    <img src="${chrome.runtime.getURL("img/chek_active.png")}" class="img_chek img_chek_active">
                    <div class="text">Remind me</div>
                </label>
                <div class="box box_2">
                    <input type="checkbox" name="chek_2" class="checkbox checkbox_2 checkbox_js" id="input_2">
                    <label class="box_inner" for="input_2">
                        <div class="text" id="box_2">2 days</div>
                        <img src="${chrome.runtime.getURL("img/arrow.png")}">
                    </label>
                    <ul class="list list_2">
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="3600" class="checkbox" value="1 hour">
                                <img class="img_mark">
                                <div>1 hour</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="43200" class="checkbox" value="12 hours">
                                <img class="img_mark">
                                <div>12 hours</div>
                            </label>
                        </li>
                        <li class="list_item">                                    
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="86400" class="checkbox" value="1 day">
                                <img class="img_mark">
                                <div>1 day</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="172800" class="checkbox" value="2 days">
                                <img class="img_mark">
                                <div>2 days</div>
                            </label>
                        </li>
                        <li class="list_item">                                    
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="432000" class="checkbox" value="5 days">
                                <img class="img_mark">
                                <div>5 days</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="604800" class="checkbox" value="1 week">
                                <img class="img_mark">
                                <div>1 week</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_1" remindTime="1209600" class="checkbox" value="2 weeks"> 
                                <img class="img_mark">
                                <div>2 weeks</div>
                            </label>
                        </li>
                        <li class="list_item">                                   
                            <label class="label label_padding">
                                <input type='text' class="datepicker-here checkbox">
                                <img src="${chrome.runtime.getURL("img/date.png")}">
                                <div>Set date & time</div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="box box_3">
                    <input type="checkbox" name="chek_3" class="checkbox checkbox_3 checkbox_js" id="input_3">
                    <label class="label_3" for="input_3">
                        <div class="text" id="box_3">Not opened</div>
                        <img src="${chrome.runtime.getURL("img/arrow.png")}">
                    </label>
                    <ul class="list list_3">
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_2" remindCondition="open" class="checkbox" value="Not opened">
                                <img class="img_mark">
                                <div>Not opened</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_2" remindCondition="click" class="checkbox" value="No clicks">
                                <img class="img_mark">
                                <div>No clicks</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_2" remindCondition="reply" class="checkbox" value="No reply">
                                <img class="img_mark">
                                <div>No reply</div>
                            </label>
                        </li>
                        <li class="list_item">
                            <label class="label">
                                <input type="radio" name="radio_2" remindCondition="none" class="checkbox" value="In any case">
                                <img class="img_mark">
                                <div>In any case</div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="snv_container_save" id="snvSaveReminder" href="#">Save</a>
            <a class="snv_container_save" id="snvCancelReminder" href="#">Cancel</a>
        </div>`,r=!1,s=!1,a=172800,o="open",n=void 0;this.objThreads_copy[i]&&this.objThreads_copy[i].reminder&&(s=!0,o=this.objThreads_copy[i].reminder.remindCondition,a=void 0,n=new Date(this.objThreads_copy[i].reminder.remindTime)),$("body").append('<div class="snv-overlay"></div>'),$("body").append(t),$snv_popup_reminder=$("#snv_popup"),$("#snv_popup").css({position:"fixed",left:$(window).width()/2-$snv_popup_reminder.width()/2,top:$(window).height()/2-$snv_popup_reminder.height()/2-100,"z-index":1e3}),$("#snvTitleReminder").html("Set reminder for <b>"+e+"</b>"),$snv_popup_reminder.find("#snvCancelReminder").click(e=>{e.preventDefault(),$(".snv-overlay").remove(),$snv_popup_reminder.remove()}),$snv_popup_reminder.find("#snvSaveReminder").click(e=>{e.preventDefault(),(s=$snv_popup_reminder.find("#snvActivateReminder").prop("checked"))?((e={}).threadId=i,e.remindTime=!a&&n?Math.round((+n-+Date.now())/1e3):a,e.remindCondition=o,chrome.runtime.sendMessage({type:"setOldReminder",mailObj:e},e=>{PortEvents.postMessage({type:"getStatistics",list:[i],force:!0}),$(".snv-overlay").remove(),$snv_popup_reminder.remove()})):$(".box_1").css("color","red")}),$snv_popup_reminder.find("#snvActivateReminder").prop("checked",s),a&&0<$snv_popup_reminder.find("[remindTime="+a+"]").length?$snv_popup_reminder.find("[remindTime="+a+"]").prop("checked",!0):n&&(t={year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},$snv_popup_reminder.find("#box_2").html(n.toLocaleDateString([],t))),$snv_popup_reminder.find("[remindCondition="+o+"]").prop("checked",!0),$snv_popup_reminder.find("#box_3").html($snv_popup_reminder.find("[remindCondition="+o+"]").val()),$snv_popup_reminder.find("#snvActivateReminder").change(e=>{r||(r=!0,e.currentTarget.checked?chrome.runtime.sendMessage({type:"checkToken",emailAccount:userEmail},e=>{e&&e.success&&"undefined"!==e.data.token_isset?(s=e.data.token_isset,$snv_popup_reminder.find("#snvActivateReminder").prop("checked",s),e.data.token_isset||PortEvents.postMessage({type:"gmailOauth",userEmail:inboxAccount.userEmail})):(s=!1,$snv_popup_reminder.find("#snvActivateReminder").prop("checked",s),r=!1)}):(s=!1,$snv_popup_reminder.find("#snvActivateReminder").prop("checked",s),r=!1))}),$(".container").click(e=>{e=$(e.target);e.is("input[type=radio]")?(e.closest(".box").find(".text").html(e.val()),e.closest(".box").find(".checkbox_js").prop("checked",!1),$(".container").find('[name="'+e.prop("name")+'"]').each(function(){$(this).prop("checked",!1)}),e.prop("checked",!0),"radio_1"===e.prop("name")&&(a=e.attr("remindTime"),n=void 0),"radio_2"===e.prop("name")&&(o=e.attr("remindCondition"))):($(".container").find(".checkbox_js").each(function(){$(this).prop("checked",!1)}),e.closest(".box").find(".checkbox_js").prop("checked",!0))}),$("#snv_popup").click(e=>{$(e.target).is("#snv_popup")&&$(".container").find(".checkbox_js").each(function(){$(this).prop("checked",!1)})}),$(".datepicker-here").datepicker({language:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",dateFormat:"mm/dd/yy",timeFormat:"hh:ii aa",firstDay:0},minDate:new Date(+Date.now()),maxDate:new Date(+Date.now()+7776e6),timepicker:!0,autoClose:!1,position:"top left",onShow:e=>{n?(e.date=n,e.selectDate(n)):(e.date=new Date(+Date.now()+864e5),e.selectDate(e.date))},onSelect:(e,i,t)=>{i&&($("#box_2").html(i.toLocaleDateString([],{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),$(".container").find('[name="radio_1"]').each(function(){$(this).prop("checked",!1)}),a=void 0,n=i)}})},getStat:e=>{this.objThreads={},this.needUpdateStat=!1,this.objDrafts={},e.Lists.registerThreadRowViewHandler(i=>{wasAtLettersListPage=!0,0<i.getVisibleDraftCount()?i.getDraftID().then(e=>{this.objDrafts[e]&&!this.objDrafts[e].rowView.destroyed||(this.objDrafts[e]||(this.objDrafts[e]={}),this.objDrafts[e].rowView=i,this.objDrafts[e].rowView.destroyed&&(this.objDrafts[e].buttonAdded=!1)),this.needUpdateStat||(this.needUpdateStat=!0,setTimeout(()=>{var e,i=[];for(e in this.objDrafts)this.objDrafts[e].rowView.destroyed||i.push(e);var r=this;chrome.runtime.sendMessage({type:"getSendLatersTime",draftIds:i},e=>{if(e.success&&e.data){for(var i in e.data){var t;e.data[i].sendTime&&(r.objDrafts[i].sendTime=e.data[i].sendTime,t=(t="This message is scheduled to be sent at ")+new Date(+r.objDrafts[i].sendTime).toLocaleDateString([],{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),t={imageUrl:chrome.runtime.getURL("img/sendLater_on.png"),tooltip:t},r.objDrafts[i].rowView.addImage(t),r.objDrafts[i].rowView.replaceDraftLabel({text:"Draft for Send later"}))}r.needUpdateStat=!1,r.objDrafts={}}})},100))}):i.getThreadIDAsync().then(e=>{this.objThreads[e]&&!this.objThreads[e].rowView.destroyed||(this.objThreads[e]||(this.objThreads[e]={},this.objThreads[e].emitter&&this.objThreads[e].emitterr.emit(null)),this.objThreads[e].rowView=i,this.objThreads[e].rowView.destroyed&&(this.objThreads[e].buttonAdded=!1)),this.needUpdateStat||(this.needUpdateStat=!0,setTimeout(()=>{var e,i=0,t=100;for(e in this.objThreads)this.objThreads[e].rowView.destroyed||i++;1==i&&(t=1e3),setTimeout(()=>{var e,i=[];for(e in this.objThreads)this.objThreads[e].rowView.destroyed||i.push(e);PortEvents.postMessage({type:"getStatistics",list:i})},t)},200))}).catch(e=>{})})}};