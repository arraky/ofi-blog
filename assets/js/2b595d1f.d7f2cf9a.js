"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11843],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,I=m["".concat(s,".").concat(g)]||m[g]||d[g]||i;return n?a.createElement(I,l(l({ref:t},u),{},{components:n})):a.createElement(I,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},807488:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(583117),r=n(667294),i=n(386010),l=n(336162),o="details_BAp3";function s(e){var t=Object.assign({},e);return r.createElement(l.PO,(0,a.Z)({},t,{className:(0,i.default)("alert alert--info",o,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return x},Z:function(){return j}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),s=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(592814),d=n(51436),m=n(168949),g=n(972389),I=n(121314),p=n(274322),f=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n=(0,g.Z)(),r=a.useState("unchecked"),o=r[0],s=r[1],f=(0,I.oR)("documentStore").find(e.webKey),h=function(e){f.loaded&&(s("unchecked"),f.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return f.loaded}),(function(e){e&&y(f.value)}))}),[f]),a.useEffect((function(){f.loaded&&y(f.value)}),[f,n]),n?f.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:f.value,className:b(f.value),disabled:!f.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(f.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(u.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(p.Z,null):a.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t=(0,I.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:N(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(p.Z,null)})),k=n(583117),C=n(575552),w=(0,o.Pi)((function(e){var t=(0,I.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(C.Z,(0,k.Z)({model:t},e))):a.createElement(p.Z,null)})),Z=n(647271),E=(0,o.Pi)((function(e){return(0,I.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),M=n(697762),x=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=(0,o.Pi)((function(e){var t=(0,I.oR)("documentStore"),n=(0,I.oR)("msalStore"),r=t.find(e.webKey),i=(0,g.Z)();return(0,I.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||M.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(Z.Z,null),n.loggedIn&&a.createElement(E,{webKey:e.webKey}),"text"===e.type&&a.createElement(w,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(v,e)):a.createElement(p.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),s=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],c=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(u,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&a.createElement(s,e.bib)))}},61014:function(e,t,n){var a=n(972389),r=n(471217),i=n(667294),l=n(121314),o=n(274322),s=n(807488),c=n(386010),u=n(386720),d=n(592814),m=n(51436),g=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},I=(0,r.Pi)((function(e){return i.createElement("span",{className:(0,c.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(d.G,{icon:m.nYk,onClick:e.onRemove}))})),p=(0,r.Pi)((function(e){var t=i.useState(""),n=t[0],a=t[1],r=i.useState(""),o=r[0],s=r[1],g=i.useState(""),p=g[0],f=g[1],b=(0,l.oR)("policyStore"),h=(0,l.oR)("userStore"),y=b.findPolicy(e.webKey);return y?i.createElement("div",{className:(0,c.default)(u.Z.configContainer)},i.createElement("div",{className:(0,c.default)(u.Z.showControl)},i.createElement(d.G,{icon:y.isConfigOpen?m.nYk:m.cNd,onClick:function(){y.showConfig(!y.isConfigOpen)}})),y.isConfigOpen&&i.createElement("div",{className:(0,c.default)(u.Z.config)},i.createElement("div",{className:(0,c.default)(u.Z.permissions)},Array.from(y.klasses).map((function(e,t){return i.createElement(I,{key:t,name:e,onRemove:function(){return y.removePermission(e,"class")},color:"success"})})),Array.from(y.groups).map((function(e,t){return i.createElement(I,{key:t,name:e,onRemove:function(){return y.removePermission(e,"group")},color:"danger"})})),Array.from(y.users).map((function(e,t){return i.createElement(I,{key:t,name:e,onRemove:function(){return y.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,c.default)(u.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:y.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},h.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(n,"class"),a("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return s(e.target.value)},disabled:y.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(h.groups,b.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(o,"group"),s("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:p,onChange:function(e){return f(e.target.value)},disabled:y.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},h.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(p,"user"),f("")}},"Add")))):null})),f=(0,r.Pi)((function(e){var t,n,r=(0,l.oR)("policyStore"),d=(0,l.oR)("userStore"),m=(0,a.Z)();if((0,l.aV)(e.webKey),!m)return i.createElement("div",null,"SSR");var I=r.find(e.webKey);return I?i.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(u.Z.wrapper,"solution-wrapper")},I.show||null!=(t=d.current)&&t.admin?i.createElement(s.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(g,null),!I.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=d.current)?void 0:n.admin)&&i.createElement(p,{webKey:I.webKey}),e.children):i.createElement("div",{className:(0,c.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(g,null))):i.createElement(o.Z,null)}));t.Z=f},546604:function(e,t,n){var a=n(583117),r=n(480102),i=n(386010),l=n(340922),o=n(512624),s=n(667294),c=n(197566),u=n(960549),d=["value","dragging","index"],m=function(e){var t=e.value,n=e.dragging,i=e.index,o=(0,r.Z)(e,d);return s.createElement(l.Rl,{prefixCls:"rc-slider-tooltip",overlay:""+t,visible:n,placement:"top",key:i},s.createElement(l.HH,(0,a.Z)({value:t},o)))},g=function(e){return s.createElement("div",{className:u.Z.colorTile,style:{background:"rgb("+e.r+","+e.g+","+e.b+")"}},s.createElement("div",{className:u.Z.tooltip},"Rot: "+e.r+", Gr\xfcn: "+e.g+", Blau: "+e.b+")"))};t.Z=function(){var e=s.useState(2),t=e[0],n=e[1],a=s.useState(1),r=a[0],l=a[1],d=s.useState([]),I=d[0],p=d[1];return s.useEffect((function(){l(Math.ceil(Math.log2(t)));for(var e=1===t?255:255/(t-1),n=[],a=0;a<t;a+=1)for(var r=Math.round(a*e),i=0;i<t;i+=1){for(var o=[],s=Math.round(i*e),c=0;c<t;c+=1)o.push({r:r,g:s,b:Math.round(c*e)});n.push(o)}p(n)}),[t]),s.createElement("div",{className:(0,i.default)("hero","shadow--lw",c.Z.container,u.Z.cmyk)},s.createElement("div",{className:"container"},s.createElement("p",{className:"hero__subtitle"},"Farbtiefen"),s.createElement("div",{className:(0,i.default)(u.Z.color)},s.createElement("span",{className:(0,i.default)(u.Z.label)},"Farbabstufungen"),s.createElement(o.Z,{value:t,handle:m,onChange:function(e){n(e)},min:1,max:10,dots:!0}),s.createElement("span",{className:(0,i.default)(u.Z.value)},""+t)),s.createElement("div",{className:(0,i.default)(u.Z.color,u.Z.blue,u.Z.property)},s.createElement("span",{className:(0,i.default)(u.Z.label)},"M\xf6gliche Farben"),s.createElement("span",{style:{flexGrow:1}}),s.createElement("span",{className:(0,i.default)(u.Z.value)},""+t*t*t)),s.createElement("div",{className:(0,i.default)(u.Z.color,u.Z.blue,u.Z.property)},s.createElement("span",{className:(0,i.default)(u.Z.label)},"Ben\xf6tigte Bits pro Farbkanal"),s.createElement("span",{style:{flexGrow:1}}),s.createElement("span",{className:(0,i.default)(u.Z.value)},""+r)),s.createElement("div",{className:(0,i.default)(u.Z.color,u.Z.blue,u.Z.property)},s.createElement("span",{className:(0,i.default)(u.Z.label)},"Farbtiefe pro Farbkanal"),s.createElement("span",{style:{flexGrow:1}}),s.createElement("span",{className:(0,i.default)(u.Z.value)},r<2?r+" bit":r+" bits")),s.createElement("div",{className:(0,i.default)(u.Z.color,u.Z.blue,u.Z.property)},s.createElement("span",{className:(0,i.default)(u.Z.label)},"Farbtiefe"),s.createElement("span",{style:{flexGrow:1}}),s.createElement("span",{className:(0,i.default)(u.Z.value)},r<1?"1 bit":3*r+" bits")),s.createElement("div",{className:(0,i.default)(u.Z.tileContainer)},I.map((function(e){return s.createElement("div",{className:(0,i.default)(u.Z.tileRow)},e.map((function(e,t){return s.createElement(g,{key:t,r:e.r,g:e.g,b:e.b})})))})))))}},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),s=n(592814),c=n(51436),u=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(386010),c=n(471217),u=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},I=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],I=t[1],p=a.useState(!1),f=p[0],b=p[1],h=a.useRef(null),y=e.model,N=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return d&&f&&y.loaded?a.createElement("div",{onFocus:function(){return!c&&I(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(i,e.monospace&&l,c?void 0:o),value:y.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&f&&y.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},88608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return I},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),o=(n(546604),n(682593),n(61014),["components"]),s={title:"1. Grundlagen",label:"1. Grundlagen"},c="1. Grundlagen [^1]",u={unversionedId:"Codes und Daten/Grafikformate/basics",id:"version-24i/Codes und Daten/Grafikformate/basics",title:"1. Grundlagen",description:"Raster- und Vektorgrafik",source:"@site/versioned_docs/version-24i/08-Codes und Daten/02-Grafikformate/01-basics.md",sourceDirName:"08-Codes und Daten/02-Grafikformate",slug:"/Codes und Daten/Grafikformate/basics",permalink:"/24i/Codes und Daten/Grafikformate/basics",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/08-Codes und Daten/02-Grafikformate/01-basics.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"1. Grundlagen",label:"1. Grundlagen"},sidebar:"version-24i/sidebar",previous:{title:"2. Informationsgehalt",permalink:"/24i/Codes und Daten/compression/redundancy"},next:{title:"2. Farbdarstellung",permalink:"/24i/Codes und Daten/Grafikformate/colors"}},d={},m=[{value:"Raster- und Vektorgrafik",id:"raster--und-vektorgrafik",level:2},{value:"Rastergrafik",id:"rastergrafik",level:2},{value:"Vektorgrafik",id:"vektorgrafik",level:2}],g={toc:m};function I(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-grundlagen-"},"1. Grundlagen ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"raster--und-vektorgrafik"},"Raster- und Vektorgrafik"),(0,i.kt)("p",null,"Bei der Speicherung von Grafiken und Bildern im Computer wird zwischen zwei grundlegenden Darstellungsarten unterschieden: der Raster- und der Vektorgrafik."),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Smiley als Rastergrafik",options:{},isInline:!1,src:n(142392).Z,alt:"Smiley als Rastergrafik",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Smiley als Vektorgrafik",options:{},isInline:!1,src:n(276896).Z,alt:"Smiley als Vektorgrafik",mdxType:"Image"})))),(0,i.kt)("h2",{id:"rastergrafik"},"Rastergrafik"),(0,i.kt)("p",null,"Bei einer Rastergrafik wird das Bild in viele kleine Quadrate unterteilt. Jedes Quadrat wird mit genau einer Farbe eingef\xe4rbt. Diese Quadrate werden ",(0,i.kt)("strong",{parentName:"p"},"Pixel")," genannt."),(0,i.kt)("p",null,"Die Anzahl Pixel, welche f\xfcr eine Rastergrafik verwendet werden, wird als ",(0,i.kt)("strong",{parentName:"p"},"Aufl\xf6sung")," des Bildes bezeichnet. Sie berechnet sich aus der Breite ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"b")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," und H\xf6he ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," der Grafik in Pixel."),(0,i.kt)("p",null,"Eine Rastergrafik mit hoher Aufl\xf6sung hat eine bessere Qualit\xe4t, ben\xf6tigt allerdings auch mehr Speicherplatz. Den theoretischen Speicherbedarf einer Rastergrafik h\xe4ngt von der Anzahl Pixel und dem verwendeten Farbmodell ab."),(0,i.kt)("p",null,"Rastergrafiken werden in erster Linie zur Speicherung von Fotos verwendet."),(0,i.kt)("h2",{id:"vektorgrafik"},"Vektorgrafik"),(0,i.kt)("p",null,"Bei einer Vektorgrafik wird das darzustellende Bild aus geometrischen Objekten wie Linien, Kreise oder Rechtecken zusammengesetzt. Das Prinzip ist dasselbe wie bei der Turtle-Grafik - jeder Pfad wird in einem Koordinatensystem beschrieben. Durch Hinein- oder Herauszoomen kann das Bild beliebig vergr\xf6ssert oder verkleinert werden, ohne dass mehr Speicherplatz ben\xf6tigt wird. "),(0,i.kt)("p",null,"Vektorgrafiken haben also zwei grosse Vorteile gegen\xfcber Pixelgrafiken. Erstens ben\xf6tigen sie normalerweise ",(0,i.kt)("strong",{parentName:"p"},"deutlich weniger Speicherplatz")," als eine entsprechende Pixelgrafik, da mit einem Objekt die Farbe von vielen Pixeln festgelegt wird."),(0,i.kt)("p",null,"Zweitens k\xf6nnen Vektorgrafiken ohne Qualit\xe4tseinbusse ",(0,i.kt)("strong",{parentName:"p"},"beliebig vergr\xf6ssert und verkleinert")," werden."),(0,i.kt)("p",null,"Die einzelnen Objekte k\xf6nnen einfarbig sein oder einen Farbverlauf haben, sowie teilweise transparent sein."),(0,i.kt)("p",null,"Vektorgrafiken werden deshalb insbesondere f\xfcr folgende Anwendungen eingesetzt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logos"),(0,i.kt)("li",{parentName:"ul"},"Illustrationen"),(0,i.kt)("li",{parentName:"ul"},"Symbole, Icons"),(0,i.kt)("li",{parentName:"ul"},"Schriftarten"),(0,i.kt)("li",{parentName:"ul"},"Strassen- und Landkarten")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Inspiration: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=943166"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}I.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},960549:function(e,t){t.Z={image:"image_G9S3",color:"color_umyu",property:"property_ifd7",label:"label_GZzs",value:"value_UOcF",transformed:"transformed_wOfO",red:"red_DUAB",green:"green_DI_q",blue:"blue_OvwO",alpha:"alpha_RPwX",cyan:"cyan_GnDs",magenta:"magenta_mmFp",yellow:"yellow_lgxd",key:"key_k33Z",cmyk:"cmyk_a0LL",copyBadge:"copyBadge_nVEh",copyIcon:"copyIcon_FV_S",tileContainer:"tileContainer_hjZ5",tileRow:"tileRow_Gp1U",colorTile:"colorTile_JCaD",tooltip:"tooltip_pBZE"}},197566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},142392:function(e,t,n){t.Z=n.p+"assets/images/01-smiley-raster-8b3fbe33c1c0c20102f9e5a524689e58.svg"},276896:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQxNnB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjE3NiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMzQsMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTk2LDI0NS43NUM5NiwyOTUuMjg0IDE0Ni4xODYsMzM1LjUgMjA4LDMzNS41QzI2OS44MTQsMzM1LjUgMzIwLDI5NS4yODQgMzIwLDI0NS43NUMyOTMuODY3LDI2MC42MSAyNTIuNjc4LDI3Mi42NzUgMjA4LDI3Mi42NzVDMTYzLjMyMiwyNzIuNjc1IDEyMi4xMzMsMjYwLjYxIDk2LDI0NS43NVoiIHN0eWxlPSJmaWxsOnJnYigyMTMsMCwwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxjaXJjbGUgY3g9Ijk2IiBjeT0iMjQ2IiByPSIyIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTU1LjI0MyIgY3k9IjI2NyIgcj0iMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI2MS4yMzgiIGN5PSIyNjciIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMDEiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMjMiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxNjMiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTQiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMTUiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyOTIiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMjAiIGN5PSIyNDYiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIzMzUuNSIgcj0iMiIvPgogICAgICAgIDx0ZXh0IHg9Ijg1Ljg1MnB4IiB5PSIyNTIuMzU1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjE8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iODkuNzI1cHgiIHk9IjI4NS40MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4yPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNC43MTNweCIgeT0iMzE4LjQwMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4zPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE1Ni42OTVweCIgeT0iMzQzLjQxNHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij40PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwNS4zMDJweCIgeT0iMzQ5LjM1NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij41PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI1NS41NDlweCIgeT0iMzQwLjg4OXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij42PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI5NS41NjFweCIgeT0iMzE2LjI1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjc8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzE5Ljg5OXB4IiB5PSIyNzguMjQ4cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjg8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzI1LjYyM3B4IiB5PSIyNDguNDAycHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjk8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMjUyLjg1MnB4IiB5PSIyNjAuMjA2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjEwPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwMS45NjVweCIgeT0iMjY4LjY5MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4xMTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDcuODUycHgiIHk9IjI2NC41NDVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+MTI8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIxNTYuNTUycHgiIHk9IjE1Ni40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YjwvdGV4dD4KICAgICAgICA8cGF0aCBkPSJNMTM0LDE0N0wxMjgsMTQ0TDEzNCwxNDFMMTMxLDE0NEwxMzQsMTQ3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNjAsMTQ0TDEzMSwxNDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIyIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIyNTMuNTJweCIgeT0iMTU2LjQyOHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij5jPC90ZXh0PgogICAgICAgIDxwYXRoIGQ9Ik0yMzAsMTQ3TDIyNCwxNDRMMjMwLDE0MUwyMjcsMTQ0TDIzMCwxNDdaIi8+CiAgICAgICAgPHBhdGggZD0iTTI1NiwxNDRMMjI3LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIxNDQiIHI9IjIiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zOCwyMTFMMzIsMjA4TDM4LDIwNUwzNSwyMDhMMzgsMjExWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMDgsMjA4TDM1LDIwOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjIiLz4KICAgICAgICA8dGV4dCB4PSIyMDQuNTUycHgiIHk9IjIyMC40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YTwvdGV4dD4KICAgIDwvZz4KICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjM4NCIgaGVpZ2h0PSIzODQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+Cjwvc3ZnPgo="}}]);