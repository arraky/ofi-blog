"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[43986],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_boZc",l=n(73727),i=n(71217),o=n(21314),c=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return V}});var a=n(67294),r=n(28900),l={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},i=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=l[i],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},s=n(92814),d=n(51436),p=n(68949),m=n(72389),f=n(21314),g=n(74322),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n,r,o=(0,m.Z)(),c=a.useState("unchecked"),h=c[0],y=c[1],b=(0,f.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,p.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&w(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return w(b.value)},className:(0,i.default)(l[h],l.checkButton)},a.createElement(s.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return l[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,l){return e.select?a.createElement("select",{key:l,onChange:function(e){return r(e.target.value,l)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:l,type:"text",onChange:function(e){return r(e.target.value,l)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),N=n(83117),E=n(75552),S=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),z=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),A=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),L=n(78982),K=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},V=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),l=(0,m.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),l?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(z.Z,null),n.loggedIn&&a.createElement(_,e),n.loggedIn&&a.createElement(A,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(y,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l="loader_2rVr",i="badge_2s0E",o=n(71217),c=n(92814),u=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(l)},a.createElement(c.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_1XRF",l="quillAnswer_oQOS",i="monospace_3rFN",o="disableToolbar_gntN",c=n(86010),u=n(71217),s=n(74322),d=void 0,p=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return t},f=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],f=t[1],g=a.useState(!1),h=g[0],v=g[1],y=a.useRef(null),b=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&h&&b.loaded?a.createElement("div",{onFocus:function(){return!u&&f(!0)},className:(0,c.default)(r)},a.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(l,e.monospace&&i,u?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&b.canUpdate&&h&&b.setText(l)},modules:{toolbar:e.toolbar?m(e.toolbar):p,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return l}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return l},cl:function(){return i}});var a=864e5,r=2592e6,l=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?n:i}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},i=function(e,t){try{if(t){var n=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=l(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},50644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(52084),o=["components"],c={title:"WhatsApp-Verschl\xfcsselung"},u="WhatsApp-Verschl\xfcsselung [^1]",s={unversionedId:"Kryptologie/Alltag/whatsapp",id:"version-24o/Kryptologie/Alltag/whatsapp",title:"WhatsApp-Verschl\xfcsselung",description:"Gem\xe4ss WhatsApp sind s\xe4mtliche WhatsApp-Nachrichten Ende-zu-Ende verschl\xfcsselt.",source:"@site/versioned_docs/version-24o/06-Kryptologie/07-Alltag/03-whatsapp.md",sourceDirName:"06-Kryptologie/07-Alltag",slug:"/Kryptologie/Alltag/whatsapp",permalink:"/24o/Kryptologie/Alltag/whatsapp",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/07-Alltag/03-whatsapp.md",tags:[],version:"24o",sidebarPosition:3,frontMatter:{title:"WhatsApp-Verschl\xfcsselung"},sidebar:"version-24o/sidebar",previous:{title:"Browserzertifikate",permalink:"/24o/Kryptologie/Alltag/browser-zertifikate"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"whatsapp-verschl\xfcsselung-"},"WhatsApp-Verschl\xfcsselung ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Gem\xe4ss WhatsApp sind s\xe4mtliche WhatsApp-Nachrichten Ende-zu-Ende verschl\xfcsselt.",(0,l.kt)("sup",{parentName:"p",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"whatsapp-verschl\xfcsselung"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"WhatsApp-Verschl\xfcsselung")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Was meint WhatsApp mit \xabEnde-zu-Ende-Verschl\xfcsselung\xbb?"),(0,l.kt)("li",{parentName:"ol"},"Diskutieren Sie zu zweit, wie die WhatsApp-Verschl\xfcsselung funktionieren k\xf6nnte.")),(0,l.kt)(i.Z,{type:"text",webKey:"be104161-251e-43e3-841d-23861b4c79de",mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"sicherheitsnummer"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Sicherheitsnummer")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"WhatsApp bietet die M\xf6glichkeit, eine Sicherheitsnummer anzuzeigen und zu \xfcberpr\xfcfen."),(0,l.kt)("p",{parentName:"div"},"Ende-zu-Ende-Verschl\xfcsselung eines Chats verifizieren:"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\xd6ffnen Sie Ihren gemeinsamen Chat."),(0,l.kt)("li",{parentName:"ol"},"Tippen Sie auf den Namen des Kontakts, um den Kontaktinfo-Bildschirm zu \xf6ffnen."),(0,l.kt)("li",{parentName:"ol"},"Tippen Sie auf Verschl\xfcsselung, um den QR-Code und die 60-stellige Sicherheitsnummer anzuzeigen.")),(0,l.kt)("p",{parentName:"div"},"Sie k\xf6nnen den angezeigten QR-Code gegenseitig scannen, um nicht die 60-stellige Zahl kontrollieren zu m\xfcssen."),(0,l.kt)("p",{parentName:"div"},"Probieren Sie es zu zweit aus und diskutieren Sie, wie diese Nummer zustande kommt und was sie bedeutet."),(0,l.kt)(i.Z,{type:"text",webKey:"71db4003-b108-4c34-bedd-ba6c182805cd",mdxType:"Answer"}))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=549311"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://faq.whatsapp.com/general/security-and-privacy/end-to-end-encryption/?lang=de"},"whatsapp.com"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);