"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9879],{3239:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r="noLoginAlert_boZc",i=a(73727),l=a(71217),o=a(21314),c=(0,l.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,a){a.d(t,{Z:function(){return V}});var n=a(67294),r=a(26528),i=a(72389),l=a(71217),o=a(79265),c=a(21314),d=a(78982),s=a(46858),u=n.createContext(void 0),m=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:m(t),type:t.type,size:"array"===t.type?t.size:void 0});var a=function(){if(t.id){var e=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,d.rV)(t.id,e);if(a&&a.value)return{data:{value:a.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,d.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:m(t),type:t.type,size:t.size},a):e.getOrCreateDocument(t.webKey,t.type,{value:m(t),type:t.type},a)},f=(0,l.Pi)((function(e){var t=(0,c.o)("documentStore"),a=n.useState(p(t,e))[0];return(0,i.Z)()?n.createElement(u.Provider,{value:a},e.children):n.createElement("div",null,"Loading")})),b={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},g=a(86010),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){var t=e.value,a=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=b[i],a=""+t.replace(v,"")}return n.createElement("option",{value:t,className:r},a)},h=a(92814),w=a(51436),z=a(68949),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),N=function(e){return b[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},x=(0,l.Pi)((function(e){var t,a=n.useState("unchecked"),r=a[0],i=a[1],l=n.useContext(u),o=function(e){i("unchecked"),l.setData({value:e,type:"string"})},c=function(t){var a=e.sanitizer?e.sanitizer:function(e){return e};i(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,z.U5)((function(){return l.loaded}),(function(e){e&&c(l.data.value)}))}),[]),n.createElement("div",{className:b.answer},e.label&&n.createElement("label",null,e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return o(e.target.value)},value:l.data.value,className:N(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return n.createElement(y,{value:e,key:t})}))):n.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&n.createElement("button",{onClick:function(){return c(l.data.value)},className:(0,g.default)(b[r],b.checkButton)},n.createElement(h.G,{icon:(t=r,"correct"===t?w.f8k:"wrong"===t?w.nYk:w.sph)})))})),Z=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),L=function(e){return b[function(e){if(Z.test(e))return e.match(Z).groups.klass}(e)]},F=(0,l.Pi)((function(e){var t=n.useContext(u),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return n.createElement("div",{className:b.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:r,className:L(r),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(y,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),E=void 0,_=(0,l.Pi)((function(e){var t=n.useState(!1),r=t[0],i=t[1],l=n.useState(!1),o=l[0],c=l[1],d=n.useRef(null),s=n.useContext(u),m=function(e){e.preventDefault()};n.useEffect((function(){var e=!0;return function(e){if(E)return e();Promise.all([Promise.all([a.e(2930),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(3312),a.e(1940)]).then(a.bind(a,11940)),Promise.all([a.e(3312),a.e(7617)]).then(a.bind(a,37617))]).then((function(t){E=t[0].default;var a=t[1].default,n=t[2].default;a.register("modules/imageCompress",n),e()}))}((function(){e&&(c(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return E&&o?n.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&n.createElement("h6",null,e.label),n.createElement(E,{ref:d,theme:"snow",readOnly:!s.loaded||s.isReadonly,className:(0,g.default)(b.quillAnswer,r?void 0:"disable-toolbar"),value:s.loaded?s.data.value||"":"Laden...",onChange:function(e,t,a,n){var r,i;r=e,void 0===i&&(i=0),o&&s.setData({value:r,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement("div",null,"Loading...")})),C=a(3239),A=(0,l.Pi)((function(){var e=n.useContext(u),t=e.legacyData;return t?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement(u.Provider,{value:new o.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&n.createElement(_,{type:"text",webKey:e.webKey}),"string"===e.data.type&&n.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&n.createElement(F,{type:"array",webKey:e.webKey,size:e.data.size})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),P=(0,l.Pi)((function(){return n.useContext(u).isOffline?n.createElement("div",null,n.createElement("span",{className:(0,g.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),V=(0,l.Pi)((function(e){var t=(0,c.o)("msalStore");return n.createElement(f,e,n.createElement("div",{"data--web-key":e.webKey},n.createElement(C.Z,null),t.loggedIn&&n.createElement(A,null),t.loggedIn&&n.createElement(P,null),"text"===e.type&&n.createElement(_,e),"string"===e.type&&n.createElement(x,e),"array"===e.type&&n.createElement(F,e)))}))},21314:function(e,t,a){a.d(t,{o:function(){return i}});var n=a(67294),r=a(32930),i=function(e){return n.useContext(r.Nx)[e]}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return i}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return i},cl:function(){return l}});var n=864e5,r=2592e6,i=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?a:l}return a}}var c=localStorage.getItem(e);return c?JSON.parse(c):a}catch(d){return a}},l=function(e,t){try{if(t){var a=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=i(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},30220:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(84384),o=a(77960),c=["components"],d={title:"RoboZZle"},s="RoboZZle",u={unversionedId:"Programmieren-1/Algorithmen/Uebungen/robozzle",id:"Programmieren-1/Algorithmen/Uebungen/robozzle",isDocsHomePage:!1,title:"RoboZZle",description:"Puzzle 1",source:"@site/docs/Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",sourceDirName:"Programmieren-1/01-Algorithmen/100-Uebungen",slug:"/Programmieren-1/Algorithmen/Uebungen/robozzle",permalink:"/Programmieren-1/Algorithmen/Uebungen/robozzle",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:1,frontMatter:{title:"RoboZZle"},sidebar:"sidebar",previous:{title:"Struktos",permalink:"/Programmieren-1/Algorithmen/struktos.nosync"},next:{title:"Einf\xfchrung",permalink:"/Programmieren-1/Turtlegrafik/intro"}},m=[],p={toc:m};function f(e){var t=e.components,d=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"robozzle"},"RoboZZle"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/MmqBVWi_Pc0?start=21",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12419"},"Puzzle 1")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(71069).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a1",webKey:"49f55f64-13b9-4f15-b138-1335c09281b5",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2741"},"Puzzle 2")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(57132).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a2",webKey:"2b9029cf-9593-4ab8-a49a-eec034c27b0c",label:"L\xf6sung F1",size:3,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10858"},"Puzzle 3")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(7115).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a3",webKey:"f8f87665-1d2b-4559-b3ba-fbd604061d2a",label:"L\xf6sung F1",size:7,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-4"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12511"},"Puzzle 4")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(58350).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a4",webKey:"d3b5b747-6a4d-4658-a05f-0026e20ce326",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-5"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10895"},"Puzzle 5")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(35810).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a5",webKey:"13b53721-50de-4630-abe7-7f1cd5f4ea8e",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-6"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 6.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10048"},"Puzzle 6")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(96626).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a6a",webKey:"ef5632a1-8885-415d-a1dc-50b810b19ba2",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a6b",webKey:"49c1b7a8-b457-437a-a147-a5ad75c7f2fe",label:"L\xf6sung F2",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-7"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 7.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2748"},"Puzzle 7")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(13112).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a7",webKey:"1f50b198-7ef4-48b6-bbdc-68452baa7952",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-8"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 8.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=140"},"Puzzle 8")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(31349).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a8",webKey:"59c65a0b-5ae1-4287-b25f-567b598a67a4",label:"L\xf6sung F1",size:6,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-9"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 9.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=1040"},"Puzzle 9")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(1461).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a9",webKey:"a290e5cd-caae-4dc5-acfb-e435f072645c",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-10"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 10.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=87"},"Puzzle 10")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(64710).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a10a",webKey:"2d443973-fd5e-4432-90a3-45dd0c6932fd",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a10b",webKey:"14b2fdbd-cb85-4175-9016-bf43e252fcf0",label:"L\xf6sung F2",size:3,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))))}f.isMDXComponent=!0},71069:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a1-9f88e1913a1251d499bdfb0a2c7fb2b7.png"},64710:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a10-c715bd3fb509c1d38ff2f9fd71177302.png"},57132:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a2-b543492edbe8b6375cf700f5988d3ee5.png"},7115:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a3-161aca72f309f94bd52b0b113745717b.png"},58350:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a4-4409a04081e5d33f9e8a364227172666.png"},35810:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a5-152d08fb7bcd5be8b0342534e1465859.png"},96626:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a6-874c825cfa7a6ce99aec0506367ab2c3.png"},13112:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a7-04e86296810da925b2665cd89167c460.png"},31349:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a8-02d9e336651d2befe3b2f5178908c732.png"},1461:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a9-12892684d0b832904433762ae750c699.png"},26528:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}a.d(t,{Z:function(){return l}});var r=a(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function l(){l=function(e,t){return new a(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function a(e,n,i){var l=new RegExp(e,n);return t.set(l,i||t.get(e)),(0,r.Z)(l,a.prototype)}function o(e,a){var n=t.get(a);return Object.keys(n).reduce((function(t,a){return t[a]=e[n[a]],t}),Object.create(null))}return i(a,RegExp),a.prototype.exec=function(t){var a=e.exec.call(this,t);return a&&(a.groups=o(a,this)),a},a.prototype[Symbol.replace]=function(a,r){if("string"==typeof r){var i=t.get(this);return e[Symbol.replace].call(this,a,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,a,(function(){var e=arguments;return"object"!==n(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,a,r)},l.apply(this,arguments)}}}]);