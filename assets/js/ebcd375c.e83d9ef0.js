"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[60498],{3239:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),i="noLoginAlert_boZc",a=n(73727),o=n(71217),c=n(21314),l=(0,o.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return Z}});var r=n(67294),i=n(26528),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},o=n(86010),c=n(71217),l=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,i=void 0;if(l.test(t)){var o=function(e){if(l.test(e))return e.match(l).groups.klass}(t);i=a[o],n=""+t.replace(l,"")}return r.createElement("option",{value:t,className:i},n)},s=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),h=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return a[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n,i,c=(0,m.Z)(),l=r.useState("unchecked"),h=l[0],v=l[1],k=(0,p.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&k.loaded&&(v("unchecked"),k.setData({value:t,type:"string"}))},b=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return k.loaded}),(function(e){e&&b(k.value)}))}),[k]),r.useEffect((function(){k.loaded&&b(k.value)}),[k,c]),c?k.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:g(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return b(k.value)},className:(0,o.default)(a[h],a.checkButton)},r.createElement(s.G,{icon:(i=h,"correct"===i?d.f8k:"wrong"===i?d.nYk:d.sph)}))):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")})),k=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return a[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},b=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),i=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return i(e.target.value,a)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return i(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement("div",null,"Loading...")})),w=void 0,S=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),N=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}return t},E=(0,c.Pi)((function(e){var t=r.useState(!1),i=t[0],c=t[1],l=r.useState(!1),u=l[0],s=l[1],d=r.useRef(null),m=(0,p.oR)("documentStore").find(e.webKey),h=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){w=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(s(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",h))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",h)}}),[]);return w&&u&&m.loaded?r.createElement("div",{onFocus:function(){return!i&&c(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||m.readonly,className:(0,o.default)(a.quillAnswer,e.monospace&&a.monospace,i?void 0:"disable-toolbar"),value:e.isLegacy?m.legacyData.value:m.value||"",onChange:function(t,n,r,i){var a,o;a=t,void 0===o&&(o=0),!e.isLegacy&&m.loaded&&u&&(0,f.z)((function(){m.value=a}))},modules:{toolbar:e.toolbar?N(e.toolbar):S,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),x=n(3239),K=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(b,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return K("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return K("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),z=n(78982),P=n(97762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,z.cl)(e.id,t)}}}:function(){}},Z=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),a=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,A(e)),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(b,e)):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")}))},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return c},RN:function(){return l}});var r=n(68949),i=n(67294),a=n(16731),o=function(e){return i.useContext(a.Nx)[e]},c=function(e,t,n,o,c,l){var u=i.useState(!1),s=u[0],d=u[1];i.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,o,c,l).finally((function(){d(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){s&&r&&a.Ux.documentStore.provideDocument(e(),t,n,o,c,l,!0)}))}),[s]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,o,c,l,!0)}))}),[s])},l=function(e){var t=i.useState(!1),n=t[0],o=t[1];console.log("initial load"),i.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){o(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&(console.log("load from view"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&(console.log("load from offlineChecker"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return i},Vj:function(){return r},ly:function(){return a}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return a},cl:function(){return o}});var r=864e5,i=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var a=JSON.parse(i);if("object"==typeof a){var o=a[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(u){return n}},o=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},17292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(84384),c=n(52084),l=["components"],u={title:"Kerckhoffs' Prinzip"},s="Kerckhoffs' Prinzip",d={unversionedId:"Kryptologie/Symmetrisch/kerckhoffs",id:"version-24K/Kryptologie/Symmetrisch/kerckhoffs",isDocsHomePage:!1,title:"Kerckhoffs' Prinzip",description:"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden.",source:"@site/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/kerckhoffs",permalink:"/24K/Kryptologie/Symmetrisch/kerckhoffs",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",tags:[],version:"24K",sidebarPosition:8,frontMatter:{title:"Kerckhoffs' Prinzip"},sidebar:"version-24K/sidebar",previous:{title:"Krypto-Familie",permalink:"/24K/Kryptologie/Symmetrisch/krypto-family"},next:{title:"Schl\xfcsselaustausch",permalink:"/24K/Kryptologie/Asymmetrisch/key-exchange"}},f=[{value:"Das Prinzip von Kerckhoffs",id:"das-prinzip-von-kerckhoffs",children:[],level:2},{value:"Formulierung von Claude Shannon",id:"formulierung-von-claude-shannon",children:[],level:2},{value:"Erkl\xe4rung von Bruce Schneier",id:"erkl\xe4rung-von-bruce-schneier",children:[],level:2}],m={toc:f};function p(e){var t=e.components,u=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kerckhoffs-prinzip"},"Kerckhoffs' Prinzip"),(0,a.kt)("p",null,"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden."),(0,a.kt)("h2",{id:"das-prinzip-von-kerckhoffs"},"Das Prinzip von Kerckhoffs"),(0,a.kt)("p",null,"Eines der wichtigsten Prinzipien in der Kryptologie stammt von August Kerckhoffs:"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabDie Sicherheit eines Kryptosystems darf nicht von der Geheimhaltung des Algorithmus abh\xe4ngen."),(0,a.kt)("p",{parentName:"blockquote"},"Die Sicherheit gr\xfcndet sich nur auf die Geheimhaltung des Schl\xfcssels.\xbb\n\u2013 Auguste Kerckhoffs (1835 - 1903)"))),(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:Auguste_Kerckhoffs.jpg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"Auguste Kerckhoffs",options:{width:"10em",noMargins:!0},isInline:!1,src:n(61094).Z,alt:"Auguste Kerckhoffs --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)("h2",{id:"formulierung-von-claude-shannon"},"Formulierung von Claude Shannon"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("p",{parentName:"div"},"Claude Shannon hat dasselbe kurz und pr\xe4gnant ausgedr\xfcckt:"),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabThe enemy knows the system!\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Claude Shannon (1916 - 2001)"))),(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg",licence:"CC-SA 2.0",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",edited:!1},caption:"Claude Shannon",options:{width:"10em",noMargins:!0},isInline:!1,src:n(53394).Z,alt:"Claude Shannon --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)("h2",{id:"erkl\xe4rung-von-bruce-schneier"},"Erkl\xe4rung von Bruce Schneier"),(0,a.kt)("p",null,"Der renommierte Kryptologe Bruce Schneier erkl\xe4rt das Prinzip von Kerckhoffs' mit einer kurzen Geschichte ",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabMan unterscheidet zwei Arten von Verschl\xfcsselung: Verschl\xfcsselung, die deine kleine Schwester daran hindert, deine Dateien zu lesen, und die Verschl\xfcsselung, die bedeutende Regierungen daran hindert, sie zu lesen.\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier")),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabWenn ich einen Brief in einen Safe einschliesse, diesen irgendwo in New York verstecke und dir dann sage, du sollst den Brief lesen, hat dies nichts mit Sicherheit zu tun."),(0,a.kt)("p",{parentName:"blockquote"},"Das ist ",(0,a.kt)("strong",{parentName:"p"},"Verschleierung"),"."),(0,a.kt)("p",{parentName:"blockquote"},"Angenommen, ich schliesse einen Brief in einen Safe ein, \xfcbergebe dir den Safe mitsamt Bauplan, hundert weiteren, identischen Safes und deren geheimer Kombination, so dass du und die besten Codeknacker den Schliessmechanismus studieren k\xf6nnen."),(0,a.kt)("p",{parentName:"blockquote"},"Wenn du den Brief trotzdem nicht lesen kannst, ",(0,a.kt)("strong",{parentName:"p"},"dann spricht man von Sicherheit"),".\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier"))),(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Rama",source:"https://commons.wikimedia.org/wiki/File:Bruce_Schneier_at_CoPS2013-IMG_9055.jpg",licence:"CC-BY-SA",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",edited:!1},caption:"Bruce Schneier",options:{width:"10em",noMargins:!0},isInline:!1,src:n(90490).Z,alt:"Bruce Schneier --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)(c.Z,{type:"text",webKey:"8db592e4-1a5c-44eb-8974-cccda9dd2af1",placeholder:"Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://www.schneier.com/books/applied-cryptography-2preface/"},"Applied Cryptography"),", Bruce Schneier, Vorwort",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},61094:function(e,t,n){t.Z=n.p+"assets/images/auguste_kerckhoffs-ae48ee0de6e8bbbee1e3bb1cd86bc4f0.jpg"},90490:function(e,t,n){t.Z=n.p+"assets/images/bruce_schneier-6f0cabe3a5af1dc7e571a7986ba25c85.jpg"},53394:function(e,t,n){t.Z=n.p+"assets/images/claude_shannon-06065251902711206036fb35df664804.jpg"}}]);