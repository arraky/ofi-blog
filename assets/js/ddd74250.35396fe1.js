"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78797],{86043:function(e,t,n){n.d(t,{u:function(){return o},z:function(){return v}});var r=n(63366),a=n(10412),i=n(67294),l=["collapsed"],c=["lazy"];function o(e){var t=e.initialState,n=(0,i.useState)(null!=t&&t),r=n[0],a=n[1],l=(0,i.useCallback)((function(){a((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:a,toggleCollapsed:l}}var s={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function d(e,t){var n=t?s:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function f(e){var t=e.collapsibleRef,n=e.collapsed,r=e.animation,a=(0,i.useRef)(!1);(0,i.useEffect)((function(){var e,i=t.current;function l(){var e,t,n=i.scrollHeight,a=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n);return{transition:"height "+a+"ms "+(null!==(t=null==r?void 0:r.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function c(){var e=l();i.style.transition=e.transition,i.style.height=e.height}if(!a.current)return d(i,n),void(a.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){n?(c(),requestAnimationFrame((function(){i.style.height=s.height,i.style.overflow=s.overflow}))):(i.style.display="block",requestAnimationFrame((function(){c()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,r])}function m(e){if(!a.Z.canUseDOM)return e?s:u}function p(e){var t=e.as,n=void 0===t?"div":t,r=e.collapsed,a=e.children,l=e.animation,c=e.onCollapseTransitionEnd,o=e.className,s=e.disableSSRStyle,u=(0,i.useRef)(null);return f({collapsibleRef:u,collapsed:r,animation:l}),i.createElement(n,{ref:u,style:s?void 0:m(r),onTransitionEnd:function(e){"height"===e.propertyName&&(d(u.current,r),null==c||c(r))},className:o},a)}function h(e){var t=e.collapsed,n=(0,r.Z)(e,l),a=(0,i.useState)(!t),c=a[0],o=a[1];(0,i.useLayoutEffect)((function(){t||o(!0)}),[t]);var s=(0,i.useState)(t),u=s[0],d=s[1];return(0,i.useLayoutEffect)((function(){c&&d(t)}),[c,t]),c?i.createElement(p,Object.assign({},n,{collapsed:u})):null}function v(e){var t=e.lazy,n=(0,r.Z)(e,c),a=t?h:p;return i.createElement(a,Object.assign({},n))}},31173:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),a=n(67294),i=n(72389),l=n(86010),c=n(86043),o="details_2Ziz",s="isBrowser_2j9b",u="collapsibleContent_3OHp",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}var p=function(e){var t,n=e.summary,p=e.children,h=(0,r.Z)(e,d),v=(0,i.Z)(),g=(0,a.useRef)(null),y=(0,c.u)({initialState:!h.open}),b=y.collapsed,k=y.setCollapsed,w=(0,a.useState)(h.open),S=w[0],E=w[1];return a.createElement("details",Object.assign({},h,{ref:g,open:S,"data-collapsed":b,className:(0,l.default)(o,(t={},t[s]=v,t),h.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&m(t,g.current)&&(e.preventDefault(),b?(k(!1),E(!0)):k(!0))}}),n,a.createElement(c.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),E(!e)}},a.createElement("div",{className:u},p)))}},3239:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return T},Z:function(){return C}});var r=n(67294),a=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),c=n(71217),o=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=i[l],n=""+t.replace(o,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),h=n(74322),v=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,c.Pi)((function(e){var t,n,a,c=(0,m.Z)(),o=r.useState("unchecked"),v=o[0],y=o[1],b=(0,p.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&w(b.value)}),[b,c]),c?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:g(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(b.value)},className:(0,l.default)(i[v],i.checkButton)},r.createElement(u.G,{icon:(a=v,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},w=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(h.Z,null)})),S=n(87462),E=n(75552),x=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,S.Z)({model:t},e))):r.createElement(h.Z,null)})),N=n(3239),Z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return Z("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return Z("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),D=n(78982),L=n(97762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},C=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,K(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(N.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(y,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},91636:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(72389),a=n(71217),i=n(67294),l=n(21314),c=n(74322),o=n(31173),s=n(86010),u="wrapper_1t86",d="disabled_1w22",f="solution_30mD",m=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},p=(0,a.Pi)((function(e){var t=(0,l.oR)("policyStore"),n=(0,r.Z)();if((0,l.aV)(e.webKey),!n)return i.createElement("div",null,"SSR");var a=t.find(e.webKey);return a?i.createElement("div",{"data--web-key":e.webKey,className:(0,s.default)(u,"solution-wrapper")},a.show?i.createElement(o.Z,{summary:i.createElement("summary",null,"L\xf6sung ",i.createElement(m,null)),className:(0,s.default)("alert alert--success",f)},e.children):i.createElement("div",{className:(0,s.default)("alert",d)},"L\xf6sung (noch nicht freigeschaltet) ",i.createElement(m,null))):i.createElement(c.Z,null)}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_2rVr",l="badge_2s0E",c=n(71217),o=n(92814),s=n(51436),u=(0,c.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",c="disableToolbar_gntN",o=n(86010),s=n(71217),u=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],h=r.useState(!1),v=h[0],g=h[1],y=r.useRef(null),b=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(g(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&v&&b.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,o.default)(a)},r.createElement(d,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,o.default)(i,e.monospace&&l,s?void 0:c),value:b.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&v&&b.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):f,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return c},RN:function(){return o},aV:function(){return s}});var r=n(68949),a=n(67294),i=n(47678),l=function(e){return a.useContext(i.Nx)[e]},c=function(e,t,n,l,c,o){var s=a.useState(!1),u=s[0],d=s[1];a.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,l,c,o).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){u&&r&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[u]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){u&&!r&&i.Ux.documentStore.provideDocument(e(),t,n,l,c,o,!0)}))}),[u])},o=function(e){var t=a.useState(!1),n=t[0],l=t[1];a.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])},s=function(e){var t=a.useState(!1),n=t[0],l=t[1];a.useEffect((function(){i.Ux.policyStore.provideAuthorization(e,!1).finally((function(){l(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n])}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},81496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(84384),c=n(52084),o=n(91636),s=["components"],u={title:"Schl\xfcsselaustausch"},d="Schl\xfcsselaustausch [^1]",f={unversionedId:"Kryptologie/Asymmetrisch/key-exchange",id:"Kryptologie/Asymmetrisch/key-exchange",isDocsHomePage:!1,title:"Schl\xfcsselaustausch",description:"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?",source:"@site/docs/Kryptologie/04-Asymmetrisch/01-key-exchange.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/key-exchange",permalink:"/Kryptologie/Asymmetrisch/key-exchange",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/01-key-exchange.md",tags:[],version:"current",lastUpdatedAt:1638659663,formattedLastUpdatedAt:"12/4/2021",sidebarPosition:1,frontMatter:{title:"Schl\xfcsselaustausch"},sidebar:"sidebar",previous:{title:"Kerckhoffs' Prinzip",permalink:"/Kryptologie/Symmetrisch/kerckhoffs"},next:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"}},m=[],p={toc:m};function h(e){var t=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schl\xfcsselaustausch-"},"Schl\xfcsselaustausch ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(3027).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("p",null,"Vielleicht hilft es, wenn wir uns in Erinnerung rufen, dass im Handel mehrere Schl\xf6sser mit unterschiedlichen Schl\xfcsseln zu kaufen sind:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(66282).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"schl\xfcsselaustausch"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselaustausch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Finden Sie eine M\xf6glichkeit, den Inhalt der Truhe sicher zu \xfcbertragen?")),(0,i.kt)("p",{parentName:"div"},"Versetzen Sie sich dabei in die Rollen der anderen Krypto-Charaktere!"),(0,i.kt)(c.Z,{type:"text",webKey:"fea4de63-dc0a-4000-8432-c6d676b8443a",mdxType:"Answer"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 1"),(0,i.kt)("h4",{parentName:"div",id:"variante-1-eigene-schl\xf6sser-verteilen"},"Variante 1: Eigene Schl\xf6sser Verteilen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(73261).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Sie sich zusammenreimen, wie die geheimen Unterlagen versendet werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"6157d510-a401-4cae-aef5-d1eb1e8be55d",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Alice verschliesst die Truhe mit dem eigenen Schloss, um ungewollten Zugriff zu unterbinden. So verschlossen schickt sie die Truhe an Bob. Auch er kann sie nicht \xf6ffnen. Daher f\xfcgt er noch sein Schloss hinzu und sendet die Truhe zur\xfcck. Nun kann Alice ihr Schloss entfernen und die Truhe ein letztes Mal schicken und nachdem Bob sein eigenes Schloss entfernt hat, kann er den Inhalt sehen."),(0,i.kt)("p",{parentName:"div"},"Dass es sich um Alices Schloss handelt, kann Bob glauben, da die Absenderin die Informationen ja sicher nicht offen transportieren w\xfcrde."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs k\xf6nnte das Schloss austauschen."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 2"),(0,i.kt)("h4",{parentName:"div",id:"variante-2-eigene-schl\xf6sser-verteilen"},"Variante 2: Eigene Schl\xf6sser Verteilen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(46514).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnen die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"71166ff0-e7d6-4ff9-ab7c-a8695b004818",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Bob k\xf6nnte Alice das eigene Schloss senden, mit dem Alice anschliessend die Truhe verschliesst."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs k\xf6nnte das Schloss austauschen."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 3"),(0,i.kt)("h4",{parentName:"div",id:"variante-3-schl\xf6sser-beim-vertrauensw\xfcrdigen-trent-beziehen"},"Variante 3: Schl\xf6sser beim vertrauensw\xfcrdigen Trent beziehen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(74752).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnen die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"caf33c6d-2642-40cd-99d1-74fca9959cf1",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("h4",{parentName:"div",id:"variante-3"},"Variante 3:"),(0,i.kt)("p",{parentName:"div"},"Hier handelt es sich eigentlich um die erste, einfache Variante mit nur einer Sendung. Allerdings erh\xe4lt Alice das Schloss nicht von Bob, sondern von einer vertrauensw\xfcrdigen Dritten Stelle (Trent). Trent hat eine ganze Sammlung von Schl\xf6ssern \u2013 nat\xfcrlich nicht nur von Bob, sondern von ganz vielen Leuten. So k\xf6nnen alle, die Trent vertrauen, dort Schl\xf6sser abholen."))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=280524"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},73261:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-1-a338e039eb5d00e4569f2c79fdc073b3.svg"},46514:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-2-f7660c0fb12b7f2568cae2e6ed05bda0.svg"},74752:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-3-179b7e61a985353a03498f7f9c07220c.svg"},66282:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-2-fe26cbf46a2c49e9b52d56b21776c690.svg"},3027:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-9ee345dcc6df5359a1b0e4dd386260a3.svg"}}]);