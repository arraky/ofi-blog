"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||c[u]||r;return n?i.createElement(h,s(s({ref:t},m),{},{components:n})):i.createElement(h,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),a=n(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.default)(r,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(83117),a=n(67294),r=n(86010),s=n(72389),l=n(67392),o=n(7094),d=n(12466);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n;const{lazy:s,block:p,defaultValue:u,values:h,groupId:k,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===u?u:null!=(t=null!=u?u:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[x,Z]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:z}=(0,d.o5)();if(null!=k){const e=y[k];null!=e&&e!==x&&b.some((t=>t.value===e))&&Z(e)}const _=e=>{const t=e.currentTarget,n=T.indexOf(t),i=b[n].value;i!==x&&(z(t),Z(i),null!=k&&N(k,String(i)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var i;const t=T.indexOf(e.currentTarget)+1;n=null!=(i=T[t])?i:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.default)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":p},f)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:_,onClick:_},s,{className:(0,r.default)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,s.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(65488);class r extends i.Component{render(){return i.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},65648:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(91189),a=n(67294),r=n(92814);const s="videoComponent_YfiL",l="headerClosed_s_Of",o="headerOpen_AzNA",d="minimize_pBQC",m="description_p2GN",c="title_YxV5",p="cardOpen_IEP6";var u=n(51436),h=n(86010);class k extends a.Component{constructor(){super(...arguments),(0,i.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,i.Z)(this,"videoRef",a.createRef()),(0,i.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:n}=e,{innerHeight:i}=window;t<i&&n>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,i.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:n,children:i}=this.props;return a.createElement("div",{ref:this.videoRef,className:s},this.state.open?a.createElement("div",{className:p},a.createElement("div",{className:o},e&&a.createElement("h5",{className:c},e),!this.props.expanded&&a.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},a.createElement(r.G,{icon:u.IQi})),i&&a.createElement("div",{className:m},i)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:t,type:"video/"+(n||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:u.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:l},a.createElement("div",{className:c},e||"Video"),i&&a.createElement("div",{className:m},i)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},a.createElement("source",{src:t,type:"video/"+(n||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:u.IJ7,spin:!0}))))}}},34525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var i=n(83117),a=(n(67294),n(3905)),r=n(85107),s=n(44996),l=n(65648),o=n(85162);n(92814);const d={},m="Software",c={unversionedId:"byod-basics/v24/software",id:"byod-basics/v24/software",title:"Software",description:"Der Ausdruck Software ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort Hardware das erste Mal verwendet wurde. Dabei bezeichnet Hardware alle physischen Bestandteile eines Computers. In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet.",source:"@site/docs/byod-basics/v24/006-software.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/software",permalink:"/byod-basics/v24/software",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/006-software.mdx",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"4. Okt. 2021",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Systemnavigation",permalink:"/byod-basics/v24/navigation"},next:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/byod-basics/v24/pruefungsfragen"}},p={},u=[{value:"Fotos / Videos",id:"fotos--videos",level:2},{value:"Bildschirmfoto erstellen",id:"bildschirmfoto-erstellen",level:3},{value:"Bildschirmaufnahme erstellen",id:"bildschirmaufnahme-erstellen",level:3},{value:"Foto zuschneiden, drehen und bearbeiten",id:"foto-zuschneiden-drehen-und-bearbeiten",level:3},{value:"Video zuschneiden",id:"video-zuschneiden",level:2},{value:"Browser",id:"browser",level:2},{value:"Mailprogramm &amp; Kalender",id:"mailprogramm--kalender",level:2},{value:"Word/Powerpoint/Excel",id:"wordpowerpointexcel",level:2},{value:"To Do",id:"to-do",level:2},{value:"Forms",id:"forms",level:2},{value:"Teams",id:"teams",level:2},{value:"Nachrichten an Lehrpersonen",id:"nachrichten-an-lehrpersonen",level:3},{value:"OneDrive",id:"onedrive",level:2}],h=(k="Figure",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var k;const f={toc:u};function g(e){let{components:t,...d}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software"},"Software"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Der Ausdruck ",(0,a.kt)("strong",{parentName:"p"},"Software")," ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort ",(0,a.kt)("strong",{parentName:"p"},"Hardware")," das erste Mal verwendet wurde. Dabei bezeichnet ",(0,a.kt)("strong",{parentName:"p"},"Hardware alle physischen Bestandteile eines Computers"),". In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet. ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.kt)("p",null,'Im folgenden werden g\xe4ngige Abl\xe4ufe zu verschiedener Software auf dem BYOD-Ger\xe4t gezeigt. Oft gibt es mehr als eine M\xf6glichkeit, das gew\xfcnschte Ziel zu erreichen (bspw. \xfcber Tastenk\xfcrzel, sog. "Shortcuts"). Es steht Ihnen frei, auch eigene Varianten auszuprobieren und sich anzueignen. '),(0,a.kt)("h2",{id:"fotos--videos"},"Fotos / Videos"),(0,a.kt)("h3",{id:"bildschirmfoto-erstellen"},"Bildschirmfoto erstellen"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(h,{options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Ausschneiden und Skizzieren",src:n(31077).Z,width:"256",height:"256"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ausschneiden und Skizzieren",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unter dem Startmen\xfc nach ",(0,a.kt)("inlineCode",{parentName:"li"},"Ausschneiden und Skizzieren")," (franz\xf6sisch: ",(0,a.kt)("inlineCode",{parentName:"li"},"Capture et croquis"),") suchen."),(0,a.kt)("li",{parentName:"ol"},"Es gibt drei Optionen um eine Bildschirmaufnahme zu erfassen:"),(0,a.kt)("li",{parentName:"ol"},"der ganze Bildschirm"),(0,a.kt)("li",{parentName:"ol"},"ein einzelnes Fenster"),(0,a.kt)("li",{parentName:"ol"},"ein selbst gew\xe4hlter Ausschnitt"))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(h,{options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Bildschirmfoto",src:n(73946).Z,width:"256",height:"256"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Spotlight nach ",(0,a.kt)("inlineCode",{parentName:"li"},"Bildschirmfoto")," (franz\xf6sisch: ",(0,a.kt)("inlineCode",{parentName:"li"},"captures"),") suchen"),(0,a.kt)("li",{parentName:"ol"},"Es gibt unterschiedliche Optionen um eine Bildschirmaufnahme zu erfassen:")),(0,a.kt)(h,{options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Bildschirmfoto Aufnehmen",src:n(2083).Z,width:"1592",height:"974"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto Aufnehmen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,a.kt)("h3",{id:"bildschirmaufnahme-erstellen"},"Bildschirmaufnahme erstellen"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("p",null,"Unter Windows gibt es aktuell keine M\xf6glichkeit, den gesamten Bildschirm (inkl. dem Desktop und dem Dateiexplorer) aufzunehmen.\nHier springt ",(0,a.kt)("strong",{parentName:"p"},"Powerpoint")," ein - in einem Powerpointdokument kann unter ",(0,a.kt)("inlineCode",{parentName:"p"},"Einf\xfcgen>Bildschirmaufzeichnung"),' eine Bildschirmaufnahme gestartet werden.\nDas aufgenommene Video muss dann gespeichert werden - mittels rechtsklick auf das Video und dann "Medien speichern unter...".'),(0,a.kt)("p",null,"Optional kann das Video zuerst noch zugeschnitten werden."),(0,a.kt)(l.Z,{src:(0,s.Z)("/img/byod-basics/win/create_screencast.mp4"),mdxType:"Video"})),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("p",null,"Auf Mac OSx lassen sich mit dem App ",(0,a.kt)("strong",{parentName:"p"},"Bildschirmfoto")," ebenfalls Screencasts (Videoaufnahmen des Bildschirms) aufnehmen."),(0,a.kt)(h,{options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Bildschirmfoto",src:n(73946).Z,width:"256",height:"256"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,a.kt)("h3",{id:"foto-zuschneiden-drehen-und-bearbeiten"},"Foto zuschneiden, drehen und bearbeiten"),(0,a.kt)("p",null,"Bekanntlich sagt ein Foto mehr als 1000 Worte - allerdings sollte sich das Foto auf das Wesentliche beziehen... Deshalb ist es wichtig, dass Sie ein Foto (oder einen Screenshot) f\xfcr die Verwendung in einem Bericht oder in einer Nachricht\nbearbeiten k\xf6nnen."),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Zeichnung hinzuf\xfcgen",src:(0,s.Z)("/img/byod-basics/win/edit_picture1.mp4"),mdxType:"Video"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zeichnen")))),(0,a.kt)(l.Z,{title:"Zuschneiden/Drehen",src:(0,s.Z)("/img/byod-basics/win/edit_picture2.mp4"),mdxType:"Video"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,a.kt)("li",{parentName:"ol"},"Direkt zuschneiden oder drehen"),(0,a.kt)("li",{parentName:"ol"},"(Alternativ: ",(0,a.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Bearbeiten"),")")))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Foto zuschneiden, drehen und bearbeiten",src:(0,s.Z)("/img/byod-basics/osx/edit_picture.mp4"),mdxType:"Video"}))),(0,a.kt)("h2",{id:"video-zuschneiden"},"Video zuschneiden"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Video zuschneiden",src:(0,s.Z)("/img/byod-basics/win/shorten_video.mp4"),mdxType:"Video"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Video in "Fotos" \xf6ffnen'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zuschneiden"))))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Video zuschneiden",src:(0,s.Z)("/img/byod-basics/osx/shorten_video.mp4"),mdxType:"Video"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Video mit "QuickTime" \xf6ffnen (doppelklicken)'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bearbeiten > K\xfcrzen")))))),(0,a.kt)("h2",{id:"browser"},"Browser"),(0,a.kt)("p",null,"Vergewissern Sie sich, dass Sie folgende Aufgaben ohne weiteres im Browser ihrer Wahl (bspw. Firefox, Chrome, Edge, Safari...) durchf\xfchren k\xf6nnen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Internetseite aufrufen (bspw. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://srf.ch"),")"),(0,a.kt)("li",{parentName:"ul"},"Auf Seite suchen (",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl+f")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Einstellungen > Auf Seite suchen"),")"),(0,a.kt)("li",{parentName:"ul"},"Seite drucken (",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl+p"),")"),(0,a.kt)("li",{parentName:"ul"},"Neuer Tab \xf6ffnen (",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl+t"),")")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Privates Fenster \xf6ffnen (",(0,a.kt)("i",null,"Inkognito Mode"),")"),'hier werden alle pers\xf6nlichen Daten nach dem Schliessen des Fensters wieder gel\xf6scht. So werden Sie bspw. auch von allen angemeldeten Websites automatisch abgemeldet und auch "Automatische Logins" werden verworfen. Auf fremden Laptops empfielt sich also der private Modus.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL k\xfcrzen um sie einfacher zu teilen, bspw. mit ",(0,a.kt)("a",{parentName:"li",href:"https://bitly.com/"},"https://bitly.com/"))),(0,a.kt)("h2",{id:"mailprogramm--kalender"},"Mailprogramm & Kalender"),(0,a.kt)("p",null,'Sie richten ihr Mail-Konto auf einem Mailprogramm (bspw. im Programm "Mail") ein und k\xf6nnen anschliessend die folgenden Aufgaben durchf\xfchren:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Eine neue Mail schreiben und verschicken")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Eine Mail-Signatur hinzuf\xfcgen/\xe4ndern."),(0,a.kt)("p",null,"Als Signatur wird ein Textabschnitt bezeichnet, der h\xe4ufig am Ende von E-Mails, Usenet-Postings oder Beitr\xe4gen in Internetforen steht und Angaben zum Absender enth\xe4lt."),(0,a.kt)("p",null,"Etablierte Konvention ist, eine Signatur durch einen Signaturtrenner vom Nachrichtentext abzutrennen. Dieser besteht aus einer Zeile, die nur die Zeichenfolge ",(0,a.kt)("inlineCode",{parentName:"p"},"-- ")," (zwei Bindestriche und ein Leerzeichen) enth\xe4lt. Dadurch erm\xf6glicht man es den meisten E-Mail-Programmen und Newsreadern, eine Signatur automatisch zu erkennen und beim Antworten nicht zu zitieren.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("p",null,"Beispiel f\xfcr eine Signatur:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:"{5-9}","{5-9}":!0},"Hallo,\ndas ist ein Beispieltext, um Signaturen zu demonstrieren.\nViele Gr\xfc\xdfe\nReto\n-- \nReto Holzer\nHolzerstrasse. 8, 2502 Biel\nTel.: +41 079 123 45 67\nE-Mail: reto@holzer.ch\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Einen neuen Kalender-Eintrag erstellen (bspw. \xfcber die Kalender-App)")),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(h,{options:{size:"150"},mdxType:"Figure"},(0,a.kt)("img",{alt:"--size=150",src:n(80326).Z,width:"403",height:"402"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mail Einrichten"),(0,a.kt)("p",null,"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Einstellungen \xf6ffnen",src:n(48176).Z,width:"1974",height:"1346"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Einstellungen \xf6ffnen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Konto hinzuf\xfcgen",src:n(27211).Z,width:"1976",height:"1354"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Konto hinzuf\xfcgen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:n(48226).Z,width:"1976",height:"1342"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Exchange-Konto hinzuf\xfcgen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))))),(0,a.kt)(l.Z,{title:"Signatur hinzuf\xfcgen",src:(0,s.Z)("/img/byod-basics/win/mail_signature.mp4"),mdxType:"Video"})),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(h,{options:{size:"150"},mdxType:"Figure"},(0,a.kt)("img",{alt:"--size=150",src:n(89499).Z,width:"512",height:"512"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mailprogramm Einrichten"),"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:",(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Konto hinzuf\xfcgen",src:n(44161).Z,width:"1532",height:"1118"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Konto hinzuf\xfcgen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:n(95585).Z,width:"1534",height:"982"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Exchange-Konto hinzuf\xfcgen",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))))),(0,a.kt)(l.Z,{title:"Signatur hinzuf\xfcgen",src:(0,s.Z)("/img/byod-basics/osx/mail_signature.mp4"),mdxType:"Video"}))),(0,a.kt)("h1",{id:"office-365"},"Office 365"),(0,a.kt)("p",null,"An der Schule wird die Office 365 Suite verwendet."),(0,a.kt)("h2",{id:"wordpowerpointexcel"},"Word/Powerpoint/Excel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Neue Datei erstellen"),(0,a.kt)("li",{parentName:"ul"},"Datei in einem vorgegebenen Ordner auf dem Computer speichern")),(0,a.kt)("h2",{id:"to-do"},"To Do"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Was kann Microsoft To Do?"),(0,a.kt)("p",null,"Mit Microsoft To Do k\xf6nnen Sie Folgendes erledigen ",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Behalten Sie mit ",(0,a.kt)("strong",{parentName:"li"},"Mein Tag"),", Ihrem personalisierten Tagesplaner mit Aufgabenvorschl\xe4gen, stets Ihre Priorit\xe4ten im Blick"),(0,a.kt)("li",{parentName:"ul"},"Greifen Sie \xfcberall, auf jedem Ger\xe4t auf Ihre Listen zu"),(0,a.kt)("li",{parentName:"ul"},"Teilen Sie Listen und Aufgaben mit Ihren Freunden, der Familie, Kollegen und Klassenkameraden"),(0,a.kt)("li",{parentName:"ul"},"Erstellen Sie farbig codierte Listen"),(0,a.kt)("li",{parentName:"ul"},"Legen Sie einmalige oder wiederkehrende F\xe4lligkeiten und Erinnerungen fest"),(0,a.kt)("li",{parentName:"ul"},"Teilen Sie Ihre Aufgaben in \xfcberschaubare Schritte auf"),(0,a.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Anmerkungen hinzu"),(0,a.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Dateien hinzu"),(0,a.kt)("li",{parentName:"ul"},"Synchronisieren Sie Ihre Aufgaben zwischen Outlook und To Do"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installationsanleitungen"),(0,a.kt)("p",null,"Onlineversion: ",(0,a.kt)("a",{parentName:"p",href:"https://to-do.office.com/"},"https://to-do.office.com/"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-in/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558"},"Auf dem Laptop installieren")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apps.apple.com/de/app/microsoft-to-do/id1212616790"},"Auf dem iPhone installieren")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=de"},"Auf Android installieren")))),(0,a.kt)("p",null,"Sie k\xf6nnen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Neue ToDo-Liste erstellen"),(0,a.kt)("li",{parentName:"ul"},"Neue ToDos erfassen"),(0,a.kt)("li",{parentName:"ul"},"Erinnerung festlegen und einschalten")),(0,a.kt)("h2",{id:"forms"},"Forms"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Was kann Microsoft Forms?"),(0,a.kt)("p",null,"Microsoft Forms erm\xf6glicht das schnelle und einfache Erstellen von benutzerdefinierte Quizfragen, Umfragen und Frageb\xf6gen. Nach der \xdcbermittlung der Ergebnisse k\xf6nnen Sie die integrierte Analysefunktion zum Auswerten der Antworten verwenden. Formulardaten k\xf6nnen f\xfcr eine tiefer greifende Analyse oder die Benotung ganz einfach nach Excel exportiert werden."),(0,a.kt)("p",null,"Beim Erstellen der Umfrage kann konfiguriert werden, wer die Umfrage ausf\xfcllen darf und welche Daten von den Teilnehmern erfasst werden:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Personendaten erfassen"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Benutzerkonto erforderlich"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Eine Antwort pro Person","*"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,a.kt)("p",null,"*"," Durch die Anmeldung mit einem Benutuerkonto kann optional sichergestellt werden,\ndass jede Person eine Umfrage nur genau ein Mal ausf\xfcllt. Die Personendaten werden aber nicht weitergeleitet (Antworten sind anonym.)")),(0,a.kt)("p",null,"Online unter ",(0,a.kt)("a",{parentName:"p",href:"https://forms.office.com"},"https://forms.office.com")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Neue Umfrage erstellen und teilen"),(0,a.kt)("li",{parentName:"ul"},"Anonyme Umfrage erstellen"),(0,a.kt)("li",{parentName:"ul"},"Bei Umfragen die Email-Adresse von Teilnehmenden erfassen "),(0,a.kt)("li",{parentName:"ul"},"Umfragen mit Zeitbeschr\xe4nkungen erstellen"),(0,a.kt)("li",{parentName:"ul"},"Benachrichtigungseinstellungen f\xfcr ausgef\xfcllte Umfragen festlegen")),(0,a.kt)("h2",{id:"teams"},"Teams"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:(0,a.kt)("span",null,"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks ",(0,a.kt)("code",null,"`code`")),src:(0,s.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Bildschirm freigeben",src:(0,s.Z)("/img/byod-basics/win/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Ordner Synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Benachrichtigungen verwalten",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Zoom Faktor einstellen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"})),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks `code`",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Bildschirm freigeben",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Ordner Synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Benachrichtigungen verwalten",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Zoom Faktor einstellen",src:(0,s.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"}))),(0,a.kt)("h3",{id:"nachrichten-an-lehrpersonen"},"Nachrichten an Lehrpersonen"),(0,a.kt)("p",null,"Nachrichten an Lehrpersonen werden mit ",(0,a.kt)("strong",{parentName:"p"},"Sorgfalt")," geschrieben. Es geh\xf6rt eine kurze ",(0,a.kt)("strong",{parentName:"p"},"Anrede")," sowie eine ",(0,a.kt)("strong",{parentName:"p"},"Schlussformel")," dazu. In der Schlussformel am Ende der Nachricht halten Sie nebst ihrem Namen auch die ",(0,a.kt)("strong",{parentName:"p"},"Klassenbezeichnung")," fest."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lieber Herr M\xfcller"),(0,a.kt)("p",{parentName:"blockquote"},'Ist bei der Nettobilanz beim Citratzyklus mit "aktiver Essigs\xe4ure" die gebundene Essigs\xe4ure gemeint?'),(0,a.kt)("p",{parentName:"blockquote"},"Mit freundlichen Gr\xfcssen"),(0,a.kt)("p",{parentName:"blockquote"},"Mark Muster, 24z")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"teams--whatsapp"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Teams \u2260 WhatsApp")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Auch wenn Sie nur eine kurze Frage haben, geh\xf6rt die Anrede und Schlussformel dazu (es ist ",(0,a.kt)("strong",{parentName:"p"},"kein WhatsApp-Chat unter Freunden"),"!)."),(0,a.kt)("p",{parentName:"div"},"Entwickelt sich durch die Antwort der Lehrperson einen Chat-Charakter (daher die Lehrperson schreibt innerhalb kurzer Zeit zur\xfcck und Sie haben eine R\xfcckfrage zum selben Thema), darf die Anrede und die Schlussformel anschliessend f\xfcr diese Unterhaltung weggelassen werden."))),(0,a.kt)("h2",{id:"onedrive"},"OneDrive"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Auf den Laptop Synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Dateien freigeben",src:(0,s.Z)("/img/byod-basics/win/onedrive_share.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,a.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,a.kt)(l.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,s.Z)("/img/byod-basics/win/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,s.Z)("/img/byod-basics/win/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,a.kt)(l.Z,{title:"Dateiversionsverlauf",src:(0,s.Z)("/img/byod-basics/win/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,s.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,a.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht."))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(l.Z,{title:"Auf den Laptop Synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Dateien freigeben",src:(0,s.Z)("/img/byod-basics/osx/onedrive_share.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,a.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,a.kt)(l.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,s.Z)("/img/byod-basics/osx/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,a.kt)(l.Z,{title:"Dateiversionsverlauf",src:(0,s.Z)("/img/byod-basics/osx/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,a.kt)(l.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,s.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,a.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,a.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht.")))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Software#Etymologie"},"Wikipedia"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Signatur_(E-Mails_und_Postings)"},"Wikipedia"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/de-ch/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558#activetab=pivot:overviewtab"},"Microsoft"),(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},73946:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apps_bildschirmfoto-5134a720041a4c067c82dd3a53590259.png"},44161:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_add_account-2781d50b2265c40ab3980d19e3946835.png"},95585:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_add_exchange-0a6ddd45f625eff7e5880a2c76c0a6af.png"},89499:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_app-85fd99977e78b1dcf89c16066082f9ea.webp"},2083:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/take_screenshot-ed8c27f790910e5bf3b0cd725398b189.png"},31077:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apps_ausschneiden_skizzieren-d1222941d4454a5bb38cf7da3c50da3d.png"},48176:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_add_account_01-bdf9885a7616907a6ef06afa5588efae.png"},27211:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_add_account_02-9c73bcf7c83df2b6f5411d410224b316.png"},48226:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_add_account_03-98a892a644600fd5de5f21ed0902f364.png"},80326:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mail_app-85c1bc06be8800f65f30e61189f9e422.png"}}]);