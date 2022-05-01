"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[77919],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return V},Z:function(){return A}});var r=n(667294),a=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},u=n(592814),d=n(51436),f=n(168949),m=n(972389),p=n(121314),g=n(274322),h=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,m.Z)(),a=r.useState("unchecked"),o=a[0],c=a[1],h=(0,p.oR)("documentStore").find(e.webKey),v=function(e){h.loaded&&(c("unchecked"),h.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return h.loaded}),(function(e){e&&y(h.value)}))}),[h]),r.useEffect((function(){h.loaded&&y(h.value)}),[h,n]),n?h.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:h.value,className:b(h.value),disabled:!h.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(h.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(u.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(g.Z,null)})),E=n(583117),N=n(575552),x=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(g.Z,null)})),C=n(647271),O=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=n(697762),V=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),n.loggedIn&&r.createElement(O,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(w,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(667294),a="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],s=i[1],d=e.caption&&"undefined"!==e.caption,f=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),f&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&r.createElement(c,e.bib)))}},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),c=n(592814),s=n(51436),u=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(667294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(386010),s=n(471217),u=n(274322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],g=r.useState(!1),h=g[0],b=g[1],v=r.useRef(null),y=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&h&&y.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&h&&y.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(f,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},63088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(583117),a=n(480102),i=(n(667294),n(603905)),l=n(884384),o=n(682593),c=["components"],s={title:"Vign\xe8re-Chiffre"},u="Vign\xe8re-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Vignere",id:"Kryptologie/Antike/Vignere",title:"Vign\xe8re-Chiffre",description:"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt.",source:"@site/docs/Kryptologie/02-Antike/07-Vignere.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Vignere",permalink:"/Kryptologie/Antike/Vignere",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/07-Vignere.md",tags:[],version:"current",lastUpdatedAt:1634650089,formattedLastUpdatedAt:"10/19/2021",sidebarPosition:7,frontMatter:{title:"Vign\xe8re-Chiffre"},sidebar:"sidebar",previous:{title:"H\xe4ufigkeitsanalyse",permalink:"/Kryptologie/Antike/frequency-analysis"},next:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",permalink:"/Kryptologie/Antike/python-tools"}},f={},m=[],p={toc:m};function g(e){var t=e.components,s=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vign\xe8re-chiffre-"},"Vign\xe8re-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Vigen\xe8re-Chiffre wurde vom Franzosen Blaise de Vigen\xe8re (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschl\xfcsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schl\xfcssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: F\xfcr jeden Buchstaben des Schl\xfcsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schl\xfcssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschl\xfcsselt."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Log(z)equalsY",source:"https://commons.wikimedia.org/wiki/File:Vigenere-Beispiel.png",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/deed.en",edited:!1},caption:"Vign\xe8re-Verschl\xfcsselung",options:{},isInline:!1,src:n(923896).Z,alt:"Vign\xe8re-Verschl\xfcsselung",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"RUDERN AUF DEM SEE")," mit der Vigen\xe8re-Chiffre. Verwenden Sie dazu den Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"GBSL"),"."),(0,i.kt)(o.Z,{type:"string",webKey:"f0ae0e40-3e5d-40b2-9e3d-fd0607990eb4",sanitizer:function(e){return e.toUpperCase().trim()},solution:"XVVPXO SFL EWX YFW",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=254616"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},923896:function(e,t,n){t.Z=n.p+"assets/images/vignere-e7f10a144cd531ce1dde401f3264dfcc.png"}}]);