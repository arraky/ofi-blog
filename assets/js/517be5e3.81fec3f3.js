"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[13066],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(592814),s=n(51436),o=n(386010),c=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:s.Xjp}))))},l=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+l(n.size)+")",t.maxHeight=l(n.size),delete n.size),n.height&&(t.maxHeight=l(n.height),t.height=l(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+l(n.width)+")",t.width=l(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),s=a[0],l=a[1],u=e.caption&&"undefined"!==e.caption,h=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,s=t.top<=i&&t.bottom>=i,a&&s||n(!1)}},r.createElement(d,e),h&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,s?i.visible:void 0),onClick:function(){return l(!s)}},"@"),s&&r.createElement(c,e.bib)))}},66005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(583117),i=n(480102),a=(n(667294),n(603905)),s=n(884384),o=["components"],c={sidebar_label:"2. Vermittlungsschicht",sidebar_position:5},l="Schicht 2: Vermittlungsschicht [^1]",d={unversionedId:"Netzwerke-of/Schichtenmodell/Vermittlungsschicht",id:"Netzwerke-of/Schichtenmodell/Vermittlungsschicht",title:"Schicht 2: Vermittlungsschicht [^1]",description:"In der Vermittlungsschicht brauchen wir eine Adresse, an die die (Daten-)Pakete gesendet werden k\xf6nnen. Es handelt sich um eine logische Adresse aus dem Netzwerk, in dem sich das Ger\xe4t gerade befindet.",source:"@site/docs/Netzwerke-of/001-Schichtenmodell/2-Vermittlungsschicht.md",sourceDirName:"Netzwerke-of/001-Schichtenmodell",slug:"/Netzwerke-of/Schichtenmodell/Vermittlungsschicht",permalink:"/Netzwerke-of/Schichtenmodell/Vermittlungsschicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/001-Schichtenmodell/2-Vermittlungsschicht.md",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"4.10.2021",sidebarPosition:5,frontMatter:{sidebar_label:"2. Vermittlungsschicht",sidebar_position:5},sidebar:"sidebar",previous:{title:"3. Transportschicht",permalink:"/Netzwerke-of/Schichtenmodell/Transportschicht"},next:{title:"1. Physikalische Schicht",permalink:"/Netzwerke-of/Schichtenmodell/Physikalische-Schicht"}},u={},h=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-schule",level:2},{value:"Internet",id:"internet",level:2},{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",level:3}],m={toc:h};function p(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schicht-2-vermittlungsschicht-"},"Schicht 2: Vermittlungsschicht ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"In der Vermittlungsschicht brauchen wir eine Adresse, an die die (Daten-)Pakete gesendet werden k\xf6nnen. Es handelt sich um eine logische Adresse aus dem Netzwerk, in dem sich das Ger\xe4t gerade befindet."),(0,a.kt)("h2",{id:"beispiel-schule"},"Beispiel \xabSchule\xbb"),(0,a.kt)("p",null,"Im Beispiel \xabSchule\xbb ist aus den beiden oberen Schichten alles f\xfcr den Transport vorbereitet. Der Hauswart bringt aber die Pulte nicht selbst ins andere Schulhaus \u2013 er muss sich gar nicht um die Zustellung k\xfcmmern. Die Vermittlungsschicht wird hier von der Post \xfcbernommen. Anhand der Adresse auf den Paketen weiss die Post, wohin die einzelnen Pakete verschickt werden m\xfcssen."),(0,a.kt)("p",null,"\xdcblicherweise k\xf6nnen die Pakete nicht direkt, sondern via ein Paketzentrum zugestellt werden. Welche Route die Pakete nehmen \u2013 also via welches Paketzentrum die Pakete verschickt werden \u2013 darum k\xfcmmert sich die Post. Die Pakete werden so in S\xe4cke verpackt, dass sie mit anderen Paketen zusammen im richtigen Paketzentrum landen. Dort werden sie neu sortiert und f\xfcr den Weitertransport vorbereitet."),(0,a.kt)("p",null,"Die Post hat keine Ahnung, welche Ware in wie viele Pakete aufgeteilt transportiert wird, sie weiss nur von wo nach wo welches Paket transportiert werden muss."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/3-network/layer-2.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(193227).Z,mdxType:"Image"})),(0,a.kt)("h2",{id:"internet"},"Internet"),(0,a.kt)("p",null,"Das wichtigste Protokoll der Vermittlungsschicht ist das Internet Protokoll (IP). Damit Computer in einem Netzwerk Daten austauschen k\xf6nnen, brauchen sie eine Adresse (analog zur Postadresse in unserem Beispiel oben). Die Adressen der Vermittlungsschicht werden IP-Adressen (siehe Begriff IP-Adressen) genannt. Jedes vernetzte Ger\xe4t besitzt eine IP-Adresse, damit es mit anderen Ger\xe4ten kommunizieren kann."),(0,a.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5o8CwafCxnU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=750322"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},193227:function(e,t,n){t.Z=n.p+"assets/images/2-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"}}]);