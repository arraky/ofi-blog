"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8504],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_boZc",i=n(73727),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.o)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(67294),a=n(26528),i=n(72389),o=n(71217),l=n(79265),c=n(21314),u=n(78982),s=n(46858),m=r.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,u.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,u.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},f=(0,o.Pi)((function(e){var t=(0,c.o)("documentStore"),n=r.useState(p(t,e))[0];return(0,i.Z)()?r.createElement(m.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),y={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},v=n(86010),h=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){var t=e.value,n=t,a=void 0;if(h.test(t)){var i=function(e){if(h.test(e))return e.match(h).groups.klass}(t);a=y[i],n=""+t.replace(h,"")}return r.createElement("option",{value:t,className:a},n)},g=n(92814),E=n(51436),w=n(68949),x=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return y[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},S=(0,o.Pi)((function(e){var t,n=r.useState("unchecked"),a=n[0],i=n[1],o=r.useContext(m),l=function(e){i("unchecked"),o.setData({value:e,type:"string"})},c=function(t){var n=e.sanitizer?e.sanitizer:function(e){return e};i(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,w.U5)((function(){return o.loaded}),(function(e){e&&c(o.data.value)}))}),[]),r.createElement("div",{className:y.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return l(e.target.value)},value:o.data.value,className:k(o.data.value),disabled:!o.loaded},e.select.map((function(e,t){return r.createElement(b,{value:e,key:t})}))):r.createElement("input",{type:"text",onChange:function(e){return l(e.target.value)},value:o.data.value,disabled:!o.loaded||o.isReadonly}),e.solution&&r.createElement("button",{onClick:function(){return c(o.data.value)},className:(0,v.default)(y[a],y.checkButton)},r.createElement(g.G,{icon:(t=a,"correct"===t?E.f8k:"wrong"===t?E.nYk:E.sph)})))})),A=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){return y[function(e){if(A.test(e))return e.match(A).groups.klass}(e)]},P=(0,o.Pi)((function(e){var t=r.useContext(m),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return r.createElement("div",{className:y.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:N(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(b,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.isReadonly})})))})),_=void 0,z=(0,o.Pi)((function(e){var t=r.useState(!1),a=t[0],i=t[1],o=r.useState(!1),l=o[0],c=o[1],u=r.useRef(null),s=r.useContext(m),d=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(_)return e();Promise.all([Promise.all([n.e(2930),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(3312),n.e(1940)]).then(n.bind(n,11940)),Promise.all([n.e(3312),n.e(7617)]).then(n.bind(n,37617))]).then((function(t){_=t[0].default;var n=t[1].default,r=t[2].default;n.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),u&&u.current&&u.current.editor.getModule("toolbar").container.addEventListener("mousedown",d))})),function(){e=!1,u&&u.current&&u.current.editor.getModule("toolbar").container.removeEventListener("mousedown",d)}}),[]);return _&&l?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(_,{ref:u,theme:"snow",readOnly:!s.loaded||s.isReadonly,className:(0,v.default)(y.quillAnswer,a?void 0:"disable-toolbar"),value:s.loaded?s.data.value||"":"Laden...",onChange:function(e,t,n,r){var a,i;a=e,void 0===i&&(i=0),l&&s.setData({value:a,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),C=n(3239),O=(0,o.Pi)((function(){var e=r.useContext(m),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(m.Provider,{value:new l.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(z,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(S,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(P,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),K=(0,o.Pi)((function(){return r.useContext(m).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,v.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=(0,o.Pi)((function(e){var t=(0,c.o)("msalStore");return r.createElement(f,e,r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),t.loggedIn&&r.createElement(O,null),t.loggedIn&&r.createElement(K,null),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(S,e),"array"===e.type&&r.createElement(P,e)))}))},67460:function(e,t,n){var r=n(51436),a=n(92814),i=n(86010),o=n(14842),l=n(67294),c={none:r.cNd,copied:r.E9T,error:r.nYk,spin:r.IJ7,ready:r.Yjj},u={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,r=l.useState(void 0),s=r[0],m=r[1],d=l.useState("none"),p=d[0],f=d[1],y=l.useRef(null);return l.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return f("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),l.useEffect((function(){"none"!==p&&f("none")}),[t]),l.createElement(l.Fragment,null,l.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",u[p]),disabled:"spin"===p,onClick:function(){if(null!==y.current){if("none"===p)return f("spin"),(0,o.SE)(y.current,n).then((function(e){m(e),f("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=s,e))]).then((function(){f("copied")})).catch((function(e){f("error"),console.warn(e)}))}catch(t){console.warn(t),f("error")}}}},l.createElement(a.G,{icon:c[p]})),l.createElement("div",{ref:y,className:"copy-container"},t))}},21314:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(67294),a=n(32930),i=function(e){return r.useContext(a.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},66557:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return ue},default:function(){return pe},frontMatter:function(){return ce},metadata:function(){return se},toc:function(){return me}});var r=n(87462),a=n(63366),i=n(67294),o=n(3905),l=n(51436),c=n(92814),u=n(86010),s=function(e){if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;for(var t=Math.floor(Math.sqrt(e)),n=5;n<=t;n+=6)if(e%n==0||e%(n+2)==0)return!1;return!0},m=function(e,t){if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);var n=(t=Math.floor(t))-e+1,r=Math.floor(Math.random()*n)+e;if(s(r))return r;for(var a=r-1,i=r+1;a>=e&&i<=t;){if(s(a))return a;if(s(i))return i;a-=1,i+=1}for(;a>=e;){if(s(a))return a;a-=1}for(;i<=t;){if(s(i))return i;i+=1}return null},d=n(96734),p=n(29009),f=n(90896),y=n(18446),v=n.n(y),h=n(23560),b=n.n(h),g=n(14293),E=n.n(g),w=n(74524),x=n(94184),k=n.n(x),S=n(48710),A=n(2763),N=n(52017),P=n(47523),_=function(){return null};_.displayName="ZAxis",_.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var z=n(33508),C=n(36353),O=n(86641),K=n(43815),D=n(69055),I=n(77718),j=n(79896);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var a=J(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return G(this,n)}}function G(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(o,e);var t,n,r,a=H(o);function o(){var e;B(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,D.EL)("recharts-scatter-"),e}return t=o,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return i.isValidElement(e)?n=i.cloneElement(e,t):b()(e)?n=e(t):"string"==typeof e&&(n=i.createElement(C.v,Z({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,r=n.shape,a=n.activeShape,l=n.activeIndex,c=(0,j.L6)(this.props);return e.map((function(e,n){var u=M(M({key:"symbol-".concat(n)},c),e);return i.createElement(S.m,Z({className:"recharts-scatter-symbol"},(0,j.bw)(t.props,e,n),{key:"symbol-".concat(n)}),o.renderSymbolItem(l===n?a:r,u))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,r=t.isAnimationActive,a=t.animationBegin,o=t.animationDuration,l=t.animationEasing,c=t.animationId,u=this.state.prevPoints;return i.createElement(w.ZP,{begin:a,duration:o,isActive:r,easing:l,from:{t:0},to:{t:1},key:"pie-".concat(c),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var r=t.t,a=n.map((function(e,t){var n=u&&u[t];if(n){var a=(0,D.k4)(n.cx,e.cx),i=(0,D.k4)(n.cy,e.cy),o=(0,D.k4)(n.size,e.size);return M(M({},e),{},{cx:a(r),cy:i(r),size:o(r)})}var l=(0,D.k4)(0,e.size);return M(M({},e),{},{size:l(r)})}));return i.createElement(S.m,null,e.renderSymbolsStatically(a))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,r=this.state.prevPoints;return!(n&&t&&t.length)||r&&v()(r,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,r=e.yAxis,a=e.children,o=(0,N.NN)(a,O.W.displayName);if(!o)return null;function l(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,I.F$)(e,t)}}function c(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,I.F$)(e,t)}}return o.map((function(e,a){var o=e.props.direction;return i.cloneElement(e,{key:a,data:t,xAxis:n,yAxis:r,layout:"x"===o?"vertical":"horizontal",dataPointFormatter:"x"===o?c:l})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,r=n.points,a=n.line,o=n.lineType,l=n.lineJointType,c=(0,j.L6)(this.props),u=(0,j.L6)(a);if("joint"===o)e=r.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===o){var s=(0,D.wr)(r),m=s.xmin,d=s.xmax,p=s.a,f=s.b,y=function(e){return p*e+f};e=[{x:m,y:y(m)},{x:d,y:y(d)}]}var v=M(M(M({},c),{},{fill:"none",stroke:c&&c.fill},u),{},{points:e});return t=i.isValidElement(a)?i.cloneElement(a,v):b()(a)?a(v):i.createElement(z.H,Z({},v,{type:l})),i.createElement(S.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,r=e.line,a=e.className,o=e.xAxis,l=e.yAxis,c=e.left,u=e.top,s=e.width,m=e.height,d=e.id,p=e.isAnimationActive;if(t||!n||!n.length)return null;var f=this.state.isAnimationFinished,y=k()("recharts-scatter",a),v=o&&o.allowDataOverflow||l&&l.allowDataOverflow,h=E()(d)?this.id:d;return i.createElement(S.m,{className:y,clipPath:v?"url(#clipPath-".concat(h,")"):null},v?i.createElement("defs",null,i.createElement("clipPath",{id:"clipPath-".concat(h)},i.createElement("rect",{x:c,y:u,width:s,height:m}))):null,r&&this.renderLine(),this.renderErrorBar(),i.createElement(S.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!p||f)&&A.e.renderCallByParent(this.props,n))}}])&&R(t.prototype,n),r&&R(t,r),o}(i.PureComponent);W.displayName="Scatter",W.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!P.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},W.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,o=e.xAxisTicks,l=e.yAxisTicks,c=e.offset,u=a.props.tooltipType,s=(0,N.NN)(a.props.children,K.b.displayName),m=E()(t.dataKey)?a.props.dataKey:t.dataKey,d=E()(n.dataKey)?a.props.dataKey:n.dataKey,p=r&&r.dataKey,f=r?r.range:_.defaultProps.range,y=f&&f[0],v=t.scale.bandwidth?t.scale.bandwidth():0,h=n.scale.bandwidth?n.scale.bandwidth():0,b=i.map((function(e,i){var c=(0,I.F$)(e,m),f=(0,I.F$)(e,d),b=!E()(p)&&(0,I.F$)(e,p)||"-",g=[{name:E()(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:c,payload:e,dataKey:m,type:u},{name:E()(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:f,payload:e,dataKey:d,type:u}];"-"!==b&&g.push({name:r.name||r.dataKey,unit:r.unit||"",value:b,payload:e,dataKey:p,type:u});var w=(0,I.Hv)({axis:t,ticks:o,bandSize:v,entry:e,index:i,dataKey:m}),x=(0,I.Hv)({axis:n,ticks:l,bandSize:h,entry:e,index:i,dataKey:d}),k="-"!==b?r.scale(b):y,S=Math.sqrt(Math.max(k,0)/Math.PI);return M(M({},e),{},{cx:w,cy:x,x:w-S,y:x-S,xAxis:t,yAxis:n,zAxis:r,width:2*S,height:2*S,size:k,node:{x:c,y:f,z:b},tooltipPayload:g,tooltipPosition:{x:w,y:x},payload:e},s&&s[i]&&s[i].props)}));return M({points:b},c)};var $=n(3023),q=n(75358),U=n(97187),Y=(0,f.z)({chartName:"ScatterChart",GraphicalChild:W,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:$.K},{axisType:"yAxis",AxisComp:q.B},{axisType:"zAxis",AxisComp:_}],formatAxisMap:U.t9}),X=n(14195),Q=n(14888),ee=n(67460),te=function(e){return i.createElement(i.Fragment,null,i.createElement("div",{className:(0,u.default)(d.Z.stage)},i.createElement("h4",null,e.label),i.createElement("span",{style:{flexGrow:1}}),i.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},i.createElement(c.G,{icon:l.zc,color:"white"}))),i.createElement("div",{className:(0,u.default)(d.Z.result)},e.result.calculations.map((function(e,t){return i.createElement("span",{className:(0,u.default)("badge","badge--secondary",d.Z.badge),key:t},e)})),i.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&i.createElement("span",{className:(0,u.default)("badge","badge--success",d.Z.badge)},i.createElement(c.G,{icon:l.SZw})," ",e.result.time_ms.toFixed(1)," ms")))},ne=function(e){return e.toLocaleString().replace(/[\.,]/g,"'")},re={calculations:[]},ae=function(e){if(e<1e3)return e;var t=(""+e).length-1,n=(""+e).replace(/0*$/,""),r=n.slice(0,1),a=n.slice(1);return"1"===r?"10^"+t:a?n.slice(0,1)+"."+n.slice(1)+"\xb710^"+t:n.slice(0,1)+"\xb710^"+t},ie=function(){var e=i.useState(6),t=e[0],n=e[1],r=i.useState([0,0]),a=r[0],o=r[1],l=i.useState(0),c=l[0],s=l[1],f=i.useState(0),y=f[0],v=f[1],h=i.useState(0),b=h[0],g=h[1],E=i.useState(-1),w=E[0],x=E[1],k=i.useState([]),S=k[0],A=k[1],N=i.useState(0),P=N[0],_=N[1],z=i.useState(-1),C=z[0],O=z[1],K=i.useState(-1),D=K[0],I=K[1],j=i.useState(0),T=j[0],Z=j[1],L=i.useState(0),M=L[0],F=L[1],B=i.useState(!1);B[0],B[1],i.useRef(null);i.useEffect((function(){s(0),t<8?o([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("5".padEnd(t+1,"0"),10)]):8===t&&o([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("1".padEnd(t+1,"0"),10)])}),[t]),i.useEffect((function(){3===c&&A([].concat(S,[{product:P,time:D}]))}),[c]);return i.createElement("div",{className:(0,u.default)("hero","shadow--lw",d.Z.container,d.Z.factorization)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",i.createElement("div",{className:(0,u.default)("button-group",d.Z.digits)},i.createElement("button",{className:(0,u.default)("button","button--sm","button--outline","button--primary",6===t&&"button--active"),onClick:function(){return n(6)}},"6"),i.createElement("button",{className:(0,u.default)("button","button--sm","button--outline","button--primary",7===t&&"button--active"),onClick:function(){return n(7)}},"7"),i.createElement("button",{className:(0,u.default)("button","button--sm","button--outline","button--primary",8===t&&"button--active"),onClick:function(){return n(8)}},"8")),"Stellen",i.createElement(te,{onStage:function(){var e=window.performance.now(),t=m(a[0],a[1]),n=m(a[0],a[1]);v(Math.min(t,n)),g(Math.max(t,n));var r=window.performance.now()-e;x(r),s(1)},label:"Zwei Primzahlen zwische "+ne(a[0])+" und "+ne(a[1])+" w\xe4hlen",result:c>0?{calculations:[ne(y),ne(b)],time_ms:w}:re}),c>0&&i.createElement(te,{onStage:function(){var e=window.performance.now();_(y*b);var t=window.performance.now()-e;O(t),s(2)},label:"Primzahlprodukt berechnen: "+ne(y)+" * "+ne(b),result:c>1?{calculations:[ne(P)],time_ms:C}:re}),c>1&&i.createElement(te,{onStage:function(){I(-1);for(var e=window.performance.now(),t=2;t<P;){var n=P/t;if(n%1==0){Z(t),F(n);break}2===t?t++:t+=2}var r=window.performance.now()-e;I(r),s(3)},label:"Primzahlen faktorisieren",result:c>2?{calculations:[ne(T),ne(M)],time_ms:D}:re}),S.length>0&&i.createElement("div",{style:{width:"100%",overflow:"auto"}},i.createElement(ee.Z,null,i.createElement(p.h,{width:"100%",height:400},i.createElement(Y,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},i.createElement(X.q,null),i.createElement($.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:ae,angle:40,textAnchor:"start"}),i.createElement(q.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),i.createElement(Q.u,{cursor:{strokeDasharray:"3 3"}}),i.createElement(W,{name:"Mesurements",data:S,fill:"#8884d8"})))))))},oe=n(77960),le=["components"],ce={title:"Asymmetrie"},ue="Asymmetrie",se={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"Kryptologie/Asymmetrisch/asymmetrie",isDocsHomePage:!1,title:"Asymmetrie",description:"1. Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit 6, 7 und 8 Stellen einige (>3) Messungen vor.",source:"@site/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"current",lastUpdatedAt:1634988183,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:3,frontMatter:{title:"Asymmetrie"},sidebar:"sidebar",previous:{title:"Kerckhoffs' Prinzip",permalink:"/Kryptologie/Symmetrisch/kerckhoffs"},next:{title:"Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0a-Schichtenmodell"}},me=[],de={toc:me};function pe(e){var t=e.components,n=(0,a.Z)(e,le);return(0,o.kt)("wrapper",(0,r.Z)({},de,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"asymmetrie"},"Asymmetrie"),(0,o.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,o.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit 6, 7 und 8 Stellen einige (>3) Messungen vor."),(0,o.kt)("li",{parentName:"ol"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,o.kt)("li",{parentName:"ol"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt 8 Stellen mehrere mehrere hundert Stellen lang sind?")),(0,o.kt)(oe.Z,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,o.kt)(ie,{mdxType:"PrimfactorizationTiming"}))}pe.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}}}]);