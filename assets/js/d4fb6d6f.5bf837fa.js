"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[94248],{3239:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(67294),s="noLoginAlert_boZc",r=t(73727),m=t(71217),i=t(21314),l=(0,m.Pi)((function(){return(0,i.oR)("msalStore").loggedIn?null:n.createElement("div",{className:s},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,a,t){t.d(a,{x:function(){return _},Z:function(){return U}});var n=t(67294),s=t(26528),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},m=t(86010),i=t(71217),l=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var a=e.value,t=a,s=void 0;if(l.test(a)){var m=function(e){if(l.test(e))return e.match(l).groups.klass}(a);s=r[m],t=""+a.replace(l,"")}return n.createElement("option",{value:a,className:s},t)},p=t(92814),o=t(51436),u=t(68949),d=t(72389),h=t(21314),N=t(74322),k=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},f=(0,i.Pi)((function(e){var a,t,s,i=(0,d.Z)(),l=n.useState("unchecked"),k=l[0],f=l[1],v=(0,h.oR)("documentStore").find(e.webKey),w=function(a){!e.isLegacy&&v.loaded&&(f("unchecked"),v.setData({value:a,type:"string"}))},y=function(a){if(e.checker)return f(e.checker(a)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};f(t(a)===t(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,u.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),n.useEffect((function(){v.loaded&&y(v.value)}),[v,i]),i?v.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(a=v.legacyData)?void 0:a.value:v.value,className:g(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,a){return n.createElement(c,{value:e,key:a})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return y(v.value)},className:(0,m.default)(r[k],r.checkButton)},n.createElement(p.G,{icon:(s=k,"correct"===s?o.f8k:"wrong"===s?o.nYk:o.sph)}))):n.createElement(N.Z,null):n.createElement("div",null,"SSR")})),v=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return r[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,i.Pi)((function(e){var a,t=(0,h.oR)("documentStore").find(e.webKey),s=function(a,n){if(void 0===n&&(n=0),!e.isLegacy&&t.loaded){var s=[].concat(t.data.value.slice(0,n),[a],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:s}))}};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(a=t.legacyData)?void 0:a.value)||[]:t.data.value).map((function(a,r){return e.select?n.createElement("select",{key:r,onChange:function(e){return s(e.target.value,r)},value:a,className:w(a),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,a){return n.createElement(c,{value:e,key:a})}))):n.createElement("input",{key:r,type:"text",onChange:function(e){return s(e.target.value,r)},value:a,disabled:!t.loaded||t.readonly})}))):n.createElement(N.Z,null)})),b=t(87462),x=t(75552),S=(0,i.Pi)((function(e){var a=(0,h.oR)("documentStore").find(e.webKey);return a.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(x.Z,(0,b.Z)({model:a},e))):n.createElement(N.Z,null)})),E=t(3239),D=function(e,a){"code"!==a.type&&("use_legacy"===e?(a.setData(a.legacyData),a.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,u.z)((function(){a.legacyData=void 0,a.legacyCleanup&&a.legacyCleanup()}))}))):(0,u.z)((function(){a.legacyData=void 0,a.legacyCleanup&&a.legacyCleanup()})))},A=(0,i.Pi)((function(e){var a=(0,h.oR)("documentStore").find(e.webKey);return a.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===a.type&&n.createElement(S,{type:"text",webKey:a.webKey,isLegacy:!0}),"string"===a.type&&n.createElement(f,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===a.type&&n.createElement(y,{type:"array",webKey:e.webKey,size:a.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",a)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",a)}},"Nein (verwerfen)"))):null})),M=(0,i.Pi)((function(e){return(0,h.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,m.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=t(46858),z=t(78982),K=t(97762),_=function(e){return e.replace(/\s+/g,"").toUpperCase()},R=function(e){if(!e.id)return function(){};var a=function(){try{return(0,L.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,z.rV)(e.id,a);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,z.cl)(e.id,a)}}}:function(){}},U=(0,i.Pi)((function(e){var a=(0,h.oR)("documentStore"),t=(0,h.oR)("msalStore"),s=a.find(e.webKey),r=(0,d.Z)();return(0,h.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,R(e)),r?s?n.createElement("div",{"data--web-key":e.webKey},n.createElement(E.Z,null),t.loggedIn&&n.createElement(A,e),t.loggedIn&&n.createElement(M,{webKey:e.webKey}),"text"===e.type&&n.createElement(S,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(y,e)):n.createElement(N.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(67294),s=t(86010),r="loader_2rVr",m="badge_2s0E",i=t(71217),l=t(92814),c=t(51436),p=(0,i.Pi)((function(){return n.createElement("div",{className:(0,s.default)(r)},n.createElement(l.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,s.default)("badge",m)},"Laden..."))}))},75552:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(67294),s="quillEditor_1XRF",r="quillAnswer_oQOS",m="monospace_3rFN",i="disableToolbar_gntN",l=t(86010),c=t(71217),p=t(74322),o=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),d=function(e){var a=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),a.push(t)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),a.push(n)}if(e.color||e.background){var s=[];e.color&&s.push({color:[]}),e.background&&s.push({background:[]}),a.push(s)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),a.push(r)}if(e.formula||e.image){var m=[];e.formula&&m.push("formula"),e.image&&m.push("image"),a.push(m)}return a},h=(0,c.Pi)((function(e){var a=n.useState(!1),c=a[0],h=a[1],N=n.useState(!1),k=N[0],g=N[1],f=n.useRef(null),v=e.model,w=function(e){e.preventDefault()};n.useEffect((function(){var a=!0;return function(e,a){if(void 0===a&&(a={}),o)return e();var n=[Promise.all([t.e(97762),t.e(82930),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940))],s={"react-quill":0,quill:1,"react-image-compress":2};a.formula&&!window.katex&&(s.katex=n.length,n.push(t.e(41008).then(t.bind(t,41008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,50037)))),Promise.all(n).then((function(a){o=a[s["react-quill"]].default;var t=a[s.quill].default,n=a[s["react-image-compress"]].default;if("katex"in s){var r=a[s.katex].default;window.katex=r}t.register("modules/imageCompress",n),e()}))}((function(){a&&(g(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),e.toolbar),function(){a=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return o&&k&&v.loaded?n.createElement("div",{onFocus:function(){return!c&&h(!0)},className:(0,l.default)(s)},n.createElement(o,{ref:f,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,l.default)(r,e.monospace&&m,c?void 0:i),value:v.text||"",onChange:function(a,t,n,s){var r,m;r=a,void 0===m&&(m=0),!e.readonly&&v.canUpdate&&k&&v.setText(r)},modules:{toolbar:e.toolbar?d(e.toolbar):u,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(p.Z,null)}))},21314:function(e,a,t){t.d(a,{oR:function(){return m},ky:function(){return i},RN:function(){return l},aV:function(){return c}});var n=t(68949),s=t(67294),r=t(47678),m=function(e){return s.useContext(r.Nx)[e]},i=function(e,a,t,m,i,l){var c=s.useState(!1),p=c[0],o=c[1];s.useEffect((function(){r.Ux.documentStore.provideDocument(e(),a,t,m,i,l).finally((function(){o(!0)}))}),[]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.userStore.currentView}),(function(n){p&&n&&r.Ux.documentStore.provideDocument(e(),a,t,m,i,l,!0)}))}),[p]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.msalStore.isApiOffline}),(function(n){p&&!n&&r.Ux.documentStore.provideDocument(e(),a,t,m,i,l,!0)}))}),[p])},l=function(e){var a=s.useState(!1),t=a[0],m=a[1];s.useEffect((function(){r.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){m(!0)}))}),[]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.userStore.currentView}),(function(a,n){t&&a&&r.Ux.timedTopicStore.provideTopic(e,!0)}))}),[t]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.msalStore.isApiOffline}),(function(a,n){t&&!a&&n&&r.Ux.timedTopicStore.provideTopic(e,!0)}))}),[t])},c=function(e){var a=s.useState(!1),t=a[0],m=a[1];s.useEffect((function(){r.Ux.policyStore.provideAuthorization(e,!1).finally((function(){m(!0)}))}),[]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.userStore.currentView}),(function(a,n){t&&a&&r.Ux.policyStore.provideAuthorization(e,!0)}))}),[t]),s.useEffect((function(){return(0,n.U5)((function(){return r.Ux.msalStore.isApiOffline}),(function(a,n){t&&!a&&n&&r.Ux.policyStore.provideAuthorization(e,!0)}))}),[t])}},46858:function(e,a,t){t.d(a,{Vx:function(){return s},Vj:function(){return n},ly:function(){return r}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},s=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,a,t){t.d(a,{rV:function(){return r},cl:function(){return m}});var n=864e5,s=2592e6,r=function(e,a,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&i()}catch(a){return}}(),a){var s=localStorage.getItem(a);if(s){var r=JSON.parse(s);if("object"==typeof r){var m=r[e];return void 0===m?t:m}return t}}var l=localStorage.getItem(e);return l?JSON.parse(l):t}catch(c){return t}},m=function(e,a){try{if(a){var t=r(a,void 0,{expiry:Date.now()+s});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(a,JSON.stringify(t))}localStorage.removeItem(e)}catch(n){return}},i=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(a){var t=r(a,void 0,{expiry:e+s});t.expiry&&t.expiry>e&&localStorage.removeItem(a)})),localStorage.setItem("last_cleanup",""+e)}catch(a){return}}},76937:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return h}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=t(84384),i=t(52084),l=["components"],c={title:"Asymmetrie umkehren"},p="Asymmetrie umkehren [^1]",o={unversionedId:"Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren",id:"version-24K/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren",isDocsHomePage:!1,title:"Asymmetrie umkehren",description:"Wir erinnern uns an das Prinzip der reinen asymmetrische Verschl\xfcsselung:",source:"@site/versioned_docs/version-24K/06-Kryptologie/06-Digitale-Signaturen/01-Asymmetrie-Unkehren.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren",permalink:"/24K/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/06-Digitale-Signaturen/01-Asymmetrie-Unkehren.md",tags:[],version:"24K",sidebarPosition:1,frontMatter:{title:"Asymmetrie umkehren"},sidebar:"version-24K/sidebar",previous:{title:"Hash Funktionen",permalink:"/24K/Kryptologie/Hashfunktionen/hash-funktionen"},next:{title:"Integrit\xe4t",permalink:"/24K/Kryptologie/Digitale-Signaturen/Integritaet"}},u=[{value:"Gedankenexperiment",id:"gedankenexperiment",children:[],level:2},{value:"Digitale Signatur",id:"digitale-signatur",children:[],level:2},{value:"Nachteile",id:"nachteile",children:[],level:2}],d={toc:u};function h(e){var a=e.components,c=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,c,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asymmetrie-umkehren-"},"Asymmetrie umkehren ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Wir erinnern uns an das Prinzip der reinen ",(0,r.kt)("a",{parentName:"p",href:"/24K/Kryptologie/Asymmetrisch/asymmetrie"},"asymmetrische Verschl\xfcsselung"),":"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(m.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(61233).Z,mdxType:"Image"})),(0,r.kt)("h2",{id:"gedankenexperiment"},"Gedankenexperiment"),(0,r.kt)("p",null,"Was w\xfcrde geschehen, wenn wir den Vorgang \xe4ndern?"),(0,r.kt)("p",null,"Bei der asymmetrischen Verschl\xfcsselung gibt es zwei Schl\xfcssel, den \xf6ffentlichen und den privaten. Normalerweise verwendet Alice zur Verschl\xfcsselung den \xf6ffentlichen Schl\xfcssel von Bob. Bob wieder entschl\xfcsselt den \xfcbermittelten Geheimtext mit seinem privaten Schl\xfcssel."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Was geschieht, wenn Alice den Klartext mit ",(0,r.kt)("strong",{parentName:"p"},"ihrem eigenen privaten")," Schl\xfcssel \xabverschl\xfcsselt\xbb?")),(0,r.kt)("p",null,"Dies l\xe4sst sich mit Schloss und Schl\xfcssel leider nicht mehr sinnvoll und verst\xe4ndlich darstellen. Wir stellen uns die asymmetrische Ver-/Entschl\xfcsselung einfach als rein mathematische Angelegenheit vor:"),(0,r.kt)("p",null,"Der Verschl\xfcsselungsfunktion (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"E")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"))))),") wird normalerweise der Klartext (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))),") und der \xf6ffentliche Schl\xfcssel (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"))))),") \xfcbergeben, dabei entsteht der Geheimtext (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"))))),"):"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"E"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c = E(p, e)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Die Entschl\xfcsselungsfunktion (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"D")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"D")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"))))),") berechnet aus dem Geheimtext (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"))))),") und dem privaten Schl\xfcssel (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),") wieder den Klartext (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))),"):"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"D"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p = D(c, d)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-gedankenexperiment"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Gedankenexperiment")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"a. Was erhalten wir, wenn wir der Verschl\xfcsselungsfunktion anstelle des \xf6ffentlichen Schl\xfcssels von Bob ",(0,r.kt)("strong",{parentName:"p"},"den privaten Schl\xfcssel von Alice")," \xfcbergeben?"),(0,r.kt)("div",{parentName:"div",className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"?"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"E"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"? = E(p, d)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mclose"},"?"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",{parentName:"div"},"b. Wie l\xe4sst sich dieses \xabProdukt\xbb wieder in einen Klartext verwandeln?"),(0,r.kt)("div",{parentName:"div",className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"?"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"?"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"?"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p = ?(?, ?)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mclose"},"?"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mclose"},"?"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mclose"},"?"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(i.Z,{type:"text",webKey:"a9f45069-3876-48ad-90db-6a2d9c1aa2ad",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"a.)"),(0,r.kt)("p",{parentName:"div"},"b.)")))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-bedeutung-des-gedankenexperimentes"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Bedeutung des Gedankenexperimentes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"a. Was bedeutet es, wenn jemand einen Text mit seinem eigenen privaten Schl\xfcssel \xabverschl\xfcsselt\xbb, so dass der Geheimtext nur mit dem zugeh\xf6rigen \xf6ffentlichen Schl\xfcssel \xabentschl\xfcsselt\xbb werden kann?"),(0,r.kt)("p",{parentName:"div"},"b. Was sagt die Tatsache, dass man einen solchen Geheimtext mit einem fremden (nicht dem eigenen) \xf6ffentlichen Schl\xfcssel entschl\xfcsseln kann, aus?"),(0,r.kt)(i.Z,{type:"text",webKey:"8a3ee7b6-2cfb-4638-ad4d-064fc920c745",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"a.)"),(0,r.kt)("p",{parentName:"div"},"b.)")))),(0,r.kt)("h2",{id:"digitale-signatur"},"Digitale Signatur"),(0,r.kt)("p",null,"Wir haben soeben das Prinzip der digitalen Signatur entdeckt."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(m.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=645224",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Digitale Signatur",options:{},isInline:!1,src:t(41622).Z,alt:"Digitale Signatur",mdxType:"Image"})),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"digitale-signatur"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Digitale Signatur")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wenn Bob die Nachricht mit dem \xf6ffentlichen Schl\xfcssel von Alice entschl\xfcsseln kann, dann muss diese Nachricht vorher mit dem privaten Schl\xfcssel von Alice verschl\xfcsselt worden sein. Somit kann sie von niemandem anders stammen als von Alice. D.h. diese Nachricht ist quasi digital signiert."))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-mehrere-leute"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe mehrere Leute")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich, wie ein signiertes Dokument von mehr als zwei Personen angeschaut und \xfcberpr\xfcft wird. Welche Schl\xfcssel werden verwendet?"),(0,r.kt)(i.Z,{type:"text",webKey:"6e6c19e8-7a15-41cc-83b4-ca2987de22d1",mdxType:"Answer"}))),(0,r.kt)("h2",{id:"nachteile"},"Nachteile"),(0,r.kt)("p",null,"Die bisher kennengelernte Art der digitalen Signatur ist nicht optimal, denn es gibt mehrere Probleme:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wegen der \xabSignatur\xbb ist der Klartext nicht mehr lesbar (er ist ja nun speziell \xabverschl\xfcsselt\xbb). Dies ist umst\xe4ndlich, denn wenn Sie ein Dokument auf Papier unterschreiben, bleibt dieses trotzdem lesbar."),(0,r.kt)("li",{parentName:"ul"},"Asymmetrische Verfahren sind langsam, d.h. wenn wir ein grosses Dokument (z.B. ein Video) signieren, dauert dieser Vorgang unn\xf6tig lange \u2013 ebenso das \xdcberpr\xfcfen der Signatur (also das Entschl\xfcsseln).")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=645224"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},61233:function(e,a,t){a.Z=t.p+"assets/images/asymm-encryption-9383e358f0e3f9deb480a3905a284e9a.svg"},41622:function(e,a,t){a.Z=t.p+"assets/images/asymm-signature-c61a8a1a038cb9c1aaa56abf3a6afda1.svg"}}]);