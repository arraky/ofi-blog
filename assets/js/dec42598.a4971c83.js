"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[40414],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),i="noLoginAlert_boZc",a=n(73727),l=n(71217),s=n(21314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return U}});var r=n(67294),i=n(26528),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),s=n(71217),c=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,n=t,i=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);i=a[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:i},n)},u=n(92814),d=n(51436),m=n(68949),h=n(72389),f=n(21314),g=n(74322),p=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return a[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,n,i,s=(0,h.Z)(),c=r.useState("unchecked"),p=c[0],y=c[1],b=(0,f.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&w(b.value)}),[b,s]),s?b.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(b.value)},className:(0,l.default)(a[p],a.checkButton)},r.createElement(u.G,{icon:(i=p,"correct"===i?d.f8k:"wrong"===i?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return a[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},w=(0,s.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),i=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return i(e.target.value,a)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return i(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),N=n(87462),S=n(75552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(S.Z,(0,N.Z)({model:t},e))):r.createElement(g.Z,null)})),z=n(3239),V=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},x=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return V("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return V("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(46858),Z=n(78982),A=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},C=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,Z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},U=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),i=t.find(e.webKey),a=(0,h.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||A.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,C(e)),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(z.Z,null),n.loggedIn&&r.createElement(x,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(y,e),"array"===e.type&&r.createElement(w,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i=n(86010),a="loader_2rVr",l="badge_2s0E",s=n(71217),c=n(92814),o=n(51436),u=(0,s.Pi)((function(){return r.createElement("div",{className:(0,i.default)(a)},r.createElement(c.G,{icon:o.IJ7,spin:!0}),r.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),i="quillEditor_1XRF",a="quillAnswer_oQOS",l="monospace_3rFN",s="disableToolbar_gntN",c=n(86010),o=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),h=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},f=(0,o.Pi)((function(e){var t=r.useState(!1),o=t[0],f=t[1],g=r.useState(!1),p=g[0],v=g[1],y=r.useRef(null),b=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,r=t[i["react-image-compress"]].default;if("katex"in i){var a=t[i.katex].default;window.katex=a}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&p&&b.loaded?r.createElement("div",{onFocus:function(){return!o&&f(!0)},className:(0,c.default)(i)},r.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(a,e.monospace&&l,o?void 0:s),value:b.text||"",onChange:function(t,n,r,i){var a,l;a=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&p&&b.setText(a)},modules:{toolbar:e.toolbar?h(e.toolbar):m,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return s},RN:function(){return c},aV:function(){return o}});var r=n(68949),i=n(67294),a=n(47678),l=function(e){return i.useContext(a.Nx)[e]},s=function(e,t,n,l,s,c){var o=i.useState(!1),u=o[0],d=o[1];i.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,l,s,c).finally((function(){d(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){u&&r&&a.Ux.documentStore.provideDocument(e(),t,n,l,s,c,!0)}))}),[u]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){u&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,l,s,c,!0)}))}),[u])},c=function(e){var t=i.useState(!1),n=t[0],l=t[1];i.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])},o=function(e){var t=i.useState(!1),n=t[0],l=t[1];i.useEffect((function(){a.Ux.policyStore.provideAuthorization(e,!1).finally((function(){l(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&a.Ux.policyStore.provideAuthorization(e,!0)}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&a.Ux.policyStore.provideAuthorization(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return i},Vj:function(){return r},ly:function(){return a}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return a},cl:function(){return l}});var r=864e5,i=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&s()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var a=JSON.parse(i);if("object"==typeof a){var l=a[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(o){return n}},l=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},71178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=n(84384),s=n(52084),c=["components"],o={title:"Kombinierte Verfahren"},u="Kombinierte Verfahren [^1]",d={unversionedId:"Kryptologie/Asymmetrisch/kombiniert",id:"version-24f/Kryptologie/Asymmetrisch/kombiniert",isDocsHomePage:!1,title:"Kombinierte Verfahren",description:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",source:"@site/versioned_docs/version-24f/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/kombiniert",permalink:"/24f/Kryptologie/Asymmetrisch/kombiniert",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",tags:[],version:"24f",sidebarPosition:5,frontMatter:{title:"Kombinierte Verfahren"},sidebar:"version-24f/sidebar",previous:{title:"Asymm. Verschl\xfcsselung",permalink:"/24f/Kryptologie/Asymmetrisch/asymm-encryption"},next:{title:"Authentifizierung",permalink:"/24f/Kryptologie/Hashfunktionen/Authentifizierung"}},m=[{value:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung",children:[],level:2},{value:"Beide Verfahren kombinieren",id:"beide-verfahren-kombinieren",children:[],level:2},{value:"Symmetrische Verfahren zur Verschl\xfcsselung der Daten",id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten",children:[],level:2},{value:"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung",id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung",children:[],level:2},{value:"Zus\xe4tzlicher Vorteil",id:"zus\xe4tzlicher-vorteil",children:[],level:2}],h={toc:m};function f(e){var t=e.components,o=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kombinierte-verfahren-"},"Kombinierte Verfahren ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung"},"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung"),(0,a.kt)("p",null,"Wir haben in der letzten Aufgabe gesehen, dass asymmetrische Verschl\xfcsselung auch Nachteile hat. Wir wollen die Vor- und Nachteile einander gegen\xfcberstellen."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Symmetrische Verschl\xfcsselung"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Asymmetrische Verschl\xfcsselung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714 sehr schnell"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2718 ~ 1'000x langsamer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714 1 Nachricht f\xfcr alle"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2718 1 Nachricht pro Person")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2718 geheimen Schl\xfcssel austauschen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714 Public Key ist \xf6ffentlich")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2192 nur 1 gemeinsamer Schl\xfcssel"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2192 1 Schl\xfcsselpaar pro Person")))),(0,a.kt)("h2",{id:"beide-verfahren-kombinieren"},"Beide Verfahren kombinieren"),(0,a.kt)("p",null,"In kryptographischen Verfahren, die heutzutage eingesetzt werden, ist das Ziel, die Vorteile beider Verfahren zu nutzen und die Nachteile zu eliminieren. Daher werden zur Verschl\xfcsselung von Daten beide Verfahren eingesetzt:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(54064).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,a.kt)("h2",{id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten"},"Symmetrische Verfahren zur Verschl\xfcsselung der Daten"),(0,a.kt)("p",null,"Da asymmetrische Verfahren ca. 1'000x langsamer sind als symmetrische Verfahren, werden zur Verschl\xfcsselung der Daten symmetrische Verfahren eingesetzt. Denn kryptographische Verfahren werden nicht nur zur Verschl\xfcsselung kurzer Nachrichten (wie z.B. Textnachrichten) eingesetzt, h\xe4ufig m\xfcssen auch grosse Datenmengen (z.B. hochaufl\xf6sende Bilder, Tondokumente, Videos, ...) verschl\xfcsselt werden, folglich spielt die Geschwindigkeit eine zentrale Rolle."),(0,a.kt)("p",null,"Zudem ist bei symmetrischer Verschl\xfcsselung praktisch, dass die Daten f\xfcr s\xe4mtliche Empf\xe4nger gleich verschl\xfcsselt sind und somit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nicht mehrmals verschl\xfcsselt werden m\xfcssen (Zeitbedarf) und"),(0,a.kt)("li",{parentName:"ul"},"in derselben Nachricht an alle Empf\xe4nger verschickt werden k\xf6nnen, ohne dass die Nachricht unn\xf6tig ein Mehrfaches ihrer urspr\xfcnglichen L\xe4nge erreicht (Platzbedarf).")),(0,a.kt)("h2",{id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung"},"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung"),(0,a.kt)("p",null,"Asymmetrische Verfahren sind langsamer, aber zur ",(0,a.kt)("strong",{parentName:"p"},"Verschl\xfcsselung des symmetrischen Schl\xfcssels")," perfekt geeignet, da dieser sehr kurz ist und im Vergleich zu den Daten Geschwindigkeit keine Rolle spielt."),(0,a.kt)("p",null,"Zudem ist auch der verschl\xfcsselte symmetrische Schl\xfcssel sehr kurz, so dass die Nachricht nur unwesentlich l\xe4nger wird, wenn diese f\xfcr mehrere Personen verfasst wird."),(0,a.kt)("h2",{id:"zus\xe4tzlicher-vorteil"},"Zus\xe4tzlicher Vorteil"),(0,a.kt)("p",null,"Der symmetrische Schl\xfcssel kann so vom Computer gew\xe4hlt werden. Dies hat zwei Vorteile:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Der Schl\xfcssel ist wirklich zuf\xe4llig und gleichverteilt im gesamten Schl\xfcsselraum (ein Passwort, das von einer Person gew\xe4hlt wird, schafft dies nicht)."),(0,a.kt)("li",{parentName:"ol"},"Der Schl\xfcssel kann f\xfcr jede Nachricht neu gew\xe4hlt werden. Somit erh\xe4lt jede Nachricht einen eigenen Schl\xfcssel.")),(0,a.kt)("p",null,"Man spricht daher von einem ",(0,a.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel")," (engl. session key) f\xfcr die symmetrische Verschl\xfcsselung. Die folgende \xdcbersicht stellt prinzipiell dasselbe dar wie die Abbildung oben, allerdings mit einem anderem Fokus."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",options:{},isInline:!1,src:n(81059).Z,alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",mdxType:"Image"})),(0,a.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"auch-symmetrische-verfahren-sind-sicher"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Auch symmetrische Verfahren sind sicher!")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Asymmetrische Verfahren sind also nicht besser als symmetrische! Sie erf\xfcllen einen anderen Zweck und werden gleichzeitig mit symmetrischen Verfahren eingesetzt. Symmetrische Verfahren sind also nicht unsicher, einzig die Erstellung des Schl\xfcssels und der Schl\xfcsselaustausch sind ein Problem."))),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"kombinierte-entschl\xfcsselung"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kombinierte Entschl\xfcsselung")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Stellen Sie dar, wie die Umkehrung \u2013 also die Entschl\xfcsselung \u2013 funktioniert, wenn symmetrische und asymmetrische Verfahren kombiniert verwendet werden."),(0,a.kt)(s.Z,{type:"text",webKey:"4a33b602-eb5f-427d-ba5e-725756b5f112",mdxType:"Answer"}))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559732"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},81059:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-binary-ba7dbdb6e184e37b434e13bebe3a3687.svg"},54064:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-ca8b9f6a8855055369b66ca053a9e97c.svg"}}]);