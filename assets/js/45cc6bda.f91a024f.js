"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[72382],{3239:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return P},Z:function(){return I}});var r=n(67294),a=n(28900),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),u=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);a=i[l],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:a},n)},c=n(92814),d=n(51436),m=n(68949),f=n(72389),p=n(21314),g=n(74322),h=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n,a,o=(0,f.Z)(),u=r.useState("unchecked"),h=u[0],k=u[1],b=(0,p.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&b.loaded&&(k("unchecked"),b.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return k(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};k(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&N(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&N(b.value)}),[b,o]),o?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return N(b.value)},className:(0,l.default)(i[h],i.checkButton)},r.createElement(c.G,{icon:(a=h,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),w=n(83117),E=n(75552),z=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,w.Z)({model:t},e))):r.createElement(g.Z,null)})),_=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(z,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(k,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(46858),K=n(78982),Z=n(97762),P=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,K.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,K.cl)(e.id,t)}}}:function(){}},I=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,A(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),n.loggedIn&&r.createElement(S,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(k,e),"array"===e.type&&r.createElement(N,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(86010),i="loader_2rVr",l="badge_2s0E",o=n(71217),u=n(92814),s=n(51436),c=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(u.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",u=n(86010),s=n(71217),c=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],g=r.useState(!1),h=g[0],v=g[1],k=r.useRef(null),b=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),e.toolbar),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&b.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,u.default)(a)},r.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,u.default)(i,e.monospace&&l,s?void 0:o),value:b.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&h&&b.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):m,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},44891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),u=["components"],s={title:"Authentifizierung"},c="Authentifizierung [^1]",d={unversionedId:"Kryptologie/Hashfunktionen/Authentifizierung",id:"version-24K/Kryptologie/Hashfunktionen/Authentifizierung",title:"Authentifizierung",description:"Authentifizierung (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person authentisiert sich dabei.",source:"@site/versioned_docs/version-24K/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/Authentifizierung",permalink:"/24K/Kryptologie/Hashfunktionen/Authentifizierung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",tags:[],version:"24K",sidebarPosition:1,frontMatter:{title:"Authentifizierung"},sidebar:"version-24K/sidebar",previous:{title:"Hashfunktionen",permalink:"/24K/category/hashfunktionen"},next:{title:"Sichere Passw\xf6rter",permalink:"/24K/Kryptologie/Hashfunktionen/passwords"}},m=[{value:"Wissen",id:"wissen-1",children:[],level:2},{value:"Besitz",id:"besitz-1",children:[],level:2},{value:"Merkmal",id:"merkmal-1",children:[],level:2}],f={toc:m};function p(e){var t=e.components,s=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentifizierung-"},"Authentifizierung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authentifizierung")," (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person ",(0,i.kt)("strong",{parentName:"p"},"authentisiert")," sich dabei."),(0,i.kt)("p",null,"Es gibt drei verschiedene Wege, wie sich eine Person authentisieren kann:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Gino Crescoli",source:"https://pixabay.com/images/id-2781614/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(48247).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"wissen"},"Wissen"),(0,i.kt)("p",{parentName:"div"},"Die Person weiss etwas, z.B. ein Passwort oder eine Pin"))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Uwe Baumann",source:"https://pixabay.com/images/id-96233/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(9196).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"besitz"},"Besitz"),(0,i.kt)("p",{parentName:"div"},"Die Person besitzt etwas, z.B. eine Kreditkarte oder einen Schl\xfcssel."))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Abdullah Boraik",source:"https://pixabay.com/images/id-3072296/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(99831).Z,mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"merkmal"},"Merkmal"),(0,i.kt)("p",{parentName:"div"},"Die Person wird \xfcber k\xf6rperliches Merkmal identifiziert, z.B. einen Fingerabdruck oder die Iris.")))),(0,i.kt)("p",null,"Jede dieser drei Methoden hat Vor- und Nachteile. Um die Nachteile auszugleichen kann eine sogenannte ",(0,i.kt)("strong",{parentName:"p"},"Zwei-Faktor-Authentifizierung")," verwendet werden, welche sich gleichzeitig auf zwei der drei Methoden abst\xfctzt."),(0,i.kt)("h2",{id:"wissen-1"},"Wissen"),(0,i.kt)("p",null,"Mit dieser Methode authentisiert sich die Person, indem sie eine bestimmte Information ",(0,i.kt)("strong",{parentName:"p"},"weiss"),", beispielsweise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ein Passwort,"),(0,i.kt)("li",{parentName:"ul"},"eine Zahlenkombination f\xfcr ein Fahrradschloss,"),(0,i.kt)("li",{parentName:"ul"},"ein pers\xf6nliche Identifikationsnummer (PIN) oder"),(0,i.kt)("li",{parentName:"ul"},"die Antwort auf eine Sicherheitsfrage.")),(0,i.kt)("p",null,"Die Information muss vor der Authentifizierung vereinbart worden sein. Wenn die Information erraten oder abgefangen worden ist, kann sie problemlos ge\xe4ndert werden."),(0,i.kt)("p",null,"Diese Authentifizierungsmethode hat folgende Schwachpunkte:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Information kann vergessen werden."),(0,i.kt)("li",{parentName:"ul"},"Sie kann erraten oder abgefangen werden.")),(0,i.kt)("h2",{id:"besitz-1"},"Besitz"),(0,i.kt)("p",null,"Diese Methode \xfcberpr\xfcft, ob die Person einen bestimmten Gegenstand ",(0,i.kt)("strong",{parentName:"p"},"besitzt"),". Typische Gegenst\xe4nde sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schl\xfcssel"),(0,i.kt)("li",{parentName:"ul"},"Chipkarten (z.B. Bankkarten)"),(0,i.kt)("li",{parentName:"ul"},"SIM-Karte"),(0,i.kt)("li",{parentName:"ul"},"Smartphone")),(0,i.kt)("p",null,"Solche Gegenst\xe4nde m\xfcssen ",(0,i.kt)("strong",{parentName:"p"},"eindeutig identifizierbar")," sein, deshalb ist die Erstellung oder das Ersetzen mit Kosten verbunden."),(0,i.kt)("p",null,"Diese Methode hat folgende Schwachpunkte:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der Gegenstand kann verloren gehen oder gestohlen werden."),(0,i.kt)("li",{parentName:"ul"},"Er kann gef\xe4lscht werden.")),(0,i.kt)("h2",{id:"merkmal-1"},"Merkmal"),(0,i.kt)("p",null,"Die Person kann auch \xfcber ein k\xf6perliches oder biometrisches Merkmal identifiziert werden. Es werden viele unterschiedliche Merkmale verwendet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handschrift"),(0,i.kt)("li",{parentName:"ul"},"Fingerabdruck"),(0,i.kt)("li",{parentName:"ul"},"Gesichtsform"),(0,i.kt)("li",{parentName:"ul"},"Tippverhalten"),(0,i.kt)("li",{parentName:"ul"},"Stimme"),(0,i.kt)("li",{parentName:"ul"},"Iris"),(0,i.kt)("li",{parentName:"ul"},"Retina"),(0,i.kt)("li",{parentName:"ul"},"Venenmuster"),(0,i.kt)("li",{parentName:"ul"},"Erbinformation (DNS)")),(0,i.kt)("p",null,"Die biometrische Authentifizierung ist sehr bequem, da keine Gegenst\xe4nde mitgef\xfchrt und keine Informationen gemerkt werden m\xfcssen."),(0,i.kt)("p",null,"Viele biometrische Merkmale sind jedoch \xf6ffentlich zug\xe4nglich und einfach f\xe4lschbar. Dadurch sind Authentifizierungsmethoden wie Fingerabdruck- oder Gesichtserkennung sehr unsicher."),(0,i.kt)(o.Z,{type:"text",webKey:"16d7b0eb-9f50-4571-9edf-c7647ebfb53d",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/2-authentication/"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},99831:function(e,t,n){t.Z=n.p+"assets/images/eye-c0fed789d1f5582b4f95247ffd6a68cb.jpg"},9196:function(e,t,n){t.Z=n.p+"assets/images/keys-0f24801bad086e1e23028d7fe6bcedce.jpg"},48247:function(e,t,n){t.Z=n.p+"assets/images/password-a69419d8d9811db7fc00737a889a4ff7.jpg"}}]);