"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[73377],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},807488:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(583117),r=n(667294),i=n(386010),l=n(336162),o="details_BAp3";function s(e){var t=Object.assign({},e);return r.createElement(l.PO,(0,a.Z)({},t,{className:(0,i.default)("alert alert--info",o,t.className)}))}},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(667294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(583117),r=n(667294),i=n(972389),l=n(336162),o=n(386010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),N=k.tabGroupChoices,w=k.setTabGroupChoices,y=(0,r.useState)(v),E=y[0],z=y[1],x=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=N[p];null!=Z&&Z!==E&&h.some((function(e){return e.value===Z}))&&z(Z)}var L=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==E&&(S(t),z(a),null!=p&&w(p,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":c},g)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:B,onFocus:L,onClick:L},i,{className:(0,o.default)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},682593:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return B}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),s=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},c=n(592814),d=n(51436),m=n(168949),p=n(972389),g=n(121314),f=n(274322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),o=r[0],s=r[1],h=(0,g.oR)("documentStore").find(e.webKey),v=function(e){h.loaded&&(s("unchecked"),h.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&k(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&k(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:h.value,className:b(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(h.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(c.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:N(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),y=n(583117),E=n(575552),z=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,y.Z)({model:t},e))):a.createElement(f.Z,null)})),x=n(647271),S=(0,o.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(697762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},B=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(z,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(w,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},281013:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(667294),r=n(807488),i="finding_HjUo",l=n(386010),o=function(e){return a.createElement(r.Z,{summary:a.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,l.default)("alert alert--warning",i)},e.children)}},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),s=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(c,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],u=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(c,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&a.createElement(s,e.bib)))}},285107:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(21073),r=n(667294),i=n(409877),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},274322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),s=n(592814),u=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(386010),u=n(471217),c=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],g=t[1],f=a.useState(!1),h=f[0],b=f[1],v=a.useRef(null),k=e.model,N=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return d&&h&&k.loaded?a.createElement("div",{onFocus:function(){return!u&&g(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,u?void 0:o),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},303416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return g}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),o=n(682593),s=n(281013),u=(n(358215),n(285107),["components"]),c={title:"Routing im Alltag"},d="Routing im Alltag [^1]",m={unversionedId:"Netzwerke/Routing/routing-alltag",id:"version-24L/Netzwerke/Routing/routing-alltag",title:"Routing im Alltag",description:"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie",source:"@site/versioned_docs/version-24L/05-Netzwerke/004-Routing/01-routing-alltag.md",sourceDirName:"05-Netzwerke/004-Routing",slug:"/Netzwerke/Routing/routing-alltag",permalink:"/24L/Netzwerke/Routing/routing-alltag",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/05-Netzwerke/004-Routing/01-routing-alltag.md",tags:[],version:"24L",sidebarPosition:1,frontMatter:{title:"Routing im Alltag"},sidebar:"version-24L/sidebar",previous:{title:"Routing",permalink:"/24L/category/routing"},next:{title:"Routing im Internet",permalink:"/24L/Netzwerke/Routing/routing-internet"}},p={},g=[{value:"Verkehrsbetriebe Biel",id:"verkehrsbetriebe-biel",level:2},{value:"gefundene Analogien",id:"gefundene-analogien",level:2},{value:"Routing f\xfcr Touristen",id:"routing-f\xfcr-touristen",level:2},{value:"Ausfall Schienennetz",id:"ausfall-schienennetz",level:2},{value:"Grosse Gruppe",id:"grosse-gruppe",level:2}],f={toc:g};function h(e){var t=e.components,c=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing-im-alltag-"},"Routing im Alltag ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"vorgehensweise"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Vorgehensweise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Aufgaben l\xf6sen und die Ergebnisse notieren"),(0,i.kt)("li",{parentName:"ul"},"vor jedem \xabgewonnene Erkenntnisse\xbb \xfcberlegen Sie kurz, was eine gewonnene Erkenntnis sein k\xf6nnte \u2013 und zwar bevor Sie das K\xe4stchen aufklappen"),(0,i.kt)("li",{parentName:"ul"},"lesen Sie die \xabgewonnenen Erkenntnisse\xbb durch und \xfcberlegen Sie sich, was damit genau gemeint ist"),(0,i.kt)("li",{parentName:"ul"},"falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss dar\xfcber sprechen k\xf6nnen")))),(0,i.kt)("p",null,"Wir befinden uns auf der ",(0,i.kt)("a",{parentName:"p",href:"/24L/Netzwerke/Schichtenmodell/Vermittlungsschicht"},"Vermittlungs-Schicht"),": Hier werden IP-Pakete vom Start- zum Zielger\xe4t \xfcbertragen. Bei ihrem Weg durch das Internet m\xfcssen die Pakete geleitet werden \u2013 man spricht von ",(0,i.kt)("strong",{parentName:"p"},"Routing"),"."),(0,i.kt)("h2",{id:"verkehrsbetriebe-biel"},"Verkehrsbetriebe Biel"),(0,i.kt)("p",null,"Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der \xf6ffentliche Verkehr in der Stadt Biel sichergestellt."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"VB TPD",source:"https://www.vb-tpb.ch/de/fahren/linien-netzplan/",licence:"Public Domain",licence_url:"",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(187962).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Sie m\xf6chten mit dem \xd6V vom Gymnasium (L\xe4ndtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"mit-dem-netzplan"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Mit dem Netzplan")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten sehen Sie auf dem Liniennetz?"),(0,i.kt)(o.Z,{type:"text",id:"q1",webKey:"d6938484-81a6-4240-bbd0-b94ed04bdc72",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"-mit-google-maps"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\ud83d\udcbb mit Google Maps")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welchen Transportoptionen schl\xe4gt Ihnen ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3"},"Google Maps")," vor, wenn Sie die Route ",(0,i.kt)("em",{parentName:"p"},"L\xe4ndtestrasse 12")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Sportplatz Mettmoos")," suchen?"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Welche Optionen werden vorgeschlagen?"),(0,i.kt)("li",{parentName:"ul"},"Welches ist gem\xe4ss Google die beste Route?"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich die Route, wenn sie m\xf6glichst kurze Fusswege enthalten soll? (Einstellbar unter ",(0,i.kt)("em",{parentName:"li"},"Routenoptionen"),")"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich der Reisevorschlag, wenn Sie sp\xe4t in der Nacht eine Verbindung suchen?")),(0,i.kt)(o.Z,{type:"text",id:"q2",webKey:"482bf3ac-ff0d-44ca-9700-5274cf9fecd4",mdxType:"Answer"}))),(0,i.kt)(s.Z,{mdxType:"Finding"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es gibt mehrere Wege, welche ans Ziel f\xfchren."),(0,i.kt)("li",{parentName:"ul"},"Der optimale Weg ist abh\xe4ngig von den Rahmenbedingungen und kann sich ",(0,i.kt)("strong",{parentName:"li"},"\xe4ndern"),"."))),(0,i.kt)("h2",{id:"gefundene-analogien"},"gefundene Analogien"),(0,i.kt)("div",{className:"no-table-header"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"WLAN")),(0,i.kt)("td",{parentName:"tr",align:"left"},"zu Fuss bis zur n\xe4chsten Haltestelle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Sichtbare WLANs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Rechnernetz (LAN)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mit Bus (f\xfcr weiter entfernte Ziele: Tram, Zug, ...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Umsteigen an gewissen Haltestellen"))))),(0,i.kt)("h2",{id:"routing-f\xfcr-touristen"},"Routing f\xfcr Touristen"),(0,i.kt)("p",null,"Datenpakete sind \u2013 anders als wir als Passagiere vom ",(0,i.kt)("em",{parentName:"p"},"\xd6V")," \u2013 nicht intelligent. Sie wissen nicht, wie sie umsteigen m\xfcssen. Dies muss f\xfcr sie \xfcbernommen werden."),(0,i.kt)("p",null,"Ein Datenpaket im \xd6V vom Gymer zum Sportplatz Mettmoos m\xfcsste"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an ",(0,i.kt)("strong",{parentName:"li"},"jeder Haltestelle")," wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ob man Aussteigen oder Umsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"in welchen Bus man einsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"ob man am Ziel angekommen ist.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"an jeder Strassenkreuzung (wenn zu Fuss unterwegs) wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"welche Abzweigung es nehmen soll"),(0,i.kt)("li",{parentName:"ul"},"ob es am Ziel angekommen ist.")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"routing-tabelle"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Routing-Tabelle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Erstellen Sie f\xfcr das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen f\xfcr Datenpakete gem\xe4ss obigem Punkt 1. f\xfcr die folgenden Haltestellen:'),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Seehofweg"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Biel"),(0,i.kt)("li",{parentName:"ul"},"M\xfchlestrasse/Moulin"),(0,i.kt)("li",{parentName:"ul"},"Schulen Linde"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Mett")),(0,i.kt)("p",{parentName:"div"},"Beispiel-Anleitung: ",(0,i.kt)("strong",{parentName:"p"},"Seehofweg")," \u2192 Bus Nr. 9"),(0,i.kt)(o.Z,{type:"text",id:"q3",webKey:"7bcc9f60-6fe8-4162-b45f-8cda4e248730",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"andere-ziele"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Andere Ziele")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Anleitungen m\xfcssten nat\xfcrlich auch Anweisungen haben f\xfcr andere Ziele."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Wie w\xfcrden die Umsteigungsanweisungen f\xfcr die 5 obenstehenden Haltestellen f\xfcr das Ziel "Bern" lauten?'),(0,i.kt)("li",{parentName:"ul"},'Wie f\xfcr das Ziel "Z\xfcrich"?'),(0,i.kt)("li",{parentName:"ul"},"Muss jede Haltestelle wirklich Anweisungen f\xfcr jedes andere Ziel haben?")),(0,i.kt)(o.Z,{type:"text",id:"q4",webKey:"609cfe7e-bab0-4a50-97c7-7b3ac571fba0",mdxType:"Answer"}))),(0,i.kt)(s.Z,{mdxType:"Finding"},(0,i.kt)("p",null,'Es k\xf6nnen Anweisungen "delegiert" werden: Es muss nur der ',(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," wissen, in welchen Zug man einsteigen muss um nach Bern oder Z\xfcrich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den ",(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," weiter.")),(0,i.kt)("h2",{id:"ausfall-schienennetz"},"Ausfall Schienennetz"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Wegen Umbauarbeiten f\xe4llt die Linie Nr. 9 ab "Br\xfchlplatz" aus. Welche M\xf6glichkeiten haben Sie, wenn Sie beim ',(0,i.kt)("em",{parentName:"p"},"Seehofweg")," eingestiegen sind, um doch an den Sportplatz zu gelangen?")),(0,i.kt)(s.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen erm\xf6glichen aber eine gewisse ",(0,i.kt)("strong",{parentName:"p"},"Ausfallsicherheit"),". Im Beispiel oben k\xf6nnen Sie entweder beim Bahnhof Biel oder beim Br\xfchlplatz auf eine andere Verbindung umsteigen. ")),(0,i.kt)("h2",{id:"grosse-gruppe"},"Grosse Gruppe"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"4 Parallelklassen \u2013 also ca. 100 Personen haben beim Sportplatz Mettmoos abgemacht.\nWie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?")),(0,i.kt)(s.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Bei Engp\xe4ssen k\xf6nnen verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"},"informatik.mygymer.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},187962:function(e,t,n){t.Z=n.p+"assets/images/vb-verkehrsnetz-b17e10bcbeb65e0a89a8fbdff92e9906.png"}}]);