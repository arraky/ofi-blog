"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[97140],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,h=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return t?i.createElement(h,s(s({ref:n},c),{},{components:t})):i.createElement(h,s({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(667294),a=t(386010),r="tabItem_OmH5";function s(e){var n=e.children,t=e.hidden,s=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.default)(r,s),hidden:t},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(583117),a=t(667294),r=t(972389),s=t(867392),l=t(707094),o=t(212466),d=t(386010),c="tabList_uSqn",m="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,p=e.block,h=e.defaultValue,f=e.values,k=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,s.l)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(n=null!=h?h:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),Z=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,a.useState)(w),z=T[0],_=T[1],E=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=Z[k];null!=I&&I!==z&&v.some((function(e){return e.value===I}))&&_(I)}var D=function(e){var n=e.currentTarget,t=E.indexOf(n),i=v[t].value;i!==z&&(S(n),_(i),null!=k&&x(k,i))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=E.indexOf(e.currentTarget)+1;t=E[i]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,d.default)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("tabs",{"tabs--block":p},b)},v.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:z===n?0:-1,"aria-selected":z===n,key:n,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:D,onClick:D},r,{className:(0,d.default)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":z===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(g.filter((function(e){return e.props.value===z}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==z})}))))}function p(e){var n=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(n)},e))}},884384:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(592814),s=t(51436),l=t(386010),o=function(e){return i.createElement("span",{className:a.details},i.createElement("span",{className:(0,l.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,l.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},i.createElement(r.G,{icon:s.Xjp}))))},d=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},c=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+d(t.size)+")",n.maxHeight=d(t.size),delete t.size),t.height&&(n.maxHeight=d(t.height),n.height=d(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+d(t.width)+")",n.width=d(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return i.createElement(c,e);var n=i.useState(!1),t=(n[0],n[1]),r=i.useState(!1),s=r[0],d=r[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,l.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,a,r,s;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,a=e.clientY,r=n.left<=i&&n.right>=i,s=n.top<=a&&n.bottom>=a,r&&s||t(!1)}},i.createElement(c,e),u&&i.createElement("figcaption",null,m&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,l.default)(a.bib,s?a.visible:void 0),onClick:function(){return d(!s)}},"@"),s&&i.createElement(o,e.bib)))}},285107:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(21073),a=t(667294),r=t(409877),s=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},765648:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(144415),a=t(21073),r=t(191189),s=t(667294),l=t(592814),o="videoComponent_YfiL",d="headerClosed_s_Of",c="headerOpen_AzNA",m="minimize_pBQC",u="description_p2GN",p="title_YxV5",h="cardOpen_IEP6",f=t(51436),k=t(386010),b=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return n=e.call.apply(e,[this].concat(a))||this,(0,r.Z)((0,i.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,r.Z)((0,i.Z)(n),"videoRef",s.createRef()),(0,r.Z)((0,i.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),t=e.top,i=e.bottom;t<window.innerHeight&&i>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,r.Z)((0,i.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,a.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},t.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},t.render=function(){var e=this.props,n=e.title,t=e.src,i=e.type,a=e.children;return s.createElement("div",{ref:this.videoRef,className:o},this.state.open?s.createElement("div",{className:h},s.createElement("div",{className:c},n&&s.createElement("h5",{className:p},n),!this.props.expanded&&s.createElement("button",{className:(0,k.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},s.createElement(l.G,{icon:f.IQi})),a&&s.createElement("div",{className:u},a)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:t,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:d},s.createElement("div",{className:p},n||"Video"),a&&s.createElement("div",{className:u},a)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:t,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))))},n}(s.Component)},134525:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return k}});var i=t(583117),a=t(480102),r=(t(667294),t(603905)),s=t(884384),l=t(285107),o=t(644996),d=t(765648),c=t(72360),m=(t(592814),["components"]),u={},p="Software",h={unversionedId:"byod-basics/v24/software",id:"byod-basics/v24/software",title:"Software",description:"Der Ausdruck Software ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort Hardware das erste Mal verwendet wurde. Dabei bezeichnet Hardware alle physischen Bestandteile eines Computers. In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet.",source:"@site/docs/byod-basics/v24/006-software.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/software",permalink:"/byod-basics/v24/software",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/006-software.mdx",tags:[],version:"current",lastUpdatedAt:1633345989,formattedLastUpdatedAt:"4.10.2021",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Systemnavigation",permalink:"/byod-basics/v24/navigation"},next:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/byod-basics/v24/pruefungsfragen"}},f={},k=[{value:"Fotos / Videos",id:"fotos--videos",level:2},{value:"Bildschirmfoto erstellen",id:"bildschirmfoto-erstellen",level:3},{value:"Bildschirmaufnahme erstellen",id:"bildschirmaufnahme-erstellen",level:3},{value:"Foto zuschneiden, drehen und bearbeiten",id:"foto-zuschneiden-drehen-und-bearbeiten",level:3},{value:"Video zuschneiden",id:"video-zuschneiden",level:2},{value:"Browser",id:"browser",level:2},{value:"Mailprogramm &amp; Kalender",id:"mailprogramm--kalender",level:2},{value:"Word/Powerpoint/Excel",id:"wordpowerpointexcel",level:2},{value:"To Do",id:"to-do",level:2},{value:"Forms",id:"forms",level:2},{value:"Teams",id:"teams",level:2},{value:"Nachrichten an Lehrpersonen",id:"nachrichten-an-lehrpersonen",level:3},{value:"OneDrive",id:"onedrive",level:2}],b={toc:k};function g(e){var n=e.components,u=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,i.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software"},"Software"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Der Ausdruck ",(0,r.kt)("strong",{parentName:"p"},"Software")," ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort ",(0,r.kt)("strong",{parentName:"p"},"Hardware")," das erste Mal verwendet wurde. Dabei bezeichnet ",(0,r.kt)("strong",{parentName:"p"},"Hardware alle physischen Bestandteile eines Computers"),". In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("p",null,'Im folgenden werden g\xe4ngige Abl\xe4ufe zu verschiedener Software auf dem BYOD-Ger\xe4t gezeigt. Oft gibt es mehr als eine M\xf6glichkeit, das gew\xfcnschte Ziel zu erreichen (bspw. \xfcber Tastenk\xfcrzel, sog. "Shortcuts"). Es steht Ihnen frei, auch eigene Varianten auszuprobieren und sich anzueignen. '),(0,r.kt)("h2",{id:"fotos--videos"},"Fotos / Videos"),(0,r.kt)("h3",{id:"bildschirmfoto-erstellen"},"Bildschirmfoto erstellen"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"Ausschneiden und Skizzieren",options:{},isInline:!1,src:t(631077).Z,alt:"Ausschneiden und Skizzieren",mdxType:"Image"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unter dem Startmen\xfc nach ",(0,r.kt)("inlineCode",{parentName:"li"},"Ausschneiden und Skizzieren")," (franz\xf6sisch: ",(0,r.kt)("inlineCode",{parentName:"li"},"Capture et croquis"),") suchen."),(0,r.kt)("li",{parentName:"ol"},"Es gibt drei Optionen um eine Bildschirmaufnahme zu erfassen:"),(0,r.kt)("li",{parentName:"ol"},"der ganze Bildschirm"),(0,r.kt)("li",{parentName:"ol"},"ein einzelnes Fenster"),(0,r.kt)("li",{parentName:"ol"},"ein selbst gew\xe4hlter Ausschnitt"))),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"Bildschirmfoto",options:{},isInline:!1,src:t(473946).Z,alt:"Bildschirmfoto",mdxType:"Image"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Spotlight nach ",(0,r.kt)("inlineCode",{parentName:"li"},"Bildschirmfoto")," (franz\xf6sisch: ",(0,r.kt)("inlineCode",{parentName:"li"},"captures"),") suchen"),(0,r.kt)("li",{parentName:"ol"},"Es gibt unterschiedliche Optionen um eine Bildschirmaufnahme zu erfassen:")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"Bildschirmfoto Aufnehmen",options:{},isInline:!1,src:t(2083).Z,alt:"Bildschirmfoto Aufnehmen",mdxType:"Image"})))),(0,r.kt)("h3",{id:"bildschirmaufnahme-erstellen"},"Bildschirmaufnahme erstellen"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"Unter Windows gibt es aktuell keine M\xf6glichkeit, den gesamten Bildschirm (inkl. dem Desktop und dem Dateiexplorer) aufzunehmen.\nHier springt ",(0,r.kt)("strong",{parentName:"p"},"Powerpoint")," ein - in einem Powerpointdokument kann unter ",(0,r.kt)("inlineCode",{parentName:"p"},"Einf\xfcgen>Bildschirmaufzeichnung"),' eine Bildschirmaufnahme gestartet werden.\nDas aufgenommene Video muss dann gespeichert werden - mittels rechtsklick auf das Video und dann "Medien speichern unter...".'),(0,r.kt)("p",null,"Optional kann das Video zuerst noch zugeschnitten werden."),(0,r.kt)(d.Z,{src:(0,o.Z)("/img/byod-basics/win/create_screencast.mp4"),mdxType:"Video"})),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"Auf Mac OSx lassen sich mit dem App ",(0,r.kt)("strong",{parentName:"p"},"Bildschirmfoto")," ebenfalls Screencasts (Videoaufnahmen des Bildschirms) aufnehmen."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"Bildschirmfoto",options:{},isInline:!1,src:t(473946).Z,alt:"Bildschirmfoto",mdxType:"Image"})))),(0,r.kt)("h3",{id:"foto-zuschneiden-drehen-und-bearbeiten"},"Foto zuschneiden, drehen und bearbeiten"),(0,r.kt)("p",null,"Bekanntlich sagt ein Foto mehr als 1000 Worte - allerdings sollte sich das Foto auf das Wesentliche beziehen... Deshalb ist es wichtig, dass Sie ein Foto (oder einen Screenshot) f\xfcr die Verwendung in einem Bericht oder in einer Nachricht\nbearbeiten k\xf6nnen."),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Zeichnung hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/edit_picture1.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zeichnen")))),(0,r.kt)(d.Z,{title:"Zuschneiden/Drehen",src:(0,o.Z)("/img/byod-basics/win/edit_picture2.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,r.kt)("li",{parentName:"ol"},"Direkt zuschneiden oder drehen"),(0,r.kt)("li",{parentName:"ol"},"(Alternativ: ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Bearbeiten"),")")))),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Foto zuschneiden, drehen und bearbeiten",src:(0,o.Z)("/img/byod-basics/osx/edit_picture.mp4"),mdxType:"Video"}))),(0,r.kt)("h2",{id:"video-zuschneiden"},"Video zuschneiden"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/win/shorten_video.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Video in "Fotos" \xf6ffnen'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zuschneiden"))))),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/osx/shorten_video.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Video mit "QuickTime" \xf6ffnen (doppelklicken)'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > K\xfcrzen")))))),(0,r.kt)("h2",{id:"browser"},"Browser"),(0,r.kt)("p",null,"Vergewissern Sie sich, dass Sie folgende Aufgaben ohne weiteres im Browser ihrer Wahl (bspw. Firefox, Chrome, Edge, Safari...) durchf\xfchren k\xf6nnen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internetseite aufrufen (bspw. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://srf.ch"),")"),(0,r.kt)("li",{parentName:"ul"},"Auf Seite suchen (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+f")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"Einstellungen > Auf Seite suchen"),")"),(0,r.kt)("li",{parentName:"ul"},"Seite drucken (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+p"),")"),(0,r.kt)("li",{parentName:"ul"},"Neuer Tab \xf6ffnen (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+t"),")")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Privates Fenster \xf6ffnen (",(0,r.kt)("i",null,"Inkognito Mode"),")"),'hier werden alle pers\xf6nlichen Daten nach dem Schliessen des Fensters wieder gel\xf6scht. So werden Sie bspw. auch von allen angemeldeten Websites automatisch abgemeldet und auch "Automatische Logins" werden verworfen. Auf fremden Laptops empfielt sich also der private Modus.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL k\xfcrzen um sie einfacher zu teilen, bspw. mit ",(0,r.kt)("a",{parentName:"li",href:"https://bitly.com/"},"https://bitly.com/"))),(0,r.kt)("h2",{id:"mailprogramm--kalender"},"Mailprogramm & Kalender"),(0,r.kt)("p",null,'Sie richten ihr Mail-Konto auf einem Mailprogramm (bspw. im Programm "Mail") ein und k\xf6nnen anschliessend die folgenden Aufgaben durchf\xfchren:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eine neue Mail schreiben und verschicken")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Eine Mail-Signatur hinzuf\xfcgen/\xe4ndern."),(0,r.kt)("p",null,"Als Signatur wird ein Textabschnitt bezeichnet, der h\xe4ufig am Ende von E-Mails, Usenet-Postings oder Beitr\xe4gen in Internetforen steht und Angaben zum Absender enth\xe4lt."),(0,r.kt)("p",null,"Etablierte Konvention ist, eine Signatur durch einen Signaturtrenner vom Nachrichtentext abzutrennen. Dieser besteht aus einer Zeile, die nur die Zeichenfolge ",(0,r.kt)("inlineCode",{parentName:"p"},"-- ")," (zwei Bindestriche und ein Leerzeichen) enth\xe4lt. Dadurch erm\xf6glicht man es den meisten E-Mail-Programmen und Newsreadern, eine Signatur automatisch zu erkennen und beim Antworten nicht zu zitieren.",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("p",null,"Beispiel f\xfcr eine Signatur:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:"{5-9}","{5-9}":!0},"Hallo,\ndas ist ein Beispieltext, um Signaturen zu demonstrieren.\nViele Gr\xfc\xdfe\nReto\n-- \nReto Holzer\nHolzerstrasse. 8, 2502 Biel\nTel.: +41 079 123 45 67\nE-Mail: reto@holzer.ch\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Einen neuen Kalender-Eintrag erstellen (bspw. \xfcber die Kalender-App)")),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"",options:{size:"150"},isInline:!1,src:t(580326).Z,alt:"--size=150",mdxType:"Image"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Mail Einrichten"),(0,r.kt)("p",null,"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Einstellungen \xf6ffnen:\n",(0,r.kt)(s.Z,{bib:void 0,caption:"Einstellungen \xf6ffnen",options:{},isInline:!0,src:t(848176).Z,alt:"Einstellungen \xf6ffnen",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Konto hinzuf\xfcgen:\n",(0,r.kt)(s.Z,{bib:void 0,caption:"Konto hinzuf\xfcgen",options:{},isInline:!0,src:t(327211).Z,alt:"Konto hinzuf\xfcgen",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Exchange-Konto hinzuf\xfcgen:\n",(0,r.kt)(s.Z,{bib:void 0,caption:"Exchange-Konto hinzuf\xfcgen",options:{},isInline:!0,src:t(848226).Z,alt:"Exchange-Konto hinzuf\xfcgen",mdxType:"Image"})))),(0,r.kt)(d.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/mail_signature.mp4"),mdxType:"Video"})),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"",options:{size:"150"},isInline:!1,src:t(789499).Z,alt:"--size=150",mdxType:"Image"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Mailprogramm Einrichten"),"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Konto hinzuf\xfcgen:\n",(0,r.kt)(s.Z,{bib:void 0,caption:"Konto hinzuf\xfcgen",options:{},isInline:!0,src:t(744161).Z,alt:"Konto hinzuf\xfcgen",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Exchange-Konto hinzuf\xfcgen:\n",(0,r.kt)(s.Z,{bib:void 0,caption:"Exchange-Konto hinzuf\xfcgen",options:{},isInline:!0,src:t(95585).Z,alt:"Exchange-Konto hinzuf\xfcgen",mdxType:"Image"})))),(0,r.kt)(d.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/osx/mail_signature.mp4"),mdxType:"Video"}))),(0,r.kt)("h1",{id:"office-365"},"Office 365"),(0,r.kt)("p",null,"An der Schule wird die Office 365 Suite verwendet."),(0,r.kt)("h2",{id:"wordpowerpointexcel"},"Word/Powerpoint/Excel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neue Datei erstellen"),(0,r.kt)("li",{parentName:"ul"},"Datei in einem vorgegebenen Ordner auf dem Computer speichern")),(0,r.kt)("h2",{id:"to-do"},"To Do"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Was kann Microsoft To Do?"),(0,r.kt)("p",null,"Mit Microsoft To Do k\xf6nnen Sie Folgendes erledigen ",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Behalten Sie mit ",(0,r.kt)("strong",{parentName:"li"},"Mein Tag"),", Ihrem personalisierten Tagesplaner mit Aufgabenvorschl\xe4gen, stets Ihre Priorit\xe4ten im Blick"),(0,r.kt)("li",{parentName:"ul"},"Greifen Sie \xfcberall, auf jedem Ger\xe4t auf Ihre Listen zu"),(0,r.kt)("li",{parentName:"ul"},"Teilen Sie Listen und Aufgaben mit Ihren Freunden, der Familie, Kollegen und Klassenkameraden"),(0,r.kt)("li",{parentName:"ul"},"Erstellen Sie farbig codierte Listen"),(0,r.kt)("li",{parentName:"ul"},"Legen Sie einmalige oder wiederkehrende F\xe4lligkeiten und Erinnerungen fest"),(0,r.kt)("li",{parentName:"ul"},"Teilen Sie Ihre Aufgaben in \xfcberschaubare Schritte auf"),(0,r.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Anmerkungen hinzu"),(0,r.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Dateien hinzu"),(0,r.kt)("li",{parentName:"ul"},"Synchronisieren Sie Ihre Aufgaben zwischen Outlook und To Do"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Installationsanleitungen"),(0,r.kt)("p",null,"Onlineversion: ",(0,r.kt)("a",{parentName:"p",href:"https://to-do.office.com/"},"https://to-do.office.com/"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-in/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558"},"Auf dem Laptop installieren")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/de/app/microsoft-to-do/id1212616790"},"Auf dem iPhone installieren")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=de"},"Auf Android installieren")))),(0,r.kt)("p",null,"Sie k\xf6nnen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neue ToDo-Liste erstellen"),(0,r.kt)("li",{parentName:"ul"},"Neue ToDos erfassen"),(0,r.kt)("li",{parentName:"ul"},"Erinnerung festlegen und einschalten")),(0,r.kt)("h2",{id:"forms"},"Forms"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Was kann Microsoft Forms?"),(0,r.kt)("p",null,"Microsoft Forms erm\xf6glicht das schnelle und einfache Erstellen von benutzerdefinierte Quizfragen, Umfragen und Frageb\xf6gen. Nach der \xdcbermittlung der Ergebnisse k\xf6nnen Sie die integrierte Analysefunktion zum Auswerten der Antworten verwenden. Formulardaten k\xf6nnen f\xfcr eine tiefer greifende Analyse oder die Benotung ganz einfach nach Excel exportiert werden."),(0,r.kt)("p",null,"Beim Erstellen der Umfrage kann konfiguriert werden, wer die Umfrage ausf\xfcllen darf und welche Daten von den Teilnehmern erfasst werden:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Personendaten erfassen"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Benutzerkonto erforderlich"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Eine Antwort pro Person","*"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.kt)("p",null,"*"," Durch die Anmeldung mit einem Benutuerkonto kann optional sichergestellt werden,\ndass jede Person eine Umfrage nur genau ein Mal ausf\xfcllt. Die Personendaten werden aber nicht weitergeleitet (Antworten sind anonym.)")),(0,r.kt)("p",null,"Online unter ",(0,r.kt)("a",{parentName:"p",href:"https://forms.office.com"},"https://forms.office.com")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neue Umfrage erstellen und teilen"),(0,r.kt)("li",{parentName:"ul"},"Anonyme Umfrage erstellen"),(0,r.kt)("li",{parentName:"ul"},"Bei Umfragen die Email-Adresse von Teilnehmenden erfassen "),(0,r.kt)("li",{parentName:"ul"},"Umfragen mit Zeitbeschr\xe4nkungen erstellen"),(0,r.kt)("li",{parentName:"ul"},"Benachrichtigungseinstellungen f\xfcr ausgef\xfcllte Umfragen festlegen")),(0,r.kt)("h2",{id:"teams"},"Teams"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:(0,r.kt)("span",null,"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks ",(0,r.kt)("code",null,"`code`")),src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/win/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"})),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks `code`",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"}))),(0,r.kt)("h3",{id:"nachrichten-an-lehrpersonen"},"Nachrichten an Lehrpersonen"),(0,r.kt)("p",null,"Nachrichten an Lehrpersonen werden mit ",(0,r.kt)("strong",{parentName:"p"},"Sorgfalt")," geschrieben. Es geh\xf6rt eine kurze ",(0,r.kt)("strong",{parentName:"p"},"Anrede")," sowie eine ",(0,r.kt)("strong",{parentName:"p"},"Schlussformel")," dazu. In der Schlussformel am Ende der Nachricht halten Sie nebst ihrem Namen auch die ",(0,r.kt)("strong",{parentName:"p"},"Klassenbezeichnung")," fest."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lieber Herr M\xfcller"),(0,r.kt)("p",{parentName:"blockquote"},'Ist bei der Nettobilanz beim Citratzyklus mit "aktiver Essigs\xe4ure" die gebundene Essigs\xe4ure gemeint?'),(0,r.kt)("p",{parentName:"blockquote"},"Mit freundlichen Gr\xfcssen"),(0,r.kt)("p",{parentName:"blockquote"},"Mark Muster, 24z")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"teams--whatsapp"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Teams \u2260 WhatsApp")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Auch wenn Sie nur eine kurze Frage haben, geh\xf6rt die Anrede und Schlussformel dazu (es ist ",(0,r.kt)("strong",{parentName:"p"},"kein WhatsApp-Chat unter Freunden"),"!)."),(0,r.kt)("p",{parentName:"div"},"Entwickelt sich durch die Antwort der Lehrperson einen Chat-Charakter (daher die Lehrperson schreibt innerhalb kurzer Zeit zur\xfcck und Sie haben eine R\xfcckfrage zum selben Thema), darf die Anrede und die Schlussformel anschliessend f\xfcr diese Unterhaltung weggelassen werden."))),(0,r.kt)("h2",{id:"onedrive"},"OneDrive"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(c.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/win/onedrive_share.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,r.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,r.kt)(d.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,r.kt)(d.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/win/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht."))),(0,r.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(d.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/osx/onedrive_share.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,r.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,r.kt)(d.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,r.kt)(d.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/osx/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,r.kt)(d.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht.")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Software#Etymologie"},"Wikipedia"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Signatur_(E-Mails_und_Postings)"},"Wikipedia"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/de-ch/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558#activetab=pivot:overviewtab"},"Microsoft"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},473946:function(e,n,t){n.Z=t.p+"assets/images/apps_bildschirmfoto-5134a720041a4c067c82dd3a53590259.png"},744161:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account-2781d50b2265c40ab3980d19e3946835.png"},95585:function(e,n,t){n.Z=t.p+"assets/images/mail_add_exchange-0a6ddd45f625eff7e5880a2c76c0a6af.png"},789499:function(e,n,t){n.Z=t.p+"assets/images/mail_app-85fd99977e78b1dcf89c16066082f9ea.webp"},2083:function(e,n,t){n.Z=t.p+"assets/images/take_screenshot-ed8c27f790910e5bf3b0cd725398b189.png"},631077:function(e,n,t){n.Z=t.p+"assets/images/apps_ausschneiden_skizzieren-d1222941d4454a5bb38cf7da3c50da3d.png"},848176:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_01-bdf9885a7616907a6ef06afa5588efae.png"},327211:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_02-9c73bcf7c83df2b6f5411d410224b316.png"},848226:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_03-98a892a644600fd5de5f21ed0902f364.png"},580326:function(e,n,t){n.Z=t.p+"assets/images/mail_app-85c1bc06be8800f65f30e61189f9e422.png"},144415:function(e,n,t){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return i}})}}]);