"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[22633],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(n),p=i,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return D},Z:function(){return M}});var a=n(667294),i=n(403435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),c=n(471217),s=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,i=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);i=r[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:i},n)},u=n(592814),d=n(51436),m=n(168949),p=n(972389),g=n(121314),b=n(274322),f=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n=(0,p.Z)(),i=a.useState("unchecked"),c=i[0],s=i[1],f=(0,g.oR)("documentStore").find(e.webKey),v=function(e){f.loaded&&(s("unchecked"),f.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return f.loaded}),(function(e){e&&y(f.value)}))}),[f]),a.useEffect((function(){f.loaded&&y(f.value)}),[f,n]),n?f.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:f.value,className:h(f.value),disabled:!f.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(f.value)},className:(0,l.default)(r[c],r.checkButton)},a.createElement(u.G,{icon:(t=c,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(b.Z,null):a.createElement("div",null,"SSR")})),y=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),I=function(e){return r[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},N=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(i,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return n(e.target.value,r)},value:i,className:I(i),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return n(e.target.value,r)},value:i,disabled:!t.loaded||t.readonly})}))):a.createElement(b.Z,null)})),k=n(583117),w=n(575552),C=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,k.Z)({model:t},e))):a.createElement(b.Z,null)})),x=n(647271),E=(0,c.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(697762),D=function(e){return e.replace(/\s+/g,"").toUpperCase()},M=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),i=t.find(e.webKey),r=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(E,{webKey:e.webKey}),"text"===e.type&&a.createElement(C,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(b.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),i="noLoginAlert_HRfh",r=n(239960),l=n(471217),c=n(121314),s=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(592814),l=n(51436),c=n(386010),s=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},a.createElement(r.G,{icon:l.Xjp}))))},o=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+o(n.size)+")",t.maxHeight=o(n.size),delete n.size),n.height&&(t.maxHeight=o(n.height),t.height=o(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+o(n.width)+")",t.width=o(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),r=a.useState(!1),l=r[0],o=r[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,c.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,r,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=t.left<=a&&t.right>=a,l=t.top<=i&&t.bottom>=i,r&&l||n(!1)}},a.createElement(u,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,c.default)(i.bib,l?i.visible:void 0),onClick:function(){return o(!l)}},"@"),l&&a.createElement(s,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),i=n(386010),r="loader_FEpR",l="badge_oWqf",c=n(471217),s=n(592814),o=n(51436),u=(0,c.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(s.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(667294),i="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",s=n(386010),o=n(471217),u=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],g=t[1],b=a.useState(!1),f=b[0],h=b[1],v=a.useRef(null),y=e.model,I=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",I))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",I)}}),[e]);return d&&f&&y.loaded?a.createElement("div",{onFocus:function(){return!o&&g(!0)},className:(0,s.default)(i)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(r,e.monospace&&l,o?void 0:c),value:y.text||"",onChange:function(t,n,a,i){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&f&&y.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},718940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(583117),i=n(480102),r=(n(667294),n(603905)),l=n(884384),c=n(682593),s=["components"],o={},u="2. EVAS-Prinzip",d={unversionedId:"Computer/basics/EVAS",id:"version-24L/Computer/basics/EVAS",title:"2. EVAS-Prinzip",description:"Das EVAS-Prinzip beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe Eingabe, Verarbeitung, Ausgabe und Speicherung ab.",source:"@site/versioned_docs/version-24L/07-Computer/01-basics/02-EVAS.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/EVAS",permalink:"/24L/Computer/basics/EVAS",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/07-Computer/01-basics/02-EVAS.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"1. Computerkategorien",permalink:"/24L/Computer/basics/kategorien"},next:{title:"3. Prozessor",permalink:"/24L/Computer/basics/cpu"}},m={},p=[{value:"Ein- und Ausgabeger\xe4te",id:"ein--und-ausgabeger\xe4te",level:2}],g={toc:p};function b(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-evas-prinzip"},"2. EVAS-Prinzip"),(0,r.kt)("p",null,"Das ",(0,r.kt)("strong",{parentName:"p"},"EVAS-Prinzip")," beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe ",(0,r.kt)("strong",{parentName:"p"},"Eingabe"),", ",(0,r.kt)("strong",{parentName:"p"},"Verarbeitung"),", ",(0,r.kt)("strong",{parentName:"p"},"Ausgabe")," und ",(0,r.kt)("strong",{parentName:"p"},"Speicherung")," ab."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(518108).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Daten m\xfcssen zuerst in den Computer gelangen. Dazu ist ein ",(0,r.kt)("strong",{parentName:"p"},"Eingabeger\xe4t")," notwendig, welches Informationen aus der Umwelt in digitale Daten umwandelt. Diese Informationen k\xf6nnen Bewegungen oder Aktionen der Benutzer:innen, Messwerte oder digitale Nachrichten eines anderen Computers sein."),(0,r.kt)("p",null,"Im Ger\xe4t werden die Daten ",(0,r.kt)("strong",{parentName:"p"},"gespeichert")," und ",(0,r.kt)("strong",{parentName:"p"},"verarbeitet"),"."),(0,r.kt)("p",null,"Ein ",(0,r.kt)("strong",{parentName:"p"},"Ausgabeger\xe4t")," wandelt Daten wieder in Informationen f\xfcr die Umwelt um. Diese k\xf6nnen beispielsweise visuell oder akustisch sein, um die Sinne der Benutzer:innen anzusprechen. Es kann sich aber auch um digitale Nachrichten handeln, die an andere Computer weitergeleitet werden."),(0,r.kt)("h2",{id:"ein--und-ausgabeger\xe4te"},"Ein- und Ausgabeger\xe4te"),(0,r.kt)("p",null,"Typische Ein- und Ausgabeger\xe4te f\xfcr Computer sind:"),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Tanya Ferrera",author_uri:"https://pixabay.com/de/users/sthenostudio-875253/",licence:"CC0",licence_url:"https://pixabay.com/images/id-1409743/"},caption:"Tastatur",options:{},isInline:!1,src:n(71279).Z,alt:"Tastatur",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-160032/"},caption:"Maus",options:{},isInline:!1,src:n(371199).Z,alt:"Maus",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"KMJ",author_uri:"https://de.wikipedia.org/wiki/User:KMJ",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Webcam_Apple_iSight.jpg"},caption:"Webcam",options:{},isInline:!1,src:n(632603).Z,alt:"Webcam",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-159612/"},caption:"Drucker",options:{},isInline:!1,src:n(646234).Z,alt:"Drucker",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Clker-Free-Vector-Images",author_uri:"https://pixabay.com/de/users/clker-free-vector-images-3736/",licence:"CC0",licence_url:"https://pixabay.com/images/id-32872/"},caption:"Bildschirm",options:{},isInline:!1,src:n(228585).Z,alt:"Bildschirm",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Bruno",author_uri:"https://pixabay.com/de/users/bru-no-1161770/",licence:"CC0",licence_url:"https://pixabay.com/images/id-971968/"},caption:"Lautsprecher",options:{},isInline:!1,src:n(692070).Z,alt:"Lautsprecher",mdxType:"Image"}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten f\xfcr die Ein- und Ausgabe von Daten hat Ihr Smartphone? Versuchen Sie, m\xf6glichst alle aufzuschreiben. Bilden Sie dabei folgende Kategorien:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"nur Eingabeger\xe4t"),(0,r.kt)("li",{parentName:"ul"},"Ein- und Ausgabeger\xe4t"),(0,r.kt)("li",{parentName:"ul"},"nur Ausgabeger\xe4t")),(0,r.kt)("p",{parentName:"div"},"Hilfreiche App: ",(0,r.kt)("a",{parentName:"p",href:"https://phyphox.org/"},"PhyPhox")),(0,r.kt)(c.Z,{type:"text",webKey:"ddb7899f-aa03-4095-aa29-b5f053d46b14",mdxType:"Answer"}))))}b.isMDXComponent=!0},518108:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjE5MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iNDY0IiB5PSIxOC44MzUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTA0LjgxMXB4IiB5PSI0Ny44MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BdXNnYWJlPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IlNwZWljaGVydW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjEyOCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIyNjQuMDQzcHgiIHk9IjE1Ny4xNDJweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ1bmc8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iVmVyYXJiZWl0dW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjE2IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjI2My4xNjRweCIgeT0iNDQuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlZlcmFyYmVpdHVuZzwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJFaW5nYWJlIj4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTguODgxcHgiIHk9IjQ0Ljk4NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5FaW5nYWJlPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTIyOCwzNEwyNDAsNDBMMjI4LDQ2QzIzMSw0MyAyMzEsMzcgMjI4LDM0WiIvPgogICAgPHBhdGggZD0iTTE3Niw0MEwyMzAuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ1MiwzNEw0NjQsNDBMNDUyLDQ2QzQ1NSw0MyA0NTUsMzcgNDUyLDM0WiIvPgogICAgPHBhdGggZD0iTTQwMCw0MEw0NTQuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTMyNiw3NkwzMjAsNjRMMzE0LDc2QzMxNyw3MyAzMjMsNzMgMzI2LDc2WiIvPgogICAgPHBhdGggZD0iTTMyNiwxMTZMMzIwLDEyOEwzMTQsMTE2QzMxNywxMTkgMzIzLDExOSAzMjYsMTE2WiIvPgogICAgPHBhdGggZD0iTTMyMCw3My42TDMyMCwxMTguNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgo8L3N2Zz4K"},71279:function(e,t,n){t.Z=n.p+"assets/images/02-keyboard-1d67851dad91a191004eb43f3f797542.png"},228585:function(e,t,n){t.Z=n.p+"assets/images/02-monitor-f40d6a2e974480de4c1374898be628d4.png"},371199:function(e,t,n){t.Z=n.p+"assets/images/02-mouse-d8db9c200fb155ae86b149c64aabe146.png"},646234:function(e,t,n){t.Z=n.p+"assets/images/02-printer-4aaaa2cf18b042f1174eaf2d0e94b3fa.png"},692070:function(e,t,n){t.Z=n.p+"assets/images/02-speakers-7fc0a79dfb6949a9b9903585c9d660a3.png"},632603:function(e,t,n){t.Z=n.p+"assets/images/02-webcam-8773575869b6c62d5e51fcb0db7e2b27.png"}}]);