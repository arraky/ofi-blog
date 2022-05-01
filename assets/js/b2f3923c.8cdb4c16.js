"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[89809],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,p=d["".concat(c,".").concat(g)]||d[g]||m[g]||a;return n?i.createElement(p,l(l({ref:t},u),{},{components:n})):i.createElement(p,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(592814),l=n(51436),o=n(386010),c=function(e){return i.createElement("span",{className:r.details},i.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},i.createElement(a.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),i.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return i.createElement(u,e);var t=i.useState(!1),n=(t[0],t[1]),a=i.useState(!1),l=a[0],s=a[1],m=e.caption&&"undefined"!==e.caption,d=e.bib||m;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,i,r,a,l;t=e.currentTarget.getBoundingClientRect(),i=e.clientX,r=e.clientY,a=t.left<=i&&t.right>=i,l=t.top<=r&&t.bottom>=r,a&&l||n(!1)}},i.createElement(u,e),d&&i.createElement("figcaption",null,m&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&i.createElement(c,e.bib)))}},548760:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var i=n(583117),r=n(480102),a=(n(667294),n(603905)),l=n(884384),o=["components"],c={title:"Faltanleitung"},s="Faltanleitung [^1]",u={unversionedId:"Programmieren-1/Algorithmen/Faltanleitung",id:"Programmieren-1/Algorithmen/Faltanleitung",title:"Faltanleitung",description:"Eine Faltanleitung ist ein Beispiel f\xfcr einen Algorithmus. Das japanische Wort Origami bezeichnet die Kunst des Papierfaltens.",source:"@site/docs/Programmieren-1/01-Algorithmen/02-Faltanleitung.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Faltanleitung",permalink:"/Programmieren-1/Algorithmen/Faltanleitung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/02-Faltanleitung.md",tags:[],version:"current",lastUpdatedAt:1629554373,formattedLastUpdatedAt:"8/21/2021",sidebarPosition:2,frontMatter:{title:"Faltanleitung"},sidebar:"sidebar",previous:{title:"Algorithmus",permalink:"/Programmieren-1/Algorithmen/Algorithmus"},next:{title:"Bauanleitung",permalink:"/Programmieren-1/Algorithmen/Bauanleitung"}},m={},d=[{value:"Schritt",id:"schritt",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Schachtel",id:"schachtel",level:3},{value:"Kranich",id:"kranich",level:3}],g={toc:d};function p(e){var t=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faltanleitung-"},"Faltanleitung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Eine Faltanleitung ist ein Beispiel f\xfcr einen Algorithmus. Das japanische Wort Origami bezeichnet die Kunst des Papierfaltens."),(0,a.kt)("h2",{id:"schritt"},"Schritt"),(0,a.kt)("p",null,"In einer Faltanleitung kommen nur wenige Arten von Schritten vor:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Falten"),": Durch eine gestrichelte Linie wird angedeutet, wo gefaltet werden soll. Der Pfeil gibt an, in welche Richtung gefaltet wird."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Falz machen"),": Durch Hin- und Zur\xfcckfalten wird ein Falz erzeugt. Dies wird durch einen Pfeil angedeutet, der hin und zur\xfcck zeigt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drehen"),": Durch einen Pfeil zwischen zwei Abbildungen wird angezeigt, dass das Papier entsprechend umgedreht werden soll.")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("h3",{id:"schachtel"},"Schachtel"),(0,a.kt)("p",null,"Eine einfache Faltanleitung f\xfcr eine Schachtel."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"\u5f35\u5b87\u5e06",source:"https://commons.wikimedia.org/wiki/File:Origami_box_type1.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-sa/4.0/",edited:!1},caption:"Origami Box",options:{},isInline:!1,src:n(329275).Z,alt:"Origami Box",mdxType:"Image"})),(0,a.kt)("h3",{id:"kranich"},"Kranich"),(0,a.kt)("p",null,"Der Kranich ist das klassische Motiv im japanischen ",(0,a.kt)("em",{parentName:"p"},"Origami"),"."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Andrew Hudson",source:"https://commons.wikimedia.org/wiki/File:Tsuru_wiki.svg",licence:"Creative Commons 3.0",licence_url:"https://creativecommons.org/licenses/by/3.0/",edited:!1},caption:"Origami Kranich",options:{},isInline:!1,src:n(932941).Z,alt:"Origami Kranich",mdxType:"Image"})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=prog1/1-algo/2-origami/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},329275:function(e,t,n){t.Z=n.p+"assets/images/origami-box-0cf122652d8d427d9720ff0102dd6a9d.svg"},932941:function(e,t,n){t.Z=n.p+"assets/images/origami-crane-163d92bfca1a29c5319d400ec65ca5db.svg"}}]);