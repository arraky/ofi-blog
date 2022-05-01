"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57735],{682593:function(e,t,n){n.d(t,{x:function(){return T},Z:function(){return A}});var a=n(667294),i=n(403435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},r=n(386010),s=n(471217),c=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,i=void 0;if(c.test(t)){var r=function(e){if(c.test(e))return e.match(c).groups.klass}(t);i=l[r],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:i},n)},d=n(592814),m=n(51436),u=n(168949),p=n(972389),b=n(121314),f=n(274322),h=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),g=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),i=a.useState("unchecked"),s=i[0],c=i[1],h=(0,b.oR)("documentStore").find(e.webKey),v=function(e){h.loaded&&(c("unchecked"),h.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,u.U5)((function(){return h.loaded}),(function(e){e&&y(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&y(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:h.value,className:g(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(h.value)},className:(0,r.default)(l[s],l.checkButton)},a.createElement(d.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),y=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return l[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(i,l){return e.select?a.createElement("select",{key:l,onChange:function(e){return n(e.target.value,l)},value:i,className:k(i),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:l,type:"text",onChange:function(e){return n(e.target.value,l)},value:i,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),N=n(583117),x=n(575552),E=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(x.Z,(0,N.Z)({model:t},e))):a.createElement(f.Z,null)})),Z=n(647271),C=(0,s.Pi)((function(e){return(0,b.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=n(697762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore"),n=(0,b.oR)("msalStore"),i=t.find(e.webKey),l=(0,p.Z)();return(0,b.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),l?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(Z.Z,null),n.loggedIn&&a.createElement(C,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(w,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),i="noLoginAlert_HRfh",l=n(239960),r=n(471217),s=n(121314),c=(0,r.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},l=n(592814),r=n(51436),s=n(386010),c=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(l.G,{icon:r.Xjp}))))},o=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+o(n.size)+")",t.maxHeight=o(n.size),delete n.size),n.height&&(t.maxHeight=o(n.height),t.height=o(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+o(n.width)+")",t.width=o(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),l=a.useState(!1),r=l[0],o=l[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,l,r;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,l=t.left<=a&&t.right>=a,r=t.top<=i&&t.bottom>=i,l&&r||n(!1)}},a.createElement(d,e),u&&a.createElement("figcaption",null,m&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,r?i.visible:void 0),onClick:function(){return o(!r)}},"@"),r&&a.createElement(c,e.bib)))}},115361:function(e,t,n){n.d(t,{Vc:function(){return y},bF:function(){return N},H4:function(){return w},g7:function(){return v}});var a,i=n(386010),l=n(667294),r=n(63437),s="container_zVtl",c="input_tYix",o="inputContainer_mEEr",d="active_fzzJ",m="interactive_Yfi1",u="pixelEditor_B1ri",p="row_yRws",b="cell_gJPc",f="off_TP1h",h="on_DXrb",g="actions_N7O9",v=function(e){return e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,"")},y=((a={})[" "]="00000",a.A="00001",a.B="00010",a.C="00011",a.D="00100",a.E="00101",a.F="00110",a.G="00111",a.H="01000",a.I="01001",a.J="01010",a.K="01011",a.L="01100",a.M="01101",a.N="01110",a.O="01111",a.P="10000",a.Q="10001",a.R="10010",a.S="10011",a.T="10100",a.U="10101",a.V="10110",a.W="10111",a.X="11000",a.Y="11001",a.Z="11010",a[","]="11011",a["-"]="11100",a["."]="11101",a["?"]="11110",a["@"]="11111",a["00000"]=" ",a["00001"]="A",a["00010"]="B",a["00011"]="C",a["00100"]="D",a["00101"]="E",a["00110"]="F",a["00111"]="G",a["01000"]="H",a["01001"]="I",a["01010"]="J",a["01011"]="K",a["01100"]="L",a["01101"]="M",a["01110"]="N",a["01111"]="O",a[1e4]="P",a[10001]="Q",a[10010]="R",a[10011]="S",a[10100]="T",a[10101]="U",a[10110]="V",a[10111]="W",a[11e3]="X",a[11001]="Y",a[11010]="Z",a[11011]=",",a[11100]="-",a[11101]=".",a[11110]="?",a[11111]="@",a),k=function(e,t){void 0===t&&(t=!0);for(var n=[],a=e.replace(/\s/g,"");a.length>0&&(!(a.length<5)||t);)n.push(a.slice(0,5)),a=a.slice(5);return n},w=function(){var e=l.useState(""),t=e[0],n=e[1],a=l.useState(""),r=a[0],m=a[1],u=l.useState("text"),p=u[0],b=u[1];return l.useEffect((function(){"text"===p&&m(function(e){return e.toUpperCase().split("").map((function(e){return y[e]||e}))}(t).join(" "))}),[t]),l.useEffect((function(){"penta"===p&&n(function(e){return k(e).map((function(e){return y[e]||e}))}(r).join(""))}),[r]),l.createElement("div",{className:(0,i.default)("hero","shadow--lw",s)},l.createElement("div",{className:"container"},l.createElement("p",{className:"hero__subtitle"},"Pentacode"),l.createElement("h4",null,"Klartext"),l.createElement("div",{className:o},l.createElement("textarea",{onFocus:function(){return b("text")},placeholder:"Klartext eingeben",className:(0,i.default)(c),value:t,onChange:function(e){return n(e.target.value.toUpperCase())},rows:5}),"text"===p&&l.createElement("div",{className:d})),l.createElement("h4",null,"Pentacode"),l.createElement("div",{className:o},l.createElement("textarea",{onFocus:function(){return b("penta")},placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(c),value:r,onChange:function(e){return m(e.target.value.replace(/[^01\s]/g,""))},rows:5}),"penta"===p&&l.createElement("div",{className:d}))))},N=function(){var e=l.useState("00000 00000 00000 00000 00000"),t=e[0],n=e[1],a=l.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),o=a[0],d=a[1],v=l.useState(""),y=v[0],w=v[1];return l.useEffect((function(){"cell"!==y?(w("editor"),d(k(t,!1).map((function(e){return e.split("").map((function(e){return Number.parseInt(e,2)}))})))):w("")}),[t]),l.useEffect((function(){"editor"!==y?(w("cell"),n(o.map((function(e){return e.join("")})).join(" "))):w("")}),[o]),l.createElement("div",{className:(0,i.default)("hero","shadow--lw",s)},l.createElement("div",{className:"container"},l.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),l.createElement("div",{className:m},l.createElement("div",{className:(0,i.default)(u)},l.createElement(r.Z,{options:{backgroundColor:"white",canvasWidth:50,canvasHeight:10*o.length}},l.createElement(l.Fragment,null,o.map((function(e,t){return l.createElement("div",{className:(0,i.default)(p),key:t},e.map((function(e,n){return l.createElement("span",{className:(0,i.default)(b,0===e?f:h),key:n,onClick:function(){var e,a=(e=[],o.forEach((function(t){var n=[];e.push(n),t.forEach((function(e){n.push(e)}))})),e);a[t][n]=1-a[t][n],d(a)}})})))})))),l.createElement("div",{className:g},l.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return d([].concat(o,[[0,0,0,0,0]]))}},"+"),l.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return d([].concat(o.slice(0,-1)))}},"\uff0d"))),l.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(c),value:t,onChange:function(e){return n(e.target.value.replace(/[^01\s]/g,""))},rows:o.length}))))}},63437:function(e,t,n){var a=n(51436),i=n(592814),l=n(386010),r=n(414842),s=n(667294),c={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},o={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=s.useState(void 0),d=a[0],m=a[1],u=s.useState("none"),p=u[0],b=u[1],f=s.useRef(null);return s.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return b("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),s.useEffect((function(){"none"!==p&&b("none")}),[t]),s.createElement(s.Fragment,null,s.createElement("button",{className:(0,l.default)("button","button--outline","button--sm",o[p]),disabled:"spin"===p,onClick:function(){if(null!==f.current){if("none"===p)return b("spin"),(0,r.SE)(f.current,n).then((function(e){m(e),b("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=d,e))]).then((function(){b("copied")})).catch((function(e){b("error"),console.warn(e)}))}catch(t){console.warn(t),b("error")}}}},s.createElement(i.G,{icon:c[p]})),s.createElement("div",{ref:f,className:"copy-container"},t))}},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i=n(386010),l="loader_FEpR",r="badge_oWqf",s=n(471217),c=n(592814),o=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,i.default)(l)},a.createElement(c.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",r)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(667294),i="quillEditor_NxYB",l="quillAnswer_J46I",r="monospace_usc_",s="disableToolbar_bRdP",c=n(386010),o=n(471217),d=n(274322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var r=[];e.formula&&r.push("formula"),e.image&&r.push("image"),t.push(r)}return e.code&&t.push(["code-block"]),t},b=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],b=t[1],f=a.useState(!1),h=f[0],g=f[1],v=a.useRef(null),y=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){m=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var l=t[i.katex].default;window.katex=l}n.register("modules/imageCompress",a),e()}))}((function(){t&&(g(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return m&&h&&y.loaded?a.createElement("div",{onFocus:function(){return!o&&b(!0)},className:(0,c.default)(i)},a.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(l,e.monospace&&r,o?void 0:s),value:y.text||"",onChange:function(t,n,a,i){var l,r;l=t,void 0===r&&(r=0),!e.readonly&&y.canUpdate&&h&&y.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(u,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},330250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return b}});var a=n(583117),i=n(480102),l=(n(667294),n(603905)),r=n(884384),s=n(682593),c=n(115361),o=["components"],d={title:"\xdcbungen"},m="\xdcbungen",u={unversionedId:"Kryptologie/Symmetrisch/uebungen",id:"version-24o/Kryptologie/Symmetrisch/uebungen",title:"\xdcbungen",description:"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel).",source:"@site/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/06-uebungen.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/uebungen",permalink:"/24o/Kryptologie/Symmetrisch/uebungen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/06-uebungen.md",tags:[],version:"24o",sidebarPosition:6,frontMatter:{title:"\xdcbungen"},sidebar:"version-24o/sidebar",previous:{title:"Verkettung von Bl\xf6cken",permalink:"/24o/Kryptologie/Symmetrisch/block-chaining"},next:{title:"Krypto-Familie",permalink:"/24o/Kryptologie/Symmetrisch/krypto-family"}},p={},b=[{value:"ECB Modus",id:"ecb-modus",level:2},{value:"CBC Modus",id:"cbc-modus",level:2}],f={toc:b};function h(e){var t=e.components,d=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\xfcbungen"},"\xdcbungen"),(0,l.kt)("p",null,"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel)."),(0,l.kt)("h2",{id:"ecb-modus"},"ECB Modus"),(0,l.kt)(c.H4,{mdxType:"TextEditor"}),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"1-xor-verschl\xfcsselung"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. XOR Verschl\xfcsselung")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,l.kt)("inlineCode",{parentName:"p"},"BUCHSTABENSPIELE")," mit dem Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"AKRONYM")),(0,l.kt)(s.Z,{type:"text",webKey:"a30ab42b-0e2a-4452-a7a4-f34c96e8a4cd",monospace:!0,mdxType:"Answer"}),(0,l.kt)("p",{parentName:"div"},"(",(0,l.kt)("em",{parentName:"p"},"L\xf6sung als Text (nicht als Bin\xe4re Zahlenfolgt) angeben"),")"),(0,l.kt)(s.Z,{type:"string",webKey:"b680e137-905a-4bc5-a05a-fe65bc1684ee",solution:"C?QG.MLCN--?PHMN",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"2-xor-entschl\xfcsseln"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. XOR Entschl\xfcsseln")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,l.kt)("inlineCode",{parentName:"p"},"XWVJZWEKK,XWVJIK")," mit dem Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"VVXKZ")),(0,l.kt)(s.Z,{type:"text",webKey:"f0c2bc43-cc15-4f58-8466-19f2f3374d2e",monospace:!0,mdxType:"Answer"}),(0,l.kt)("p",{parentName:"div"},"(",(0,l.kt)("em",{parentName:"p"},"L\xf6sung als Text (nicht als Bin\xe4re Zahlenfolgt) angeben"),")"),(0,l.kt)(s.Z,{type:"string",webKey:"f877bdef-a2e9-4b82-a6cc-1b61109970c7",solution:"NANA ASS ANANAS.",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("h2",{id:"cbc-modus"},"CBC Modus"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"hinweis-cbc-modus"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hinweis CBC-Modus")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Jeder Block hat genau so viele Bits wie der Schl\xfcssel. (Hier werden also meist 2 Buchstaben (=",(0,l.kt)("inlineCode",{parentName:"li"},"10")," bits) pro Antwort in einem Block verwendet.)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c1")," ist ein Zwischenresultat, damit wird weitergearbeitet...")))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"3-cbc-modus-verschl\xfcsseln"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. CBC-Modus: Verschl\xfcsseln")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},caption:"CBC: Verschl\xfcsseln",options:{},isInline:!1,src:n(538596).Z,alt:"CBC: Verschl\xfcsseln",mdxType:"Image"})),(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,l.kt)("inlineCode",{parentName:"p"},"WINTER")," mit dem Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"NY")," und dem IV ",(0,l.kt)("inlineCode",{parentName:"p"},"AZ"),"."),(0,l.kt)(s.Z,{type:"text",webKey:"aeaf6634-df2d-427f-9daa-970ff225f105",monospace:!0,mdxType:"Answer"}),(0,l.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,l.kt)("div",{parentName:"div",style:{rows:"3",fontFamily:"monospace"},className:"flex flex-cards"},(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 1")),(0,l.kt)(s.Z,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"9f33bc0e-1475-49ee-8201-f389920f3da7",solution:"10111 01001",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"576d141c-99d1-41dd-9cb6-2536b5eefc61",solution:"00001 11010",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"6280885d-6427-4403-a09a-144b04f76716",solution:"10110 10011",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",solution:"01110 11001",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"029d1f0e-f597-4eb4-bac5-7c9ef6d8e849",solution:"11000 01010",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 2")),(0,l.kt)(s.Z,{label:"p",type:"string",width:"12em",labelWidth:"3em",webKey:"55c93903-3bdb-4189-8f80-68bb19f4cbd1",solution:"01110 10100",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",type:"string",width:"12em",labelWidth:"3em",webKey:"4fd15699-160c-4738-8288-b9d2a3ac40d3",solution:"11000 01010",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"52dc90fe-224a-4739-b277-1181fb41c265",solution:"10110 11110",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"2bbfd220-5673-488a-a903-528ef7324885",solution:"11000 00111",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 3")),(0,l.kt)(s.Z,{width:"12em",labelWidth:"3em",label:"p",type:"string",webKey:"8e2339e3-d4d9-4339-9709-bbbaf28e4e05",solution:"00101 10010",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{width:"12em",labelWidth:"3em",label:"IV",type:"string",webKey:"8db5f43f-0bcd-4d11-8bca-a72286778e65",solution:"11000 00111",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"3a7ac8ec-b6c6-4acd-b123-f1ca84d99fad",solution:"11101 10101",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"a44a611e-6cff-41ea-9277-4b0859ea6249",solution:"10011 01100",sanitizer:s.x,mdxType:"Answer"})))),(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsselter Text (Buchstaben-Form)"),(0,l.kt)(s.Z,{type:"string",webKey:"dabff993-1dc5-43c8-bfca-f944c8dc3f96",solution:"XJXGSL",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"4-cbc-modus-entschl\xfcsseln"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. CBC-Modus: Entschl\xfcsseln")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},caption:"CBC Entschl\xfcsseln",options:{},isInline:!1,src:n(417458).Z,alt:"CBC Entschl\xfcsseln",mdxType:"Image"})),(0,l.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,l.kt)("inlineCode",{parentName:"p"},"NNHDFBA")," mit dem Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"BE")," und beliebigem IV."),(0,l.kt)(s.Z,{type:"text",webKey:"1d46518d-94df-4d09-8d12-ae6f28df2b67",monospace:!0,mdxType:"Answer"}),(0,l.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,l.kt)("div",{parentName:"div",style:{rows:"4",fontFamily:"monospace"},className:"flex flex-cards"},(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 1")),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"150519fd-560b-42e6-acec-58407af94ada",solution:"01110 01110",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",solution:"00010 00101",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel "),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"92338241-0b77-4195-b65b-c4cf64bf6734",solution:"01100 01011",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"aa136c52-c970-437f-b9ff-270468514137",checker:function(e){var t;return 10===(null==(t=(0,s.x)(e))?void 0:t.length)},mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"14beb904-594a-43ff-a67c-88b9ce93cb3c",checker:function(e){var t;return 10===(null==(t=(0,s.x)(e))?void 0:t.length)},mdxType:"Answer"}))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 2")),(0,l.kt)(s.Z,{label:"c",type:"string",width:"12em",labelWidth:"3em",webKey:"97948788-feeb-4c72-94fe-5e176283218a",solution:"01000 00100",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",type:"string",width:"12em",labelWidth:"3em",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"b4afd242-e054-4f3c-b865-2d14cc206057",solution:"01010 00001",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"d9ff2b83-e6de-490b-be42-11d4d4676da7",solution:"01110 01110",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"00ac07c4-7f1f-4d9a-a908-7f41f20621b0",solution:"00100 01111",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 3")),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"b99355ce-bc59-4ac6-8183-cada8a706b27",solution:"00110 00010",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"dc3049f2-5006-4507-8dd5-8759b7c24465",solution:"00100 00111",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"e33acd9e-ccbf-4d39-aea2-9ee51b665fb2",solution:"01000 00100",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"1bcc452d-3099-4ab4-b24d-b24407a63c41",solution:"01100 00011",sanitizer:s.x,mdxType:"Answer"}))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Block 4")),(0,l.kt)(s.Z,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"30d7f06d-2d98-4649-b585-c3e0e11841fc",solution:"00001",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,l.kt)(s.Z,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"69af84b4-3d3a-4377-adbb-6870b71cb9c7",solution:"00011",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)(s.Z,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"791d6b06-0ab1-4cb7-82d2-388ed8cd7626",solution:"00110",sanitizer:s.x,mdxType:"Answer"}),(0,l.kt)("i",null,"Nach XOR mit IV "),(0,l.kt)(s.Z,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"d0fbef85-346d-4d70-bb60-972205240d36",solution:"00101",sanitizer:s.x,mdxType:"Answer"})))),(0,l.kt)("p",{parentName:"div"},"Entschl\xfcsselter Text (Buchstaben-Form)"),(0,l.kt)(s.Z,{type:"string",webKey:"4ce989c5-27ad-4146-bdf6-adb7b5908b55",solution:"DOLCE",sanitizer:function(e){var t;return 7===(null==(t=(0,s.x)(e))?void 0:t.length)?(0,s.x)(e).slice(2):(0,s.x)(e)},mdxType:"Answer"}))))}h.isMDXComponent=!0},417458:function(e,t,n){t.Z=n.p+"assets/images/CBC_decryption-e5affac8b24b593a703baa57e51c9bcc.svg"},538596:function(e,t,n){t.Z=n.p+"assets/images/CBC_encryption-db55ceaa296438e01ffdad954f44699c.svg"}}]);