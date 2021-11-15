"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[85287],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return B}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),c=n(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),f=n(72389),g=n(21314),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},p=(0,c.Pi)((function(e){var t,n,r,c=(0,f.Z)(),o=a.useState("unchecked"),b=o[0],p=o[1],v=(0,g.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&v.loaded&&(p("unchecked"),v.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return p(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};p(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&k(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&k(v.value)}),[v,c]),v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=v.legacyData)?void 0:n.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(v.value)},className:(0,l.default)(i[b],i.checkButton)},a.createElement(u.G,{icon:(r=b,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement("div",null,"Loading...")})),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},k=(0,c.Pi)((function(e){var t,n=(0,g.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),N=void 0,E=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),w=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},S=(0,c.Pi)((function(e){var t=a.useState(!1),r=t[0],c=t[1],o=a.useState(!1),s=o[0],u=o[1],d=a.useRef(null),f=(0,g.oR)("documentStore").find(e.webKey),b=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(N)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){N=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(u(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[]);return N&&s&&f.loaded?a.createElement("div",{onFocus:function(){return!r&&c(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(N,{ref:d,theme:"snow",readOnly:e.isLegacy||f.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?f.legacyData.value:f.value||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.isLegacy&&f.loaded&&s&&(0,m.z)((function(){f.value=i}))},modules:{toolbar:e.toolbar?w(e.toolbar):E,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),x=n(3239),z=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},F=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(p,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return z("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return z("use_current",t)}},"Nein (verwerfen)"))):null})),_=(0,c.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),A=n(78982),L=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,A.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,A.cl)(e.id,t)}}}:function(){}},B=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,K(e)),r&&i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(F,e),n.loggedIn&&a.createElement(_,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(p,e),"array"===e.type&&a.createElement(k,e)):a.createElement("div",null,"Loading...")}))},92302:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(86010),r=n(67294),i="container_98FZ",l="A_9Eva",c="PUB_1HbS",o="B_1prs",s="MIXA_1niJ",u="MIXB_1j4K",d="PRIVA_3sJO",m="PRIVB_2AZJ",f="colorPicker_23q8",g="colorBucket_1uzl",b="mixed_1B_u",h="caption_2CJd",p=n(46910),v=n.n(p),y=n(90532),k=function(e){return"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase()},N=function(e,t,n){t/=100,n/=100;var a=(1-Math.abs(2*n-1))*t,r=a*(1-Math.abs(e/60%2-1)),i=n-a/2,l=0,c=0,o=0;0<=e&&e<60?(l=a,c=r,o=0):60<=e&&e<120?(l=r,c=a,o=0):120<=e&&e<180?(l=0,c=a,o=r):180<=e&&e<240?(l=0,c=r,o=a):240<=e&&e<300?(l=r,c=0,o=a):300<=e&&e<360&&(l=a,c=0,o=r);var s=Math.round(255*(l+i)).toString(16),u=Math.round(255*(c+i)).toString(16),d=Math.round(255*(o+i)).toString(16);return 1==s.length&&(s="0"+l),1==u.length&&(u="0"+c),1==d.length&&(d="0"+o),"#"+s+u+d},E=function(e){var t=r.useState(60),n=t[0],p=t[1],E=r.useState("#ffff00"),w=E[0],S=E[1],x=r.useState(230),z=x[0],F=x[1],_=r.useState("#ffff00"),D=_[0],A=_[1],L=r.useState(100),C=L[0],K=L[1],B=r.useState("#ffff00"),I=B[0],Z=B[1],M=r.useState("#ffff00"),P=M[0],V=M[1],R=r.useState("#ffff00"),O=R[0],U=R[1],H=r.useState("#ffff00"),j=H[0],G=H[1],W=r.useState("#ffff00"),J=W[0],T=W[1];return r.useEffect((function(){S(N(n,100,50))}),[n]),r.useEffect((function(){A(N(z,100,50))}),[z]),r.useEffect((function(){Z(N(C,100,50))}),[C]),r.useEffect((function(){V("#"+v().mixColors([w,I]))}),[w,I]),r.useEffect((function(){U("#"+v().mixColors([D,I]))}),[D,I]),r.useEffect((function(){var e=v().mixColors([w,I,D]);G("#"+e),T("#"+e)}),[w,I,D]),r.createElement("div",{className:i},r.createElement("div",{className:(0,a.default)(l)},r.createElement(y.Z,{className:(0,a.default)(f,"umami--click--color-exchange-colorpicker"),hue:n,onInput:function(e){return p(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(c)},r.createElement(y.Z,{className:f,hue:C,onInput:function(e){return K(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:I,color:k(I)}},"\xd6ffentlich")," ","Eve \ud83d\udd76")),r.createElement("div",{className:(0,a.default)(o)},r.createElement(y.Z,{className:f,hue:z,onInput:function(e){return F(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:D,color:k(D)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(s,b)},r.createElement("div",{className:g,style:{background:P}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:I,color:k(I)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,a.default)(u,b)},r.createElement("div",{className:g,style:{background:O}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:I,color:k(I)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:D,color:k(D)}},"Bob"))),r.createElement("div",{className:(0,a.default)(d,b)},r.createElement("div",{className:g,style:{background:j}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:O,color:k(O)}},"Mischung"))),r.createElement("div",{className:(0,a.default)(m,b)},r.createElement("div",{className:g,style:{background:J}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:P,color:k(P)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:D,color:k(D)}},"Bob"))))}},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return c}});var a=n(68949),r=n(67294),i=n(93812),l=function(e){return r.useContext(i.Nx)[e]},c=function(e,t,n,l,c,o){var s=r.useState(!1),u=s[0],d=s[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,c,o).finally((function(){d(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){u&&a&&!i.Ux.userStore.isMyView&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[u]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){u&&!a&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[u])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},6446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(84384),c=n(92302),o=n(52084),s=["components"],u={title:"Geheime Farbe"},d="Geheime Farbe [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"version-24i/Kryptologie/Asymmetrisch/secret-color",isDocsHomePage:!1,title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/24i/Kryptologie/Asymmetrisch/secret-color",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"24i",sidebarPosition:2,frontMatter:{title:"Geheime Farbe"},sidebar:"version-24i/sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/24i/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/24i/Kryptologie/Asymmetrisch/asymmetrie"}},f=[{value:"Alice und Bob",id:"alice-und-bob",children:[],level:2},{value:"Eve",id:"eve",children:[],level:2},{value:"Ausprobieren",id:"ausprobieren",children:[],level:2}],g={toc:f};function b(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geheime-farbe-"},"Geheime Farbe ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,i.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,i.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,i.kt)("h2",{id:"alice-und-bob"},"Alice und Bob"),(0,i.kt)("p",null,"Sie haben eine Idee und gehen wie folgt vor:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,i.kt)("li",{parentName:"ol"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,i.kt)("h2",{id:"eve"},"Eve"),(0,i.kt)("p",null,"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,i.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,i.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,i.kt)(o.Z,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,i.kt)(o.Z,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,i.kt)(c.Z,{mdxType:"ColorExchange"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,i.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,i.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,i.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},caption:"digitales (links) und reales (rechts) Farbmodell",options:{},isInline:!1,src:n(28263).Z,alt:"digitales (links) und reales (rechts) Farbmodell",mdxType:"Image"})))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=242355"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},28263:function(e,t,n){t.Z=n.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);