"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2139],{58215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(83117),i=t(67294),s=t(72389),l=t(36162),r=t(86010),d="tabItem_LplD";function o(e){var n,t,s,o=e.lazy,p=e.block,c=e.defaultValue,m=e.values,u=e.groupId,f=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=k[0])?void 0:s.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),y=h.tabGroupChoices,x=h.setTabGroupChoices,w=(0,i.useState)(v),Z=w[0],N=w[1],T=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var D=y[u];null!=D&&D!==Z&&b.some((function(e){return e.value===D}))&&N(D)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==Z&&(I(n),N(a),null!=u&&x(u,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;t=T[i]||T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":p},f)},b.map((function(e){var n=e.value,t=e.label,s=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:C,onClick:C},s,{className:(0,r.default)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(k.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function p(e){var n=(0,s.Z)();return i.createElement(o,(0,a.Z)({key:String(n)},e))}},85107:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(21073),i=t(67294),s=t(9877),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,a.Z)(n,e),n.prototype.render=function(){return i.createElement(s.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(i.Component)},23873:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var a=t(83117),i=t(80102),s=(t(67294),t(3905)),l=t(84384),r=t(9877),d=t(85107),o=t(58215),p=["components"],c={title:"3D Schl\xfcsselanh\xe4nger"},m="QR-Code 3D-Drucken",u={unversionedId:"QR-Codes/qr",id:"version-24f/QR-Codes/qr",title:"3D Schl\xfcsselanh\xe4nger",description:"Mit einem 3D-Drucker lassen sich dreidimensionale Objekte erzeugen. Dabei arbeiten alle g\xe4ngigen Druckverfahren schichtweise - das Objekt wird aus mehreren Schichten zusammengesetzt, wobei eine einzelne Schicht zweidimensional auf die darunterliegende Schicht aufgetragen wird.",source:"@site/versioned_docs/version-24f/20-QR-Codes/qr.md",sourceDirName:"20-QR-Codes",slug:"/QR-Codes/qr",permalink:"/24f/QR-Codes/qr",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/20-QR-Codes/qr.md",tags:[],version:"24f",frontMatter:{title:"3D Schl\xfcsselanh\xe4nger"},sidebar:"version-24f/sidebar",previous:{title:"2. Informationsgehalt",permalink:"/24f/Codes und Daten/compression/redundancy"}},f={},k=[{value:"QR Code 3D-Modell",id:"qr-code-3d-modell",level:2},{value:"Slicer installieren",id:"slicer-installieren",level:2},{value:"3D-Modell erstellen: Tinkercad",id:"3d-modell-erstellen-tinkercad",level:2},{value:"Druck vorbereiten im Slicer",id:"druck-vorbereiten-im-slicer",level:2}],b={toc:k};function g(e){var n=e.components,c=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},b,c,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"qr-code-3d-drucken"},"QR-Code 3D-Drucken"),(0,s.kt)("p",null,"Mit einem 3D-Drucker lassen sich dreidimensionale Objekte erzeugen. Dabei arbeiten alle g\xe4ngigen Druckverfahren schichtweise - das Objekt wird aus mehreren Schichten zusammengesetzt, wobei eine einzelne Schicht zweidimensional auf die darunterliegende Schicht aufgetragen wird."),(0,s.kt)("div",{style:{textAlign:"center"},className:"flex flex-cards"},(0,s.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))",textAlign:"center"},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"anonymous",source:"https://makeagif.com/gif/satisfying-3d-prints-timelapse-episode-3-prusa-i3-mk3-octolapse-xD2zCF?origin=tag&source=3Dprint&order=best&page=5&position=4",licence:"CC0",licence_url:"https://makeagif.com/terms",edited:!1},caption:"",options:{width:"100%"},isInline:!1,src:t(17069).Z,alt:"--width=100%",mdxType:"Image"})))),(0,s.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))",textAlign:"center"},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"@daftturtle",source:"https://gfycat.com/artisticsolidjunco-mandalorian-3d-printing-timelapse-baby-yoda",licence:"CC0",licence_url:"https://gfycat.com/faq",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(4702).Z,mdxType:"Image"})))),(0,s.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"redd.it",source:"https://gfycat.com/clearcutmiserableamericanredsquirrel",licence:"CC0",licence_url:"https://gfycat.com/faq",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(52990).Z,mdxType:"Image"})))),(0,s.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:{author:"WildRoseBuilds",source:"https://gfycat.com/decimalcreepyanaconda-kickass3dprints-best3dprints-3d-printing",licence:"CC0",licence_url:"https://gfycat.com/faq",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(50015).Z,mdxType:"Image"}))))),(0,s.kt)("p",null,"Um ein Objekt zu drucken, muss in einem ersten Schritt ein ",(0,s.kt)("strong",{parentName:"p"},"3D-Modell")," erstellt werden und in einem zweiten Schritt muss dieses Modell in einen konkreten ",(0,s.kt)("strong",{parentName:"p"},"Druck-Ablaufplan")," erstellt werden, welcher Schicht-f\xfcr-Schicht vorgibt, wo sich der Druck-Kopf durchbewegen soll. Dazu werden zwei Tools gebraucht:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"3D Modell erstellen und bearbeiten mit ",(0,s.kt)("a",{parentName:"li",href:"https://www.tinkercad.com/"},"tinkercad.com")),(0,s.kt)("li",{parentName:"ul"},"Druck-Ablaufplan Plan f\xfcr das Modell berechnen und die Farben ausw\xe4hlen mit dem ",(0,s.kt)("a",{parentName:"li",href:"https://www.prusa3d.com/de/page/prusaslicer_424/"},"Slicer"))),(0,s.kt)("h2",{id:"qr-code-3d-modell"},"QR Code 3D-Modell"),(0,s.kt)("p",null,"Das Grundger\xfcst f\xfcr den QR-Code kann direkt \xfcber die Webapplikation von ",(0,s.kt)("a",{parentName:"p",href:"https://printer.tools/qrcode2stl/"},"https://printer.tools/qrcode2stl/")," erzeugt werden."),(0,s.kt)(r.Z,{defaultValue:"step-1",values:[{label:"QR Code",value:"step-1"},{label:"3D Model",value:"step-2"},{label:"Speichern",value:"step-3"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"step-1",mdxType:"TabItem"},(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"QR Code Options",options:{maxWidth:"min(100%,500px)"},isInline:!1,src:t(36990).Z,alt:"QR Code Options --max-width=min(100%,500px)",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-2",mdxType:"TabItem"},(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"3D Model Options",options:{maxWidth:"min(100%,500px)"},isInline:!1,src:t(19003).Z,alt:"3D Model Options --max-width=min(100%,500px)",mdxType:"Image"})),(0,s.kt)("p",null,"und das Modell generieren:"),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"",options:{maxWidth:"min(100%,150px)"},isInline:!1,src:t(22089).Z,alt:"--max-width=min(100%,150px)",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-3",mdxType:"TabItem"},(0,s.kt)("p",null,"Die einzelnen Teile des Modells k\xf6nnen als ",(0,s.kt)("inlineCode",{parentName:"p"},".zip"),"-Ordner heruntergeladen werden. Dazu muss die Option ",(0,s.kt)("strong",{parentName:"p"},"Separate Parts")," aktiviert sein."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"STL Herunterladen",options:{maxWidth:"500px"},isInline:!1,src:t(87546).Z,alt:"STL Herunterladen --max-width=500px",mdxType:"Image"})))),(0,s.kt)("p",null,"Der heruntergeladene ",(0,s.kt)("inlineCode",{parentName:"p"},".zip"),"-Ordner enth\xe4lt die einzelnen Teile des 3D-Modells, so auch den QR-Code selbst: ",(0,s.kt)("inlineCode",{parentName:"p"},"qrcode-1645205191753.stl"),":"),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"Das Modell des QR-Codes",options:{maxWidth:"400px"},isInline:!1,src:t(80165).Z,alt:"Das Modell des QR-Codes --max-width=400px",mdxType:"Image"})),(0,s.kt)("h2",{id:"slicer-installieren"},"Slicer installieren"),(0,s.kt)("p",null,"Der ",(0,s.kt)("a",{parentName:"p",href:"https://www.prusa3d.com/de/page/prusaslicer_424/"},"Prusa Slicer")," wird f\xfcr den 3D-Druck an der Schule verwendet. Laden Sie ihn herunter und installieren Sie ihn: ",(0,s.kt)("a",{parentName:"p",href:"https://www.prusa3d.com/de/page/prusaslicer_424/"},"https://www.prusa3d.com/de/page/prusaslicer_424/")),(0,s.kt)(r.Z,{defaultValue:"step-1",values:[{label:"1.",value:"step-1"},{label:"2.",value:"step-2"},{label:"\u26a0\ufe0f 3.",value:"step-3"},{label:"4.",value:"step-4"},{label:"5.",value:"step-5"},{label:"6.",value:"step-6"},{label:"7.",value:"step-7"},{label:"8.",value:"step-8"},{label:"9.",value:"step-9"},{label:"10.",value:"step-10"},{label:"11.",value:"step-11"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"step-1",mdxType:"TabItem"},(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"Installieren",options:{},isInline:!1,src:t(67789).Z,alt:"Installieren",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-2",mdxType:"TabItem"},(0,s.kt)("p",null,"\xdcberspringen...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(18974).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-3",mdxType:"TabItem"},(0,s.kt)("p",null,"Original Prusa i3 MK3S & MK3S MMU2S mit der D\xfcse ",(0,s.kt)("inlineCode",{parentName:"p"},"0.4mm")," ausw\xe4hlen. Alle anderen Drucker k\xf6nnen abgew\xe4hlt werden.\n",(0,s.kt)(l.Z,{bib:void 0,caption:"Original Prusa i3 MK3S & MK3S MMU2S",options:{},isInline:!0,src:t(76377).Z,alt:"Original Prusa i3 MK3S & MK3S MMU2S",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-4",mdxType:"TabItem"},(0,s.kt)("p",null,"\xdcberspringen...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(57131).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-5",mdxType:"TabItem"},(0,s.kt)("p",null,"\xdcberspringen...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(76583).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-6",mdxType:"TabItem"},(0,s.kt)("p",null,"\xdcberspringen...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(50557).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-7",mdxType:"TabItem"},(0,s.kt)("p",null,"\xdcberspringen...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"Standard-Einstellungen passen",options:{},isInline:!0,src:t(15720).Z,alt:"Standard-Einstellungen passen",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-8",mdxType:"TabItem"},(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(49888).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-9",mdxType:"TabItem"},(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(95840).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-10",mdxType:"TabItem"},(0,s.kt)("p",null,"Experten-Modus ausw\xe4hlen, damit f\xfcr jede Farbe ein anderes Filament gew\xe4hlt werden kann.\n",(0,s.kt)(l.Z,{bib:void 0,caption:"Experten-Modus",options:{},isInline:!0,src:t(17623).Z,alt:"Experten-Modus",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-11",mdxType:"TabItem"},(0,s.kt)("p",null,'Den richtigen Drucker ausw\xe4hlen und die Option des Mehrfarbendrucks ausw\xe4hlen. Zudem soll immer im "Draft"-Modus gedruckt werden.\n',(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(3050).Z,mdxType:"Image"})))),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"offene-kanten"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Offene Kanten")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Leider gibt es unterschiedliche Konventionen f\xfcr die Erzeugung von 3D-Objektmodellen. Obwohl unser erzeugter QR-Code auf den ersten Blick gut aussieht, wurden bei der Erzeugung nicht alle Kanten miteinander verbunden, so dass einige Fl\xe4chen im Modell nicht abgeschlossen sind. Dies kann automatisch behoben werden:"),(0,s.kt)(d.Z,{mdxType:"OsTabs"},(0,s.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)("p",{parentName:"div"},"Die heruntergeladene Datei im ",(0,s.kt)("a",{parentName:"p",href:"https://www.prusa3d.com/de/page/prusaslicer_424/"},"slicer")," \xf6ffnen."),(0,s.kt)("p",{parentName:"div"},"Es wird ein Warn-Symbol angezeigt - durch ",(0,s.kt)("strong",{parentName:"p"},"Doppelklicken")," auf das Symbol k\xf6nnen die Fehler korrigiert werden.\n",(0,s.kt)(l.Z,{bib:void 0,caption:"Doppelklicken auf das Symbol",options:{},isInline:!0,src:t(56829).Z,alt:"Doppelklicken auf das Symbol",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("p",{parentName:"div"},"Mac OSX bietet aktuell keine M\xf6glichkeit, unvollst\xe4ndige 3D-Objekte zu flicken. Deshalb muss ein Web-Dienst verwendet werden:"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",{parentName:"p",href:"https://tools3d.azurewebsites.net/"},"https://tools3d.azurewebsites.net/")),(0,s.kt)("p",{parentName:"div"},"!! Es muss ein privates Microsoft-Konto verwendet werden, die gesch\xe4ftliche Schul-Email Adresse funktioniert leider nicht."),(0,s.kt)("p",{parentName:"div"},"Dort kann die ",(0,s.kt)("inlineCode",{parentName:"p"},".stl")," Datei hochgeladen, repariert und wieder heruntergeladen werden."))),(0,s.kt)("p",{parentName:"div"},"Das Dateiformat \xe4ndert sich durch die Reparatur zu ",(0,s.kt)("inlineCode",{parentName:"p"},".3mf"),". Um im n\xe4chsten Schritt das 3D-Modell selber anzupassen, muss das Dateiformat aber wieder auf ",(0,s.kt)("inlineCode",{parentName:"p"},".stl")," ge\xe4ndert werden. Dies gelingt mit dem ",(0,s.kt)("a",{parentName:"p",href:"https://www.prusa3d.com/de/page/prusaslicer_424/"},"slicer"),", welcher  ",(0,s.kt)("inlineCode",{parentName:"p"},".3mf")," in ",(0,s.kt)("inlineCode",{parentName:"p"},".stl")," Dateien konvertieren kann:"),(0,s.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(22576).Z,mdxType:"Image"})))),(0,s.kt)("h2",{id:"3d-modell-erstellen-tinkercad"},"3D-Modell erstellen: Tinkercad"),(0,s.kt)("p",null,'Das geflickte Modell kann nun in Tinkercad weiter bearbeitet werden. Melden Sie sich bei Ihrer Klasse mit ihrem "Nickname" bestehend aus ',(0,s.kt)("inlineCode",{parentName:"p"},"vorname.nachname")," an."),(0,s.kt)(r.Z,{defaultValue:"k24f",values:[{label:"24f",value:"k24f"},{label:"25h",value:"k25h"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"k24f",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.tinkercad.com/joinclass/1W8JWGIB7DWG"},"https://www.tinkercad.com/joinclass/1W8JWGIB7DWG"))),(0,s.kt)(o.Z,{value:"k25h",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.tinkercad.com/joinclass/A6REDIBCKQFB"},"https://www.tinkercad.com/joinclass/A6REDIBCKQFB")))),(0,s.kt)(r.Z,{defaultValue:"step-1",values:[{label:"1.",value:"step-1"},{label:"2.",value:"step-2"},{label:"3.",value:"step-3"},{label:"4.",value:"step-4"},{label:"5.",value:"step-5"},{label:"6.",value:"step-6"},{label:"7.",value:"step-7"},{label:"8.",value:"step-8"},{label:"9.",value:"step-9"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"step-1",mdxType:"TabItem"},(0,s.kt)("p",null,"Das im Slicer geflickte und zu ",(0,s.kt)("inlineCode",{parentName:"p"},".stl")," exportierte Modell kann nun in Tinkercad weiter bearbeitet werden. Dazu muss es ",(0,s.kt)("strong",{parentName:"p"},"importiert")," werden. Die Standardeinstellungen beim Importieren passen."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"Import",options:{},isInline:!1,src:t(89431).Z,alt:"Import",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-2",mdxType:"TabItem"},(0,s.kt)("p",null,"Durch Klicken auf einen weissen Ecken k\xf6nnen die Dimensionen eingegeben werden. ",(0,s.kt)("inlineCode",{parentName:"p"},"21x21 mm")," sind eine gute Referenz."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"21x21 mm",options:{},isInline:!1,src:t(61770).Z,alt:"21x21 mm",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-3",mdxType:"TabItem"},(0,s.kt)("p",null,"Auch die H\xf6he kann eingegeben werden. Der QR-Code soll minim h\xf6her sein als der umliegende Teil. Deshalb wird die H\xf6he auf ",(0,s.kt)("inlineCode",{parentName:"p"},"2.02")," mm festgelegt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"2.02 mm H\xf6he",options:{},isInline:!1,src:t(87705).Z,alt:"2.02 mm H\xf6he",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-4",mdxType:"TabItem"},(0,s.kt)("p",null,'Nun muss eine umgebende Form hinzugef\xfcgt werden. Dazu kann unter "Shape Generators" eine ',(0,s.kt)("inlineCode",{parentName:"p"},"Softbox")," in die Arbeitsfl\xe4che gezogen werden."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"25x30 mm")," sind eine angemessene gr\xf6sse."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"25x30 mm",options:{},isInline:!1,src:t(85513).Z,alt:"25x30 mm",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-5",mdxType:"TabItem"},(0,s.kt)("p",null,"Die H\xf6he wird nun auf ",(0,s.kt)("inlineCode",{parentName:"p"},"2 mm")," festgelegt, also ",(0,s.kt)("inlineCode",{parentName:"p"},"0.02 mm")," weniger hoch als der QR-Code. Dadurch sollte der QR-Code von beiden Seiten her lesbar sein."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"2mm dicke",options:{},isInline:!1,src:t(67498).Z,alt:"2mm dicke",mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-6",mdxType:"TabItem"},(0,s.kt)("p",null,"Nun wird noch der leere Teil grossfl\xe4chig ausgef\xfcllt mit einer soliden Box von ",(0,s.kt)("inlineCode",{parentName:"p"},"2 mm")," H\xf6he ausgef\xfcllt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(9760).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-7",mdxType:"TabItem"},(0,s.kt)("p",null,"Die Box positionieren...\n",(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:t(76717).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-8",mdxType:"TabItem"},(0,s.kt)("p",null,'Der Schl\xfcsselanh\xe4nger braucht ein Loch - das Einf\xfcgen eines "negativen" Zylinders im oberen Teil ist genau das, was wir suchen. Im Beispiel werden ',(0,s.kt)("inlineCode",{parentName:"p"},"3.3x5 mm")," verwendet."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(49175).Z,mdxType:"Image"}))),(0,s.kt)(o.Z,{value:"step-9",mdxType:"TabItem"},(0,s.kt)("p",null,"Alles exportieren. ",(0,s.kt)("strong",{parentName:"p"},"Wichtig!!"),": die Option ",(0,s.kt)("inlineCode",{parentName:"p"},"Include Eveything in the design")," muss ausgew\xe4hlt sein."),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"qr-code-pr\xfcfen"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"QR-Code pr\xfcfen")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie mit einem QR-Codescanner, ob der QR-Code funktioniert. Evtl. m\xfcssen Sie Farben mit einem hohen Kontrast w\xe4hlen."))),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(5917).Z,mdxType:"Image"})))),(0,s.kt)("h2",{id:"druck-vorbereiten-im-slicer"},"Druck vorbereiten im Slicer"),(0,s.kt)("p",null,"Im letzten Schritt wird nun der Druck vorbereitet. Das exportierte ",(0,s.kt)("inlineCode",{parentName:"p"},".stl")," Modell wird mit dem Prusa Slicer ge\xf6ffnet. Nun k\xf6nnen die unterschiedlichen Fl\xe4chen mit dem gew\xfcnschten Filament belegt werden:"),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(59984).Z,mdxType:"Image"})),(0,s.kt)("p",null,'Schliesslich kann das Modell "geslicet" werden und als ',(0,s.kt)("strong",{parentName:"p"},"G-Code")," f\xfcr den Drucker heruntergeladen werden."),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"3mf-dateien-zusammenf\xfcgen"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,s.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),".3mf Dateien zusammenf\xfcgen")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Damit mehrere Modelle in einem Umgang gedruckt werden k\xf6nnen, m\xfcssen die entsprechenden Modelle zusammengef\xfcgt werden. Dazu muss das Projekt im ",(0,s.kt)("inlineCode",{parentName:"p"},".3mf"),"-Format gespeichert werden."),(0,s.kt)("p",{parentName:"div"},"Diejenige Person, welche alle Modelle zusammenf\xfcgt, importiert die entsprechenden ",(0,s.kt)("inlineCode",{parentName:"p"},".3mf")," Dateien der anderen Gruppen und positioniert die Objekte auf der Druckplatte ohne \xdcberlagerung."))))}g.isMDXComponent=!0},22576:function(e,n,t){n.Z=t.p+"assets/images/3mf-to-stl-366b9147332ee10c23b6e0c845f31613.png"},17069:function(e,n,t){n.Z=t.p+"assets/images/prusa-timelapse-01-b9f1a1015ee9d728184faad90e561d6d.gif"},4702:function(e,n,t){n.Z=t.p+"assets/images/prusa-timelapse-02-0cabd05d00b24b28ad7e3c4733a6b943.gif"},52990:function(e,n,t){n.Z=t.p+"assets/images/prusa-timelapse-03-24a6c24abe53b882ae4a679106d1bc80.gif"},50015:function(e,n,t){n.Z=t.p+"assets/images/prusa-timelapse-04-67e7318ba2d67165cfa309de9fd5a644.gif"},56829:function(e,n,t){n.Z=t.p+"assets/images/qr-fix-win-a0b0f9ae6d078954abc413d5eaa94f45.png"},36990:function(e,n,t){n.Z=t.p+"assets/images/qr01-4c05cff284c2cb69b4aa4a856136a8d5.png"},19003:function(e,n,t){n.Z=t.p+"assets/images/qr02-99b6a99c8504abd5d016b56a182f99e6.png"},22089:function(e,n,t){n.Z=t.p+"assets/images/qr03-82561285ecb6f5dbae2c0078b7768d5f.png"},87546:function(e,n,t){n.Z=t.p+"assets/images/qr04-b413c06618f0cc3cce61e5a6d4c08a2a.png"},80165:function(e,n,t){n.Z=t.p+"assets/images/qr05-43bb4e0f4a4e94ed30a444944e1eb631.png"},59984:function(e,n,t){n.Z=t.p+"assets/images/slicer-01-0cf68ba1df054a6d073b0f79232696af.png"},67789:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-01-6055a2d9f5aa56d46963bcd4ace07164.png"},18974:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-03-903d1e9c8bf8f2b77fe2cf986b1a3c35.png"},76377:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-04-59d077ab4e8708cad75c7a00b26a4209.png"},57131:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-05-c565a7fd86252fc889b9e4614beed1da.png"},76583:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-06-5d45eed5de8567734cc193364844d0cb.png"},50557:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-07-bca9f840d8a56a681a407a88ae747c40.png"},15720:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-08-085cd9bb29301d40700cfcde69b47dd9.png"},49888:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-09-7cbdefdfa227017851f91b09e5b6993b.png"},95840:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-10-4d8cff6d64d51cfe5494f9381ebb108e.png"},17623:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-11-061164bcbf3d2e0071a1a7fc13eeb5df.png"},3050:function(e,n,t){n.Z=t.p+"assets/images/slicer-install-12-b8b3dee585945e63d674bc602192fb4e.png"},89431:function(e,n,t){n.Z=t.p+"assets/images/tinker-01-d771dd648e2952f590457552f0ad52e8.png"},61770:function(e,n,t){n.Z=t.p+"assets/images/tinker-02-9be60e9712018dfb11513b981662bb7c.png"},87705:function(e,n,t){n.Z=t.p+"assets/images/tinker-02b-f962ba7b28662972ffa38769426d278d.png"},85513:function(e,n,t){n.Z=t.p+"assets/images/tinker-03-8df6705f3666a4fc2461d32ef7d57dfc.png"},67498:function(e,n,t){n.Z=t.p+"assets/images/tinker-03b-892ab35d3b74f600229176a1ed6361e1.png"},9760:function(e,n,t){n.Z=t.p+"assets/images/tinker-04-b85a12ad34d5f9c40faa1f0ef1036c72.png"},76717:function(e,n,t){n.Z=t.p+"assets/images/tinker-04b-86052f9eb095c1b64478da76f17d85eb.png"},49175:function(e,n,t){n.Z=t.p+"assets/images/tinker-05-a344dd293a0f68139e250eea19368a61.png"},5917:function(e,n,t){n.Z=t.p+"assets/images/tinker-06-export-68763c25f73501aa19199c5a8125f562.png"}}]);