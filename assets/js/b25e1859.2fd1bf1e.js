"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[25191],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),l=n(51436),c=n(386010),o=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],s=i[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,c.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),u&&a.createElement("figcaption",null,m&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,c.default)(r.bib,l?r.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&a.createElement(o,e.bib)))}},245941:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),r=n(386010),i="level_pfxx",l="details_ZXms",c="highlight_Hva6",o="package_Cm9J",s="data_WENT",d="tcp_Wo0n",m="ip_Cvq4",u="mac_IeOG",h="spacer_FP_q",f=function(){return a.createElement("div",null,a.createElement("div",{className:(0,r.default)(i)},a.createElement("div",{className:(0,r.default)(l,s)},a.createElement("div",null,"Anwendungs\xadschicht")),a.createElement("div",{className:(0,r.default)(l)},a.createElement("div",null,"Web, E-Mail")),a.createElement("div",{className:(0,r.default)(h)}),a.createElement("div",{className:(0,r.default)(c,o,s)},"Daten")),a.createElement("div",{className:(0,r.default)(i)},a.createElement("div",{className:(0,r.default)(l,d)},a.createElement("div",null,"Transport\xadschicht")),a.createElement("div",{className:(0,r.default)(l)},a.createElement("div",null,"\xdcber\xadtragungs\xadsteuerungs\xadprotokoll \xad(TCP)")),a.createElement("div",{className:(0,r.default)(h)}),a.createElement("div",{className:(0,r.default)(c,o,d)},"TCP+Port",a.createElement("div",{className:(0,r.default)(o,s)},"Daten"))),a.createElement("div",{className:(0,r.default)(i)},a.createElement("div",{className:(0,r.default)(l,m)},a.createElement("div",null,"Vermittlungs\xadschicht")),a.createElement("div",{className:(0,r.default)(l)},a.createElement("div",null,"Internet\xadprotokoll \xad(IP)")),a.createElement("div",{className:(0,r.default)(h)}),a.createElement("div",{className:(0,r.default)(c,o,m)},"IP-Adresse",a.createElement("div",{className:(0,r.default)(o,d)},"TCP+Port",a.createElement("div",{className:(0,r.default)(o,s)},"Daten")))),a.createElement("div",{className:(0,r.default)(i)},a.createElement("div",{className:(0,r.default)(l,u)},a.createElement("div",null,"Physikalische Schicht")),a.createElement("div",{className:(0,r.default)(l)},a.createElement("div",null,"WLAN, Ethernet")),a.createElement("div",{className:(0,r.default)(h)}),a.createElement("div",{className:(0,r.default)(c,o,u)},"MAC-Adresse",a.createElement("div",{className:(0,r.default)(o,m)},"IP-Adresse",a.createElement("div",{className:(0,r.default)(o,d)},"TCP+Port",a.createElement("div",{className:(0,r.default)(o,s)},"Daten"))))))}},88771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return h}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(884384),c=n(245941),o=["components"],s={sidebar_label:"TCP/IP-Schichtenmodell",sidebar_position:2},d="TCP/IP-Schichtenmodell [^1]",m={unversionedId:"Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell",id:"version-24K/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell",title:"TCP/IP-Schichtenmodell [^1]",description:"Genauso wie die Pakete im Beispiel \xfcbermittelt werden, geschieht dies auch am Computer \u2013 hier sprechen wir von Datenpaketen.",source:"@site/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/0b-TCP-IP-Schichtenmodell.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell",permalink:"/24K/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/0b-TCP-IP-Schichtenmodell.mdx",tags:[],version:"24K",sidebarPosition:2,frontMatter:{sidebar_label:"TCP/IP-Schichtenmodell",sidebar_position:2},sidebar:"version-24K/sidebar",previous:{title:"Schichtenmodell",permalink:"/24K/Netzwerke/Schichtenmodell/0a-Schichtenmodell"},next:{title:"4. Anwendungsschicht",permalink:"/24K/Netzwerke/Schichtenmodell/Anwendungsschicht"}},u={},h=[{value:"Die Analogie",id:"die-analogie",level:2}],f={toc:h};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tcpip-schichtenmodell-"},"TCP/IP-Schichtenmodell ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Genauso wie die Pakete im Beispiel \xfcbermittelt werden, geschieht dies auch am Computer \u2013 hier sprechen wir von Datenpaketen."),(0,i.kt)("p",null,"Die oberen Schichten verwenden Dienste der unteren Schichten.\nJede Schicht verpackt die Daten neu, wenn sie von der dar\xfcberliegenden Schicht \xfcbergeben werden und entpackt sie wieder beim Empfangen bevor sie wieder an die dar\xfcberliegende Schicht \xfcbergeben werden\nJede Schicht hat einen bestimmten Auftrag."),(0,i.kt)(c.Z,{mdxType:"Stack"}),(0,i.kt)("h2",{id:"die-analogie"},"Die Analogie"),(0,i.kt)("p",null,"Wenn wir im obigen Beispiel die Schichten ansehen, dann ist jede Schicht f\xfcr einen bestimmten Schritt zust\xe4ndig."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"mygymer",source:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/02.tcp-ip.html",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(145980).Z,mdxType:"Image"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/02.tcp-ip.html"},"mygymer.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},145980:function(e,t,n){t.Z=n.p+"assets/images/0b-schichtenmodell-analogie-d28c6d1dc69449049ca46c3b629b1428.png"}}]);