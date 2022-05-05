"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[25841],{603905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},227292:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var t=r(583117),a=r(480102),i=(r(667294),r(603905)),o=["components"],l={},p="Regenbogen Display",s={unversionedId:"Programmieren-1/Aufgaben/smartphone_rainbow",id:"version-24f/Programmieren-1/Aufgaben/smartphone_rainbow",title:"Regenbogen Display",description:"02smartphonerainbow.zip",source:"@site/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/02_smartphone_rainbow.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/smartphone_rainbow",permalink:"/24f/Programmieren-1/Aufgaben/smartphone_rainbow",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/02_smartphone_rainbow.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Turtle Graphics",permalink:"/24f/Programmieren-1/Aufgaben/turtles"},next:{title:"Ein- und Ausgabe: Aufgabe",permalink:"/24f/Programmieren-1/Aufgaben/io"}},u={},c=[{value:"Verbindung herstellen",id:"verbindung-herstellen",level:2}],m={toc:c};function d(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regenbogen-display"},"Regenbogen Display"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(866605).Z},"02_smartphone_rainbow.zip")),(0,i.kt)("p",null,"Mit der Python-Bibliothek ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/smartphone-connector/"},"smartphone-connector")," kann eine Verbindung mit dem Smartphone aufgebaut werden."),(0,i.kt)("p",null,"\xd6ffnen Sie dazu mit dem Smartphone die Website ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website"},"https://io.gbsl.website")," und geben Sie bei der ",(0,i.kt)("strong",{parentName:"p"},"DeviceID")," Ihren Namen (oder einen Alias-Namen) ein. Diese DeviceID brauchen wir anschliessend, um die Befehle ans richtige Smartphone zu schicken."),(0,i.kt)("p",null,"Es gibt aktuell drei verschiedene Interaktionsm\xf6glichkeiten: ",(0,i.kt)("inlineCode",{parentName:"p"},"Steuertasten"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbdisplay")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbraster"),". Heute verwenden wir nur das ",(0,i.kt)("inlineCode",{parentName:"p"},"Farbdisplay"),"."),(0,i.kt)("h2",{id:"verbindung-herstellen"},"Verbindung herstellen"),(0,i.kt)("p",null,"Mit dem Smartphone auf die ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_panel"},"Farbdisplay"),"-Seite gehen. Das folgende Skript stellt den Bildschirm zuerst auf auf rot und nach 0.5 Sekunden dann auf orange."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Die Bibliothek laden - sie nimmt uns viel Arbeit ab\nfrom smartphone_connector import Connector\n\n\n#                      Hier die DeviceID ihres Smartphones eingeben\n#                                                    \u2193\nconnector = Connector('https://io.gbsl.website', 'DeviceID')\n\n# die Anzeigefarbe auf dem Smartphone auf rot setzen\nconnector.set_color('red')\n\n# 0.5 Sekunden warten\nconnector.sleep(0.5)\n\n# die Anzeigefarbe auf dem Smartphone auf cyan setzen\nconnector.set_color('orange')\n")),(0,i.kt)("h1",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(866605).Z},"Skripts Herunterladen")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Skript, das jede Regenbogenfarbe eine Sekunde lang auf Ihrem Smartphone anzeigt."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,i.kt)("a",{parentName:"p",href:"/24f/Programmieren-1/Turtles/while-loop"},"While-Schleife"),". Versuchen Sie dieses Konzept hier zu verwenden, um die Farbreihenfolge unendlich lange auf dem Smartphone abzuspielen. Sie m\xfcssen dazu eine Bedingung finden, die immer Wahr bleibt.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lesen Sie den Abschnitt \xfcber die ",(0,i.kt)("a",{parentName:"p",href:"/24f/Programmieren-1/Turtles/for-loop"},"For-Schleife"),". Passen Sie ihren Code so an, dass eine ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleife f\xfcr die verschiedenen Farben verwendet wird."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipp"),": folgender zeigt nacheinander die Farben ",(0,i.kt)("em",{parentName:"p"},"schwarz"),", ",(0,i.kt)("em",{parentName:"p"},"weiss")," und ",(0,i.kt)("em",{parentName:"p"},"grau")," an:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for color in ['black', 'white', 'gray']:\n   connector.set_color(color)\n   connector.sleep(0.5)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spielen Sie mit der Anzeigedauer der Farben. K\xf6nnen Sie ein Stroboskop erzeugen? (",(0,i.kt)("strong",{parentName:"p"},"!!Achtung"),", bei Eptileptikern k\xf6nnen solche Strobo-Effekte zu einem Anfall f\xfchren. Sie d\xfcrfen das Strobo-Ger\xe4t daher niemandem ungefragt vorhalten.)"))))}d.isMDXComponent=!0},866605:function(e,n,r){n.Z=r.p+"assets/files/02_smartphone_rainbow-bff079c0785cda106209fc54f5405170.zip"}}]);