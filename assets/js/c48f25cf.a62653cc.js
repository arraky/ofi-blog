"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[38828],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return C}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),o=n(71217),s=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),d=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},c=n(92814),u=n(51436),m=n(68949),p=n(72389),f=n(21314),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),s=a.useState("unchecked"),g=s[0],h=s[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(h("unchecked"),v.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&N(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&N(v.value)}),[v,o]),o?v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:k(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=v.legacyData)?void 0:n.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(v.value)},className:(0,l.default)(i[g],i.checkButton)},a.createElement(c.G,{icon:(r=g,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):a.createElement("div",null,"Loading..."):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),y=void 0,w=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),x=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},E=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],o=t[1],s=a.useState(!1),d=s[0],c=s[1],u=a.useRef(null),p=(0,f.oR)("documentStore").find(e.webKey),g=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(y)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){y=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",g))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",g)}}),[]);return y&&d&&p.loaded?a.createElement("div",{onFocus:function(){return!r&&o(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(y,{ref:u,theme:"snow",readOnly:e.isLegacy||p.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?p.legacyData.value:p.value||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.isLegacy&&p.loaded&&d&&(0,m.z)((function(){p.value=i}))},modules:{toolbar:e.toolbar?x(e.toolbar):w,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),S=n(3239),P=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},K=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return P("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return P("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(46858),Z=n(78982),D=n(97762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,Z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},C=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||D.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,A(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(K,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(N,e)):a.createElement("div",null,"Loading..."):a.createElement("div",null,"SSR")}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o},RN:function(){return s}});var a=n(68949),r=n(67294),i=n(16731),l=function(e){return r.useContext(i.Nx)[e]},o=function(e,t,n,l,o,s){var d=r.useState(!1),c=d[0],u=d[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,o,s).finally((function(){u(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){c&&a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,s,!0)}))}),[c]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){c&&!a&&i.Ux.documentStore.provideDocument(e(),t,n,l,o,s,!0)}))}),[c])},s=function(e){var t=r.useState(!1),n=t[0],l=t[1];console.log("initial load"),r.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(t,a){n&&t&&(console.log("load from view"),i.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,a){n&&!t&&a&&(console.log("load from offlineChecker"),i.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(d){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},5011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(84384),o=n(52084),s=["components"],d={title:"Passw\xf6rter Speichern"},c="Passw\xf6rter speichern [^1]",u={unversionedId:"Kryptologie/Hashfunktionen/save-passwords",id:"version-24i/Kryptologie/Hashfunktionen/save-passwords",isDocsHomePage:!1,title:"Passw\xf6rter Speichern",description:"Passw\xf6rter sind wichtig, wir sollten sie besch\xfctzen. Doch dies gilt nicht nur f\xfcr unsere eigenen Passw\xf6rter, auch Firmen sollten die Passw\xf6rter ihrer Kunden sch\xfctzen.",source:"@site/versioned_docs/version-24i/06-Kryptologie/05-Hashfunktionen/03-save-passwords.md",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/save-passwords",permalink:"/24i/Kryptologie/Hashfunktionen/save-passwords",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/05-Hashfunktionen/03-save-passwords.md",tags:[],version:"24i",sidebarPosition:3,frontMatter:{title:"Passw\xf6rter Speichern"},sidebar:"version-24i/sidebar",previous:{title:"Sichere Passw\xf6rter",permalink:"/24i/Kryptologie/Hashfunktionen/passwords"},next:{title:"Hash Funktionen",permalink:"/24i/Kryptologie/Hashfunktionen/hash-funktionen"}},m=[{value:"Passw\xf6rter speichern",id:"passw\xf6rter-speichern",children:[],level:2},{value:"Pr\xfcfsumme",id:"pr\xfcfsumme",children:[],level:2},{value:"Bessere Pr\xfcfsummen?!",id:"bessere-pr\xfcfsummen",children:[],level:2}],p={toc:m};function f(e){var t=e.components,d=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"passw\xf6rter-speichern-"},"Passw\xf6rter speichern ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Passw\xf6rter sind wichtig, wir sollten sie besch\xfctzen. Doch dies gilt nicht nur f\xfcr unsere eigenen Passw\xf6rter, auch Firmen sollten die Passw\xf6rter ihrer Kunden sch\xfctzen."),(0,i.kt)("h2",{id:"passw\xf6rter-speichern"},"Passw\xf6rter speichern"),(0,i.kt)("p",null,"Wie w\xfcrden Sie die Passw\xf6rter Ihrer Kunden speichern, falls Sie einen Webshop erstellen w\xfcrden? Nat\xfcrlich nicht im Klartext, oder?"),(0,i.kt)("p",null,"Dass die Passw\xf6rter \xabverschl\xfcsselt\xbb werden m\xfcssen, scheint logisch. Also sollten die Passw\xf6rter wohl auf dem Firmenserver verschl\xfcsselt werden, damit sie nicht ausgelesen werden k\xf6nnen \u2013 weder von Hackern noch von neugierigen Mitarbeitenden."),(0,i.kt)("p",null,"Doch gerade dies ist ein grosses Problem: Der Firmenserver soll die Kunden anhand ihres Passwortes authentifizieren k\xf6nnen, die Mitarbeitenden d\xfcrfen allerdings keinen Zugriff auf die Kundenpassw\xf6rter haben. Alle bisherigen Verschl\xfcsselungsverfahren arbeiten mit einem Schl\xfcssel (oder mit mehreren). Wer den richtigen Schl\xfcssel kennt, kann die Passw\xf6rter entschl\xfcsseln. Wird der Schl\xfcssel auf den Firmenservern gespeichert, so haben zumindest gewisse Mitarbeitende Zugriff."),(0,i.kt)("p",null,"Hier kommen wir momentan nicht weiter. Wir tasten uns von einer anderen Seite an die L\xf6sung heran."),(0,i.kt)("h2",{id:"pr\xfcfsumme"},"Pr\xfcfsumme"),(0,i.kt)("p",null,"Wir k\xf6nnen jedoch \u2013 anstelle eines Passwortes \u2013 eine Pr\xfcfsumme speichern:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Benutzername"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Passwort"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Iterierte Quersumme"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Alternierende Quersumme"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,i.kt)("td",{parentName:"tr",align:"left"},"12345"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bob"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123456"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"e4c0e4ee-b780-4b66-b3eb-fee7643ef81c",solution:"6",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"51536ba1-e597-4ad6-889e-da2f6b30e2bd",solution:"-3",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"charlie"),(0,i.kt)("td",{parentName:"tr",align:"left"},"12345678"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"4f07fa06-d3ff-49db-82ce-cd8632c67d84",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"d2ebd64c-8b98-4663-9eae-3fcd0f8552e6",solution:"-4",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"donald"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123456789"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"f0c5928e-9a39-48c8-bcb7-1b2880ba175e",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"ab408c87-9091-48f6-9e62-d401dd528399",solution:"5",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"eve"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234567890"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"521b7f5f-407b-4014-ada2-55d6376de9e1",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"0c9e1541-20ec-4ac0-b525-e5c1197c6700",solution:"5",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"frederick"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11111111"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"20936c4d-0147-4755-992a-6f6a217d7044",solution:"6",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"f62d0c99-c687-4122-a26e-4962c3ff70b3",solution:"0",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123123"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"e662e73f-3299-474a-86ca-3dc3a415549d",solution:"3",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"ba26c8da-572c-4736-996c-597bd13e44c7",solution:"0",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hanna"),(0,i.kt)("td",{parentName:"tr",align:"left"},"password"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"af45e7bc-1898-4790-a2e6-71bf311c2b95",solution:"7",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"6f718695-6297-49a6-9b38-f8bd5faae01c",solution:"37",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ian"),(0,i.kt)("td",{parentName:"tr",align:"left"},"picture1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"a61c5db0-31e2-4c16-86d7-b8b518497ac8",solution:"3",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Z,{type:"string",webKey:"3d1d3b0b-e008-403a-b2b3-b344a1b6582f",solution:"-3",mdxType:"Answer"})))))),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Iterierte Quersumme")," ist die Quersumme, die entsteht, wenn man solange immer wieder die Quersumme ausrechnet, bis nur noch eine einzige Ziffer \xfcbrig bleibt. F\xfcr die Zahl 97 lautet die normale Quersumme 16, berechnet man davon wiederum die Quersumme, so entsteht die iterierte Quersumme: ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"."),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Alternierende Quersumme")," entsteht durch abwechslungweises Addieren und Subtrahieren der einzelnen Ziffern (f\xfcr 1234 lautet diese 1 - 2 + 3 - 4 = -2)."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"tabelle-vervollst\xe4ndigen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Tabelle vervollst\xe4ndigen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vervollst\xe4ndigen Sie die oben stehende Tabelle. Anstelle der in den Passw\xf6rtern enthaltenen Buchstaben k\xf6nnen Sie die unten stehenden Zahlen einsetzen."),(0,i.kt)("div",{className:"slim-table no-table-header"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A B C D E F G H I _J _K _L _M _N _O _P _Q _R _S _T _U _V _W _X _Y _Z"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Zahlen"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26")))))),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Welche der beiden Funktionen w\xfcrden Sie w\xe4hlen, um die Passw\xf6rter zu speichern?")),(0,i.kt)(o.Z,{type:"text",webKey:"7eb652cd-88a4-41d8-a426-4bd2d7dbcec4",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"Welche Probleme sehen Sie bei beiden Funktionen?")),(0,i.kt)(o.Z,{type:"text",webKey:"e1cecdb8-b606-409e-ae94-64827efe06cf",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wunsch-injektivi\xe4t"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Wunsch: ",(0,i.kt)("strong",{parentName:"h5"},"Injektivi\xe4t"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Zu jeder Pr\xfcfsumme geh\xf6rt h\xf6chstens ein Passwort. Oder anders formuliert: Kollisionen sollen vermieden werden. Das bedeutet, dass jedes Passwort eine andere Pr\xfcfsumme erhalten soll."))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Injektivit\xe4t",options:{width:"500px"},isInline:!1,src:n(49067).Z,alt:"Injektivit\xe4t --width=500px",mdxType:"Image"})),(0,i.kt)("h2",{id:"bessere-pr\xfcfsummen"},"Bessere Pr\xfcfsummen?!"),(0,i.kt)("p",null,"Nachfolgend eine weitere Liste mit Vorschl\xe4gen f\xfcr Pr\xfcfsummen."),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Benutzername"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Passwort"),(0,i.kt)("th",{parentName:"tr",align:"left"},"???"),(0,i.kt)("th",{parentName:"tr",align:"left"},"???"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234567"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7654321"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3456789")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bob"),(0,i.kt)("td",{parentName:"tr",align:"left"},"qwerty"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ytrewq"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sygtva")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"charlie"),(0,i.kt)("td",{parentName:"tr",align:"left"},"abc123"),(0,i.kt)("td",{parentName:"tr",align:"left"},"321cba"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cde345")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"donald"),(0,i.kt)("td",{parentName:"tr",align:"left"},"million2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2noillim"),(0,i.kt)("td",{parentName:"tr",align:"left"},"oknnkqp4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"eve"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"222222")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"frederick"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4321"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3456")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iloveyou"),(0,i.kt)("td",{parentName:"tr",align:"left"},"uoyevoli"),(0,i.kt)("td",{parentName:"tr",align:"left"},"knqygaqw")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hanna"),(0,i.kt)("td",{parentName:"tr",align:"left"},"password1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1drowssap"),(0,i.kt)("td",{parentName:"tr",align:"left"},"rcuuyqtf3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ian"),(0,i.kt)("td",{parentName:"tr",align:"left"},"qqww1122"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2211wwqq"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ssyy3344"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-funktionen-erkennen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Funktionen erkennen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erkennen Sie, wie die Pr\xfcfsummen in den hintersten drei Spalten berechnet werden?"),(0,i.kt)(o.Z,{type:"text",webKey:"ead7f2f2-e792-48c8-a6cc-994757348e75",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wunsch-unumkehrbarkeit"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Wunsch: ",(0,i.kt)("strong",{parentName:"h5"},"Unumkehrbarkeit"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aus der Pr\xfcfsumme soll nicht auf das Passwort geschlossen werden k\xf6nnen."))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-zusatzaufgabe-sicheres-einloggen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\u2b50\ufe0f Zusatzaufgabe Sicheres Einloggen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie funktioniert der Anmeldevorgang an den Computern der Schule, wenn Benutzername und Passwort von einem Server \xfcberpr\xfcft werden muss? Was wird in welcher Form \xfcbertragen?"),(0,i.kt)(o.Z,{type:"text",webKey:"d2dcaf7f-9480-495f-9142-1f606e424069",mdxType:"Answer"}))),(0,i.kt)(o.Z,{type:"text",webKey:"b146e1f3-ef8c-4ed7-ade2-428829f619fa",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=994723"},"rothe"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},49067:function(e,t,n){t.Z=n.p+"assets/images/injective-8ea39d04b575f712e8d333178a8ad8f1.png"}}]);