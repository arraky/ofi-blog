"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[55557],{603905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(583117),a=r(480102),i=(r(667294),r(603905)),o=["components"],l={title:"Ports"},s="Ports [^1]",p={unversionedId:"Netzwerke/Begriffe/ports",id:"version-24K/Netzwerke/Begriffe/ports",title:"Ports",description:"Wozu ben\xf6tigt man Ports?",source:"@site/versioned_docs/version-24K/05-Netzwerke/010-Begriffe/3-ports.md",sourceDirName:"05-Netzwerke/010-Begriffe",slug:"/Netzwerke/Begriffe/ports",permalink:"/24K/Netzwerke/Begriffe/ports",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/010-Begriffe/3-ports.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"Ports"},sidebar:"version-24K/sidebar",previous:{title:"MAC-Adresse",permalink:"/24K/Netzwerke/Begriffe/mac-adresse"},next:{title:"Pr\xfcfung",permalink:"/24K/Netzwerke/Pruefung"}},d={},c=[{value:"Wozu ben\xf6tigt man Ports?",id:"wozu-ben\xf6tigt-man-ports",level:2},{value:"Well-known Ports",id:"well-known-ports",level:2}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ports-"},"Ports ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"wozu-ben\xf6tigt-man-ports"},"Wozu ben\xf6tigt man Ports?"),(0,i.kt)("p",null,"Ein Computer, der sich in einem Netzwerk befindet, hat meist etliche Verbindungen gleichzeitig zu vielen anderen Computern ge\xf6ffnet. Sogar zwei Computer untereinander verwenden h\xe4ufig mehrere Verbindungen gleichzeitig:"),(0,i.kt)("p",null,"So k\xf6nnte ein Benutzer auf seinem Computer im Browser eine Webseite besuchen, w\xe4hrend das Betriebssystem gerade den Update-Server kontaktiert \u2013 beides ben\xf6tigt eine DNS-Abfrage, d.h. Verbindungen zum DNS-Server."),(0,i.kt)("p",null,"Auf der Vermittlungsschicht kontaktiert derselbe Client mit seiner IP-Adresse f\xfcr beide Verbindungen die IP-Adresse desselben (DNS-)Servers. Eine Stufe h\xf6her \u2013 auf der Transportschicht \u2013 m\xfcssen die Verbindungen unterschieden werden k\xf6nnen. Schliesslich sollen die beiden Antworten ja nicht vertauscht werden. Daher verwendet man Ports \u2013 eine 16-bit Zahl (sprich: Werte von 0 - 65'535)."),(0,i.kt)("h2",{id:"well-known-ports"},"Well-known Ports"),(0,i.kt)("p",null,"Auf der Serverseite werden in der Regel stets dieselben Ports eingesetzt \u2013 schliesslich muss ein Client wissen, auf welchem Port er den gew\xfcnschten Dienst erreichen kann."),(0,i.kt)("p",null,"Einige bekannte Ports sind:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Portnummer"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Dienst"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"25")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol (SMTP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"53")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Domain Name System (DNS)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"80")),(0,i.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol (HTTP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"143")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol (IMAP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"465")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol ",(0,i.kt)("strong",{parentName:"td"},"Secure")," (SMTPS)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"443")),(0,i.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol ",(0,i.kt)("strong",{parentName:"td"},"Secure")," (HTTPS)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"993")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol ",(0,i.kt)("strong",{parentName:"td"},"Secure")," (IMAPS)")))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=240119"},"rothe.io Ports"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);