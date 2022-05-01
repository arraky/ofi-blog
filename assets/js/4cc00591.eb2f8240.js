"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12128],{603905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(667294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},328485:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var t=r(583117),i=r(480102),o=(r(667294),r(603905)),a=["components"],l={},c="While Schleife",u={unversionedId:"Programmieren-1/Turtles/while-loop",id:"version-24i/Programmieren-1/Turtles/while-loop",title:"While Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Turtles/003-while-loop.md",sourceDirName:"04-Programmieren-1/Turtles",slug:"/Programmieren-1/Turtles/while-loop",permalink:"/24i/Programmieren-1/Turtles/while-loop",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Turtles/003-while-loop.md",tags:[],version:"24i",sidebarPosition:3,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"For Schleife",permalink:"/24i/Programmieren-1/Turtles/for-loop"},next:{title:"Netzwerke",permalink:"/24i/category/netzwerke"}},s={},p=[],d={toc:p};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"while-schleife"},"While Schleife"),(0,o.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife kann man sich wie ein kleines Kind auf einer Wanderung vorstellen, das nach jedem Schritt wieder dieselbe Frage stellt: ",(0,o.kt)("em",{parentName:"p"},"Sind wir schon da?"),". Solange das Ziel noch nicht erreicht ist, muss das Kind aber den n\xe4chsten Schritt machen."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife stellt ebenfalls immerzu dieselbe Frage, die jeweils mit Ja (",(0,o.kt)("inlineCode",{parentName:"p"},"True"),") oder Nein (",(0,o.kt)("inlineCode",{parentName:"p"},"False"),") beantwortet wird. Solange die Frage mit ",(0,o.kt)("em",{parentName:"p"},"Ja")," beantwortet wird, wird der Code-Teil erneut wiederholt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f53cdb80-f26f-463c-b399-a2104cecf834",live_py:!0,id:"f53cdb80-f26f-463c-b399-a2104cecf834"},"from turtle import *\ncounter = 0\n\nwhile counter < 4:\n    forward(100)\n    left(90)\n    counter = counter + 1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\ncounter = 0               # counter = 0\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 1\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 2\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 3\n\n# Bedingung: \u2705 (counter ist kleiner als 4)\nforward(100)\nleft(90)\ncounter = counter + 1     # counter = 4\n\n# Bedingung: \u274c (counter ist nicht mehr kleiner als 4)\n# --\x3e wiederholung abbrechen\n")),(0,o.kt)("h1",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=f78c086e-30d9-4805-b3b8-fb4269ddd712",live_py:!0,id:"f78c086e-30d9-4805-b3b8-fb4269ddd712"},"from turtle import *\n\npenup()\ngoto(-30, 0)\npendown()\n\ncounter = 0\nwhile counter < 8:\n    forward(60)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-30, 100)\npendown()\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    right(45)\n    counter = counter + 1\n\npenup()\ngoto(30, 100)\npendown()\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\ncounter = 0\nwhile counter < 8:\n    forward(5)\n    left(45)\n    counter = counter + 1\n\npenup()\ngoto(-48, 40)\npendown()\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\ncounter = 0\nwhile counter < 3:\n    forward(40)\n    left(45)\n    counter = counter + 1\n")))}f.isMDXComponent=!0}}]);