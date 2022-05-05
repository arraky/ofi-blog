"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45088],{72360:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(667294),i=n(386010),l="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(l,r),hidden:n},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(583117),i=n(667294),l=n(972389),r=n(867392),s=n(707094),o=n(212466),p=n(386010),m="tabList_uSqn",u="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,c=e.block,k=e.defaultValue,f=e.values,N=e.groupId,h=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===k?k:null!=(t=null!=k?k:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==T&&!b.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,s.U)(),y=C.tabGroupChoices,Z=C.setTabGroupChoices,w=(0,i.useState)(T),x=w[0],I=w[1],E=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var A=y[N];null!=A&&A!==x&&b.some((function(e){return e.value===A}))&&I(A)}var z=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==x&&(D(t),I(a),null!=N&&Z(N,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var i=E.indexOf(e.currentTarget)-1;n=E[i]||E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,p.default)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":c},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:z,onClick:z},l,{className:(0,p.default)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},l=n(592814),r=n(51436),s=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(l.G,{icon:r.Xjp}))))},p=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},m=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+p(n.size)+")",t.maxHeight=p(n.size),delete n.size),n.height&&(t.maxHeight=p(n.height),t.height=p(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+p(n.width)+")",t.width=p(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(m,e);var t=a.useState(!1),n=(t[0],t[1]),l=a.useState(!1),r=l[0],p=l[1],u=e.caption&&"undefined"!==e.caption,d=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,l,r;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,l=t.left<=a&&t.right>=a,r=t.top<=i&&t.bottom>=i,l&&r||n(!1)}},a.createElement(m,e),d&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,r?i.visible:void 0),onClick:function(){return p(!r)}},"@"),r&&a.createElement(o,e.bib)))}},285107:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(21073),i=n(667294),l=n(409877),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(144415),i=n(21073),l=n(191189),r=n(667294),s=n(592814),o="videoComponent_YfiL",p="headerClosed_s_Of",m="headerOpen_AzNA",u="minimize_pBQC",d="description_p2GN",c="title_YxV5",k="cardOpen_IEP6",f=n(51436),N=n(386010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,(0,l.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,l.Z)((0,a.Z)(t),"videoRef",r.createRef()),(0,l.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,l.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,i=e.children;return r.createElement("div",{ref:this.videoRef,className:o},this.state.open?r.createElement("div",{className:k},r.createElement("div",{className:m},t&&r.createElement("h5",{className:c},t),!this.props.expanded&&r.createElement("button",{className:(0,N.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},r.createElement(s.G,{icon:f.IQi})),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:p},r.createElement("div",{className:c},t||"Video"),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))))},t}(r.Component)},630334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return g}});var a=n(583117),i=n(480102),l=(n(667294),n(603905)),r=n(884384),s=n(285107),o=n(644996),p=n(765648),m=n(72360),u=n(592814),d=n(951417),c=["components"],k={},f="Systemnavigation",N={unversionedId:"BYOD-Basics/navigation",id:"version-24i/BYOD-Basics/navigation",title:"Systemnavigation",description:"Tastatur",source:"@site/versioned_docs/version-24i/02-BYOD-Basics/004-navigation.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/navigation",permalink:"/24i/BYOD-Basics/navigation",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/02-BYOD-Basics/004-navigation.mdx",tags:[],version:"24i",sidebarPosition:4,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Dateiexplorer",permalink:"/24i/BYOD-Basics/dateiexplorer"},next:{title:"Software",permalink:"/24i/BYOD-Basics/software"}},h={},g=[{value:"Tastatur",id:"tastatur",level:2},{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",level:3},{value:"Pfeiltasten",id:"pfeiltasten",level:3},{value:"Klammern",id:"klammern",level:3},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",level:3},{value:"Touch-Gesten",id:"touch-gesten",level:2},{value:"Klicken durch Tippen",id:"klicken-durch-tippen",level:3},{value:"Rechtsklick",id:"rechtsklick",level:3},{value:"Scrollen",id:"scrollen",level:3},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",level:3},{value:"Virtuelle Desktops",id:"virtuelle-desktops",level:3},{value:"Erstellen",id:"erstellen",level:4},{value:"Wechseln",id:"wechseln",level:4}],b={toc:g};function v(e){var t=e.components,k=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,k,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,l.kt)("h2",{id:"tastatur"},"Tastatur"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2318")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Option")," oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2325")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn"))))),(0,l.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"}),(0,l.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,l.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,l.kt)("h3",{id:"klammern"},"Klammern"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,l.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + g")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,l.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,l.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,l.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(2253).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(180800).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,l.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(568234).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(137089).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"scrollen"},"Scrollen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(739788).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(127710).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(371242).Z,mdxType:"Image"})),(0,l.kt)("p",null,"(",(0,l.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Mission Control"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(763407).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,l.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,l.kt)("h4",{id:"erstellen"},"Erstellen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Virtuelle Desktops: Mit ",(0,l.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,l.kt)("h4",{id:"wechseln"},"Wechseln"),(0,l.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(499368).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(387953).Z,mdxType:"Image"})))),(0,l.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}v.isMDXComponent=!0},387953:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},180800:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},763407:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},137089:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},127710:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},499368:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},2253:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},371242:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},568234:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},739788:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},144415:function(e,t,n){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);