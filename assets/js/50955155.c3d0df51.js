"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12876],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return Z}});var r=n(667294),a=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),s=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);a=i[l],n=""+t.replace(s,"")}return r.createElement("option",{value:t,className:a},n)},u=n(592814),d=n(51436),m=n(168949),p=n(972389),f=n(121314),k=n(274322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),a=r.useState("unchecked"),o=a[0],s=a[1],g=(0,f.oR)("documentStore").find(e.webKey),h=function(e){g.loaded&&(s("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return v(g.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(u.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(k.Z,null):r.createElement("div",null,"SSR")})),v=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:w(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(k.Z,null)})),y=n(583117),E=n(575552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,y.Z)({model:t},e))):r.createElement(k.Z,null)})),_=n(647271),C=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(697762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),n.loggedIn&&r.createElement(C,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(N,e)):r.createElement(k.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(667294),a="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),s=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],c=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&r.createElement(s,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),s=n(592814),c=n(51436),u=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(s.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(667294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(386010),c=n(471217),u=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],f=t[1],k=r.useState(!1),g=k[0],b=k[1],h=r.useRef(null),v=e.model,w=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&g&&v.loaded?r.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,s.default)(a)},r.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,s.default)(i,e.monospace&&l,c?void 0:o),value:v.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},98384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(583117),a=n(480102),i=(n(667294),n(603905)),l=n(884384),o=n(682593),s=["components"],c={title:"6. Netzwerkkarte"},u="6. Netzwerkkarte",d={unversionedId:"Computer/basics/Netzwerkkarte",id:"version-24K/Computer/basics/Netzwerkkarte",title:"6. Netzwerkkarte",description:"Ein Computer ohne M\xf6glichkeiten zur Kommunikation ist nicht mehr vorstellbar. Damit ein Computer sich in ein LAN einbinden kann, ben\xf6tigt er eine Netzwerkkarte \u2013 sei es eine mit Kabelanschluss oder eine drahtlose f\xfcr die Teilnahme in einem WLAN.",source:"@site/versioned_docs/version-24K/07-Computer/01-basics/06-Netzwerkkarte.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/Netzwerkkarte",permalink:"/24K/Computer/basics/Netzwerkkarte",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/07-Computer/01-basics/06-Netzwerkkarte.md",tags:[],version:"24K",sidebarPosition:6,frontMatter:{title:"6. Netzwerkkarte"},sidebar:"version-24K/sidebar",previous:{title:"5. Grafikkarte",permalink:"/24K/Computer/basics/Grafikkarte"},next:{title:"7. Hauptplatine",permalink:"/24K/Computer/basics/Mainboard"}},m={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Netzwerkkarte",id:"netzwerkkarte",level:2},{value:"Drahtlose Netzwerkkarte",id:"drahtlose-netzwerkkarte",level:2}],f={toc:p};function k(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6-netzwerkkarte"},"6. Netzwerkkarte"),(0,i.kt)("p",null,"Ein Computer ohne M\xf6glichkeiten zur Kommunikation ist nicht mehr vorstellbar. Damit ein Computer sich in ein LAN einbinden kann, ben\xf6tigt er eine Netzwerkkarte \u2013 sei es eine mit Kabelanschluss oder eine drahtlose f\xfcr die Teilnahme in einem WLAN."),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr die Netzwerkkarte gibt es folgende wichtige Kenngr\xf6sse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die maximale ",(0,i.kt)("strong",{parentName:"li"},"\xdcbertragungsrate")," gibt an, wie viele Daten pro Sekunde (im Idealfall) \xfcbertragen werden k\xf6nnen. Sie wird in der Einheit ",(0,i.kt)("strong",{parentName:"li"},"Mbps")," oder ",(0,i.kt)("strong",{parentName:"li"},"Gbps")," angegeben, was \xabMega- resp. Gigabit pro Sekunde\xbb bedeutet. Gemessen wird hier also nicht in Byte sondern in Bit, was etwas ungew\xf6hnlich ist.")),(0,i.kt)("h2",{id:"netzwerkkarte"},"Netzwerkkarte"),(0,i.kt)("p",null,"Heute ist die Netzwerkkarte meist direkt auf dem Mainboard integriert und muss nicht als Steckkarte hinzugef\xfcgt werden. Allerdings kann ein Computer (insbesondere Server) so immer noch aufger\xfcstet und mit mehreren Netzwerkkarten ausger\xfcstet werden."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:SMC_UE1211D-TXR01-92856.jpg"},caption:"Netzwerkkarte mit RJ45-Buchse",options:{},isInline:!1,src:n(967133).Z,alt:"Netzwerkkarte mit RJ45-Buchse",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raysonho @ Open Grid Scheduler / Grid Engine",author_uri:"https://commons.wikimedia.org/wiki/User:Raysonho",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:EthernetCableYellow3.jpg"},caption:"Netzwerkkabel mit RJ45-Stecker",options:{},isInline:!1,src:n(410730).Z,alt:"Netzwerkkabel mit RJ45-Stecker",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"drahtlose-netzwerkkarte"},"Drahtlose Netzwerkkarte"),(0,i.kt)("p",null,"Netzwerkkarten zur Verbindung mit einem drahtlosen Netzwerk (WLAN) gibt es in etlichen Ausf\xfchrungen. Einerseits kann sie in PCs und Server wie andere Steckkarten eingebaut werden, andererseits gibt es sie in kleineren Ausf\xfchrungen f\xfcr Notebooks oder sogar als USB-Stecker im Miniformat."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Zephyris",author_uri:"https://en.wikipedia.org/wiki/User:Zephyris",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:WLAN_PCI_Card_cleaned.png"},caption:"Drahtlose Netzwerkkarte mit Antenne f\xfcr PCs",options:{},isInline:!1,src:n(606643).Z,alt:"Drahtlose Netzwerkkarte mit Antenne f\xfcr PCs",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Gemtek_WiFi_Mini_PCI_Card_WMIR-103G-7783.jpg"},caption:"Drahtlose Netzwerkkarte f\xfcr Notebooks",options:{},isInline:!1,src:n(3612).Z,alt:"Drahtlose Netzwerkkarte f\xfcr Notebooks",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Pece",author_uri:"https://commons.wikimedia.org/wiki/User:Pece",licence:"CC-BY-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Karta_WiFi_USB_(02)_-_DSC05152_v1.jpg"},caption:"Drahtlose Netzwerkkarte f\xfcr USB-Anschluss",options:{},isInline:!1,src:n(150778).Z,alt:"Drahtlose Netzwerkkarte f\xfcr USB-Anschluss",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"netzwerkkarte"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Netzwerkkarte")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sie wollen f\xfcr die Ferien einige Filme von Netflix offline verf\xfcgbar machen und m\xfcssen insgesamt ",(0,i.kt)("inlineCode",{parentName:"p"},"10 GB")," Daten herunterladen. Ihr WLAN kann in ihr Zimmer maximal ",(0,i.kt)("inlineCode",{parentName:"p"},"150 Mbps")," \xfcbertragen. Wie viel Zeit gewinnen Sie, wenn Sie aufstehen um das Ger\xe4t per Ethernet an Ihren Glasfaser-Router mit ",(0,i.kt)("inlineCode",{parentName:"p"},"1 Gbps")," anschliessen?","*"),(0,i.kt)("p",{parentName:"div"},"Berechnen Sie:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Download Dauer per WLAN"),(0,i.kt)("li",{parentName:"ul"},"die Download Dauer per Ethernet"),(0,i.kt)("li",{parentName:"ul"},"den Zeitgewinn")),(0,i.kt)(o.Z,{type:"text",webKey:"f1c25b7d-6186-4cbf-9b8d-ca2728017b0c",mdxType:"Answer"}),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"*"," Die Voraussetzung f\xfcr diesen Vergleich w\xe4re nat\xfcrlich, dass die Netflix-Server die Filme auch effektiv mit 1Gbps bereitstellen w\xfcrden.")))))}k.isMDXComponent=!0},410730:function(e,t,n){t.Z=n.p+"assets/images/06-network-cable-0ae7c0da8cab9af403564976f891b281.jpg"},967133:function(e,t,n){t.Z=n.p+"assets/images/06-nic-2ade54c7414c1a33484e3753fc9fd156.jpg"},3612:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-notebook-1ab40ac4baac7607479e6a930d5db4d0.jpg"},606643:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-pc-c7fab4c602f414750c878aa354cc66ad.png"},150778:function(e,t,n){t.Z=n.p+"assets/images/06-wlan-usb-2f5f85d85f1b71c97d97c5818da576d8.jpg"}}]);