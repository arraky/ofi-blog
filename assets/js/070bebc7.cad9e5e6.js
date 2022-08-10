"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),N=r,k=c["".concat(s,".").concat(N)]||c[N]||o[N]||m;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,i=new Array(m);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<m;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=a(83117),r=(a(67294),a(3905));const m={sidebar_custom_props:{id:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82"}},i="XOR-Verschl\xfcsselung",p={unversionedId:"Kryptologie/Symmetrisch/xor",id:"Kryptologie/Symmetrisch/xor",title:"XOR-Verschl\xfcsselung",description:"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen 0 und 1 zur Verf\xfcgung stehen.",source:"@site/docs/Kryptologie/03-Symmetrisch/03-xor.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/xor",permalink:"/Kryptologie/Symmetrisch/xor",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/03-xor.md",tags:[],version:"current",lastUpdatedAt:1659798183,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82"}},sidebar:"sidebar",previous:{title:"Codierung",permalink:"/Kryptologie/Symmetrisch/codierung"},next:{title:"Blockchiffre",permalink:"/Kryptologie/Symmetrisch/blockchiffre"}},s={},l=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=d("Comment"),c=d("Answer"),N=d("Solution"),k={toc:l};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"xor-verschl\xfcsselung"},"XOR-Verschl\xfcsselung"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"xor-verschl\xfcsselung-"},"XOR-Verschl\xfcsselung ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," zur Verf\xfcgung stehen."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nebst den bekannten Operationen,  ",(0,r.kt)("em",{parentName:"p"},"Addition, SUbtraktion, Multiplikation und Division"),", kann ein Computer auch noch weitere Operationen auf zwei Bin\xe4rzahlen anwenden. Eine solche Operation ist das ",(0,r.kt)("strong",{parentName:"p"},"XOR")," (",(0,r.kt)("em",{parentName:"p"},"Exclusive OR"),"):"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Exclusive or or exclusive disjunction is a logical operation that is 1 if and only if its arguments differ (one is 1, the other is 0).",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"XOR kann auch zur Verschl\xfcsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schl\xfcssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Wahrheitstabelle sieht folgendermassen aus:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{className:"slim-table;normal-header"},className:"item card slim-table normal-header"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"p")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"k")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"c")," = ",(0,r.kt)("em",{parentName:"th"},"p")," ",(0,r.kt)("strong",{parentName:"th"},"XOR")," ",(0,r.kt)("em",{parentName:"th"},"k")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,r.kt)(o,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"p"),": ",(0,r.kt)("em",{parentName:"p"},"plain text")," (Klartext) ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"k"),": ",(0,r.kt)("em",{parentName:"p"},"key")," (Schl\xfcssel) ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"c"),": ",(0,r.kt)("em",{parentName:"p"},"cipher")," (Verschl\xfcsselt)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{className:"slim-table;normal-header"},className:"item card slim-table normal-header"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"c")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"k")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"p")," = ",(0,r.kt)("em",{parentName:"th"},"c")," ",(0,r.kt)("strong",{parentName:"th"},"XOR")," ",(0,r.kt)("em",{parentName:"th"},"k")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,r.kt)(o,{parentName:"div",type:"table",nr:1,mdxType:"Comment"}))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Analog zu ROT13 gilt auch hier: Die Verschl\xfcsselung ist identisch mit der Entschl\xfcsselung, da Folgendes gilt:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ c \\text{ XOR } k = (p \\text{ XOR } k) \\text{ XOR } k = p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dies k\xf6nnen Sie mit den Tabellen oben leicht \xfcberpr\xfcfen."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-xor-verschl\xfcsselung"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Verschl\xfcsselung"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie die Bitfolge mit dem angegebenen Schl\xfcssel"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"10100 11101 10110")," (Bitfolge des Klartexts)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"00101 01010 11100")," (Bitfolge des Schl\xfcssels)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"bitfolge-des-geheimtexts"},"Bitfolge des Geheimtexts"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)(c,{type:"string",webKey:"79c55c56-7d5f-4c7f-95d3-38aed13e16ad",solution:"100011011101010",sanitizer:e=>e.replace(/\s/g,""),mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-textverschl\xfcsselung-mit-xor"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Textverschl\xfcsselung mit XOR"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie erhalten von einer Kollegin folgende verschl\xfcsselte Nachricht:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"01010 00100 01010 11011 00000\n")),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Als Schl\xfcssel haben Sie das Wort ",(0,r.kt)("inlineCode",{parentName:"p"},"MACHT")," abgemacht."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit Pentacode codierter Schl\xfcssel  "),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)(c,{type:"string",webKey:"4159b846-71e5-4205-9907-975e3092c00c",solution:"01101 00001 00011 01000 10100",sanitizer:e=>e.replace(/\s/g,""),mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bin\xe4r entschl\xfcsselte Nachricht"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)(c,{type:"string",webKey:"c4e4f353-6f68-454a-b0ee-ac23695e61c5",solution:"00111 00101 01001 10011 10100",sanitizer:e=>e.replace(/\s/g,""),mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Klartext (bin\xe4r entschl\xfcsselte Bitfolge mit Pentacode zur\xfcckverwandeln)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)(c,{type:"string",webKey:"bd96e44e-96a7-404e-8d55-ed7007e1309a",solution:"GEIST",sanitizer:e=>e.trim().toUpperCase(),mdxType:"Answer"}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe-bildverschl\xfcsselung-mit-xor"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Bildverschl\xfcsselung mit XOR"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeichnen Sie ein 5x5-Pixel-Bild (mit Hilfe des interaktiven Tools auf der vorherigen Seite: Kopieren Sie das Bild und f\xfcgen es unten ein. Halten Sie auch die Bitfolge fest)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie die Bitfolge mit dem Schl\xfcssel ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCDE"),"."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest)."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,r.kt)(c,{type:"text",webKey:"87a642b5-0a0b-4da3-a808-a4629294f359",mdxType:"Answer"}),(0,r.kt)(N,{webKey:"e445b1ac-3c01-4268-9f57-796c401258a8",mdxType:"Solution"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wichtige Punkte:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auch Bilder (im allgemeinen jegliche Bin\xe4r-Daten) lassen sich digital verschl\xfcsseln"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Vom verschl\xfcsselten Bild kann ",(0,r.kt)("strong",{parentName:"p"},"nicht")," auf das Original geschlossen werden - sowohl die Anzahl schwarzer/weisser Felder wie auch deren Anordnung ist wild durchmischt. "),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"}))))))),(0,r.kt)(c,{type:"text",webKey:"b978535b-b455-4a60-aa44-8a32aac4a899",placeholder:"Notizen...",mdxType:"Answer"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"https://rothe.io/?b=crypto&p=353789"},"rothe.io")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"http://mathworld.wolfram.com/XOR.html"},"Germundsson, Roger; Weisstein, Eric")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-2",className:"footnote-backref"},"\u21a9"))))))}h.isMDXComponent=!0}}]);