"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56655],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),i="noLoginAlert_boZc",a=n(73727),l=n(71217),s=n(21314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return Z}});var r=n(67294),i=n(26528),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),s=n(71217),c=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,n=t,i=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);i=a[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:i},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),h=n(21314),f=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return a[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n,i,s=(0,p.Z)(),c=r.useState("unchecked"),f=c[0],v=c[1],y=(0,h.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&k(y.value)}))}),[y]),r.useEffect((function(){y.loaded&&k(y.value)}),[y,s]),s?y.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:g(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(y.value)},className:(0,l.default)(a[f],a.checkButton)},r.createElement(u.G,{icon:(i=f,"correct"===i?d.f8k:"wrong"===i?d.nYk:d.sph)}))):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")})),y=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return a[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,s.Pi)((function(e){var t,n=(0,h.oR)("documentStore").find(e.webKey),i=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return i(e.target.value,a)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return i(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement("div",null,"Loading...")})),w=void 0,S=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),N=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}return t},E=(0,s.Pi)((function(e){var t=r.useState(!1),i=t[0],s=t[1],c=r.useState(!1),o=c[0],u=c[1],d=r.useRef(null),p=(0,h.oR)("documentStore").find(e.webKey),f=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){w=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(u(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[]);return w&&o&&p.loaded?r.createElement("div",{onFocus:function(){return!i&&s(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||p.readonly,className:(0,l.default)(a.quillAnswer,e.monospace&&a.monospace,i?void 0:"disable-toolbar"),value:e.isLegacy?p.legacyData.value:p.value||"",onChange:function(t,n,r,i){var a,l;a=t,void 0===l&&(l=0),!e.isLegacy&&p.loaded&&o&&(0,m.z)((function(){p.value=a}))},modules:{toolbar:e.toolbar?N(e.toolbar):S,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),x=n(3239),D=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,s.Pi)((function(e){var t=(0,h.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,s.Pi)((function(e){return(0,h.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),L=n(78982),V=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},Z=(0,s.Pi)((function(e){var t=(0,h.oR)("documentStore"),n=(0,h.oR)("msalStore"),i=t.find(e.webKey),a=(0,p.Z)();return(0,h.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||V.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,K(e)),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return s},RN:function(){return c}});var r=n(68949),i=n(67294),a=n(16731),l=function(e){return i.useContext(a.Nx)[e]},s=function(e,t,n,l,s,c){var o=i.useState(!1),u=o[0],d=o[1];i.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,l,s,c).finally((function(){d(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){u&&r&&a.Ux.documentStore.provideDocument(e(),t,n,l,s,c,!0)}))}),[u]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){u&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,l,s,c,!0)}))}),[u])},c=function(e){var t=i.useState(!1),n=t[0],l=t[1];console.log("initial load"),i.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&(console.log("load from view"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n]),i.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&(console.log("load from offlineChecker"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return i},Vj:function(){return r},ly:function(){return a}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return a},cl:function(){return l}});var r=864e5,i=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&s()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var a=JSON.parse(i);if("object"==typeof a){var l=a[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(o){return n}},l=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},80991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=n(84384),s=n(52084),c=["components"],o={title:"Asymm. Verschl\xfcsselung"},u="Asymmetrische Verschl\xfcsselung [^1]",d={unversionedId:"Kryptologie/Asymmetrisch/asymm-encryption",id:"version-24i/Kryptologie/Asymmetrisch/asymm-encryption",isDocsHomePage:!1,title:"Asymm. Verschl\xfcsselung",description:"Das Prinzip der asymmetrischen Verschl\xfcsselung beruht also auf zwei verschiedenen Schl\xfcsseln, dem sogenannten Schl\xfcsselpaar (engl. key pair). Die beiden Schl\xfcssel eines Schl\xfcsselpaars nennt man \xf6ffentlichen und privaten Schl\xfcssel (engl. public und private key).",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/04-asymm-encryption.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymm-encryption",permalink:"/24i/Kryptologie/Asymmetrisch/asymm-encryption",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/04-asymm-encryption.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"Asymm. Verschl\xfcsselung"},sidebar:"version-24i/sidebar",previous:{title:"Asymmetrie",permalink:"/24i/Kryptologie/Asymmetrisch/asymmetrie"},next:{title:"Kombinierte Verfahren",permalink:"/24i/Kryptologie/Asymmetrisch/kombiniert"}},m=[{value:"Schl\xfcsselpaar",id:"schl\xfcsselpaar",children:[],level:2},{value:"Verschl\xfcsselung",id:"verschl\xfcsselung",children:[],level:2},{value:"Entschl\xfcsselung",id:"entschl\xfcsselung",children:[],level:2}],p={toc:m};function h(e){var t=e.components,o=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"asymmetrische-verschl\xfcsselung-"},"Asymmetrische Verschl\xfcsselung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Das Prinzip der asymmetrischen Verschl\xfcsselung beruht also auf zwei verschiedenen Schl\xfcsseln, dem sogenannten ",(0,a.kt)("strong",{parentName:"p"},"Schl\xfcsselpaar")," (engl. key pair). Die beiden Schl\xfcssel eines Schl\xfcsselpaars nennt man ",(0,a.kt)("strong",{parentName:"p"},"\xf6ffentlichen")," und ",(0,a.kt)("strong",{parentName:"p"},"privaten")," Schl\xfcssel (engl. public und private key)."),(0,a.kt)("p",null,"Da f\xfcr den Verschl\xfcsselungsvorgang nicht derselbe Schl\xfcssel verwendet wird wie f\xfcr den Entschl\xfcsselungsvorgang, spricht man von einem asymmetrischen Verfahren."),(0,a.kt)("div",{style:{},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{flexBasis:"200px"},className:"item"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Asymmetrische Ver- und Entschl\xfcsselung mit verschiedenen Schl\xfcsseln",options:{},isInline:!1,src:n(62205).Z,alt:"Asymmetrische Ver- und Entschl\xfcsselung mit verschiedenen Schl\xfcsseln",mdxType:"Image"}))),(0,a.kt)("div",{parentName:"div",style:{flexBasis:"200px",textAlign:"center",classes:[]},className:"item"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Generierung des Schl\xfcsselpaares f\xfcr die asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(29551).Z,alt:"Generierung des Schl\xfcsselpaares f\xfcr die asymmetrische Verschl\xfcsselung",mdxType:"Image"})))),(0,a.kt)("h2",{id:"schl\xfcsselpaar"},"Schl\xfcsselpaar"),(0,a.kt)("p",null,"Jede Person besitzt ein eigenes Schl\xfcsselpaar, so auch Bob. Die beiden Schl\xfcssel, die dieses Schl\xfcsselpaar bilden, sind mathematisch verwandt. Der private Schl\xfcssel l\xe4sst sich jedoch nicht in sinnvoller Zeit aus dem \xf6ffentlichen Schl\xfcssel  berechnen."),(0,a.kt)("p",null,"Bobs \xf6ffentlicher Schl\xfcssel entspricht also dem B\xfcgelschloss aus unserem ersten Beispiel. Bobs privater Schl\xfcssel ist der Schl\xfcssel, der zum B\xfcgelschloss passt. Das Schloss kann (in ge\xf6ffneter Form nat\xfcrlich) bei einer vertrauensw\xfcrdigen Stelle (Trent) deponiert werden, wo es von Alice abgeholt werden kann. Den Schl\xfcssel beh\xe4lt Bob stets f\xfcr sich."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Jede Person besitzt ein Schl\xfcsselpaar",options:{},isInline:!1,src:n(954).Z,alt:"Jede Person besitzt ein Schl\xfcsselpaar",mdxType:"Image"})),(0,a.kt)("h2",{id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,a.kt)("p",null,"In der folgenden Abbildung sieht man auf der linken Seite, dass Alice bei der Verschl\xfcsselung den \xf6ffentlichen Schl\xfcssel von Bob (und nicht den eigenen) verwendet. Dieser \xf6ffentliche Schl\xfcssel enth\xe4lt keine geheime Information und ist f\xfcr alle Leute zug\xe4nglich (z.B. via eine vertrauensw\xfcrdige Stelle), somit k\xf6nnen alle eine Nachricht f\xfcr Bob verschl\xfcsseln."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(6858).Z,alt:"Asymmetrische Verschl\xfcsselung",mdxType:"Image"})),(0,a.kt)("h2",{id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,a.kt)("p",null,"In derselben Abbildung ist zu sehen, dass Bob bei der Entschl\xfcsselung seinen privaten Schl\xfcssel verwenden muss. Somit ist sichergestellt, dass nur Bob die Nachricht entschl\xfcsseln kann."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"achtung"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Um Verwechslungen zu vermeiden, spricht man bei der symmetrischen Verschl\xfcsselung vom geheimen Schl\xfcssel (engl. secret key), w\xe4hrend man bei asymmetrischen Verfahren vom privaten Schl\xfcssel spricht und nicht vom geheimen Schl\xfcssel, weil jede involvierte Person ein eigenes Schl\xfcsselpaar und somit einen eigenen privaten Schl\xfcssel besitzt."))),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Asymmetrische Verschl\xfcsselung")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"\xdcberlegen Sie sich, wie die Verschl\xfcsselung funktioniert, wenn ein Dokument an verschiedene Leute versendet wird. Machen Sie sich dazu eine Skizze."),(0,a.kt)("li",{parentName:"ol"},"Welche Nachteile erkennen Sie?")),(0,a.kt)(s.Z,{type:"text",webKey:"6f969d09-5b80-4553-8c21-3bbc70b53f52",mdxType:"Answer"}))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=952331"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},6858:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-9383e358f0e3f9deb480a3905a284e9a.svg"},62205:function(e,t,n){t.Z=n.p+"assets/images/asymmetric-cryptosystem-b076bca3d795d2f2bf622988346526ba.svg"},29551:function(e,t,n){t.Z=n.p+"assets/images/key-pair-generation-5f7e3adcef9878eb2890aa769614b0d1.svg"},954:function(e,t,n){t.Z=n.p+"assets/images/key-pair-0127b6bd08457cc2d3c84b539a58bcc0.svg"}}]);