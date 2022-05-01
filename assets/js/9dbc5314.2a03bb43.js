"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[42682],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,f=m["".concat(o,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return Z}});var a=n(667294),i=n(403435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),o=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,i=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);i=r[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:i},n)},d=n(592814),u=n(51436),m=n(168949),p=n(972389),f=n(121314),g=n(274322),k=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),i=a.useState("unchecked"),s=i[0],o=i[1],k=(0,f.oR)("documentStore").find(e.webKey),v=function(e){k.loaded&&(o("unchecked"),k.setData({value:e,type:"string"}))},b=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&b(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&b(k.value)}),[k,n]),n?k.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:k.value,className:h(k.value),disabled:!k.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(k.value)},className:(0,l.default)(r[s],r.checkButton)},a.createElement(d.G,{icon:(t=s,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),b=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return r[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(i,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return n(e.target.value,r)},value:i,className:y(i),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return n(e.target.value,r)},value:i,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),w=n(583117),x=n(575552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(x.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),_=n(647271),D=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(697762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),i=t.find(e.webKey),r=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(_.Z,null),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(667294),i="noLoginAlert_HRfh",r=n(239960),l=n(471217),s=n(121314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(592814),l=n(51436),s=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(r.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),r=a.useState(!1),l=r[0],c=r[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,r,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=t.left<=a&&t.right>=a,l=t.top<=i&&t.bottom>=i,r&&l||n(!1)}},a.createElement(d,e),m&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,l?i.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&a.createElement(o,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i=n(386010),r="loader_FEpR",l="badge_oWqf",s=n(471217),o=n(592814),c=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(o.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),i="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(386010),c=n(471217),d=n(274322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],g=a.useState(!1),k=g[0],h=g[1],v=a.useRef(null),b=e.model,y=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){u=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return u&&k&&b.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(i)},a.createElement(u,{ref:v,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,o.default)(r,e.monospace&&l,c?void 0:s),value:b.text||"",onChange:function(t,n,a,i){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&k&&b.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},332026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var a=n(583117),i=n(480102),r=(n(667294),n(603905)),l=n(884384),s=n(682593),o=["components"],c={title:"5. Grafikkarte"},d="5. Grafikkarte",u={unversionedId:"Computer/basics/Grafikkarte",id:"Computer/basics/Grafikkarte",title:"5. Grafikkarte",description:"Die Grafikkarte ist neben dem Prozessor die zweite wichtige Komponente, welche im Computer f\xfcr die Verarbeitung von Daten zust\xe4ndig ist. Grafikkarten haben folgende Aufgaben:",source:"@site/docs/Computer/01-basics/05-Grafikkarte.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Grafikkarte",permalink:"/Computer/basics/Grafikkarte",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/05-Grafikkarte.md",tags:[],version:"current",lastUpdatedAt:1641728387,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:5,frontMatter:{title:"5. Grafikkarte"},sidebar:"sidebar",previous:{title:"4. Speicher",permalink:"/Computer/basics/Speicher"},next:{title:"6. Netzwerkkarte",permalink:"/Computer/basics/Netzwerkkarte"}},m={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Steuerung des Bildschirms",id:"steuerung-des-bildschirms",level:3}],f={toc:p};function g(e){var t=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-grafikkarte"},"5. Grafikkarte"),(0,r.kt)("p",null,"Die Grafikkarte ist neben dem Prozessor die zweite wichtige Komponente, welche im Computer f\xfcr die ",(0,r.kt)("strong",{parentName:"p"},"Verarbeitung")," von Daten zust\xe4ndig ist. Grafikkarten haben folgende Aufgaben:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erzeugen einer Pixelgrafik aus einer anderen Darstellungsform,"),(0,r.kt)("li",{parentName:"ul"},"Speichern dieser Pixelgrafik, des ",(0,r.kt)("strong",{parentName:"li"},"Bildschirminhalts"),","),(0,r.kt)("li",{parentName:"ul"},"Steuerung des Bildschirms, damit er den Bildschirminhalt anzeigt.")),(0,r.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,r.kt)("p",null,"F\xfcr Grafikkarten gibt es drei wichtige Kenngr\xf6ssen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die maximale ",(0,r.kt)("strong",{parentName:"li"},"Aufl\xf6sung"),", also die Anzahl der Bildpunkte (z.B. 7680\xd74320)."),(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Taktfrequenz")," gibt an, wie schnell der Prozessor Berechnungen durchf\xfchren kann. Sie wird in der Einheit ",(0,r.kt)("strong",{parentName:"li"},"Hertz")," angegeben, was \xabpro Sekunde\xbb bedeutet. Die Grafikakrte hat also auch einen eigenen leistungsf\xe4higen Prozessor."),(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Speicherkapazit\xe4t")," ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben. Die Grafikkarte besitzt also auch einen eigenen Arbeitsspeicher.")),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Konstantin Lanzet",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:KL_Hercules_HGC.png"},caption:"Hercules-Grafikkarte",options:{},isInline:!1,src:n(429916).Z,alt:"Hercules-Grafikkarte",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h4",{parentName:"div",id:"hercules-graphics-card"},"Hercules Graphics Card"),(0,r.kt)("p",{parentName:"div"},"Hochaufl\xf6sende monochrome Grafikkarte (720\xd7348 Pixel, 1 Bit Farbe) mit 64 KB Video-RAM aus dem Jahr ",(0,r.kt)("strong",{parentName:"p"},"1982"),"."))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"NVIDIA RTX 3080 Ti Trinity-Grafikkarte",options:{},isInline:!1,src:n(859372).Z,alt:"NVIDIA RTX 3080 Ti Trinity-Grafikkarte",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("h4",{parentName:"div",id:"nvidia-rtx-3080-ti-trinity"},"NVIDIA RTX 3080 Ti Trinity"),(0,r.kt)("p",{parentName:"div"},"Aktuelle Grafikkarte aus dem Jahr ",(0,r.kt)("strong",{parentName:"p"},"2022")," mit einer maximalen Aufl\xf6sung von ",(0,r.kt)("inlineCode",{parentName:"p"},"7680\xd74320")," Pixel pro Bildschirm, ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," GB Video-RAM und Unterst\xfctzung von Echtzeit-Raytracing.")))),(0,r.kt)("p",null,"Fr\xfche Grafikkarten konnten nur aus Text selbst\xe4ndig eine Pixelgrafik erzeugen. Um etwas anderes auf dem Bildschirm darzustellen, mussten Programme oder das Betriebssystem die Grafik selbst berechnen und pixelweise an die Grafikkarte \xfcbermitteln."),(0,r.kt)("p",null,"Mit der Zeit konnten neuere Grafikkarten immer mehr Funktionen der Bilderzeugung \xfcbernehmen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2D-Rasterung:")," Zeichnen von Linien, Rechtecken und Kreisen,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3D-Rasterung:")," Verdeckungsberechnung und Lichtsimulation,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3D-Raytracing:")," fotorealistische Berechnung basierend auf der Simulation von Lichtstrahlen.")),(0,r.kt)("p",null,"Ausserdem werden heute Grafikkarten auch f\xfcr aufw\xe4ndige Berechnungen in anderen Bereichen eingesetzt, z.B. f\xfcr ",(0,r.kt)("strong",{parentName:"p"},"neuronale Netze")," oder f\xfcr das Mining von ",(0,r.kt)("strong",{parentName:"p"},"Kryptow\xe4hrungen"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"\ufe0f-raytracing"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Raytracing")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Was ist Raytracing und was bringt es mir?"),(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/vy8kHdw9gCI?start=66",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),(0,r.kt)("h3",{id:"steuerung-des-bildschirms"},"Steuerung des Bildschirms"),(0,r.kt)("p",null,"F\xfcr die Steuerung des Bildschirms gibt es vier aktuelle Technologien."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Belkin",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Displayport-cable.jpg"},caption:"Display Port (DP)",options:{},isInline:!1,src:n(573987).Z,alt:"Display Port (DP)",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:Dvi-cable.jpg"},caption:"Digital Visual Interface (DVI)",options:{},isInline:!1,src:n(970153).Z,alt:"Digital Visual Interface (DVI)",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg"},caption:"High-Definition Multimedia Interface (HDMI)",options:{},isInline:!1,src:n(661481).Z,alt:"High-Definition Multimedia Interface (HDMI)",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:Vga-cable.jpg"},caption:"Video Graphics Array (VGA)",options:{},isInline:!1,src:n(255002).Z,alt:"Video Graphics Array (VGA)",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"}))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"usb-c"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"USB-C")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Heutige Laptops haben oft keine separaten Ausg\xe4nge f\xfcr Bildschirme - dank USB-C. Die verwendete Technologie sowie die Protokolle bleiben aber dieselben, weshalb ohne weiteres Adapter f\xfcr entsprechende Technologien (DP, DVI, HDMI, VGA) angeschlossen werden k\xf6nnen."),(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"USB-C Displayadapter",options:{width:"300px"},isInline:!1,src:n(203820).Z,alt:"USB-C Displayadapter --width=300px",mdxType:"Image"})))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-grafikkarte-rendering"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Grafikkarte: Rendering")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Recherchieren Sie den Begriff "Rendering".'),(0,r.kt)(s.Z,{type:"text",webKey:"30ee181c-fe31-4362-8274-68fd87478824",mdxType:"Answer"}),(0,r.kt)("p",{parentName:"div"},"Welche Aufgaben erfordern eine hohe Rendering-Leistung? F\xfcr welche Zielgruppen nebst Gamern sind gute Grafikkarten essenziell?"),(0,r.kt)(s.Z,{type:"text",webKey:"bdf478bd-68f0-4980-b98e-74fd2be9065b",mdxType:"Answer"}))))}g.isMDXComponent=!0},573987:function(e,t,n){t.Z=n.p+"assets/images/05-dp-2b2b2c9db755a5e6d745426ee6b69296.png"},970153:function(e,t,n){t.Z=n.p+"assets/images/05-dvi-48063d2d6b70a9dcd36a663d278fd0a0.png"},661481:function(e,t,n){t.Z=n.p+"assets/images/05-hdmi-73f7e572dabfedaa37144261c4d539c8.png"},429916:function(e,t,n){t.Z=n.p+"assets/images/05-hercules-0a3f6b7f25e3544a60c31badef085c5b.png"},859372:function(e,t,n){t.Z=n.p+"assets/images/05-nvidia-rtx-3080-trinity-0c17a34def9e07e1d7251e5300171b7f.jpg"},203820:function(e,t,n){t.Z=n.p+"assets/images/05-usbc-adapter-436a8cc4334334be3f5287c3d01cf29e.jpg"},255002:function(e,t,n){t.Z=n.p+"assets/images/05-vga-abc5e3a8d9501c53a7b252d5866e2a9d.png"}}]);