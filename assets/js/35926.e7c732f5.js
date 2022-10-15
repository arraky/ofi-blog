/*! For license information please see 35926.e7c732f5.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[35926],{94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===u)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},35926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(91189),a=n(14788),u=n(19378),o=n(95815),c=n(67294),i=n(94184),l=n.n(i),s=n(96774),f=n.n(s);function v(e){var t=c.useRef();t.current=e;var n=c.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return n}var d="undefined"!=typeof window&&window.document&&window.document.createElement?c.useLayoutEffect:c.useEffect;const m=d;var E;function p(e){return void 0!==e}function h(e,t){var n,r,a,o=t||{},i=o.defaultValue,l=o.value,s=o.onChange,f=o.postState,h=function(e){var t=c.useRef(!1),n=c.useState(e),r=(0,u.Z)(n,2),a=r[0],o=r[1];return c.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[a,function(e,n){n&&t.current||o(e)}]}((function(){var t,n=void 0;return p(l)?(n=l,t=E.PROP):p(i)?(n="function"==typeof i?i():i,t=E.PROP):(n="function"==typeof e?e():e,t=E.INNER),[n,t,n]})),y=(0,u.Z)(h,2),b=y[0],g=y[1],S=p(l)?l:b[0],N=f?f(S):S;n=function(){g((function(e){var t=(0,u.Z)(e,1)[0];return[l,E.PROP,t]}))},r=[l],a=c.useRef(!0),d((function(){if(!a.current)return n()}),r),d((function(){return a.current=!1,function(){a.current=!0}}),[]);var M=c.useRef(),O=v((function(e,t){g((function(t){var n=(0,u.Z)(t,3),r=n[0],a=n[1],o=n[2],c="function"==typeof e?e(r):e;if(c===r)return t;var i=a===E.INNER&&M.current!==o?o:r;return[c,E.INNER,i]}),t)})),C=v(s);return m((function(){var e=(0,u.Z)(b,3),t=e[0],n=e[1],r=e[2];t!==r&&n===E.INNER&&(C(t,r),M.current=r)}),[b]),[N,O]}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(E||(E={}));var y=n(83117),b=n(24567);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=N.F1&&t<=N.F12)return!1;switch(t){case N.ALT:case N.CAPS_LOCK:case N.CONTEXT_MENU:case N.CTRL:case N.DOWN:case N.END:case N.ESC:case N.HOME:case N.INSERT:case N.LEFT:case N.MAC_FF_META:case N.META:case N.NUMLOCK:case N.NUM_CENTER:case N.PAGE_DOWN:case N.PAGE_UP:case N.PAUSE:case N.PRINT_SCREEN:case N.RIGHT:case N.SHIFT:case N.UP:case N.WIN_KEY:case N.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=N.ZERO&&e<=N.NINE)return!0;if(e>=N.NUM_ZERO&&e<=N.NUM_MULTIPLY)return!0;if(e>=N.A&&e<=N.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case N.SPACE:case N.QUESTION_MARK:case N.NUM_PLUS:case N.NUM_MINUS:case N.NUM_PERIOD:case N.NUM_DIVISION:case N.SEMICOLON:case N.DASH:case N.EQUALS:case N.COMMA:case N.PERIOD:case N.SLASH:case N.APOSTROPHE:case N.SINGLE_QUOTE:case N.OPEN_SQUARE_BRACKET:case N.BACKSLASH:case N.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const M=N;const O=c.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function C(e,t,n){return(e-t)/(n-t)}function I(e,t,n,r){var a=C(t,n,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function R(e,t){return Array.isArray(e)?e[t]:e}var x=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"];const A=c.forwardRef((function(e,t){var n,a,u=e.prefixCls,o=e.value,i=e.valueIndex,s=e.onStartMove,f=e.style,v=e.render,d=e.dragging,m=e.onOffsetChange,E=(0,b.Z)(e,x),p=c.useContext(O),h=p.min,g=p.max,N=p.direction,C=p.disabled,A=p.range,P=p.tabIndex,_=p.ariaLabelForHandle,T=p.ariaLabelledByForHandle,Z=p.ariaValueTextFormatterForHandle,U="".concat(u,"-handle"),k=function(e){C||s(e,i)},w=I(N,o,h,g),L=c.createElement("div",(0,y.Z)({ref:t,className:l()(U,(n={},(0,r.Z)(n,"".concat(U,"-").concat(i+1),A),(0,r.Z)(n,"".concat(U,"-dragging"),d),n)),style:S(S({},w),f),onMouseDown:k,onTouchStart:k,onKeyDown:function(e){if(!C){var t=null;switch(e.which||e.keyCode){case M.LEFT:t="ltr"===N||"btt"===N?-1:1;break;case M.RIGHT:t="ltr"===N||"btt"===N?1:-1;break;case M.UP:t="ttb"!==N?1:-1;break;case M.DOWN:t="ttb"!==N?-1:1;break;case M.HOME:t="min";break;case M.END:t="max";break;case M.PAGE_UP:t=2;break;case M.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),m(t,i))}},tabIndex:C?null:R(P,i),role:"slider","aria-valuemin":h,"aria-valuemax":g,"aria-valuenow":o,"aria-disabled":C,"aria-label":R(_,i),"aria-labelledby":R(T,i),"aria-valuetext":null===(a=R(Z,i))||void 0===a?void 0:a(o)},E));return v&&(L=v(L,{index:i,prefixCls:u,value:o,dragging:d})),L}));var P=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"];const _=c.forwardRef((function(e,t){var n=e.prefixCls,r=e.style,a=e.onStartMove,u=e.onOffsetChange,o=e.values,i=e.handleRender,l=e.draggingIndex,s=(0,b.Z)(e,P),f=c.useRef({});return c.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=f.current[e])||void 0===t||t.focus()}}})),c.createElement(c.Fragment,null,o.map((function(e,t){return c.createElement(A,(0,y.Z)({ref:function(e){e?f.current[t]=e:delete f.current[t]},dragging:l===t,prefixCls:n,style:R(r,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:u,render:i},s))})))}));function T(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Z(e){var t=e.prefixCls,n=e.style,r=e.start,a=e.end,u=e.index,o=e.onStartMove,i=c.useContext(O),s=i.direction,f=i.min,v=i.max,d=i.disabled,m=i.range,E="".concat(t,"-track"),p=C(r,f,v),h=C(a,f,v),y=function(e){!d&&o&&o(e,-1)},b={};switch(s){case"rtl":b.right="".concat(100*p,"%"),b.width="".concat(100*h-100*p,"%");break;case"btt":b.bottom="".concat(100*p,"%"),b.height="".concat(100*h-100*p,"%");break;case"ttb":b.top="".concat(100*p,"%"),b.height="".concat(100*h-100*p,"%");break;default:b.left="".concat(100*p,"%"),b.width="".concat(100*h-100*p,"%")}return c.createElement("div",{className:l()(E,m&&"".concat(E,"-").concat(u+1)),style:S(S({},b),n),onMouseDown:y,onTouchStart:y})}function U(e){var t=e.prefixCls,n=e.style,r=e.values,a=e.startPoint,u=e.onStartMove,o=c.useContext(O),i=o.included,l=o.range,s=o.min,f=c.useMemo((function(){if(!l){if(0===r.length)return[];var e=null!=a?a:s,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],u=0;u<r.length-1;u+=1)n.push({start:r[u],end:r[u+1]});return n}),[r,l,a,s]);return i?f.map((function(e,r){var a=e.start,o=e.end;return c.createElement(Z,{index:r,prefixCls:t,style:R(n,r),start:a,end:o,key:r,onStartMove:u})})):null}function k(e){var t=e.prefixCls,n=e.style,a=e.children,u=e.value,o=e.onClick,i=c.useContext(O),s=i.min,f=i.max,v=i.direction,d=i.includedStart,m=i.includedEnd,E=i.included,p="".concat(t,"-text"),h=I(v,u,s,f);return c.createElement("span",{className:l()(p,(0,r.Z)({},"".concat(p,"-active"),E&&d<=u&&u<=m)),style:S(S({},h),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){o(u)}},a)}function w(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?c.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,u=e.label;return c.createElement(k,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)}))):null}function L(e){var t=e.prefixCls,n=e.value,a=e.style,u=e.activeStyle,o=c.useContext(O),i=o.min,s=o.max,f=o.direction,v=o.included,d=o.includedStart,m=o.includedEnd,E="".concat(t,"-dot"),p=v&&d<=n&&n<=m,h=S(S({},I(f,n,i,s)),"function"==typeof a?a(n):a);return p&&(h=S(S({},h),"function"==typeof u?u(n):u)),c.createElement("span",{className:l()(E,(0,r.Z)({},"".concat(E,"-active"),p)),style:h})}function F(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=c.useContext(O),i=o.min,l=o.max,s=o.step,f=c.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==s)for(var t=i;t<=l;)e.add(t),t+=s;return Array.from(e)}),[i,l,s,r,n]);return c.createElement("div",{className:"".concat(t,"-step")},f.map((function(e){return c.createElement(L,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})})))}const H=c.forwardRef((function(e,t){var n,i=e.prefixCls,s=void 0===i?"rc-slider":i,v=e.className,d=e.style,m=e.disabled,E=void 0!==m&&m,p=e.autoFocus,y=e.onFocus,b=e.onBlur,g=e.min,S=void 0===g?0:g,N=e.max,M=void 0===N?100:N,C=e.step,I=void 0===C?1:C,R=e.value,x=e.defaultValue,A=e.range,P=e.count,Z=e.onChange,k=e.onBeforeChange,L=e.onAfterChange,H=e.allowCross,D=void 0===H||H,K=e.pushable,j=void 0!==K&&K,B=e.draggableTrack,G=e.reverse,W=e.vertical,Y=e.included,V=void 0===Y||Y,X=e.startPoint,Q=e.trackStyle,z=e.handleStyle,J=e.railStyle,$=e.dotStyle,q=e.activeDotStyle,ee=e.marks,te=e.dots,ne=e.handleRender,re=e.tabIndex,ae=void 0===re?0:re,ue=e.ariaLabelForHandle,oe=e.ariaLabelledByForHandle,ce=e.ariaValueTextFormatterForHandle,ie=c.useRef(),le=c.useRef(),se=c.useMemo((function(){return W?G?"ttb":"btt":G?"rtl":"ltr"}),[G,W]),fe=c.useMemo((function(){return isFinite(S)?S:0}),[S]),ve=c.useMemo((function(){return isFinite(M)?M:100}),[M]),de=c.useMemo((function(){return null!==I&&I<=0?1:I}),[I]),me=c.useMemo((function(){return!0===j?de:j>=0&&j}),[j,de]),Ee=c.useMemo((function(){return Object.keys(ee||{}).map((function(e){var t=ee[e],n={value:Number(e)};return t&&"object"===(0,o.Z)(t)&&!c.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ee]),pe=function(e,t,n,r,u,o){var i=c.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),l=c.useCallback((function(r){if(null!==n){var a=e+Math.round((i(r)-e)/n)*n,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(n),u(t),u(e)),c=Number(a.toFixed(o));return e<=c&&c<=t?c:null}return null}),[n,e,t,i]),s=c.useCallback((function(a){var u=i(a),o=r.map((function(e){return e.value}));null!==n&&o.push(l(a)),o.push(e,t);var c=o[0],s=t-e;return o.forEach((function(e){var t=Math.abs(u-e);t<=s&&(c=e,s=t)})),c}),[e,t,r,n,i,l]),f=function u(o,c,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof c){var f,v=o[i],d=v+c,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,t),m.push(l(v));var E=c>0?1:-1;"unit"===s?m.push(l(v+E*n)):m.push(l(d)),m=m.filter((function(e){return null!==e})).filter((function(e){return c<0?e<=v:e>=v})),"unit"===s&&(m=m.filter((function(e){return e!==v})));var p="unit"===s?v:d;f=m[0];var h=Math.abs(f-p);if(m.forEach((function(e){var t=Math.abs(e-p);t<h&&(f=e,h=t)})),void 0===f)return c<0?e:t;if("dist"===s)return f;if(Math.abs(c)>1){var y=(0,a.Z)(o);return y[i]=f,u(y,c-E,i,s)}return f}return"min"===c?e:"max"===c?t:void 0},v=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=f(e,t,n,r);return{value:u,changed:u!==a}},d=function(e){return null===o&&0===e||"number"==typeof o&&e<o};return[s,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e.map(s),c=a[n],i=f(a,t,n,r);if(a[n]=i,!1===u){var l=o||0;n>0&&a[n-1]!==c&&(a[n]=Math.max(a[n],a[n-1]+l)),n<a.length-1&&a[n+1]!==c&&(a[n]=Math.min(a[n],a[n+1]-l))}else if("number"==typeof o||null===o){for(var m=n+1;m<a.length;m+=1)for(var E=!0;d(a[m]-a[m-1])&&E;){var p=v(a,1,m);a[m]=p.value,E=p.changed}for(var h=n;h>0;h-=1)for(var y=!0;d(a[h]-a[h-1])&&y;){var b=v(a,-1,h-1);a[h-1]=b.value,y=b.changed}for(var g=a.length-1;g>0;g-=1)for(var S=!0;d(a[g]-a[g-1])&&S;){var N=v(a,-1,g-1);a[g-1]=N.value,S=N.changed}for(var M=0;M<a.length-1;M+=1)for(var O=!0;d(a[M+1]-a[M])&&O;){var C=v(a,1,M+1);a[M+1]=C.value,O=C.changed}}return{value:a[n],values:a}}]}(fe,ve,de,Ee,D,me),he=(0,u.Z)(pe,2),ye=he[0],be=he[1],ge=h(x,{value:R}),Se=(0,u.Z)(ge,2),Ne=Se[0],Me=Se[1],Oe=c.useMemo((function(){var e=null==Ne?[]:Array.isArray(Ne)?Ne:[Ne],t=(0,u.Z)(e,1)[0],n=null===Ne?[]:[void 0===t?fe:t];if(A){if(n=(0,a.Z)(e),P||void 0===Ne){var r=P>=0?P+1:2;for(n=n.slice(0,r);n.length<r;){var o;n.push(null!==(o=n[n.length-1])&&void 0!==o?o:fe)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=ye(e)})),n}),[Ne,A,fe,P,ye]),Ce=c.useRef(Oe);Ce.current=Oe;var Ie=function(e){return A?e:e[0]},Re=function(e){var t=(0,a.Z)(e).sort((function(e,t){return e-t}));Z&&!f()(t,Ce.current)&&Z(Ie(t)),Me(t)},xe=function(e){if(!E){var t=0,n=ve-fe;Oe.forEach((function(r,a){var u=Math.abs(e-r);u<=n&&(n=u,t=a)}));var r=(0,a.Z)(Oe);r[t]=e,A&&!Oe.length&&void 0===P&&r.push(e),null==k||k(Ie(r)),Re(r),null==L||L(Ie(r))}},Ae=c.useState(null),Pe=(0,u.Z)(Ae,2),_e=Pe[0],Te=Pe[1];c.useEffect((function(){if(null!==_e){var e=Oe.indexOf(_e);e>=0&&ie.current.focus(e)}Te(null)}),[_e]);var Ze=c.useMemo((function(){return(!B||null!==de)&&B}),[B,de]),Ue=function(e,t,n,r,o,i,l,s,f){var v=c.useState(null),d=(0,u.Z)(v,2),m=d[0],E=d[1],p=c.useState(-1),h=(0,u.Z)(p,2),y=h[0],b=h[1],g=c.useState(n),S=(0,u.Z)(g,2),N=S[0],M=S[1],O=c.useState(n),C=(0,u.Z)(O,2),I=C[0],R=C[1],x=c.useRef(null),A=c.useRef(null);c.useEffect((function(){-1===y&&M(n)}),[n,y]),c.useEffect((function(){return function(){document.removeEventListener("mousemove",x.current),document.removeEventListener("mouseup",A.current),document.removeEventListener("touchmove",x.current),document.removeEventListener("touchend",A.current)}}),[]);var P=function(e,t){N.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&E(t),M(e),l(e))},_=function(e,t){if(-1===e){var n=I[0],u=I[I.length-1],c=r-n,l=o-u,s=t*(o-r);s=Math.max(s,c),s=Math.min(s,l);var v=i(n+s);s=v-n;var d=I.map((function(e){return e+s}));P(d)}else{var m=(o-r)*t,E=(0,a.Z)(N);E[e]=I[e];var p=f(E,m,e,"dist");P(p.values,p.value)}},Z=c.useRef(_);Z.current=_;var U=c.useMemo((function(){var e=(0,a.Z)(n).sort((function(e,t){return e-t})),t=(0,a.Z)(N).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?N:n}),[n,N]);return[y,m,U,function(r,a){r.stopPropagation();var u=n[a];b(a),E(u),R(n);var o=T(r),c=o.pageX,i=o.pageY,l=function(n){n.preventDefault();var r,u=T(n),o=u.pageX,l=u.pageY,s=o-c,f=l-i,v=e.current.getBoundingClientRect(),d=v.width,m=v.height;switch(t){case"btt":r=-f/m;break;case"ttb":r=f/m;break;case"rtl":r=-s/d;break;default:r=s/d}Z.current(a,r)},f=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",l),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",l),x.current=null,A.current=null,b(-1),s()};document.addEventListener("mouseup",f),document.addEventListener("mousemove",l),document.addEventListener("touchend",f),document.addEventListener("touchmove",l),x.current=l,A.current=f}]}(le,se,Oe,fe,ve,ye,Re,(function(){null==L||L(Ie(Ce.current))}),be),ke=(0,u.Z)(Ue,4),we=ke[0],Le=ke[1],Fe=ke[2],He=ke[3],De=function(e,t){He(e,t),null==k||k(Ie(Ce.current))},Ke=-1!==we;c.useEffect((function(){if(!Ke){var e=Oe.lastIndexOf(Le);ie.current.focus(e)}}),[Ke]);var je=c.useMemo((function(){return(0,a.Z)(Fe).sort((function(e,t){return e-t}))}),[Fe]),Be=c.useMemo((function(){return A?[je[0],je[je.length-1]]:[fe,je[0]]}),[je,A,fe]),Ge=(0,u.Z)(Be,2),We=Ge[0],Ye=Ge[1];c.useImperativeHandle(t,(function(){return{focus:function(){ie.current.focus(0)},blur:function(){var e=document.activeElement;le.current.contains(e)&&(null==e||e.blur())}}})),c.useEffect((function(){p&&ie.current.focus(0)}),[]);var Ve=c.useMemo((function(){return{min:fe,max:ve,direction:se,disabled:E,step:de,included:V,includedStart:We,includedEnd:Ye,range:A,tabIndex:ae,ariaLabelForHandle:ue,ariaLabelledByForHandle:oe,ariaValueTextFormatterForHandle:ce}}),[fe,ve,se,E,de,V,We,Ye,A,ae,ue,oe,ce]);return c.createElement(O.Provider,{value:Ve},c.createElement("div",{ref:le,className:l()(s,v,(n={},(0,r.Z)(n,"".concat(s,"-disabled"),E),(0,r.Z)(n,"".concat(s,"-vertical"),W),(0,r.Z)(n,"".concat(s,"-horizontal"),!W),(0,r.Z)(n,"".concat(s,"-with-marks"),Ee.length),n)),style:d,onMouseDown:function(e){e.preventDefault();var t,n=le.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,c=n.bottom,i=n.right,l=e.clientX,s=e.clientY;switch(se){case"btt":t=(c-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(i-l)/r;break;default:t=(l-u)/r}xe(ye(fe+t*(ve-fe)))}},c.createElement("div",{className:"".concat(s,"-rail"),style:J}),c.createElement(U,{prefixCls:s,style:Q,values:je,startPoint:X,onStartMove:Ze?De:null}),c.createElement(F,{prefixCls:s,marks:Ee,dots:te,style:$,activeStyle:q}),c.createElement(_,{ref:ie,prefixCls:s,style:z,values:Fe,draggingIndex:we,onStartMove:De,onOffsetChange:function(e,t){if(!E){var n=be(Oe,e,t);null==k||k(Ie(Oe)),Re(n.values),null==L||L(Ie(n.values)),Te(n.value)}},onFocus:y,onBlur:b,handleRender:ne}),c.createElement(w,{prefixCls:s,marks:Ee,onClick:xe})))}))},75058:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},24567:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(80102);function a(e,t){if(null==e)return{};var n,a,u=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}},19378:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(58007);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(i){c=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return u}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},14788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(75058);var a=n(58007);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},95815:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})},58007:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(75058);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);