"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[10241],{3239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r="noLoginAlert_boZc",i=a(73727),l=a(71217),s=a(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return M},Z:function(){return L}});var n=a(67294),r=a(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=a(86010),s=a(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],a=""+t.replace(o,"")}return n.createElement("option",{value:t,className:r},a)},m=a(92814),u=a(51436),d=a(68949),p=a(72389),f=a(21314),k=a(74322),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,a,r,s=(0,p.Z)(),o=n.useState("unchecked"),g=o[0],N=o[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};N(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,d.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),n.useEffect((function(){v.loaded&&y(v.value)}),[v,s]),s?v.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(a=v.legacyData)?void 0:a.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(i[g],i.checkButton)},n.createElement(m.G,{icon:(r=g,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(k.Z,null):n.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,a=(0,f.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(k.Z,null)})),w=a(87462),x=a(75552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(x.Z,(0,w.Z)({model:t},e))):n.createElement(k.Z,null)})),S=a(3239),z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},C=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return z("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return z("use_current",t)}},"Nein (verwerfen)"))):null})),_=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=a(46858),Z=a(78982),A=a(97762),M=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,Z.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},L=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),a=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||A.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,P(e)),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(S.Z,null),a.loggedIn&&n.createElement(C,e),a.loggedIn&&n.createElement(_,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(y,e)):n.createElement(k.Z,null):n.createElement("div",null,"SSR")}))},81788:function(e,t,a){var n=a(67294),r=a(86010);t.Z=function(){var e=n.useState(0),t=e[0],a=e[1];return n.useEffect((function(){if(!(t<=0)){for(var e=Math.floor(100*Math.random()),a=-1,n=1;n<11;n++){var r=prompt(n+"/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.");if(null===r)break;if(a=Number.parseInt(r,10),Number.isNaN(a)&&(a=-1),a===e){alert("Yay, du hast die Zahl "+e+" in "+n+" Versuchen gefunden!");break}a<e?alert("Die eingegebene Zahl "+a+" ist zu klein"):alert("Die eingegebene Zahl "+a+" ist zu gross")}a!==e&&alert(":( du hast verloren, die gesuchte Zahl war "+e)}}),[t]),n.createElement("button",{className:(0,r.default)("button","button--success"),onClick:function(){return a(t+1)}},"Ratespiel Starten")}},74322:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(86010),i="loader_2rVr",l="badge_2s0E",s=a(71217),o=a(92814),c=a(51436),m=(0,s.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(o.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",s="disableToolbar_gntN",o=a(86010),c=a(71217),m=a(74322),u=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},f=(0,c.Pi)((function(e){var t=n.useState(!1),c=t[0],f=t[1],k=n.useState(!1),g=k[0],h=k[1],N=n.useRef(null),v=e.model,b=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(82930),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){u=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}a.register("modules/imageCompress",n),e()}))}((function(){t&&(h(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),e.toolbar),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&g&&v.loaded?n.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(r)},n.createElement(u,{ref:N,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:v.text||"",onChange:function(t,a,n,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):d,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(m.Z,null)}))},30592:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r={strukto:"strukto_1th3",statement:"statement_3Yu0",step:"step_3o_T",else:"else_1IU6",header:"header_3S1J",indent:"indent_UuZp",body:"body_1WvU",def:"def_2zKB",if:"if_17Bx",input:"input_1oi9",call:"call_3HIl",bordered:"bordered_3Exi"},i=a(86010),l=function(e){return n.createElement("div",{className:r.step},e.code)},s=function(e){return n.createElement("div",{className:(0,i.default)(r.call,r.step,r.bordered)},e.code)},o=function(e){return n.createElement("div",{className:(0,i.default)(r.step,r.statement)},e.code)},c=function(e){return n.createElement("div",{className:(0,i.default)(r.repeat,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(f,{program:e.block})))},m=function(e){return n.createElement("div",{className:(0,i.default)(r.def,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(f,{program:e.block})))},u=function(e){return n.createElement("div",{className:(0,i.default)(r.input,r.step)},e.code)},d=function(e){return n.createElement("div",{className:(0,i.default)(r.if,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(f,{program:e.block})))},p=function(e){return n.createElement("div",{className:(0,i.default)(r.else,r.step)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(f,{program:e.block})))},f=function(e){return n.createElement("div",{className:r.strukto},e.program.map((function(e,t){switch(e.type){case"call":return n.createElement(s,{key:t,code:e.code});case"def":return n.createElement(m,{key:t,code:e.code,block:e.block});case"repeat":return n.createElement(c,{key:t,code:e.code,block:e.block});case"step":return n.createElement(l,{key:t,code:e.code});case"statement":return n.createElement(o,{key:t,code:e.code});case"input":return n.createElement(u,{key:t,code:e.code});case"if":return n.createElement(d,{key:t,code:e.code,block:e.block});case"elif":case"else":return n.createElement(p,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},k=f},21314:function(e,t,a){a.d(t,{oR:function(){return l},ky:function(){return s},RN:function(){return o},aV:function(){return c}});var n=a(68949),r=a(67294),i=a(47678),l=function(e){return r.useContext(i.Nx)[e]},s=function(e,t,a,l,s,o){var c=r.useState(!1),m=c[0],u=c[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,a,l,s,o).finally((function(){u(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.userStore.currentView}),(function(n){m&&n&&i.Ux.documentStore.provideDocument(e(),t,a,l,s,o,!0)}))}),[m]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(n){m&&!n&&i.Ux.documentStore.provideDocument(e(),t,a,l,s,o,!0)}))}),[m])},o=function(e){var t=r.useState(!1),a=t[0],l=t[1];r.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.userStore.currentView}),(function(t,n){a&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,n){a&&!t&&n&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a])},c=function(e){var t=r.useState(!1),a=t[0],l=t[1];r.useEffect((function(){i.Ux.policyStore.provideAuthorization(e,!1).finally((function(){l(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.userStore.currentView}),(function(t,n){a&&t&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[a]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,n){a&&!t&&n&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[a])}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return i}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return i},cl:function(){return l}});var n=864e5,r=2592e6,i=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?a:l}return a}}var o=localStorage.getItem(e);return o?JSON.parse(o):a}catch(c){return a}},l=function(e,t){try{if(t){var a=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=i(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},22001:function(e,t,a){a.d(t,{ZP:function(){return o}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={toc:[]};function o(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"alert"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"alert"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"alert")," aus der Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"browser")," k\xf6nnen ",(0,i.kt)("strong",{parentName:"p"},"Ausgabeboxen")," erzeugt werden."))))}o.isMDXComponent=!0},41847:function(e,t,a){a.d(t,{ZP:function(){return o}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={toc:[]};function o(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"break"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"break"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mit ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," kann eine Wiederholter Codeblock beendet werden. Die Ausf\xfchrung geht mit der n\xe4chsten Zeile nach dem Codeblock weiter."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Beispiel")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(10):\n    print('Zahl', i)\n    if i == 4:\n        break\nprint('Ende')\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Bemerke"),": Bei ",(0,i.kt)("inlineCode",{parentName:"p"},"i == 4")," wird ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," aufgerufen und das Programm f\xfchrt als n\xe4chstes die Zeile 5 aus."))))}o.isMDXComponent=!0},6461:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return f},toc:function(){return k},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(30592),s=a(22001),o=a(41847),c=a(81788),m=a(52084),u=["components"],d={title:"8. Verzweigungen"},p="8. Bedingte Ausf\xfchrung \u2442",f={unversionedId:"Programmieren-1/Turtlegrafik/verzweigung",id:"version-25h/Programmieren-1/Turtlegrafik/verzweigung",isDocsHomePage:!1,title:"8. Verzweigungen",description:"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist.",source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/008-verzweigung.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/verzweigung",permalink:"/25h/Programmieren-1/Turtlegrafik/verzweigung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/008-verzweigung.md",tags:[],version:"25h",sidebarPosition:8,frontMatter:{title:"8. Verzweigungen"},sidebar:"version-25h/sidebar",previous:{title:"7. Variablen",permalink:"/25h/Programmieren-1/Turtlegrafik/variablen"},next:{title:"Turtle Befehle",permalink:"/25h/Programmieren-1/Turtlegrafik/turtle-commands"}},k=[{value:"Vergleichen",id:"vergleichen",children:[],level:2},{value:"Ausgabefenster",id:"ausgabefenster",children:[],level:2},{value:"Zufallszahlen erraten",id:"zufallszahlen-erraten",children:[],level:2}],g={toc:k};function h(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-bedingte-ausf\xfchrung-"},"8. Bedingte Ausf\xfchrung \u2442"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist.")),(0,i.kt)("p",null,"In Programmen m\xf6chten wir w\xe4hrend der Ausf\xfchrung des Programms entscheiden k\xf6nnen, ob Befehle ausgef\xfchrt werden oder nicht. Auch m\xf6chten wir entscheiden k\xf6nnen, ob eine Wiederholung abgebrochen werden soll. "),(0,i.kt)("h2",{id:"vergleichen"},"Vergleichen"),(0,i.kt)("p",null,'Um zu entscheiden, ob Befehle ausgef\xfchrt werden sollen, wird immer eine eine Frage gestellt, die eindeutig mit "Ja" oder "Nein" beantwortet werden kann. Wird die Frage mit "Ja" beantwortet, so ist diese Aussage ',(0,i.kt)("strong",{parentName:"p"},"Wahr")," und die Bedingung ist ",(0,i.kt)("strong",{parentName:"p"},"erf\xfcllt"),". Andernfalls ist die Aussage ",(0,i.kt)("strong",{parentName:"p"},"Falsch")," und die Bedingung ist ",(0,i.kt)("strong",{parentName:"p"},"nicht erf\xfcllt"),"."),(0,i.kt)("p",null,"Ein Frage kann als ",(0,i.kt)("strong",{parentName:"p"},"Vergleich"),' geschrieben werden. Beispielsweise wird die Frage "Ist 4 kleiner als 2?" als ',(0,i.kt)("inlineCode",{parentName:"p"},"4 < 2"),' aufgeschrieben. Die offensichtliche Antwort ist "Nein" und entspricht in Python dem Wert ',(0,i.kt)("inlineCode",{parentName:"p"},"False"),'.\nSpannender sind vergleiche, wenn diese mit Variablen durchgef\xfchrt werden, da man nicht schon im Voraus weiss, welcher Wert in einer Variable enthalten ist.\nDie Frage von "Ist x kleiner als 2" (',(0,i.kt)("inlineCode",{parentName:"p"},"x < 2"),") h\xe4ngt also davon ab, welcher Wert ",(0,i.kt)("strong",{parentName:"p"},"zur Zeit")," in der Variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," gespeichert ist."),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)(l.Z,{program:[{type:"input",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"alter")," = Wie alt bist du?")},{type:"if",code:(0,i.kt)("span",null,"Ist das ",(0,i.kt)("span",{className:"var"},"alter")," kleiner als 14?"),block:[{type:"step",code:(0,i.kt)("span",null,"Ausgabe: Du darfst Velo fahren")},{type:"elif",code:(0,i.kt)("span",null,"Sonst, ist das ",(0,i.kt)("span",{className:"var"},"alter")," kleiner als 16?")},{type:"step",code:(0,i.kt)("span",null,"Ausgabe: Du darfst T\xf6ffli fahren")},{type:"elif",code:(0,i.kt)("span",null,"Sonst, ist das ",(0,i.kt)("span",{className:"var"},"alter")," kleiner als 18?")},{type:"step",code:(0,i.kt)("span",null,"Ausgabe: Du darfst Roller fahren")},{type:"else"},{type:"step",code:(0,i.kt)("span",null,"Ausgabe: Du darfst Auto fahren")}]}],mdxType:"Strukto"})),(0,i.kt)("div",{parentName:"div",style:{classes:[]},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"alter = int(input('Wie alt bist du?'))\n\nif alter < 14:\n    print('Du darfst Velo fahren')\nelif alter < 16:\n    print('Du darfst T\xf6ffli fahren')\nelif alter < 18:\n    print('Du darfst Roller fahren')\nelse:\n    print('Du darfst Auto fahren')\n\n")))),(0,i.kt)("p",null,"In Python k\xf6nnen alle \xfcblichen Fragen als Vergleiche von zwei Werten geschrieben werden."),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Mathematisch"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Python"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},"<")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lt")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"<")))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},">")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\gt")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},">")))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},">"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},"\u2264")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\leq")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2264")))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},"\u2265")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\geq")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2265")))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},">="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gleich"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mo",{parentName:"mrow"},"=")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"==")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"=")))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"=="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ungleich"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("span",{parentName:"td",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\neq")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},(0,i.kt)("span",{parentName:"span",className:"mrel"},(0,i.kt)("span",{parentName:"span",className:"mord vbox"},(0,i.kt)("span",{parentName:"span",className:"thinbox"},(0,i.kt)("span",{parentName:"span",className:"rlap"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"inner"},(0,i.kt)("span",{parentName:"span",className:"mrel"},"\ue020")),(0,i.kt)("span",{parentName:"span",className:"fix"}))))),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="))))))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"!=")))))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"achtung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bei der \xdcberpr\xfcfung auf Gleichheit werden zwei Gleichheitszeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," geschrieben."))),(0,i.kt)("h2",{id:"ausgabefenster"},"Ausgabefenster"),(0,i.kt)("p",null,"In Python lassen sich Ausgaben nicht nur mit ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," sondern auch mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," (aus der Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"browser"),") in einer Ausgabebox anzeigen. ",(0,i.kt)("em",{parentName:"p"},"Die Ausgabe mit ",(0,i.kt)("inlineCode",{parentName:"em"},"alert")," wird hier verwendet, weil die Online-Version von Python die Ausgaben mit ",(0,i.kt)("inlineCode",{parentName:"em"},"print")," erst am Ende des Programms anzeigt wird"),"."),(0,i.kt)(s.ZP,{mdxType:"PyAlert"}),(0,i.kt)("h2",{id:"zufallszahlen-erraten"},"Zufallszahlen erraten"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"ratespiel"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Ratespiel")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Probieren Sie das Ratespiel aus:"),(0,i.kt)(c.Z,{mdxType:"Ratespiel"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Beschreiben Sie in eigenen Worten, wie das Ratespiel funktioniert.")),(0,i.kt)(m.Z,{type:"text",webKey:"44979bbe-f85a-45ff-badf-76e910710000",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"Zeichnen Sie mit ihrer Pultnachbar:in ein Struktogramm f\xfcr das Programm."),(0,i.kt)("li",{parentName:"ol"},"Schreiben Sie gem\xe4ss dem Struktogramm das Ratespiel in Python. ")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=ratespiel.py id=fd00137d-92d8-4572-ba48-60c20aeca5f0",live_py:!0,title:"ratespiel.py",id:"fd00137d-92d8-4572-ba48-60c20aeca5f0"},"from browser import alert\nfrom random import randint\n\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Hinweis"),": Wenn die Zahl gefunden wurde, soll die Spieler:in nicht mehr nach einer Eingabe gefragt werden. Mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," kann die Wiederholung abgebrochen werden."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"break")),(0,i.kt)(o.ZP,{mdxType:"PyBreak"})))))}h.isMDXComponent=!0}}]);