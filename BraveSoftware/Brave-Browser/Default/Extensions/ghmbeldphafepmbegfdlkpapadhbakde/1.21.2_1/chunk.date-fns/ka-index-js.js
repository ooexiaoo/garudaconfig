(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/ka-index-js"],{2252:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},1478:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=null!=a&&a.width?String(a.width):u;n=t.formattingValues[r]||t.formattingValues[u]}else{var i=t.defaultWidth,o=null!=a&&a.width?String(a.width):t.defaultWidth;n=t.values[o]||t.values[i]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},64906:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=n.width,r=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o=i[0],d=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(d,function(t){return t.test(o)}):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(d,function(t){return t.test(o)});return a=t.valueCallback?t.valueCallback(l):l,{value:a=n.valueCallback?n.valueCallback(a):a,rest:e.slice(o.length)}}},t.exports=e.default},46532:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var u=n[0],r=e.match(t.parsePattern);if(!r)return null;var i=t.valueCallback?t.valueCallback(r[0]):r[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:e.slice(u.length)}}},t.exports=e.default},71104:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lessThanXSeconds:{past:"{{count}} წამზე ნაკლები ხნის წინ",present:"{{count}} წამზე ნაკლები",future:"{{count}} წამზე ნაკლებში"},xSeconds:{past:"{{count}} წამის წინ",present:"{{count}} წამი",future:"{{count}} წამში"},halfAMinute:{past:"ნახევარი წუთის წინ",present:"ნახევარი წუთი",future:"ნახევარი წუთში"},lessThanXMinutes:{past:"{{count}} წუთზე ნაკლები ხნის წინ",present:"{{count}} წუთზე ნაკლები",future:"{{count}} წუთზე ნაკლებში"},xMinutes:{past:"{{count}} წუთის წინ",present:"{{count}} წუთი",future:"{{count}} წუთში"},aboutXHours:{past:"დაახლოებით {{count}} საათის წინ",present:"დაახლოებით {{count}} საათი",future:"დაახლოებით {{count}} საათში"},xHours:{past:"{{count}} საათის წინ",present:"{{count}} საათი",future:"{{count}} საათში"},xDays:{past:"{{count}} დღის წინ",present:"{{count}} დღე",future:"{{count}} დღეში"},aboutXWeeks:{past:"დაახლოებით {{count}} კვირას წინ",present:"დაახლოებით {{count}} კვირა",future:"დაახლოებით {{count}} კვირაში"},xWeeks:{past:"{{count}} კვირას კვირა",present:"{{count}} კვირა",future:"{{count}} კვირაში"},aboutXMonths:{past:"დაახლოებით {{count}} თვის წინ",present:"დაახლოებით {{count}} თვე",future:"დაახლოებით {{count}} თვეში"},xMonths:{past:"{{count}} თვის წინ",present:"{{count}} თვე",future:"{{count}} თვეში"},aboutXYears:{past:"დაახლოებით {{count}} წლის წინ",present:"დაახლოებით {{count}} წელი",future:"დაახლოებით {{count}} წელში"},xYears:{past:"{{count}} წლის წინ",present:"{{count}} წელი",future:"{{count}} წელში"},overXYears:{past:"{{count}} წელზე მეტი ხნის წინ",present:"{{count}} წელზე მეტი",future:"{{count}} წელზე მეტი ხნის შემდეგ"},almostXYears:{past:"თითქმის {{count}} წლის წინ",present:"თითქმის {{count}} წელი",future:"თითქმის {{count}} წელში"}};e.default=function(t,e,n){var u=a[t];return"string"==typeof u?u:null!=n&&n.addSuffix&&n.comparison&&n.comparison>0?u.future.replace("{{count}}",String(e)):null!=n&&n.addSuffix?u.past.replace("{{count}}",String(e)):u.present.replace("{{count}}",String(e))},t.exports=e.default},27153:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(2252)),r={date:(0,u.default)({formats:{full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} {{time}}'-ზე'",long:"{{date}} {{time}}'-ზე'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},66619:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={lastWeek:"'წინა' eeee p'-ზე'",yesterday:"'გუშინ' p'-ზე'",today:"'დღეს' p'-ზე'",tomorrow:"'ხვალ' p'-ზე'",nextWeek:"'შემდეგი' eeee p'-ზე'",other:"P"};e.default=function(t,e,n,u){return a[t]},t.exports=e.default},41459:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(1478)),r={ordinalNumber:function(t){var e=Number(t);return 1===e?e+"-ლი":e+"-ე"},era:(0,u.default)({values:{narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,u.default)({values:{narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},13821:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(64906)),r={ordinalNumber:(0,n(a(46532)).default)({matchPattern:/^(\d+)(-ლი|-ე)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,u.default)({matchPatterns:{narrow:/^(ჩვ?\.წ)/i,abbreviated:/^(ჩვ?\.წ)/i,wide:/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,/^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]},defaultParseWidth:"any"}),quarter:(0,u.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-(ლი|ე)? კვ/i,wide:/^[1234]-(ლი|ე)? კვარტალი/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,u.default)({matchPatterns:{any:/^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i},defaultMatchWidth:"any",parsePatterns:{any:[/^ია/i,/^თ/i,/^მარ/i,/^აპ/i,/^მაი/i,/^ი?ვნ/i,/^ი?ვლ/i,/^აგ/i,/^ს/i,/^ო/i,/^ნ/i,/^დ/i]},defaultParseWidth:"any"}),day:(0,u.default)({matchPatterns:{narrow:/^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,short:/^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,wide:/^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^კვ/i,/^ორ/i,/^სა/i,/^ოთ/i,/^ხუ/i,/^პა/i,/^შა/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.default)({matchPatterns:{any:/^([ap]\.?\s?m\.?|შუაღ|დილ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^შუაღ/i,noon:/^შუადღ/i,morning:/^დილ/i,afternoon:/ნაშუადღევს/i,evening:/საღამო/i,night:/ღამ/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default},20666:(t,e,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(71104)),r=n(a(27153)),i=n(a(66619)),o=n(a(41459)),d=n(a(13821)),l={code:"ka",formatDistance:u.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},4293:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
