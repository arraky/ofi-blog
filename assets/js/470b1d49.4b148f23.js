"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[53573],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),s=n(71217),l=n(21314),c=(0,s.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return Z}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},s=n(86010),l=n(71217),c=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var s=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[s],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),m=n(68949),h=n(72389),p=n(21314),f=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return i[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,l.Pi)((function(e){var t,n,a,l=(0,h.Z)(),c=r.useState("unchecked"),f=c[0],v=c[1],y=(0,p.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&k(y.value)}))}),[y]),r.useEffect((function(){y.loaded&&k(y.value)}),[y,l]),y.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:g(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(y.value)},className:(0,s.default)(i[f],i.checkButton)},r.createElement(u.G,{icon:(a=f,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement("div",null,"Loading...")})),y=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(o,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement("div",null,"Loading...")})),w=void 0,S=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),N=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},E=(0,l.Pi)((function(e){var t=r.useState(!1),a=t[0],l=t[1],c=r.useState(!1),o=c[0],u=c[1],d=r.useRef(null),h=(0,p.oR)("documentStore").find(e.webKey),f=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){w=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(u(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[]);return w&&o&&h.loaded?r.createElement("div",{onFocus:function(){return!a&&l(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||h.readonly,className:(0,s.default)(i.quillAnswer,e.monospace&&i.monospace,a?void 0:"disable-toolbar"),value:e.isLegacy?h.legacyData.value:h.value||"",onChange:function(t,n,r,a){var i,s;i=t,void 0===s&&(s=0),!e.isLegacy&&h.loaded&&o&&(0,m.z)((function(){h.value=i}))},modules:{toolbar:e.toolbar?N(e.toolbar):S,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),x=n(3239),D=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,s.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),L=n(78982),V=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},Z=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||V.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,K(e)),a&&i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return s},ky:function(){return l}});var r=n(68949),a=n(67294),i=n(93812),s=function(e){return a.useContext(i.Nx)[e]},l=function(e,t,n,s,l,c){var o=a.useState(!1),u=o[0],d=o[1];a.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,s,l,c).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){u&&r&&!i.Ux.userStore.isMyView&&i.Ux.documentStore.provideDocument(e(),t,n,s,l,c,!0)}))}),[u]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){u&&!r&&i.Ux.documentStore.provideDocument(e(),t,n,s,l,c,!0)}))}),[u])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return s}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var s=i[e];return void 0===s?n:s}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(o){return n}},s=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},39162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(84384),l=n(52084),c=["components"],o={title:"Asymm. Verschl\xfcsselung"},u="Asymmetrische Verschl\xfcsselung [^1]",d={unversionedId:"Kryptologie/Asymmetrisch/asymm-encryption",id:"version-24o/Kryptologie/Asymmetrisch/asymm-encryption",isDocsHomePage:!1,title:"Asymm. Verschl\xfcsselung",description:"Das Prinzip der asymmetrischen Verschl\xfcsselung beruht also auf zwei verschiedenen Schl\xfcsseln, dem sogenannten Schl\xfcsselpaar (engl. key pair). Die beiden Schl\xfcssel eines Schl\xfcsselpaars nennt man \xf6ffentlichen und privaten Schl\xfcssel (engl. public und private key).",source:"@site/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/04-asymm-encryption.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymm-encryption",permalink:"/24o/Kryptologie/Asymmetrisch/asymm-encryption",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/04-asymm-encryption.md",tags:[],version:"24o",sidebarPosition:4,frontMatter:{title:"Asymm. Verschl\xfcsselung"},sidebar:"version-24o/sidebar",previous:{title:"Asymmetrie",permalink:"/24o/Kryptologie/Asymmetrisch/asymmetrie"},next:{title:"Kombinierte Verfahren",permalink:"/24o/Kryptologie/Asymmetrisch/kombiniert"}},m=[{value:"Schl\xfcsselpaar",id:"schl\xfcsselpaar",children:[],level:2},{value:"Verschl\xfcsselung",id:"verschl\xfcsselung",children:[],level:2},{value:"Entschl\xfcsselung",id:"entschl\xfcsselung",children:[],level:2}],h={toc:m};function p(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asymmetrische-verschl\xfcsselung-"},"Asymmetrische Verschl\xfcsselung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Das Prinzip der asymmetrischen Verschl\xfcsselung beruht also auf zwei verschiedenen Schl\xfcsseln, dem sogenannten ",(0,i.kt)("strong",{parentName:"p"},"Schl\xfcsselpaar")," (engl. key pair). Die beiden Schl\xfcssel eines Schl\xfcsselpaars nennt man ",(0,i.kt)("strong",{parentName:"p"},"\xf6ffentlichen")," und ",(0,i.kt)("strong",{parentName:"p"},"privaten")," Schl\xfcssel (engl. public und private key)."),(0,i.kt)("p",null,"Da f\xfcr den Verschl\xfcsselungsvorgang nicht derselbe Schl\xfcssel verwendet wird wie f\xfcr den Entschl\xfcsselungsvorgang, spricht man von einem asymmetrischen Verfahren."),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"200px"},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Asymmetrische Ver- und Entschl\xfcsselung mit verschiedenen Schl\xfcsseln",options:{},isInline:!1,src:n(92221).Z,alt:"Asymmetrische Ver- und Entschl\xfcsselung mit verschiedenen Schl\xfcsseln",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"200px",textAlign:"center",classes:[]},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Generierung des Schl\xfcsselpaares f\xfcr die asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(33206).Z,alt:"Generierung des Schl\xfcsselpaares f\xfcr die asymmetrische Verschl\xfcsselung",mdxType:"Image"})))),(0,i.kt)("h2",{id:"schl\xfcsselpaar"},"Schl\xfcsselpaar"),(0,i.kt)("p",null,"Jede Person besitzt ein eigenes Schl\xfcsselpaar, so auch Bob. Die beiden Schl\xfcssel, die dieses Schl\xfcsselpaar bilden, sind mathematisch verwandt. Der private Schl\xfcssel l\xe4sst sich jedoch nicht in sinnvoller Zeit aus dem \xf6ffentlichen Schl\xfcssel  berechnen."),(0,i.kt)("p",null,"Bobs \xf6ffentlicher Schl\xfcssel entspricht also dem B\xfcgelschloss aus unserem ersten Beispiel. Bobs privater Schl\xfcssel ist der Schl\xfcssel, der zum B\xfcgelschloss passt. Das Schloss kann (in ge\xf6ffneter Form nat\xfcrlich) bei einer vertrauensw\xfcrdigen Stelle (Trent) deponiert werden, wo es von Alice abgeholt werden kann. Den Schl\xfcssel beh\xe4lt Bob stets f\xfcr sich."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Jede Person besitzt ein Schl\xfcsselpaar",options:{},isInline:!1,src:n(86690).Z,alt:"Jede Person besitzt ein Schl\xfcsselpaar",mdxType:"Image"})),(0,i.kt)("h2",{id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,i.kt)("p",null,"In der folgenden Abbildung sieht man auf der linken Seite, dass Alice bei der Verschl\xfcsselung den \xf6ffentlichen Schl\xfcssel von Bob (und nicht den eigenen) verwendet. Dieser \xf6ffentliche Schl\xfcssel enth\xe4lt keine geheime Information und ist f\xfcr alle Leute zug\xe4nglich (z.B. via eine vertrauensw\xfcrdige Stelle), somit k\xf6nnen alle eine Nachricht f\xfcr Bob verschl\xfcsseln."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(60771).Z,alt:"Asymmetrische Verschl\xfcsselung",mdxType:"Image"})),(0,i.kt)("h2",{id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,i.kt)("p",null,"In derselben Abbildung ist zu sehen, dass Bob bei der Entschl\xfcsselung seinen privaten Schl\xfcssel verwenden muss. Somit ist sichergestellt, dass nur Bob die Nachricht entschl\xfcsseln kann."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"achtung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Um Verwechslungen zu vermeiden, spricht man bei der symmetrischen Verschl\xfcsselung vom geheimen Schl\xfcssel (engl. secret key), w\xe4hrend man bei asymmetrischen Verfahren vom privaten Schl\xfcssel spricht und nicht vom geheimen Schl\xfcssel, weil jede involvierte Person ein eigenes Schl\xfcsselpaar und somit einen eigenen privaten Schl\xfcssel besitzt."))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\xdcberlegen Sie sich, wie die Verschl\xfcsselung funktioniert, wenn ein Dokument an verschiedene Leute versendet wird. Machen Sie sich dazu eine Skizze."),(0,i.kt)("li",{parentName:"ol"},"Welche Nachteile erkennst du?")),(0,i.kt)(l.Z,{type:"text",webKey:"6f969d09-5b80-4553-8c21-3bbc70b53f52",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=952331"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},60771:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-9383e358f0e3f9deb480a3905a284e9a.svg"},92221:function(e,t,n){t.Z=n.p+"assets/images/asymmetric-cryptosystem-b076bca3d795d2f2bf622988346526ba.svg"},33206:function(e,t,n){t.Z=n.p+"assets/images/key-pair-generation-5f7e3adcef9878eb2890aa769614b0d1.svg"},86690:function(e,t,n){t.Z=n.p+"assets/images/key-pair-0127b6bd08457cc2d3c84b539a58bcc0.svg"}}]);