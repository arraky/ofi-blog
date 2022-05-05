"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62432],{603905:function(e,i,t){t.d(i,{Zo:function(){return o},kt:function(){return d}});var n=t(667294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function M(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var I=n.createContext({}),c=function(e){var i=n.useContext(I),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},o=function(e){var i=c(e.components);return n.createElement(I.Provider,{value:i},e.children)},s={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},w=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,I=e.parentName,o=M(e,["components","mdxType","originalType","parentName"]),w=c(t),d=a,T=w["".concat(I,".").concat(d)]||w[d]||s[d]||r;return t?n.createElement(T,l(l({ref:i},o),{},{components:t})):n.createElement(T,l({ref:i},o))}));function d(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=w;var M={};for(var I in i)hasOwnProperty.call(i,I)&&(M[I]=i[I]);M.originalType=e,M.mdxType="string"==typeof e?e:a,l[1]=M;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},884384:function(e,i,t){t.d(i,{Z:function(){return s}});var n=t(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(592814),l=t(51436),M=t(386010),I=function(e){return n.createElement("span",{className:a.details},n.createElement("span",{className:(0,M.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),n.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},n.createElement("span",{className:(0,M.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&n.createElement("span",{className:(0,M.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),n.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},n.createElement("span",{className:(0,M.default)("badge badge--secondary")},n.createElement(r.G,{icon:l.Xjp}))))},c=function(e,i){return void 0===i&&(i="px"),/^\d+(\.\d*)?$/.test(e)?""+e+i:e},o=function(e){var i={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(i.maxWidth="min(90vw, "+c(t.size)+")",i.maxHeight=c(t.size),delete t.size),t.height&&(i.maxHeight=c(t.height),i.height=c(t.height),delete t.height),t.width&&(i.maxWidth="min(90vw, "+c(t.width)+")",i.width=c(t.width),delete t.width),i=Object.assign({},i,t),n.createElement("img",{src:e.src,alt:e.alt,style:i,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},s=function(e){if(e.isInline)return n.createElement(o,e);var i=n.useState(!1),t=(i[0],i[1]),r=n.useState(!1),l=r[0],c=r[1],s=e.caption&&"undefined"!==e.caption,w=e.bib||s;return e.options.noMargins&&!0,n.createElement("figure",{className:(0,M.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var i,n,a,r,l;i=e.currentTarget.getBoundingClientRect(),n=e.clientX,a=e.clientY,r=i.left<=n&&i.right>=n,l=i.top<=a&&i.bottom>=a,r&&l||t(!1)}},n.createElement(o,e),w&&n.createElement("figcaption",null,s&&n.createElement("span",null,e.caption),e.bib&&n.createElement("span",{className:(0,M.default)(a.bib,l?a.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&n.createElement(I,e.bib)))}},130592:function(e,i,t){t.d(i,{Z:function(){return g}});var n=t(667294),a={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},r=t(386010),l=function(e){return n.createElement("div",{className:a.step},e.code)},M=function(e){return n.createElement("div",{className:(0,r.default)(a.call,a.step,a.bordered)},e.code)},I=function(e){return n.createElement("div",{className:(0,r.default)(a.step,a.statement)},e.code)},c=function(e){return n.createElement("div",{className:(0,r.default)(a.repeat,a.step,a.indent)},n.createElement("div",{className:a.header},e.code),n.createElement("div",{className:a.body},e.block&&n.createElement(T,{program:e.block})))},o=function(e){return n.createElement("div",{className:(0,r.default)(a.def,a.step,a.indent)},n.createElement("div",{className:a.header},e.code),n.createElement("div",{className:a.body},e.block&&n.createElement(T,{program:e.block})))},s=function(e){return n.createElement("div",{className:(0,r.default)(a.input,a.step)},e.code)},w=function(e){return n.createElement("div",{className:(0,r.default)(a.if,a.step,a.indent)},n.createElement("div",{className:a.header},e.code),n.createElement("div",{className:a.body},e.block&&n.createElement(T,{program:e.block})))},d=function(e){return n.createElement("div",{className:(0,r.default)(a.else,a.step)},n.createElement("div",{className:a.header},e.code),n.createElement("div",{className:a.body},e.block&&n.createElement(T,{program:e.block})))},T=function(e){return n.createElement("div",{className:a.strukto},e.program.map((function(e,i){switch(e.type){case"call":return n.createElement(M,{key:i,code:e.code});case"def":return n.createElement(o,{key:i,code:e.code,block:e.block});case"repeat":return n.createElement(c,{key:i,code:e.code,block:e.block});case"step":return n.createElement(l,{key:i,code:e.code});case"statement":return n.createElement(I,{key:i,code:e.code});case"input":return n.createElement(s,{key:i,code:e.code});case"if":return n.createElement(w,{key:i,code:e.code,block:e.block});case"elif":case"else":return n.createElement(d,{key:i,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},g=T},391224:function(e,i,t){t.r(i),t.d(i,{assets:function(){return s},contentTitle:function(){return c},default:function(){return T},frontMatter:function(){return I},metadata:function(){return o},toc:function(){return w}});var n=t(583117),a=t(480102),r=(t(667294),t(603905)),l=t(884384),M=(t(130592),["components"]),I={title:"Nosync - Unterprogramme"},c="Beispiele Unterprogramme",o={unversionedId:"Programmieren-1/Turtlegrafik/examples.nosync",id:"Programmieren-1/Turtlegrafik/examples.nosync",title:"Nosync - Unterprogramme",description:"Weitere Beispiele...",source:"@site/docs/Programmieren-1/02-Turtlegrafik/090-examples.nosync.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/examples.nosync",permalink:"/Programmieren-1/Turtlegrafik/examples.nosync",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/090-examples.nosync.md",tags:[],version:"current",lastUpdatedAt:1638196121,formattedLastUpdatedAt:"29.11.2021",sidebarPosition:90,frontMatter:{title:"Nosync - Unterprogramme"},sidebar:"sidebar",previous:{title:"12. \u2b50 Rekursion",permalink:"/Programmieren-1/Turtlegrafik/koch"},next:{title:"Turtle Befehle",permalink:"/Programmieren-1/Turtlegrafik/turtle-commands"}},s={},w=[{value:"Ratespiel",id:"ratespiel",level:4}],d={toc:w};function T(e){var i=e.components,I=(0,a.Z)(e,M);return(0,r.kt)("wrapper",(0,n.Z)({},d,I,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beispiele-unterprogramme"},"Beispiele Unterprogramme"),(0,r.kt)("p",null,"Weitere Beispiele..."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nspeed(5)\npenup()\ngoto(50, -30)\npendown()\n\nfillcolor('red')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\npenup()\ngoto(-100, 30)\npendown()\n\nfillcolor('green')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\npenup()\ngoto(-25, 150)\npendown()\n\nfillcolor('blue')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\n\npenup()\ngoto(-150, -120)\npendown()\n\nfillcolor('black')\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill()\n\npenup()\ngoto(-15, -120)\npendown()\n\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill()\n\npenup()\ngoto(135, -120)\npendown()\n\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill() \n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"250px",alignSelf:"center"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(913573).Z,mdxType:"Image"}))))),(0,r.kt)("h4",{id:"ratespiel"},"Ratespiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from random import randint\nfrom browser import alert\n\ngeheim = randint(0, 100)\n\nfor i in range(10):\n    zahl = int(input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.'))\n    if zahl == geheim:\n        alert(f'Gewonnen!!! Die gesuchte Zahl {geheim} wurde in {i + 1} Versuchen gefunden :)')\n        break\n    elif zahl < geheim:\n        alert(f'{zahl} ist zu klein')\n    else:\n        alert(f'{zahl} ist zu gross')\n\nif zahl != geheim:\n    alert(f'verloren :(, die gesuchte Zahl war {geheim}')\n")))}T.isMDXComponent=!0},913573:function(e,i){i.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV8yZjUxZDNkOF80MDM3XzRlZDFfYjQwMl8xYzMzZjg1Zjk0Y2Ffc3ZnIiB3aWR0aD0iMzI1IiBoZWlnaHQ9IjMyOC4zMDEyNjk1MzEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSI5NSw1MS42OTg3MzA0Njg3NSwzMjUsMzI4LjMwMTI2OTUzMTI1Ij4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNTAiIHkyPSIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAiIHkxPSIzMCIgeDI9IjEwMCIgeTI9IjMwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTAwIiB5MT0iMzAiIHgyPSI3NS4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xMy4zMDEyNzAxODkyMjE5MzgiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3NS4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xMy4zMDEyNzAxODkyMjE5MzgiIHgyPSI0OS45OTk5OTk5OTk5OTk5OSIgeTI9IjI5Ljk5OTk5OTk5OTk5OTk4NiIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1MCwzMCAxMDAuMCwzMC4wIDc1LjAwMDAwMDAwMDAwMDAxLC0xMy4zMDEyNzAxODkyMjE5MzggNDkuOTk5OTk5OTk5OTk5OTksMjkuOTk5OTk5OTk5OTk5OTg2IiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IHJlZDsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNDkuOTk5OTk5OTk5OTk5OTkiIHkxPSIyOS45OTk5OTk5OTk5OTk5ODYiIHgyPSItMTAwIiB5Mj0iMjkuOTk5OTk5OTk5OTk5OTg2IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTEwMCIgeTE9Ii0zMCIgeDI9Ii01MCIgeTI9Ii0yOS45OTk5OTk5OTk5OTk5OSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii01MCIgeTE9Ii0yOS45OTk5OTk5OTk5OTk5OSIgeDI9Ii03NC45OTk5OTk5OTk5OTk5NiIgeTI9Ii03My4zMDEyNzAxODkyMjE5NSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii03NC45OTk5OTk5OTk5OTk5NiIgeTE9Ii03My4zMDEyNzAxODkyMjE5NSIgeDI9Ii05OS45OTk5OTk5OTk5OTk5NCIgeTI9Ii0zMC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iLTEwMCwtMzAgLTUwLjAsLTI5Ljk5OTk5OTk5OTk5OTk5IC03NC45OTk5OTk5OTk5OTk5NiwtNzMuMzAxMjcwMTg5MjIxOTUgLTk5Ljk5OTk5OTk5OTk5OTk0LC0zMC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogZ3JlZW47IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9Ii05OS45OTk5OTk5OTk5OTk5NCIgeTE9Ii0zMC4wMDAwMDAwMDAwMDAwMTQiIHgyPSItMjUiIHkyPSItMzAuMDAwMDAwMDAwMDAwMDE0IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTI1IiB5MT0iLTE1MCIgeDI9IjI1IiB5Mj0iLTE0OS45OTk5OTk5OTk5OTk5NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjI1IiB5MT0iLTE0OS45OTk5OTk5OTk5OTk5NyIgeDI9Ii0yLjg0MjE3MDk0MzA0MDQwMWUtMTQiIHkyPSItMTkzLjMwMTI3MDE4OTIyMTkiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMi44NDIxNzA5NDMwNDA0MDFlLTE0IiB5MT0iLTE5My4zMDEyNzAxODkyMjE5IiB4Mj0iLTI1LjAwMDAwMDAwMDAwMDEwNyIgeTI9Ii0xNTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iLTI1LC0xNTAgMjUuMCwtMTQ5Ljk5OTk5OTk5OTk5OTk3IC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsLTE5My4zMDEyNzAxODkyMjE5IC0yNS4wMDAwMDAwMDAwMDAxMDcsLTE1MC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsdWU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9Ii0yNS4wMDAwMDAwMDAwMDAxMDciIHkxPSItMTUwIiB4Mj0iLTE1MCIgeTI9Ii0xNTAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUwIiB5MT0iMTIwIiB4Mj0iLTEyMCIgeTI9IjEyMC4wMDAwMDAwMDAwMDAwMyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii0xMjAiIHkxPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTIwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iOTAuMDAwMDAwMDAwMDAwMDMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTIwLjAwMDAwMDAwMDAwMDAzIiB5MT0iOTAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTUwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iOTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUwLjAwMDAwMDAwMDAwMDAzIiB5MT0iOTAiIHgyPSItMTUwIiB5Mj0iMTIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9Ii0xNTAsMTIwIC0xMjAuMCwxMjAuMDAwMDAwMDAwMDAwMDMgLTEyMC4wMDAwMDAwMDAwMDAwMyw5MC4wMDAwMDAwMDAwMDAwMyAtMTUwLjAwMDAwMDAwMDAwMDAzLDkwLjAgLTE1MC4wLDEyMC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsYWNrOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMTUwIiB5MT0iMTIwIiB4Mj0iLTE1IiB5Mj0iMTIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTE1IiB5MT0iMTIwIiB4Mj0iMTUiIHkyPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNSIgeTE9IjEyMC4wMDAwMDAwMDAwMDAwMyIgeDI9IjE0Ljk5OTk5OTk5OTk5OTk3OSIgeTI9IjkwLjAwMDAwMDAwMDAwMDAzIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTQuOTk5OTk5OTk5OTk5OTc5IiB5MT0iOTAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTUuMDAwMDAwMDAwMDAwMDIxIiB5Mj0iOTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUuMDAwMDAwMDAwMDAwMDIxIiB5MT0iOTAiIHgyPSItMTUuMDAwMDAwMDAwMDAwMDA0IiB5Mj0iMTIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9Ii0xNSwxMjAgMTUuMCwxMjAuMDAwMDAwMDAwMDAwMDMgMTQuOTk5OTk5OTk5OTk5OTc5LDkwLjAwMDAwMDAwMDAwMDAzIC0xNS4wMDAwMDAwMDAwMDAwMjEsOTAuMCAtMTUuMDAwMDAwMDAwMDAwMDA0LDEyMC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsYWNrOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMTUuMDAwMDAwMDAwMDAwMDA0IiB5MT0iMTIwIiB4Mj0iMTM1IiB5Mj0iMTIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTM1IiB5MT0iMTIwIiB4Mj0iMTY1IiB5Mj0iMTIwLjAwMDAwMDAwMDAwMDA0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTY1IiB5MT0iMTIwLjAwMDAwMDAwMDAwMDA0IiB4Mj0iMTY0Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iOTAuMDAwMDAwMDAwMDAwMDQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNjQuOTk5OTk5OTk5OTk5OTciIHkxPSI5MC4wMDAwMDAwMDAwMDAwNCIgeDI9IjEzNC45OTk5OTk5OTk5OTk5NyIgeTI9IjkwLjAwMDAwMDAwMDAwMDExIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTM0Ljk5OTk5OTk5OTk5OTk3IiB5MT0iOTAuMDAwMDAwMDAwMDAwMTEiIHgyPSIxMzQuOTk5OTk5OTk5OTk5OSIgeTI9IjEyMC4wMDAwMDAwMDAwMDAxMSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSIxMzUsMTIwIDE2NS4wLDEyMC4wMDAwMDAwMDAwMDAwNCAxNjQuOTk5OTk5OTk5OTk5OTcsOTAuMDAwMDAwMDAwMDAwMDQgMTM0Ljk5OTk5OTk5OTk5OTk3LDkwLjAwMDAwMDAwMDAwMDExIDEzNC45OTk5OTk5OTk5OTk5LDEyMC4wMDAwMDAwMDAwMDAxMSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiBibGFjazsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJibGFjayIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM0Ljk5OTk5OTk5OTk5OTksMTIwLjAwMDAwMDAwMDAwMDExKSByb3RhdGUoLTIyNTAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PmZyb20gdHVydGxlIGltcG9ydCAqCnNwZWVkKDEwMCkKcGVudXAoKQpnb3RvKDUwLCAtMzApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdyZWQnKQpiZWdpbl9maWxsKCkKZm9yIGkgaW4gcmFuZ2UoMyk6CiAgICBmb3J3YXJkKDUwKQogICAgbGVmdCgxMjApCmVuZF9maWxsKCkKCnBlbnVwKCkKZ290bygtMTAwLCAzMCkKcGVuZG93bigpCgpmaWxsY29sb3IoJ2dyZWVuJykKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg1MCkKICAgIGxlZnQoMTIwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oLTI1LCAxNTApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdibHVlJykKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg1MCkKICAgIGxlZnQoMTIwKQplbmRfZmlsbCgpCgoKcGVudXAoKQpnb3RvKC0xNTAsIC0xMjApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdibGFjaycpCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oLTE1LCAtMTIwKQpwZW5kb3duKCkKCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oMTM1LCAtMTIwKQpwZW5kb3duKCkKCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpIDwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"}}]);