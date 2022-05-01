"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[66040],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return k}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=l(t),k=s,N=d["".concat(p,".").concat(k)]||d[k]||o[k]||r;return t?n.createElement(N,i(i({ref:a},c),{},{components:t})):n.createElement(N,i({ref:a},c))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,i[1]=m;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84384:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(67294),s={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(92814),i=t(51436),m=t(86010),p=function(e){return n.createElement("span",{className:s.details},n.createElement("span",{className:(0,m.default)("badge badge--secondary",s.badgeItem)},"Autor: ",e.author),n.createElement("a",{href:e.licence_url,target:"_blank",className:s.badgeItem},n.createElement("span",{className:(0,m.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&n.createElement("span",{className:(0,m.default)("badge badge--secondary",s.badgeItem)},"Bearbeitet"),n.createElement("a",{href:e.source,target:"_blank",className:s.badgeItem},n.createElement("span",{className:(0,m.default)("badge badge--secondary")},n.createElement(r.G,{icon:i.Xjp}))))},l=function(e,a){return void 0===a&&(a="px"),/^\d+(\.\d*)?$/.test(e)?""+e+a:e},c=function(e){var a={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(a.maxWidth="min(90vw, "+l(t.size)+")",a.maxHeight=l(t.size),delete t.size),t.height&&(a.maxHeight=l(t.height),a.height=l(t.height),delete t.height),t.width&&(a.maxWidth="min(90vw, "+l(t.width)+")",a.width=l(t.width),delete t.width),a=Object.assign({},a,t),n.createElement("img",{src:e.src,alt:e.alt,style:a,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},o=function(e){if(e.isInline)return n.createElement(c,e);var a=n.useState(!1),t=(a[0],a[1]),r=n.useState(!1),i=r[0],l=r[1],o=e.caption&&"undefined"!==e.caption,d=e.bib||o;return e.options.noMargins&&!0,n.createElement("figure",{className:(0,m.default)(s.container,e.options.noMargins&&s.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var a,n,s,r,i;a=e.currentTarget.getBoundingClientRect(),n=e.clientX,s=e.clientY,r=a.left<=n&&a.right>=n,i=a.top<=s&&a.bottom>=s,r&&i||t(!1)}},n.createElement(c,e),d&&n.createElement("figcaption",null,o&&n.createElement("span",null,e.caption),e.bib&&n.createElement("span",{className:(0,m.default)(s.bib,i?s.visible:void 0),onClick:function(){return l(!i)}},"@"),i&&n.createElement(p,e.bib)))}},92752:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return l},default:function(){return N},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=t(83117),s=t(80102),r=(t(67294),t(3905)),i=t(84384),m=["components"],p={title:"3. Rastergrafik",label:"3. Rastergrafik"},l="3. Rastergrafik [^1]",c={unversionedId:"Codes und Daten/Grafikformate/raster",id:"version-24K/Codes und Daten/Grafikformate/raster",title:"3. Rastergrafik",description:"Theoretische Speichergr\xf6sse",source:"@site/versioned_docs/version-24K/08-Codes und Daten/02-Grafikformate/03-raster.md",sourceDirName:"08-Codes und Daten/02-Grafikformate",slug:"/Codes und Daten/Grafikformate/raster",permalink:"/24K/Codes und Daten/Grafikformate/raster",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/08-Codes und Daten/02-Grafikformate/03-raster.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"3. Rastergrafik",label:"3. Rastergrafik"},sidebar:"version-24K/sidebar",previous:{title:"2. Farbdarstellung",permalink:"/24K/Codes und Daten/Grafikformate/colors"},next:{title:"4. \xdcbung",permalink:"/24K/Codes und Daten/Grafikformate/uebung"}},o={},d=[{value:"Theoretische Speichergr\xf6sse",id:"theoretische-speichergr\xf6sse",level:2},{value:"JPEG-Grafikformat",id:"jpeg-grafikformat",level:2},{value:"PNG-Grafikformat",id:"png-grafikformat",level:2},{value:"Gr\xf6ssenvergleich der Dateiformate",id:"gr\xf6ssenvergleich-der-dateiformate",level:2}],k={toc:d};function N(e){var a=e.components,p=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},k,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-rastergrafik-"},"3. Rastergrafik ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("h2",{id:"theoretische-speichergr\xf6sse"},"Theoretische Speichergr\xf6sse"),(0,r.kt)("p",null,"Die theoretische Speichergr\xf6sse einer Rastergrafik wird berechnet, indem die Anzahl Pixel ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," mit der Farbtiefe ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," multipliziert wird. Die Farbtiefe gibt an, welche Datenmenge f\xfcr die Darstellung einer Farbe ben\xf6tigt wird."),(0,r.kt)("p",null,"Die Anzahl Pixel wird aus der ",(0,r.kt)("strong",{parentName:"p"},"Aufl\xf6sung"),", also der Breite ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," und H\xf6he ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," des Bildes in Pixel berechnet."),(0,r.kt)("p",null,"F\xfcr die Speichergr\xf6sse rechnen wird also wie folgt:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mi",{parentName:"mrow"},"f")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b\\cdot h\\cdot f")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"beispiel"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Beispiel")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ein Bild mit einer Aufl\xf6sung von ",(0,r.kt)("inlineCode",{parentName:"p"},"1920\xd71080")," Pixel und der Farbtiefe ",(0,r.kt)("inlineCode",{parentName:"p"},"3 Byte")," ben\xf6tigt einen Speicherplatz von:"),(0,r.kt)("div",{parentName:"div",className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1920"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mn",{parentName:"mrow"},"1080"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mn",{parentName:"mrow"},"3"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"6220800"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"B"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"6.2"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"MB")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1920\\cdot 1080\\cdot 3 = 6220800 \\,\\text{B} = 6.2 \\,\\text{MB}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"9"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"8"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"8"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"B")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"MB"))))))))),(0,r.kt)("h2",{id:"jpeg-grafikformat"},"JPEG-Grafikformat"),(0,r.kt)("p",null,"Das Grafikformat der ",(0,r.kt)("em",{parentName:"p"},"Joint Photographic Experts Group")," ist ein beliebtes Format zu Speicherung von Fotos. Es kann den ben\xf6tigten Speicherplatz gegen\xfcber der theoretischen Gr\xf6sse von Rastergrafiken sehr stark reduzieren."),(0,r.kt)("p",null,"Dazu wird ein komplexer mathematischer Algorithmus verwendet, welcher bewirkt, dass das urspr\xfcngliche Bild nicht mehr genau Pixel f\xfcr Pixel rekonstruiert werden kann. Deshalb spricht man hier von einer ",(0,r.kt)("strong",{parentName:"p"},"verlustbehafteten Kompression"),"."),(0,r.kt)("p",null,"Der Algorithmus kann durch die Angabe der ",(0,r.kt)("strong",{parentName:"p"},"Qualit\xe4t")," in Prozent beeinflusst werden. Die folgenden Bildausschnitte illustrieren, wie die Qualit\xe4t und die Speichergr\xf6sse zusammenh\xe4ngen:"),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"h\xf6chste Qualit\xe4t (162 kB)",options:{},isInline:!1,src:t(14257).Z,alt:"h\xf6chste Qualit\xe4t (162 kB)",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"hohe Qualit\xe4t (42 kB)",options:{},isInline:!1,src:t(7412).Z,alt:"hohe Qualit\xe4t (42 kB)",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"mittlere Qualit\xe4t (18 kB)",options:{},isInline:!1,src:t(35530).Z,alt:"mittlere Qualit\xe4t (18 kB)",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"niedrige Qualit\xe4t (9 kB)",options:{},isInline:!1,src:t(23868).Z,alt:"niedrige Qualit\xe4t (9 kB)",mdxType:"Image"}))))),(0,r.kt)("p",null,"An den Bildern wird sichtbar, dass die JPEG-Kompression besonders entlang von R\xe4ndern St\xf6rungen (\xabArtefakte\xbb) verursacht. Bei Fotos f\xe4llt dies weniger auf. Die folgenden zwei Bilder sind beide mit mittlerer JPEG-Qualit\xe4t gespeichert worden:"),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"Pexels",licence:"Pixabay",licence_url:"https://pixabay.com/de/service/license/",source:"https://pixabay.com/images/id-1840617/"},caption:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",options:{},isInline:!1,src:t(60606).Z,alt:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"OpenClipart Vectors",licence:"Pixabay",licence_url:"https://pixabay.com/de/service/license/",source:"https://pixabay.com/images/id-2024099/"},caption:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",options:{},isInline:!1,src:t(40303).Z,alt:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",mdxType:"Image"}))))),(0,r.kt)("p",null,"Das JPEG-Datei eignet sich also besonders, um Fotografien platzsparend zu speichern."),(0,r.kt)("h2",{id:"png-grafikformat"},"PNG-Grafikformat"),(0,r.kt)("p",null,"Das ",(0,r.kt)("em",{parentName:"p"},"Portable Network Graphics"),"-Format wird f\xfcr ",(0,r.kt)("strong",{parentName:"p"},"verlustfreie")," Speicherung von Rastergrafiken mit ",(0,r.kt)("strong",{parentName:"p"},"Transparenz")," verwendet. Es eignet sich beispielsweise f\xfcr Bildschirmfotos und Grafiken f\xfcr Webseiten oder Computerspiele."),(0,r.kt)("p",null,"Das folgende Beispiel zeigt links einen Baum als PNG-Grafik mit Transparenz gespeichert. Rechts ist das gleiche Bild als JPG-Grafik mit hoher Qualit\xe4t gespeichert."),(0,r.kt)("div",{style:{alignItems:"center"},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"PNG-Grafik (32 kB)",options:{},isInline:!1,src:t(43922).Z,alt:"PNG-Grafik (32 kB)",mdxType:"Image"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(i.Z,{bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"JPEG-Grafik (13 kB)",options:{},isInline:!1,src:t(45877).Z,alt:"JPEG-Grafik (13 kB)",mdxType:"Image"})))),(0,r.kt)("p",null,"Durch die Speicherung als JPG-Grafik geht die Transparenz verloren, das Bild kann z.B. nicht mehr auf farbigen Folien verwendet werden. Ausserdem sind JPEG-Artefakte sichtbar."),(0,r.kt)("h2",{id:"gr\xf6ssenvergleich-der-dateiformate"},"Gr\xf6ssenvergleich der Dateiformate"),(0,r.kt)("p",null,"Die folgende Tabelle zeigt die Dateigr\xf6ssen des gleichen Bildes (640\xd7360) mit verschiedenen Dateiformaten:"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Dateigr\xf6sse"),(0,r.kt)("th",{parentName:"tr",align:"right"},"relativ"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"theoretische Gr\xf6sse"),(0,r.kt)("td",{parentName:"tr",align:"right"},"691 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PNG"),(0,r.kt)("td",{parentName:"tr",align:"right"},"146 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"21%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPG h\xf6chste Qualit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:"right"},"162 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"23%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPG hohe Qualit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:"right"},"42 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPG mittlere Qualit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:"right"},"18 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JPG tiefe Qualit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9 kB"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1%"))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=943166"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},45877:function(e,a,t){a.Z=t.p+"assets/images/baum-34f751d6a841339f3286fecfc32df668.jpg"},43922:function(e,a,t){a.Z=t.p+"assets/images/baum-d76a95efd701702d6806c5ae054ffb3d.png"},60606:function(e,a,t){a.Z=t.p+"assets/images/foto-640-mittel-0efdb2340ae887754cfcb8d6cf08a4b1.jpg"},7412:function(e,a,t){a.Z=t.p+"assets/images/zeichnung-640-hoch-detail-6de4b4fbc9511226eae6542c4d0eeb1e.png"},14257:function(e,a,t){a.Z=t.p+"assets/images/zeichnung-640-hoechst-detail-fdfad020aa67e4970e6fcdf485f4cc1b.png"},35530:function(e,a,t){a.Z=t.p+"assets/images/zeichnung-640-mittel-detail-c062b5dbecace229b427a0b4cc144c5f.png"},40303:function(e,a,t){a.Z=t.p+"assets/images/zeichnung-640-mittel-65e4de0f7d204bfd7ecd35e248587c60.jpg"},23868:function(e,a,t){a.Z=t.p+"assets/images/zeichnung-640-niedrig-detail-7528d37d3fa515084efb0f0ed9c79a8b.png"}}]);