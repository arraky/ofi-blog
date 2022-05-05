"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[52935],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},884384:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(592814),l=t(51436),o=t(386010),p=function(e){return i.createElement("span",{className:a.details},i.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},i.createElement(r.G,{icon:l.Xjp}))))},s=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},u=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+s(t.size)+")",n.maxHeight=s(t.size),delete t.size),t.height&&(n.maxHeight=s(t.height),n.height=s(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+s(t.width)+")",n.width=s(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return i.createElement(u,e);var n=i.useState(!1),t=(n[0],n[1]),r=i.useState(!1),l=r[0],s=r[1],d=e.caption&&"undefined"!==e.caption,c=e.bib||d;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,a,r,l;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,a=e.clientY,r=n.left<=i&&n.right>=i,l=n.top<=a&&n.bottom>=a,r&&l||t(!1)}},i.createElement(u,e),c&&i.createElement("figcaption",null,d&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&i.createElement(p,e.bib)))}},361730:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var i=t(583117),a=t(480102),r=(t(667294),t(603905)),l=t(884384),o=["components"],p={},s="Funktionen",u={unversionedId:"Programmieren-1/Aufgaben/functions",id:"version-24i/Programmieren-1/Aufgaben/functions",title:"Funktionen",description:"06functions.zip",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/06_functions.mdx",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/functions",permalink:"/24i/Programmieren-1/Aufgaben/functions",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/06_functions.mdx",tags:[],version:"24i",sidebarPosition:6,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Gr\xfcfnisch",permalink:"/24i/Programmieren-1/Aufgaben/gruefnisch"},next:{title:"Zufallszahl",permalink:"/24i/Programmieren-1/Aufgaben/zufalls_zahl"}},d={},c=[{value:"Voraussetzung",id:"voraussetzung",level:2},{value:"Zeichnungen mit Funktionen erzeugen",id:"zeichnungen-mit-funktionen-erzeugen",level:2}],m={toc:c};function k(e){var n=e.components,p=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funktionen"},"Funktionen"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(426636).Z},"06_functions.zip")),(0,r.kt)("h2",{id:"voraussetzung"},"Voraussetzung"),(0,r.kt)("p",null,"Sie haben auf ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website"},"jupyter.gbsl.website")," das ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5")," bis und mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Kapitel 5.1")," gelesen und bearbeitet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie ein Nikolaus-Haus. Um die L\xe4nge der Diagonalen zu bestimmen, m\xfcssen Sie die Wurzel aus ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," berechnen. Dies k\xf6nnen Sie, indem Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt")," (abk\xfcrzung f\xfcr Squareroot, \xfcbersetzt auf deutsch Quadratwurzel) aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," importieren:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from math import sqrt\nforward(100 * sqrt(2))\n")),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(644028).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verschieben Sie den Code, welche das Haus zeichnet, in eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"haus()")," und rufen Sie die Funktion auf, damit ein Haus gezeichnet wird.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Erzeugen Sie nun ein ganzes Quartier mit min. ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," H\xe4usern (Tipp. verwenden Sie eine Schleife). Die H\xe4user sollen zuf\xe4llig positioniert werden."),(0,r.kt)("p",{parentName:"li"},"Die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"randint(-10, 10)")," gibt eine zuf\xe4llige Zahl zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-10")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zur\xfcck."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"pos_x = randint(-10, 10)\npos_y = randint(-10, 10)\ngoto(pos_x, pos_y, draw=False)\n")),(0,r.kt)("p",{parentName:"li"},"Die Positionen sollen zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"-150")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"150")," gesetzt werden."),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(399747).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc4ndern Sie die Funktion so, dass Sie die Gr\xf6sse des Hauses beim Funktionsaufruf mitgeben k\xf6nnen. ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(10)")," soll ein haus mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," zeichnen, ",(0,r.kt)("inlineCode",{parentName:"p"},"haus(100)")," eines mit Seitenbreite ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(170669).Z,mdxType:"Image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie eine farbeige Stadt:"),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(13764).Z,mdxType:"Image"})),(0,r.kt)("p",{parentName:"li"},"Dazu brauchen wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"cycle()"),", welche eine Liste auf einem Drehteller ablegt; nachdem die letzte Farbe verwendet wurde, wird wieder die erste Farbe zur\xfcckgegeben:"),(0,r.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(429993).Z,mdxType:"Image"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from itertools import cycle\ncolors = [\n   'red',\n   'green',\n   'blue'\n]\ncolor_cycle = cycle(colors)\ncolor = next(color_cycle) # => red\ncolor = next(color_cycle) # => green\ncolor = next(color_cycle) # => blue\ncolor = next(color_cycle) # => red\n")),(0,r.kt)("p",{parentName:"li"},"Statt nur drei Farben, k\xf6nnen Sie auch bspw. die Regenbogenfarben verwenden:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"zeichnungen-mit-funktionen-erzeugen"},"Zeichnungen mit Funktionen erzeugen"),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"5 Funktionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"6 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," gibt es ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," Funktionstasten. Wird eine solche geklickt, wird im Skript mit derselben ",(0,r.kt)("inlineCode",{parentName:"p"},"DeviceID")," die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f1"),", bzw. ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f3")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"on_f4")," aufgerufen."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1")," zeichnet ein Haus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2")," ein ",(0,r.kt)("inlineCode",{parentName:"li"},"8"),"eck"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F3")," einen ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"er Stern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F4")," \xe4ndert die Position mit ",(0,r.kt)("inlineCode",{parentName:"li"},"goto()")," zu einem zuf\xe4lligen neuen Punkt."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"7 Auf ",(0,r.kt)("a",{parentName:"p",href:"https://io.gbsl.website/controller"},"https://io.gbsl.website/controller")," k\xf6nnen auch die Steuertasten verwendet werden. Sobald eine solche Taste geklickt wird, wird die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"on_key(data)")," aufgerufen. In ",(0,r.kt)("inlineCode",{parentName:"p"},"data.key")," steht eine der folgenden Texte drin:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")),(0,r.kt)("p",{parentName:"li"},"Mit den Schl\xfcsselw\xf6rtern ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," ist es m\xf6glich, Codeteile nur dann auszuf\xfchren, wenn ein Vergleich zutrifft oder nicht."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'key = "up"\n\nif key == "down":\n   print("Runter")\nelif key == "up":\n   print("Rauf!!")\nelif key == "right":\n   print("Rechts!!")\nelif key == "left":\n   print("Links!")\nelse:\n   print("Unbekannte Richtung!!!")\n\nprint("Fertig")\n')))))),(0,r.kt)("p",null,"   Hier wird \xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," entspricht (nein). Falls nicht, wird mit ",(0,r.kt)("inlineCode",{parentName:"p"},"elif")," eine weitere Bedingung \xfcberpr\xfcft: ob ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," dem Text ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," entspricht (ja). aller einger\xfcckte Code nach Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," ausgef\xfchrt - es wird also ",(0,r.kt)("inlineCode",{parentName:"p"},"Rauf!!")," ausgegeben. Danach springt die Code-Ausf\xfchrung direkt zu Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"14"),"."),(0,r.kt)("p",null,"   Was w\xfcrde ausgegeben wenn auf Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'key = "home"'),' stehen w\xfcrde? Alle Bedingungen w\xfcrden nicht zutreffen, weshalb der "Sonst"-Fall (',(0,r.kt)("inlineCode",{parentName:"p"},"else"),") eintrifft und die Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," ausgef\xfchrt wird."),(0,r.kt)("p",null,"   Schreiben Sie ein Programm, welches bei"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"up")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt nach vorn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach rechts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"down")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," Schritt r\xfcckw\xe4rts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left")," ",(0,r.kt)("inlineCode",{parentName:"p"},"45\xb0")," nach links")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"home")," nach hause (",(0,r.kt)("inlineCode",{parentName:"p"},"home()"),")"),(0,r.kt)("p",{parentName:"li"},"geht."),(0,r.kt)("a",{class:"theorie",href:"https://jupyter.gbsl.website",target:"_blank"},"6: Bedingte Ausf\xfchrung"))))}k.isMDXComponent=!0},426636:function(e,n,t){n.Z=t.p+"assets/files/06_functions-3a9fda513eff6ff1f617e4714f33b3c8.zip"},429993:function(e,n,t){n.Z=t.p+"assets/images/06_cycle-ed37fca4977a34780ccdf9841152734a.gif"},644028:function(e,n,t){n.Z=t.p+"assets/images/06_house-0474f11f2b068a21a4e841e99cfb5f1c.png"},399747:function(e,n,t){n.Z=t.p+"assets/images/06e_house_city-ed3e3fb53455302aeb414a58b3ba3fee.png"},13764:function(e,n,t){n.Z=t.p+"assets/images/06e_house_color-cd2d6cd5968b17ac4a76ac37c21300b5.png"},170669:function(e,n,t){n.Z=t.p+"assets/images/06e_house_size-71f6f3c267949599552a87e320e92bb7.png"}}]);