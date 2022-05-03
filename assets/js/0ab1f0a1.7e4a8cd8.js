"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86621],{358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(667294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(583117),i=n(667294),l=n(972389),r=n(336162),s=n(386010),o="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,m=e.block,u=e.defaultValue,d=e.values,c=e.groupId,k=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,r.lx)(N,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!N.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,r.UB)(),v=g.tabGroupChoices,T=g.setTabGroupChoices,y=(0,i.useState)(b),C=y[0],Z=y[1],w=[],x=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var I=v[c];null!=I&&I!==C&&N.some((function(e){return e.value===I}))&&Z(I)}var E=function(e){var t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==C&&(x(t),Z(a),null!=c&&T(c,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.currentTarget)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:E,onClick:E},l,{className:(0,s.default)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},l=n(592814),r=n(51436),s=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(l.G,{icon:r.Xjp}))))},p=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},m=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+p(n.size)+")",t.maxHeight=p(n.size),delete n.size),n.height&&(t.maxHeight=p(n.height),t.height=p(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+p(n.width)+")",t.width=p(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(m,e);var t=a.useState(!1),n=(t[0],t[1]),l=a.useState(!1),r=l[0],p=l[1],u=e.caption&&"undefined"!==e.caption,d=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,l,r;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,l=t.left<=a&&t.right>=a,r=t.top<=i&&t.bottom>=i,l&&r||n(!1)}},a.createElement(m,e),d&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,r?i.visible:void 0),onClick:function(){return p(!r)}},"@"),r&&a.createElement(o,e.bib)))}},285107:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(21073),i=n(667294),l=n(409877),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(144415),i=n(21073),l=n(191189),r=n(667294),s=n(592814),o="videoComponent_YfiL",p="headerClosed_s_Of",m="headerOpen_AzNA",u="minimize_pBQC",d="description_p2GN",c="title_YxV5",k="cardOpen_IEP6",f=n(51436),N=n(386010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,(0,l.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,l.Z)((0,a.Z)(t),"videoRef",r.createRef()),(0,l.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,l.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,i=e.children;return r.createElement("div",{ref:this.videoRef,className:o},this.state.open?r.createElement("div",{className:k},r.createElement("div",{className:m},t&&r.createElement("h5",{className:c},t),!this.props.expanded&&r.createElement("button",{className:(0,N.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},r.createElement(s.G,{icon:f.IQi})),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:p},r.createElement("div",{className:c},t||"Video"),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))))},t}(r.Component)},717781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var a=n(583117),i=n(480102),l=(n(667294),n(603905)),r=n(884384),s=n(285107),o=n(644996),p=n(765648),m=n(358215),u=n(592814),d=n(951417),c=["components"],k={},f="Systemnavigation",N={unversionedId:"byod-basics/v24/navigation",id:"byod-basics/v24/navigation",title:"Systemnavigation",description:"Tastatur",source:"@site/docs/byod-basics/v24/004-navigation.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/navigation",permalink:"/byod-basics/v24/navigation",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/004-navigation.mdx",tags:[],version:"current",lastUpdatedAt:1628320816,formattedLastUpdatedAt:"7.8.2021",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Dateiexplorer",permalink:"/byod-basics/v24/dateiexplorer"},next:{title:"Software",permalink:"/byod-basics/v24/software"}},h={},b=[{value:"Tastatur",id:"tastatur",level:2},{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",level:3},{value:"Pfeiltasten",id:"pfeiltasten",level:3},{value:"Klammern",id:"klammern",level:3},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",level:3},{value:"Touch-Gesten",id:"touch-gesten",level:2},{value:"Klicken durch Tippen",id:"klicken-durch-tippen",level:3},{value:"Rechtsklick",id:"rechtsklick",level:3},{value:"Scrollen",id:"scrollen",level:3},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",level:3},{value:"Virtuelle Desktops",id:"virtuelle-desktops",level:3},{value:"Erstellen",id:"erstellen",level:4},{value:"Wechseln",id:"wechseln",level:4}],g={toc:b};function v(e){var t=e.components,k=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},g,k,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,l.kt)("h2",{id:"tastatur"},"Tastatur"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2318")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Option")," oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2325")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn"))))),(0,l.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"}),(0,l.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,l.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,l.kt)("h3",{id:"klammern"},"Klammern"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,l.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + g")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,l.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,l.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,l.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(2253).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(180800).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,l.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(568234).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(137089).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"scrollen"},"Scrollen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(739788).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(127710).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(371242).Z,mdxType:"Image"})),(0,l.kt)("p",null,"(",(0,l.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Mission Control"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(763407).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,l.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,l.kt)("h4",{id:"erstellen"},"Erstellen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Virtuelle Desktops: Mit ",(0,l.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,l.kt)("h4",{id:"wechseln"},"Wechseln"),(0,l.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(499368).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(387953).Z,mdxType:"Image"})))),(0,l.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}v.isMDXComponent=!0},387953:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},180800:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},763407:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},137089:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},127710:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},499368:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},2253:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},371242:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},568234:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},739788:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},144415:function(e,t,n){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);