"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[23195],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),i=n(67294),l=n(72389),r=n(79443);var s=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(1436),p=n(86010),m="tabItem_1uMI";function u(e){var t,n,a,l=e.lazy,r=e.block,u=e.defaultValue,d=e.values,k=e.groupId,c=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),N=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),b=v.tabGroupChoices,T=v.setTabGroupChoices,C=(0,i.useState)(g),y=C[0],Z=C[1],w=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=b[k];null!=I&&I!==y&&h.some((function(e){return e.value===I}))&&Z(I)}var D=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==y&&(x(t),Z(a),null!=k&&T(k,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.currentTarget)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":r},c)},h.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,p.default)("tabs__item",m,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:D,onClick:D},null!=n?n:t)}))),l?(0,i.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,l.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},85107:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(21073),i=n(67294),l=n(26396),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},65648:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(44415),i=n(21073),l=n(91189),r=n(67294),s=n(92814),o="videoComponent_187V",p="headerClosed_1HK6",m="headerOpen_hP6H",u="minimize_1JZh",d="description_2U1a",k="title_1XFt",c="cardOpen_1vws",f=n(51436),h=n(86010),N=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,(0,l.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,l.Z)((0,a.Z)(t),"videoRef",r.createRef()),(0,l.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,l.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,i=e.children;return r.createElement("div",{ref:this.videoRef,className:o},this.state.open?r.createElement("div",{className:c},r.createElement("div",{className:m},t&&r.createElement("h5",{className:k},t),!this.props.expanded&&r.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},r.createElement(s.G,{icon:f.IQi})),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:p},r.createElement("div",{className:k},t||"Video"),i&&r.createElement("div",{className:d},i)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:f.IJ7,spin:!0}))))},t}(r.Component)},31413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return N},default:function(){return v}});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=n(84384),s=n(85107),o=n(44996),p=n(65648),m=n(58215),u=n(92814),d=n(51417),k=["components"],c={},f="Systemnavigation",h={unversionedId:"BYOD-Basics/Skills/navigation",id:"version-25h/BYOD-Basics/Skills/navigation",title:"Systemnavigation",description:"Tastatur",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/005-navigation.mdx",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/navigation",permalink:"/25h/BYOD-Basics/Skills/navigation",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/005-navigation.mdx",tags:[],version:"25h",sidebarPosition:5,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"Dateiexplorer",permalink:"/25h/BYOD-Basics/Skills/dateiexplorer"},next:{title:"Software",permalink:"/25h/BYOD-Basics/Skills/software"}},N=[{value:"Tastatur",id:"tastatur",children:[{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",children:[],level:3},{value:"Pfeiltasten",id:"pfeiltasten",children:[],level:3},{value:"Klammern",id:"klammern",children:[],level:3},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",children:[],level:3}],level:2},{value:"Touch-Gesten",id:"touch-gesten",children:[{value:"Klicken durch Tippen",id:"klicken-durch-tippen",children:[],level:3},{value:"Rechtsklick",id:"rechtsklick",children:[],level:3},{value:"Scrollen",id:"scrollen",children:[],level:3},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",children:[],level:3},{value:"Virtuelle Desktops",id:"virtuelle-desktops",children:[{value:"Erstellen",id:"erstellen",children:[],level:4},{value:"Wechseln",id:"wechseln",children:[],level:4}],level:3}],level:2}],g={toc:N};function v(e){var t=e.components,c=(0,i.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,l.kt)("h2",{id:"tastatur"},"Tastatur"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2318")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Option")," oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2325")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn"))))),(0,l.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.G,{icon:d.ts2,mdxType:"FontAwesomeIcon"}),(0,l.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,l.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,l.kt)("h3",{id:"klammern"},"Klammern"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,l.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + g")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,l.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,l.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,l.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(83738).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(32556).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,l.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(85377).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(2401).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"scrollen"},"Scrollen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(11143).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(52059).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(56582).Z,mdxType:"Image"})),(0,l.kt)("p",null,"(",(0,l.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Mission Control"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(50042).Z,mdxType:"Image"})))),(0,l.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,l.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,l.kt)("h4",{id:"erstellen"},"Erstellen"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Virtuelle Desktops: Mit ",(0,l.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)(p.Z,{src:(0,o.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,l.kt)("h4",{id:"wechseln"},"Wechseln"),(0,l.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(72185).Z,mdxType:"Image"}))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(12674).Z,mdxType:"Image"})))),(0,l.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,l.kt)(s.Z,{mdxType:"OsTabs"},(0,l.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,l.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}v.isMDXComponent=!0},12674:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},32556:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},50042:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},2401:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},52059:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},72185:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},83738:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},56582:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},85377:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},11143:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},44415:function(e,t,n){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);