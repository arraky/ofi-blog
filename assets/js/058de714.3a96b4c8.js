"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[34213],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},629181:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=t(583117),a=t(480102),i=(t(667294),t(603905)),l=["components"],o={},u="Zufallszahl",s={unversionedId:"Programmieren-1/Aufgaben/zufalls_zahl",id:"version-24f/Programmieren-1/Aufgaben/zufalls_zahl",title:"Zufallszahl",description:"07zufallszahl.zip",source:"@site/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/07_zufalls_zahl.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/zufalls_zahl",permalink:"/24f/Programmieren-1/Aufgaben/zufalls_zahl",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/04-Programmieren-1/Aufgaben/07_zufalls_zahl.md",tags:[],version:"24f",sidebarPosition:7,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Funktionen",permalink:"/24f/Programmieren-1/Aufgaben/functions"},next:{title:"Sieb des Eratosthenes",permalink:"/24f/Programmieren-1/Aufgaben/grid"}},p={},d=[{value:"Voraussetzung",id:"voraussetzung",level:2},{value:"Aufgabe",id:"aufgabe",level:2},{value:"Vorgehen*",id:"vorgehen",level:2},{value:"Zusatz",id:"zusatz",level:2}],m={toc:d};function c(e){var n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zufallszahl"},"Zufallszahl"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(571413).Z},"07_zufallszahl.zip")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b"},"Tutorial")),(0,i.kt)("h2",{id:"voraussetzung"},"Voraussetzung"),(0,i.kt)("p",null,"Sie haben auf ",(0,i.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/02T_Schleifen.ipynb"},"jupyter.gbsl.website")," das ",(0,i.kt)("inlineCode",{parentName:"p"},"Kapitel 2.1")," gelesen und bearbeitet."),(0,i.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,i.kt)("p",null,"Auf einer langen Autfahrt spielen Maria und Bob das Zufallsspiel:"),(0,i.kt)("p",null,"Maria denkt sich eine Zahl zwischen ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"9")," aus. Err\xe4t Bob die Zahl in den ersten ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," versuchen, so hat er gewonnen, sonst Maria."),(0,i.kt)("p",null,"Aufgabe: Schreiben Sie ein Skript welches den Part von Maria \xfcbernimmt und das Zufallsspiel mit Ihnen spielt."),(0,i.kt)("p",null,"Um mit Python eine Zufallszahl zu erzeugen, brauchen wir die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"randint()")," aus der Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"random"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from random import randint\n\nzufallszahl = randint(0, 9)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merke")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," wird die untere Grenze, mit ",(0,i.kt)("inlineCode",{parentName:"p"},"9")," die obere Grenze festgelegt. F\xfcr eine Zufallszahl zwischen ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," w\xfcrde der Aufruf also ",(0,i.kt)("inlineCode",{parentName:"p"},"randint(10, 100)")," lauten."),(0,i.kt)("h2",{id:"vorgehen"},"Vorgehen","*"),(0,i.kt)("p",null,"Wir brauchen eine Zufallszahl, m\xfcssen immer wissen wie viele Versuche bereits gemacht wurden und welche Zahl aktuell geraten wurde. F\xfcr diese drei Informationen braucht es Variablen."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Weisen Sie der Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"zufallszahl")," eine zuf\xe4llige Zahl zwischen ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"9")," zu."),(0,i.kt)("li",{parentName:"ol"},"Fragen Sie den Bentzer nach einer Zahl und speichern Sie das Resultat in einer Variable, z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"geraten")),(0,i.kt)("li",{parentName:"ol"},"Achtung, die Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"geraten")," muss noch in eine Zahl umgewandelt werden!"),(0,i.kt)("li",{parentName:"ol"},"Das war der erste Versuch! Weisen Sie der Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"versuche")," den Wert ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," zu."),(0,i.kt)("li",{parentName:"ol"},"Solange die geratene Zahl nicht der Zufallszahl entspricht und die Anzahl Versuche noch kleiner als ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," sind, wird erneut nach einer Zufallszahl gefragt und dabei immer die Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"versuch")," um ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," erh\xf6ht."),(0,i.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfen Sie nach der Schleife, ob Sie gewonnen haben, indem mit ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," \xfcberpr\xfcft wird, ob die geratene Zahl der Zufallszahl entspricht. In diesem Fall soll ",(0,i.kt)("inlineCode",{parentName:"li"},"Du gewinnst!!")," ausgegeben werden"),(0,i.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfen Sie weiter, ob die Maschine gewonnen hat, indem mit ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," \xfcberpr\xfcft wird, ob die geratene Zahl ",(0,i.kt)("strong",{parentName:"li"},"nicht")," der Zufallszahl entspricht. In diesem Fall soll ",(0,i.kt)("inlineCode",{parentName:"li"},"Die Maschine gewinnt")," ausgegeben werden.")),(0,i.kt)("h2",{id:"zusatz"},"Zusatz"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie das Skript so um, dass es nach einem Durchlauf wieder neu gestartet wird."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipp")," Erzeugen Sie rund um das ganze Skript (aussert die ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," Zeilen) eine immer wahre ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleife:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},'while True:\n    print("Ich bin immer wahr...")\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Binden Sie die Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"smartphone_connector")," ein und schicken Sie die Fragen und die Sieger-Nachrichten ans Smartphone. Beachten Sie, dass der Verbindungs-Aufbau (",(0,i.kt)("inlineCode",{parentName:"p"},"phone = Connector..."),") nur genau ein Mal gemacht werden sollte."),(0,i.kt)("p",{parentName:"li"},"Da Sie bereits wissen, dass der Benutzer eine Zahl eingeben soll, kann dies auch mitgegeben werden, so dass auf dem Smartphone eine Zahlen-Tastatur angezeigt wird. ",(0,i.kt)("strong",{parentName:"p"},"Achtung")," der R\xfcckgabewert ist dennoch ein Text."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from smartphone_connector import Connector\n\nphone = Connector("https://io.gbsl.website", "FooBar")\ngeraten = phone.input("Zufallszhal? ", input_type="number")\n')),(0,i.kt)("p",{parentName:"li"},"Zudem soll die Gewinner-Benachrichtigung vom Benutzer best\xe4tigt werden m\xfcssen. Dazu rufen Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," statt ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," auf."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},'phone.alert("Du gewinnst!")\n')))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"*"," Falls Ihnen die erste Aufgabe nicht gelingt: hier eine Video Anleitung dazu. Achtung, versuchen Sie es zuerst mit der Anleitung."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.microsoftstream.com/video/a4c24aa1-7a96-4025-944c-a0eb482ec35b"},"Video Anleitung")))}c.isMDXComponent=!0},571413:function(e,n,t){n.Z=t.p+"assets/files/07_zufallszahl-caf1d243b5e8569f1e2d45ba10506190.zip"}}]);