"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1049],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},807488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(583117),r=n(667294),i=n(386010),l=n(336162),o="details_BAp3";function c(e){var t=Object.assign({},e);return r.createElement(l.PO,(0,a.Z)({},t,{className:(0,i.default)("alert alert--info",o,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return M}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},s=n(592814),u=n(51436),m=n(168949),p=n(972389),f=n(121314),g=n(274322),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],k=(0,f.oR)("documentStore").find(e.webKey),b=function(e){k.loaded&&(c("unchecked"),k.setData({value:e,type:"string"}))},N=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&N(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&N(k.value)}),[k,n]),n?k.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:k.value,className:h(k.value),disabled:!k.loaded},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(k.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(s.G,{icon:(t=o,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),N=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:v(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),y=n(583117),E=n(575552),C=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,y.Z)({model:t},e))):a.createElement(g.Z,null)})),x=n(647271),Z=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=n(697762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},M=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(Z,{webKey:e.webKey}),"text"===e.type&&a.createElement(C,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),c=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},d=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+d(n.size)+")",t.maxHeight=d(n.size),delete n.size),n.height&&(t.maxHeight=d(n.height),t.height=d(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+d(n.width)+")",t.width=d(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(s,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],d=i[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(s,e),m&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&a.createElement(c,e.bib)))}},61014:function(e,t,n){var a=n(972389),r=n(471217),i=n(667294),l=n(121314),o=n(274322),c=n(807488),d=n(386010),s=n(386720),u=n(592814),m=n(51436),p=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,r.Pi)((function(e){return i.createElement("span",{className:(0,d.default)(s.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(u.G,{icon:m.nYk,onClick:e.onRemove}))})),g=(0,r.Pi)((function(e){var t=i.useState(""),n=t[0],a=t[1],r=i.useState(""),o=r[0],c=r[1],p=i.useState(""),g=p[0],k=p[1],h=(0,l.oR)("policyStore"),b=(0,l.oR)("userStore"),N=h.findPolicy(e.webKey);return N?i.createElement("div",{className:(0,d.default)(s.Z.configContainer)},i.createElement("div",{className:(0,d.default)(s.Z.showControl)},i.createElement(u.G,{icon:N.isConfigOpen?m.nYk:m.cNd,onClick:function(){N.showConfig(!N.isConfigOpen)}})),N.isConfigOpen&&i.createElement("div",{className:(0,d.default)(s.Z.config)},i.createElement("div",{className:(0,d.default)(s.Z.permissions)},Array.from(N.klasses).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return N.removePermission(e,"class")},color:"success"})})),Array.from(N.groups).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return N.removePermission(e,"group")},color:"danger"})})),Array.from(N.users).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return N.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,d.default)(s.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:N.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},b.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(n,"class"),a("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return c(e.target.value)},disabled:N.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(b.groups,h.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(o,"group"),c("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:g,onChange:function(e){return k(e.target.value)},disabled:N.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},b.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(g,"user"),k("")}},"Add")))):null})),k=(0,r.Pi)((function(e){var t,n,r=(0,l.oR)("policyStore"),u=(0,l.oR)("userStore"),m=(0,a.Z)();if((0,l.aV)(e.webKey),!m)return i.createElement("div",null,"SSR");var f=r.find(e.webKey);return f?i.createElement("div",{"data--web-key":e.webKey,className:(0,d.default)(s.Z.wrapper,"solution-wrapper")},f.show||null!=(t=u.current)&&t.admin?i.createElement(c.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(p,null),!f.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,d.default)("alert alert--success",s.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&i.createElement(g,{webKey:f.webKey}),e.children):i.createElement("div",{className:(0,d.default)("alert",s.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(p,null))):i.createElement(o.Z,null)}));t.Z=k},274322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),c=n(592814),d=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(386010),d=n(471217),s=n(274322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,d.Pi)((function(e){var t=a.useState(!1),d=t[0],f=t[1],g=a.useState(!1),k=g[0],h=g[1],b=a.useRef(null),N=e.model,v=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return u&&k&&N.loaded?a.createElement("div",{onFocus:function(){return!d&&f(!0)},className:(0,c.default)(r)},a.createElement(u,{ref:b,theme:"snow",readOnly:e.readonly||N.readonly,className:(0,c.default)(i,e.monospace&&l,d?void 0:o),value:N.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&N.canUpdate&&k&&N.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},331331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),o=n(682593),c=n(61014),d=["components"],s={title:"1. Morsecode",label:"1. Morsecode"},u=void 0,m={unversionedId:"Codierung/Anwendungen/morsecode",id:"version-25h/Codierung/Anwendungen/morsecode",title:"1. Morsecode",description:"Der Morsecode (auch Morsealphabet oder Morsezeichen genannt) ist ein gebr\xe4uchlicher Code zur telegrafischen \xdcbermittlung von Buchstaben, Ziffern und weiterer Zeichen. Er bestimmt das Zeitschema, nach dem ein diskretes Signal ein- und ausgeschaltet wird.",source:"@site/versioned_docs/version-25h/05-Codierung/04-Anwendungen/01-morsecode.md",sourceDirName:"05-Codierung/04-Anwendungen",slug:"/Codierung/Anwendungen/morsecode",permalink:"/25h/Codierung/Anwendungen/morsecode",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/04-Anwendungen/01-morsecode.md",tags:[],version:"25h",sidebarPosition:1,frontMatter:{title:"1. Morsecode",label:"1. Morsecode"},sidebar:"version-25h/sidebar",previous:{title:"2. Informationsgehalt",permalink:"/25h/Codierung/Compression/redundancy"},next:{title:"2. QR Code",permalink:"/25h/Codierung/Anwendungen/qr-code"}},p={},f=[{value:"Tabelle zur Codierung",id:"tabelle-zur-codierung",level:2}],g={toc:f};function k(e){var t=e.components,s=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Der Morsecode (auch Morsealphabet oder Morsezeichen genannt) ist ein gebr\xe4uchlicher Code zur telegrafischen \xdcbermittlung von Buchstaben, Ziffern und weiterer Zeichen. Er bestimmt das Zeitschema, nach dem ein diskretes Signal ein- und ausgeschaltet wird.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Hp.Baumeler",source:"https://de.wikipedia.org/wiki/Morsecode#/media/Datei:Morsetaste.jpg",licence:"CC 4.0",licence_url:"https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses",edited:!1},caption:"Morsetaste der Firma Hasler Bern, ca. 1900",options:{},isInline:!1,src:n(790910).Z,alt:"Morsetaste der Firma Hasler Bern, ca. 1900",mdxType:"Image"})),(0,i.kt)("h2",{id:"tabelle-zur-codierung"},"Tabelle zur Codierung"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\u2212")),(0,i.kt)("td",{parentName:"tr",align:"center"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:"center"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"---")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7--\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7\xb7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Q"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"---\xb7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"J"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7---")),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"CH"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"----")))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"morse-code"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Morse-Code")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie ein Wort mit 6 Buchstaben in Morse-Code."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Entziffern Sie die codierten Worte Ihrer Pultnachbar:innen."),(0,i.kt)("li",{parentName:"ul"},"Wie viele Zeichen wurden verwendet?"),(0,i.kt)("li",{parentName:"ul"},"Was hat der Morsecode mit der Huffman-Codierung zu tun? Finden Sie Parallelen?"),(0,i.kt)("li",{parentName:"ul"},"Erstellen Sie eine praktischere Tabelle f\xfcr die Decodierung von Nachrichten")),(0,i.kt)(o.Z,{type:"text",webKey:"5ff9bd7e-6bad-4728-8396-849167bba91a",mdxType:"Answer"}),(0,i.kt)(c.Z,{webKey:"3673feb3-e73e-4ebd-b152-024b8826c571",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},'Das Decodieren von Morse-Code ist bedeutend einfacher, wenn die Tabelle als bin\xe4ren Baum dargestellt wird. Es ist zu sehen, dass die h\xe4ufigen Buchstaben weniger Zeichen ben\xf6tigen, als die seltenen Buchstaben. Das Prinzip ist dasselbe wie bei den Huffman-B\xe4umen, wobei hier ein Punkt "nach Links" und ein Strich "nach Rechts" bedeutet. Zudem ist braucht es im Vergleich zur Huffman-Codierung ',(0,i.kt)("strong",{parentName:"p"},"zwingend")," Abst\xe4nde zwischen den einzelnen Buchstaben - ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7\xb7\xb7\xb7\xb7")," k\xf6nnte sonst ",(0,i.kt)("inlineCode",{parentName:"p"},"EEEEEE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EIEI")," oder aber auch ",(0,i.kt)("inlineCode",{parentName:"p"},"EIS")," heissen. Deshalb braucht es einen Takt, in welchem immer nur ein Zeichen \xfcbertragen wird: Bei ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7\xb7")," ist klar, dass es ",(0,i.kt)("inlineCode",{parentName:"p"},"EIS")," heisst.  "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"                                \u2190 \xb7                - \u2192\n                    E                                           T\n                    \xb7                                           -\n           \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572                        \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572\n          I                    A                      N                    M\n         \xb7\xb7                    \xb7-                    -\xb7                    --\n     \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572\n    S          u          R          W          D          K          G          O   \n   \xb7\xb7\xb7        \xb7\xb7-        \xb7-\xb7        \xb7--        -\xb7\xb7        -\xb7-        --\xb7        ---\n   \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572  \n  H   V      F   \xdc      L   \xc4      P   J      B   X      C   Y      Z   Q      \xd6  CH \n\xb7\xb7\xb7\xb7 \xb7\xb7\xb7-  \xb7\xb7-\xb7 \xb7\xb7--  \xb7-\xb7\xb7 \xb7-\xb7-  \xb7--\xb7 \xb7---  -\xb7\xb7\xb7 -\xb7\xb7-  -\xb7-\xb7 -\xb7--  --\xb7\xb7 --\xb7-  ---\xb7 ----\n"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"verwendung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Verwendung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Recherchieren Sie im Internet,"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\xfcber welche Medien Morsezeichen \xfcbertragen werden k\xf6nnen (bspw. als elektrischer Puls \xfcber eine Leitung)"),(0,i.kt)("li",{parentName:"ul"},"wo Morsezeichen auch heute noch eingesetzt werden.")),(0,i.kt)(o.Z,{type:"text",webKey:"ae2462eb-94cf-48bb-9c8e-9f5c31a0c8da",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"akkustischer-morsecode"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Akkustischer Morsecode")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Gehen Sie in Vierergruppen zu einem Treppengel\xe4nder, jeweils zwei Personen an einem Ende des Gel\xe4nders."),(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Sie sich ausschliesslich \xfcber akkustische Morsezeichen verst\xe4ndigen? Verschicken- und empfangen Sie jeweils ein Wort mit mindestens 6 Buchstaben."),(0,i.kt)(o.Z,{type:"text",webKey:"b255835a-4c39-42a0-8a35-42d34595823f",placeholder:"Notizen...",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Morsecode"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},790910:function(e,t,n){t.Z=n.p+"assets/images/morsetaste-feaa9c57c632186a43ebd66d4c275362.jpeg"}}]);