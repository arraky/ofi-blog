"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[18504],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return O},Z:function(){return D}});var a=n(67294),r=n(28900),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),s=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),m=n(51436),d=n(68949),p=n(72389),f=n(21314),h=n(74322),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),s=a.useState("unchecked"),y=s[0],v=s[1],b=(0,f.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&b.loaded&&(v("unchecked"),b.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,d.U5)((function(){return b.loaded}),(function(e){e&&N(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&N(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:g(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(b.value)},className:(0,l.default)(i[y],i.checkButton)},a.createElement(u.G,{icon:(r=y,"correct"===r?m.f8k:"wrong"===r?m.nYk:m.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(h.Z,null)})),w=n(83117),E=n(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(h.Z,null)})),S=n(3239),A=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return A("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return A("use_current",t)}},"Nein (verwerfen)"))):null})),P=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(46858),C=n(78982),K=n(97762),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,C.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,C.cl)(e.id,t)}}}:function(){}},D=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(z,e),n.loggedIn&&a.createElement(P,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},99938:function(e,t,n){n.d(t,{Z:function(){return ne}});var a=n(51436),r=n(92814),i=n(86010),l=n(67294),o=function(e){if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;for(var t=Math.floor(Math.sqrt(e)),n=5;n<=t;n+=6)if(e%n==0||e%(n+2)==0)return!1;return!0},s=function(e,t){if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);var n=(t=Math.floor(t))-e+1,a=Math.floor(Math.random()*n)+e;if(o(a))return a;for(var r=a-1,i=a+1;r>=e&&i<=t;){if(o(r))return r;if(o(i))return i;r-=1,i+=1}for(;r>=e;){if(o(r))return r;r-=1}for(;i<=t;){if(o(i))return i;i+=1}return null},c=n(96734),u=n(90896),m=n(18446),d=n.n(m),p=n(23560),f=n.n(p),h=n(14293),y=n.n(h),g=n(74524),v=n(94184),b=n.n(v),k=n(48710),N=n(2763),w=n(52017),E=n(47523),x=function(){return null};x.displayName="ZAxis",x.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var S=n(33508),A=n(36353),z=n(86641),P=n(43815),_=n(69055),C=n(77718),K=n(79896);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=F(e);if(t){var r=F(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(i,e);var t,n,a,r=T(i);function i(){var e;I(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,_.EL)("recharts-scatter-"),e}return t=i,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return l.isValidElement(e)?n=l.cloneElement(e,t):f()(e)?n=e(t):"string"==typeof e&&(n=l.createElement(A.v,Z({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,a=n.shape,r=n.activeShape,o=n.activeIndex,s=(0,K.L6)(this.props);return e.map((function(e,n){var c=M(M({key:"symbol-".concat(n)},s),e);return l.createElement(k.m,Z({className:"recharts-scatter-symbol"},(0,K.bw)(t.props,e,n),{key:"symbol-".concat(n)}),i.renderSymbolItem(o===n?r:a,c))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,a=t.isAnimationActive,r=t.animationBegin,i=t.animationDuration,o=t.animationEasing,s=t.animationId,c=this.state.prevPoints;return l.createElement(g.ZP,{begin:r,duration:i,isActive:a,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(s),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var a=t.t,r=n.map((function(e,t){var n=c&&c[t];if(n){var r=(0,_.k4)(n.cx,e.cx),i=(0,_.k4)(n.cy,e.cy),l=(0,_.k4)(n.size,e.size);return M(M({},e),{},{cx:r(a),cy:i(a),size:l(a)})}var o=(0,_.k4)(0,e.size);return M(M({},e),{},{size:o(a)})}));return l.createElement(k.m,null,e.renderSymbolsStatically(r))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,a=this.state.prevPoints;return!(n&&t&&t.length)||a&&d()(a,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,a=e.yAxis,r=e.children,i=(0,w.NN)(r,z.W.displayName);if(!i)return null;function o(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,C.F$)(e,t)}}function s(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,C.F$)(e,t)}}return i.map((function(e,r){var i=e.props.direction;return l.cloneElement(e,{key:r,data:t,xAxis:n,yAxis:a,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:"x"===i?s:o})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,a=n.points,r=n.line,i=n.lineType,o=n.lineJointType,s=(0,K.L6)(this.props),c=(0,K.L6)(r);if("joint"===i)e=a.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===i){var u=(0,_.wr)(a),m=u.xmin,d=u.xmax,p=u.a,h=u.b,y=function(e){return p*e+h};e=[{x:m,y:y(m)},{x:d,y:y(d)}]}var g=M(M(M({},s),{},{fill:"none",stroke:s&&s.fill},c),{},{points:e});return t=l.isValidElement(r)?l.cloneElement(r,g):f()(r)?r(g):l.createElement(S.H,Z({},g,{type:o})),l.createElement(k.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,a=e.line,r=e.className,i=e.xAxis,o=e.yAxis,s=e.left,c=e.top,u=e.width,m=e.height,d=e.id,p=e.isAnimationActive;if(t||!n||!n.length)return null;var f=this.state.isAnimationFinished,h=b()("recharts-scatter",r),g=i&&i.allowDataOverflow||o&&o.allowDataOverflow,v=y()(d)?this.id:d;return l.createElement(k.m,{className:h,clipPath:g?"url(#clipPath-".concat(v,")"):null},g?l.createElement("defs",null,l.createElement("clipPath",{id:"clipPath-".concat(v)},l.createElement("rect",{x:s,y:c,width:u,height:m}))):null,a&&this.renderLine(),this.renderErrorBar(),l.createElement(k.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!p||f)&&N.e.renderCallByParent(this.props,n))}}])&&j(t.prototype,n),a&&j(t,a),i}(l.PureComponent);B.displayName="Scatter",B.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!E.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},B.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,a=e.zAxis,r=e.item,i=e.displayedData,l=e.xAxisTicks,o=e.yAxisTicks,s=e.offset,c=r.props.tooltipType,u=(0,w.NN)(r.props.children,P.b.displayName),m=y()(t.dataKey)?r.props.dataKey:t.dataKey,d=y()(n.dataKey)?r.props.dataKey:n.dataKey,p=a&&a.dataKey,f=a?a.range:x.defaultProps.range,h=f&&f[0],g=t.scale.bandwidth?t.scale.bandwidth():0,v=n.scale.bandwidth?n.scale.bandwidth():0,b=i.map((function(e,i){var s=(0,C.F$)(e,m),f=(0,C.F$)(e,d),b=!y()(p)&&(0,C.F$)(e,p)||"-",k=[{name:y()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:s,payload:e,dataKey:m,type:c},{name:y()(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:f,payload:e,dataKey:d,type:c}];"-"!==b&&k.push({name:a.name||a.dataKey,unit:a.unit||"",value:b,payload:e,dataKey:p,type:c});var N=(0,C.Hv)({axis:t,ticks:l,bandSize:g,entry:e,index:i,dataKey:m}),w=(0,C.Hv)({axis:n,ticks:o,bandSize:v,entry:e,index:i,dataKey:d}),E="-"!==b?a.scale(b):h,x=Math.sqrt(Math.max(E,0)/Math.PI);return M(M({},e),{},{cx:N,cy:w,x:N-x,y:w-x,xAxis:t,yAxis:n,zAxis:a,width:2*x,height:2*x,size:E,node:{x:s,y:f,z:b},tooltipPayload:k,tooltipPosition:{x:N,y:w},payload:e},u&&u[i]&&u[i].props)}));return M({points:b},s)};var H=n(3023),G=n(75358),J=n(97187),U=(0,u.z)({chartName:"ScatterChart",GraphicalChild:B,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:H.K},{axisType:"yAxis",AxisComp:G.B},{axisType:"zAxis",AxisComp:x}],formatAxisMap:J.t9}),W=n(29009),q=n(14195),$=n(14888),X=n(63437),Y=function(e){return l.createElement(l.Fragment,null,l.createElement("div",{className:(0,i.default)(c.Z.stage)},l.createElement("h4",null,e.label),l.createElement("span",{style:{flexGrow:1}}),l.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},l.createElement(r.G,{icon:a.zc,color:"white"}))),l.createElement("div",{className:(0,i.default)(c.Z.result)},e.result.calculations.map((function(e,t){return l.createElement("span",{className:(0,i.default)("badge","badge--secondary",c.Z.badge),key:t},e)})),l.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&l.createElement("span",{className:(0,i.default)("badge","badge--success",c.Z.badge)},l.createElement(r.G,{icon:a.SZw})," ",e.result.time_ms.toFixed(1)," ms")))},Q=function(e){return e.toLocaleString().replace(/[\.,]/g,"'")},ee={calculations:[]},te=function(e){if(e<1e3)return e;var t=(""+e).length-1,n=(""+e).replace(/0*$/,""),a=n.slice(0,1),r=n.slice(1);return"1"===a?"10^"+t:r?n.slice(0,1)+"."+n.slice(1)+"\xb710^"+t:n.slice(0,1)+"\xb710^"+t},ne=function(){var e=l.useState(6),t=e[0],n=e[1],a=l.useState([0,0]),r=a[0],o=a[1],u=l.useState(0),m=u[0],d=u[1],p=l.useState(0),f=p[0],h=p[1],y=l.useState(0),g=y[0],v=y[1],b=l.useState(-1),k=b[0],N=b[1],w=l.useState([]),E=w[0],x=w[1],S=l.useState(0),A=S[0],z=S[1],P=l.useState(-1),_=P[0],C=P[1],K=l.useState(-1),O=K[0],Z=K[1],D=l.useState(0),M=D[0],L=D[1],I=l.useState(0),j=I[0],R=I[1],T=l.useState(!1);T[0],T[1],l.useRef(null);l.useEffect((function(){d(0),t<8?o([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("5".padEnd(t+1,"0"),10)]):8===t&&o([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("1".padEnd(t+1,"0"),10)])}),[t]),l.useEffect((function(){3===m&&x([].concat(E,[{product:A,time:O}]))}),[m]);return l.createElement("div",{className:(0,i.default)("hero","shadow--lw",c.Z.container,c.Z.factorization)},l.createElement("div",{className:"container"},l.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",l.createElement("div",{className:(0,i.default)("button-group",c.Z.digits)},l.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",6===t&&"button--active"),onClick:function(){return n(6)}},"6"),l.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",7===t&&"button--active"),onClick:function(){return n(7)}},"7"),l.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",8===t&&"button--active"),onClick:function(){return n(8)}},"8")),"Stellen",l.createElement(Y,{onStage:function(){var e=window.performance.now(),t=s(r[0],r[1]),n=s(r[0],r[1]);h(Math.min(t,n)),v(Math.max(t,n));var a=window.performance.now()-e;N(a),d(1)},label:"Zwei Primzahlen zwische "+Q(r[0])+" und "+Q(r[1])+" w\xe4hlen",result:m>0?{calculations:[Q(f),Q(g)],time_ms:k}:ee}),m>0&&l.createElement(Y,{onStage:function(){var e=window.performance.now();z(f*g);var t=window.performance.now()-e;C(t),d(2)},label:"Primzahlprodukt berechnen: "+Q(f)+" * "+Q(g),result:m>1?{calculations:[Q(A)],time_ms:_}:ee}),m>1&&l.createElement(Y,{onStage:function(){Z(-1);for(var e=window.performance.now(),t=2;t<A;){var n=A/t;if(n%1==0){L(t),R(n);break}2===t?t++:t+=2}var a=window.performance.now()-e;Z(a),d(3)},label:"Primzahlen faktorisieren",result:m>2?{calculations:[Q(M),Q(j)],time_ms:O}:ee}),E.length>0&&l.createElement("div",{style:{width:"100%",overflow:"auto"}},l.createElement(X.Z,null,l.createElement(W.h,{width:"100%",height:400},l.createElement(U,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},l.createElement(q.q,null),l.createElement(H.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:te,angle:40,textAnchor:"start"}),l.createElement(G.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),l.createElement($.u,{cursor:{strokeDasharray:"3 3"}}),l.createElement(B,{name:"Mesurements",data:E,fill:"#8884d8"})))))))}},63437:function(e,t,n){var a=n(51436),r=n(92814),i=n(86010),l=n(14842),o=n(67294),s={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},c={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=o.useState(void 0),u=a[0],m=a[1],d=o.useState("none"),p=d[0],f=d[1],h=o.useRef(null);return o.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return f("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),o.useEffect((function(){"none"!==p&&f("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",c[p]),disabled:"spin"===p,onClick:function(){if(null!==h.current){if("none"===p)return f("spin"),(0,l.SE)(h.current,n).then((function(e){m(e),f("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=u,e))]).then((function(){f("copied")})).catch((function(e){f("error"),console.warn(e)}))}catch(t){console.warn(t),f("error")}}}},o.createElement(r.G,{icon:s[p]})),o.createElement("div",{ref:h,className:"copy-container"},t))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_2rVr",l="badge_2s0E",o=n(71217),s=n(92814),c=n(51436),u=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",s=n(86010),c=n(71217),u=n(74322),m=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],h=a.useState(!1),y=h[0],g=h[1],v=a.useRef(null),b=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(g(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),e.toolbar),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return m&&y&&b.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,s.default)(r)},a.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,s.default)(i,e.monospace&&l,c?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&y&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):d,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},9936:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(99938),o=n(52084),s=["components"],c={title:"Asymmetrie"},u="Asymmetrie [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"current",lastUpdatedAt:1636393524,formattedLastUpdatedAt:"11/8/2021",sidebarPosition:3,frontMatter:{title:"Asymmetrie"},sidebar:"sidebar",previous:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/Kryptologie/Asymmetrisch/asymm-encryption"}},d=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asymmetrie-"},"Asymmetrie ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,i.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,i.kt)("p",null,"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,i.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."))),(0,i.kt)("h2",{id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,i.kt)("p",null,"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,i.kt)("p",null,"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"multiplizieren-vs-faktorisieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Multiplizieren vs. Faktorisieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Berechnen Sie ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"41"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"83")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,i.kt)("li",{parentName:"ol"},"Schaffen Sie es, die Zahl ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3397")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1117")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?")))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen einige (>3) Messungen vor."),(0,i.kt)("li",{parentName:"ol"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,i.kt)("li",{parentName:"ol"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?")),(0,i.kt)(o.Z,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,i.kt)(l.Z,{mdxType:"PrimfactorizationTiming"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=792141"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}}}]);