"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[92278],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},130592:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(667294),o={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},a=r(386010),c=function(e){return n.createElement("div",{className:o.step},e.code)},l=function(e){return n.createElement("div",{className:(0,a.default)(o.call,o.step,o.bordered)},e.code)},s=function(e){return n.createElement("div",{className:(0,a.default)(o.step,o.statement)},e.code)},i=function(e){return n.createElement("div",{className:(0,a.default)(o.repeat,o.step,o.indent)},n.createElement("div",{className:o.header},e.code),n.createElement("div",{className:o.body},e.block&&n.createElement(f,{program:e.block})))},u=function(e){return n.createElement("div",{className:(0,a.default)(o.def,o.step,o.indent)},n.createElement("div",{className:o.header},e.code),n.createElement("div",{className:o.body},e.block&&n.createElement(f,{program:e.block})))},m=function(e){return n.createElement("div",{className:(0,a.default)(o.input,o.step)},e.code)},d=function(e){return n.createElement("div",{className:(0,a.default)(o.if,o.step,o.indent)},n.createElement("div",{className:o.header},e.code),n.createElement("div",{className:o.body},e.block&&n.createElement(f,{program:e.block})))},p=function(e){return n.createElement("div",{className:(0,a.default)(o.else,o.step)},n.createElement("div",{className:o.header},e.code),n.createElement("div",{className:o.body},e.block&&n.createElement(f,{program:e.block})))},f=function(e){return n.createElement("div",{className:o.strukto},e.program.map((function(e,t){switch(e.type){case"call":return n.createElement(l,{key:t,code:e.code});case"def":return n.createElement(u,{key:t,code:e.code,block:e.block});case"repeat":return n.createElement(i,{key:t,code:e.code,block:e.block});case"step":return n.createElement(c,{key:t,code:e.code});case"statement":return n.createElement(s,{key:t,code:e.code});case"input":return n.createElement(m,{key:t,code:e.code});case"if":return n.createElement(d,{key:t,code:e.code,block:e.block});case"elif":case"else":return n.createElement(p,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},y=f},571053:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(583117),o=r(480102),a=(r(667294),r(603905)),c=r(130592),l=["components"],s={title:"Struktos"},i=void 0,u={unversionedId:"Programmieren-1/Algorithmen/struktos.nosync",id:"Programmieren-1/Algorithmen/struktos.nosync",title:"Struktos",description:"*",source:"@site/docs/Programmieren-1/01-Algorithmen/100-struktos.nosync.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/struktos.nosync",permalink:"/Programmieren-1/Algorithmen/struktos.nosync",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/100-struktos.nosync.md",tags:[],version:"current",lastUpdatedAt:1633390975,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:100,frontMatter:{title:"Struktos"},sidebar:"sidebar",previous:{title:"RoboZZle",permalink:"/Programmieren-1/Algorithmen/Uebungen/robozzle"},next:{title:"Turtlegrafik",permalink:"/category/turtlegrafik"}},m={},d=[],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(5):\n    left(90)\n    forward(17)\n    right(90)\n    forward(29) \n"))),(0,a.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,a.kt)(c.Z,{program:[{type:"repeat",code:(0,a.kt)("span",null,(0,a.kt)("u",null,"5")," mal wiederholen:"),block:[{type:"step",code:(0,a.kt)("span",null,(0,a.kt)("u",null,"90"),"\xb0 nach links")},{type:"step",code:(0,a.kt)("span",null,(0,a.kt)("u",null,"17")," Schritte vorw\xe4rts")},{type:"step",code:(0,a.kt)("span",null,(0,a.kt)("u",null,"90"),"\xb0 nach rechts")},{type:"step",code:(0,a.kt)("span",null,(0,a.kt)("u",null,"29")," Schritte vorw\xe4rts")}]}],mdxType:"Strukto"}))))}f.isMDXComponent=!0}}]);