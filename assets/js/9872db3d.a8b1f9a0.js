"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[23117],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return K}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},c=n(592814),m=n(51436),u=n(168949),p=n(972389),f=n(121314),g=n(274322),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},b=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),s=r[0],o=r[1],k=(0,f.oR)("documentStore").find(e.webKey),b=function(e){k.loaded&&(o("unchecked"),k.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,u.U5)((function(){return k.loaded}),(function(e){e&&v(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&v(k.value)}),[k,n]),n?k.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:k.value,className:h(k.value),disabled:!k.loaded},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return v(k.value)},className:(0,l.default)(i[s],i.checkButton)},a.createElement(c.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},w=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:N(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),y=n(583117),x=n(575552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(x.Z,(0,y.Z)({model:t},e))):a.createElement(g.Z,null)})),P=n(647271),Z=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(697762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(P.Z,null),n.loggedIn&&a.createElement(Z,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),s=n(121314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),s=n(386010),o=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},d=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+d(n.size)+")",t.maxHeight=d(n.size),delete n.size),n.height&&(t.maxHeight=d(n.height),t.height=d(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+d(n.width)+")",t.width=d(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return a.createElement(c,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],d=i[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(c,e),u&&a.createElement("figcaption",null,m&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(r.bib,l?r.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&a.createElement(o,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",s=n(471217),o=n(592814),d=n(51436),c=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(386010),d=n(471217),c=n(274322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,d.Pi)((function(e){var t=a.useState(!1),d=t[0],f=t[1],g=a.useState(!1),k=g[0],h=g[1],b=a.useRef(null),v=e.model,N=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return m&&k&&v.loaded?a.createElement("div",{onFocus:function(){return!d&&f(!0)},className:(0,o.default)(r)},a.createElement(m,{ref:b,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,o.default)(i,e.monospace&&l,d?void 0:s),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&k&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(u,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},342393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),s=n(682593),o=["components"],d={title:"Passw\xf6rter Speichern"},c="Passw\xf6rter speichern [^1]",m={unversionedId:"Kryptologie/Hashfunktionen/save-passwords",id:"version-24f/Kryptologie/Hashfunktionen/save-passwords",title:"Passw\xf6rter Speichern",description:"Passw\xf6rter sind wichtig, wir sollten sie besch\xfctzen. Doch dies gilt nicht nur f\xfcr unsere eigenen Passw\xf6rter, auch Firmen sollten die Passw\xf6rter ihrer Kunden sch\xfctzen.",source:"@site/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/03-save-passwords.md",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/save-passwords",permalink:"/24f/Kryptologie/Hashfunktionen/save-passwords",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/03-save-passwords.md",tags:[],version:"24f",sidebarPosition:3,frontMatter:{title:"Passw\xf6rter Speichern"},sidebar:"version-24f/sidebar",previous:{title:"Sichere Passw\xf6rter",permalink:"/24f/Kryptologie/Hashfunktionen/passwords"},next:{title:"Hash Funktionen",permalink:"/24f/Kryptologie/Hashfunktionen/hash-funktionen"}},u={},p=[{value:"Passw\xf6rter speichern",id:"passw\xf6rter-speichern",level:2},{value:"Pr\xfcfsumme",id:"pr\xfcfsumme",level:2},{value:"Bessere Pr\xfcfsummen?!",id:"bessere-pr\xfcfsummen",level:2}],f={toc:p};function g(e){var t=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"passw\xf6rter-speichern-"},"Passw\xf6rter speichern ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Passw\xf6rter sind wichtig, wir sollten sie besch\xfctzen. Doch dies gilt nicht nur f\xfcr unsere eigenen Passw\xf6rter, auch Firmen sollten die Passw\xf6rter ihrer Kunden sch\xfctzen."),(0,i.kt)("h2",{id:"passw\xf6rter-speichern"},"Passw\xf6rter speichern"),(0,i.kt)("p",null,"Wie w\xfcrden Sie die Passw\xf6rter Ihrer Kunden speichern, falls Sie einen Webshop erstellen w\xfcrden? Nat\xfcrlich nicht im Klartext, oder?"),(0,i.kt)("p",null,"Dass die Passw\xf6rter \xabverschl\xfcsselt\xbb werden m\xfcssen, scheint logisch. Also sollten die Passw\xf6rter wohl auf dem Firmenserver verschl\xfcsselt werden, damit sie nicht ausgelesen werden k\xf6nnen \u2013 weder von Hackern noch von neugierigen Mitarbeitenden."),(0,i.kt)("p",null,"Doch gerade dies ist ein grosses Problem: Der Firmenserver soll die Kunden anhand ihres Passwortes authentifizieren k\xf6nnen, die Mitarbeitenden d\xfcrfen allerdings keinen Zugriff auf die Kundenpassw\xf6rter haben. Alle bisherigen Verschl\xfcsselungsverfahren arbeiten mit einem Schl\xfcssel (oder mit mehreren). Wer den richtigen Schl\xfcssel kennt, kann die Passw\xf6rter entschl\xfcsseln. Wird der Schl\xfcssel auf den Firmenservern gespeichert, so haben zumindest gewisse Mitarbeitende Zugriff."),(0,i.kt)("p",null,"Hier kommen wir momentan nicht weiter. Wir tasten uns von einer anderen Seite an die L\xf6sung heran."),(0,i.kt)("h2",{id:"pr\xfcfsumme"},"Pr\xfcfsumme"),(0,i.kt)("p",null,"Wir k\xf6nnen jedoch \u2013 anstelle eines Passwortes \u2013 eine Pr\xfcfsumme speichern:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Benutzername"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Passwort"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Iterierte Quersumme"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Alternierende Quersumme"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,i.kt)("td",{parentName:"tr",align:"left"},"12345"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bob"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123456"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"e4c0e4ee-b780-4b66-b3eb-fee7643ef81c",solution:"3",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"51536ba1-e597-4ad6-889e-da2f6b30e2bd",solution:"-3",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"charlie"),(0,i.kt)("td",{parentName:"tr",align:"left"},"12345678"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"4f07fa06-d3ff-49db-82ce-cd8632c67d84",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"d2ebd64c-8b98-4663-9eae-3fcd0f8552e6",solution:"-4",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"donald"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123456789"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"f0c5928e-9a39-48c8-bcb7-1b2880ba175e",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"ab408c87-9091-48f6-9e62-d401dd528399",solution:"5",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"eve"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234567890"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"521b7f5f-407b-4014-ada2-55d6376de9e1",solution:"9",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"0c9e1541-20ec-4ac0-b525-e5c1197c6700",solution:"5",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"frederick"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11111111"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"20936c4d-0147-4755-992a-6f6a217d7044",solution:"8",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"f62d0c99-c687-4122-a26e-4962c3ff70b3",solution:"0",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,i.kt)("td",{parentName:"tr",align:"left"},"123123"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"e662e73f-3299-474a-86ca-3dc3a415549d",solution:"3",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"ba26c8da-572c-4736-996c-597bd13e44c7",solution:"0",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hanna"),(0,i.kt)("td",{parentName:"tr",align:"left"},"password"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"af45e7bc-1898-4790-a2e6-71bf311c2b95",solution:"7",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"6f718695-6297-49a6-9b38-f8bd5faae01c",solution:"37",mdxType:"Answer"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ian"),(0,i.kt)("td",{parentName:"tr",align:"left"},"picture1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"a61c5db0-31e2-4c16-86d7-b8b518497ac8",solution:"3",mdxType:"Answer"})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Z,{type:"string",webKey:"3d1d3b0b-e008-403a-b2b3-b344a1b6582f",solution:"-3",mdxType:"Answer"})))))),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Iterierte Quersumme")," ist die Quersumme, die entsteht, wenn man solange immer wieder die Quersumme ausrechnet, bis nur noch eine einzige Ziffer \xfcbrig bleibt. F\xfcr die Zahl 97 lautet die normale Quersumme 16, berechnet man davon wiederum die Quersumme, so entsteht die iterierte Quersumme: ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"."),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Alternierende Quersumme")," entsteht durch abwechslungweises Addieren und Subtrahieren der einzelnen Ziffern (f\xfcr 1234 lautet diese 1 - 2 + 3 - 4 = -2)."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"tabelle-vervollst\xe4ndigen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Tabelle vervollst\xe4ndigen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vervollst\xe4ndigen Sie die oben stehende Tabelle. Anstelle der in den Passw\xf6rtern enthaltenen Buchstaben k\xf6nnen Sie die unten stehenden Zahlen einsetzen."),(0,i.kt)("div",{className:"slim-table no-table-header"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A B C D E F G H I _J _K _L _M _N _O _P _Q _R _S _T _U _V _W _X _Y _Z"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Zahlen"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26")))))),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Welche der beiden Funktionen w\xfcrden Sie w\xe4hlen, um die Passw\xf6rter zu speichern?")),(0,i.kt)(s.Z,{type:"text",webKey:"7eb652cd-88a4-41d8-a426-4bd2d7dbcec4",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"Welche Probleme sehen Sie bei beiden Funktionen?")),(0,i.kt)(s.Z,{type:"text",webKey:"e1cecdb8-b606-409e-ae94-64827efe06cf",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wunsch-injektivi\xe4t"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Wunsch: ",(0,i.kt)("strong",{parentName:"h5"},"Injektivi\xe4t"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Zu jeder Pr\xfcfsumme geh\xf6rt h\xf6chstens ein Passwort. Oder anders formuliert: Kollisionen sollen vermieden werden. Das bedeutet, dass jedes Passwort eine andere Pr\xfcfsumme erhalten soll."))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Injektivit\xe4t",options:{width:"500px"},isInline:!1,src:n(133967).Z,alt:"Injektivit\xe4t --width=500px",mdxType:"Image"})),(0,i.kt)("h2",{id:"bessere-pr\xfcfsummen"},"Bessere Pr\xfcfsummen?!"),(0,i.kt)("p",null,"Nachfolgend eine weitere Liste mit Vorschl\xe4gen f\xfcr Pr\xfcfsummen."),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Benutzername"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Passwort"),(0,i.kt)("th",{parentName:"tr",align:"left"},"???"),(0,i.kt)("th",{parentName:"tr",align:"left"},"???"),(0,i.kt)("th",{parentName:"tr",align:"left"},"???"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234567"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7654321"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3456789"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5040")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bob"),(0,i.kt)("td",{parentName:"tr",align:"left"},"qwerty"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ytrewq"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sygtva"),(0,i.kt)("td",{parentName:"tr",align:"left"},"17595000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"charlie"),(0,i.kt)("td",{parentName:"tr",align:"left"},"abc123"),(0,i.kt)("td",{parentName:"tr",align:"left"},"321cba"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cde345"),(0,i.kt)("td",{parentName:"tr",align:"left"},"36")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"donald"),(0,i.kt)("td",{parentName:"tr",align:"left"},"million2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2noillim"),(0,i.kt)("td",{parentName:"tr",align:"left"},"oknnkqp4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"63685440")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"eve"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"000000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"222222"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"frederick"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1234"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4321"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3456"),(0,i.kt)("td",{parentName:"tr",align:"left"},"24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iloveyou"),(0,i.kt)("td",{parentName:"tr",align:"left"},"uoyevoli"),(0,i.kt)("td",{parentName:"tr",align:"left"},"knqygaqw"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1403325000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hanna"),(0,i.kt)("td",{parentName:"tr",align:"left"},"password1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1drowssap"),(0,i.kt)("td",{parentName:"tr",align:"left"},"rcuuyqtf3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"143475840")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ian"),(0,i.kt)("td",{parentName:"tr",align:"left"},"qqww1122"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2211wwqq"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ssyy3344"),(0,i.kt)("td",{parentName:"tr",align:"left"},"611524"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-funktionen-erkennen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Funktionen erkennen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erkennen Sie, wie die Pr\xfcfsummen in den hintersten drei Spalten berechnet werden?"),(0,i.kt)(s.Z,{type:"text",webKey:"ead7f2f2-e792-48c8-a6cc-994757348e75",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wunsch-unumkehrbarkeit"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Wunsch: ",(0,i.kt)("strong",{parentName:"h5"},"Unumkehrbarkeit"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aus der Pr\xfcfsumme soll nicht auf das Passwort geschlossen werden k\xf6nnen."))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-zusatzaufgabe-sicheres-einloggen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\u2b50\ufe0f Zusatzaufgabe Sicheres Einloggen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie funktioniert der Anmeldevorgang an den Computern der Schule, wenn Benutzername und Passwort von einem Server \xfcberpr\xfcft werden muss? Was wird in welcher Form \xfcbertragen?"),(0,i.kt)(s.Z,{type:"text",webKey:"d2dcaf7f-9480-495f-9142-1f606e424069",mdxType:"Answer"}))),(0,i.kt)(s.Z,{type:"text",webKey:"b146e1f3-ef8c-4ed7-ade2-428829f619fa",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=994723"},"rothe"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},133967:function(e,t,n){t.Z=n.p+"assets/images/injective-8ea39d04b575f712e8d333178a8ad8f1.png"}}]);