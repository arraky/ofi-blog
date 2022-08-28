"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7918],{24229:(e,t,a)=>{a.d(t,{x:()=>I,Z:()=>H});var n=a(67294);const r={answer:"answer_rKAQ",option:"option_CENc",empty:"empty_rgdf",arrayAnswer:"arrayAnswer_LBzS",active:"active_Vst5",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",dropdownMenu:"dropdownMenu_UYca",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=a(86010),o=a(71217);const s=/--(?<klass>\w+)$/,c=e=>{let t,{value:a}=e,l=a;if(s.test(a)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(a);t=r[e],l=""+a.replace(s,"")}return n.createElement("option",{value:a,className:t},l)};var i=a(92814),d=a(51436),u=a(68949),m=a(72389),p=a(21314),g=a(74322);const v=/--(?<klass>\w+)$/,h=e=>r[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],f=(0,o.Pi)((e=>{const t=(0,m.Z)(),[a,o]=n.useState("unchecked"),s=(0,p.oR)("documentStore").find(e.webKey),v=e=>{s.loaded&&(o("unchecked"),s.setData({value:e,type:"string"}))},f=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;o(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,u.U5)((()=>s.loaded),(e=>{e&&f(s.value)}))),[s]),n.useEffect((()=>{s.loaded&&f(s.value)}),[s,t]),t?s.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>v(e.target.value),style:{width:e.width},value:s.value,className:h(s.value),disabled:!s.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>v(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>f(s.value),className:(0,l.default)(r[a],r.checkButton)},n.createElement(i.G,{icon:(y=a,"correct"===y?d.f8k:"wrong"===y?d.nYk:d.sph)}))):n.createElement(g.Z,null):n.createElement("div",null,"SSR");var y})),y=/--(?<klass>\w+)$/,b=e=>r[(e=>{if(y.test(e))return e.match(y).groups.klass})(e)],E=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),n.createElement("div",{className:r.arrayAnswer},t.data.value.map(((o,s)=>e.select?n.createElement("div",{className:(0,l.default)("dropdown"),key:s},n.createElement("div",{className:(0,l.default)(r.option,!o&&r.empty,b(o)),"data-toggle":"dropdown",onClick:e=>{const t=e.currentTarget,a=t.parentElement;function n(){console.log("remove"),t.classList.remove("button--active"),a.classList.remove("dropdown--show"),document.removeEventListener("click",n)}a.classList.contains("dropdown--show")||(t.classList.add("button--active"),a.classList.add("dropdown--show"),setTimeout((()=>{document.addEventListener("click",n)}),0))}},o.replace(y,"")),n.createElement("div",{className:(0,l.default)(r.dropdownMenu,"dropdown__menu")},e.select.map(((e,t)=>{const c=b(e),i=e.replace(y,"");return n.createElement("div",{key:t,onClick:()=>a(e,s),className:(0,l.default)(r.option,c,!i&&r.empty,e===o&&r.active)},n.createElement("span",null,i))})))):n.createElement("input",{key:s,type:"text",onChange:e=>a(e.target.value,s),value:o,disabled:!t.loaded||t.readonly}))))):n.createElement(g.Z,null)}));var w=a(83117),_=a(31288);const N=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",{className:"notranslate"},e.label&&n.createElement("h6",null,e.label),n.createElement(_.Z,(0,w.Z)({model:t},e))):n.createElement(g.Z,null)}));var k=a(47271);const C=(0,o.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var S=a(97762);const Z="state_xAV3",R="checkbox_HXMO",L="admin_yhn5",x="box_nEnD",B="nameWrapper_q6u9",A="name_FE1M";var K=a(38684);const P={checked:"mdi-checkbox-marked-outline",unset:"mdi-checkbox-blank-outline",question:"mdi-account-question-outline"},M={checked:"--ifm-color-success",unset:"--ifm-color-secondary",question:"--ifm-color-warning"},T={checked:"white",unset:"black",question:"white"},D=(0,o.Pi)((e=>{const{sidebar_custom_props:t}=(0,K.Z)(),a=(0,p.oR)("adminStore"),[r]=n.useState(window.location.pathname.replace("/","").split("/")[0]),o=(0,p.oR)("documentStore").find(e.webKey);return o.loaded?n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.default)(Z,"state-component",(e.noHeader||e.children)&&"no-header")},n.createElement("div",{className:(0,l.default)("button","button--"+o.viewClass,R),onClick:()=>{switch(o.value){case"checked":return e.noQuestion?o.setValue("unset"):o.setValue("question");case"question":return o.setValue("unset");case"unset":return o.setValue("checked")}}},n.createElement("i",{className:(0,l.default)("mdi",P[o.value])})),n.createElement("div",null,e.children)),a.isAdmin&&a.showAdminElements&&n.createElement("div",{className:(0,l.default)(L)},a.findByWebKey(r,t.id,e.webKey).map(((e,t)=>{var r;return n.createElement("div",{className:(0,l.default)(x),key:t},n.createElement("div",{className:(0,l.default)(Z),style:{backgroundColor:"var("+M[e.data.value]+")"}},n.createElement("i",{className:(0,l.default)("mdi",P[e.data.value]),style:{color:""+T[e.data.value]}})),n.createElement("div",{className:(0,l.default)(B)},n.createElement("div",{className:(0,l.default)(A)},(null==(r=a.getUser(e.user_id))?void 0:r.name)||"Name")))})))):n.createElement(g.Z,null)})),I=e=>e.replace(/\s+/g,"").toUpperCase(),H=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),r=t.find(e.webKey),o=(0,m.Z)();if((0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size};case"state":return{type:"state",value:"unset"}}})(e)),e.type,e.webKey,!0),!o)return n.createElement("div",{style:{height:"1em"}});if(!r)return n.createElement(g.Z,null);(e=>{switch(e.type){case"string":return f;case"text":return N;case"array":return E;case"state":;}})(e);return n.createElement("div",{"data--web-key":e.webKey,className:(0,l.default)("answer",e.type)},n.createElement(k.Z,null),a.loggedIn&&n.createElement(C,{webKey:e.webKey}),"text"===e.type&&n.createElement(N,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(E,e),"state"===e.type&&n.createElement(D,e))}))},47271:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294);const r="noLoginAlert_HRfh";var l=a(39960),o=a(71217),s=a(21314);const c=(0,o.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},27883:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const l="label_htSN",o="icon_Nz7l";var s=a(65488),c=a(85162);const i=e=>"s-"+e,d=e=>n.createElement(s.Z,{defaultValue:i(0),values:e.children.map(((t,a)=>{const s=(e.highlighted||[]).includes(a),c=n.createElement("span",{className:(0,r.default)(l)},s&&n.createElement("span",{className:(0,r.default)(o)},e.hilightIcon||"\u26a0\ufe0f"),e.getLabel(a));return{value:i(a),label:c}}))},e.children.map(((e,t)=>n.createElement(c.Z,{value:i(t),key:t},e))))},74322:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const l="loader_FEpR",o="badge_oWqf",s="overlay_cqDg";var c=a(92814),i=a(51436);const d=e=>n.createElement("div",{className:(0,r.default)(l,e.overlay&&s)},n.createElement(c.G,{icon:i.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",o)},e.caption||"Laden..."))},31288:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(72389),r=a(71217),l=a(67294);const o=(0,r.Pi)((e=>{const[t,r]=l.useState();return l.useEffect((()=>{Promise.all([a.e(532),a.e(5303),a.e(1897),a.e(4729)]).then(a.bind(a,84729)).then((e=>{r(e)}))}),[]),(0,n.Z)()?t?l.createElement(t.default,e):l.createElement("div",null):l.createElement("div",null,e.model.text)}))},9874:(e,t,a)=>{a.d(t,{Z:()=>ae});var n=a(83117),r=a(67294),l=a(98299),o=a(10412),s=a(46858);const c=function(e,t){void 0===t&&(t=0);let a=3735928559^t,n=1103547991^t;for(let r,l=0;l<e.length;l++)r=e.charCodeAt(l),a=Math.imul(a^r,2654435761),n=Math.imul(n^r,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var i=a(28137),d=a(86010),u=a(71217),m=a(21314),p=a(72389);const g=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),v=(0,u.Pi)((e=>{const[t,n]=r.useState();return r.useEffect((()=>{Promise.all([a.e(6606),a.e(8558)]).then(a.bind(a,78558)).then((e=>{n(e)}))}),[]),(0,p.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(g,e)}));var h=a(52616),f=a(61193),y=a.n(f);const b=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}};var E=a(61212);const w=e=>Object.entries(e||{}).map((e=>e[0]+'="'+e[1]+'"')).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},N=e=>{const t=[],{properties:a,tagName:n,type:r,children:l}=e;switch("root"===r&&l.forEach((e=>{t.push(...N(e))})),n){case"svg":e.metadata&&t.push(e.metadata),t.push("<svg "+w(a)+">"),l.forEach((e=>{t.push(...N(e))})),t.push("</svg>");break;case"rect":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<rect "+w(a)+"></rect>");break;case"g":if(0===(l||[]).length)return t;t.push("<g "+w(a)+">"),l.forEach((e=>{t.push(...N(e))})),t.push("</g>");break;case"line":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push("<line "+w(a)+"></line>");break;case"circle":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push("<circle "+w(a)+"></circle>");break;case"text":var o="";l.forEach((e=>{switch(e.type){case"text":o=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<text "+w(a)+">"+o+"</text>");break;case"polygon":var s="0,0,0",c="0,0";l.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(c=e.properties.to)}})),t.push("<polygon "+w(a)+' transform="translate('+c+") rotate("+s+')"></polygon>')}return t},k=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},C=(e,t,a,n)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),l={viewBox:r.x-5+","+(r.y-5)+","+(r.width+10)+","+(r.height+10),width:r.width+10,height:r.height+10};var o=e.outerHTML,s='<?xml version="1.0" standalone="no"?>';const c=document.createElement("div");let i=0;if(n||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),n=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(n.length>0){const e=n[n.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+e+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",""+l.width)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+l.width),e.setAttribute("to",""+l.width)})),t.setAttribute("viewBox",l.viewBox),t.setAttribute("height",""+l.height),t.setAttribute("width",""+l.width),c.innerHTML=s+"\r\n"+t.outerHTML,i=Array.from(t.querySelectorAll("animate")).map(k).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,E.Q)(e);return t&&_(a,t),N(a).join("\n")})(""+s+o,l);c.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=c.querySelector("svg"),t=document.createElement("metadata"),n=document.createElement("raw");n.innerHTML=a||"",t.appendChild(n),e.appendChild(t)}var d=new Blob([c.innerHTML],{type:"image/svg+xml;charset=utf-8"}),u=URL.createObjectURL(d),m=document.createElement("a");m.href=u,m.download=i>0?t+"__"+(Math.round(10*i)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(m),m.click(),document.body.removeChild(m)};var S=a(92814),Z=a(51436);const R=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey),a=(0,m.oR)("documentStore");return r.createElement(y(),{onStop:b,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:i.Z.brythonTurtleResult},r.createElement("div",{className:i.Z.brythonTurtleResultHead},r.createElement("span",null,"Output"),r.createElement("span",{className:i.Z.spacer}),r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:i.Z.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(h.h5.turtleSvgContainer(t.codeId));e&&C(e,""+t.codeId,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(S.G,{icon:Z.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:i.Z.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(h.h5.turtleSvgContainer(t.codeId));e&&C(e,""+t.codeId,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(S.G,{icon:Z.q7m}))),r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:i.Z.slimStrippedButton,onClick:()=>a.setOpendTurtleModal(void 0)},r.createElement("span",{"aria-hidden":"true"},r.createElement(S.G,{icon:Z.NBC})))),r.createElement("div",{id:h.h5.turtleResult(t.codeId),className:"brython-turtle-result"})))})),L=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return 0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join(""))?null:r.createElement("div",{className:i.Z.brythonOut},t.logMessages.length>0&&r.createElement("pre",{style:{overflowX:"auto"}},t.logMessages.map(((e,t)=>r.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.output)))))}));var x=a(51417),B=a(68949);const A=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,d.default)(i.Z.playButton,i.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(S.G,{icon:t.executing?x.Bmx:Z.zc,spin:t.executing}))})),K=(0,u.Pi)((e=>{let{slim:t,title:a,resettable:n,webKey:l,lang:o,noCompare:s,download:c}=e;const[u,p]=r.useState(!1),g=(0,m.oR)("documentStore").find(l);if(!g)return null;return r.useEffect((()=>{let e;const t=(0,B.U5)((()=>g.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(p(!0),e=setTimeout((()=>{p(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[g]),r.createElement("div",{className:(0,d.default)(i.Z.brythonCodeBlockHeader,i.Z.brythonCodeBlockHeader,i.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:i.Z.title},a),!g.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),g.saveService.isOffline&&r.createElement("span",{className:(0,d.default)("badge","badge--danger",i.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:i.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===g.saveService.state&&r.createElement(S.G,{icon:Z.UO1,style:{color:"#3578e5"},spin:!0}),u&&r.createElement(S.G,{icon:Z.f8k,style:{color:"var(--ifm-color-success)"}})),g.hasEdits&&!g.showRaw&&n&&r.createElement("button",{onClick:()=>{if(!n)return;if(g.readonly)return void g.setData({code:g.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&g.setData({code:g.rawScript})},className:i.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(S.G,{icon:Z.X7o})),c&&!g.showRaw&&r.createElement("button",{className:(0,d.default)(i.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([g.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const n="python"===o?".py":"."+o,r=a===o?g.webKey:a,l=r.endsWith(n)?r:""+r+n;e.download=l,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(S.G,{icon:Z.q7m})),g.hasEdits&&!s&&r.createElement("button",{className:(0,d.default)(i.Z.showRawButton,i.Z.headerButton,g.showRaw?i.Z.showRawButtonDisabled:void 0),onClick:(0,B.aD)((()=>g.showRaw=!g.showRaw)),title:g.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},g.showRaw?r.createElement(S.G,{icon:Z.w49}):r.createElement(S.G,{icon:Z.rxY}))),"python"===o&&r.createElement(A,{webKey:l}))}));var P=a(56771);const M=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore"),a=t.find(e.webKey);return r.useEffect((()=>(0,B.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,P.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[h.h5.scriptSource(a.codeId)]}))}))),[a]),r.createElement(r.Fragment,null,r.createElement(K,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(v,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers}),"python"===e.lang&&r.createElement("div",{className:(0,d.default)(i.Z.result)},r.createElement(L,{webKey:e.webKey}),t.opendTurtleModalWebKey===a.webKey&&r.createElement(R,{webKey:e.webKey}),r.createElement("div",{id:h.h5.outputDiv(a.codeId)})))})),T=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey),a=r.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,B.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),n=((e,t)=>{const a=r.useRef(null);return r.useCallback((n=>{a.current&&t(a.current),a.current=n,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(h.jS,a)}),(e=>{e.removeEventListener(h.jS,a)}));return r.createElement("div",{id:h.h5.component(t.codeId),ref:n})}));var D=a(47271),I=a(74322),H=a(4817),V=a.n(H),z=a(87410),O=a(12624),U=a(45431);const G=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:z.Z.highlight(e,z.Z.languages.python,"python")}})},q=e=>{const{value:t,dragging:a,index:l,...o}=e;return r.createElement(U.Rl,{prefixCls:"rc-slider-tooltip",overlay:"V"+t,visible:a,placement:"top",key:l},r.createElement(U.HH,(0,n.Z)({value:t},o)))},W=(0,u.Pi)((e=>{var t;const a=(0,m.oR)("documentStore"),n=(0,m.oR)("userStore"),l=a.find(e.webKey),[o,s]=r.useState(1),[c,u]=r.useState(!1);return r.useEffect((()=>(0,B.U5)((()=>{var t;return null==(t=a.find(e.webKey))?void 0:t.id}),(t=>{var n;t&&t>0&&(s(1),c&&(null==(n=a.find(e.webKey))||n.loadVersions()))}))),[]),l.versioned?r.createElement("div",{className:(0,d.default)(i.Z.codeHistory)},r.createElement("details",{open:c,onClick:e=>{e.preventDefault(),e.stopPropagation(),c||l.loadVersions(),u(!c)},className:(0,d.default)("alert alert--info",i.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},l.versionsLoaded?l.versions.length+" Versions":"Load Versions"),r.createElement(S.G,{className:(0,d.default)(i.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===l.versionsLoaded,icon:Z.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),l.loadVersions()}})),r.createElement("div",{className:(0,d.default)(i.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,d.default)(i.Z.versionControl)},r.createElement(O.Z,{value:o,handle:q,onChange:e=>{s(e)},min:1,max:l.versions.length-1,dots:l.versions.length<50})),r.createElement("div",{className:(0,d.default)(i.Z.diffViewer)},l.versions.length>1&&r.createElement(V(),{leftTitle:l.versions[o-1].version,rightTitle:r.createElement("div",null,l.versions[o].version,l.versions[o].pasted&&(null==(t=n.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:l.versions[o-1].data.code,newValue:l.versions[o].data.code,renderContent:G}))))):null})),j=(0,u.Pi)((e=>{const t=(0,m.oR)("documentStore");(0,m.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey);return(0,p.Z)()?a?r.createElement("div",{className:(0,d.default)(i.Z.wrapper,"notranslate")},!e.slim&&r.createElement(D.Z,null),r.createElement("div",{className:(0,d.default)(i.Z.playgroundContainer,e.slim?i.Z.containerSlim:i.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(T,{webKey:e.webKey}),r.createElement(M,e),r.createElement(W,{webKey:e.webKey}))):r.createElement(I.Z,null):r.createElement("div",null,"SSR")}));var F=a(25934),Y=a(10345);const $="playgroundWrapper_ADS_",J="playgroundContainer_J_zN";function Q(e){return r.createElement("div",{className:$},r.createElement("div",{className:J},r.createElement(Y.Z,e)))}var X=a(38985);const ee={},te=(e,t)=>{const a=function(){try{return(0,s.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ee[a]||(ee[a]={});const n=c(t);ee[a][n]||(ee[a][n]=Object.keys(ee[a]).length+1);return e?(0,s.Vx)(e):""+ee[a][n]},ae=(ne=l.Z,function(e){var t,a,l;const c=(e.className||"").match(/language-(?<lang>\w*)/);let i=null!=(t=null==c||null==(a=c.groups)||null==(l=a.lang)?void 0:l.toLocaleLowerCase())?t:"";if("py"===i&&(i="python"),e.live_jsx)return r.createElement(Q,(0,n.Z)({scope:X.Z},e));if(e.live_py&&o.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(ne,e);const t=e.children.replace(/\s*\n$/,""),a=te(e.title,t),[l]=r.useState(e.id||(0,F.Z)());return r.createElement(j,(0,n.Z)({},e,{webKey:l,code:t,codeId:a,readonly:!!e.readonly,lang:i,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,showLineNumbers:!(e.slim&&!/\n/.test(t)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,s.Vj)(e.title)||i}))}return r.createElement(ne,e)});var ne},19456:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(91419),l=a(21314),o=a(38684),s=a(71217);const c={},i=(0,s.Pi)((e=>{const{sidebar_custom_props:t}=(0,o.Z)();return(0,l.MD)(t.id),n.createElement("div",{className:c.content},n.createElement(r.Z,e))}))},96143:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(97887);const l="footer_awi1",o="sources_ctAP",s="copyright_kvjM";var c=a(65130),i=a(86010);function d(e){const{frontMatter:t}=(0,c.k)(),{sidebar_custom_props:a}=t;return n.createElement("div",{className:l},n.createElement("div",{className:o},a.source&&n.createElement(n.Fragment,null,a.source.name&&n.createElement("a",{href:a.source.ref||"#",className:(0,i.default)(s,"badge","badge--primary")},a.source.name,a.source.ref&&n.createElement("i",{className:"mdi mdi-open-in-new",style:{marginLeft:"0.3em"}})),n.createElement("i",{className:(0,i.default)(s,"badge","badge--primary")},"Bearbeitet")),n.createElement("a",{className:(0,i.default)(s,"badge","badge--primary"),href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",target:"_blank"},"CC 4.0",n.createElement("i",{className:"mdi mdi-open-in-new",style:{marginLeft:"0.3em"}}))),n.createElement(r.Z,e))}},125:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),l=a(35281),o=a(74477);function s(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,r.default)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.label):null}},22968:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(30109),r=a(67294),l=a(86010);const o="figure_mAmF",s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(""+e)?""+e+t:""+e},c=["maxWidth","maxHeight","height","width"];const i="bib_Qjs2",d="visible_fInC",u="refItem_Eo4g";var m=a(92814),p=a(51436);const g=e=>{const{bib:t}=e,[a,n]=r.useState(!1);return r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)(i,a?d:void 0),onClick:()=>n(!a)},"@"),a&&r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)("badge badge--secondary",u)},"Autor: ",t.author),r.createElement("a",{href:t.licence_url,target:"_blank",className:u},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",t.licence)),t.edited&&r.createElement("span",{className:(0,l.default)("badge badge--secondary",u)},"Bearbeitet"),r.createElement("a",{href:t.source,target:"_blank",className:u},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},r.createElement(m.G,{icon:p.Xjp})))))},v="dl_tOps";var h=a(24229),f=a(72389),y=a(71217),b=a(21314),E=a(74322),w=a(34673),_=a(86720);const N=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},r.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})),k=(0,y.Pi)((e=>r.createElement("span",{className:(0,l.default)(_.Z.policy,"badge","badge--"+e.color)},e.name," ",r.createElement(m.G,{icon:p.nYk,onClick:e.onRemove})))),C=(0,y.Pi)((e=>{const[t,a]=r.useState(""),[n,o]=r.useState(""),[s,c]=r.useState(""),i=(0,b.oR)("policyStore"),d=(0,b.oR)("userStore"),u=i.findPolicy(e.webKey);return u?r.createElement("div",{className:(0,l.default)(_.Z.configContainer)},r.createElement("div",{className:(0,l.default)(_.Z.showControl)},r.createElement(m.G,{icon:u.isConfigOpen?p.nYk:p.cNd,onClick:()=>{u.showConfig(!u.isConfigOpen)}})),u.isConfigOpen&&r.createElement("div",{className:(0,l.default)(_.Z.config)},r.createElement("div",{className:(0,l.default)(_.Z.permissions)},Array.from(u.klasses).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>u.removePermission(e,"class"),color:"success"}))),Array.from(u.groups).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>u.removePermission(e,"group"),color:"danger"}))),Array.from(u.users).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>u.removePermission(e,"user"),color:"primary"})))),r.createElement("div",{className:(0,l.default)(_.Z.update)},r.createElement("input",{type:"text",placeholder:"Klasse",value:t,onChange:e=>a(e.target.value),disabled:u.locked,list:"solution-policy-for-classes"}),r.createElement("datalist",{id:"solution-policy-for-classes"},d.klasses.map(((e,t)=>r.createElement("option",{key:t,value:e})))),r.createElement("button",{disabled:u.locked,onClick:()=>{u.addPermission(t,"class"),a("")}},"Add"),r.createElement("input",{type:"text",placeholder:"Gruppe",value:n,onChange:e=>o(e.target.value),disabled:u.locked,list:"solution-policy-for-groups"}),r.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([...d.groups,...i.groups])).map(((e,t)=>r.createElement("option",{key:t,value:e})))),r.createElement("button",{disabled:u.locked,onClick:()=>{u.addPermission(n,"group"),o("")}},"Add"),r.createElement("input",{type:"email",placeholder:"User",value:s,onChange:e=>c(e.target.value),disabled:u.locked,list:"solution-policy-for-users"}),r.createElement("datalist",{id:"solution-policy-for-users"},d.users.map(((e,t)=>r.createElement("option",{key:t,value:e.email})))),r.createElement("button",{disabled:u.locked,onClick:()=>{u.addPermission(s,"user"),c("")}},"Add")))):null})),S=(0,y.Pi)((e=>{var t,a;const n=(0,b.oR)("policyStore"),o=(0,b.oR)("userStore"),s=(0,f.Z)();if((0,b.aV)(e.webKey),!s)return r.createElement("div",null,"SSR");const c=n.find(e.webKey);return c?r.createElement("div",{"data--web-key":e.webKey,className:(0,l.default)(_.Z.wrapper,"solution-wrapper")},c.show||null!=(t=o.current)&&t.admin?r.createElement(w.Z,{summary:r.createElement("summary",null,e.title||"L\xf6sung"," ",r.createElement(N,null),!c.show&&r.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,l.default)("alert alert--success",_.Z.solution),open:e.open},(null==(a=o.current)?void 0:a.admin)&&r.createElement(C,{webKey:c.webKey}),e.children):r.createElement("div",{className:(0,l.default)("alert",_.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",r.createElement(N,null))):r.createElement(E.Z,null)})),Z={commentIcon:"commentIcon_BLFl",loaded:"loaded_rJ0e",controls:"controls_YZcg",delete:"delete_LrA6",button:"button_AaeX",colorPicker:"colorPicker_dFwr",color:"color_qBbq",red:"red_Tgca",orange:"orange_bnkZ",green:"green_BksA",yellow:"yellow_WdQp",blue:"blue_xZJ3",active:"active_oQHf",comments:"comments_O1_l",comment:"comment_jrM2"};var R=a(38684),L=a(31288),x=a(68949);const B=e=>"tabpanel"===e.getAttribute("role")||e.classList.contains("markdown")||!e.parentElement?e:B(e.parentElement),A=e=>{if(e.classList.contains("table"))return void(e.style.right="2px");const t=B(e.parentElement);if(t){if("tabpanel"===t.getAttribute("role"))return void(e.style.right="2px");const a=t.getBoundingClientRect().right,n=e.parentElement.getBoundingClientRect().right-a-10;e.style.right=n+"px"}},K=(e,t)=>{if(e)return(0,x.aD)((a=>{a.preventDefault(),a.stopPropagation(),e.color=t}))},P=(0,y.Pi)((e=>{var t,a,n,o,s,c,i,d,u,m,p;const g=(0,b.oR)("commentStore"),{sidebar_custom_props:v}=(0,R.Z)(),h=r.useRef(null),[f,y]=r.useState(!1),E=g.find(v.id,e.type,e.nr),w=E.length>0;return r.useEffect((()=>{if(h.current){A(h.current);const e=()=>A(h.current);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}}),[h]),r.useEffect((()=>{g.notifyPresence(v.id,e.type,e.nr)}),[g]),r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.default)("notranslate",Z.commentIcon,e.type,w&&Z.loaded,(null==(t=E[0])?void 0:t.open)&&Z.open),ref:h,onClick:()=>{w?E.forEach((e=>e.toggleOpen())):g.isLoggedIn?g.openComment(v.id,e.type,e.nr):window.alert("Melden Sie sich an, um Kommentare zu erfassen")},style:{"--comment-color":null==(a=E[0])?void 0:a.cssColor}},r.createElement("div",{className:(0,l.default)(Z.controls,(null==(n=E[0])?void 0:n.showMenu)&&Z.active),onMouseLeave:()=>{var e;null==(e=E[0])||e.setShowMenu(!1),y(!1)}},(null==(o=E[0])?void 0:o.showMenu)&&g.isMyView&&r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)(Z.delete)},r.createElement("i",{className:(0,l.default)("mdi","mdi-trash-can",Z.icon),style:{color:"var(--ifm-color-danger"},"data-toggle":"dropdown",onClick:e=>{e.stopPropagation(),e.preventDefault(),y(!0)}}),f&&r.createElement("div",{className:(0,l.default)(Z.button,"button","button--danger"),onClick:e=>{e.stopPropagation(),e.preventDefault(),E[E.length-1].delete()}},"Ja, L\xf6schen!")),r.createElement("div",{className:(0,l.default)(Z.colorPicker,"dropdown","dropdown--hoverable")},r.createElement("span",{className:(0,l.default)(Z.color),onClick:e=>{e.preventDefault(),e.stopPropagation()}}),r.createElement("div",{className:"dropdown__menu"},r.createElement("span",{onClick:K(E[0],"red"),className:(0,l.default)("dropdown__link",Z.color,Z.red,"red"===(null==(s=E[0])?void 0:s.color)&&Z.active)}),r.createElement("span",{onClick:K(E[0],"orange"),className:(0,l.default)("dropdown__link",Z.color,Z.orange,"orange"===(null==(c=E[0])?void 0:c.color)&&Z.active)}),r.createElement("span",{onClick:K(E[0],"green"),className:(0,l.default)("dropdown__link",Z.color,Z.green,"green"===(null==(i=E[0])?void 0:i.color)&&Z.active)}),r.createElement("span",{onClick:K(E[0],"blue"),className:(0,l.default)("dropdown__link",Z.color,Z.blue,"blue"===(null==(d=E[0])?void 0:d.color)&&Z.active)}),r.createElement("span",{onClick:K(E[0],"yellow"),className:(0,l.default)("dropdown__link",Z.color,Z.yellow,"yellow"===(null==(u=E[0])?void 0:u.color)&&Z.active)})))),r.createElement("i",{onMouseEnter:()=>{var e;return null==(e=E[0])?void 0:e.setShowMenu(!0)},className:(0,l.default)("mdi","mdi-comment-text-outline",Z.icon)}))),(null==(m=E[0])?void 0:m.open)&&r.createElement("div",{className:Z.comments,style:{"--comment-color":null==(p=E[0])?void 0:p.cssColor}},E.map(((e,t)=>r.createElement("div",{key:t+"@"+e.initializedAt,className:(0,l.default)(Z.comment),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement(L.Z,{model:e,theme:"bubble",placeholder:"\ud83d\udcac ..."}))))))}));var M=a(27883),T=a(65488),D=a(85162);const I={...n.Z,Comment:P,Figure:function(e){const t=r.useRef(null),a=e.options;return a&&("size"in a&&(a.maxWidth="min(90vw, "+s(a.size)+", 100%)",a.maxHeight=s(a.size),delete a.size),a.height&&(a.maxWidth="min(90vw, 100%)",a.height=s(a.height),delete a.height),a.width&&(a.maxWidth="min(90vw, "+s(a.width)+", 100%)",a.width=s(a.width),delete a.width)),r.useEffect((()=>{if(!t.current)return;const e=t.current.firstChild;e&&a&&c.forEach((t=>{t in a&&(e.style[t]=a[t])}))}),[t]),r.createElement("figure",{className:(0,l.default)(o,"figure"),style:a,ref:t},e.children)},SourceRef:g,dl:function(e){return r.createElement("dl",{className:(0,l.default)(v)},e.children)},Answer:h.Z,Solution:S,Tabs:T.Z,GTabs:M.Z,TabItem:D.Z}},46858:(e,t,a)=>{a.d(t,{Vj:()=>n,Vx:()=>r,ly:()=>l});const n=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=e=>e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")},28137:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonTurtleResult:"brythonTurtleResult_xUV1",brythonTurtleResultHead:"brythonTurtleResultHead_r_q_",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},86720:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);