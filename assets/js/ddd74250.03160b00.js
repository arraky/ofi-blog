"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78797],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,p=m["".concat(o,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},807488:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(583117),a=n(667294),i=n(386010),l=n(336162),c="details_BAp3";function o(e){var t=Object.assign({},e);return a.createElement(l.PO,(0,r.Z)({},t,{className:(0,i.default)("alert alert--info",c,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return C}});var r=n(667294),a=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),c=n(471217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=i[l],n=""+t.replace(o,"")}return r.createElement("option",{value:t,className:a},n)},u=n(592814),d=n(51436),m=n(168949),f=n(972389),p=n(121314),h=n(274322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n=(0,f.Z)(),a=r.useState("unchecked"),c=a[0],o=a[1],g=(0,p.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(o("unchecked"),g.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&y(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&y(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(g.value)},className:(0,l.default)(i[c],i.checkButton)},r.createElement(u.G,{icon:(t=c,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),E=n(583117),N=n(575552),S=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(h.Z,null)})),x=n(647271),Z=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(697762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},C=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(Z,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(667294),a="noLoginAlert_HRfh",i=n(239960),l=n(471217),c=n(121314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),c=n(386010),o=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,c.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,c.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],s=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,c.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,c.default)(a.bib,l?a.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&r.createElement(o,e.bib)))}},61014:function(e,t,n){var r=n(972389),a=n(471217),i=n(667294),l=n(121314),c=n(274322),o=n(807488),s=n(386010),u=n(386720),d=n(592814),m=n(51436),f=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},p=(0,a.Pi)((function(e){return i.createElement("span",{className:(0,s.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(d.G,{icon:m.nYk,onClick:e.onRemove}))})),h=(0,a.Pi)((function(e){var t=i.useState(""),n=t[0],r=t[1],a=i.useState(""),c=a[0],o=a[1],f=i.useState(""),h=f[0],g=f[1],b=(0,l.oR)("policyStore"),v=(0,l.oR)("userStore"),y=b.findPolicy(e.webKey);return y?i.createElement("div",{className:(0,s.default)(u.Z.configContainer)},i.createElement("div",{className:(0,s.default)(u.Z.showControl)},i.createElement(d.G,{icon:y.isConfigOpen?m.nYk:m.cNd,onClick:function(){y.showConfig(!y.isConfigOpen)}})),y.isConfigOpen&&i.createElement("div",{className:(0,s.default)(u.Z.config)},i.createElement("div",{className:(0,s.default)(u.Z.permissions)},Array.from(y.klasses).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"class")},color:"success"})})),Array.from(y.groups).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"group")},color:"danger"})})),Array.from(y.users).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,s.default)(u.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return r(e.target.value)},disabled:y.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},v.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(n,"class"),r("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:c,onChange:function(e){return o(e.target.value)},disabled:y.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(v.groups,b.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(c,"group"),o("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:h,onChange:function(e){return g(e.target.value)},disabled:y.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},v.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(h,"user"),g("")}},"Add")))):null})),g=(0,a.Pi)((function(e){var t,n,a=(0,l.oR)("policyStore"),d=(0,l.oR)("userStore"),m=(0,r.Z)();if((0,l.aV)(e.webKey),!m)return i.createElement("div",null,"SSR");var p=a.find(e.webKey);return p?i.createElement("div",{"data--web-key":e.webKey,className:(0,s.default)(u.Z.wrapper,"solution-wrapper")},p.show||null!=(t=d.current)&&t.admin?i.createElement(o.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(f,null),!p.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,s.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=d.current)?void 0:n.admin)&&i.createElement(h,{webKey:p.webKey}),e.children):i.createElement("div",{className:(0,s.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(f,null))):i.createElement(c.Z,null)}));t.Z=g},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a=n(386010),i="loader_FEpR",l="badge_oWqf",c=n(471217),o=n(592814),s=n(51436),u=(0,c.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(667294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",o=n(386010),s=n(471217),u=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],h=r.useState(!1),g=h[0],b=h[1],v=r.useRef(null),y=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&g&&y.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,o.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,o.default)(i,e.monospace&&l,s?void 0:c),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&g&&y.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},981496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=n(583117),a=n(480102),i=(n(667294),n(603905)),l=n(884384),c=n(682593),o=n(61014),s=["components"],u={title:"Schl\xfcsselaustausch"},d="Schl\xfcsselaustausch [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/key-exchange",id:"Kryptologie/Asymmetrisch/key-exchange",title:"Schl\xfcsselaustausch",description:"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?",source:"@site/docs/Kryptologie/04-Asymmetrisch/01-key-exchange.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/key-exchange",permalink:"/Kryptologie/Asymmetrisch/key-exchange",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/01-key-exchange.md",tags:[],version:"current",lastUpdatedAt:1638659663,formattedLastUpdatedAt:"4.12.2021",sidebarPosition:1,frontMatter:{title:"Schl\xfcsselaustausch"},sidebar:"sidebar",previous:{title:"Asymmetrisch",permalink:"/category/asymmetrisch"},next:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"}},f={},p=[],h={toc:p};function g(e){var t=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schl\xfcsselaustausch-"},"Schl\xfcsselaustausch ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(256034).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("p",null,"Vielleicht hilft es, wenn wir uns in Erinnerung rufen, dass im Handel mehrere Schl\xf6sser mit unterschiedlichen Schl\xfcsseln zu kaufen sind:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(345826).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"schl\xfcsselaustausch"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselaustausch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Finden Sie eine M\xf6glichkeit, den Inhalt der Truhe sicher zu \xfcbertragen?")),(0,i.kt)("p",{parentName:"div"},"Versetzen Sie sich dabei in die Rollen der anderen Krypto-Charaktere!"),(0,i.kt)(c.Z,{type:"text",webKey:"fea4de63-dc0a-4000-8432-c6d676b8443a",mdxType:"Answer"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 1"),(0,i.kt)("h4",{parentName:"div",id:"variante-1-eigene-schl\xf6sser-verteilen"},"Variante 1: Eigene Schl\xf6sser Verteilen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(648049).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Sie sich zusammenreimen, wie die geheimen Unterlagen versendet werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"6157d510-a401-4cae-aef5-d1eb1e8be55d",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Alice verschliesst die Truhe mit dem eigenen Schloss, um ungewollten Zugriff zu unterbinden. So verschlossen schickt sie die Truhe an Bob. Auch er kann sie nicht \xf6ffnen. Daher f\xfcgt er noch sein Schloss hinzu und sendet die Truhe zur\xfcck. Nun kann Alice ihr Schloss entfernen und die Truhe ein letztes Mal schicken und nachdem Bob sein eigenes Schloss entfernt hat, kann er den Inhalt sehen."),(0,i.kt)("p",{parentName:"div"},"Dass es sich um Alices Schloss handelt, kann Bob glauben, da die Absenderin die Informationen ja sicher nicht offen transportieren w\xfcrde."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs k\xf6nnte das Schloss austauschen."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 2"),(0,i.kt)("h4",{parentName:"div",id:"variante-2-eigene-schl\xf6sser-verteilen"},"Variante 2: Eigene Schl\xf6sser Verteilen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(758943).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnen die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"71166ff0-e7d6-4ff9-ab7c-a8695b004818",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Bob k\xf6nnte Alice das eigene Schloss senden, mit dem Alice anschliessend die Truhe verschliesst."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs k\xf6nnte das Schloss austauschen."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hinweis: Variante 3"),(0,i.kt)("h4",{parentName:"div",id:"variante-3-schl\xf6sser-beim-vertrauensw\xfcrdigen-trent-beziehen"},"Variante 3: Schl\xf6sser beim vertrauensw\xfcrdigen Trent beziehen"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(325439).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnen die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?"),(0,i.kt)(c.Z,{type:"text",webKey:"caf33c6d-2642-40cd-99d1-74fca9959cf1",mdxType:"Answer"}),(0,i.kt)(o.Z,{webKey:"c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7",mdxType:"Solution"},(0,i.kt)("h4",{parentName:"div",id:"variante-3"},"Variante 3:"),(0,i.kt)("p",{parentName:"div"},"Hier handelt es sich eigentlich um die erste, einfache Variante mit nur einer Sendung. Allerdings erh\xe4lt Alice das Schloss nicht von Bob, sondern von einer vertrauensw\xfcrdigen Dritten Stelle (Trent). Trent hat eine ganze Sammlung von Schl\xf6ssern \u2013 nat\xfcrlich nicht nur von Bob, sondern von ganz vielen Leuten. So k\xf6nnen alle, die Trent vertrauen, dort Schl\xf6sser abholen."))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=280524"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},648049:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-1-a338e039eb5d00e4569f2c79fdc073b3.svg"},758943:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-2-f7660c0fb12b7f2568cae2e6ed05bda0.svg"},325439:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-3-179b7e61a985353a03498f7f9c07220c.svg"},345826:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-2-fe26cbf46a2c49e9b52d56b21776c690.svg"},256034:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-9ee345dcc6df5359a1b0e4dd386260a3.svg"}}]);