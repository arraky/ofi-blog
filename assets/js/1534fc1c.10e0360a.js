"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[64190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),M=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=M(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},I=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),I=M(a),s=n,o=I["".concat(d,".").concat(s)]||I[s]||p[s]||r;return a?i.createElement(o,l(l({ref:t},c),{},{components:a})):i.createElement(o,l({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=I;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var M=2;M<r;M++)l[M]=a[M];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}I.displayName="MDXCreateElement"},36126:(e,t,a)=>{a.d(t,{Z:()=>N});var i=a(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=a(86010);const l=e=>i.createElement("div",{className:n.step},e.code),m=e=>i.createElement("div",{className:(0,r.default)(n.call,n.step,n.bordered)},e.code),d=e=>i.createElement("div",{className:(0,r.default)(n.step,n.statement)},e.code),M=e=>i.createElement("div",{className:(0,r.default)(n.repeat,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),c=e=>i.createElement("div",{className:(0,r.default)(n.def,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),p=e=>i.createElement("div",{className:(0,r.default)(n.input,n.step)},e.code),I=e=>i.createElement("div",{className:(0,r.default)(n.if,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),s=e=>i.createElement("div",{className:(0,r.default)(n.else,n.step)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(o,{program:e.block}))),o=e=>i.createElement("div",{className:n.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return i.createElement(m,{key:t,code:e.code});case"def":return i.createElement(c,{key:t,code:e.code,block:e.block});case"repeat":return i.createElement(M,{key:t,code:e.code,block:e.block});case"step":return i.createElement(l,{key:t,code:e.code});case"statement":return i.createElement(d,{key:t,code:e.code});case"input":return i.createElement(p,{key:t,code:e.code});case"if":return i.createElement(I,{key:t,code:e.code,block:e.block});case"elif":case"else":return i.createElement(s,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),N=o},17701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=a(83117),n=(a(67294),a(3905)),r=a(36126);const l={sidebar_custom_props:{id:"61b32e14-80db-449c-9244-548e2e4a7c10"}},m="Test 26P",d={unversionedId:"Programmieren-1/Testumgebung/26eP-test/ProbeP",id:"Programmieren-1/Testumgebung/26eP-test/ProbeP",title:"Test 26P",description:"Erlaubte Hilfsmittel",source:"@site/docs/Programmieren-1/04-Testumgebung/26eP-test/ProbeP.md",sourceDirName:"Programmieren-1/04-Testumgebung/26eP-test",slug:"/Programmieren-1/Testumgebung/26eP-test/ProbeP",permalink:"/Programmieren-1/Testumgebung/26eP-test/ProbeP",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/04-Testumgebung/26eP-test/ProbeP.md",tags:[],version:"current",lastUpdatedAt:1670881851,formattedLastUpdatedAt:"12. Dez. 2022",frontMatter:{sidebar_custom_props:{id:"61b32e14-80db-449c-9244-548e2e4a7c10"}},sidebar:"sidebar",previous:{title:"Test 26e",permalink:"/Programmieren-1/Testumgebung/26eP-test/ProbeE"},next:{title:"PyGame Tutorials",permalink:"/Programmieren-1/PyGame/tutorials"}},M={},c=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"\u2b50 5. Zusatzaufgabe",id:"-5-zusatzaufgabe",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},I=p("Comment"),s=p("Solution"),o=p("Figure"),N={toc:c};function g(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},N,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"test-26p"},"Test 26P"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("dl",{parentName:"div"},(0,n.kt)("dt",{parentName:"dl"},"Erlaubte Hilfsmittel\n"),(0,n.kt)("dd",{parentName:"dl"},"Unterrichtsmaterial"),(0,n.kt)("dd",{parentName:"dl"},"Eigene Skripts"),(0,n.kt)("dd",{parentName:"dl"},"Webseiten, Google"),(0,n.kt)("dt",{parentName:"dl"},"Verbotene Hilfsmittel\n"),(0,n.kt)("dd",{parentName:"dl"},"\u26a0\ufe0f Fremde Hilfe"),(0,n.kt)("dd",{parentName:"dl"},"\u26a0\ufe0f Chats / Kommunikation jeglicher Art")),(0,n.kt)(I,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,n.kt)(s,{webKey:"50619fbd-2a82-4608-bd1b-b04a251ef4f6",title:"Testfragen",open:!0,mdxType:"Solution"},(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-1"},"Aufgabe 1"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Das Programm zeichnet eine Sonne mit 11 Strahlen."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"\xc4ndern Sie das Programm so ab, dass es nun eine Sonne mit 17 Strahlen zeichnet."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Setzen Sie die Stiftdicke auf ",(0,n.kt)("inlineCode",{parentName:"p"},"7")," und die Stiftfarbe auf rot."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"F\xfcllen Sie die Sonne mit Ihrer Lieblingsfarbe (aber nicht mit Rot) aus."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe1.py id=f9d50886-1735-46d9-a02c-d6fee5f9f5ad versioned readonly",live_py:!0,title:"aufgabe1.py",id:"f9d50886-1735-46d9-a02c-d6fee5f9f5ad",versioned:!0,readonly:!0},"from turtle import *\n\nspeed(0)\n\ndef bogen(distanz, drehung):\n    for i in range(20):\n        forward(distanz)\n        left(drehung)\n\ndef strahl():\n    bogen(3, 5)\n    right(90)\n    bogen(4, -10)\n    left(190)\n\nfor i in range(11):\n    strahl()\n    left(360 / 11)\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-2"},"Aufgabe 2"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"\xdcbersetzen Sie das untenstehende Struktogramm in Python Code"),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,n.kt)("div",{style:{maxWidth:"400px"},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,n.kt)(r.Z,{program:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"130")," Schritte vorw\xe4rts")},{type:"def",code:(0,n.kt)("span",null,"strecke"),block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"40")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"25"),"\xb0 rechts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"40")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"25"),"\xb0 links")}]},{type:"def",code:(0,n.kt)("span",null,"stern"),block:[{type:"repeat",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"5")," mal wiederholen"),block:[{type:"call",code:"strecke zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"216"),"\xb0 rechts")}]}]},{type:"call",code:"stern zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 links")},{type:"call",code:"stern zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 links")},{type:"call",code:"stern zeichnen"}],mdxType:"Strukto"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe2.py versioned id=f62c8ac0-bb7f-4603-917d-d3728e5f06de readonly",live_py:!0,title:"aufgabe2.py",versioned:!0,id:"f62c8ac0-bb7f-4603-917d-d3728e5f06de",readonly:!0},"from turtle import * \n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-3"},"Aufgabe 3"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"(4 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Finden und korrigieren Sie alle Fehler, so dass die folgende Ausgabe entsteht. Es gibt sowohl Syntaxfehler wie auch Logikfehler."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"D\xe4nische Flagge",src:a(54265).Z,width:"210",height:"135"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"D\xe4nische Flagge",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(I,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe3.py id=353cb240-4db1-482b-ad29-b59266226a03 versioned readonly",live_py:!0,title:"aufgabe3.py",id:"353cb240-4db1-482b-ad29-b59266226a03",versioned:!0,readonly:!0},"from turtle import *\n\ndef rechteck(breite, h\xf6he):\n    begin_fill()\n    for i in() range(2)\n        forward('breite')\n        left(90)\n        forward(h\xf6he)\n        left(90)\n    end_fill\n\ncolor('red')\nrechteck(200, 120)\ngoto(0 50)\ncolor(white)\n rechteck(200, 20)\npenup()\ngoto(50, 0)\npendown()\nrechtek(20, 120)\n\nhide_turtle()\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-4"},"Aufgabe 4"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(5 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"a) Schreiben Sie ein Programm, welches folgende Zeichnung erzeugt. ",(0,n.kt)("em",{parentName:"p"},"(2 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Zick Zack",src:a(54335).Z,width:"183",height:"35"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Zick Zack",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(I,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Die H\xf6he eines Zick-Zacks betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"20")," Einheiten, die lange Seite ist ",(0,n.kt)("inlineCode",{parentName:"p"},"40")," Einheiten lang und der Innenwinkel beim Zick-Zack betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"60\xb0"),"."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(o,{parentName:"div",options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"Ein Zickzack --width=200px",src:a(50934).Z,width:"931",height:"523"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ein Zickzack",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(I,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"b) Verwenden Sie Wiederholungen (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")"),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"c) Schreiben Sie f\xfcr das Zeichnen einer einzelnen Zacke einen (selber definierten) Befehl ",(0,n.kt)("inlineCode",{parentName:"p"},"zickzack")," (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"d) Verwenden Sie einen Parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"size"),", so dass die H\xf6he des Zickzacks ver\xe4ndert werden kann. Erzeugen Sie so folgende Figur mit den H\xf6hen ",(0,n.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"40")," und ",(0,n.kt)("inlineCode",{parentName:"p"},"50"),", ohne dabei Punkt (b) zu entfernen. (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")"),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{src:a(59088).Z,width:"252",height:"65"})),(0,n.kt)(I,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe4.py versioned id=d19a5323-efdf-4f41-8b17-2bdfbb469813 readonly",live_py:!0,title:"aufgabe4.py",versioned:!0,id:"d19a5323-efdf-4f41-8b17-2bdfbb469813",readonly:!0},"from turtle import *\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"-5-zusatzaufgabe"},"\u2b50 5. Zusatzaufgabe"),(0,n.kt)(I,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(Wird f\xfcr das Erreichen der Note 6 nicht ben\xf6tigt, 2 Punkte)")),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Auf ",(0,n.kt)("a",{parentName:"p",href:"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/"},"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/")," finden Sie Python-Code, welcher ein Herz zeichnet."),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"R\xe4umen Sie den Code auf und verwenden Sie nur Befehle, die wir auch im Unterricht besprochen haben. (z.B. haben wir ",(0,n.kt)("inlineCode",{parentName:"p"},"pen = turtle.Turtle()")," nie angeschaut...)"),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Schreiben Sie Ihren eigenen Namen in das Herz"),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Machen Sie den Rand einen Stift der Breite ",(0,n.kt)("inlineCode",{parentName:"p"},"10")," "),(0,n.kt)(I,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zusatzaufgabe.py id=f2b7f7be-182e-43c1-bd83-d04dce67d018 versioned readonly",live_py:!0,title:"zusatzaufgabe.py",id:"f2b7f7be-182e-43c1-bd83-d04dce67d018",versioned:!0,readonly:!0},""))))}g.isMDXComponent=!0},54265:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV83ZmE4OWZhOF9iOGFlXzQ5MzlfOTRkZV9kZjhlMDBhZTU3ZDRfc3ZnIiB3aWR0aD0iMjEwIiBoZWlnaHQ9IjEzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMTI1LDIxMCwxMzUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjIwMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSItMTIwIiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjIwMCIgeTE9Ii0xMjAiIHgyPSIwIiB5Mj0iLTEyMC4wMDAwMDAwMDAwMDAwMyIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iLTEyMC4wMDAwMDAwMDAwMDAwMyIgeDI9Ii0yLjIwNDM2NDIzODQ2NTIzNTVlLTE0IiB5Mj0iLTIuODQyMTcwOTQzMDQwNDAxZS0xNCIgc3R5bGU9InN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iMC4wLC0wLjAgMjAwLjAsLTAuMCAyMDAuMCwtMTIwLjAgMC4wLC0xMjAuMDAwMDAwMDAwMDAwMDMgLTIuMjA0MzY0MjM4NDY1MjM1NWUtMTQsLTIuODQyMTcwOTQzMDQwNDAxZS0xNCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiByZWQ7IHN0cm9rZTogcmVkOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMi4yMDQzNjQyMzg0NjUyMzU1ZS0xNCIgeTE9Ii0yLjg0MjE3MDk0MzA0MDQwMWUtMTQiIHgyPSIwIiB5Mj0iLTUwIiBzdHlsZT0ic3Ryb2tlOiByZWQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjAiIHkxPSItNTAiIHgyPSIyMDAiIHkyPSItNDkuOTk5OTk5OTk5OTk5OTUiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMDAiIHkxPSItNDkuOTk5OTk5OTk5OTk5OTUiIHgyPSIyMDAiIHkyPSItNjkuOTk5OTk5OTk5OTk5OTQiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMDAiIHkxPSItNjkuOTk5OTk5OTk5OTk5OTQiIHgyPSIwIiB5Mj0iLTcwLjAwMDAwMDAwMDAwMDAxIiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9Ii03MC4wMDAwMDAwMDAwMDAwMSIgeDI9Ii04LjU3MjUyNzU5NDAzMTQ3M2UtMTUiIHkyPSItNTAuMDAwMDAwMDAwMDAwMDE0IiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAsLTUwIDIwMC4wLC00OS45OTk5OTk5OTk5OTk5NSAyMDAuMCwtNjkuOTk5OTk5OTk5OTk5OTQgMC4wLC03MC4wMDAwMDAwMDAwMDAwMSAtOC41NzI1Mjc1OTQwMzE0NzNlLTE1LC01MC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogd2hpdGU7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9Ii04LjU3MjUyNzU5NDAzMTQ3M2UtMTUiIHkxPSItNTAuMDAwMDAwMDAwMDAwMDE0IiB4Mj0iNTAiIHkyPSItNTAuMDAwMDAwMDAwMDAwMDE0IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAiIHkxPSIwIiB4Mj0iNzAiIHkyPSI5Ljc5NzE3NDM5MzE3ODgyNmUtMTUiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3MCIgeTE9IjkuNzk3MTc0MzkzMTc4ODI2ZS0xNSIgeDI9IjcwLjAwMDAwMDAwMDAwMDA3IiB5Mj0iLTExOS45OTk5OTk5OTk5OTk5OSIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjcwLjAwMDAwMDAwMDAwMDA3IiB5MT0iLTExOS45OTk5OTk5OTk5OTk5OSIgeDI9IjUwLjAwMDAwMDAwMDAwMDA3IiB5Mj0iLTEyMCIgc3R5bGU9InN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjUwLjAwMDAwMDAwMDAwMDA3IiB5MT0iLTEyMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDIwNiIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iNTAsMCA3MC4wLDkuNzk3MTc0MzkzMTc4ODI2ZS0xNSA3MC4wMDAwMDAwMDAwMDAwNywtMTE5Ljk5OTk5OTk5OTk5OTk5IDUwLjAwMDAwMDAwMDAwMDA3LC0xMjAuMCA1MC4wMDAwMDAwMDAwMDAyMDYsLTAuMCIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiB3aGl0ZTsgc3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNTAuMDAwMDAwMDAwMDAwMjA2IiB5MT0iMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDIwNiIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9IndoaXRlIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC4wMDAwMDAwMDAwMDAyMDYsLTAuMCkgcm90YXRlKC0xMTcwLjAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},59088:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV83ZmE4OWZhOF9iOGFlXzQ5MzlfOTRkZV9kZjhlMDBhZTU3ZDRfc3ZnIiB3aWR0aD0iMjUyLjQ4NzEyMTU4MjAzMTI1IiBoZWlnaHQ9IjY1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0NSwxOTUsMjUyLjQ4NzEyMTU4MjAzMTI1LDY1Ij4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMS4yMjQ2NDY3OTkxNDczNTMzZS0xNSIgeTI9Ii0yMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjEuMjI0NjQ2Nzk5MTQ3MzUzM2UtMTUiIHkxPSItMjAiIHgyPSIzNC42NDEwMTYxNTEzNzc1NSIgeTI9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIzNC42NDEwMTYxNTEzNzc1NSIgeTE9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHgyPSIzNC42NDEwMTYxNTEzNzc1NSIgeTI9Ii0zMC4wMDAwMDAwMDAwMDAwMDQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIzNC42NDEwMTYxNTEzNzc1NSIgeTE9Ii0zMC4wMDAwMDAwMDAwMDAwMDQiIHgyPSI4Ni42MDI1NDAzNzg0NDM4OCIgeTI9Ii03LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI4Ni42MDI1NDAzNzg0NDM4OCIgeTE9Ii03LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHgyPSI4Ni42MDI1NDAzNzg0NDM4OCIgeTI9Ii00MC4wMDAwMDAwMDAwMDAwMSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ijg2LjYwMjU0MDM3ODQ0Mzg4IiB5MT0iLTQwLjAwMDAwMDAwMDAwMDAxIiB4Mj0iMTU1Ljg4NDU3MjY4MTE5ODk2IiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNTUuODg0NTcyNjgxMTk4OTYiIHkxPSItMS40MjEwODU0NzE1MjAyMDA0ZS0xNCIgeDI9IjE1NS44ODQ1NzI2ODExOTg5NiIgeTI9Ii01MC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNTUuODg0NTcyNjgxMTk4OTYiIHkxPSItNTAuMDAwMDAwMDAwMDAwMDE0IiB4Mj0iMjQyLjQ4NzExMzA1OTY0Mjg0IiB5Mj0iLTIuMTMxNjI4MjA3MjgwMzAwNmUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyNDIuNDg3MTEzMDU5NjQyODQiIHkxPSItMi4xMzE2MjgyMDcyODAzMDA2ZS0xNCIgeDI9IjI0Mi40ODcxMTMwNTk2NDI4NCIgeTI9Ii0yLjEzMTYyODIwNzI4MDMwMDZlLTE0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJibGFjayIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQyLjQ4NzExMzA1OTY0Mjg0LC0yLjEzMTYyODIwNzI4MDMwMDZlLTE0KSByb3RhdGUoLTkwLjAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},50934:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/zick-3f32005d8917952a91bf0bb54a01b0a4.png"},54335:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV83ZmE4OWZhOF9iOGFlXzQ5MzlfOTRkZV9kZjhlMDBhZTU3ZDRfc3ZnIiB3aWR0aD0iMTgzLjIwNTA3ODEyNSIgaGVpZ2h0PSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMjI1LDE4My4yMDUwNzgxMjUsMzUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxLjIyNDY0Njc5OTE0NzM1MzNlLTE1IiB5Mj0iLTIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMS4yMjQ2NDY3OTkxNDczNTMzZS0xNSIgeTE9Ii0yMCIgeDI9IjM0LjY0MTAxNjE1MTM3NzU1IiB5Mj0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjM0LjY0MTAxNjE1MTM3NzU1IiB5MT0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNSIgeDI9IjM0LjY0MTAxNjE1MTM3NzU1IiB5Mj0iLTIwLjAwMDAwMDAwMDAwMDAwNCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjM0LjY0MTAxNjE1MTM3NzU1IiB5MT0iLTIwLjAwMDAwMDAwMDAwMDAwNCIgeDI9IjY5LjI4MjAzMjMwMjc1NTEiIHkyPSItNy4xMDU0MjczNTc2MDEwMDJlLTE1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNjkuMjgyMDMyMzAyNzU1MSIgeTE9Ii03LjEwNTQyNzM1NzYwMTAwMmUtMTUiIHgyPSI2OS4yODIwMzIzMDI3NTUxIiB5Mj0iLTIwLjAwMDAwMDAwMDAwMDAwNyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjY5LjI4MjAzMjMwMjc1NTEiIHkxPSItMjAuMDAwMDAwMDAwMDAwMDA3IiB4Mj0iMTAzLjkyMzA0ODQ1NDEzMjY0IiB5Mj0iLTEuMDY1ODE0MTAzNjQwMTUwM2UtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMDMuOTIzMDQ4NDU0MTMyNjQiIHkxPSItMS4wNjU4MTQxMDM2NDAxNTAzZS0xNCIgeDI9IjEwMy45MjMwNDg0NTQxMzI2NCIgeTI9Ii0yMC4wMDAwMDAwMDAwMDAwMSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjEwMy45MjMwNDg0NTQxMzI2NCIgeTE9Ii0yMC4wMDAwMDAwMDAwMDAwMSIgeDI9IjEzOC41NjQwNjQ2MDU1MTAyIiB5Mj0iLTEuNDIxMDg1NDcxNTIwMjAwNGUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMzguNTY0MDY0NjA1NTEwMiIgeTE9Ii0xLjQyMTA4NTQ3MTUyMDIwMDRlLTE0IiB4Mj0iMTM4LjU2NDA2NDYwNTUxMDIiIHkyPSItMjAuMDAwMDAwMDAwMDAwMDE0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTM4LjU2NDA2NDYwNTUxMDIiIHkxPSItMjAuMDAwMDAwMDAwMDAwMDE0IiB4Mj0iMTczLjIwNTA4MDc1Njg4Nzc1IiB5Mj0iLTEuNzc2MzU2ODM5NDAwMjUwNWUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzMuMjA1MDgwNzU2ODg3NzUsLTEuNzc2MzU2ODM5NDAwMjUwNWUtMTQpIHJvdGF0ZSgtOTAuMCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+CiAgICA8L3Jhdz48L21ldGFkYXRhPjwvc3ZnPg=="}}]);