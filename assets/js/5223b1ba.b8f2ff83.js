"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=i,b=p["".concat(d,".").concat(u)]||p[u]||o[u]||r;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24229:(e,t,a)=>{a.d(t,{x:()=>R,Z:()=>M});var n=a(67294);const i={answer:"answer_rKAQ",option:"option_CENc",empty:"empty_rgdf",arrayAnswer:"arrayAnswer_LBzS",active:"active_Vst5",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",dropdownMenu:"dropdownMenu_UYca",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var r=a(86010),l=a(71217);const s=/--(?<klass>\w+)$/,d=e=>{let t,{value:a}=e,r=a;if(s.test(a)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(a);t=i[e],r=""+a.replace(s,"")}return n.createElement("option",{value:a,className:t},r)};var m=a(92814),c=a(51436),o=a(68949),p=a(72389),u=a(21314),b=a(74322);const v=/--(?<klass>\w+)$/,y=e=>i[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],h=(0,l.Pi)((e=>{const t=(0,p.Z)(),[a,l]=n.useState("unchecked"),s=(0,u.oR)("documentStore").find(e.webKey),v=e=>{s.loaded&&(l("unchecked"),s.setData({value:e,type:"string"}))},h=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;l(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,o.U5)((()=>s.loaded),(e=>{e&&h(s.value)}))),[s]),n.useEffect((()=>{s.loaded&&h(s.value)}),[s,t]),t?s.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>v(e.target.value),style:{width:e.width},value:s.value,className:y(s.value),disabled:!s.loaded},e.select.map(((e,t)=>n.createElement(d,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>v(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>h(s.value),className:(0,r.default)(i[a],i.checkButton)},n.createElement(m.G,{icon:(f=a,"correct"===f?c.f8k:"wrong"===f?c.nYk:c.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR");var f})),f=/--(?<klass>\w+)$/,k=e=>i[(e=>{if(f.test(e))return e.match(f).groups.klass})(e)],N=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),n.createElement("div",{className:i.arrayAnswer},t.data.value.map(((l,s)=>e.select?n.createElement("div",{className:(0,r.default)("dropdown"),key:s},n.createElement("div",{className:(0,r.default)(i.option,!l&&i.empty,k(l)),"data-toggle":"dropdown",onClick:e=>{const t=e.currentTarget,a=t.parentElement;function n(){console.log("remove"),t.classList.remove("button--active"),a.classList.remove("dropdown--show"),document.removeEventListener("click",n)}a.classList.contains("dropdown--show")||(t.classList.add("button--active"),a.classList.add("dropdown--show"),setTimeout((()=>{document.addEventListener("click",n)}),0))}},l.replace(f,"")),n.createElement("div",{className:(0,r.default)(i.dropdownMenu,"dropdown__menu")},e.select.map(((e,t)=>{const d=k(e),m=e.replace(f,"");return n.createElement("div",{key:t,onClick:()=>a(e,s),className:(0,r.default)(i.option,d,!m&&i.empty,e===l&&i.active)},n.createElement("span",null,m))})))):n.createElement("input",{key:s,type:"text",onChange:e=>a(e.target.value,s),value:l,disabled:!t.loaded||t.readonly}))))):n.createElement(b.Z,null)}));var g=a(83117),w=a(31288);const x=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",{className:"notranslate"},e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,g.Z)({model:t},e))):n.createElement(b.Z,null)}));var E=a(47271);const C=(0,l.Pi)((e=>(0,u.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var T=a(97762);const K="state_xAV3",A="checkbox_HXMO",_="admin_yhn5",S="box_nEnD",z="nameWrapper_q6u9",B="name_FE1M";var O=a(38684);const V={checked:"mdi-checkbox-marked-outline",unset:"mdi-checkbox-blank-outline",question:"mdi-account-question-outline"},W={checked:"--ifm-color-success",unset:"--ifm-color-secondary",question:"--ifm-color-warning"},L={checked:"white",unset:"black",question:"white"},P=(0,l.Pi)((e=>{const{sidebar_custom_props:t}=(0,O.Z)(),a=(0,u.oR)("adminStore"),[i]=n.useState(window.location.pathname.replace("/","").split("/")[0]),l=(0,u.oR)("documentStore").find(e.webKey);return l.loaded?n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.default)(K,"state-component",(e.noHeader||e.children)&&"no-header")},n.createElement("div",{className:(0,r.default)("button","button--"+l.viewClass,A),onClick:()=>{switch(l.value){case"checked":return e.noQuestion?l.setValue("unset"):l.setValue("question");case"question":return l.setValue("unset");case"unset":return l.setValue("checked")}}},n.createElement("i",{className:(0,r.default)("mdi",V[l.value])})),n.createElement("div",null,e.children)),a.isAdmin&&a.showAdminElements&&n.createElement("div",{className:(0,r.default)(_)},a.findByWebKey(i,t.id,e.webKey).map(((e,t)=>{var i;return n.createElement("div",{className:(0,r.default)(S),key:t},n.createElement("div",{className:(0,r.default)(K),style:{backgroundColor:"var("+W[e.data.value]+")"}},n.createElement("i",{className:(0,r.default)("mdi",V[e.data.value]),style:{color:""+L[e.data.value]}})),n.createElement("div",{className:(0,r.default)(z)},n.createElement("div",{className:(0,r.default)(B)},(null==(i=a.getUser(e.user_id))?void 0:i.name)||"Name")))})))):n.createElement(b.Z,null)})),R=e=>e.replace(/\s+/g,"").toUpperCase(),M=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore"),a=(0,u.oR)("msalStore"),i=t.find(e.webKey),l=(0,p.Z)();if((0,u.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||T.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size};case"state":return{type:"state",value:"unset"}}})(e)),e.type,e.webKey,!0),!l)return n.createElement("div",{style:{height:"1em"}});if(!i)return n.createElement(b.Z,null);(e=>{switch(e.type){case"string":return h;case"text":return x;case"array":return N;case"state":;}})(e);return n.createElement("div",{"data--web-key":e.webKey,className:(0,r.default)("answer",e.type)},n.createElement(E.Z,null),a.loggedIn&&n.createElement(C,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(N,e),"state"===e.type&&n.createElement(P,e))}))},47271:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294);const i="noLoginAlert_HRfh";var r=a(39960),l=a(71217),s=a(21314);const d=(0,l.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:i},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.Z,{to:"/login"},"Login"))))},15361:(e,t,a)=>{a.d(t,{Vc:()=>f,bF:()=>g,H4:()=>N,g7:()=>h});var n=a(86010),i=a(67294),r=a(63437);const l="container_zVtl",s="input_tYix",d="inputContainer_mEEr",m="active_fzzJ",c="interactive_Yfi1",o="pixelEditor_B1ri",p="row_yRws",u="cell_gJPc",b="off_TP1h",v="on_DXrb",y="actions_N7O9",h=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),f={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},k=function(e,t){void 0===t&&(t=!0);const a=[];let n=e.replace(/\s/g,"");for(;n.length>0&&(!(n.length<5)||t);)a.push(n.slice(0,5)),n=n.slice(5);return a},N=()=>{const[e,t]=i.useState(""),[a,r]=i.useState(""),[c,o]=i.useState("text");return i.useEffect((()=>{"text"===c&&r((e=>e.toUpperCase().split("").map((e=>f[e]||e)))(e).join(" "))}),[e]),i.useEffect((()=>{"penta"===c&&t((e=>k(e).map((e=>f[e]||e)))(a).join(""))}),[a]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",l)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pentacode"),i.createElement("h4",null,"Klartext"),i.createElement("div",{className:d},i.createElement("textarea",{onFocus:()=>o("text"),placeholder:"Klartext eingeben",className:(0,n.default)(s),value:e,onChange:e=>t(e.target.value.toUpperCase()),rows:5}),"text"===c&&i.createElement("div",{className:m})),i.createElement("h4",null,"Pentacode"),i.createElement("div",{className:d},i.createElement("textarea",{onFocus:()=>o("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,n.default)(s),value:a,onChange:e=>r(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===c&&i.createElement("div",{className:m}))))},g=()=>{const[e,t]=i.useState("00000 00000 00000 00000 00000"),[a,d]=i.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[m,h]=i.useState("");return i.useEffect((()=>{"cell"!==m?(h("editor"),d(k(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):h("")}),[e]),i.useEffect((()=>{"editor"!==m?(h("cell"),t(a.map((e=>e.join(""))).join(" "))):h("")}),[a]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",l)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),i.createElement("div",{className:c},i.createElement("div",{className:(0,n.default)(o)},i.createElement(r.Z,{options:{backgroundColor:"white",canvasWidth:50,canvasHeight:10*a.length}},i.createElement(i.Fragment,null,a.map(((e,t)=>i.createElement("div",{className:(0,n.default)(p),key:t},e.map(((e,r)=>i.createElement("span",{className:(0,n.default)(u,0===e?b:v),key:r,onClick:()=>{const e=(e=>{const t=[];return e.forEach((e=>{const a=[];t.push(a),e.forEach((e=>{a.push(e)}))})),t})(a);e[t][r]=1-e[t][r],d(e)}})))))))),i.createElement("div",{className:y},i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>d([...a,[0,0,0,0,0]])},"+"),i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>d([...a.slice(0,-1)])},"\uff0d"))),i.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,n.default)(s),value:e,onChange:e=>t(e.target.value.replace(/[^01\s]/g,"")),rows:a.length}))))}},63437:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(51436),i=a(92814),r=a(86010),l=a(14842),s=a(67294);const d={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},m={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},c=e=>{let{children:t,options:a}=e;const[n,c]=s.useState(void 0),[o,p]=s.useState("none"),u=s.useRef(null);return s.useEffect((()=>{if(["none","spin","ready"].includes(o))return;const e=setTimeout((()=>p("copied"===o?"ready":"none")),2e3);return()=>clearTimeout(e)}),[o]),s.useEffect((()=>{"none"!==o&&p("none")}),[t]),s.createElement(s.Fragment,null,s.createElement("button",{className:(0,r.default)("button","button--outline","button--sm",m[o]),disabled:"spin"===o,onClick:()=>{if(null!==u.current){if("none"===o)return p("spin"),(0,l.SE)(u.current,a).then((e=>{c(e),p("ready")}));if("ready"===o)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{p("copied")})).catch((e=>{p("error"),console.warn(e)}))}catch(e){console.warn(e),p("error")}}}},s.createElement(i.G,{icon:d[o]})),s.createElement("div",{ref:u,className:"copy-container"},t))}},74322:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),i=a(86010);const r="loader_FEpR",l="badge_oWqf",s="overlay_cqDg";var d=a(92814),m=a(51436);const c=e=>n.createElement("div",{className:(0,i.default)(r,e.overlay&&s)},n.createElement(d.G,{icon:m.IJ7,spin:!0}),n.createElement("span",{className:(0,i.default)("badge",l)},e.caption||"Laden..."))},31288:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(72389),i=a(71217),r=a(67294);const l=(0,i.Pi)((e=>{const[t,i]=r.useState();return r.useEffect((()=>{Promise.all([a.e(532),a.e(5303),a.e(1897),a.e(4729)]).then(a.bind(a,84729)).then((e=>{i(e)}))}),[]),(0,n.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement("div",null,e.model.text)}))},82025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),r=a(24229),l=a(15361);const s={sidebar_custom_props:{id:"1a04affb-3d17-4f2f-ad01-8423c3bb8732"}},d="\xdcbungen",m={unversionedId:"Kryptologie/Symmetrisch/uebungen",id:"Kryptologie/Symmetrisch/uebungen",title:"\xdcbungen",description:"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel).",source:"@site/docs/Kryptologie/03-Symmetrisch/06-uebungen.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/uebungen",permalink:"/Kryptologie/Symmetrisch/uebungen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/06-uebungen.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:6,frontMatter:{sidebar_custom_props:{id:"1a04affb-3d17-4f2f-ad01-8423c3bb8732"}},sidebar:"sidebar",previous:{title:"Verkettung von Bl\xf6cken",permalink:"/Kryptologie/Symmetrisch/block-chaining"},next:{title:"Krypto-Familie",permalink:"/Kryptologie/Symmetrisch/krypto-family"}},c={},o=[{value:"ECB Modus",id:"ecb-modus",level:2},{value:"CBC Modus",id:"cbc-modus",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("Comment"),b=p("Answer"),v=p("Figure"),y=p("SourceRef"),h={toc:o};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"\xfcbungen"},"\xdcbungen"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel)."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"ecb-modus"},"ECB Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)(l.H4,{mdxType:"TextEditor"}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"1-xor-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. XOR Verschl\xfcsselung"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"BUCHSTABENSPIELE")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"AKRONYM")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"a30ab42b-0e2a-4452-a7a4-f34c96e8a4cd",monospace:!0,mdxType:"Answer"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(",(0,i.kt)("em",{parentName:"p"},"L\xf6sung als Text (nicht als Bin\xe4re Zahlenfolgt) angeben"),")"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)(b,{type:"string",webKey:"b680e137-905a-4bc5-a05a-fe65bc1684ee",solution:"C?QG.MLCN--?PHMN",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"2-xor-entschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. XOR Entschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"XWVJZWEKK,XWVJIK")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"VVXKZ")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"f0c2bc43-cc15-4f58-8466-19f2f3374d2e",monospace:!0,mdxType:"Answer"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(",(0,i.kt)("em",{parentName:"p"},"L\xf6sung als Text (nicht als Bin\xe4re Zahlenfolgt) angeben"),")"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)(b,{type:"string",webKey:"f877bdef-a2e9-4b82-a6cc-1b61109970c7",solution:"NANA ASS ANANAS.",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"cbc-modus"},"CBC Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"hinweis-cbc-modus"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hinweis CBC-Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Jeder Block hat genau so viele Bits wie der Schl\xfcssel. (Hier werden also meist 2 Buchstaben (=",(0,i.kt)("inlineCode",{parentName:"p"},"10")," bits) pro Antwort in einem Block verwendet.)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"c1")," ist ein Zwischenresultat, damit wird weitergearbeitet..."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"3-cbc-modus-verschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. CBC-Modus: Verschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"CBC: Verschl\xfcsseln",src:a(83549).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"CBC: Verschl\xfcsseln",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(y,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"WINTER")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"NY")," und dem IV ",(0,i.kt)("inlineCode",{parentName:"p"},"AZ"),"."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"aeaf6634-df2d-427f-9daa-970ff225f105",monospace:!0,mdxType:"Answer"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",style:{rows:"3",fontFamily:"monospace"},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 1")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"9f33bc0e-1475-49ee-8201-f389920f3da7",solution:"10111 01001",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"576d141c-99d1-41dd-9cb6-2536b5eefc61",solution:"00001 11010",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"6280885d-6427-4403-a09a-144b04f76716",solution:"10110 10011",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",solution:"01110 11001",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"029d1f0e-f597-4eb4-bac5-7c9ef6d8e849",solution:"11000 01010",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 2")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)(b,{label:"p",type:"string",width:"12em",labelWidth:"3em",webKey:"55c93903-3bdb-4189-8f80-68bb19f4cbd1",solution:"01110 10100",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",type:"string",width:"12em",labelWidth:"3em",webKey:"4fd15699-160c-4738-8288-b9d2a3ac40d3",solution:"11000 01010",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"52dc90fe-224a-4739-b277-1181fb41c265",solution:"10110 11110",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"2bbfd220-5673-488a-a903-528ef7324885",solution:"11000 00111",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 3")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)(b,{width:"12em",labelWidth:"3em",label:"p",type:"string",webKey:"8e2339e3-d4d9-4339-9709-bbbaf28e4e05",solution:"00101 10010",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{width:"12em",labelWidth:"3em",label:"IV",type:"string",webKey:"8db5f43f-0bcd-4d11-8bca-a72286778e65",solution:"11000 00111",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"3a7ac8ec-b6c6-4acd-b123-f1ca84d99fad",solution:"11101 10101",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"a44a611e-6cff-41ea-9277-4b0859ea6249",solution:"10011 01100",sanitizer:r.x,mdxType:"Answer"})))),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsselter Text (Buchstaben-Form)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)(b,{type:"string",webKey:"dabff993-1dc5-43c8-bfca-f944c8dc3f96",solution:"XJXGSL",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"4-cbc-modus-entschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. CBC-Modus: Entschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"CBC Entschl\xfcsseln",src:a(89318).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"CBC Entschl\xfcsseln",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(y,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"NNHDFBA")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"BE")," und beliebigem IV."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"1d46518d-94df-4d09-8d12-ae6f28df2b67",monospace:!0,mdxType:"Answer"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",style:{rows:"4",fontFamily:"monospace"},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 1")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"150519fd-560b-42e6-acec-58407af94ada",solution:"01110 01110",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",solution:"00010 00101",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"92338241-0b77-4195-b65b-c4cf64bf6734",solution:"01100 01011",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"aa136c52-c970-437f-b9ff-270468514137",checker:e=>{var t;return 10===(null==(t=(0,r.x)(e))?void 0:t.length)},mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"14beb904-594a-43ff-a67c-88b9ce93cb3c",checker:e=>{var t;return 10===(null==(t=(0,r.x)(e))?void 0:t.length)},mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 2")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",type:"string",width:"12em",labelWidth:"3em",webKey:"97948788-feeb-4c72-94fe-5e176283218a",solution:"01000 00100",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",type:"string",width:"12em",labelWidth:"3em",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"b4afd242-e054-4f3c-b865-2d14cc206057",solution:"01010 00001",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"d9ff2b83-e6de-490b-be42-11d4d4676da7",solution:"01110 01110",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"00ac07c4-7f1f-4d9a-a908-7f41f20621b0",solution:"00100 01111",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 3")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"b99355ce-bc59-4ac6-8183-cada8a706b27",solution:"00110 00010",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"dc3049f2-5006-4507-8dd5-8759b7c24465",solution:"00100 00111",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"e33acd9e-ccbf-4d39-aea2-9ee51b665fb2",solution:"01000 00100",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"1bcc452d-3099-4ab4-b24d-b24407a63c41",solution:"01100 00011",sanitizer:r.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 4")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"30d7f06d-2d98-4649-b585-c3e0e11841fc",solution:"00001",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"69af84b4-3d3a-4377-adbb-6870b71cb9c7",solution:"00011",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"791d6b06-0ab1-4cb7-82d2-388ed8cd7626",solution:"00110",sanitizer:r.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"d0fbef85-346d-4d70-bb60-972205240d36",solution:"00101",sanitizer:r.x,mdxType:"Answer"})))),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entschl\xfcsselter Text (Buchstaben-Form)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,i.kt)(b,{type:"string",webKey:"4ce989c5-27ad-4146-bdf6-adb7b5908b55",solution:"DOLCE",sanitizer:e=>{var t;return 7===(null==(t=(0,r.x)(e))?void 0:t.length)?(0,r.x)(e).slice(2):(0,r.x)(e)},mdxType:"Answer"}))))}f.isMDXComponent=!0},89318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CBC_decryption-e5affac8b24b593a703baa57e51c9bcc.svg"},83549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CBC_encryption-db55ceaa296438e01ffdad954f44699c.svg"}}]);