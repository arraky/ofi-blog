"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5992],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(p,l(l({ref:t},s),{},{components:n})):r.createElement(p,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return R},Z:function(){return _}});var r=n(667294),a=n(403435),o={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),i=n(471217),u=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);a=o[l],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:a},n)},s=n(592814),d=n(51436),m=n(168949),f=n(972389),p=n(121314),h=n(274322),v=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return o[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},g=(0,i.Pi)((function(e){var t,n=(0,f.Z)(),a=r.useState("unchecked"),i=a[0],u=a[1],v=(0,p.oR)("documentStore").find(e.webKey),g=function(e){v.loaded&&(u("unchecked"),v.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return u(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};u(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),r.useEffect((function(){v.loaded&&y(v.value)}),[v,n]),n?v.loaded?r.createElement("div",{className:o.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return g(e.target.value)},style:{width:e.width},value:v.value,className:b(v.value),disabled:!v.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return g(e.target.value)},value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(o[i],o.checkButton)},r.createElement(s.G,{icon:(t=i,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return o[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,i.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:o.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,o){return e.select?r.createElement("select",{key:o,onChange:function(e){return n(e.target.value,o)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:o,type:"text",onChange:function(e){return n(e.target.value,o)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),E=n(583117),x=n(575552),O=(0,i.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(x.Z,(0,E.Z)({model:t},e))):r.createElement(h.Z,null)})),P=n(647271),C=(0,i.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),N=n(697762),R=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=(0,i.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),o=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||N.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),o?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(P.Z,null),n.loggedIn&&r.createElement(C,{webKey:e.webKey}),"text"===e.type&&r.createElement(O,e),"string"===e.type&&r.createElement(g,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a="noLoginAlert_HRfh",o=n(239960),l=n(471217),i=n(121314),u=(0,l.Pi)((function(){return(0,i.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(o.Z,{to:"/login"},"Login"))}))},274322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(667294),a=n(386010),o="loader_FEpR",l="badge_oWqf",i=n(471217),u=n(592814),c=n(51436),s=(0,i.Pi)((function(){return r.createElement("div",{className:(0,a.default)(o)},r.createElement(u.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(667294),a="quillEditor_NxYB",o="quillAnswer_J46I",l="monospace_usc_",i="disableToolbar_bRdP",u=n(386010),c=n(471217),s=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var o=[];e.ol&&o.push({list:"ordered"}),e.ul&&o.push({list:"bullet"}),t.push(o)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],p=t[1],h=r.useState(!1),v=h[0],b=h[1],g=r.useRef(null),y=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var o=t[a.katex].default;window.katex=o}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),g&&g.current&&g.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,g&&g.current&&g.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&v&&y.loaded?r.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,u.default)(a)},r.createElement(d,{ref:g,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,u.default)(o,e.monospace&&l,c?void 0:i),value:y.text||"",onChange:function(t,n,r,a){var o,l;o=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&v&&y.setText(o)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},617297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(583117),a=n(480102),o=(n(667294),n(603905)),l=n(682593),i=["components"],u={title:"3. Prozessor"},c="3. Prozessor",s={unversionedId:"Computer/Rechnerarchitektur/cpu",id:"version-24f/Computer/Rechnerarchitektur/cpu",title:"3. Prozessor",description:"---",source:"@site/versioned_docs/version-24f/07-Computer/07-Rechnerarchitektur/03-cpu.md",sourceDirName:"07-Computer/07-Rechnerarchitektur",slug:"/Computer/Rechnerarchitektur/cpu",permalink:"/24f/Computer/Rechnerarchitektur/cpu",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/07-Computer/07-Rechnerarchitektur/03-cpu.md",tags:[],version:"24f",sidebarPosition:3,frontMatter:{title:"3. Prozessor"},sidebar:"version-24f/sidebar",previous:{title:"2. Bussystem",permalink:"/24f/Computer/Rechnerarchitektur/bus"},next:{title:"4. Von-Neumann-Zyklus",permalink:"/24f/Computer/Rechnerarchitektur/cycle"}},d={},m=[],f={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-prozessor"},"3. Prozessor"),(0,o.kt)("hr",null),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("iframe",{width:"100%",height:"515",src:"https://www.youtube-nocookie.com/embed/aue3hIQvhzo",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div",id:"take-home-message-aus-cpu-rollenspiel"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message aus CPU-Rollenspiel")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(l.Z,{type:"text",webKey:"c5ab98ee-a2a4-4a97-9f03-3d632fd16adf",mdxType:"Answer"}))))}p.isMDXComponent=!0}}]);