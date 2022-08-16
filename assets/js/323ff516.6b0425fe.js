"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,m=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=d(a),k=n,u=c["".concat(s,".").concat(k)]||c[k]||p[k]||m;return a?r.createElement(u,i(i({ref:t},o),{},{components:a})):r.createElement(u,i({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=a.length,i=new Array(m);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<m;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30592:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var m=a(86010);const i=e=>r.createElement("div",{className:n.step},e.code),l=e=>r.createElement("div",{className:(0,m.default)(n.call,n.step,n.bordered)},e.code),s=e=>r.createElement("div",{className:(0,m.default)(n.step,n.statement)},e.code),d=e=>r.createElement("div",{className:(0,m.default)(n.repeat,n.step,n.indent)},r.createElement("div",{className:n.header},e.code),r.createElement("div",{className:n.body},e.block&&r.createElement(u,{program:e.block}))),o=e=>r.createElement("div",{className:(0,m.default)(n.def,n.step,n.indent)},r.createElement("div",{className:n.header},e.code),r.createElement("div",{className:n.body},e.block&&r.createElement(u,{program:e.block}))),p=e=>r.createElement("div",{className:(0,m.default)(n.input,n.step)},e.code),c=e=>r.createElement("div",{className:(0,m.default)(n.if,n.step,n.indent)},r.createElement("div",{className:n.header},e.code),r.createElement("div",{className:n.body},e.block&&r.createElement(u,{program:e.block}))),k=e=>r.createElement("div",{className:(0,m.default)(n.else,n.step)},r.createElement("div",{className:n.header},e.code),r.createElement("div",{className:n.body},e.block&&r.createElement(u,{program:e.block}))),u=e=>r.createElement("div",{className:n.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return r.createElement(l,{key:t,code:e.code});case"def":return r.createElement(o,{key:t,code:e.code,block:e.block});case"repeat":return r.createElement(d,{key:t,code:e.code,block:e.block});case"step":return r.createElement(i,{key:t,code:e.code});case"statement":return r.createElement(s,{key:t,code:e.code});case"input":return r.createElement(p,{key:t,code:e.code});case"if":return r.createElement(c,{key:t,code:e.code,block:e.block});case"elif":case"else":return r.createElement(k,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),v=u},80671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(83117),n=(a(67294),a(3905)),m=a(30592);const i={sidebar_custom_props:{id:"5604d4bd-d35b-4b52-8df9-1b3f9cc054b8"}},l="Struktogramme",s={unversionedId:"Programmieren-1/Algorithmen/Struktogramme",id:"version-26P/Programmieren-1/Algorithmen/Struktogramme",title:"Struktogramme",description:"Struktogramme sind eine M\xf6glichkeit, Programme und Algorithmen grafisch darzustellen. Diese Dartstellungsform wurde 1973 von Isaac Nassi und Ben Shneiderman vorgeschlagen und heisst deshalb auch Nassi-Shneiderman-Diagramm.",source:"@site/versioned_docs/version-26P/03-Programmieren-1/01-Algorithmen/06-Struktogramme.md",sourceDirName:"03-Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Struktogramme",permalink:"/26P/Programmieren-1/Algorithmen/Struktogramme",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-26P/03-Programmieren-1/01-Algorithmen/06-Struktogramme.md",tags:[],version:"26P",sidebarPosition:6,frontMatter:{sidebar_custom_props:{id:"5604d4bd-d35b-4b52-8df9-1b3f9cc054b8"}},sidebar:"version-26P/sidebar",previous:{title:"Flussdiagramm",permalink:"/26P/Programmieren-1/Algorithmen/Flussdiagramm"},next:{title:"RoboZZle",permalink:"/26P/Programmieren-1/Algorithmen/Uebungen/robozzle"}},d={},o=[{value:"Sequenz \ud83d\udc63",id:"sequenz-",level:2},{value:"Wiederholung \ud83d\udd01",id:"wiederholung-",level:2},{value:"Unterprogramm \ud83c\udff7",id:"unterprogramm-",level:2},{value:"Parameter \u2295 \u2296",id:"parameter--",level:2},{value:"Variablen",id:"variablen",level:3}],p=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const k={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"struktogramme"},"Struktogramme"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Struktogramme sind eine M\xf6glichkeit, Programme und Algorithmen grafisch darzustellen. Diese Dartstellungsform wurde 1973 von Isaac Nassi und Ben Shneiderman vorgeschlagen und heisst deshalb auch Nassi-Shneiderman-Diagramm.",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"sequenz-"},"Sequenz \ud83d\udc63"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"In einem Struktogramm wird jeder Befehl in einen rechteckigen Kasten geschrieben. Befehle m\xfcssen nicht in einer Programmiersprache geschrieben werden, ",(0,n.kt)("em",{parentName:"p"},"Parameter")," werden ",(0,n.kt)("u",null,"unterstrichen"),"."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(100)\nleft(90)\nforward(50) \n"))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)(m.Z,{program:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 nach links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")}],mdxType:"Strukto"}))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"wiederholung-"},"Wiederholung \ud83d\udd01"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Eine Wiederholung wird wie folgt dargestellt."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nfor i in range(4):\n    forward(100)\n    left(90)\n"))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)(m.Z,{program:[{type:"repeat",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"4")," mal wiederholen:"),block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 nach links")}]}],mdxType:"Strukto"}))),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("h5",{parentName:"div",id:"bemerke"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bemerke"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Beim Struktogramm wird der wiederholte Teil durch die ",(0,n.kt)("strong",{parentName:"p"},"Einr\xfcckung")," ersichtlich. Auch in Python werden wiederholte Sequenzen (Zeilen 4-5) visuell mit einem Tabulator einger\xfcckt."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Der Doppelpunkt am Zeilenende zeigt an, dass eine einger\xfcckte Sequenz (beim Programmieren spricht man von einem ",(0,n.kt)("em",{parentName:"p"},"Codeblock"),") folgt."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"unterprogramm-"},"Unterprogramm \ud83c\udff7"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Eine Sequenz kann mit einem Namen versehen werden. Anstatt immer die ganze Sequenz aufzuschreiben, gen\xfcgt es den Namen aufzuschreiben."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ndef zick_zack():\n    left(60)\n    forward(30)\n    right(120)\n    forward(30)\n    left(60)\n\n\n\nforward(100)\nzick_zack()\nzick_zack()\n"))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)(m.Z,{program:[{type:"def",code:"zick_zack:",block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"60"),"\xb0 nach links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 nach rechts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"60"),"\xb0 nach links")}]},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"call",code:(0,n.kt)("span",null,"zick_zack")},{type:"call",code:(0,n.kt)("span",null,"zick_zack")}],mdxType:"Strukto"}))),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("h5",{parentName:"div",id:"bemerke-1"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bemerke"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Um ein Unterprogramm aufzurufen, wird beim Struktogramm der Kasten mit doppelten Seitenstrichen markiert, bei Python werden runde Klammern am Ende des Namens angegeben."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Den Namen f\xfcr Unterprogramm kann beliebig gew\xe4hlt werden, sofern er nicht mit einer Zahl beginnt und keine Sonderzeichen enth\xe4lt. ",(0,n.kt)("strong",{parentName:"p"},"Leerschl\xe4ge")," und ",(0,n.kt)("strong",{parentName:"p"},"Bindestriche")," sind nicht erlaubt - stattdessen werden Unterstriche ",(0,n.kt)("inlineCode",{parentName:"p"},"_")," verwendet: Statt ",(0,n.kt)("inlineCode",{parentName:"p"},"zick zack")," wird der Name ",(0,n.kt)("inlineCode",{parentName:"p"},"zick_zack")," verwendet. "),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"parameter--"},"Parameter \u2295 \u2296"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Ein Unterprogramm kann mit ",(0,n.kt)("strong",{parentName:"p"},"Parametern")," aufgerufen werden."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Parameter werden jeweils ",(0,n.kt)("u",null,"unterstrichen"),", so dass klar ist, welche Werte sich \xe4ndern k\xf6nnen."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h3",{parentName:"div",id:"variablen"},"Variablen"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Bei Programmen wird zwischen Parametern und Variablen unterschieden. Genau wie Paramter k\xf6nnen diese das Ergebnis eines Algorithmus \xe4ndern. Sie werden in einem Struktogramm speziell als markiert, damit klar ist, dass eigentlich der in der Variable gespeicherte Wert gemeint ist."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,n.kt)("div",{style:{},className:"flex flex-flex"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"gr\xf6sse = input('Wie gross bist du [cm]?')\nprint(f'Ich bin {gr\xf6sse} cm gross')\n"))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,n.kt)(m.Z,{program:[{type:"input",code:(0,n.kt)("span",null,(0,n.kt)("span",{className:"var"},"gr\xf6sse")," = Wie gross bist du [cm]?")},{type:"step",code:(0,n.kt)("span",null,"Ausgabe: Ich bin ",(0,n.kt)("span",{className:"var"},"gr\xf6sse")," cm gross.")}],mdxType:"Strukto"}))),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Quelle: ",(0,n.kt)("a",{parentName:"p",href:"https://rothe.io/?b=prog1&p=905106"},"rothe.io")),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}u.isMDXComponent=!0}}]);