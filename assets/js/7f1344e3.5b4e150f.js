"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[66389],{603905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return f}});var t=r(667294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?t.createElement(m,a(a({ref:n},d),{},{components:r})):t.createElement(m,a({ref:n},d))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},236934:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var t=r(583117),o=r(480102),i=(r(667294),r(603905)),a=["components"],l={},c="While Schleife",u={unversionedId:"Programmieren-1/v24/Turtles/while-loop",id:"Programmieren-1/v24/Turtles/while-loop",title:"While Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/docs/Programmieren-1/v24/Turtles/003-while-loop.md",sourceDirName:"Programmieren-1/v24/Turtles",slug:"/Programmieren-1/v24/Turtles/while-loop",permalink:"/Programmieren-1/v24/Turtles/while-loop",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Turtles/003-while-loop.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"12.10.2021",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"For Schleife",permalink:"/Programmieren-1/v24/Turtles/for-loop"},next:{title:"Gesellschaft",permalink:"/Big-Data/intro"}},d={},p=[],s={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"while-schleife"},"While Schleife"),(0,i.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleife kann man sich wie ein kleines Kind auf einer Wanderung vorstellen, das nach jedem Schritt wieder dieselbe Frage stellt: ",(0,i.kt)("em",{parentName:"p"},"Sind wir schon da?"),". Solange das Ziel noch nicht erreicht ist, muss das Kind aber den n\xe4chsten Schritt machen."),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleife stellt ebenfalls immerzu dieselbe Frage, die jeweils mit Ja (",(0,i.kt)("inlineCode",{parentName:"p"},"True"),") oder Nein (",(0,i.kt)("inlineCode",{parentName:"p"},"False"),") beantwortet wird. Solange die Frage mit ",(0,i.kt)("em",{parentName:"p"},"Ja")," beantwortet wird, wird der Code-Teil erneut wiederholt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f53cdb80-f26f-463c-b399-a2104cecf834",live_py:!0,id:"f53cdb80-f26f-463c-b399-a2104cecf834"},"from turtle import *\ncounter = 0\n\nwhile counter < 4:\n    forward(100)\n    left(90)\n    counter = counter + 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\ncounter = 0               # counter = 0\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 1\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 2\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 3\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 4\n\n# Bedingung: \u274c (counter ist nicht mehr kleiner als 4)\n# --\x3e wiederholung abbrechen\n")),(0,i.kt)("h1",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f78c086e-30d9-4805-b3b8-fb4269ddd712",live_py:!0,id:"f78c086e-30d9-4805-b3b8-fb4269ddd712"},"from turtle import *\n\npenup()\ngoto(-30, 0)\npendown()\n\ncounter = 0\nwhile counter < 8:\n    forward(60)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-30, 100)\npendown()\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    right(45)\n    counter = counter + 1\n\npenup()\ngoto(30, 100)\npendown()\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-48, 40)\npendown()\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\ncounter = 0\nwhile counter < 3:\n    forward(40)\n    left(45)\n    counter = counter + 1\n")))}f.isMDXComponent=!0}}]);