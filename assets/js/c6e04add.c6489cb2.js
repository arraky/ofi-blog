"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5723],{3239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r="noLoginAlert_boZc",i=a(73727),l=a(71217),s=a(21314),o=(0,l.Pi)((function(){return(0,s.o)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,a){a.d(t,{Z:function(){return B}});var n=a(67294),r=a(26528),i=a(72389),l=a(71217),s=a(79265),o=a(21314),c=a(78982),m=a(46858),p=n.createContext(void 0),u=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},d=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:u(t),type:t.type,size:"array"===t.type?t.size:void 0});var a=function(){if(t.id){var e=function(){try{return(0,m.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,c.rV)(t.id,e);if(a&&a.value)return{data:{value:a.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,c.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:u(t),type:t.type,size:t.size},a):e.getOrCreateDocument(t.webKey,t.type,{value:u(t),type:t.type},a)},k=(0,l.Pi)((function(e){var t=(0,o.o)("documentStore"),a=n.useState(d(t,e))[0];return(0,i.Z)()?n.createElement(p.Provider,{value:a},e.children):n.createElement("div",null,"Loading")})),g={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},N=a(86010),f=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){var t=e.value,a=t,r=void 0;if(f.test(t)){var i=function(e){if(f.test(e))return e.match(f).groups.klass}(t);r=g[i],a=""+t.replace(f,"")}return n.createElement("option",{value:t,className:r},a)},v=a(92814),y=a(51436),b=a(68949),w=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),x=function(e){return g[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},E=(0,l.Pi)((function(e){var t,a=n.useState("unchecked"),r=a[0],i=a[1],l=n.useContext(p),s=function(e){i("unchecked"),l.setData({value:e,type:"string"})},o=function(t){var a=e.sanitizer?e.sanitizer:function(e){return e};i(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,b.U5)((function(){return l.loaded}),(function(e){e&&o(l.data.value)}))}),[]),n.createElement("div",{className:g.answer},e.label&&n.createElement("label",null,e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return s(e.target.value)},value:l.data.value,className:x(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return n.createElement(h,{value:e,key:t})}))):n.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&n.createElement("button",{onClick:function(){return o(l.data.value)},className:(0,N.default)(g[r],g.checkButton)},n.createElement(v.G,{icon:(t=r,"correct"===t?y.f8k:"wrong"===t?y.nYk:y.sph)})))})),S=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),O=function(e){return g[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},z=(0,l.Pi)((function(e){var t=n.useContext(p),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return n.createElement("div",{className:g.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:r,className:O(r),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(h,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),R=void 0,C=(0,l.Pi)((function(e){var t=n.useState(!1),r=t[0],i=t[1],l=n.useState(!1),s=l[0],o=l[1],c=n.useRef(null),m=n.useContext(p),u=function(e){e.preventDefault()};n.useEffect((function(){var e=!0;return function(e){if(R)return e();Promise.all([Promise.all([a.e(2930),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(3312),a.e(1940)]).then(a.bind(a,11940)),Promise.all([a.e(3312),a.e(7617)]).then(a.bind(a,37617))]).then((function(t){R=t[0].default;var a=t[1].default,n=t[2].default;a.register("modules/imageCompress",n),e()}))}((function(){e&&(o(!0),c&&c.current&&c.current.editor.getModule("toolbar").container.addEventListener("mousedown",u))})),function(){e=!1,c&&c.current&&c.current.editor.getModule("toolbar").container.removeEventListener("mousedown",u)}}),[]);return R&&s?n.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&n.createElement("h6",null,e.label),n.createElement(R,{ref:c,theme:"snow",readOnly:!m.loaded||m.isReadonly,className:(0,N.default)(g.quillAnswer,r?void 0:"disable-toolbar"),value:m.loaded?m.data.value||"":"Laden...",onChange:function(e,t,a,n){var r,i;r=e,void 0===i&&(i=0),s&&m.setData({value:r,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement("div",null,"Loading...")})),K=a(3239),D=(0,l.Pi)((function(){var e=n.useContext(p),t=e.legacyData;return t?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement(p.Provider,{value:new s.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&n.createElement(C,{type:"text",webKey:e.webKey}),"string"===e.data.type&&n.createElement(E,{type:"string",webKey:e.webKey}),"array"===e.data.type&&n.createElement(z,{type:"array",webKey:e.webKey,size:e.data.size})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),_=(0,l.Pi)((function(){return n.useContext(p).isOffline?n.createElement("div",null,n.createElement("span",{className:(0,N.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),B=(0,l.Pi)((function(e){var t=(0,o.o)("msalStore");return n.createElement(k,e,n.createElement("div",{"data--web-key":e.webKey},n.createElement(K.Z,null),t.loggedIn&&n.createElement(D,null),t.loggedIn&&n.createElement(_,null),"text"===e.type&&n.createElement(C,e),"string"===e.type&&n.createElement(E,e),"array"===e.type&&n.createElement(z,e)))}))},21314:function(e,t,a){a.d(t,{o:function(){return i}});var n=a(67294),r=a(32930),i=function(e){return n.useContext(r.Nx)[e]}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return i}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return i},cl:function(){return l}});var n=864e5,r=2592e6,i=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?a:l}return a}}var o=localStorage.getItem(e);return o?JSON.parse(o):a}catch(c){return a}},l=function(e,t){try{if(t){var a=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=i(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},95700:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(77960),s=["components"],o={title:"XOR-Verschl\xfcsselung"},c="XOR-Verschl\xfcsselung [^1]",m={unversionedId:"Kryptologie/Symmetrisch/xor",id:"version-24K/Kryptologie/Symmetrisch/xor",isDocsHomePage:!1,title:"XOR-Verschl\xfcsselung",description:"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen 0 und 1 zur Verf\xfcgung stehen.",source:"@site/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/03-xor.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/xor",permalink:"/24K/Kryptologie/Symmetrisch/xor",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/03-xor.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"XOR-Verschl\xfcsselung"},sidebar:"version-24K/sidebar",previous:{title:"Codierung",permalink:"/24K/Kryptologie/Symmetrisch/codierung"},next:{title:"Blockchiffre",permalink:"/24K/Kryptologie/Symmetrisch/blockchiffre"}},p=[],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xor-verschl\xfcsselung-"},"XOR-Verschl\xfcsselung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," zur Verf\xfcgung stehen."),(0,i.kt)("p",null,"Nebst den bekannten Operationen,  ",(0,i.kt)("em",{parentName:"p"},"Addition, SUbtraktion, Multiplikation und Division"),", kann ein Computer auch noch weitere Operationen auf zwei Bin\xe4rzahlen anwenden. Eine solche Operation ist das ",(0,i.kt)("strong",{parentName:"p"},"XOR")," (",(0,i.kt)("em",{parentName:"p"},"Exclusive OR"),"):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Exclusive or or exclusive disjunction is a logical operation that is 1 if and only if its arguments differ (one is 1, the other is 0).",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("p",null,"XOR kann auch zur Verschl\xfcsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schl\xfcssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes."),(0,i.kt)("p",null,"Die Wahrheitstabelle sieht folgendermassen aus:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"13em"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"slim-table normal-header card__body"},(0,i.kt)("h3",{parentName:"div",id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"p")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"k")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"c")," = ",(0,i.kt)("em",{parentName:"th"},"p")," ",(0,i.kt)("strong",{parentName:"th"},"XOR")," ",(0,i.kt)("em",{parentName:"th"},"k")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"p"),": ",(0,i.kt)("em",{parentName:"p"},"plain text")," (Klartext) ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"k"),": ",(0,i.kt)("em",{parentName:"p"},"key")," (Schl\xfcssel) ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"c"),": ",(0,i.kt)("em",{parentName:"p"},"cipher")," (Verschl\xfcsselt)"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"13em"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"slim-table normal-header card__body"},(0,i.kt)("h3",{parentName:"div",id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"c")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"k")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"p")," = ",(0,i.kt)("em",{parentName:"th"},"c")," ",(0,i.kt)("strong",{parentName:"th"},"XOR")," ",(0,i.kt)("em",{parentName:"th"},"k")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"))))))),(0,i.kt)("p",null,"Analog zu ROT13 gilt auch hier: Die Verschl\xfcsselung ist identisch mit der Entschl\xfcsselung, da Folgendes gilt:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"c"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"p"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ c \\text{ XOR } k = (p \\text{ XOR } k) \\text{ XOR } k = p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,i.kt)("p",null,"Dies k\xf6nnen Sie mit den Tabellen oben leicht \xfcberpr\xfcfen."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-xor-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie die Bitfolge mit dem angegebenen Schl\xfcssel"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10100 11101 10110")," (Bitfolge des Klartexts)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"00101 01010 11100")," (Bitfolge des Schl\xfcssels)")),(0,i.kt)("h3",{parentName:"div",id:"bitfolge-des-geheimtexts"},"Bitfolge des Geheimtexts"),(0,i.kt)(l.Z,{type:"string",webKey:"79c55c56-7d5f-4c7f-95d3-38aed13e16ad",solution:"100011011101010",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-textverschl\xfcsselung-mit-xor"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Textverschl\xfcsselung mit XOR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sie erhalten von einer Kollegin folgende verschl\xfcsselte Nachricht:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"01010 00100 01010 11011 00000\n")),(0,i.kt)("p",{parentName:"div"},"Als Schl\xfcssel haben Sie das Wort ",(0,i.kt)("inlineCode",{parentName:"p"},"MACHT")," abgemacht."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mit Pentacode codierter Schl\xfcssel  "),(0,i.kt)(l.Z,{type:"string",webKey:"4159b846-71e5-4205-9907-975e3092c00c",solution:"01101 00001 00011 01000 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bin\xe4r entschl\xfcsselte Nachricht"),(0,i.kt)(l.Z,{type:"string",webKey:"c4e4f353-6f68-454a-b0ee-ac23695e61c5",solution:"00111 00101 01001 10011 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klartext (bin\xe4r entschl\xfcsselte Bitfolge mit Pentacode zur\xfcckverwandeln)"),(0,i.kt)(l.Z,{type:"string",webKey:"bd96e44e-96a7-404e-8d55-ed7007e1309a",solution:"GEIST",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-bildverschl\xfcsselung-mit-xor"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Bildverschl\xfcsselung mit XOR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Zeichnen Sie ein 5x5-Pixel-Bild (mit Hilfe des interaktiven Tools auf der vorherigen Seite: Kopieren Sie das Bild und f\xfcgen es unten ein. Halten Sie auch die Bitfolge fest)"),(0,i.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie die Bitfolge mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"li"},"ABCDE"),"."),(0,i.kt)("li",{parentName:"ol"},"Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest)."),(0,i.kt)("li",{parentName:"ol"},"Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?")),(0,i.kt)(l.Z,{type:"text",webKey:"87a642b5-0a0b-4da3-a808-a4629294f359",mdxType:"Answer"}))),(0,i.kt)(l.Z,{type:"text",webKey:"b978535b-b455-4a60-aa44-8a32aac4a899",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=353789"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"http://mathworld.wolfram.com/XOR.html"},"Germundsson, Roger; Weisstein, Eric"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},26528:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}a.d(t,{Z:function(){return l}});var r=a(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function l(){l=function(e,t){return new a(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function a(e,n,i){var l=new RegExp(e,n);return t.set(l,i||t.get(e)),(0,r.Z)(l,a.prototype)}function s(e,a){var n=t.get(a);return Object.keys(n).reduce((function(t,a){return t[a]=e[n[a]],t}),Object.create(null))}return i(a,RegExp),a.prototype.exec=function(t){var a=e.exec.call(this,t);return a&&(a.groups=s(a,this)),a},a.prototype[Symbol.replace]=function(a,r){if("string"==typeof r){var i=t.get(this);return e[Symbol.replace].call(this,a,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,a,(function(){var e=arguments;return"object"!==n(e[e.length-1])&&(e=[].slice.call(e)).push(s(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,a,r)},l.apply(this,arguments)}}}]);