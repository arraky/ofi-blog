/*! For license information please see 308b31f2.45c238b0.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87296],{3239:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(67294),i="noLoginAlert_boZc",r=n(73727),s=n(71217),o=n(21314),l=(0,s.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){"use strict";n.d(t,{x:function(){return O},Z:function(){return z}});var a=n(67294),i=n(28900),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},s=n(86010),o=n(71217),l=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,i=void 0;if(l.test(t)){var s=function(e){if(l.test(e))return e.match(l).groups.klass}(t);i=r[s],n=""+t.replace(l,"")}return a.createElement("option",{value:t,className:i},n)},u=n(92814),h=n(51436),d=n(68949),f=n(72389),p=n(21314),m=n(74322),g=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return r[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},H=(0,o.Pi)((function(e){var t,n,i,o=(0,f.Z)(),l=a.useState("unchecked"),g=l[0],H=l[1],y=(0,p.oR)("documentStore").find(e.webKey),_=function(t){!e.isLegacy&&y.loaded&&(H("unchecked"),y.setData({value:t,type:"string"}))},E=function(t){if(e.checker)return H(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};H(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,d.U5)((function(){return y.loaded}),(function(e){e&&E(y.value)}))}),[y]),a.useEffect((function(){y.loaded&&E(y.value)}),[y,o]),o?y.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return _(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:v(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return _(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return E(y.value)},className:(0,s.default)(r[g],r.checkButton)},a.createElement(u.G,{icon:(i=g,"correct"===i?h.f8k:"wrong"===i?h.nYk:h.sph)}))):a.createElement(m.Z,null):a.createElement("div",null,"SSR")})),y=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),_=function(e){return r[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),i=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return i(e.target.value,r)},value:t,className:_(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return i(e.target.value,r)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(m.Z,null)})),b=n(83117),k=n(75552),S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(k.Z,(0,b.Z)({model:t},e))):a.createElement(m.Z,null)})),A=n(3239),w=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},R=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(H,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(E,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return w("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return w("use_current",t)}},"Nein (verwerfen)"))):null})),N=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,s.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),x=n(78982),X=n(97762),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},D=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,x.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,x.cl)(e.id,t)}}}:function(){}},z=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),r=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||X.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,D(e)),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(A.Z,null),n.loggedIn&&a.createElement(R,e),n.loggedIn&&a.createElement(N,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(H,e),"array"===e.type&&a.createElement(E,e)):a.createElement(m.Z,null):a.createElement("div",null,"SSR")}))},71656:function(e,t,n){"use strict";var a=n(86010),i=n(67294),r=n(96734),s=n(72023);t.Z=function(){var e=i.useState(""),t=e[0],n=e[1],o=i.useState(""),l=o[0],c=o[1];return i.useEffect((function(){c((0,s.sha256)(t))}),[t]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"SHA-2 Hash"),i.createElement("h4",null,"Input"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:t,onChange:function(e){n(e.target.value)},rows:5,placeholder:"Text"}),i.createElement("h4",null,"SHA-2 Hash"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:l,readOnly:!0,placeholder:"SHA2-Hash"})))}},74322:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),i=n(86010),r="loader_2rVr",s="badge_2s0E",o=n(71217),l=n(92814),c=n(51436),u=(0,o.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(l.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",s)},"Laden..."))}))},75552:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),i="quillEditor_1XRF",r="quillAnswer_oQOS",s="monospace_3rFN",o="disableToolbar_gntN",l=n(86010),c=n(71217),u=n(74322),h=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var s=[];e.formula&&s.push("formula"),e.image&&s.push("image"),t.push(s)}return t},p=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],p=t[1],m=a.useState(!1),g=m[0],v=m[1],H=a.useRef(null),y=e.model,_=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),h)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){h=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),H&&H.current&&H.current.editor.getModule("toolbar").container.addEventListener("mousedown",_))}),e.toolbar),function(){t=!1,H&&H.current&&H.current.editor.getModule("toolbar").container.removeEventListener("mousedown",_)}}),[e]);return h&&g&&y.loaded?a.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,l.default)(i)},a.createElement(h,{ref:H,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,l.default)(r,e.monospace&&s,c?void 0:o),value:y.text||"",onChange:function(t,n,a,i){var r,s;r=t,void 0===s&&(s=0),!e.readonly&&y.canUpdate&&g&&y.setText(r)},modules:{toolbar:e.toolbar?f(e.toolbar):d,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){"use strict";n.d(t,{Vx:function(){return i},Vj:function(){return a},ly:function(){return r}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){"use strict";n.d(t,{rV:function(){return r},cl:function(){return s}});var a=864e5,i=2592e6,r=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var r=JSON.parse(i);if("object"==typeof r){var s=r[e];return void 0===s?n:s}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(c){return n}},s=function(e,t){try{if(t){var n=r(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=r(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},41276:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),s=n(84384),o=n(52084),l=n(71656),c=["components"],u={title:"Hash Funktionen"},h="Hashfunktionen [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/hash-funktionen",id:"Kryptologie/Hashfunktionen/hash-funktionen",title:"Hash Funktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/hash-funktionen",permalink:"/Kryptologie/Hashfunktionen/hash-funktionen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",tags:[],version:"current",lastUpdatedAt:1637620840,formattedLastUpdatedAt:"11/22/2021",sidebarPosition:4,frontMatter:{title:"Hash Funktionen"},sidebar:"sidebar",previous:{title:"Passw\xf6rter Speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"},next:{title:"Asymmetrie umkehren",permalink:"/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"}},f=[{value:"Hashfunktion",id:"hashfunktion",children:[],level:2},{value:"Hashwert",id:"hashwert",children:[],level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",children:[],level:2}],p={toc:f};function m(e){var t=e.components,u=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hashfunktionen-"},"Hashfunktionen ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"))),(0,r.kt)("p",null,"Da eine ",(0,r.kt)("strong",{parentName:"p"},"Eingabe beliebiger L\xe4nge")," auf eine ",(0,r.kt)("strong",{parentName:"p"},"Ausgabe mit fester L\xe4nge")," abgebildet, ist Injektivit\xe4t unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Pr\xfcfsummen) eine fixe L\xe4nge haben."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hashfunktion",options:{width:"600px"},isInline:!1,src:n(51491).Z,alt:"Hashfunktion --width=600px",mdxType:"Image"})),(0,r.kt)("h2",{id:"hashfunktion"},"Hashfunktion"),(0,r.kt)("p",null,"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"kollisionsresistenz"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Kollisionsresistenz")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."))),(0,r.kt)("h2",{id:"hashwert"},"Hashwert"),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("p",{parentName:"div"},"Die Ausgabe der Hashfunktion \u2013 also die Pr\xfcfsumme \u2013 wird ",(0,r.kt)("strong",{parentName:"p"},"Hashwert")," genannt."),(0,r.kt)("p",{parentName:"div"},"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen.")),(0,r.kt)("div",{parentName:"div",style:{alignSelf:"end"},className:"item"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Ein Hashwert ist wie ein Fingerabdruck",options:{width:"100px"},isInline:!1,src:n(9362).Z,alt:"Ein Hashwert ist wie ein Fingerabdruck --width=100px",mdxType:"Image"})))),(0,r.kt)("h2",{id:"aktuelle-beispiele"},"Aktuelle Beispiele"),(0,r.kt)("p",null,"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."),(0,r.kt)(l.Z,{mdxType:"HashSHA2"}),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."),(0,r.kt)("li",{parentName:"ol"},"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen? ")),(0,r.kt)(o.Z,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0,mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit ca. 50% der Hashwert-Bits \xe4ndern."))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=103784"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},72023:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(n){return new Sha256(t,!0).update(n)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var n=0;n<OUTPUT_TYPES.length;++n){var a=OUTPUT_TYPES[n];t[a]=createOutputMethod(a,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(n,a){return new HmacSha256(n,t,!0).update(a)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,n){return t.create(e).update(n)};for(var n=0;n<OUTPUT_TYPES.length;++n){var a=OUTPUT_TYPES[n];t[a]=createHmacOutputMethod(a,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,n){var a,i=typeof e;if("string"===i){var r,s=[],o=e.length,l=0;for(a=0;a<o;++a)(r=e.charCodeAt(a))<128?s[l++]=r:r<2048?(s[l++]=192|r>>6,s[l++]=128|63&r):r<55296||r>=57344?(s[l++]=224|r>>12,s[l++]=128|r>>6&63,s[l++]=128|63&r):(r=65536+((1023&r)<<10|1023&e.charCodeAt(++a)),s[l++]=240|r>>18,s[l++]=128|r>>12&63,s[l++]=128|r>>6&63,s[l++]=128|63&r);e=s}else{if("object"!==i)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var c=[],u=[];for(a=0;a<64;++a){var h=e[a]||0;c[a]=92^h,u[a]=54^h}Sha256.call(this,t,n),this.update(u),this.oKeyPad=c,this.inner=!0,this.sharedMemory=n}Sha256.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var a,i,r=0,s=e.length,o=this.blocks;r<s;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),t)for(i=this.start;r<s&&i<64;++r)o[i>>2]|=e[r]<<SHIFT[3&i++];else for(i=this.start;r<s&&i<64;++r)(a=e.charCodeAt(r))<128?o[i>>2]|=a<<SHIFT[3&i++]:a<2048?(o[i>>2]|=(192|a>>6)<<SHIFT[3&i++],o[i>>2]|=(128|63&a)<<SHIFT[3&i++]):a<55296||a>=57344?(o[i>>2]|=(224|a>>12)<<SHIFT[3&i++],o[i>>2]|=(128|a>>6&63)<<SHIFT[3&i++],o[i>>2]|=(128|63&a)<<SHIFT[3&i++]):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++r)),o[i>>2]|=(240|a>>18)<<SHIFT[3&i++],o[i>>2]|=(128|a>>12&63)<<SHIFT[3&i++],o[i>>2]|=(128|a>>6&63)<<SHIFT[3&i++],o[i>>2]|=(128|63&a)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=o[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,n,a,i,r,s,o,l,c=this.h0,u=this.h1,h=this.h2,d=this.h3,f=this.h4,p=this.h5,m=this.h6,g=this.h7,v=this.blocks;for(e=16;e<64;++e)t=((i=v[e-15])>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,n=((i=v[e-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,v[e]=v[e-16]+t+v[e-7]+n<<0;for(l=u&h,e=0;e<64;e+=4)this.first?(this.is224?(r=300032,g=(i=v[0]-1413257819)-150054599<<0,d=i+24177077<<0):(r=704751109,g=(i=v[0]-210244248)-1521486534<<0,d=i+143694565<<0),this.first=!1):(t=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),a=(r=c&u)^c&h^l,g=d+(i=g+(n=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&p^~f&m)+K[e]+v[e])<<0,d=i+(t+a)<<0),t=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),a=(s=d&c)^d&u^r,m=h+(i=m+(n=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&f^~g&p)+K[e+1]+v[e+1])<<0,t=((h=i+(t+a)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),a=(o=h&d)^h&c^s,p=u+(i=p+(n=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&g^~m&f)+K[e+2]+v[e+2])<<0,t=((u=i+(t+a)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),a=(l=u&h)^u&d^o,f=c+(i=f+(n=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&m^~p&g)+K[e+3]+v[e+3])<<0,c=i+(t+a)<<0;this.h0=this.h0+c<<0,this.h1=this.h1+u<<0,this.h2=this.h2+h<<0,this.h3=this.h3+d<<0,this.h4=this.h4+f<<0,this.h5=this.h5+p<<0,this.h6=this.h6+m<<0,this.h7=this.h7+g<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,a=this.h3,i=this.h4,r=this.h5,s=this.h6,o=this.h7,l=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s];return this.is224||(l+=HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]),l},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,a=this.h3,i=this.h4,r=this.h5,s=this.h6,o=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,a>>24&255,a>>16&255,a>>8&255,255&a,i>>24&255,i>>16&255,i>>8&255,255&i,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||l.push(o>>24&255,o>>16&255,o>>8&255,255&o),l},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},96734:function(e,t){"use strict";t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},9362:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},51491:function(e,t,n){"use strict";t.Z=n.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);