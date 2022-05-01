"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[546],{603905:function(e,n,t){t.d(n,{Zo:function(){return A},kt:function(){return p}});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},A=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return t?a.createElement(g,m(m({ref:n},A),{},{components:t})):a.createElement(g,m({ref:n},A))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var l=2;l<i;l++)m[l]=t[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},884384:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=t(592814),m=t(51436),o=t(386010),s=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:m.Xjp}))))},l=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},A=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+l(t.size)+")",n.maxHeight=l(t.size),delete t.size),t.height&&(n.maxHeight=l(t.height),n.height=l(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+l(t.width)+")",n.width=l(t.width),delete t.width),n=Object.assign({},n,t),a.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return a.createElement(A,e);var n=a.useState(!1),t=(n[0],n[1]),i=a.useState(!1),m=i[0],l=i[1],c=e.caption&&"undefined"!==e.caption,u=e.bib||c;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,a,r,i,m;n=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=n.left<=a&&n.right>=a,m=n.top<=r&&n.bottom>=r,i&&m||t(!1)}},a.createElement(A,e),u&&a.createElement("figcaption",null,c&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,m?r.visible:void 0),onClick:function(){return l(!m)}},"@"),m&&a.createElement(s,e.bib)))}},860768:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return A},toc:function(){return u}});var a=t(583117),r=t(480102),i=(t(667294),t(603905)),m=t(884384),o=["components"],s={},l="Uhren",A={unversionedId:"Programmieren-1/v24/Aufgaben/uhren",id:"Programmieren-1/v24/Aufgaben/uhren",title:"Uhren",description:"10uhren.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/12_uhren.md",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/uhren",permalink:"/Programmieren-1/v24/Aufgaben/uhren",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/12_uhren.md",tags:[],version:"current",lastUpdatedAt:1628611162,formattedLastUpdatedAt:"8/10/2021",sidebarPosition:12,frontMatter:{},sidebar:"sidebar",previous:{title:"Modulo",permalink:"/Programmieren-1/v24/Aufgaben/modulo"},next:{title:"Game Basics - Sterne Fangen",permalink:"/Programmieren-1/v24/Aufgaben/game_basics"}},c={},u=[{value:"SBB Uhr",id:"sbb-uhr",level:2}],p={toc:u};function g(e){var n=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uhren"},"Uhren"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(157775).Z},"10_uhren.zip")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Voraussetzung"),": ",(0,i.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/07T_Playground.ipynb"},"Theorie: Jupyterhub 7-7.2")),(0,i.kt)("h2",{id:"sbb-uhr"},"SBB Uhr"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(m.Z,{bib:void 0,caption:"sbb uhr",options:{},isInline:!1,src:t(655025).Z,alt:"sbb uhr",mdxType:"Image"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches die abgebildete SBB-Uhr zeichnet inkl. ihrer Uhrzeit zeichnet."),(0,i.kt)("p",{parentName:"li"},"F\xfcr das L\xf6sen dieser Aufgabe k\xf6nnen die Sinus- und Kosinus Funktionen verwendet werden:\n",(0,i.kt)(m.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(697663).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"li"},"In Python k\xf6nnen diese Funktionen aus der ",(0,i.kt)("inlineCode",{parentName:"p"},"math")," Bibliothek importiert werden."),(0,i.kt)("p",{parentName:"li"},"!!",(0,i.kt)("strong",{parentName:"p"},"Achtung"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cos")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"sin")," erwarten die Winkel-Angaben im Bogenmass (im Bogenmass entspricht ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," ",(0,i.kt)("inlineCode",{parentName:"p"},"180\xb0"),"). Allf\xe4llige Grad-Angaben m\xfcssen daher zuerst umgerechnet werden. Im foglenden Beispiel werden z.B. der Sinus von 15\xb0 bzw. der Kosinus von 33\xb0 berechnet und in einer Variable gespeichert:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from math import cos, sin, pi\n\nsin15 = sin(15 / 180 * pi)\ncos33 = cos(33 / 180 * pi)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fragen Sie den Benutzer nach einer Uhrzeit (zuerst die Stunden, dann die Minuten und schliesslich die Sekunden) und stellen Sie dann diese Uhrzeit ein.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Animieren Sie Ihre Uhr. Die SBB Uhr hat die Eigenheit, dass der Sekunden-Zeiger nur ",(0,i.kt)("inlineCode",{parentName:"p"},"59")," Sekunden f\xfcr eine Umdrehung hat, weil er auf 12 Uhr f\xfcr 1 Sekunde stehen bleibt."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipps"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mit ",(0,i.kt)("inlineCode",{parentName:"li"},"device.sleep(1.0)")," wird die Ausf\xfchrung des Programms f\xfcr eine Sekunde unterbrochen."),(0,i.kt)("li",{parentName:"ul"},"Mit der Funktion ",(0,i.kt)("inlineCode",{parentName:"li"},"time_ns()")," (aus der Bibliothek ",(0,i.kt)("inlineCode",{parentName:"li"},"time"),") k\xf6nnen Sie die aktuelle Systemzeit in Nanosekunden abfragen. Rechnen Sie zuerst von Nanosekunden zu Sekunden um.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from time import time_ns\nprint(f"Aktuelle Systemzeit: {time_ns()}")\n')))))))}g.isMDXComponent=!0},157775:function(e,n,t){n.Z=t.p+"assets/files/10_uhren-cfae5262275afa91038337ff7ea34c7b.zip"},697663:function(e,n){n.Z="data:image/gif;base64,R0lGODlhGQEUAfcGAAAAAIAAAACAAICAAAAAgIAAgP///8DAwMDcwKbK8IiIiOb/5v//7v/m5v//5jw8PMzMzDPMzMwzzDMzzMzMMzPMM8wzMzMzMysrK5GRke7u7k1NTbOzsxEREW9vb9XV1TMzAMwzADPMAMzMADMz/8wz/zPM/8zM/5n/mWb/mZkAmWYAmZn/Zmb/ZpkAZmYAZszMmTPMmcwzmTMzmczMZjPMZswzZjMzZgBmAP9mAACZAP+ZAABm//9m/wCZ//+Z/zMAZswAZjP/Zsz/ZjMAmcwAmTP/mcz/mZnM/2bM/5kz/2Yz/5nMAGbMAJkzAGYzAMyZ/zOZ/8xm/zNm/8yZADOZAMxmADNmAAAzZv8zZgDMZv/MZgAzmf8zmQDMmf/MmTMAM8wAMzP/M8z/MzMAzMwAzDP/zMz/zJnMzGbMzJkzzGYzzJnMM2bMM5kzM2YzM8yZzDOZzMxmzDNmzMyZMzOZM8xmMzNmMwAzM/8zMwDMM//MMwAzzP8zzADMzP/MzDMAAMwAADP/AMz/ADMA/8wA/zP//8z//5nMmWbMmZkzmWYzmZnMZmbMZpkzZmYzZsyZmTOZmcxmmTNmmcyZZjOZZsxmZjNmZgAzAP8zAADMAP/MAAAz//8z/wDM///M/wBmZv9mZgCZZv+ZZgBmmf9mmQCZmf+ZmZmZ/2aZ/5lm/2Zm/5mZAGaZAJlmAGZmAJn//2b//5kA/2YA/5n/AGb/AJkAAGYAAAAAZv8AZgD/Zv//ZgAAmf8AmQD/mf//mQBmM/9mMwCZM/+ZMwBmzP9mzACZzP+ZzJmZzGaZzJlmzGZmzJmZM2aZM5lmM2ZmM5n/zGb/zJkAzGYAzJn/M2b/M5kAM2YAMwAAM/8AMwD/M///MwAAzP8AzAD/zP//zPf390RERCIiIqKiol5eXt3d3bu7uwkJCZmZmWaZmZlmmWZmmZmZZmaZZplmZmZmZnd3d8TExKqqqhoaGubm5lVVVf/78KCgpICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAAYALAAAAAAZARQBRwj+AA0IHEiwoMGDCBMqXMiwocOF5sLVEzgPwsOLGDNq3Mixo8ePIEOK3LCh3MIOAABYFMmypcuXMGPKjPlups2bOHPq3OmwJs+fQIMKHcrQJ9GjSJMKhYAP3jgNLY2yZIoPHVSlWLO+pKcAHbijUofGgxdPq1mk6DKcNRh2rQEO+GDQYEaXEjMabvMyNOdBL0N+/Pwa+JPFAiVXdOk4o4ROnuC15fA9xgj4bKlc2RKuTDiu7OSd+Oh95lj56KdsuY49/IBRQ9/RIjVIhv2x9E7C2Up1vMoRH2/aDcexNntiFaoTxQcWX2W8OCoDqEicILHqRMHiJJ5XJ2hb5uXMU0X+flAL3KDs8i67i0R9auZXl/je056NPn1gj1lyQwDHX8MHCAB+8JtIm7302mT01WcfRqdg9kd//IGjQYQTQtifSQTapIBg8Cgok3oGoVaKhBSWyB9cCmjAgQIWknihYAmahQ6GHr7UXSnZZLFfixW66GOPQJroomgcFSiTBujkNM47TDbp5JNOYgDllFRWaeWVWGap5ZZMvrLPl/tgookOY5ZJ5plmponmmmq2SWYdbsZ55h3/bMDlnU9KiSeU56Tk5wUK0NhRkjXC1BZHZxiESKIDLTrQGYsiUtAZkBoAAaNEEfqSBuOoRQ95GsVYaEiHjvoRqG6V45ippLIqEgf+wwmmAaqualRqrQ9lQCRsHHiG60W3/qoZB4UGK+xAxh4r0Ia/KrCrsshCaxA9okIbzzjQJluoOatK6xA4E7mqLXCBettSPMyiN65e6GhqLk+uGenWukjR48Gz7+qFJDzyEUXvTej4lu/AcMFjDk0yQaCABxz0O/DD/kIssbL/TmzxZxVfrPFRF2SALULpbiwybRzM884G8IjT4cgsj5ZxyzBHHPPMQNGzIj4eZFBVPAAedCuA5qCTc1MZxDMgzReDgw5ZO73cET1Cx4q0Xgpk4HBSTt8El6BTx4QPsRj/c0E88ZhUDtnmiPaBOWR/9QHaAsXDtkUakB0Pa/TIfbf+AW+TLRoEekMFONlxy80aOM4khhgzdCxOSdcMtVsoiFn9wV5B8howFuQZZD75fUrlp9tCVyNEz8oWo+N5rZTr9J1Gqy/ElbdyP9y6Rtm0p9Bpueju0dGwf2xq7W7xY11Bz2FnAHMGnGA8dCQQ5PxAxh8v0O0g4ZgFTFKDZM7B9Tm7MfYMYvYJTrF3BE7Ik7F/MfkKoSaJkBNqAAE94HDtV3yPua8x/ALR3n6CxCP68accpctI+kJSLa3QSmSUa1A2/kDAH/GnY/yBRzgMCCH9YWSBIXlgVtzFssqgxhIctGABV6hCDXhwhG4h4ciyBi0ZYuUDNtQYDRFRB4OcAQf+jfrhQOqACEk1og7tIEgdGiEQHqKley7xwDygiJEGWoyGwrKiVr7HMizWqlewESHEvGgq1JXHjGPUmBbPmMY2Kota5iLjZ0JjsaAJS45ukQfYaHatUeExKfLIIeQKAo534Osxf9xJZA45SJBAAB5UxJpbNACPPTZSKeVQADyAZ5NEOmRWHnjhJX9lDp1pElbAwojNTIkPc3BylLBUiCdjSUuEzLKWkAMAVA6Ey16GRAPveCUHAIBGXxqTI+/wkziOyUyP3LKZo3wmNBspzWlCrprWnBo2s0mzbXLTVTdTgDwY2ROPlCNg8MiAKL85Gg0oAB/ySKBIsMmVr7EzK1z+sUpQvImQeLzDkveMCQfgsc6f8POTAZNnQBvSlbwcdCPluNdCE1KOdyhUKw/tCARokDjGdVQx35hmOTYJHAAiZaMf/agrvnDMcXQLPSYlivb+MBAjmaOYg+SWqWIKFNSEAiM6nZpsXlkfnubkGPmhqWYaAg9yTux0xzLqTE6RI6UuBIQDkQf4nuo/1oFOKFnIxfYuclGQFfRX/DKXVEWC1AlCtCMZHco5B7bWg3wiC6UoRRZ8d5BjVNUjWFWIPAILHK2WBzkeqatB8rqQsI4VJGd1SDmEN6rBuoU5q2jeQFZBHegsL7P/eF50pAe6znLnqy/BjWpaUtaLTLZQc3X+ywmeYxBUoKI5zrGtcXRrveZF5zm3PS1M/JoFq7qEsA6xbH14OTHFIsSxN0HuQ9aYF1VBELUbUe2EABRZsyj3MzMamXOJCwcS1Q8cAIKAgF4i3Yu4c46tfddaHfuP89rXvBJyYUvaW8XH6KplMcXNKe5LYPyet7tIea9ePgDQ8WHXIJbLAiQMTOEC3xfBCuEvRuSB4aAw97oJoa+FzfsAFiGpA0arcH6d6hAN99ctPYOZenBTihEXWAFM+sAH6hEPFdePxUmJ8VniOpnSRHjCNvaxkglMD6JeNSdEdoggLfaMZzzBAtmo75K3nOQLFyknU+4JoDrsEOo+DAKs2Mf+CNgxGg5s4KUywSlGhgmADvyzJWLUIc26mhRzuPhYWMRBESUlkDPooIlMBKJAcHCGRjTCIoRuYg8NwMNIL6XBLYEHBoC8ED5fUaN1wBRBeIiDRiSKh+1ohKRS7WhLG4CIqUZEqomS549ogMdv+fBFvjvDmEEA01ox88CivL/HyHlixM6Lp80i7Di2TNd6EdjGkm2W2dHmPHreWHjR899PJ63Zfjm2t6idFHGXB9ziQnYWnYwrcgvF3KMK6rjzFQ84S8sD8fWQu3NCyYuR9I7QwjfLmtruX/Ubaehi1b5bgo6tNlJy+i5UH435yHybZeEbaSU7O+Uy2IwjzN+MKKf+weKX0zl8og2JqK+UgnGBfAAef0b5tODBoqFQWx74ILPMQzLQbncyJ+AYR1UsvnOhfOCdCjg5MkWSSXzgY+VFl9Z/AomOd3SlXZp+Bzza1a53ZKAxQo56LFsudlORvezFQrs1z652BbG97TDugECeDndfimOgMa+7xsJBDoV0IO96PxYEypEBoiZzmYGvpTn8BO/EzwwlfgK84991FZ/ofPLZxvzYNU/Lt3NeL57//LxEH03SXzL0psdo6geJ+tWz3PUbKwfgsF6VdmVAT19vFz6uzjN2w/4xONRkVQj7L3DEI2CaHOfvtXLO3ZuD6LaMjTzgAU/oL1+jOIunoWT+Epmq+P76D+FAzr7/EX7ypfDgb40CFBDJmRB5HB6AevoHIhuv2Pwo8aB7+jMgPqQsXB7lknoqp3paQUnAVneP1H4ktxbrA3Iy9wHvcHlN4xfgkAHdAgNyAQPGxU7g4AGSdxOtJxAwQBckSIKP800cNxknU2tYMYIl+IInCE2FJIFDkQEXcAOC4YIvaILQpDDWpxTOxROUQAc7SBfNNHEw9WBmkR/FBQOU8IRKhYS1BHEKEoQ44VduNRBQFA/Q1jXHNypWaBPZkDsGkUBf2EhnCIZKiBRMiBAKmIY0E1FeZRZUlQ3n44YMAUk04wHkBxth2BKfgBl8xREd+IPHYg7+lOUqfygSbcgQClgQUmgxhaQsi/gRfpULG5gQj2gQBFdH9jaHRBGIZJgwiZgvAgctlbgRjXgRm4gQp0h56FaFa3gTdZiJDdGKCIEOuFhZShdVsygTNAYUOOQt0qZWv4gRNGWLBaE9HrGLCNGBAWc7x/gQoVAKfzCIBWE5WdgRzpgQjVcfIXgQzNMRf3gKjxViuYEVy7ZcEvOHxaUQzCgeIvGKo7KOQ4EK/BAdmSUQwWVbyoOP1WFaA5Edy4OPBZGKB6GNysgR3bgQ9Ogh3ygUnCWOJCAd0JFZzmMd4ygQEykQAnk909gRoqMXESkYXZgUo1Vb2qEd0ZORn1UQBIn+WcdBPSGpEfH4Eg2ZhzWSVhaDkIMxhgsJEjnJELFoFuPwgUVVkw+BGaPzGcNYHrH1PkrJEDc5E0PJEONAg0dRkpQ4lQmhjcdADx9giKvhNcBhNSD2EaJTIfSQXiO3EWRJOkV5FFH5P165jFUVIQeUXtzlElcZHFoJFFyJincpENp4Cnqpl7KnY334EIG5EHMpFFwkXoWZH6GQmJiJP/zxl884E/FwgGZhj/kiVTgyQZh5mnrZZCzBmQwFfKAJMTz1B5hxDKhZmxTylg2BmxzBAUgpE6I5mjW5lrY5nAf0Szfxm0QxmNICQDNFnM6pAbqpiTcRmTshHDL2i4fpnNr+KSHReRCNuREfUIoOFDPYw4TOOQ4XAJ3w8A7xYZuB2Z0bwYJIgZzypYTN6ZznYDXgYA4d4JxayZpllhdPCWDYJZvZQJvbqQAbkD8mAwHjMJz4oz44YZ1rwWuUWRBM2CPbuaERQoOP2RC/FkMzYxtUhYkceqKKyY1g5hby2Y6BkZ0oGqP5pRctKhQOCJv8YJ4yuqPw6XIr6hE96hAnKTHPACau4BU7uqOXFw/h8IkG8hGLlxJjxhLhyBPMACYjgANnogNb2qVjwqVf6qVcKqZgOqZheqZmmqZlCqZ0sgE4gUXg0Cd+Ymev+RA3OjDoeacDo6e2dGcvwafvUqVAAaj+OzGk6jYzhjoU29YyO7REiMBojaJqOiApsgYBS2QAZxBq7WBpmVpEqjZpckWoDiGWGIAO5JCoBxF2vQZqruZEjQKqRJSpRFQQs0ppOtCbsIOrBDEOiMcR9OlsHVGrBJGpSQQBklKroYYIkJZEA+FoAlEHPeRqP/GrD7E+OYcyyjl3MXNLlDKs3Yqp4HoQ3ypqQZGtO0Gt0iKoPIGuO0EP4nkx6qoTFJoX1AlwMFOv8vqhCgczdalsjHqv7ROXtRKvN7E+n8Guv0KwGjIayicyCst97+qvDjtwtAE1Eysyizoa+pR5F2NtwGGu6bYxIKsUI+tHIushnwKvGoMOQar+FQ7qbRMDRhInf4FqMZHoIZ0hMQ8bEuFZK4TzMDv7ETc7KkObLRDDNseiYDW7pwAqGOBQsrQRtBvBk9JSc/NmLk87MIaVruYCAaJaI1lrtFWrr+gRgPaatFALWwiLSMrCfiyDDjSbdr9ydDFTiAOLK4UksG+0tmshtQehALqKK0VbHn5LEFSIhl97cUQbsZCDiBHnIejAuJfEheCoIONQp7BkL9/5esDRgWQbMwYDG/EKAQ/5TRCotzpRpU8btwGVFoIRguPAt8xUFQ6lF3CButOUATVqUGsxDlTLeQD4ueWXFe60u4lXf7gLV0kRu00Ldx+QM8mLEcS2JIFbdxVziA/V6zM80X2bO38GMCuh637RtX7N670DcVNf070J4UkckAEeoH3mC3Q4t35ps3QdgS679xTxaxbhmU4e8E6qM3ja650A8nE0576qE737ixWFu8DD68AwC8FuJMFAS8E6a8ETjMHAqsFLy8Eb7MFcq3YBAQA7"},655025:function(e,n,t){n.Z=t.p+"assets/images/sbb_uhr-a02cb9782a8c24be322c4d2f7e6bb493.jpeg"}}]);