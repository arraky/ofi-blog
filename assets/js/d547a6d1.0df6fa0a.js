"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[31690],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(n),p=r,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(667294),r=n(386010),i="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:n},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(583117),r=n(667294),i=n(972389),l=n(867392),s=n(707094),u=n(212466),o=n(386010),d="tabList_uSqn",m="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,p=e.block,f=e.defaultValue,h=e.values,g=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),z=y.tabGroupChoices,E=y.setTabGroupChoices,S=(0,r.useState)(N),B=S[0],x=S[1],A=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=z[g];null!=C&&C!==B&&v.some((function(e){return e.value===C}))&&x(C)}var T=function(e){var t=e.currentTarget,n=A.indexOf(t),a=v[n].value;a!==B&&(P(t),x(a),null!=g&&E(g,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.default)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":p},b)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return A.push(e)},onKeyDown:Z,onFocus:T,onClick:T},i,{className:(0,o.default)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":B===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(k.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},682593:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return P}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),u=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,r=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);r=i[l],n=""+t.replace(u,"")}return a.createElement("option",{value:t,className:r},n)},d=n(592814),m=n(51436),c=n(168949),p=n(972389),f=n(121314),h=n(274322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},k=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),s=r[0],u=r[1],g=(0,f.oR)("documentStore").find(e.webKey),k=function(e){g.loaded&&(u("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return u(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};u(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,c.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return v(g.value)},className:(0,l.default)(i[s],i.checkButton)},a.createElement(d.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:w(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(h.Z,null)})),y=n(583117),z=n(575552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(z.Z,(0,y.Z)({model:t},e))):a.createElement(h.Z,null)})),S=n(647271),B=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),x=n(697762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(B,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(N,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),s=n(121314),u=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),s=n(386010),u=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},o=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+o(n.size)+")",t.maxHeight=o(n.size),delete n.size),n.height&&(t.maxHeight=o(n.height),t.height=o(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+o(n.width)+")",t.width=o(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],o=i[1],m=e.caption&&"undefined"!==e.caption,c=e.bib||m;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),c&&a.createElement("figcaption",null,m&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(r.bib,l?r.visible:void 0),onClick:function(){return o(!l)}},"@"),l&&a.createElement(u,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",s=n(471217),u=n(592814),o=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(u.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",u=n(386010),o=n(471217),d=n(274322),m=void 0,c=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],f=t[1],h=a.useState(!1),g=h[0],b=h[1],k=a.useRef(null),v=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return m&&g&&v.loaded?a.createElement("div",{onFocus:function(){return!o&&f(!0)},className:(0,u.default)(r)},a.createElement(m,{ref:k,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,u.default)(i,e.monospace&&l,o?void 0:s),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(c,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},284067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return h}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),s=n(409877),u=n(72360),o=n(682593),d=["components"],m={title:"1. Aufgaben eines Betriebssystems"},c="1. Aufgaben eines Betriebssystems",p={unversionedId:"Computer/Betriebssystem/aufgaben",id:"version-24i/Computer/Betriebssystem/aufgaben",title:"1. Aufgaben eines Betriebssystems",description:"Was ist ein Betriebssystem?",source:"@site/versioned_docs/version-24i/07-Computer/08-Betriebssystem/01-aufgaben.md",sourceDirName:"07-Computer/08-Betriebssystem",slug:"/Computer/Betriebssystem/aufgaben",permalink:"/24i/Computer/Betriebssystem/aufgaben",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/08-Betriebssystem/01-aufgaben.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"1. Aufgaben eines Betriebssystems"},sidebar:"version-24i/sidebar",previous:{title:"4. Betriebssystem",permalink:"/24i/Computer/Betriebssystem/"},next:{title:"2. Betriebssysteme",permalink:"/24i/Computer/Betriebssystem/betriesbssysteme"}},f={},h=[{value:"Was ist ein Betriebssystem?",id:"was-ist-ein-betriebssystem",level:2},{value:"Aufgaben eines Betriebssystems",id:"aufgaben-eines-betriebssystems",level:2},{value:"Aufstarten des Computers ",id:"aufstarten-des-computers-",level:2},{value:"Betriebssysteme, Puzzle",id:"betriebssysteme-puzzle",level:2}],g={toc:h};function b(e){var t=e.components,m=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-aufgaben-eines-betriebssystems"},"1. Aufgaben eines Betriebssystems"),(0,i.kt)("h2",{id:"was-ist-ein-betriebssystem"},"Was ist ein Betriebssystem?"),(0,i.kt)("p",null,"Ein ",(0,i.kt)("strong",{parentName:"p"},"Betriebssystem")," (engl. ",(0,i.kt)("em",{parentName:"p"},"operating system"),", kurz ",(0,i.kt)("em",{parentName:"p"},"OS"),") ist eine Sammlung von Softwarekomponenten, die das Nutzen von Anwenderprogrammen erst m\xf6glich macht."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/GjNp0bBrjmU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("h2",{id:"aufgaben-eines-betriebssystems"},"Aufgaben eines Betriebssystems"),(0,i.kt)("p",null,"Ein Betriebssystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"erm\xf6glicht ",(0,i.kt)("strong",{parentName:"li"},"Benutzerinteraktion")," und \xfcbernimmt die ",(0,i.kt)("strong",{parentName:"li"},"Benutzerverwaltung"),","),(0,i.kt)("li",{parentName:"ul"},"verwaltet die ",(0,i.kt)("strong",{parentName:"li"},"Ressourcen")," (also die Hardware) und den Zugriff darauf,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Arbeits- und Festplatten",(0,i.kt)("strong",{parentName:"li"},"speicher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prozessorzeit")," (welches Programm zu welchem Zeitpunkt wie lange ausgef\xfchrt wird)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"angeschlossene Ger\xe4te")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startet")," und ",(0,i.kt)("strong",{parentName:"li"},"unterbricht")," Anwendungsprogramme und"),(0,i.kt)("li",{parentName:"ul"},"stellt ",(0,i.kt)("strong",{parentName:"li"},"Dienstprogramme")," zur Verf\xfcgung (z.B. zur Benutzer- oder Dateiverwaltung).")),(0,i.kt)("p",null,"Dies ist auch n\xf6tig, denn damit mehrere Programme gleichzeitig verwendet werden k\xf6nnen, muss jedes Programm immer wieder an die Reihe kommen und ein St\xfcckchen weiterarbeiten d\xfcrfen. Das Betriebssystem sorgt daf\xfcr, dass dies fair geschieht."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Golftheman",author_uri:"",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Operating_system_placement-de.svg"},caption:"Zusammenhang Benutzer, Software, Hardware",options:{},isInline:!1,src:n(398007).Z,alt:"Zusammenhang Benutzer, Software, Hardware",mdxType:"Image"})),(0,i.kt)("h2",{id:"aufstarten-des-computers-"},"Aufstarten des Computers ",(0,i.kt)("sup",{parentName:"h2",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("p",null,"Wenn der Computer eingeschaltet wird, so m\xfcssen zuerst die Treiberprogramme und das Betriebssystem von der Harddisk oder der SSD in den Arbeitsspeicher geladen werden. Das heisst, die Programmcodes werden von der Harddisk in den Arbeitsspeicher kopiert. Erst dann k\xf6nnen diese vom Prozessor ausgef\xfchrt werden und der Computer ist bereit, um weitere Applikationen zu starten. Dazu dient das ",(0,i.kt)("strong",{parentName:"p"},"BIOS")," (Basic Input Output System) oder ",(0,i.kt)("strong",{parentName:"p"},"UEFI")," (Universal Extendable Firmware Interface). Beides sind auch wieder Programme. Sie geh\xf6ren aber nicht zum Betriebssystem, sondern sind selber ein eigenes, vom Hersteller des Computers auf die Hardware abgestimmtes Betriebssystem. Den Vorgang des Aufstartens wird im Fachjargon als ",(0,i.kt)("strong",{parentName:"p"},"booten")," bezeichnet."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Isabella Carapella",source:"https://www.huffpost.com/entry/pull-yourself-up-by-your-bootstraps-nonsense_n_5b1ed024e4b0bbb7a0e037d4",licence:"Unknown",licence_url:"https://www.huffpost.com/",edited:!1},caption:"Pull Yourself Up By Your Bootstraps",options:{},isInline:!1,src:n(730432).Z,alt:"Pull Yourself Up By Your Bootstraps",mdxType:"Image"})),(0,i.kt)("p",null,"Der Begriff kommt von der englischen Redewendung ",(0,i.kt)("em",{parentName:"p"},"\xabsich an den eigenen Stiefelriemen (bootstraps) \xfcber den Zaun ziehen\xbb")," und meint einfach, dass man sich selbst auf (scheinbar) unm\xf6gliche Art aus einer Zwickm\xfchle heraushilft.\nDie Zwickm\xfchle beim Start des Computers besteht darin \xabwie bringe ich die Programme in den Arbeitsspeicher, wenn ich dazu ein Programm brauche, dass bereits im Arbeitsspeicher sein muss?\xbb Beim Computer hilft man sich so, dass ein Teil des Arbeitsspeichers aus speziellen Speicherzellen besteht, welche Ihren Inhalt auch nach dem Ausschalten des Computers nicht verlieren. In diesem Teil des Arbeitsspeichers liegt dann das Programm, welches der Computer nach dem Einschalten als erstes ausf\xfchrt. Dieses Programm l\xe4dt das BIOS / UEFI in den Arbeitsspeicher, welches seinerseits das Betriebssystem l\xe4dt und startet."),(0,i.kt)("h2",{id:"betriebssysteme-puzzle"},"Betriebssysteme, Puzzle"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"puzzle"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Puzzle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Jede Expertin und jeder Experte ist nach der Expertenrunde bereit, das zugeteilte Thema selbst\xe4ndig in der Unterrichtsrunde einer Gruppe von vier bis f\xfcnf Mitsch\xfcler:innen w\xe4hrend 10 Minuten zu vermitteln."),(0,i.kt)("h3",{parentName:"div",id:"auftrag"},"Auftrag"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lesen und Bearbeiten")," Sie die Texte und Inhalte gem\xe4ss den Angaben zu Ihrem Thema."),(0,i.kt)("li",{parentName:"ol"},"Diskutieren Sie in der Gruppe, welches Lernziel sp\xe4ter in der Unterrichtsrunde erreicht werden soll. Was sollen Ihre Kolleginnen/Kollegen wissen, k\xf6nnen, verstehen?"),(0,i.kt)("li",{parentName:"ol"},"Erstellen Sie in der Expertenrunde eine ",(0,i.kt)("strong",{parentName:"li"},"kleine Pr\xe4sentation")," (2 bis 3 Folien maximal), welche Sie dann in der Unterrichtsrunde benutzen, um Ihren Kolleginnen und Kollegen Ihr Thema zu vermitteln."),(0,i.kt)("li",{parentName:"ol"},"Formulieren Sie eine ",(0,i.kt)("strong",{parentName:"li"},"Testfrage"),", um in der Unterrichtsrunde zu \xfcberpr\xfcfen, ob das Lernziel erreicht wurde."),(0,i.kt)("li",{parentName:"ol"},"Bereiten Sie sich darauf vor, in der Unterrichtsrunde Ihren Kolleg:innen direkt auf dem Notebook das ",(0,i.kt)("strong",{parentName:"li"},"Verwaltungsprogramm"),", welches zu Ihrem Thema geh\xf6rt, zu demonstrieren. Im Idealfall werden Ihre Kolleg:innen unter Ihrer Anleitung das Programm auf den eigenen Notebooks \xf6ffnen.")),(0,i.kt)(s.Z,{defaultValue:"p-1",values:[{label:"Gruppe 1",value:"p-1"},{label:"Gruppe 2",value:"p-2"},{label:"Gruppe 3",value:"p-3"},{label:"Gruppe 4",value:"p-4"},{label:"Gruppe 5",value:"p-5"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"p-1",mdxType:"TabItem"},(0,i.kt)("h3",{parentName:"div",id:"aufgabe"},"Aufgabe"),(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,i.kt)("strong",{parentName:"p"},"Dateisystem"),"."),(0,i.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(370568).Z},"Dateisystem.pdf"),", Abschnitte 5.1 und 5.3 (bis und mit erster Absatz nach Abbildung)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/HDD-oder-SSD-Was-ist-besser-4121739.html"},"HDD oder SSD"),", Abschnitte ",(0,i.kt)("em",{parentName:"li"},"HDD")," und ",(0,i.kt)("em",{parentName:"li"},"SSD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Computerverwaltung-in-Windows-10-oeffnen-so-geht-s-4243814.html"},"Computerverwaltung Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/de-ch/guide/disk-utility/dskutl1029/mac"},"Computerverwaltung Mac"))),(0,i.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Laufwerk?"),(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Block in Zusammenhang mit Laufwerken?"),(0,i.kt)("li",{parentName:"ul"},"Welche Unterschiede gibt es zwischen Harddisks und Solid-State-Disks?"),(0,i.kt)("li",{parentName:"ul"},"Was ist schliesslich die Aufgabe des Dateisystems?")),(0,i.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme (siehe auch Links unten):"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Windows: Computerverwaltung, Datentr\xe4gerverwaltung"),(0,i.kt)("li",{parentName:"ul"},"Mac: Festplattendienstprogramm")),(0,i.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,i.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,i.kt)(o.Z,{type:"text",webKey:"eacf059b-8b7f-4e89-9f47-2a8ff8772104",mdxType:"Answer"})),(0,i.kt)(u.Z,{value:"p-2",mdxType:"TabItem"},(0,i.kt)("h3",{parentName:"div",id:"aufgabe-1"},"Aufgabe"),(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,i.kt)("strong",{parentName:"p"},"Prozess- und Speicherverwaltung"),"."),(0,i.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(415060).Z},"Grundbegriffe.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(510931).Z},"Multizser-Multitasking.pdf")," Abschnitt 1.4.3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sachsen.schule/~gdb/daten_verarbeiten/BS/Multitasking.html"},"Multitasking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/server/konfiguration/task-manager-aufrufen/"},"Taskmanager - Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/de-de/guide/activity-monitor/actmntr1001/mac"},"Aktivit\xe4tsanzeige - Mac")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li"},(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:n(676114).Z,type:"audio/mpeg",style:{}}))))),(0,i.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Prozess?"),(0,i.kt)("li",{parentName:"ul"},"Welche Ressourcen braucht ein Prozess zu seiner Ausf\xfchrung?"),(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter Singletasking und unter Multitasking?"),(0,i.kt)("li",{parentName:"ul"},"Was ist der Unterschied zwischen kooperativem und pr\xe4emptivem Multitasking? Vielleicht suchen Sie nach einer eigenen Metapher?"),(0,i.kt)("li",{parentName:"ul"},"Was ist schliesslich die Aufgabe der Prozess- und Speicherverwaltung auf einen Punkt gebracht?")),(0,i.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Windows: Taskmanager"),(0,i.kt)("li",{parentName:"ul"},"Mac: Aktivit\xe4tsanzeige")),(0,i.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,i.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,i.kt)(o.Z,{type:"text",webKey:"02c5ed5b-fd34-45ba-9232-7315bbdbf757",mdxType:"Answer"})),(0,i.kt)(u.Z,{value:"p-3",mdxType:"TabItem"},(0,i.kt)("h3",{parentName:"div",id:"aufgabe-2"},"Aufgabe"),(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema ",(0,i.kt)("strong",{parentName:"p"},"Benutzerverwaltung"),"."),(0,i.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(786960).Z},"Multiuser.pdf")," 1.4.1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Material/benutzerverwaltung"},"Benutzerverwaltung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Computerverwaltung-in-Windows-10-oeffnen-so-geht-s-4243814.html"},"Windows: Computerverwaltung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Windows-10-Neuen-Benutzer-anlegen-4058638.html#benutzer_anlegen_passwort"},"Windows: Benutzer:in Anlegen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maclife.de/ratgeber/benutzer-gruppen-unter-macos-sierra-einrichten-konfigurieren-gehts-10088133.html"},"Mac: Benutzerverwaltung"))),(0,i.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Multiuser-System?"),(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Benutzerkonto auf einem Computer?"),(0,i.kt)("li",{parentName:"ul"},"Wie h\xe4ngen Benutzerkonten und Dateisystem zusammen?"),(0,i.kt)("li",{parentName:"ul"},"Was ist der Unterschied zwischen einem Adminstratorkonto und einem normalen Benutzerkonto?")),(0,i.kt)("p",{parentName:"div"},"Erkl\xe4ren Sie dann m\xf6glichst anschaulich die Aufgabe der Benutzerverwaltung."),(0,i.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Windows: Computerverwaltung, Lokale Benutzer und Gruppen, Benutzer einrichten"),(0,i.kt)("li",{parentName:"ul"},"Mac: Benutzerverwaltung")),(0,i.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen?"),(0,i.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,i.kt)(o.Z,{type:"text",webKey:"0e0f3b69-29e6-4519-8f7f-d2ba1a86515c",mdxType:"Answer"})),(0,i.kt)(u.Z,{value:"p-4",mdxType:"TabItem"},(0,i.kt)("h3",{parentName:"div",id:"aufgabe-3"},"Aufgabe"),(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema Ger\xe4teverwaltung und Treiber."),(0,i.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen (Jeweils nur die Erkl\xe4rungen und Diagramme ohne die Aufgaben):"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Rolle_der_Ger%C3%A4teverwaltung"},"Rolle der Ger\xe4teverwaltung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Abh%C3%A4ngig_und_gleichzeitig_unabh%C3%A4ngig"},"Aufteilung der Ger\xe4teverwaltung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Ger%C3%A4tetreiber"},"Ger\xe4tetreiber")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vfhcab.eduloop.de/loop/Ger%C3%A4teklassen"},"Ger\xe4teklasse und Ger\xe4te")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Geraetemanager-in-Windows-10-starten-4567818.html"},"Windows: Ger\xe4temanager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/de-de/HT203001"},"Mac: Systeminformationen"))),(0,i.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Ger\xe4t in Zusammenhang mit Betriebssystemen?"),(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Treiber?"),(0,i.kt)("li",{parentName:"ul"},"Was muss ich tun, wenn ich eine neue Grafikkarte in meinen Computer einbauen, damit diese auch gebraucht werden kann?"),(0,i.kt)("li",{parentName:"ul"},"Was ist also die Aufgabe der Ger\xe4teverwaltung und der Treiber auf den Punkt gebracht?")),(0,i.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme (siehe auch Links unten):"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Windows: Ger\xe4temanager"),(0,i.kt)("li",{parentName:"ul"},"Mac: Systeminformationen")),(0,i.kt)("p",{parentName:"div"},"Wozu dienen diese Programme? Was sollte man \xfcber sie wissen? "),(0,i.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,i.kt)(o.Z,{type:"text",webKey:"f6dffe1e-3365-4df5-b89b-8df26e1b482f",mdxType:"Answer"})),(0,i.kt)(u.Z,{value:"p-5",mdxType:"TabItem"},(0,i.kt)("h3",{parentName:"div",id:"aufgabe-4"},"Aufgabe"),(0,i.kt)("p",{parentName:"div"},"Erstellen Sie eine kurze Pr\xe4sentation (zwei bis drei Folien) zum Thema Benutzeroberfl\xe4che."),(0,i.kt)("p",{parentName:"div"},"Verwenden Sie dazu folgende Ressourcen:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/websites/webdesign/grafische-benutzeroberflaeche-alles-fuer-ein-gutes-ui/"},"Arten der Benutzeroberfl\xe4che")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Terminal_(Computer)"},"Terminal, Konsole")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Shell_(Betriebssystem)"},"Shell")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ionos.de/digitalguide/websites/web-entwicklung/was-ist-ein-gui/"},"Was ist ein GUI?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Grafische_Benutzeroberfl%C3%A4che"},"GUI Entwicklung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/timapplecodes/linux-commands-that-work-in-powershell-by-default-17gd"},"Supported Linux-Commands"))),(0,i.kt)("p",{parentName:"div"},"Gehen Sie auf folgende Punkte ein:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Was versteht man unter einem Command Line Interface (CLI), einer Konsole, einem Terminal, einer Shell?"),(0,i.kt)("li",{parentName:"ul"},"Wie kommuniziert man mit einem Computer \xfcber eine Konsole oder ein Terminal?"),(0,i.kt)("li",{parentName:"ul"},"Wann, wo und vom wem wurden die ersten grafischen Benutzeroberfl\xe4chen entwickelt?"),(0,i.kt)("li",{parentName:"ul"},"Wie haben fr\xfchere grafischen Benutzeroberfl\xe4chen ausgesehen?")),(0,i.kt)("p",{parentName:"div"},"Machen Sie sich schlau \xfcber die folgenden Dienstprogramme:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Windows: Powershell und Explorer"),(0,i.kt)("li",{parentName:"ul"},"Mac: Terminal und Finder")),(0,i.kt)("p",{parentName:"div"},"Probieren Sie die Befehle ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cd <Ordnername>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," aus (siehe auch letzer Link oben)."),(0,i.kt)("p",{parentName:"div"},"Zeigen Sie, wie man den Inhalt eines Ordners sowohl in der grafischen Benutzeroberfl\xe4che, als auch via Shell anzeigen kann."),(0,i.kt)("p",{parentName:"div"},"Bereiten Sie sich vor, diese Programme mit Ihren Kolleginnen und Kollegen anzuschauen."),(0,i.kt)(o.Z,{type:"text",webKey:"e043e6ef-09c3-42ac-911b-47061c72c993",mdxType:"Answer"}))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: A. Scheidegger",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},370568:function(e,t,n){t.Z=n.p+"assets/files/Dateisystem-bb148290f93da9cabb1e240d2dfe1397.pdf"},415060:function(e,t,n){t.Z=n.p+"assets/files/Grundbegriffe-7f6c98008e55a2d9138ae39ad20bd192.pdf"},510931:function(e,t,n){t.Z=n.p+"assets/files/Multiuser-Multitasking-a960d251c5ee9e35feb902a3df61b9e3.pdf"},786960:function(e,t,n){t.Z=n.p+"assets/files/Multiuser-a960d251c5ee9e35feb902a3df61b9e3.pdf"},676114:function(e,t,n){t.Z=n.p+"assets/files/record-scheidegger-8532d7e71057ee49fb7e2e71e9b1e39a.m4a"},730432:function(e,t,n){t.Z=n.p+"assets/images/01-bootstrapping-a425a3381cc43598779892d65ba2569f.png"},398007:function(e,t,n){t.Z=n.p+"assets/images/01-os-layers-38881451e2815eda07a093157c093a5d.svg"}}]);