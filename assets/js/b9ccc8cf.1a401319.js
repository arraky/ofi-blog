"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7098],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(67294),a=n(26528),i=n(72389),o=n(71217),l=n(79265),c=n(21314),u=n(78982),s=n(46858),d=r.createContext(void 0),p=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},m=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:p(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,u.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,u.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:p(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:p(t),type:t.type},n)},f=(0,o.Pi)((function(e){var t=(0,c.o)("documentStore"),n=r.useState(m(t,e))[0];return(0,i.Z)()?r.createElement(d.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),h={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},g=n(86010),v=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,n=t,a=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);a=h[i],n=""+t.replace(v,"")}return r.createElement("option",{value:t,className:a},n)},k=n(92814),b=n(51436),w=n(68949),S=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){return h[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t,n=r.useState("unchecked"),a=n[0],i=n[1],o=r.useContext(d),l=function(e){i("unchecked"),o.setData({value:e,type:"string"})},c=function(t){var n=e.sanitizer?e.sanitizer:function(e){return e};i(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,w.U5)((function(){return o.loaded}),(function(e){e&&c(o.data.value)}))}),[]),r.createElement("div",{className:h.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return l(e.target.value)},value:o.data.value,className:N(o.data.value),disabled:!o.loaded},e.select.map((function(e,t){return r.createElement(y,{value:e,key:t})}))):r.createElement("input",{type:"text",onChange:function(e){return l(e.target.value)},value:o.data.value,disabled:!o.loaded||o.isReadonly}),e.solution&&r.createElement("button",{onClick:function(){return c(o.data.value)},className:(0,g.default)(h[a],h.checkButton)},r.createElement(k.G,{icon:(t=a,"correct"===t?b.f8k:"wrong"===t?b.nYk:b.sph)})))})),x=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),C=function(e){return h[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},_=(0,o.Pi)((function(e){var t=r.useContext(d),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return r.createElement("div",{className:h.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:C(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(y,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.isReadonly})})))})),K=void 0,D=(0,o.Pi)((function(e){var t=r.useState(!1),a=t[0],i=t[1],o=r.useState(!1),l=o[0],c=o[1],u=r.useRef(null),s=r.useContext(d),p=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(K)return e();Promise.all([Promise.all([n.e(2930),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(3312),n.e(1940)]).then(n.bind(n,11940)),Promise.all([n.e(3312),n.e(7617)]).then(n.bind(n,37617))]).then((function(t){K=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",p))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",p)}}),[]);return K&&l?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(K,{ref:u,theme:"snow",readOnly:!s.loaded||s.isReadonly,className:(0,g.default)(h.quillAnswer,a?void 0:"disable-toolbar"),value:s.loaded?s.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),l&&s.setData({value:a,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),z=n(3239),P=(0,o.Pi)((function(){var e=r.useContext(d),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(d.Provider,{value:new l.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(D,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(E,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(_,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),Z=(0,o.Pi)((function(){return r.useContext(d).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,g.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),j=(0,o.Pi)((function(e){var t=(0,c.o)("msalStore");return r.createElement(f,e,r.createElement("div",{"data--web-key":e.webKey},r.createElement(z.Z,null),t.loggedIn&&r.createElement(P,null),t.loggedIn&&r.createElement(Z,null),"text"===e.type&&r.createElement(D,e),"string"===e.type&&r.createElement(E,e),"array"===e.type&&r.createElement(_,e)))}))},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},30346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(84384),l=n(77960),c=["components"],u={title:"Kerckhoffs' Prinzip"},s="Kerckhoffs' Prinzip",d={unversionedId:"Kryptologie/Symmetrisch/kerckhoffs",id:"version-24o/Kryptologie/Symmetrisch/kerckhoffs",isDocsHomePage:!1,title:"Kerckhoffs' Prinzip",description:"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden.",source:"@site/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/07-kerckhoffs.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/kerckhoffs",permalink:"/24o/Kryptologie/Symmetrisch/kerckhoffs",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/07-kerckhoffs.md",tags:[],version:"24o",sidebarPosition:7,frontMatter:{title:"Kerckhoffs' Prinzip"},sidebar:"version-24o/sidebar",previous:{title:"Krypto-Familie",permalink:"/24o/Kryptologie/Symmetrisch/krypto-family"}},p=[{value:"Das Prinzip von Kerckhoffs",id:"das-prinzip-von-kerckhoffs",children:[],level:2},{value:"Formulierung von Claude Shannon",id:"formulierung-von-claude-shannon",children:[],level:2},{value:"Erkl\xe4rung von Bruce Schneier",id:"erkl\xe4rung-von-bruce-schneier",children:[],level:2}],m={toc:p};function f(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kerckhoffs-prinzip"},"Kerckhoffs' Prinzip"),(0,i.kt)("p",null,"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden."),(0,i.kt)("h2",{id:"das-prinzip-von-kerckhoffs"},"Das Prinzip von Kerckhoffs"),(0,i.kt)("p",null,"Eines der wichtigsten Prinzipien in der Kryptologie stammt von August Kerckhoffs:"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabDie Sicherheit eines Kryptosystems darf nicht von der Geheimhaltung des Algorithmus abh\xe4ngen."),(0,i.kt)("p",{parentName:"blockquote"},"Die Sicherheit gr\xfcndet sich nur auf die Geheimhaltung des Schl\xfcssels.\xbb\n\u2013 Auguste Kerckhoffs (1835 - 1903)"))),(0,i.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:Auguste_Kerckhoffs.jpg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"Auguste Kerckhoffs",options:{width:"10em",noMargins:!0},isInline:!1,src:n(66861).Z,alt:"Auguste Kerckhoffs --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)("h2",{id:"formulierung-von-claude-shannon"},"Formulierung von Claude Shannon"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("p",{parentName:"div"},"Claude Shannon hat dasselbe kurz und pr\xe4gnant ausgedr\xfcckt:"),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabThe enemy knows the system!\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Claude Shannon (1916 - 2001)"))),(0,i.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg",licence:"CC-SA 2.0",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",edited:!1},caption:"Claude Shannon",options:{width:"10em",noMargins:!0},isInline:!1,src:n(74916).Z,alt:"Claude Shannon --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)("h2",{id:"erkl\xe4rung-von-bruce-schneier"},"Erkl\xe4rung von Bruce Schneier"),(0,i.kt)("p",null,"Der renommierte Kryptologe Bruce Schneier erkl\xe4rt das Prinzip von Kerckhoffs' mit einer kurzen Geschichte ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,i.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabMan unterscheidet zwei Arten von Verschl\xfcsselung: Verschl\xfcsselung, die deine kleine Schwester daran hindert, deine Dateien zu lesen, und die Verschl\xfcsselung, die bedeutende Regierungen daran hindert, sie zu lesen.\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier")),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\xabWenn ich einen Brief in einen Safe einschliesse, diesen irgendwo in New York verstecke und dir dann sage, du sollst den Brief lesen, hat dies nichts mit Sicherheit zu tun."),(0,i.kt)("p",{parentName:"blockquote"},"Das ist ",(0,i.kt)("strong",{parentName:"p"},"Verschleierung"),"."),(0,i.kt)("p",{parentName:"blockquote"},"Angenommen, ich schliesse einen Brief in einen Safe ein, \xfcbergebe dir den Safe mitsamt Bauplan, hundert weiteren, identischen Safes und deren geheimer Kombination, so dass du und die besten Codeknacker den Schliessmechanismus studieren k\xf6nnen."),(0,i.kt)("p",{parentName:"blockquote"},"Wenn du den Brief trotzdem nicht lesen kannst, ",(0,i.kt)("strong",{parentName:"p"},"dann spricht man von Sicherheit"),".\xbb"),(0,i.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier"))),(0,i.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Rama",source:"https://commons.wikimedia.org/wiki/File:Bruce_Schneier_at_CoPS2013-IMG_9055.jpg",licence:"CC-BY-SA",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",edited:!1},caption:"Bruce Schneier",options:{width:"10em",noMargins:!0},isInline:!1,src:n(31411).Z,alt:"Bruce Schneier --no-margins --width=10em",mdxType:"Image"})))),(0,i.kt)(l.Z,{type:"text",webKey:"8db592e4-1a5c-44eb-8974-cccda9dd2af1",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.schneier.com/books/applied-cryptography-2preface/"},"Applied Cryptography"),", Bruce Schneier, Vorwort",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},66861:function(e,t,n){t.Z=n.p+"assets/images/auguste_kerckhoffs-ae48ee0de6e8bbbee1e3bb1cd86bc4f0.jpg"},31411:function(e,t,n){t.Z=n.p+"assets/images/bruce_schneier-6f0cabe3a5af1dc7e571a7986ba25c85.jpg"},74916:function(e,t,n){t.Z=n.p+"assets/images/claude_shannon-06065251902711206036fb35df664804.jpg"},26528:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return o}});var a=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function l(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=l(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}}}]);