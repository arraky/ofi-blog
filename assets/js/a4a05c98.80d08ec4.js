"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[63302],{603905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(667294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=l(t),k=s,d=c["".concat(i,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(d,r(r({ref:e},o),{},{components:t})):n.createElement(d,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(a,e,t){t.d(e,{Z:function(){return s}});var n=t(667294);function s(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},409877:function(a,e,t){t.d(e,{Z:function(){return o}});var n=t(583117),s=t(667294),m=t(972389),r=t(336162),p=t(386010),i="tabItem_LplD";function l(a){var e,t,m,l=a.lazy,o=a.block,N=a.defaultValue,c=a.values,k=a.groupId,d=a.className,u=s.Children.map(a.children,(function(a){if((0,s.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:u.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,r.lx)(h,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===N?N:null!=(e=null!=N?N:null==(t=u.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(m=u[0])?void 0:m.props.value;if(null!==v&&!h.some((function(a){return a.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,r.UB)(),f=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,s.useState)(v),x=y[0],D=y[1],M=[],T=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=f[k];null!=E&&E!==x&&h.some((function(a){return a.value===E}))&&D(E)}var C=function(a){var e=a.currentTarget,t=M.indexOf(e),n=h[t].value;n!==x&&(T(e),D(n),null!=k&&w(k,n))},z=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=M.indexOf(a.currentTarget)+1;t=M[n]||M[0];break;case"ArrowLeft":var s=M.indexOf(a.currentTarget)-1;t=M[s]||M[M.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":o},d)},h.map((function(a){var e=a.value,t=a.label,m=a.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(a){return M.push(a)},onKeyDown:z,onFocus:C,onClick:C},m,{className:(0,p.default)("tabs__item",i,null==m?void 0:m.className,{"tabs__item--active":x===e})}),null!=t?t:e)}))),l?(0,s.cloneElement)(u.filter((function(a){return a.props.value===x}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},u.map((function(a,e){return(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})}))))}function o(a){var e=(0,m.Z)();return s.createElement(l,(0,n.Z)({key:String(e)},a))}},884384:function(a,e,t){t.d(e,{Z:function(){return N}});var n=t(667294),s={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},m=t(592814),r=t(51436),p=t(386010),i=function(a){return n.createElement("span",{className:s.details},n.createElement("span",{className:(0,p.default)("badge badge--secondary",s.badgeItem)},"Autor: ",a.author),n.createElement("a",{href:a.licence_url,target:"_blank",className:s.badgeItem},n.createElement("span",{className:(0,p.default)("badge badge--secondary")},"Lizenz: ",a.licence)),a.edited&&n.createElement("span",{className:(0,p.default)("badge badge--secondary",s.badgeItem)},"Bearbeitet"),n.createElement("a",{href:a.source,target:"_blank",className:s.badgeItem},n.createElement("span",{className:(0,p.default)("badge badge--secondary")},n.createElement(m.G,{icon:r.Xjp}))))},l=function(a,e){return void 0===e&&(e="px"),/^\d+(\.\d*)?$/.test(a)?""+a+e:a},o=function(a){var e={},t=Object.assign({},a.options);return t.noMargins&&delete t.noMargins,t.size&&(e.maxWidth="min(90vw, "+l(t.size)+")",e.maxHeight=l(t.size),delete t.size),t.height&&(e.maxHeight=l(t.height),e.height=l(t.height),delete t.height),t.width&&(e.maxWidth="min(90vw, "+l(t.width)+")",e.width=l(t.width),delete t.width),e=Object.assign({},e,t),n.createElement("img",{src:a.src,alt:a.alt,style:e,title:a.isInline&&a.bib?"Author: "+a.bib.author+" @ "+a.bib.licence+(a.bib.edited?", Bearbeitet":""):void 0})},N=function(a){if(a.isInline)return n.createElement(o,a);var e=n.useState(!1),t=(e[0],e[1]),m=n.useState(!1),r=m[0],l=m[1],N=a.caption&&"undefined"!==a.caption,c=a.bib||N;return a.options.noMargins&&!0,n.createElement("figure",{className:(0,p.default)(s.container,a.options.noMargins&&s.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(a){var e,n,s,m,r;e=a.currentTarget.getBoundingClientRect(),n=a.clientX,s=a.clientY,m=e.left<=n&&e.right>=n,r=e.top<=s&&e.bottom>=s,m&&r||t(!1)}},n.createElement(o,a),c&&n.createElement("figcaption",null,N&&n.createElement("span",null,a.caption),a.bib&&n.createElement("span",{className:(0,p.default)(s.bib,r?s.visible:void 0),onClick:function(){return l(!r)}},"@"),r&&n.createElement(i,a.bib)))}},66051:function(a,e,t){t.d(e,{Z:function(){return r}});var n=t(21073),s=t(667294),m=t(409877),r=function(a){function e(){return a.apply(this,arguments)||this}return(0,n.Z)(e,a),e.prototype.render=function(){return s.createElement(m.Z,{groupId:"taschenrechner",defaultValue:"ti30",values:[{label:"TI-30 eco RS",value:"ti30"},{label:"TI-30X IIS",value:"ti30X"}]},this.props.children)},e}(s.Component)},935656:function(a,e,t){t.r(e),t.d(e,{assets:function(){return k},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=t(583117),s=t(480102),m=(t(667294),t(603905)),r=t(884384),p=t(66051),i=t(358215),l=["components"],o={title:"Taschenrechner"},N=void 0,c={unversionedId:"Math/Taschenrechner/index",id:"version-25h/Math/Taschenrechner/index",title:"Taschenrechner",description:"Erlaubte Taschenrechner",source:"@site/versioned_docs/version-25h/Math/Taschenrechner/index.md",sourceDirName:"Math/Taschenrechner",slug:"/Math/Taschenrechner/",permalink:"/25h/Math/Taschenrechner/",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/Math/Taschenrechner/index.md",tags:[],version:"25h",frontMatter:{title:"Taschenrechner"},sidebar:"version-25h/sidebar",previous:{title:"Black Box",permalink:"/25h/Math/BlackBox/"}},k={},d=[{value:"Winkel",id:"winkel",level:2},{value:"Umrechnung mit Minuten/Sekunden",id:"umrechnung-mit-minutensekunden",level:3},{value:"<code>DD\u25baDMS</code>",id:"dddms",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd",level:4},{value:"<code>DD\u25baDMS</code>",id:"dddms-1",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd-1",level:4}],u={toc:d};function h(a){var e=a.components,o=(0,s.Z)(a,l);return(0,m.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Erlaubte Taschenrechner"),(0,m.kt)("div",{style:{},className:"flex flex-cards"},(0,m.kt)("div",{parentName:"div",style:{},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,m.kt)(r.Z,{bib:void 0,caption:"TI-30 eco RS",options:{},isInline:!1,src:t(612863).Z,alt:"TI-30 eco RS",mdxType:"Image"})))),(0,m.kt)("div",{parentName:"div",style:{},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,m.kt)(r.Z,{bib:void 0,caption:"TI-30X IIS",options:{},isInline:!1,src:t(884196).Z,alt:"TI-30X IIS",mdxType:"Image"}))))),(0,m.kt)("h2",{id:"winkel"},"Winkel"),(0,m.kt)("h3",{id:"umrechnung-mit-minutensekunden"},"Umrechnung mit Minuten/Sekunden"),(0,m.kt)("p",null,"Diese Umrechnung ist gedacht f\xfcr Winkeleinheiten (Dezimal zu Grad ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0"),", Minuten ",(0,m.kt)("inlineCode",{parentName:"p"},"'"),", Sekunden ",(0,m.kt)("inlineCode",{parentName:"p"},"''")," und umgekehrt)."),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"DD")," steht f\xfcr die Dezimaleinheit (Decimal Degree), ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS")," f\xfcr Grad, Minuten, Sekunden (Degree, Minutes, Seconds)."),(0,m.kt)(p.Z,{mdxType:"TRTabs"},(0,m.kt)(i.Z,{value:"ti30",mdxType:"TabItem"},(0,m.kt)("h4",{id:"dddms"},(0,m.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2.66"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"6"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DD\u25baDMS")),(0,m.kt)("h4",{id:"dmsdd"},(0,m.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"4"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2.84")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.5024")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")),(0,m.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Danger")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Minuten und Sekunden m\xfcssen in obiger Schreibweise immer zwei Stellen aufweisen! ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"8"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3\xb0 8' 9''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),"  muss also als ",(0,m.kt)("inlineCode",{parentName:"p"},"3.0809")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")," eingegeben werden. ")))),(0,m.kt)(i.Z,{value:"ti30X",mdxType:"TabItem"},(0,m.kt)("h4",{id:"dddms-1"},(0,m.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2.66"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"6"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0 ' ''")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\u25baDMS")),(0,m.kt)("h4",{id:"dmsdd-1"},(0,m.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"4"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2.84")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"50")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"'")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"24")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"''")))))}h.isMDXComponent=!0},612863:function(a,e,t){e.Z=t.p+"assets/images/TI-30-576feff68058d9fb4bc334570a233fb9.jpg"},884196:function(a,e,t){e.Z=t.p+"assets/images/TI-30XIIS-d1d1fd0126bba0cefd758c9ab68c85e8.jpg"}}]);