"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[27785],{3239:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),u=(0,o.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return A}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},o=n(86010),l=n(71217),u=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(u.test(t)){var o=function(e){if(u.test(e))return e.match(u).groups.klass}(t);a=i[o],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),p=n(72389),m=n(21314),g=n(74322),v=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,l.Pi)((function(e){var t,n,a,l=(0,p.Z)(),u=r.useState("unchecked"),v=u[0],y=u[1],b=(0,m.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},E=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&E(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&E(b.value)}),[b,l]),l?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:h(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return E(b.value)},className:(0,o.default)(i[v],i.checkButton)},r.createElement(s.G,{icon:(a=v,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},E=(0,l.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),w=n(87462),S=n(75552),x=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(S.Z,(0,w.Z)({model:t},e))):r.createElement(g.Z,null)})),N=n(3239),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(E,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),P=(0,l.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),Z=n(78982),K=n(97762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},U=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,Z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,Z.cl)(e.id,t)}}}:function(){}},A=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,m.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,U(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(N.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(P,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(y,e),"array"===e.type&&r.createElement(E,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},91033:function(e,t,n){var r=n(86010),a=n(67294),i=n(96734),o=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,l=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "];t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],u=a.useState(""),c=u[0],s=u[1],d=a.useState("text"),f=d[0],p=d[1];return a.useEffect((function(){if("text"===f&&0!==t.length){var e=t.split("").map((function(e){var t=l.indexOf(e),n=t%5;return""+(Math.floor(t/5)+1)+(n+1)}));s(e.join(" "))}}),[t]),a.useEffect((function(){if("cipher"===f&&0!==c.length){var e=c.split(" ").map((function(e){var t=e.split("").map((function(e){return Number.parseInt(e,10)-1})),n=t[0],r=t[1];return l[5*n+r]}));n(e.join(""))}}),[c]),a.createElement("div",{className:(0,r.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("text"),n(function(e){return e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(o,"")}(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:c,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("cipher"),s(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),i="loader_2rVr",o="badge_2s0E",l=n(71217),u=n(92814),c=n(51436),s=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(u.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",o)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),a="quillEditor_1XRF",i="quillAnswer_oQOS",o="monospace_3rFN",l="disableToolbar_gntN",u=n(86010),c=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return t},m=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],m=t[1],g=r.useState(!1),v=g[0],h=g[1],y=r.useRef(null),b=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(h(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&v&&b.loaded?r.createElement("div",{onFocus:function(){return!c&&m(!0)},className:(0,u.default)(a)},r.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,u.default)(i,e.monospace&&o,c?void 0:l),value:b.text||"",onChange:function(t,n,r,a){var i,o;i=t,void 0===o&&(o=0),!e.readonly&&b.canUpdate&&v&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return l},RN:function(){return u},aV:function(){return c}});var r=n(68949),a=n(67294),i=n(47678),o=function(e){return a.useContext(i.Nx)[e]},l=function(e,t,n,o,l,u){var c=a.useState(!1),s=c[0],d=c[1];a.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,o,l,u).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){s&&r&&i.Ux.documentStore.provideDocument(e(),t,n,o,l,u,!0)}))}),[s]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&i.Ux.documentStore.provideDocument(e(),t,n,o,l,u,!0)}))}),[s])},u=function(e){var t=a.useState(!1),n=t[0],o=t[1];a.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){o(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])},c=function(e){var t=a.useState(!1),n=t[0],o=t[1];a.useEffect((function(){i.Ux.policyStore.provideAuthorization(e,!1).finally((function(){o(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(c){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},23460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(84384),l=n(91033),u=(n(52084),["components"]),c={title:"Polybios-Chiffre"},s="Polybios-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Polybios",id:"version-24L/Kryptologie/Antike/Polybios",isDocsHomePage:!1,title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/versioned_docs/version-24L/06-Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/24L/Kryptologie/Antike/Polybios",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"version-24L/sidebar",previous:{title:"Skytale",permalink:"/24L/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/24L/Kryptologie/Antike/Caesar"}},f=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",children:[],level:2}],p={toc:f};function m(e){var t=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(39560).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)("p",null,"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(l.Z,{mdxType:"Polybios"}),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},39560:function(e,t,n){t.Z=n.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);