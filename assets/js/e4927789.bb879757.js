"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[51359],{603905:function(e,t,i){i.d(t,{Zo:function(){return T},kt:function(){return g}});var n=i(667294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function M(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?M(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function N(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},M=Object.keys(e);for(n=0;n<M.length;n++)i=M[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(n=0;n<M.length;n++)i=M[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},T=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,M=e.originalType,s=e.parentName,T=N(e,["components","mdxType","originalType","parentName"]),u=l(i),g=r,o=u["".concat(s,".").concat(g)]||u[g]||c[g]||M;return i?n.createElement(o,a(a({ref:t},T),{},{components:i})):n.createElement(o,a({ref:t},T))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var M=i.length,a=new Array(M);a[0]=u;var N={};for(var s in t)hasOwnProperty.call(t,s)&&(N[s]=t[s]);N.originalType=e,N.mdxType="string"==typeof e?e:r,a[1]=N;for(var l=2;l<M;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},884384:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},M=i(592814),a=i(51436),N=i(386010),s=function(e){return n.createElement("span",{className:r.details},n.createElement("span",{className:(0,N.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),n.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},n.createElement("span",{className:(0,N.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&n.createElement("span",{className:(0,N.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),n.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},n.createElement("span",{className:(0,N.default)("badge badge--secondary")},n.createElement(M.G,{icon:a.Xjp}))))},l=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},T=function(e){var t={},i=Object.assign({},e.options);return i.noMargins&&delete i.noMargins,i.size&&(t.maxWidth="min(90vw, "+l(i.size)+")",t.maxHeight=l(i.size),delete i.size),i.height&&(t.maxHeight=l(i.height),t.height=l(i.height),delete i.height),i.width&&(t.maxWidth="min(90vw, "+l(i.width)+")",t.width=l(i.width),delete i.width),t=Object.assign({},t,i),n.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return n.createElement(T,e);var t=n.useState(!1),i=(t[0],t[1]),M=n.useState(!1),a=M[0],l=M[1],c=e.caption&&"undefined"!==e.caption,u=e.bib||c;return e.options.noMargins&&!0,n.createElement("figure",{className:(0,N.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return i(!0)},onMouseOut:function(e){var t,n,r,M,a;t=e.currentTarget.getBoundingClientRect(),n=e.clientX,r=e.clientY,M=t.left<=n&&t.right>=n,a=t.top<=r&&t.bottom>=r,M&&a||i(!1)}},n.createElement(T,e),u&&n.createElement("figcaption",null,c&&n.createElement("span",null,e.caption),e.bib&&n.createElement("span",{className:(0,N.default)(r.bib,a?r.visible:void 0),onClick:function(){return l(!a)}},"@"),a&&n.createElement(s,e.bib)))}},342142:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return o},frontMatter:function(){return s},metadata:function(){return T},toc:function(){return u}});var n=i(583117),r=i(480102),M=(i(667294),i(603905)),a=i(884384),N=["components"],s={label:"12. \u2b50 Rekursion",title:"12. \u2b50 Rekursion"},l="12. \u2b50 Rekursion",T={unversionedId:"Programmieren-1/Turtlegrafik/koch",id:"Programmieren-1/Turtlegrafik/koch",title:"12. \u2b50 Rekursion",description:"Ein Unterprogramm kann sich selber aufrufen. Das ergibt im Normalfall eine unendliche Wiederholung, so dass das Programm abst\xfcrzt. Wird das Unterprogramm jedoch jedesmal mit einem ver\xe4nderten Parameter aufgerufen, so kann eine Abbruchbedingung erstellt werden, welche angibt, ob das Unterprogramm erneut aufgerufen werden soll oder nicht.",source:"@site/docs/Programmieren-1/02-Turtlegrafik/052-koch.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/koch",permalink:"/Programmieren-1/Turtlegrafik/koch",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/052-koch.md",tags:[],version:"current",lastUpdatedAt:1643355164,formattedLastUpdatedAt:"28.1.2022",sidebarPosition:52,frontMatter:{label:"12. \u2b50 Rekursion",title:"12. \u2b50 Rekursion"},sidebar:"sidebar",previous:{title:"11. Mini-Projekte",permalink:"/Programmieren-1/Turtlegrafik/art"},next:{title:"Nosync - Unterprogramme",permalink:"/Programmieren-1/Turtlegrafik/examples.nosync"}},c={},u=[{value:"Beispiel",id:"beispiel",level:2},{value:"Koch Kurve",id:"koch-kurve",level:2}],g={toc:u};function o(e){var t=e.components,s=(0,r.Z)(e,N);return(0,M.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("h1",{id:"12--rekursion"},"12. \u2b50 Rekursion"),(0,M.kt)("p",null,"Ein Unterprogramm kann sich selber aufrufen. Das ergibt im Normalfall eine unendliche Wiederholung, so dass das Programm abst\xfcrzt. Wird das Unterprogramm jedoch jedesmal mit einem ver\xe4nderten Parameter aufgerufen, so kann eine ",(0,M.kt)("strong",{parentName:"p"},"Abbruchbedingung")," erstellt werden, welche angibt, ob das Unterprogramm erneut aufgerufen werden soll oder nicht."),(0,M.kt)("h2",{id:"beispiel"},"Beispiel"),(0,M.kt)("p",null,"Im folgenden Programm wird ein einfacher bin\xe4rer Baum gezeichnet:"),(0,M.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,M.kt)(a.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:i(443383).Z,mdxType:"Image"})),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nleft(90)\ndef baum(gr\xf6sse):\n    forward(gr\xf6sse)\n    left(45)\n    forward(gr\xf6sse / 2)\n    backward(gr\xf6sse / 2)\n    right(90)\n    forward(gr\xf6sse / 2)\n    backward(gr\xf6sse / 2)\n    left(45)\nbaum(40)\n")),(0,M.kt)("p",null,"Diesen Baum k\xf6nnen wir nun so umbauen, dass jeder Ast auch wieder ein bin\xe4rer Baum ist:"),(0,M.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,M.kt)(a.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:i(869386).Z,mdxType:"Image"})),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nleft(90)\ndef baum(gr\xf6sse):\n    if gr\xf6sse < 5:\n        forward(gr\xf6sse)\n    else:\n        forward(gr\xf6sse)\n        left(45)\n        baum(gr\xf6sse / 2)\n        backward(gr\xf6sse / 2)\n        right(90)\n        baum(gr\xf6sse / 2)\n        backward(gr\xf6sse / 2)\n        left(45)\nbaum(100) \n")),(0,M.kt)("p",null,"Bemerken Sie, dass eine Abbruchbedingung eingef\xfcgt wurde - falls die gr\xf6sse kleiner als 5 ist, wird nur eine Strecke gezeichnet, andernfalls ein ganzer Baum."),(0,M.kt)("h2",{id:"koch-kurve"},"Koch Kurve"),(0,M.kt)("p",null,"Eine Koch-Kurve ist wie folgt aufgebaut:"),(0,M.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,M.kt)(a.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:i(978245).Z,mdxType:"Image"})),(0,M.kt)("p",null,"wobei ein einzelnes Element wie folgt aussieht:"),(0,M.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,M.kt)(a.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:i(976583).Z,mdxType:"Image"})),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=koch.py id=16486559-3037-48b9-958f-96dc44c50173",live_py:!0,title:"koch.py",id:"16486559-3037-48b9-958f-96dc44c50173"},"from turtle import *\n\n\n")),(0,M.kt)("p",null,"Zusatz: Zeichnen Sie ein Sechseck bestehend aus 6 Koch-Kurven."))}o.isMDXComponent=!0},976583:function(e,t,i){t.Z=i.p+"assets/images/52-koch-angles-f5aa7003e2258b954e6586fcac335da1.jpg"},978245:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgIHZlcnNpb249IjEuMSIgaWQ9IiYjeDMwRUM7JiN4MzBBNDsmI3gzMEU0OyYjeDMwRkM7XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MDAiIGhlaWdodD0iMjUwIj4NCjxnIHN0eWxlPSJmaWxsOiNDRDE3MUM7c3Ryb2tlOiNDRDE3MUM7Ij4NCgk8cGF0aCBkPSJNNjEwLjg0Myw3My4yNTljLTAuNTYxLDEuODU3LTEuMDc3LDMuMDY0LTEuNjc2LDQuNTU0aDUuNjY2Yy0wLjI1My0wLjUzMy0xLjExMy0yLjY5Ny0xLjY3NC00LjU1NCxjLTAuNjAyLTEuOTg3LTEuMDEyLTMuNzktMS4xNTktNC45NThDNjExLjg1Myw2OS40Nyw2MTEuNDQyLDcxLjI3Miw2MTAuODQzLDczLjI1OXoiLz4NCgk8cGF0aCBkPSJNMTczLjkwOSwzMy44MDRjLTEuNDk3LDQuOTYtMi44NzcsOC4xODQtNC40NzcsMTIuMTYzaDE1LjEzNWMtMC42NzctMS40MjQtMi45NzctNy4yMDMtNC40NzQtMTIuMTYzLGMtMS42MDUtNS4zMDktMi43MDEtMTAuMTIyLTMuMDk0LTEzLjI0NEMxNzYuNjA3LDIzLjY4MiwxNzUuNTEyLDI4LjQ5NiwxNzMuOTA5LDMzLjgwNHoiLz4NCgk8cGF0aCBkPSJNNDMwLjg0Myw3My4yNTljLTAuNTYxLDEuODU3LTEuMDc3LDMuMDY0LTEuNjc2LDQuNTU0aDUuNjY2Yy0wLjI1My0wLjUzMy0xLjExMy0yLjY5Ny0xLjY3NC00LjU1NCxjLTAuNjAyLTEuOTg3LTEuMDEyLTMuNzktMS4xNTktNC45NThDNDMxLjg1Myw2OS40Nyw0MzEuNDQyLDcxLjI3Miw0MzAuODQzLDczLjI1OXoiLz4NCgk8cGF0aCBkPSJNNTY3Ljg1LDQ3LjEwMWMtMS44OSwwLjQ0NC0zLjE5MiwwLjU5OS00Ljc4MSwwLjgyNWwyLjgzMiw0LjkwOGMwLjMzNS0wLjQ4NSwxLjc3OS0yLjMxMywzLjEwNy0zLjcyNyxjMS40Mi0xLjUxNSwyLjc3NS0yLjc3MSwzLjcxNC0zLjQ4M0M1NzEuNjM2LDQ2LjA4MSw1NjkuODcxLDQ2LjYyNSw1NjcuODUsNDcuMTAxeiIvPg0KCTxwYXRoIGQ9Ik00NzQuOTkzLDQ5LjEwNWMxLjMyOCwxLjQxNCwyLjExNSwyLjQ2NSwzLjEwNiwzLjcyOGwyLjgzMy00LjkwN2MtMC41ODktMC4wNDctMi44OTMtMC4zODQtNC43ODEtMC44MjgsYy0yLjAyMi0wLjQ3My0zLjc4OC0xLjAxOS00Ljg3NC0xLjQ3NUM0NzIuMjE2LDQ2LjMzNiw0NzMuNTcxLDQ3LjU5Miw0NzQuOTkzLDQ5LjEwNXoiLz4NCjwvZz4NCjxnIHN0eWxlPSJzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7Ij4NCgk8ZyBzdHlsZT0iZmlsbDojQ0QxNzFDO3N0cm9rZTojQ0QxNzFDOyI+DQoJCTxsaW5lIHgxPSI2MTEuOTkzIiB5MT0iOTAuODkiIHgyPSI2MTEuOTkzIiB5Mj0iNzUuOTEzIi8+DQoJCTxsaW5lIHgxPSIxNzYuOTgyIiB5MT0iODAuODkiIHgyPSIxNzYuOTgyIiB5Mj0iNDAuODkiLz4NCgkJPGxpbmUgeDE9IjQzMS45OTMiIHkxPSI5MC44OSIgeDI9IjQzMS45OTMiIHkyPSI3NS45MTMiLz4NCgkJPGxpbmUgeDE9IjU1My4xNTUiIHkxPSI1Ni45MTMiIHgyPSI1NjYuMTI3IiB5Mj0iNDkuNDI0Ii8+DQoJCTxsaW5lIHgxPSI0OTAuODM3IiB5MT0iNTYuOTI0IiB4Mj0iNDc3Ljg2NiIgeTI9IjQ5LjQzNiIvPg0KCTwvZz4NCgk8ZyBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwOyI+DQoJCTxwYXRoIGQ9Ik00MTcsMjE3Ljg5aC0xMCBNNDA3LDIxNy44OWwtNS04LjY2IE0zOTcsMjE3Ljg5aC0xMCBNNDAyLDIwOS4yMjlsLTUsOC42NiBNNjU3LDIxNy44OWgtMTAgTTY0NywyMTcuODlsLTUtOC42NiBNNjM3LDIxNy44OWgtMTAgTTY0MiwyMDkuMjI5bC01LDguNjYgTTU5NywyMTcuODloLTEwIE01ODcsMjE3Ljg5bC01LTguNjYgTTU3NywyMTcuODloLTEwIE01ODIsMjA5LjIyOWwtNSw4LjY2IE00NzcsMjE3Ljg5aC0xMCBNNDY3LDIxNy44OWwtNS04LjY2IE00NTcsMjE3Ljg5aC0xMCBNNDYyLDIwOS4yMjlsLTUsOC42NiBNNTA3LDE2NS45MjdoLTEwIE00OTcsMTY1LjkyN2wtNS04LjY2IE00ODcsMTY1LjkyN2gtMTAgTTQ5MiwxNTcuMjY3bC01LDguNjYgTTU2Ni45OTksMTY1LjkyOWgtMTAgTTU1Ni45OTksMTY1LjkyOWwtNS04LjY2IE01NDYuOTk5LDE2NS45MjloLTEwIE01NTEuOTk5LDE1Ny4yNjlsLTUsOC42NiBNNDc3LDE2NS45MjlsNSw4LjY2IE00ODIsMTc0LjU4OWwtNSw4LjY2IE00ODcsMTgzLjI0OWw0Ljk5OSw4LjY1OCBNNDc3LDE4My4yNDloMTAgTTUzNywxNjUuOTI5bC01LTguNjYgTTUzMiwxNTcuMjY5bDUtOC42NiBNNTI3LDE0OC42MDhsLTUtOC42NiBNNTM3LDE0OC42MDhoLTEwIE02MjcsMjE3Ljg5bC01LTguNjYgTTYyMiwyMDkuMjI5bDUtOC42NiBNNjE3LDIwMC41NjlsLTUtOC42NiBNNjI3LDIwMC41NjloLTEwIE01NTEuOTk5LDE5MS45MDlsNS04LjY2IE01NTYuOTk5LDE4My4yNDlsOS45OTktMC4wMDIgTTU2MS45OTksMTc0LjU4OWw1LTguNjYgTTU2Ni45OTgsMTgzLjI0N2wtNC45OTktOC42NTggTTUyMiwxMzkuOTQ2bC01LDguNjYgTTUxNywxNDguNjA2aC0xMCBNNTEyLDE1Ny4yNjdsLTUsOC42NiBNNTA3LDE0OC42MDZsNSw4LjY2IE02MTIsMTkxLjkwOWwtNSw4LjY2IE02MDcsMjAwLjU2OWgtMTAgTTYwMiwyMDkuMjI5bC01LDguNjYgTTU5NywyMDAuNTY5bDUsOC42NiBNNDkyLDE5MS45MDlsLTUsOC42NiBNNDg3LDIwMC41NjloLTEwIE00ODIsMjA5LjIyOWwtNSw4LjY2IE00NzcsMjAwLjU2OWw1LDguNjYgTTU2NywyMTcuODlsLTUtOC42NiBNNTYyLDIwOS4yMjlsNS04LjY2IE01NTcsMjAwLjU2OWwtNS04LjY2IE01NjcsMjAwLjU2OWgtMTAgTTQ0NywyMTcuODlsLTUtOC42NiBNNDQyLDIwOS4yMjlsNS04LjY2IE00MzcsMjAwLjU2OWwtNS04LjY2IE00NDcsMjAwLjU2OWgtMTAgTTQzMiwxOTEuOTA5bC01LDguNjYgTTQyNywyMDAuNTY5aC0xMCBNNDIyLDIwOS4yMjlsLTUsOC42NiBNNDE3LDIwMC41NjlsNSw4LjY2Ii8+DQoJCTxwYXRoIGQ9Ik04NywxOTEuOTA5bDE1LDI1Ljk4IE0xMDIsMjE3Ljg5aDMwIE03MiwyMTcuODlsMTUtMjUuOTggTTQyLDIxNy44OWgzMCBNMjY3LDE5MS45MDlsMTUsMjUuOTggTTI4MiwyMTcuODloMzAgTTI1MiwyMTcuODlsMTUtMjUuOTggTTIyMiwyMTcuODloMzAgTTIyMiwxNjUuOTI5bC0xNSwyNS45OCBNMjA3LDE5MS45MDlsMTUsMjUuOTggTTE5MiwxNjUuOTI5aDMwIE0xNzcsMTM5Ljk0OGwxNSwyNS45OCBNMTMyLDE2NS45MjhoMzAgTTE2MiwxNjUuOTI4bDE1LTI1Ljk4IE0xNDcsMTkxLjkwOGwtMTUtMjUuOTggTTEzMiwyMTcuODlsMTUtMjUuOTgxIi8+DQoJCTxwYXRoIGQ9Ik01NjcsMTAwLjg5aDkwIE0zODcsMTAwLjg5aDkwIE01MjIsMjIuOTQ3bDQ0Ljk5OSw3Ny45NDMgTTQ3NywxMDAuODlsNDUtNzcuOTQyIi8+DQoJCTxsaW5lIHgxPSI0MiIgeTE9IjEwMC44OSIgeDI9IjMxMiIgeTI9IjEwMC44OSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"},443383:function(e,t){t.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9kYjMyNDM5OV9kZmQ5XzQ0NjJfOTBhN19hNWM0ZDk4ZDJmOThfc3ZnIiB3aWR0aD0iMzguMjg0Mjg2NDk5MDIzNDQiIGhlaWdodD0iNjQuMTQyMTM1NjIwMTE3MTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMjMwLjg1Nzg2NDM3OTg4MjgsMTkwLjg1Nzg2NDM3OTg4MjgsMzguMjg0Mjg2NDk5MDIzNDQsNjQuMTQyMTM1NjIwMTE3MTkiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIyLjQ0OTI5MzU5ODI5NDcwNjVlLTE1IiB5Mj0iLTQwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMi40NDkyOTM1OTgyOTQ3MDY1ZS0xNSIgeTE9Ii00MCIgeDI9Ii0xNC4xNDIxMzU2MjM3MzA5NDciIHkyPSItNTQuMTQyMTM1NjIzNzMwOTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTQuMTQyMTM1NjIzNzMwOTQ3IiB5MT0iLTU0LjE0MjEzNTYyMzczMDk1IiB4Mj0iMS43NzYzNTY4Mzk0MDAyNTA1ZS0xNSIgeTI9Ii00MCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjEuNzc2MzU2ODM5NDAwMjUwNWUtMTUiIHkxPSItNDAiIHgyPSIxNC4xNDIxMzU2MjM3MzA5NTMiIHkyPSItNTQuMTQyMTM1NjIzNzMwOTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNC4xNDIxMzU2MjM3MzA5NTMiIHkxPSItNTQuMTQyMTM1NjIzNzMwOTUiIHgyPSIxLjc3NjM1NjgzOTQwMDI1MDVlLTE1IiB5Mj0iLTQwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJibGFjayIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43NzYzNTY4Mzk0MDAyNTA1ZS0xNSwtNDAuMCkgcm90YXRlKC0xODAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PmZyb20gdHVydGxlIGltcG9ydCAqCgpsZWZ0KDkwKQpkZWYgYmF1bShncsO2c3NlKToKICAgIGZvcndhcmQoZ3LDtnNzZSkKICAgIGxlZnQoNDUpCiAgICBmb3J3YXJkKGdyw7Zzc2UgLyAyKQogICAgYmFja3dhcmQoZ3LDtnNzZSAvIDIpCiAgICByaWdodCg5MCkKICAgIGZvcndhcmQoZ3LDtnNzZSAvIDIpCiAgICBiYWNrd2FyZChncsO2c3NlIC8gMikKICAgIGxlZnQoNDUpCmJhdW0oNDApIDwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},869386:function(e,t,i){t.Z=i.p+"assets/images/52-tree-n2-9b54ef3d34efa5ed9061a02723905694.svg"}}]);