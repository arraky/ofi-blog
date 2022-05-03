"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6988],{358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(667294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(583117),i=n(667294),r=n(972389),s=n(336162),l=n(386010),o="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,u=e.block,d=e.defaultValue,m=e.values,b=e.groupId,p=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),k=y.tabGroupChoices,E=y.setTabGroupChoices,w=(0,i.useState)(g),N=w[0],x=w[1],Z=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=k[b];null!=I&&I!==N&&h.some((function(e){return e.value===I}))&&x(I)}var _=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=h[n].value;a!==N&&(T(t),x(a),null!=b&&E(b,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;n=Z[a]||Z[0];break;case"ArrowLeft":var i=Z.indexOf(e.currentTarget)-1;n=Z[i]||Z[Z.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":u},p)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:C,onFocus:_,onClick:_},r,{className:(0,l.default)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(592814),s=n(51436),l=n(386010),o=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,l.default)("badge badge--secondary")},a.createElement(r.G,{icon:s.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),r=a.useState(!1),s=r[0],c=r[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,l.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,r,s;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=t.left<=a&&t.right>=a,s=t.top<=i&&t.bottom>=i,r&&s||n(!1)}},a.createElement(u,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,l.default)(i.bib,s?i.visible:void 0),onClick:function(){return c(!s)}},"@"),s&&a.createElement(o,e.bib)))}},285107:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(21073),i=n(667294),r=n(409877),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(144415),i=n(21073),r=n(191189),s=n(667294),l=n(592814),o="videoComponent_YfiL",c="headerClosed_s_Of",u="headerOpen_AzNA",d="minimize_pBQC",m="description_p2GN",b="title_YxV5",p="cardOpen_IEP6",f=n(51436),h=n(386010),v=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,(0,r.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,r.Z)((0,a.Z)(t),"videoRef",s.createRef()),(0,r.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,r.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,i=e.children;return s.createElement("div",{ref:this.videoRef,className:o},this.state.open?s.createElement("div",{className:p},s.createElement("div",{className:u},t&&s.createElement("h5",{className:b},t),!this.props.expanded&&s.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},s.createElement(l.G,{icon:f.IQi})),i&&s.createElement("div",{className:m},i)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:c},s.createElement("div",{className:b},t||"Video"),i&&s.createElement("div",{className:m},i)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))))},t}(s.Component)},80072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return g}});var a=n(583117),i=n(480102),r=(n(667294),n(603905)),s=n(884384),l=n(285107),o=n(358215),c=n(592814),u=n(951417),d=n(644996),m=n(765648),b=["components"],p={},f="Betriebssystem",h={unversionedId:"byod-basics/v24/betriebssystem",id:"byod-basics/v24/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v24/002-betriebssystem.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/betriebssystem",permalink:"/byod-basics/v24/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/002-betriebssystem.mdx",tags:[],version:"current",lastUpdatedAt:1628320816,formattedLastUpdatedAt:"7.8.2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Basics",permalink:"/byod-basics/v24/overview"},next:{title:"Dateiexplorer",permalink:"/byod-basics/v24/dateiexplorer"}},v={},g=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],y={toc:g};function k(e){var t=e.components,p=(0,i.Z)(e,b);return(0,r.kt)("wrapper",(0,a.Z)({},y,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,r.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,r.kt)(c.G,{icon:u.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,r.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(266901).Z,mdxType:"Image"}))),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,r.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(929021).Z,mdxType:"Image"})))),(0,r.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,r.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}k.isMDXComponent=!0},929021:function(e,t,n){t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},266901:function(e,t,n){t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"},144415:function(e,t,n){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);