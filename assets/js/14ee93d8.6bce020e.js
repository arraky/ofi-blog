(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[22959],{682593:function(e,t,n){"use strict";n.d(t,{x:function(){return Z},Z:function(){return R}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(592814),s=n(51436),m=n(168949),f=n(972389),p=n(121314),g=n(274322),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,f.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],b=(0,p.oR)("documentStore").find(e.webKey),v=function(e){b.loaded&&(c("unchecked"),b.setData({value:e,type:"string"}))},w=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&w(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&w(b.value)}),[b,n]),n?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:b.value,className:h(b.value),disabled:!b.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return w(b.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(d.G,{icon:(t=o,"correct"===t?s.f8k:"wrong"===t?s.nYk:s.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),w=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:k(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),N=n(583117),y=n(575552),_=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(y.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),C=n(647271),x=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=n(697762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},R=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(x,{webKey:e.webKey}),"text"===e.type&&a.createElement(_,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(E,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),o=n(386010),c=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},s=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],u=i[1],s=e.caption&&"undefined"!==e.caption,m=e.bib||s;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),m&&a.createElement("figcaption",null,s&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&a.createElement(c,e.bib)))}},573830:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(972389),r={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",controls:"controls_xr2C"},i=n(386010),l=n(667294),o=n(82687),c=n(592814),u=n(51436),d=function(e){var t=(0,l.useState)(null),n=t[0],d=t[1],s=(0,l.useState)(-1),m=s[0],f=s[1],p=(0,l.useState)(e.width),g=p[0],b=p[1],h=(0,l.useState)(150),v=h[0],w=h[1],k=(0,a.Z)(),E=(0,l.useState)(!1),N=E[0],y=E[1];l.useEffect((function(){return window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}}),[]);var _=l.useRef(null),C=function(){if(_.current){var e=_.current.querySelector("canvas.react-pdf__Page__canvas");if(e){var t=e.getBoundingClientRect().height;w(t)}}},x=function(){if(_.current){var t=.98*_.current.getBoundingClientRect().width;C();var n=t,a=!1;e.width&&e.scale?n=Math.min(e.width*e.scale,t):e.width?n=Math.min(e.width,t):e.scale&&(n=e.scale*t),e.minWidth&&n<e.minWidth&&(n=e.minWidth,a=!0),a!==N&&y(a),b(n)}},S=function(e){var t=window,a=t.scrollX,r=t.scrollY;f(m+e>n?1:m+e<1?n:m+e),setTimeout((function(){window.scrollTo(a,r)}),0)};return k?l.createElement("div",{className:(0,i.default)(r.pdfWrapper,N&&r.overflowing,(n<=1||void 0!==e.page)&&r.singlepage),ref:_},l.createElement("div",{style:{height:v+8+"px"}},l.createElement(o.BB,{file:e.file,onLoadSuccess:function(t){var n=t.numPages;d(n),m<0&&f(e.page||1),x()},className:(0,i.default)(r.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},m>0&&l.createElement(o.T3,{pageNumber:m,width:g,onLoadSuccess:C}),!e.noDownload&&l.createElement("a",{href:e.file,className:(0,i.default)(r.download,"button","button--secondary","button--sm"),download:e.name},l.createElement(c.G,{icon:u.q7m})))),l.createElement("div",{className:(0,i.default)(r.controls)},n>1&&void 0===e.page&&l.createElement("div",{className:(0,i.default)("button-group")},l.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:function(){S(-1)}},l.createElement(c.G,{icon:u.nP8})),l.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),disabled:!0},m||(n?1:"--")," / ",n||"--"),l.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:function(){S(1)}},l.createElement(c.G,{icon:u.JYN}))))):l.createElement("div",null,"Loading...")}},274322:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),c=n(592814),u=n(51436),d=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(386010),u=n(471217),d=n(274322),s=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],p=t[1],g=a.useState(!1),b=g[0],h=g[1],v=a.useRef(null),w=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),s)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){s=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return s&&b&&w.loaded?a.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,c.default)(r)},a.createElement(s,{ref:v,theme:"snow",readOnly:e.readonly||w.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:w.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&w.canUpdate&&b&&w.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},903530:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),o=n(573830),c=(n(682593),["components"]),u={title:"2. QR Code",label:"2. QR Code"},d=void 0,s={unversionedId:"Codes-and-Data/Anwendungen/qr-code",id:"Codes-and-Data/Anwendungen/qr-code",title:"2. QR Code",description:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",source:"@site/docs/Codes-and-Data/04-Anwendungen/02-qr-code.md",sourceDirName:"Codes-and-Data/04-Anwendungen",slug:"/Codes-and-Data/Anwendungen/qr-code",permalink:"/Codes-and-Data/Anwendungen/qr-code",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/04-Anwendungen/02-qr-code.md",tags:[],version:"current",lastUpdatedAt:1646997291,formattedLastUpdatedAt:"3/11/2022",sidebarPosition:2,frontMatter:{title:"2. QR Code",label:"2. QR Code"},sidebar:"sidebar",previous:{title:"1. Morsecode",permalink:"/Codes-and-Data/Anwendungen/morsecode"},next:{title:"3. Fehlerkorrektur",permalink:"/Codes-and-Data/Anwendungen/fehlerkorrektur"}},m={},f=[],p={toc:f};function g(e){var t=e.components,u=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",options:{},isInline:!1,src:n(736850).Z,alt:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"auftrag"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Auftrag")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Recherchieren Sie in einer 2er bis 3er Gruppe"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"wie ein QR-Code funktioniert"),(0,i.kt)("li",{parentName:"ul"},"welche Elemente darin vorkommen"),(0,i.kt)("li",{parentName:"ul"},"wie viele Zeichen darin codiert werden k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"weshalb der Inhalt immer noch lesbar ist, auch wenn ein Teil des QR-Codes abgedeckt ist"),(0,i.kt)("li",{parentName:"ul"},"weitere spannende Fakten, denen Sie begegnen")),(0,i.kt)("p",{parentName:"div"},"Halten Sie Ihre Erkenntnisse auf einem A3-Plakat fest."))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{file:n(87884).Z,name:"qr-script.pdf",page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,i.kt)("p",null,"PDF-Quelle ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.swisseduc.ch/informatik/theoretische_informatik/qr_codes/docs/unterlagen_lernende.pdf"},"swisseduc.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},87884:function(e,t,n){"use strict";t.Z=n.p+"assets/files/qr-script-b2f2e38d40832d1b0eef66035920fef4.pdf"},736850:function(e,t,n){"use strict";t.Z=n.p+"assets/images/piraten-c774f7ffb4fc03b0467ad7c932e6faeb.svg"},214601:function(){},32767:function(){},128251:function(){},857677:function(){},301543:function(){},787324:function(){}}]);