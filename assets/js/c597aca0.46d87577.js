"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[82132],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?i.createElement(f,l(l({ref:n},u),{},{components:t})):i.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(667294);function a(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(583117),a=t(667294),r=t(972389),l=t(336162),o=t(386010),s="tabItem_LplD";function d(e){var n,t,r,d=e.lazy,u=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(v),I=N[0],Z=N[1],x=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==I&&h.some((function(e){return e.value===E}))&&Z(E)}var S=function(e){var n=e.currentTarget,t=x.indexOf(n),i=h[t].value;i!==I&&(C(n),Z(i),null!=m&&w(m,i))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=x.indexOf(e.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":u},f)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:S,onClick:S},r,{className:(0,o.default)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function u(e){var n=(0,r.Z)();return a.createElement(d,(0,i.Z)({key:String(n)},e))}},884384:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(592814),l=t(51436),o=t(386010),s=function(e){return i.createElement("span",{className:a.details},i.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,o.default)("badge badge--secondary")},i.createElement(r.G,{icon:l.Xjp}))))},d=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},u=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+d(t.size)+")",n.maxHeight=d(t.size),delete t.size),t.height&&(n.maxHeight=d(t.height),n.height=d(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+d(t.width)+")",n.width=d(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return i.createElement(u,e);var n=i.useState(!1),t=(n[0],n[1]),r=i.useState(!1),l=r[0],d=r[1],c=e.caption&&"undefined"!==e.caption,p=e.bib||c;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,a,r,l;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,a=e.clientY,r=n.left<=i&&n.right>=i,l=n.top<=a&&n.bottom>=a,r&&l||t(!1)}},i.createElement(u,e),p&&i.createElement("figcaption",null,c&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&i.createElement(s,e.bib)))}},285107:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(21073),a=t(667294),r=t(409877),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},812435:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var i=t(583117),a=t(480102),r=(t(667294),t(603905)),l=t(884384),o=t(285107),s=t(358215),d=["components"],u={title:"2. VS Code"},c="VS Code",p={unversionedId:"software-installation/vscode-1.59",id:"software-installation/vscode-1.59",title:"2. VS Code",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/docs/software-installation/vscode-1.59.mdx",sourceDirName:"software-installation",slug:"/software-installation/vscode-1.59",permalink:"/software-installation/vscode-1.59",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/vscode-1.59.mdx",tags:[],version:"current",lastUpdatedAt:1628606969,formattedLastUpdatedAt:"10.8.2021",frontMatter:{title:"2. VS Code"},sidebar:"sidebar",previous:{title:"1. Python",permalink:"/software-installation/python-3.9"}},m={},f=[{value:"Installieren",id:"installieren",level:2},{value:"Konfigurieren",id:"konfigurieren",level:2},{value:"Python Interpreter",id:"python-interpreter",level:3},{value:"Verwenden",id:"verwenden",level:2},{value:"1. Wo ist was?",id:"1-wo-ist-was",level:3},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",level:3},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",level:3},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",level:3},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",level:3}],b={toc:f};function h(e){var n=e.components,u=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vs-code"},"VS Code"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("h2",{id:"installieren"},"Installieren"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unter ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Surface Pro X -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ARM")),(0,r.kt)("li",{parentName:"ul"},"Windows -> ",(0,r.kt)("inlineCode",{parentName:"li"},"64 bit")),(0,r.kt)("li",{parentName:"ul"},"Mac mit M1 Chip -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Apple Silicon")),(0,r.kt)("li",{parentName:"ul"},"Mac OS -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Intel Chip"),(0,r.kt)(l.Z,{bib:void 0,caption:"Download Optionen",options:{},isInline:!0,src:t(371963).Z,alt:"Download Optionen",mdxType:"Image"})))),(0,r.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken"),(0,r.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Installations-Optionen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:t(576333).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:t(218155).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(102178).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:t(155581).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:t(766026).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:t(298006).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:t(86170).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei ist eine komprimierte ",(0,r.kt)("inlineCode",{parentName:"li"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,r.kt)("li",{parentName:"ol"},"Die Datei ",(0,r.kt)("inlineCode",{parentName:"li"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,r.kt)("li",{parentName:"ol"},"Beim ersten \xd6fnnen kommt folgender Hinweis:\n",(0,r.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(136846).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,r.kt)("p",null,"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,r.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,r.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"VS Code Plugins",options:{},isInline:!1,src:t(924916).Z,alt:"VS Code Plugins",mdxType:"Image"})),(0,r.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,r.kt)("p",null,"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,r.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(961013).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"}))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Der ",(0,r.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(598113).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Eine andere Version verwenden"),(0,r.kt)("p",null,"Unter ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,r.kt)("p",null,"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,r.kt)("p",null,"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,r.kt)("h2",{id:"verwenden"},"Verwenden"),(0,r.kt)("p",null,"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,r.kt)("h3",{id:"1-wo-ist-was"},"1. Wo ist was?"),(0,r.kt)("p",null,"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(82421).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(929e3).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,r.kt)("p",null,"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(361749).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,r.kt)("p",null,'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,r.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,r.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(520870).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(825709).Z,mdxType:"Image"})),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},361749:function(e,n,t){n.Z=t.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},520870:function(e,n,t){n.Z=t.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},82421:function(e,n,t){n.Z=t.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},825709:function(e,n,t){n.Z=t.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},929e3:function(e,n,t){n.Z=t.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},136846:function(e,n,t){n.Z=t.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},598113:function(e,n,t){n.Z=t.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},371963:function(e,n,t){n.Z=t.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},924916:function(e,n,t){n.Z=t.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},576333:function(e,n,t){n.Z=t.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},218155:function(e,n,t){n.Z=t.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},102178:function(e,n,t){n.Z=t.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},155581:function(e,n,t){n.Z=t.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},766026:function(e,n,t){n.Z=t.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},298006:function(e,n,t){n.Z=t.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},86170:function(e,n,t){n.Z=t.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},961013:function(e,n,t){n.Z=t.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);