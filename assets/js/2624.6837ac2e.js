(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2624],{61382:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(61236)),o=n(r(26005)),l=n(r(66156)),c=n(r(26598)),i=a(r(67294)),s=n(r(94184)),f=n(r(27712)),d=n(r(64137)),v=r(59602),p=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"];var m=i.forwardRef((function(e,t){var r,n,a=e.prefixCls,m=e.value,y=e.valueIndex,E=e.onStartMove,b=e.style,x=e.render,_=e.dragging,M=e.onOffsetChange,h=(0,c.default)(e,p),g=i.useContext(d.default),O=g.min,S=g.max,N=g.direction,C=g.disabled,P=g.range,I=g.tabIndex,R=g.ariaLabelForHandle,A=g.ariaLabelledByForHandle,T=g.ariaValueTextFormatterForHandle,w="".concat(a,"-handle"),U=function(e){C||E(e,y)},k=(0,v.getDirectionStyle)(N,m,O,S),L=i.createElement("div",(0,u.default)({ref:t,className:(0,s.default)(w,(r={},(0,l.default)(r,"".concat(w,"-").concat(y+1),P),(0,l.default)(r,"".concat(w,"-dragging"),_),r)),style:(0,o.default)((0,o.default)({},k),b),onMouseDown:U,onTouchStart:U,onKeyDown:function(e){if(!C){var t=null;switch(e.which||e.keyCode){case f.default.LEFT:t="ltr"===N||"btt"===N?-1:1;break;case f.default.RIGHT:t="ltr"===N||"btt"===N?1:-1;break;case f.default.UP:t="ttb"!==N?1:-1;break;case f.default.DOWN:t="ttb"!==N?-1:1;break;case f.default.HOME:t="min";break;case f.default.END:t="max";break;case f.default.PAGE_UP:t=2;break;case f.default.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),M(t,y))}},tabIndex:C?null:(0,v.getIndex)(I,y),role:"slider","aria-valuemin":O,"aria-valuemax":S,"aria-valuenow":m,"aria-disabled":C,"aria-label":(0,v.getIndex)(R,y),"aria-labelledby":(0,v.getIndex)(A,y),"aria-valuetext":null===(n=(0,v.getIndex)(T,y))||void 0===n?void 0:n(m)},h));return x&&(L=x(L,{index:y,prefixCls:a,value:m,dragging:_})),L}));t.default=m},79454:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(61236)),o=n(r(26598)),l=a(r(67294)),c=n(r(61382)),i=r(59602),s=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"];var f=l.forwardRef((function(e,t){var r=e.prefixCls,n=e.style,a=e.onStartMove,f=e.onOffsetChange,d=e.values,v=e.handleRender,p=e.draggingIndex,m=(0,o.default)(e,s),y=l.useRef({});return l.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=y.current[e])||void 0===t||t.focus()}}})),l.createElement(l.Fragment,null,d.map((function(e,t){return l.createElement(c.default,(0,u.default)({ref:function(e){e?y.current[t]=e:delete y.current[t]},dragging:p===t,prefixCls:r,style:(0,i.getIndex)(n,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:f,render:v},m))})))}));t.default=f},19200:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.children,a=e.value,f=e.onClick,d=l.useContext(s.default),v=d.min,p=d.max,m=d.direction,y=d.includedStart,E=d.includedEnd,b=d.included,x="".concat(t,"-text"),_=(0,i.getDirectionStyle)(m,a,v,p);return l.createElement("span",{className:(0,c.default)(x,(0,o.default)({},"".concat(x,"-active"),b&&y<=a&&a<=E)),style:(0,u.default)((0,u.default)({},_),r),onMouseDown:function(e){e.stopPropagation()},onClick:function(){f(a)}},n)};var u=a(r(26005)),o=a(r(66156)),l=n(r(67294)),c=a(r(94184)),i=r(59602),s=a(r(64137))},47792:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.marks,n=e.onClick,a="".concat(t,"-mark");if(!r.length)return null;return u.createElement("div",{className:a},r.map((function(e){var t=e.value,r=e.style,l=e.label;return u.createElement(o.default,{key:t,prefixCls:a,style:r,value:t,onClick:n},l)})))};var u=a(r(67294)),o=n(r(19200))},12624:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);t.Z=void 0;var u=a(r(66156)),o=a(r(95894)),l=a(r(17665)),c=a(r(45023)),i=n(r(67294)),s=a(r(94184)),f=a(r(96774)),d=a(r(60869)),v=a(r(79454)),p=a(r(87480)),m=a(r(64137)),y=a(r(51984)),E=a(r(47792)),b=a(r(43091)),x=a(r(13626));a(r(45520));var _=i.forwardRef((function(e,t){var r,n=e.prefixCls,a=void 0===n?"rc-slider":n,_=e.className,M=e.style,h=e.disabled,g=void 0!==h&&h,O=e.autoFocus,S=e.onFocus,N=e.onBlur,C=e.min,P=void 0===C?0:C,I=e.max,R=void 0===I?100:I,A=e.step,T=void 0===A?1:A,w=e.value,U=e.defaultValue,k=e.range,L=e.count,j=e.onChange,F=e.onBeforeChange,D=e.onAfterChange,H=e.allowCross,K=void 0===H||H,W=e.pushable,B=void 0!==W&&W,G=e.draggableTrack,Y=e.reverse,V=e.vertical,X=e.included,Q=void 0===X||X,Z=e.startPoint,z=e.trackStyle,J=e.handleStyle,$=e.railStyle,q=e.dotStyle,ee=e.activeDotStyle,te=e.marks,re=e.dots,ne=e.handleRender,ae=e.tabIndex,ue=void 0===ae?0:ae,oe=e.ariaLabelForHandle,le=e.ariaLabelledByForHandle,ce=e.ariaValueTextFormatterForHandle,ie=i.useRef(),se=i.useRef(),fe=i.useMemo((function(){return V?Y?"ttb":"btt":Y?"rtl":"ltr"}),[Y,V]),de=i.useMemo((function(){return isFinite(P)?P:0}),[P]),ve=i.useMemo((function(){return isFinite(R)?R:100}),[R]),pe=i.useMemo((function(){return null!==T&&T<=0?1:T}),[T]),me=i.useMemo((function(){return!0===B?pe:B>=0&&B}),[B,pe]),ye=i.useMemo((function(){return Object.keys(te||{}).map((function(e){var t=te[e],r={value:Number(e)};return t&&"object"===(0,c.default)(t)&&!i.isValidElement(t)&&("label"in t||"style"in t)?(r.style=t.style,r.label=t.label):r.label=t,r})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[te]),Ee=(0,x.default)(de,ve,pe,ye,K,me),be=(0,l.default)(Ee,2),xe=be[0],_e=be[1],Me=(0,d.default)(U,{value:w}),he=(0,l.default)(Me,2),ge=he[0],Oe=he[1],Se=i.useMemo((function(){var e=null==ge?[]:Array.isArray(ge)?ge:[ge],t=(0,l.default)(e,1)[0],r=null===ge?[]:[void 0===t?de:t];if(k){if(r=(0,o.default)(e),L||void 0===ge){var n=L>=0?L+1:2;for(r=r.slice(0,n);r.length<n;){var a;r.push(null!==(a=r[r.length-1])&&void 0!==a?a:de)}}r.sort((function(e,t){return e-t}))}return r.forEach((function(e,t){r[t]=xe(e)})),r}),[ge,k,de,L,xe]),Ne=i.useRef(Se);Ne.current=Se;var Ce=function(e){return k?e:e[0]},Pe=function(e){var t=(0,o.default)(e).sort((function(e,t){return e-t}));j&&!(0,f.default)(t,Ne.current)&&j(Ce(t)),Oe(t)},Ie=function(e){if(!g){var t=0,r=ve-de;Se.forEach((function(n,a){var u=Math.abs(e-n);u<=r&&(r=u,t=a)}));var n=(0,o.default)(Se);n[t]=e,k&&!Se.length&&void 0===L&&n.push(e),null==F||F(Ce(n)),Pe(n),null==D||D(Ce(n))}},Re=i.useState(null),Ae=(0,l.default)(Re,2),Te=Ae[0],we=Ae[1];i.useEffect((function(){if(null!==Te){var e=Se.indexOf(Te);e>=0&&ie.current.focus(e)}we(null)}),[Te]);var Ue=i.useMemo((function(){return(!G||null!==pe)&&G}),[G,pe]),ke=(0,p.default)(se,fe,Se,de,ve,xe,Pe,(function(){null==D||D(Ce(Ne.current))}),_e),Le=(0,l.default)(ke,4),je=Le[0],Fe=Le[1],De=Le[2],He=Le[3],Ke=function(e,t){He(e,t),null==F||F(Ce(Ne.current))},We=-1!==je;i.useEffect((function(){if(!We){var e=Se.lastIndexOf(Fe);ie.current.focus(e)}}),[We]);var Be=i.useMemo((function(){return(0,o.default)(De).sort((function(e,t){return e-t}))}),[De]),Ge=i.useMemo((function(){return k?[Be[0],Be[Be.length-1]]:[de,Be[0]]}),[Be,k,de]),Ye=(0,l.default)(Ge,2),Ve=Ye[0],Xe=Ye[1];i.useImperativeHandle(t,(function(){return{focus:function(){ie.current.focus(0)},blur:function(){var e=document.activeElement;se.current.contains(e)&&(null==e||e.blur())}}})),i.useEffect((function(){O&&ie.current.focus(0)}),[]);var Qe=i.useMemo((function(){return{min:de,max:ve,direction:fe,disabled:g,step:pe,included:Q,includedStart:Ve,includedEnd:Xe,range:k,tabIndex:ue,ariaLabelForHandle:oe,ariaLabelledByForHandle:le,ariaValueTextFormatterForHandle:ce}}),[de,ve,fe,g,pe,Q,Ve,Xe,k,ue,oe,le,ce]);return i.createElement(m.default.Provider,{value:Qe},i.createElement("div",{ref:se,className:(0,s.default)(a,_,(r={},(0,u.default)(r,"".concat(a,"-disabled"),g),(0,u.default)(r,"".concat(a,"-vertical"),V),(0,u.default)(r,"".concat(a,"-horizontal"),!V),(0,u.default)(r,"".concat(a,"-with-marks"),ye.length),r)),style:M,onMouseDown:function(e){e.preventDefault();var t,r=se.current.getBoundingClientRect(),n=r.width,a=r.height,u=r.left,o=r.top,l=r.bottom,c=r.right,i=e.clientX,s=e.clientY;switch(fe){case"btt":t=(l-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(c-i)/n;break;default:t=(i-u)/n}Ie(xe(de+t*(ve-de)))}},i.createElement("div",{className:"".concat(a,"-rail"),style:$}),i.createElement(y.default,{prefixCls:a,style:z,values:Be,startPoint:Z,onStartMove:Ue?Ke:null}),i.createElement(b.default,{prefixCls:a,marks:ye,dots:re,style:q,activeStyle:ee}),i.createElement(v.default,{ref:ie,prefixCls:a,style:J,values:De,draggingIndex:je,onStartMove:Ke,onOffsetChange:function(e,t){if(!g){var r=_e(Se,e,t);null==F||F(Ce(Se)),Pe(r.values),null==D||D(Ce(r.values)),we(r.value)}},onFocus:S,onBlur:N,handleRender:ne}),i.createElement(E.default,{prefixCls:a,marks:ye,onClick:Ie})))}));t.Z=_},12452:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.value,n=e.style,a=e.activeStyle,f=l.useContext(s.default),d=f.min,v=f.max,p=f.direction,m=f.included,y=f.includedStart,E=f.includedEnd,b="".concat(t,"-dot"),x=m&&y<=r&&r<=E,_=(0,o.default)((0,o.default)({},(0,i.getDirectionStyle)(p,r,d,v)),"function"==typeof n?n(r):n);x&&(_=(0,o.default)((0,o.default)({},_),"function"==typeof a?a(r):a));return l.createElement("span",{className:(0,c.default)(b,(0,u.default)({},"".concat(b,"-active"),x)),style:_})};var u=a(r(66156)),o=a(r(26005)),l=n(r(67294)),c=a(r(94184)),i=r(59602),s=a(r(64137))},43091:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.marks,n=e.dots,a=e.style,c=e.activeStyle,i=u.useContext(o.default),s=i.min,f=i.max,d=i.step,v=u.useMemo((function(){var e=new Set;if(r.forEach((function(t){e.add(t.value)})),n&&null!==d)for(var t=s;t<=f;)e.add(t),t+=d;return Array.from(e)}),[s,f,d,n,r]);return u.createElement("div",{className:"".concat(t,"-step")},v.map((function(e){return u.createElement(l.default,{prefixCls:t,key:e,value:e,style:a,activeStyle:c})})))};var u=a(r(67294)),o=n(r(64137)),l=n(r(12452))},35044:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.start,a=e.end,s=e.index,f=e.onStartMove,d=o.useContext(c.default),v=d.direction,p=d.min,m=d.max,y=d.disabled,E=d.range,b="".concat(t,"-track"),x=(0,i.getOffset)(n,p,m),_=(0,i.getOffset)(a,p,m),M=function(e){!y&&f&&f(e,-1)},h={};switch(v){case"rtl":h.right="".concat(100*x,"%"),h.width="".concat(100*_-100*x,"%");break;case"btt":h.bottom="".concat(100*x,"%"),h.height="".concat(100*_-100*x,"%");break;case"ttb":h.top="".concat(100*x,"%"),h.height="".concat(100*_-100*x,"%");break;default:h.left="".concat(100*x,"%"),h.width="".concat(100*_-100*x,"%")}return o.createElement("div",{className:(0,l.default)(b,E&&"".concat(b,"-").concat(s+1)),style:(0,u.default)((0,u.default)({},h),r),onMouseDown:M,onTouchStart:M})};var u=a(r(26005)),o=n(r(67294)),l=a(r(94184)),c=a(r(64137)),i=r(59602)},51984:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.values,a=e.startPoint,i=e.onStartMove,s=u.useContext(o.default),f=s.included,d=s.range,v=s.min,p=u.useMemo((function(){if(!d){if(0===n.length)return[];var e=null!=a?a:v,t=n[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var r=[],u=0;u<n.length-1;u+=1)r.push({start:n[u],end:n[u+1]});return r}),[n,d,a,v]);return f?p.map((function(e,n){var a=e.start,o=e.end;return u.createElement(l.default,{index:n,prefixCls:t,style:(0,c.getIndex)(r,n),start:a,end:o,key:n,onStartMove:i})})):null};var u=a(r(67294)),o=n(r(64137)),l=n(r(35044)),c=r(59602)},64137:(e,t,r)=>{"use strict";var n=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(67294)).createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});t.default=a},87480:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a,i,s,f,d){var v=l.useState(null),p=(0,o.default)(v,2),m=p[0],y=p[1],E=l.useState(-1),b=(0,o.default)(E,2),x=b[0],_=b[1],M=l.useState(r),h=(0,o.default)(M,2),g=h[0],O=h[1],S=l.useState(r),N=(0,o.default)(S,2),C=N[0],P=N[1],I=l.useRef(null),R=l.useRef(null);l.useEffect((function(){-1===x&&O(r)}),[r,x]),l.useEffect((function(){return function(){document.removeEventListener("mousemove",I.current),document.removeEventListener("mouseup",R.current),document.removeEventListener("touchmove",I.current),document.removeEventListener("touchend",R.current)}}),[]);var A=function(e,t){g.some((function(t,r){return t!==e[r]}))&&(void 0!==t&&y(t),O(e),s(e))},T=function(e,t){if(-1===e){var r=C[0],o=C[C.length-1],l=n-r,c=a-o,s=t*(a-n);s=Math.max(s,l),s=Math.min(s,c);var f=i(r+s);s=f-r;var v=C.map((function(e){return e+s}));A(v)}else{var p=(a-n)*t,m=(0,u.default)(g);m[e]=C[e];var y=d(m,p,e,"dist");A(y.values,y.value)}},w=l.useRef(T);w.current=T;var U=l.useMemo((function(){var e=(0,u.default)(r).sort((function(e,t){return e-t})),t=(0,u.default)(g).sort((function(e,t){return e-t}));return e.every((function(e,r){return e===t[r]}))?g:r}),[r,g]);return[x,m,U,function(n,a){n.stopPropagation();var u=r[a];_(a),y(u),P(r);var o=c(n),l=o.pageX,i=o.pageY,s=function(r){r.preventDefault();var n,u=c(r),o=u.pageX,s=u.pageY,f=o-l,d=s-i,v=e.current.getBoundingClientRect(),p=v.width,m=v.height;switch(t){case"btt":n=-d/m;break;case"ttb":n=d/m;break;case"rtl":n=-f/p;break;default:n=f/p}w.current(a,n)},d=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",s),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",s),I.current=null,R.current=null,_(-1),f()};document.addEventListener("mouseup",d),document.addEventListener("mousemove",s),document.addEventListener("touchend",d),document.addEventListener("touchmove",s),I.current=s,R.current=d}]};var u=a(r(95894)),o=a(r(17665)),l=n(r(67294));function c(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}},13626:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a,l){var c=o.useCallback((function(r){var n=isFinite(r)?r:e;return n=Math.min(t,r),n=Math.max(e,n)}),[e,t]),i=o.useCallback((function(n){if(null!==r){var a=e+Math.round((c(n)-e)/r)*r,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(r),u(t),u(e)),l=Number(a.toFixed(o));return e<=l&&l<=t?l:null}return null}),[r,e,t,c]),s=o.useCallback((function(a){var u=c(a),o=n.map((function(e){return e.value}));null!==r&&o.push(i(a)),o.push(e,t);var l=o[0],s=t-e;return o.forEach((function(e){var t=Math.abs(u-e);t<=s&&(l=e,s=t)})),l}),[e,t,n,r,c,i]),f=function a(o,l,c){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var f,d=o[c],v=d+l,p=[];n.forEach((function(e){p.push(e.value)})),p.push(e,t),p.push(i(d));var m=l>0?1:-1;"unit"===s?p.push(i(d+m*r)):p.push(i(v)),p=p.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=d:e>=d})),"unit"===s&&(p=p.filter((function(e){return e!==d})));var y="unit"===s?d:v;f=p[0];var E=Math.abs(f-y);if(p.forEach((function(e){var t=Math.abs(e-y);t<E&&(f=e,E=t)})),void 0===f)return l<0?e:t;if("dist"===s)return f;if(Math.abs(l)>1){var b=(0,u.default)(o);return b[c]=f,a(b,l-m,c,s)}return f}return"min"===l?e:"max"===l?t:void 0},d=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[r],u=f(e,t,r,n);return{value:u,changed:u!==a}},v=function(e){return null===l&&0===e||"number"==typeof l&&e<l};return[s,function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",u=e.map(s),o=u[r],c=f(u,t,r,n);if(u[r]=c,!1===a){var i=l||0;r>0&&u[r-1]!==o&&(u[r]=Math.max(u[r],u[r-1]+i)),r<u.length-1&&u[r+1]!==o&&(u[r]=Math.min(u[r],u[r+1]-i))}else if("number"==typeof l||null===l){for(var p=r+1;p<u.length;p+=1)for(var m=!0;v(u[p]-u[p-1])&&m;){var y=d(u,1,p);u[p]=y.value,m=y.changed}for(var E=r;E>0;E-=1)for(var b=!0;v(u[E]-u[E-1])&&b;){var x=d(u,-1,E-1);u[E-1]=x.value,b=x.changed}for(var _=u.length-1;_>0;_-=1)for(var M=!0;v(u[_]-u[_-1])&&M;){var h=d(u,-1,_-1);u[_-1]=h.value,M=h.changed}for(var g=0;g<u.length-1;g+=1)for(var O=!0;v(u[g+1]-u[g])&&O;){var S=d(u,1,g+1);u[g+1]=S.value,O=S.changed}}return{value:u[r],values:u}}]};var u=a(r(95894)),o=n(r(67294))},59602:(e,t)=>{"use strict";function r(e,t,r){return(e-t)/(r-t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDirectionStyle=function(e,t,n,a){var u=r(t,n,a),o={};switch(e){case"rtl":o.right="".concat(100*u,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*u,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*u,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*u,"%"),o.transform="translateX(-50%)"}return o},t.getIndex=function(e,t){return Array.isArray(e)?e[t]:e},t.getOffset=r},19158:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},27712:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},n=r;t.default=n},18545:(e,t,r)=>{"use strict";var n=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.useRef();t.current=e;var r=a.useCallback((function(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(n))}),[]);return r};var a=n(r(67294))},82546:(e,t,r)=>{"use strict";var n=r(66344),a=r(64722);Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var u=a(r(67294)),o=(0,n(r(19158)).default)()?u.useLayoutEffect:u.useEffect,l=o;t.default=l;t.useLayoutUpdateEffect=function(e,t){var r=u.useRef(!0);o((function(){if(!r.current)return e()}),t),o((function(){return r.current=!1,function(){r.current=!0}}),[])}},60869:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t||{},n=r.defaultValue,a=r.value,d=r.onChange,v=r.postState,p=(0,s.default)((function(){var t,r=void 0;return f(a)?(r=a,t=u.PROP):f(n)?(r="function"==typeof n?n():n,t=u.PROP):(r="function"==typeof e?e():e,t=u.INNER),[r,t,r]})),m=(0,o.default)(p,2),y=m[0],E=m[1],b=f(a)?a:y[0],x=v?v(b):b;(0,i.useLayoutUpdateEffect)((function(){E((function(e){var t=(0,o.default)(e,1)[0];return[a,u.PROP,t]}))}),[a]);var _=l.useRef(),M=(0,c.default)((function(e,t){E((function(t){var r=(0,o.default)(t,3),n=r[0],a=r[1],l=r[2],c="function"==typeof e?e(n):e;if(c===n)return t;var i=a===u.INNER&&_.current!==l?l:n;return[c,u.INNER,i]}),t)})),h=(0,c.default)(d);return(0,i.default)((function(){var e=(0,o.default)(y,3),t=e[0],r=e[1],n=e[2];t!==n&&r===u.INNER&&(h(t,n),_.current=n)}),[y]),[x,M]};var u,o=a(r(17665)),l=n(r(67294)),c=a(r(18545)),i=n(r(82546)),s=a(r(78423));function f(e){return void 0!==e}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(u||(u={}))},78423:(e,t,r)=>{"use strict";var n=r(64722),a=r(66344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.useRef(!1),r=o.useState(e),n=(0,u.default)(r,2),a=n[0],l=n[1];return o.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[a,function(e,r){if(r&&t.current)return;l(e)}]};var u=a(r(17665)),o=n(r(67294))},45520:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.call=u,t.default=void 0,t.note=a,t.noteOnce=function(e,t){u(a,e,t)},t.resetWarned=function(){r={}},t.warning=n,t.warningOnce=o;var r={};function n(e,t){0}function a(e,t){0}function u(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function o(e,t){u(n,e,t)}var l=o;t.default=l},12595:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2735:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},87742:(e,t,r)=>{var n=r(12595);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},66156:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},61236:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},66344:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},64722:(e,t,r)=>{var n=r(45023).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=o?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(u,l,c):u[l]=e[l]}return u.default=e,r&&r.set(e,u),u},e.exports.__esModule=!0,e.exports.default=e.exports},4724:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},17155:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},8829:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},65273:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},26005:(e,t,r)=>{var n=r(66156);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},26598:(e,t,r)=>{var n=r(75271);e.exports=function(e,t){if(null==e)return{};var r,a,u=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.__esModule=!0,e.exports.default=e.exports},75271:e=>{e.exports=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},17665:(e,t,r)=>{var n=r(2735),a=r(17155),u=r(37024),o=r(8829);e.exports=function(e,t){return n(e)||a(e,t)||u(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},95894:(e,t,r)=>{var n=r(87742),a=r(4724),u=r(37024),o=r(65273);e.exports=function(e){return n(e)||a(e)||u(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},45023:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},37024:(e,t,r)=>{var n=r(12595);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);