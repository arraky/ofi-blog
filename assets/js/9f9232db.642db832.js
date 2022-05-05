"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79998],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),h=i,g=d["".concat(o,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(592814),l=n(51436),s=n(386010),o=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},r.createElement(a.G,{icon:l.Xjp}))))},m=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+m(n.size)+")",t.maxHeight=m(n.size),delete n.size),n.height&&(t.maxHeight=m(n.height),t.height=m(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+m(n.width)+")",t.width=m(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),l=a[0],m=a[1],c=e.caption&&"undefined"!==e.caption,d=e.bib||c;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,l=t.top<=i&&t.bottom>=i,a&&l||n(!1)}},r.createElement(u,e),d&&r.createElement("figcaption",null,c&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,s.default)(i.bib,l?i.visible:void 0),onClick:function(){return m(!l)}},"@"),l&&r.createElement(o,e.bib)))}},928676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(583117),i=n(480102),a=(n(667294),n(603905)),l=n(884384),s=["components"],o={title:"Algorithmus"},m="Algorithmus [^1]",u={unversionedId:"Programmieren-1/Algorithmen/Algorithmus",id:"Programmieren-1/Algorithmen/Algorithmus",title:"Algorithmus",description:"Definition",source:"@site/docs/Programmieren-1/01-Algorithmen/01-Algorithmus.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Algorithmus",permalink:"/Programmieren-1/Algorithmen/Algorithmus",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/01-Algorithmus.md",tags:[],version:"current",lastUpdatedAt:1632051435,formattedLastUpdatedAt:"19.9.2021",sidebarPosition:1,frontMatter:{title:"Algorithmus"},sidebar:"sidebar",previous:{title:"Algorithmen",permalink:"/category/algorithmen"},next:{title:"Faltanleitung",permalink:"/Programmieren-1/Algorithmen/Faltanleitung"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"Spezielle Sprachen",id:"spezielle-sprachen",level:2},{value:"Schritt",id:"schritt",level:2},{value:"Struktur",id:"struktur",level:2},{value:"Endlichkeit",id:"endlichkeit",level:2},{value:"\u2b50\ufe0f Al-Chwarizmi",id:"\ufe0f-al-chwarizmi",level:2}],h={toc:d};function g(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"algorithmus-"},"Algorithmus ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\xabEin Algorithmus beschreibt die Methode, mit der eine Aufgabe gel\xf6st wird. Ein Algorithmus besteht aus einer Folge von Schritten, deren korrekte Abarbeitung die gestellte Aufgabe l\xf6st. Die Abarbeitung oder den Vorgang selbst bezeichnet man als Proze\xdf.\xbb\nLes Goldschlager/Andrew Lister: Informatik, 1984")),(0,a.kt)("p",null,"Die folgende Tabelle zeigt ein paar Beispiele von Prozessen mit zugeh\xf6rigem Algorithmus:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Prozess"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Algorithmus"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Typischer Schritt"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Kranich falten"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Faltanleitung"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Papier entlang einer Linie falten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Zimtsterne backen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Rezept"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Eier schaumig schlagen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Musikst\xfcck spielen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Notenblatt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ein c' spielen")))),(0,a.kt)("h2",{id:"spezielle-sprachen"},"Spezielle Sprachen"),(0,a.kt)("p",null,"Algorithmen werden oft in einer ",(0,a.kt)("strong",{parentName:"p"},"Fachsprache")," oder in einer ",(0,a.kt)("strong",{parentName:"p"},"symbolischen Sprache")," verfasst. Damit lassen sich die einzelnen Schritte eines Algorithmus oft ",(0,a.kt)("strong",{parentName:"p"},"klarer und k\xfcrzer")," ausdr\xfccken als in der Alltagssprache. Beispiele f\xfcr solche Sprachen sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("strong",{parentName:"li"},"Notenschrift")," ist eine symbolische Sprache, in welcher die zu spielende Musik kompakt festgehalten werden kann."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rezepte")," sind normalerweise in einer Fachsprache verfasst, welche Fachbegriffe wie \xabSchnee\xbb, \xabschlagen\xbb oder \xabGlasieren\xbb und Mengenangaben wie \xabTL\xbb oder \xabPrise\xbb enth\xe4lt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bauanleitungen"),", z.B. IKEA-Anleitungen zum Zusammenbau von M\xf6beln sind in einer nonverbalen Zeichensprache verfasst.")),(0,a.kt)("h2",{id:"schritt"},"Schritt"),(0,a.kt)("p",null,"Wie die einzelnen Schritte eines Algorithmus lauten, h\xe4ngt stark vom Gebiet ab, f\xfcr welches der Algorithmus verwendet wird. Die Einzelschritte beim Spielen eines Musikst\xfccks unterscheiden sich stark von den Schritten beim Kochen."),(0,a.kt)("p",null,"Eine wichtige Eigenschaft von Algorithmen ist die ",(0,a.kt)("strong",{parentName:"p"},"Ausf\xfchrbarkeit"),". Sie bedeutet, dass jeder einzelne Schritt eines Algorithmus klar definiert sein muss und ausgef\xfchrt werden kann. Da eine klare Definition in Alltagssprache oft umfangreich ist, kommt hier die Fachsprache oder die symbolische Sprache zum Zug."),(0,a.kt)("h2",{id:"struktur"},"Struktur"),(0,a.kt)("p",null,"Ein Algorithmus definiert, in welcher ",(0,a.kt)("strong",{parentName:"p"},"Reihenfolge")," die einzelnen Schritte nacheinander abgearbeitet werden. Die Beschreibung dieser Reihenfolge ist die ",(0,a.kt)("strong",{parentName:"p"},"Struktur")," des Algorithmus. W\xe4hrend die Einzelschritte je nach Anwendungsgebiet unterschiedlich sind, sind die Strukturen (beim Programmieren spricht man von ",(0,a.kt)("strong",{parentName:"p"},"Kontrollstrukturen"),") von Algorithmen universell."),(0,a.kt)("p",null,"Folgende Strukturen k\xf6nnen unterschieden werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequenz \ud83d\udc63"),": eine Folge von Schritten/Anweisungen, die nacheinander abgearbeitet werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wiederholung \ud83d\udd01"),": Einer oder mehrere Schritte werden eine bestimmte Anzahl mal wiederholt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bedingte Ausf\xfchrung \u2442"),": Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unterprogramm \ud83c\udff7"),": Eine Sequenz kann mit einem Namen versehen werden. Anstatt immer die ganze Sequenz aufzuschreiben, kann der Name angegeben werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameter \u2295 \u2296"),": Das Ergebnis eines Algorithmus kann variiert werden durch Werte, welche bei jeder Ausf\xfchrung neu festgelegt werden.")),(0,a.kt)("h2",{id:"endlichkeit"},"Endlichkeit"),(0,a.kt)("p",null,"Die Endlichkeit ist eine weitere wichtige Eingenschaft von Algorithmen. Sie bedeutet, dass ein Algorithmus immer nach endlich vielen Einzelschritten beendet wird. Ausserdem darf ein Algorithmus nur endlich viel Platz beanspruchen (z.B. Speicherplatz im Computer)."),(0,a.kt)("h2",{id:"\ufe0f-al-chwarizmi"},"\u2b50\ufe0f Al-Chwarizmi"),(0,a.kt)("p",null,"Abu Dscha\u02bffar Muhammad ibn Musa al-Chw\u0101rizm\u012b war ein Mathematiker und Universalgelehrter. Er stammte zwar aus dem iranischen Choresmien, verbrachte jedoch den gr\xf6\xdften Teil seines Lebens in Bagdad und war dort im \xabHaus der Weisheit\xbb, einer Art Akademie, t\xe4tig."),(0,a.kt)("p",null,"Al-Chwarizmi gilt als einer der bedeutendsten Mathematiker, da er sich mit Algebra als elementarer Untersuchungsform besch\xe4ftigte.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("p",null,"In der lateinischen \xdcbersetzung eines Werkes von Al-Chwarizmi wurde sein Name als \xabalgorismus\xbb geschrieben. Davon leitet sich der heutige Begriff \xabAlgorithmus\xbb ab.",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:{author:"Unbekannt",source:"https://commons.wikimedia.org/wiki/File:1983_CPA_5426_(1).png",licence:"Public Domain",licence_url:"",edited:!1},caption:"Abbildung von Al-Chwarizmi auf einer sowjetischen Briefmarke",options:{},isInline:!1,src:n(836521).Z,alt:"Abbildung von Al-Chwarizmi auf einer sowjetischen Briefmarke",mdxType:"Image"})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=prog1/1-algo/1-algorithm/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Al-Chwarizmi"},"Wikipedia: al-Chwarizmi"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wiktionary.org/wiki/Algorithmus"},"Wiktionary: Algorithmus"),(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},836521:function(e,t,n){t.Z=n.p+"assets/images/al-chwarizmi-1073cd4e78e876a535859768b34a67e5.png"}}]);