"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87416],{3239:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i="noLoginAlert_boZc",a=n(73727),l=n(71217),o=n(21314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return U}});var r=n(67294),i=n(26528),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),u=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,i=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);i=a[l],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:i},n)},s=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),g=n(74322),h=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return a[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n,i,o=(0,m.Z)(),u=r.useState("unchecked"),h=u[0],k=u[1],b=(0,p.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&b.loaded&&(k("unchecked"),b.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return k(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};k(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&N(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&N(b.value)}),[b,o]),o?b.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return N(b.value)},className:(0,l.default)(a[h],a.checkButton)},r.createElement(s.G,{icon:(i=h,"correct"===i?d.f8k:"wrong"===i?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return a[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),i=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return i(e.target.value,a)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return i(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),w=n(87462),E=n(75552),z=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,w.Z)({model:t},e))):r.createElement(g.Z,null)})),S=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(z,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(k,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),A=n(78982),Z=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,A.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,A.cl)(e.id,t)}}}:function(){}},U=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),a=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,P(e)),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(S.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(k,e),"array"===e.type&&r.createElement(N,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),i=n(86010),a="loader_2rVr",l="badge_2s0E",o=n(71217),u=n(92814),c=n(51436),s=(0,o.Pi)((function(){return r.createElement("div",{className:(0,i.default)(a)},r.createElement(u.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),i="quillEditor_1XRF",a="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",u=n(86010),c=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},p=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],p=t[1],g=r.useState(!1),h=g[0],v=g[1],k=r.useRef(null),b=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,r=t[i["react-image-compress"]].default;if("katex"in i){var a=t[i.katex].default;window.katex=a}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),e.toolbar),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&b.loaded?r.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,u.default)(i)},r.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,u.default)(a,e.monospace&&l,c?void 0:o),value:b.text||"",onChange:function(t,n,r,i){var a,l;a=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&h&&b.setText(a)},modules:{toolbar:e.toolbar?m(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o},RN:function(){return u},aV:function(){return c}});var r=n(68949),i=n(67294),a=n(47678),l=function(e){return i.useContext(a.Nx)[e]},o=function(e,t,n,l,o,u){var c=i.useState(!1),s=c[0],d=c[1];i.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,l,o,u).finally((function(){d(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){s&&r&&a.Ux.documentStore.provideDocument(e(),t,n,l,o,u,!0)}))}),[s]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,l,o,u,!0)}))}),[s])},u=function(e){var t=i.useState(!1),n=t[0],l=t[1];i.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&a.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])},c=function(e){var t=i.useState(!1),n=t[0],l=t[1];i.useEffect((function(){a.Ux.policyStore.provideAuthorization(e,!1).finally((function(){l(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&a.Ux.policyStore.provideAuthorization(e,!0)}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&a.Ux.policyStore.provideAuthorization(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return i},Vj:function(){return r},ly:function(){return a}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return a},cl:function(){return l}});var r=864e5,i=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var a=JSON.parse(i);if("object"==typeof a){var l=a[e];return void 0===l?n:l}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(c){return n}},l=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},39579:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=n(84384),o=n(52084),u=["components"],c={title:"Authentifizierung"},s="Authentifizierung [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/Authentifizierung",id:"version-24f/Kryptologie/Hashfunktionen/Authentifizierung",isDocsHomePage:!1,title:"Authentifizierung",description:"Authentifizierung (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person authentisiert sich dabei.",source:"@site/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/Authentifizierung",permalink:"/24f/Kryptologie/Hashfunktionen/Authentifizierung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",tags:[],version:"24f",sidebarPosition:1,frontMatter:{title:"Authentifizierung"},sidebar:"version-24f/sidebar",previous:{title:"Kombinierte Verfahren",permalink:"/24f/Kryptologie/Asymmetrisch/kombiniert"},next:{title:"Sichere Passw\xf6rter",permalink:"/24f/Kryptologie/Hashfunktionen/passwords"}},f=[{value:"Wissen",id:"wissen-1",children:[],level:2},{value:"Besitz",id:"besitz-1",children:[],level:2},{value:"Merkmal",id:"merkmal-1",children:[],level:2}],m={toc:f};function p(e){var t=e.components,c=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentifizierung-"},"Authentifizierung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentifizierung")," (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person ",(0,a.kt)("strong",{parentName:"p"},"authentisiert")," sich dabei."),(0,a.kt)("p",null,"Es gibt drei verschiedene Wege, wie sich eine Person authentisieren kann:"),(0,a.kt)("div",{style:{},className:"flex flex-cards"},(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Gino Crescoli",source:"https://pixabay.com/images/id-2781614/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(90841).Z,mdxType:"Image"}))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"wissen"},"Wissen"),(0,a.kt)("p",{parentName:"div"},"Die Person weiss etwas, z.B. ein Passwort oder eine Pin"))),(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Uwe Baumann",source:"https://pixabay.com/images/id-96233/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(59808).Z,mdxType:"Image"}))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"besitz"},"Besitz"),(0,a.kt)("p",{parentName:"div"},"Die Person besitzt etwas, z.B. eine Kreditkarte oder einen Schl\xfcssel."))),(0,a.kt)("div",{parentName:"div",style:{classes:[]},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Abdullah Boraik",source:"https://pixabay.com/images/id-3072296/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(22438).Z,mdxType:"Image"}))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"merkmal"},"Merkmal"),(0,a.kt)("p",{parentName:"div"},"Die Person wird \xfcber k\xf6rperliches Merkmal identifiziert, z.B. einen Fingerabdruck oder die Iris.")))),(0,a.kt)("p",null,"Jede dieser drei Methoden hat Vor- und Nachteile. Um die Nachteile auszugleichen kann eine sogenannte ",(0,a.kt)("strong",{parentName:"p"},"Zwei-Faktor-Authentifizierung")," verwendet werden, welche sich gleichzeitig auf zwei der drei Methoden abst\xfctzt."),(0,a.kt)("h2",{id:"wissen-1"},"Wissen"),(0,a.kt)("p",null,"Mit dieser Methode authentisiert sich die Person, indem sie eine bestimmte Information ",(0,a.kt)("strong",{parentName:"p"},"weiss"),", beispielsweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ein Passwort,"),(0,a.kt)("li",{parentName:"ul"},"eine Zahlenkombination f\xfcr ein Fahrradschloss,"),(0,a.kt)("li",{parentName:"ul"},"ein pers\xf6nliche Identifikationsnummer (PIN) oder"),(0,a.kt)("li",{parentName:"ul"},"die Antwort auf eine Sicherheitsfrage.")),(0,a.kt)("p",null,"Die Information muss vor der Authentifizierung vereinbart worden sein. Wenn die Information erraten oder abgefangen worden ist, kann sie problemlos ge\xe4ndert werden."),(0,a.kt)("p",null,"Diese Authentifizierungsmethode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Information kann vergessen werden."),(0,a.kt)("li",{parentName:"ul"},"Sie kann erraten oder abgefangen werden.")),(0,a.kt)("h2",{id:"besitz-1"},"Besitz"),(0,a.kt)("p",null,"Diese Methode \xfcberpr\xfcft, ob die Person einen bestimmten Gegenstand ",(0,a.kt)("strong",{parentName:"p"},"besitzt"),". Typische Gegenst\xe4nde sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schl\xfcssel"),(0,a.kt)("li",{parentName:"ul"},"Chipkarten (z.B. Bankkarten)"),(0,a.kt)("li",{parentName:"ul"},"SIM-Karte"),(0,a.kt)("li",{parentName:"ul"},"Smartphone")),(0,a.kt)("p",null,"Solche Gegenst\xe4nde m\xfcssen ",(0,a.kt)("strong",{parentName:"p"},"eindeutig identifizierbar")," sein, deshalb ist die Erstellung oder das Ersetzen mit Kosten verbunden."),(0,a.kt)("p",null,"Diese Methode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Gegenstand kann verloren gehen oder gestohlen werden."),(0,a.kt)("li",{parentName:"ul"},"Er kann gef\xe4lscht werden.")),(0,a.kt)("h2",{id:"merkmal-1"},"Merkmal"),(0,a.kt)("p",null,"Die Person kann auch \xfcber ein k\xf6perliches oder biometrisches Merkmal identifiziert werden. Es werden viele unterschiedliche Merkmale verwendet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handschrift"),(0,a.kt)("li",{parentName:"ul"},"Fingerabdruck"),(0,a.kt)("li",{parentName:"ul"},"Gesichtsform"),(0,a.kt)("li",{parentName:"ul"},"Tippverhalten"),(0,a.kt)("li",{parentName:"ul"},"Stimme"),(0,a.kt)("li",{parentName:"ul"},"Iris"),(0,a.kt)("li",{parentName:"ul"},"Retina"),(0,a.kt)("li",{parentName:"ul"},"Venenmuster"),(0,a.kt)("li",{parentName:"ul"},"Erbinformation (DNS)")),(0,a.kt)("p",null,"Die biometrische Authentifizierung ist sehr bequem, da keine Gegenst\xe4nde mitgef\xfchrt und keine Informationen gemerkt werden m\xfcssen."),(0,a.kt)("p",null,"Viele biometrische Merkmale sind jedoch \xf6ffentlich zug\xe4nglich und einfach f\xe4lschbar. Dadurch sind Authentifizierungsmethoden wie Fingerabdruck- oder Gesichtserkennung sehr unsicher."),(0,a.kt)(o.Z,{type:"text",webKey:"16d7b0eb-9f50-4571-9edf-c7647ebfb53d",placeholder:"Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/2-authentication/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},22438:function(e,t,n){t.Z=n.p+"assets/images/eye-c0fed789d1f5582b4f95247ffd6a68cb.jpg"},59808:function(e,t,n){t.Z=n.p+"assets/images/keys-0f24801bad086e1e23028d7fe6bcedce.jpg"},90841:function(e,t,n){t.Z=n.p+"assets/images/password-a69419d8d9811db7fc00737a889a4ff7.jpg"}}]);