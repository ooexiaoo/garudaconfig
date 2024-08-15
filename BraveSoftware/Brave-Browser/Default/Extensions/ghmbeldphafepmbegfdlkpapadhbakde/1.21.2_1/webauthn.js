(()=>{var e={55880:function(e,t,n){var o,r;void 0!==(r="function"==typeof(o=function(){"use strict";var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"],r={},i=null;function a(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(){for(var n=this.getLevel(),r=0;r<o.length;r++){var i=o[r];this[i]=r<n?e:this.methodFactory(i,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return"No console available for logging"}function c(e){return function(){typeof console!==t&&(l.call(this),this[e].apply(this,arguments))}}function E(o,r,i){var l;return"debug"===(l=o)&&(l="log"),typeof console!==t&&("trace"===l&&n?s:void 0!==console[l]?a(console,l):void 0!==console.log?a(console,"log"):e)||c.apply(this,arguments)}function T(e,n){var a,s,c,T=this,d="loglevel";function A(){var e;if(typeof window!==t&&d){try{e=window.localStorage[d]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,o=encodeURIComponent(d),r=n.indexOf(o+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r+o.length+1))[1])}catch(e){}return void 0===T.levels[e]&&(e=void 0),e}}function u(e){var t=e;if("string"==typeof t&&void 0!==T.levels[t.toUpperCase()]&&(t=T.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=T.levels.SILENT)return t;throw TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?d+=":"+e:"symbol"==typeof e&&(d=void 0),T.name=e,T.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},T.methodFactory=n||E,T.getLevel=function(){return null!=c?c:null!=s?s:a},T.setLevel=function(e,n){return c=u(e),!1!==n&&function(e){var n=(o[e]||"silent").toUpperCase();if(typeof window!==t&&d){try{window.localStorage[d]=n;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+n+";"}catch(e){}}}(c),l.call(T)},T.setDefaultLevel=function(e){s=u(e),A()||T.setLevel(e,!1)},T.resetLevel=function(){c=null,function(){if(typeof window!==t&&d){try{window.localStorage.removeItem(d)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),l.call(T)},T.enableAll=function(e){T.setLevel(T.levels.TRACE,e)},T.disableAll=function(e){T.setLevel(T.levels.SILENT,e)},T.rebuild=function(){if(i!==T&&(a=u(i.getLevel())),l.call(T),i===T)for(var e in r)r[e].rebuild()},a=u(i?i.getLevel():"WARN");var _=A();null!=_&&(c=u(_)),l.call(T)}(i=new T).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=r[e];return t||(t=r[e]=new T(e,i.methodFactory)),t};var d=typeof window!==t?window.log:void 0;return i.noConflict=function(){return typeof window!==t&&window.log===i&&(window.log=d),i},i.getLoggers=function(){return r},i.default=i,i})?o.call(t,n,t,e):o)&&(e.exports=r)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";let e=e=>"object"==typeof e&&!Array.isArray(e)&&null!==e,t=e=>t=>void 0!==t?e(t):void 0,o=t(e=>unescape(encodeURIComponent(e))),r=t(e=>decodeURIComponent(escape(e))),i=t(e=>btoa(e).trim()),a=t(e=>atob(e.trim()));t(e=>i(o(e))),t(e=>r(a(e)));let s=e=>{let t=[],n=e.length;for(let o=0;o<n;o+=16384)t.push(String.fromCharCode.apply(String,e.subarray(o,o+16384<n?o+16384:n)));return t.join("")},l=e=>i(s(e)),c=(e,t)=>Object.fromEntries(Object.entries(e).map(([e,n])=>[e,t(e,n)])),E=e=>e instanceof ArrayBuffer||"undefined"!=typeof window&&e instanceof window.ArrayBuffer,T=e=>e instanceof Uint8Array||"undefined"!=typeof window&&e instanceof window.Uint8Array,d="undefined"!=typeof window?window.Uint8Array:Uint8Array,A=t=>E(t)?l(new d(t)):T(t)?l(t):Array.isArray(t)?t.map(A):e(t)?c(t,(e,t)=>A(t)):t,u=({response:e})=>Object.setPrototypeOf({attestationObject:new d(e.attestation_object).buffer,clientDataJSON:new d(e.client_data_json).buffer,getAuthenticatorData:()=>new d(e.authenticator_data).buffer,getPublicKey:()=>e.public_key?new d(e.public_key).buffer:null,getPublicKeyAlgorithm:()=>e.public_key_algorithm,getTransports:()=>e?.transports??[]},AuthenticatorAttestationResponse.prototype),_=e=>Object.setPrototypeOf({clientDataJSON:new d(e.response.client_data_json).buffer,authenticatorData:new d(e.response.authenticator_data).buffer,signature:new d(e.response.signature).buffer,userHandle:e.response.user_handle?new d(e.response.user_handle).buffer:null},AuthenticatorAssertionResponse.prototype),O=(e,t,n)=>Object.setPrototypeOf({authenticatorAttachment:e.authenticator_attachment,id:e.id,rawId:new d(e.raw_id).buffer,response:t,type:e.type,getClientExtensionResults:()=>n(e.client_extension_results??{})},PublicKeyCredential.prototype),S=function(e){return e.ACCOUNT_EXTENSION="auth-ext",e.ACCOUNT_FORK="fork",e.ACCOUNT_ONBOARDING="pass-onboarding",e.ACCOUNT_PROBE="pass-installed",e.ALIAS_CREATE="ALIAS_CREATE",e.ALIAS_OPTIONS="ALIAS_OPTIONS",e.AUTH_CHECK="AUTH_CHECK",e.AUTH_CONFIRM_PASSWORD="AUTH_CONFIRM_PASSWORD",e.AUTH_INIT="AUTH_INIT",e.AUTH_UNLOCK="AUTH_UNLOCK",e.AUTOFILL_IDENTITY="AUTOFILL_IDENTITY",e.AUTOFILL_IDENTITY_QUERY="AUTOFILL_IDENTITY_QUERY",e.AUTOFILL_LOGIN="AUTOFILL_LOGIN",e.AUTOFILL_LOGIN_QUERY="AUTOFILL_LOGIN_QUERY",e.AUTOFILL_OTP_CHECK="AUTOFILL_OTP_CHECK",e.AUTOFILL_SYNC="AUTOFILL_SYNC",e.AUTOSAVE_REQUEST="AUTOSAVE_REQUEST",e.AUTOSUGGEST_PASSWORD="AUTOSUGGEST_PASSWORD",e.B2B_EVENT="B2B_EVENT",e.DEBUG="DEBUG",e.EXPORT_REQUEST="EXPORT_REQUEST",e.FEATURE_FLAGS_UPDATE="FEATURE_FLAGS_UPDATE",e.FETCH_ABORT="FETCH_ABORT",e.FETCH_DOMAINIMAGE="FETCH_DOMAINIMAGE",e.FORM_ENTRY_COMMIT="FORM_ENTRY_COMMIT",e.FORM_ENTRY_REQUEST="FORM_ENTRY_REQUEST",e.FORM_ENTRY_STAGE="FORM_ENTRY_STAGE",e.FORM_ENTRY_STASH="FORM_ENTRY_STASH",e.FORM_STATUS="FORM_STATUS",e.IMPORT_DECRYPT="IMPORT_DECRYPT",e.LOAD_CONTENT_SCRIPT="LOAD_CONTENT_SCRIPT",e.LOCALE_REQUEST="LOCALE_REQUEST",e.LOCALE_UPDATED="LOCALE_UPDATED",e.LOG_EVENT="LOG_EVENT",e.LOG_REQUEST="LOG_REQUEST",e.MONITOR_2FAS="MONITOR_2FAS",e.MONITOR_WEAK_PASSWORDS="MONITOR_WEAK_PASSWORDS",e.NOTIFICATION="NOTIFICATION",e.ONBOARDING_ACK="ONBOARDING_ACK",e.ONBOARDING_CHECK="ONBOARDING_CHECK",e.ONBOARDING_REQUEST="ONBOARDING_REQUEST",e.OTP_CODE_GENERATE="OTP_CODE_GENERATE",e.PASS_CORE_RPC="PASS_CORE_RPC",e.PASSKEY_CREATE="PASSKEY_CREATE",e.PASSKEY_GET="PASSKEY_GET",e.PASSKEY_INTERCEPT="PASSKEY_INTERCEPT",e.PASSKEY_QUERY="PASSKEY_QUERY",e.PAUSE_WEBSITE="PAUSE_WEBSITE",e.PERMISSIONS_UPDATE="PERMISSIONS_UPDATE",e.PING="PING",e.POPUP_INIT="POPUP_INIT",e.PORT_FORWARDING_MESSAGE="PORT_FORWARDING",e.PORT_UNAUTHORIZED="PORT_UNAUTHORIZED",e.REGISTER_ELEMENTS="REGISTER_ELEMENTS",e.RESOLVE_EXTENSION_KEY="RESOLVE_EXTENSION_KEY",e.RESOLVE_TAB="RESOLVE_TAB",e.RESOLVE_USER="RESOLVE_USER",e.SENTRY_CS_EVENT="SENTRY_CS_EVENT",e.SETTINGS_UPDATE="SETTINGS_UPDATE",e.START_CONTENT_SCRIPT="START_CONTENT_SCRIPT",e.STORE_DISPATCH="STORE_DISPATCH",e.TELEMETRY_EVENT="TELEMETRY_EVENT",e.UNLOAD_CONTENT_SCRIPT="UNLOAD_CONTENT_SCRIPT",e.UPDATE_AVAILABLE="UPDATE_AVAILABLE",e.WORKER_RELOAD="WORKER_RELOAD",e.WORKER_STATUS="WORKER_STATUS",e.WORKER_WAKEUP="WORKER_WAKEUP",e}({});var R=n(55880),p=n.n(R);p().setLevel("INFO",!1);let f=p();function y(){}let w=()=>{let e=[],t=e=>e?.cancel?.();return{addListener:(t,n,o,r)=>{if(void 0!==t){let i={kind:"listener",element:t,type:n,fn:o};return e.push(i),t.addEventListener(n,o,r),()=>{t.removeEventListener(n,o);let r=e.indexOf(i);e.splice(r,1)}}return y},addObserver:(n,o,r)=>{let i=new MutationObserver(o),a=i.disconnect;return i.disconnect=()=>{t(o),a.bind(i)()},e.push({kind:"observer",observer:i}),i.observe(n,r),i},addResizeObserver:(n,o)=>{let r=new ResizeObserver(o),i=r.disconnect;r.disconnect=()=>{t(o),i.bind(r)()},e.push({kind:"resizeObserver",observer:r}),r.observe(n)},removeAll:()=>{e.forEach(e=>{switch(e.kind){case"observer":case"resizeObserver":return e.observer.disconnect();case"listener":return t(e.fn),e.element.removeEventListener(e.type,e.fn)}}),e.length=0}}},N=()=>new Promise(e=>{let t=w(),n=()=>{("complete"===document.readyState||"interactive"===document.readyState)&&(t.removeAll(),e())};t.addListener(window,"load",()=>{t.removeAll(),e()}),t.addListener(document,"readystatechange",n),n()}),I=()=>{let e=y,t=y,n=new Promise((n,o)=>{e=n,t=o});return n.resolve=e,n.reject=t,n},g=e=>{let t=Error(e.message);return t.name=e.name??t.name,t},v=e=>{throw g(e)},U=(e=8)=>Array.from(crypto.getRandomValues(new Uint8Array(e))).map(e=>e.toString(16)).join("").slice(0,e),L=e=>new Promise(t=>setTimeout(t,e)),P="Pass::MainWorld::Abort";S.PASSKEY_CREATE,S.PASSKEY_GET,S.PASSKEY_INTERCEPT;let C=e=>({token:e,type:P}),b=e=>t=>n=>"object"==typeof n&&n?.token===t&&n?.type===e,m=b(P),h=b("Pass::MainWorld::Disconnect"),D=b("Pass::MainWorld::Response"),F=()=>L(1500).then(()=>v({name:"BridgeTimeout"})),M=()=>{let e={connected:!0,ready:I()},t=n=>{n.data?.type==="PassClientScriptReady"&&(e.ready.resolve(),window.removeEventListener("message",t))};return{init:()=>{window.addEventListener("message",t),N().catch(()=>{e.connected=!1,v({name:"BridgeDisconnected"})}).then(()=>Promise.race([e.ready,F()])).catch(e.ready.reject)},getState:()=>e,sendMessage:async(t,n)=>{let o=U(16),r=I(),i=()=>window.postMessage(C(o));n?.signal?.addEventListener("abort",i);let a=n?.timeout?setTimeout(i,n.timeout):void 0,s=({data:t})=>{D(o)(t)&&r.resolve(t.response),m(o)(t)&&r.reject(g({name:"BridgeAbort"})),h()(t)&&(e.connected=!1,r.reject(g({name:"BridgeDisconnected"})))};try{return await (e.connected?e.ready:v({name:"BridgeDisconnected"})),window.postMessage({request:t,token:o,type:"Pass::MainWorld::Message"}),window.addEventListener("message",s),await r}catch(e){return{type:"error",...e instanceof Error?{error:e.name,message:e.message}:{error:"UnknownError"}}}finally{window.removeEventListener("message",s),n?.signal?.removeEventListener("abort",i),clearTimeout(a)}}}},K=(e,t,n)=>globalThis.exportFunction?.(e,t,n)??(t[n.defineAs]=e),G=e=>globalThis.cloneInto?.(e,window,{cloneFunctions:!0,wrapReflectors:!0})??e,Y=e=>new window.Promise(e);(()=>{let e=window.wrappedJSObject??window,t=e.navigator.credentials,n=e.PublicKeyCredential;if(!("function"==typeof t?.get&&"function"==typeof t?.create))return;let o=t.create.bind(navigator.credentials),r=t.get.bind(navigator.credentials),i=n?.isConditionalMediationAvailable?.bind(n),a=n?.isUserVerifyingPlatformAuthenticatorAvailable?.bind(n),s=window.DOMException,l=M();l.init();let c=({data:e,onFallback:t,onReject:n})=>{switch(e.error){case"BridgeTimeout":case"BridgeDisconnected":return t();case"BridgeAbort":return n(new s("The operation either timed out or was not allowed.","NotAllowedError"));default:return n(new s(`Something went wrong: ${e.payload}`,"NotAllowedError"))}},E=async()=>!!l.getState().connected&&l.sendMessage({type:S.PASSKEY_INTERCEPT},{}).then(e=>"success"===e.type&&e.intercept).catch(()=>!1);K(e=>Y(async(t,n)=>{if(!e?.publicKey||!l.getState().connected)return t(r(e));let o=await l.sendMessage({type:S.PASSKEY_GET,payload:{request:JSON.stringify(A(e.publicKey)),domain:location.hostname}},{timeout:e.publicKey.timeout});if("error"===o.type)return c({data:o,onReject:n,onFallback:()=>t(r(e))});if(!o.intercept)return f.debug("[WebAuthn] Intercept cancelled for `get`"),t(r(e));let i=_(o.response.credential);t(G(O(o.response.credential,i,G)))}),t,{defineAs:"get"}),K(e=>Y(async(t,n)=>{if(!e?.publicKey||!l.getState().connected)return t(o(e));let r=await l.sendMessage({type:S.PASSKEY_CREATE,payload:{request:JSON.stringify(A(e.publicKey)),domain:location.hostname}},{timeout:e.publicKey.timeout});if("error"===r.type)return c({data:r,onReject:n,onFallback:()=>t(o(e))});if(!r.intercept)return f.debug("[WebAuthn] Intercept cancelled for `create`"),t(o(e));let i=u(r.response.credential);return t(G(O(r.response.credential,i,G)))}),t,{defineAs:"create"}),n&&(K(()=>Y(async e=>{e(!!(await E()||await i?.()))}),n,{defineAs:"isConditionalMediationAvailable"}),K(()=>Y(async e=>{e(!!(await E()||await a?.()))}),n,{defineAs:"isUserVerifyingPlatformAuthenticatorAvailable"}))})()})()})();
