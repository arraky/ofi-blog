"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45724],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_boZc",l=n(73727),i=n(71217),o=n(21314),c=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return T}});var a=n(67294),r=n(26528),l={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},i=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=l[i],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),u=n(51436),m=n(68949),f=n(72389),p=n(21314),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return l[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n,r,o=(0,f.Z)(),c=a.useState("unchecked"),k=c[0],h=c[1],N=(0,p.oR)("documentStore").find(e.webKey),v=function(t){e.isLegacy||(h("unchecked"),N.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return N.loaded}),(function(e){e&&y(N.data.value)}))}),[]),a.useEffect((function(){N.loaded&&y(N.data.value)}),[o]),a.createElement("div",{className:l.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=N.legacyData)?void 0:t.value:N.data.value,className:g(N.data.value),disabled:!N.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:e.isLegacy?null==(n=N.legacyData)?void 0:n.value:N.data.value,disabled:!N.loaded||N.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(N.data.value)},className:(0,i.default)(l[k],l.checkButton)},a.createElement(d.G,{icon:(r=k,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)})))})),N=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return l[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return a.createElement("div",{className:l.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,l){return e.select?a.createElement("select",{key:l,onChange:function(e){return r(e.target.value,l)},value:t,className:v(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:l,type:"text",onChange:function(e){return r(e.target.value,l)},value:t,disabled:!n.loaded||n.readonly})})))})),b=void 0,w=[["bold","italic","underline"]],E=[].concat(w,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),x=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],o=t[1],c=a.useState(!1),s=c[0],d=c[1],u=a.useRef(null),f=(0,p.oR)("documentStore").find(e.webKey),k=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(b)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){b=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(d(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[]);return b&&s?a.createElement("div",{onFocus:function(){return!r&&o(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(b,{ref:u,theme:"snow",readOnly:e.isLegacy||!f.loaded||f.readonly,className:(0,i.default)(l.quillAnswer,e.monospace&&l.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?f.legacyData.value:f.loaded?f.value||"":"Laden...",onChange:function(t,n,a,r){var l,i;l=t,void 0===i&&(i=0),!e.isLegacy&&f.loaded&&s&&(0,m.z)((function(){f.value=l}))},modules:{toolbar:e.reduced?w:E,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),S=n(3239),C=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},D=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),B=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=n(46858),z=n(78982),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=function(e){if(!e.id)return function(){};var t=function(){try{return(0,K.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,z.cl)(e.id,t)}}}:function(){}},T=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,f.Z)();return(0,p.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||"",type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,_(e)),r&&l?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(D,e),n.loggedIn&&a.createElement(B,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(y,e)):a.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return i},ky:function(){return o}});var a=n(68949),r=n(67294),l=n(93812),i=function(e){return r.useContext(l.Nx)[e]},o=function(e,t,n,i,o,c){r.useEffect((function(){l.Ux.documentStore.provideDocument(e,t,n,i,o,c)}),[]),r.useEffect((function(){return(0,a.U5)((function(){return l.Ux.userStore.currentView}),(function(a){a&&l.Ux.documentStore.provideDocument(e,t,n,i,o,c)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return l.Ux.msalStore.isApiOffline}),(function(a){a||l.Ux.documentStore.provideDocument(e,t,n,i,o,c)}))}),[])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return l}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return l},cl:function(){return i}});var a=864e5,r=2592e6,l=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?n:i}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(s){return n}},i=function(e,t){try{if(t){var n=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=l(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},25089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(52084),o=["components"],c={title:"Blockchiffre"},s="Blockchiffre [^1]",d={unversionedId:"Kryptologie/Symmetrisch/blockchiffre",id:"version-24f/Kryptologie/Symmetrisch/blockchiffre",isDocsHomePage:!1,title:"Blockchiffre",description:"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden Blockchiffren erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in Bl\xf6cken verschl\xfcsselt wird.",source:"@site/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/blockchiffre",permalink:"/24f/Kryptologie/Symmetrisch/blockchiffre",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",tags:[],version:"24f",sidebarPosition:4,frontMatter:{title:"Blockchiffre"},sidebar:"version-24f/sidebar",previous:{title:"XOR-Verschl\xfcsselung",permalink:"/24f/Kryptologie/Symmetrisch/xor"},next:{title:"Verkettung von Bl\xf6cken",permalink:"/24f/Kryptologie/Symmetrisch/block-chaining"}},u=[{value:"Blockl\xe4nge",id:"blockl\xe4nge",children:[],level:2},{value:"Verschl\xfcsselung in Bl\xf6cken",id:"verschl\xfcsselung-in-bl\xf6cken",children:[],level:2}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchiffre-"},"Blockchiffre ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden ",(0,l.kt)("strong",{parentName:"p"},"Blockchiffren")," erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in ",(0,l.kt)("strong",{parentName:"p"},"Bl\xf6cken")," verschl\xfcsselt wird."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aktuelle-verschl\xfcsselungsverfahren"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aktuelle Verschl\xfcsselungsverfahren")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Aktuelle Verschl\xfcsselungsverfahren sind so komplex, dass wir sie unm\xf6glich verstehen k\xf6nnen. Daher werden wir viele der nachfolgend erw\xe4hnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen."),(0,l.kt)("p",{parentName:"div"},"Beim Thema Blockchiffren wollen wir aber kurz eintauchen und uns anhand einer einfachen Verschl\xfcsselung (XOR) anschauen, wie moderne Verschl\xfcsselung funktioniert."))),(0,l.kt)("h2",{id:"blockl\xe4nge"},"Blockl\xe4nge"),(0,l.kt)("p",null,"Da der Klartext dreimal so lange ist wie der Schl\xfcssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschl\xfcsseln. Die Blockl\xe4nge entspricht also der Schl\xfcssell\xe4nge:"),(0,l.kt)("div",{style:{},className:"flex flex-flex"},(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em",classes:["slim-table"]},className:"item"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Klartext"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEIMESTREFFEN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"00111 00101 01000 00101 01001 01101 00101 10011 10100 10010 00101 00110 00110 00101 01110")))))),(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em",classes:["slim-table"]},className:"item"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"10000 00101 01110 10100 00001"))))))),(0,l.kt)("h2",{id:"verschl\xfcsselung-in-bl\xf6cken"},"Verschl\xfcsselung in Bl\xf6cken"),(0,l.kt)("p",null,"Im folgenden Beispiel wird der oben bereits erw\xe4hnte Klartext mit dem Schl\xfcssel bitweise mit XOR verschl\xfcsselt:"),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEI")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00111 00101 01000 00101 01001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"W FQH")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10111 00000 00110 10001 01000"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"MESTR")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"01101 00101 10011 10100 10010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},". . S")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"11101 00000 11101 00000 10011"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EFFEN")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00101 00110 00110 00101 01110"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UCHQO")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10101 00011 01000 10001 01111")))))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-xor-blockchiffre"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Blockchiffre")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den folgenden Text mit der XOR-Blockchiffre:"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Text"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PAKET ZUGESTELLT")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Schl\xfcssel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BETA")),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Codieren Sie zuerst den Text mit Pentacode (verwenden Sie das ",(0,l.kt)("a",{parentName:"li",href:"/24f/Kryptologie/Symmetrisch/codierung#pentacode"},"interaktiven Tool"),")."),(0,l.kt)("li",{parentName:"ol"},"Codierenn Sie anschliessend den Schl\xfcssel mit Pentacode."),(0,l.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie den bin\xe4r dargestellten Text anschliessend mit dem bin\xe4r dargestellten Schl\xfcssel mittels XOR-Blockchiffre."),(0,l.kt)("li",{parentName:"ol"},"Decodieren Sie diesen wiederum mit Pentacode und \xfcberpr\xfcfen Sie die L\xf6sung.")),(0,l.kt)("h3",{parentName:"div",id:"vorgehenseweise"},"Vorgehenseweise"),(0,l.kt)(i.Z,{type:"text",webKey:"3bce79ec-5813-4d29-a7c5-3fec156bd472",monospace:!0,mdxType:"Answer"}),(0,l.kt)("h3",{parentName:"div",id:"l\xf6sung"},"L\xf6sung"),(0,l.kt)(i.Z,{type:"string",webKey:"773c8965-eecf-43fa-801f-d079fb81ad20",solution:"RD@DVENTE GUGIXU",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))),(0,l.kt)(i.Z,{type:"text",webKey:"bcdeeca1-2a54-4cf3-9187-849376053664",placeholder:"Notizen...",mdxType:"Answer"}),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=894637"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);