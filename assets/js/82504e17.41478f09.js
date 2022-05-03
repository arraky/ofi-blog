"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[34296],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),g=i,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},884384:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(592814),o=t(51436),c=t(386010),s=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,c.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,c.default)("badge badge--secondary")},r.createElement(a.G,{icon:o.Xjp}))))},l=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},d=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+l(t.size)+")",n.maxHeight=l(t.size),delete t.size),t.height&&(n.maxHeight=l(t.height),n.height=l(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+l(t.width)+")",n.width=l(t.width),delete t.width),n=Object.assign({},n,t),r.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var n=r.useState(!1),t=(n[0],n[1]),a=r.useState(!1),o=a[0],l=a[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,c.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,r,i,a,o;n=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=n.left<=r&&n.right>=r,o=n.top<=i&&n.bottom>=i,a&&o||t(!1)}},r.createElement(d,e),m&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,c.default)(i.bib,o?i.visible:void 0),onClick:function(){return l(!o)}},"@"),o&&r.createElement(s,e.bib)))}},344686:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=t(583117),i=t(480102),a=(t(667294),t(603905)),o=t(884384),c=["components"],s={title:"2. Zeichnungsfl\xe4che"},l="2. Zeichnungsfl\xe4che - Screen",d={unversionedId:"Programmieren-1/Turtlegrafik/screen",id:"version-25h/Programmieren-1/Turtlegrafik/screen",title:"2. Zeichnungsfl\xe4che",description:"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds.",source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/002-screen.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/screen",permalink:"/25h/Programmieren-1/Turtlegrafik/screen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/002-screen.md",tags:[],version:"25h",sidebarPosition:2,frontMatter:{title:"2. Zeichnungsfl\xe4che"},sidebar:"version-25h/sidebar",previous:{title:"1. Einf\xfchrung",permalink:"/25h/Programmieren-1/Turtlegrafik/intro"},next:{title:"3. Wiederholung \ud83d\udd01",permalink:"/25h/Programmieren-1/Turtlegrafik/repeat"}},u={},m=[],g={toc:m};function f(e){var n=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-zeichnungsfl\xe4che---screen"},"2. Zeichnungsfl\xe4che - Screen"),(0,a.kt)("p",null,"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds."),(0,a.kt)("p",null,"Standarm\xe4ssig ist keine Hintergrundfarbe gesetzt (=durchsichtig) und die Dimensionen die Koordinaten des Bildschirms sind ",(0,a.kt)("inlineCode",{parentName:"p"},"500x500")," Pixel. Das zugrundeliegende Koordinatensystem hat den Ursprung immer in der Mitte des Bildschirms."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(233966).Z,mdxType:"Image"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\n# wenn die Bildschirm-Dimensionen ver\xe4ndert werden sollen, muss dies\n# zwingend als erster Befehl gemacht werden.\n# Die Gr\xf6sse kann anschliessend nicht mehr ver\xe4ndert werden.\nturtle.set_defaults(canvwidth=200, canvheight=100)\n\n# Die Hintergrundfarbe kann auch ge\xe4ndert werden.\nScreen().bgcolor('orange')\n\nforward(100)\n\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wird mit ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen().bgcolor('yellow')")," eine Hintergrundfarbe festgelegt, kann das umgebende Rechteck der Figur (englisch ",(0,a.kt)("inlineCode",{parentName:"p"},"Bounding Box"),") nicht mehr bestimmt werden und es wird immer die ganze Bildfl\xe4che heruntergeladen. "))))}f.isMDXComponent=!0},233966:function(e,n,t){n.Z=t.p+"assets/images/Screen__coordinates_py-5a1714d690d70f7894d878e561269826.svg"}}]);