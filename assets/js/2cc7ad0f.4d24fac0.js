"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[65448],{603905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return p}});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=s(r),p=a,f=c["".concat(o,".").concat(p)]||c[p]||d[p]||l;return r?t.createElement(f,i(i({ref:n},m),{},{components:r})):t.createElement(f,i({ref:n},m))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72360:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(667294),a=r(386010),l="tabItem_OmH5";function i(e){var n=e.children,r=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,a.default)(l,i),hidden:r},n)}},409877:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(583117),a=r(667294),l=r(972389),i=r(867392),u=r(707094),o=r(212466),s=r(386010),m="tabList_uSqn",d="tabItem_LplD";function c(e){var n,r,l,c=e.lazy,p=e.block,f=e.defaultValue,g=e.values,h=e.groupId,k=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var D=(0,u.U)(),w=D.tabGroupChoices,O=D.setTabGroupChoices,F=(0,a.useState)(y),E=F[0],_=F[1],P=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var z=w[h];null!=z&&z!==E&&b.some((function(e){return e.value===z}))&&_(z)}var C=function(e){var n=e.currentTarget,r=P.indexOf(n),t=b[r].value;t!==E&&(T(n),_(t),null!=h&&O(h,t))},x=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=P.indexOf(e.currentTarget)+1;r=P[t]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;r=P[a]||P[P.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:(0,s.default)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":p},k)},b.map((function(e){var n=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return P.push(e)},onKeyDown:x,onFocus:C,onClick:C},l,{className:(0,s.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===n})}),null!=r?r:n)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function p(e){var n=(0,l.Z)();return a.createElement(c,(0,t.Z)({key:String(n)},e))}},285107:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(21073),a=r(667294),l=r(409877),i=function(e){function n(){return e.apply(this,arguments)||this}return(0,t.Z)(n,e),n.prototype.render=function(){return a.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},765648:function(e,n,r){r.d(n,{Z:function(){return k}});var t=r(144415),a=r(21073),l=r(191189),i=r(667294),u=r(592814),o="videoComponent_YfiL",s="headerClosed_s_Of",m="headerOpen_AzNA",d="minimize_pBQC",c="description_p2GN",p="title_YxV5",f="cardOpen_IEP6",g=r(51436),h=r(386010),k=function(e){function n(){for(var n,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=e.call.apply(e,[this].concat(a))||this,(0,l.Z)((0,t.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,l.Z)((0,t.Z)(n),"videoRef",i.createRef()),(0,l.Z)((0,t.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),r=e.top,t=e.bottom;r<window.innerHeight&&t>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,l.Z)((0,t.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,a.Z)(n,e);var r=n.prototype;return r.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},r.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},r.render=function(){var e=this.props,n=e.title,r=e.src,t=e.type,a=e.children;return i.createElement("div",{ref:this.videoRef,className:o},this.state.open?i.createElement("div",{className:f},i.createElement("div",{className:m},n&&i.createElement("h5",{className:p},n),!this.props.expanded&&i.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},i.createElement(u.G,{icon:g.IQi})),a&&i.createElement("div",{className:c},a)),this.state.visible?i.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},i.createElement("source",{src:r,type:"video/"+(t||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(u.G,{icon:g.IJ7,spin:!0}))):i.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.createElement("div",{className:s},i.createElement("div",{className:p},n||"Video"),a&&i.createElement("div",{className:c},a)),this.state.visible?i.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},i.createElement("source",{src:r,type:"video/"+(t||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(u.G,{icon:g.IJ7,spin:!0}))))},n}(i.Component)},354641:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var t=r(583117),a=r(480102),l=(r(667294),r(603905)),i=r(285107),u=(r(644996),r(765648),r(72360)),o=(r(592814),["components"]),s={},m="\u270d\ufe0f Pr\xfcfungsfragen",d={unversionedId:"BYOD-Basics/pruefungsfragen",id:"version-24i/BYOD-Basics/pruefungsfragen",title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/versioned_docs/version-24i/02-BYOD-Basics/007-pruefungsfragen.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/pruefungsfragen",permalink:"/24i/BYOD-Basics/pruefungsfragen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/02-BYOD-Basics/007-pruefungsfragen.mdx",tags:[],version:"24i",sidebarPosition:7,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Software",permalink:"/24i/BYOD-Basics/software"},next:{title:"1. Python",permalink:"/24i/Software/python"}},c={},p=[{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Frage 1",id:"frage-1",level:2},{value:"Frage 2",id:"frage-2",level:2},{value:"Frage 3",id:"frage-3",level:2},{value:"Frage 4",id:"frage-4",level:2},{value:"Frage 5",id:"frage-5",level:2},{value:"Frage 6",id:"frage-6",level:2},{value:"Frage 7",id:"frage-7",level:2},{value:"Frage 8",id:"frage-8",level:2},{value:"Frage 9",id:"frage-9",level:2},{value:"Frage 10",id:"frage-10",level:2},{value:"Frage 11",id:"frage-11",level:2},{value:"Frage 12",id:"frage-12",level:2},{value:"Frage 13",id:"frage-13",level:2},{value:"Frage 14",id:"frage-14",level:2},{value:"Frage 15",id:"frage-15",level:2},{value:"Frage 16",id:"frage-16",level:2},{value:"Frage 17",id:"frage-17",level:2},{value:"Frage 18",id:"frage-18",level:2},{value:"Frage 19",id:"frage-19",level:2},{value:"Frage 20",id:"frage-20",level:2},{value:"Frage 21",id:"frage-21",level:2},{value:"Frage 22",id:"frage-22",level:2},{value:"Frage 23",id:"frage-23",level:2},{value:"Frage 24",id:"frage-24",level:2},{value:"Frage 25",id:"frage-25",level:2},{value:"Frage 26",id:"frage-26",level:2},{value:"Frage 27",id:"frage-27",level:2},{value:"Frage 28",id:"frage-28",level:2},{value:"Frage 29",id:"frage-29",level:2},{value:"Frage 30",id:"frage-30",level:2}],f={toc:p};function g(e){var n=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,l.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,l.kt)("li",{parentName:"ul"},"Material ",(0,l.kt)("a",{target:"_blank",href:r(799856).Z},"material_byod.zip")," herunterladen"),(0,l.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"frage-1"},"Frage 1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,l.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,l.kt)("h2",{id:"frage-2"},"Frage 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,l.kt)("h2",{id:"frage-3"},"Frage 3"),(0,l.kt)(i.Z,{mdxType:"OsTabs"},(0,l.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,l.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Eine Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,l.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,l.kt)("h2",{id:"frage-4"},"Frage 4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,l.kt)("h2",{id:"frage-5"},"Frage 5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Programm mit dem Namen "fledermaus" hinzuf\xfcgen')),(0,l.kt)("h2",{id:"frage-6"},"Frage 6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,l.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,l.kt)("h2",{id:"frage-7"},"Frage 7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"sonnenuntergang.docx" \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt nur mit Tasten-Shortcuts)"),(0,l.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,l.kt)("li",{parentName:"ul"},"Den ganzen zweiten Abschnitt ausw\xe4hlen und l\xf6schen"),(0,l.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,l.kt)("h2",{id:"frage-8"},"Frage 8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finder und das Mail-Programm \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,l.kt)("h2",{id:"frage-9"},"Frage 9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,l.kt)("h2",{id:"frage-10"},"Frage 10"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'Das Programm "create_mesh" \xf6ffnen, den ganzen Code kopieren'),(0,l.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-11"},"Frage 11"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,l.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,l.kt)("h2",{id:"frage-12"},"Frage 12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,l.kt)("h2",{id:"frage-13"},"Frage 13"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,l.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-14"},"Frage 14"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,l.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,l.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,l.kt)("h2",{id:"frage-15"},"Frage 15"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt mit Tasten-Shortcuts)"),(0,l.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,l.kt)("li",{parentName:"ul"},"abspeichern"),(0,l.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,l.kt)("h2",{id:"frage-16"},"Frage 16"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},"(ab jetzt mit Tastenk\xfcrzel)"),(0,l.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,l.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,l.kt)("li",{parentName:"ul"},"abspeichern")),(0,l.kt)("h2",{id:"frage-17"},"Frage 17"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Das Programm "create_mesh.py" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'Nach dem Wort "SQRT3" suchen. Wie oft kommt es im Programm vor?')),(0,l.kt)("h2",{id:"frage-18"},"Frage 18"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,l.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,l.kt)("h2",{id:"frage-19"},"Frage 19"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,l.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,l.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,l.kt)("h2",{id:"frage-20"},"Frage 20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Milch kaufen"')),(0,l.kt)("h2",{id:"frage-21"},"Frage 21"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-22"},"Frage 22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-23"},"Frage 23"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,l.kt)("h2",{id:"frage-24"},"Frage 24"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,l.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2020 setzen"),(0,l.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,l.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-25"},"Frage 25"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,l.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,l.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,l.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,l.kt)("h2",{id:"frage-26"},"Frage 26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,l.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,l.kt)("h2",{id:"frage-27"},"Frage 27"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,l.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,l.kt)("h2",{id:"frage-28"},"Frage 28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,l.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,l.kt)("h2",{id:"frage-29"},"Frage 29"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,l.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,l.kt)("h2",{id:"frage-30"},"Frage 30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,l.kt)("li",{parentName:"ul"},'Im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen')))}g.isMDXComponent=!0},799856:function(e,n,r){n.Z=r.p+"assets/files/material_byod_v24-728aae2f4f6e98014955e8e92ac8bbcd.zip"},144415:function(e,n,r){function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return t}})}}]);