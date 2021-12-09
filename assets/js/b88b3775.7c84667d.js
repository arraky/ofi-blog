"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78979],{58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(83117),r=n(67294),a=n(72389),s=n(79443);var o=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(1436),u=n(86010),c="tabItem_1uMI";function d(e){var t,n,i,a=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),k=g.tabGroupChoices,w=g.setTabGroupChoices,E=(0,r.useState)(y),Z=E[0],x=E[1],T=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var B=k[p];null!=B&&B!==Z&&b.some((function(e){return e.value===B}))&&x(B)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),i=b[n].value;i!==Z&&(N(t),x(i),null!=p&&w(p,i))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=T.indexOf(e.currentTarget)+1;n=T[i]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,className:(0,u.default)("tabs__item",c,{"tabs__item--active":Z===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:I,onClick:I},null!=n?n:t)}))),a?(0,r.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,a.Z)();return r.createElement(d,(0,i.Z)({key:String(t)},e))}},85107:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(21073),r=n(67294),a=n(26396),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},65648:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(44415),r=n(21073),a=n(91189),s=n(67294),o=n(92814),l="videoComponent_187V",u="headerClosed_1HK6",c="headerOpen_hP6H",d="minimize_1JZh",m="description_2U1a",p="title_1XFt",f="cardOpen_1vws",v=n(51436),b=n(86010),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,a.Z)((0,i.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,a.Z)((0,i.Z)(t),"videoRef",s.createRef()),(0,a.Z)((0,i.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,a.Z)((0,i.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,r=e.children;return s.createElement("div",{ref:this.videoRef,className:l},this.state.open?s.createElement("div",{className:f},s.createElement("div",{className:c},t&&s.createElement("h5",{className:p},t),!this.props.expanded&&s.createElement("button",{className:(0,b.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},s.createElement(o.G,{icon:v.IQi})),r&&s.createElement("div",{className:m},r)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:v.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:u},s.createElement("div",{className:p},t||"Video"),r&&s.createElement("div",{className:m},r)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:v.IJ7,spin:!0}))))},t}(s.Component)},2877:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return b},toc:function(){return h},default:function(){return g}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),s=n(84384),o=n(85107),l=n(58215),u=n(92814),c=n(51417),d=n(44996),m=n(65648),p=["components"],f={},v="Betriebssystem",b={unversionedId:"BYOD-Basics/betriebssystem",id:"version-24f/BYOD-Basics/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-24f/02-BYOD-Basics/002-betriebssystem.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/betriebssystem",permalink:"/24f/BYOD-Basics/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/02-BYOD-Basics/002-betriebssystem.mdx",tags:[],version:"24f",sidebarPosition:2,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Basics",permalink:"/24f/BYOD-Basics/overview"},next:{title:"Dateiexplorer",permalink:"/24f/BYOD-Basics/dateiexplorer"}},h=[{value:"Globale Suche",id:"globale-suche",children:[],level:2},{value:"Night-Shift",id:"night-shift",children:[],level:2}],y={toc:h};function g(e){var t=e.components,f=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},y,f,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,a.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,a.kt)(o.Z,{mdxType:"OsTabs"},(0,a.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,a.kt)(u.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,a.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,a.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(70427).Z,mdxType:"Image"}))),(0,a.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,a.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,a.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(481).Z,mdxType:"Image"})))),(0,a.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,a.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,a.kt)(o.Z,{mdxType:"OsTabs"},(0,a.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,a.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}g.isMDXComponent=!0},481:function(e,t,n){t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},70427:function(e,t,n){t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"},44415:function(e,t,n){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})}}]);