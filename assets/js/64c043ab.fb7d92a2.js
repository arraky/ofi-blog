"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[77823],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},M=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),M=s(n),m=i,w=M["".concat(o,".").concat(m)]||M[m]||u[m]||l;return n?a.createElement(w,r(r({ref:t},d),{},{components:n})):a.createElement(w,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=M;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}M.displayName="MDXCreateElement"},807488:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(583117),i=n(667294),l=n(386010),r=n(336162),c="details_BAp3";function o(e){var t=Object.assign({},e);return i.createElement(r.PO,(0,a.Z)({},t,{className:(0,l.default)("alert alert--info",c,t.className)}))}},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},l=n(592814),r=n(51436),c=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},a.createElement(l.G,{icon:r.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),l=a.useState(!1),r=l[0],s=l[1],u=e.caption&&"undefined"!==e.caption,M=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,c.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,l,r;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,l=t.left<=a&&t.right>=a,r=t.top<=i&&t.bottom>=i,l&&r||n(!1)}},a.createElement(d,e),M&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,c.default)(i.bib,r?i.visible:void 0),onClick:function(){return s(!r)}},"@"),r&&a.createElement(o,e.bib)))}},61014:function(e,t,n){var a=n(972389),i=n(471217),l=n(667294),r=n(121314),c=n(274322),o=n(807488),s=n(386010),d=n(386720),u=n(592814),M=n(51436),m=function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},l.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},w=(0,i.Pi)((function(e){return l.createElement("span",{className:(0,s.default)(d.Z.policy,"badge","badge--"+e.color)},e.name," ",l.createElement(u.G,{icon:M.nYk,onClick:e.onRemove}))})),I=(0,i.Pi)((function(e){var t=l.useState(""),n=t[0],a=t[1],i=l.useState(""),c=i[0],o=i[1],m=l.useState(""),I=m[0],g=m[1],D=(0,r.oR)("policyStore"),p=(0,r.oR)("userStore"),b=D.findPolicy(e.webKey);return b?l.createElement("div",{className:(0,s.default)(d.Z.configContainer)},l.createElement("div",{className:(0,s.default)(d.Z.showControl)},l.createElement(u.G,{icon:b.isConfigOpen?M.nYk:M.cNd,onClick:function(){b.showConfig(!b.isConfigOpen)}})),b.isConfigOpen&&l.createElement("div",{className:(0,s.default)(d.Z.config)},l.createElement("div",{className:(0,s.default)(d.Z.permissions)},Array.from(b.klasses).map((function(e,t){return l.createElement(w,{key:t,name:e,onRemove:function(){return b.removePermission(e,"class")},color:"success"})})),Array.from(b.groups).map((function(e,t){return l.createElement(w,{key:t,name:e,onRemove:function(){return b.removePermission(e,"group")},color:"danger"})})),Array.from(b.users).map((function(e,t){return l.createElement(w,{key:t,name:e,onRemove:function(){return b.removePermission(e,"user")},color:"primary"})}))),l.createElement("div",{className:(0,s.default)(d.Z.update)},l.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:b.locked,list:"solution-policy-for-classes"}),l.createElement("datalist",{id:"solution-policy-for-classes"},p.klasses.map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(n,"class"),a("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:c,onChange:function(e){return o(e.target.value)},disabled:b.locked,list:"solution-policy-for-groups"}),l.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(p.groups,D.groups))).map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(c,"group"),o("")}},"Add"),l.createElement("input",{type:"email",placeholder:"User",value:I,onChange:function(e){return g(e.target.value)},disabled:b.locked,list:"solution-policy-for-users"}),l.createElement("datalist",{id:"solution-policy-for-users"},p.users.map((function(e,t){return l.createElement("option",{key:t,value:e.email})}))),l.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(I,"user"),g("")}},"Add")))):null})),g=(0,i.Pi)((function(e){var t,n,i=(0,r.oR)("policyStore"),u=(0,r.oR)("userStore"),M=(0,a.Z)();if((0,r.aV)(e.webKey),!M)return l.createElement("div",null,"SSR");var w=i.find(e.webKey);return w?l.createElement("div",{"data--web-key":e.webKey,className:(0,s.default)(d.Z.wrapper,"solution-wrapper")},w.show||null!=(t=u.current)&&t.admin?l.createElement(o.Z,{summary:l.createElement("summary",null,e.title||"L\xf6sung"," ",l.createElement(m,null),!w.show&&l.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,s.default)("alert alert--success",d.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&l.createElement(I,{webKey:w.webKey}),e.children):l.createElement("div",{className:(0,s.default)("alert",d.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",l.createElement(m,null))):l.createElement(c.Z,null)}));t.Z=g},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i=n(386010),l="loader_FEpR",r="badge_oWqf",c=n(471217),o=n(592814),s=n(51436),d=(0,c.Pi)((function(){return a.createElement("div",{className:(0,i.default)(l)},a.createElement(o.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",r)},"Laden..."))}))},130592:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(667294),i={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},l=n(386010),r=function(e){return a.createElement("div",{className:i.step},e.code)},c=function(e){return a.createElement("div",{className:(0,l.default)(i.call,i.step,i.bordered)},e.code)},o=function(e){return a.createElement("div",{className:(0,l.default)(i.step,i.statement)},e.code)},s=function(e){return a.createElement("div",{className:(0,l.default)(i.repeat,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(w,{program:e.block})))},d=function(e){return a.createElement("div",{className:(0,l.default)(i.def,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(w,{program:e.block})))},u=function(e){return a.createElement("div",{className:(0,l.default)(i.input,i.step)},e.code)},M=function(e){return a.createElement("div",{className:(0,l.default)(i.if,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(w,{program:e.block})))},m=function(e){return a.createElement("div",{className:(0,l.default)(i.else,i.step)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(w,{program:e.block})))},w=function(e){return a.createElement("div",{className:i.strukto},e.program.map((function(e,t){switch(e.type){case"call":return a.createElement(c,{key:t,code:e.code});case"def":return a.createElement(d,{key:t,code:e.code,block:e.block});case"repeat":return a.createElement(s,{key:t,code:e.code,block:e.block});case"step":return a.createElement(r,{key:t,code:e.code});case"statement":return a.createElement(o,{key:t,code:e.code});case"input":return a.createElement(u,{key:t,code:e.code});case"if":return a.createElement(M,{key:t,code:e.code,block:e.block});case"elif":case"else":return a.createElement(m,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},I=w},482816:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return M},toc:function(){return w}});var a=n(583117),i=n(480102),l=(n(667294),n(603905)),r=n(884384),c=n(61014),o=n(130592),s=["components"],d={},u="Test 25h",M={unversionedId:"Programmieren-1/Testumgebung/25h-test/Probe",id:"Programmieren-1/Testumgebung/25h-test/Probe",title:"Test 25h",description:"Aufgabe 1",source:"@site/docs/Programmieren-1/04-Testumgebung/25h-test/Probe.md",sourceDirName:"Programmieren-1/04-Testumgebung/25h-test",slug:"/Programmieren-1/Testumgebung/25h-test/Probe",permalink:"/Programmieren-1/Testumgebung/25h-test/Probe",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/04-Testumgebung/25h-test/Probe.md",tags:[],version:"current",lastUpdatedAt:1642088290,formattedLastUpdatedAt:"1/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Textverarbeitung",permalink:"/Programmieren-1/Python/strings"},next:{title:"v24",permalink:"/category/v24"}},m={},w=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"Zusatzaufgabe",id:"zusatzaufgabe",level:2}],I={toc:w};function g(e){var t=e.components,d=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},I,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"test-25h"},"Test 25h"),(0,l.kt)(c.Z,{webKey:"9b210a53-d07e-4847-a355-65dd210192e6",title:"Testfragen",open:!0,mdxType:"Solution"},(0,l.kt)("h2",{id:"aufgabe-1"},"Aufgabe 1"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,l.kt)("p",null,"Das Programm zeichnet einen 5er Stern."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\xc4ndern Sie das Programm so ab, dass es nun einen 7er Stern zeichnet."),(0,l.kt)("li",{parentName:"ol"},"F\xfcllen Sie den Stern mit Ihrer Lieblingsfarbe.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe1.py id=91bd2392-e7fc-40b4-945f-fce6e24e4daf versioned readonly",live_py:!0,title:"aufgabe1.py",id:"91bd2392-e7fc-40b4-945f-fce6e24e4daf",versioned:!0,readonly:!0},"from turtle import *\nspeed(0)\n\nfor i in range(5):\n    forward(80)\n    left(3 * 360 / 5)\n")),(0,l.kt)("h2",{id:"aufgabe-2"},"Aufgabe 2"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,l.kt)("p",null,"\xdcbersetzen Sie das untenstehende Struktogramm in Python Code"),(0,l.kt)("div",{style:{maxWidth:"400px"},className:"flex flex-cards"},(0,l.kt)("div",{parentName:"div",style:{},className:"item card"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)(o.Z,{program:[{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"90"),"\xb0 links")},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"150")," Schritte vorw\xe4rts")},{type:"def",code:(0,l.kt)("span",null,"linie"),block:[{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"30"),"\xb0 rechts")},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"30"),"\xb0 links")}]},{type:"def",code:(0,l.kt)("span",null,"dreieck"),block:[{type:"repeat",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"3")," mal wiederholen"),block:[{type:"call",code:"linie zeichnen"},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"120"),"\xb0 links")}]}]},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,l.kt)("span",null,(0,l.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"}],mdxType:"Strukto"})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe2.py versioned id=4b72a23e-4835-42da-bc65-4142b8aa59fa readonly",live_py:!0,title:"aufgabe2.py",versioned:!0,id:"4b72a23e-4835-42da-bc65-4142b8aa59fa",readonly:!0},"from turtle import * \n")),(0,l.kt)("h2",{id:"aufgabe-3"},"Aufgabe 3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(3 Punkte)")),(0,l.kt)("p",null,"Finden und korrigieren Sie alle Fehler, so dass die folgende Ausgabe entsteht. Es gibt sowohl Syntaxfehler wie auch Logikfehler."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(227630).Z,mdxType:"Image"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe3.py id=ed0a9530-ec45-49be-9c50-eb612e4ee8f3 versioned readonly",live_py:!0,title:"aufgabe3.py",id:"ed0a9530-ec45-49be-9c50-eb612e4ee8f3",versioned:!0,readonly:!0},"from turtle import *\n\ndef streifen(farbe):\n    color('farbe')\n    beginn_fill()\n    for i in() range(2)\n        forward(60)\n        left(90)\n        forward(100)\n        left(90)\n    forward(100)\n    end_fill\n\nstreifen('Gr\xfcn')\n streiffn('white')\nstreifen('red')\n\nhide_turtle()\n")),(0,l.kt)("h2",{id:"aufgabe-4"},"Aufgabe 4"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(4 Punkte)")),(0,l.kt)("p",null,"Schreiben Sie ein Programm, welches folgende Zeichnung erzeugt. Die Seitenl\xe4nge eines Zick-Zacks ist ",(0,l.kt)("inlineCode",{parentName:"p"},"20")," Einheiten gross, der Innenwinkel beim Zick-Zack betr\xe4gt ",(0,l.kt)("inlineCode",{parentName:"p"},"60\xb0"),". ",(0,l.kt)("em",{parentName:"p"},"(2.5 Punkte)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Wiederholungen (",(0,l.kt)("em",{parentName:"li"},"0.5 Punkte"),")"),(0,l.kt)("li",{parentName:"ul"},"Schreiben Sie f\xfcr das Zeichnen einer einzelnen Zacke einen (selber definierten) Befehl ",(0,l.kt)("inlineCode",{parentName:"li"},"zickzack")," (",(0,l.kt)("em",{parentName:"li"},"1 Punkt"),").")),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"resultat Aufgabe 4",options:{width:"200px"},isInline:!1,src:n(786334).Z,alt:"resultat Aufgabe 4 --width=200px",mdxType:"Image"})),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"Ein zickzack",options:{width:"200px"},isInline:!1,src:n(742554).Z,alt:"Ein zickzack --width=200px",mdxType:"Image"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe4.py versioned id=c6d2731d-bbd8-42cc-971a-bc8ee6303f21 readonly",live_py:!0,title:"aufgabe4.py",versioned:!0,id:"c6d2731d-bbd8-42cc-971a-bc8ee6303f21",readonly:!0},"from turtle import *\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"zusatzaufgabe"},"Zusatzaufgabe"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(Wird f\xfcr das Erreichen der Note 6 nicht ben\xf6tigt, 2 Punkte)")),(0,l.kt)("p",null,"Auf ",(0,l.kt)("a",{parentName:"p",href:"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/"},"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/")," finden Sie Python-Code, welcher ein Herz zeichnet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"R\xe4umen Sie den Code auf"),(0,l.kt)("li",{parentName:"ul"},"Schreiben Sie Ihren eigenen Namen in das Herz"),(0,l.kt)("li",{parentName:"ul"},"Machen Sie den Rand einen Stift der Breite ",(0,l.kt)("inlineCode",{parentName:"li"},"10")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zusatzaufgabe.py id=400ec5b0-ac1b-47b9-96c0-0f37ad8c7731 versioned readonly",live_py:!0,title:"zusatzaufgabe.py",id:"400ec5b0-ac1b-47b9-96c0-0f37ad8c7731",versioned:!0,readonly:!0},""))))}g.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},227630:function(e,t){t.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jYmQ0MTNkZF9lNTM4XzQ0YTNfYjZiZF9mNzg3ZGE4MjdiZDJfc3ZnIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjExNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMTQ1LDE5MCwxMTUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI2MCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MCIgeTE9IjAiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xMDAiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xMDAiIHgyPSI3LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNy4xMDU0MjczNTc2MDEwMDJlLTE1IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9Ii0xLjEyNjQyNzQ2Mjk2MDkyOTZlLTE0IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IGdyZWVuOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMS4xMjY0Mjc0NjI5NjA5Mjk2ZS0xNCIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5Mj0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiBzdHlsZT0ic3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAuMCwtMC4wIDYwLjAsLTAuMCA2MC4wMDAwMDAwMDAwMDAwMSwtMTAwLjAgNy4xMDU0MjczNTc2MDEwMDJlLTE1LC0xMDAuMDAwMDAwMDAwMDAwMDEgLTEuMTI2NDI3NDYyOTYwOTI5NmUtMTQsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgNTkuOTk5OTk5OTk5OTk5OTg2LDQuODQ5MDY4NzQ1NjYyMzYxZS0xNiIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiBncmVlbjsgc3Ryb2tlOiBncmVlbjsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNTkuOTk5OTk5OTk5OTk5OTg2IiB5MT0iNC44NDkwNjg3NDU2NjIzNjFlLTE2IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk5IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5OSIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDEiIHkxPSItOTkuOTk5OTk5OTk5OTk5OTkiIHgyPSI2MC4wMDAwMDAwMDAwMDAwMTQiIHkyPSItMTAwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNjAuMDAwMDAwMDAwMDAwMDE0IiB5MT0iLTEwMC4wMDAwMDAwMDAwMDAwMSIgeDI9IjU5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI1OS45OTk5OTk5OTk5OTk5NyIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iMTE5Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1OS45OTk5OTk5OTk5OTk5ODYsNC44NDkwNjg3NDU2NjIzNjFlLTE2IDExOS45OTk5OTk5OTk5OTk5OSwxLjUxODA2Njg0NjQzMzQ0NzZlLTE0IDEyMC4wMDAwMDAwMDAwMDAwMSwtOTkuOTk5OTk5OTk5OTk5OTkgNjAuMDAwMDAwMDAwMDAwMDE0LC0xMDAuMDAwMDAwMDAwMDAwMDEgNTkuOTk5OTk5OTk5OTk5OTcsLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQgMTE5Ljk5OTk5OTk5OTk5OTk3LDEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogd2hpdGU7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9IjExOS45OTk5OTk5OTk5OTk5NyIgeTE9IjEuNTE4MDY2ODQ2NDMzNDQ3NmUtMTQiIHgyPSIxNzkuOTk5OTk5OTk5OTk5OTciIHkyPSI0LjQ1NzIxOTE2NDM4NzA5NTZlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjE3OS45OTk5OTk5OTk5OTk5NyIgeTE9IjQuNDU3MjE5MTY0Mzg3MDk1NmUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMDMiIHkyPSItOTkuOTk5OTk5OTk5OTk5OTYiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTgwLjAwMDAwMDAwMDAwMDAzIiB5MT0iLTk5Ljk5OTk5OTk5OTk5OTk2IiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iLTEwMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHkxPSItMTAwIiB4Mj0iMTIwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjAuMDAwMDAwMDAwMDAwMTQiIHkxPSIwIiB4Mj0iMTgwLjAwMDAwMDAwMDAwMDE0IiB5Mj0iNC40MDg3Mjg0NzY5MzA0NzFlLTE0IiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSIxMTkuOTk5OTk5OTk5OTk5OTcsMS41MTgwNjY4NDY0MzM0NDc2ZS0xNCAxNzkuOTk5OTk5OTk5OTk5OTcsNC40NTcyMTkxNjQzODcwOTU2ZS0xNCAxODAuMDAwMDAwMDAwMDAwMDMsLTk5Ljk5OTk5OTk5OTk5OTk2IDEyMC4wMDAwMDAwMDAwMDAwMywtMTAwLjAgMTIwLjAwMDAwMDAwMDAwMDE0LC0wLjAgMTgwLjAwMDAwMDAwMDAwMDE0LDQuNDA4NzI4NDc2OTMwNDcxZS0xNCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiByZWQ7IHN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkxPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHgyPSIxODAuMDAwMDAwMDAwMDAwMTQiIHkyPSI0LjQwODcyODQ3NjkzMDQ3MWUtMTQiIHN0eWxlPSJzdHJva2U6IHJlZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJyZWQiIGZpbGw9InJlZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwMDAwMDAwMTQsNC40MDg3Mjg0NzY5MzA0NzFlLTE0KSByb3RhdGUoLTExNzAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},742554:function(e,t,n){t.Z=n.p+"assets/images/triangle-15c1e1c28811b5a297b20d164a52d982.png"},786334:function(e,t){t.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9jNmQyNzMxZF9iYmQ4XzQyY2NfOTcxYV9iYzhlZTYzMDNmMjFfc3ZnIiB3aWR0aD0iMTE0LjMzMDEwODY0MjU3ODEyIiBoZWlnaHQ9IjM3LjYxNDczMDgzNDk2MDk0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0NSwyMjcuNjc5NDg5MTM1NzQyMiwxMTQuMzMwMTA4NjQyNTc4MTIsMzcuNjE0NzMwODM0OTYwOTQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMC4wMDAwMDAwMDAwMDAwMDIiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSIyMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjAuMDAwMDAwMDAwMDAwMDA0IiB5MT0iMCIgeDI9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwLjAwMDAwMDAwMDAwMDAwNyIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjQwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjQwLjAwMDAwMDAwMDAwMDAxIiB5MT0iMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iLTE3LjMyMDUwODA3NTY4ODc3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAuMDAwMDAwMDAwMDAwMDEiIHkxPSItMTcuMzIwNTA4MDc1Njg4NzciIHgyPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI2MC4wMDAwMDAwMDAwMDAwMSIgeTE9IjAiIHgyPSI3MC4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjcwLjAwMDAwMDAwMDAwMDAxIiB5MT0iLTE3LjMyMDUwODA3NTY4ODc3IiB4Mj0iODAuMDAwMDAwMDAwMDAwMDEiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iODAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iOTAuMDAwMDAwMDAwMDAwMDEiIHkyPSItMTcuMzIwNTA4MDc1Njg4NzciIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI5MC4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xNy4zMjA1MDgwNzU2ODg3NyIgeDI9IjEwMC4wMDAwMDAwMDAwMDAwMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMDAuMDAwMDAwMDAwMDAwMDEiIHkxPSIwIiB4Mj0iMTAwLjAwMDAwMDAwMDAwMDAxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC4wMDAwMDAwMDAwMDAwMSwtMC4wKSByb3RhdGUoLTE1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+PC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="}}]);