"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[32860],{59629:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return u}});var t=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(84384),l=["components"],d={},s="For Schleife",p={unversionedId:"Programmieren-1/v24/Turtles/for-loop",id:"Programmieren-1/v24/Turtles/for-loop",title:"For Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/docs/Programmieren-1/v24/Turtles/002-for-loop.md",sourceDirName:"Programmieren-1/v24/Turtles",slug:"/Programmieren-1/v24/Turtles/for-loop",permalink:"/Programmieren-1/v24/Turtles/for-loop",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Turtles/002-for-loop.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Ein Python Algorithmus",permalink:"/Programmieren-1/v24/Turtles/intro"},next:{title:"While Schleife",permalink:"/Programmieren-1/v24/Turtles/while-loop"}},f=[{value:"Was ist die Ausgabe des folgenden Programms?",id:"was-ist-die-ausgabe-des-folgenden-programms",children:[],level:2}],c={toc:f};function u(e){var n=e.components,d=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},c,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"for-schleife"},"For Schleife"),(0,i.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleife kann man sich wie ein Ticket-Schalter vorstellen. Der Verk\xe4ufer am Schalter bedient der Reihe nach jede Person in der Warteschlange und wiederholt jedesmal dieselbe Aufgabe: ",(0,i.kt)("em",{parentName:"p"},"den Kunden bedienen")),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(o.Z,{bib:void 0,caption:"Warteschlange",options:{},isInline:!1,src:r(40054).Z,alt:"Warteschlange",mdxType:"Image"})),(0,i.kt)("p",null,"In Python wird die Warteschleife als Liste in eckigen Klammern geschrieben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=3f6dd4e0-f5bf-4d2f-ad8e-ee414e97cece",live_py:!0,id:"3f6dd4e0-f5bf-4d2f-ad8e-ee414e97cece"},"for person in ['Jack', 'Maria', 'Reto']:\n    print(f'Guten Tag {person}, wie kann ich helfen?')\n    print('...')\n    print('Auf wiedersehen')\n")),(0,i.kt)("p",null,"Die Personen ",(0,i.kt)("em",{parentName:"p"},"Jack"),", ",(0,i.kt)("em",{parentName:"p"},"Maria")," und ",(0,i.kt)("em",{parentName:"p"},"Reto")," werden nacheinander begr\xfcsst, bedient und verabschiedet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"Guten Tag Jack, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Maria, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Reto, wie kann ich helfen?\n...\nAuf wiedersehen.\n")),(0,i.kt)("p",null,"Um einen beliebigen Code-Teil mehrfach nacheinander auszuf\xfchren, k\xf6nnen wir nun auch Zahlen als Warteschleife verwenden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=0c4d6d9b-158d-4558-8902-bf4d09254b1e",live_py:!0,id:"0c4d6d9b-158d-4558-8902-bf4d09254b1e"},"from turtle import *\nfor counter in [0, 1, 2, 3]:\n    forward(100)\n    left(90)\n")),(0,i.kt)("p",null,"F\xfcr jede Zahl wird der Code-Teil wiederholt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=c482f58c-66bb-4406-ad47-e42b4f6ee971",live_py:!0,id:"c482f58c-66bb-4406-ad47-e42b4f6ee971"},"from turtle import *\n# 0\nforward(100)\nleft(90)\n# 1\nforward(100)\nleft(90)\n# 2\nforward(100)\nleft(90)\n# 3\nforward(100)\nleft(90)\n")),(0,i.kt)("p",null,"Oder in Kurzschreibweise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=46a4e93f-80c8-4e66-ab86-f187b810a8e8",live_py:!0,id:"46a4e93f-80c8-4e66-ab86-f187b810a8e8"},"from turtle import *\nfor counter in range(4):\n    forward(100)\n    left(90)\n")),(0,i.kt)("p",null,"wobei ",(0,i.kt)("inlineCode",{parentName:"p"},"range(4)")," eine Warteschleife mit ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," Elementen erzeugt."),(0,i.kt)("h2",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=63756aea-ee47-4805-b077-8637a09ca08d",live_py:!0,id:"63756aea-ee47-4805-b077-8637a09ca08d"},"from turtle import *\npenup()\ngoto(-30, 0)\npendown()\n\nfor counter in range(8):\n    forward(60)\n    left(45)\n\npenup()\ngoto(-30, 100)\npendown()\n\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\nfor counter in range(8):\n    forward(5)\n    right(45)\n\npenup()\ngoto(30, 100)\npendown()\n\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\nfor counter in range(8):\n    forward(5)\n    left(45)\n\npenup()\ngoto(-48, 40)\npendown()\n\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\nfor counter in range(3):\n    forward(40)\n    left(45)\n\n")))}u.isMDXComponent=!0},40054:function(e,n,r){n.Z=r.p+"assets/images/queue-8064bf7946c4724e4fbeb25e2d35cb83.png"}}]);