"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3085],{30772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(38684),r=n(67294),l=n(86010),o=n(1944),i=n(35281),s=n(95124),c=n(45042),d=n(39407);const m="mdxPageWrapper_j9I6";function u(e){const{content:t}=e,{metadata:{title:n,description:a,frontMatter:u}}=t,{wrapperClassName:p,hide_table_of_contents:f}=u;return r.createElement(o.FG,{className:(0,l.default)(null!=p?p:i.k.wrapper.mdxPages,i.k.page.mdxPage)},r.createElement(o.d,{title:n,description:a}),r.createElement(s.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,l.default)("row",m)},r.createElement("div",{className:(0,l.default)("col",!f&&"col--8")},r.createElement("article",null,r.createElement(c.Z,null,r.createElement(t,null)))),!f&&t.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(d.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}function p(e){return r.createElement(a._.Provider,{value:e.content.frontMatter},r.createElement(u,{...e}))}},82593:(e,t,n)=>{n.d(t,{x:()=>x,Z:()=>R});var a=n(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=n(86010),o=n(71217);const i=/--(?<klass>\w+)$/,s=e=>{let t,{value:n}=e,l=n;if(i.test(n)){const e=(e=>{if(i.test(e))return e.match(i).groups.klass})(n);t=r[e],l=""+n.replace(i,"")}return a.createElement("option",{value:n,className:t},l)};var c=n(92814),d=n(51436),m=n(68949),u=n(72389),p=n(21314),f=n(74322);const g=/--(?<klass>\w+)$/,b=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],h=(0,o.Pi)((e=>{const t=(0,u.Z)(),[n,o]=a.useState("unchecked"),i=(0,p.oR)("documentStore").find(e.webKey),g=e=>{i.loaded&&(o("unchecked"),i.setData({value:e,type:"string"}))},h=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const n=e.sanitizer?e.sanitizer:e=>e;o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((()=>(0,m.U5)((()=>i.loaded),(e=>{e&&h(i.value)}))),[i]),a.useEffect((()=>{i.loaded&&h(i.value)}),[i,t]),t?i.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:i.value,className:b(i.value),disabled:!i.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:i.value,disabled:!i.loaded||i.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:()=>h(i.value),className:(0,l.default)(r[n],r.checkButton)},a.createElement(c.G,{icon:(y=n,"correct"===y?d.f8k:"wrong"===y?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR");var y})),y=/--(?<klass>\w+)$/,v=e=>r[(e=>{if(y.test(e))return e.match(y).groups.klass})(e)],E=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);const a=[...t.data.value.slice(0,n),e,...t.data.value.slice(n+1)];t.setData({...t.data,value:a})};return t.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map(((r,l)=>e.select?a.createElement("select",{key:l,onChange:e=>n(e.target.value,l),value:r,className:v(r),disabled:!t.loaded},e.select.map(((e,t)=>a.createElement(s,{value:e,key:t})))):a.createElement("input",{key:l,type:"text",onChange:e=>n(e.target.value,l),value:r,disabled:!t.loaded||t.readonly})))):a.createElement(f.Z,null)}));var _=n(83117),w=n(31288);const N=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",{className:"notranslate"},e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,_.Z)({model:t},e))):a.createElement(f.Z,null)}));var k=n(47271);const S=(0,o.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var C=n(97762);const x=e=>e.replace(/\s+/g,"").toUpperCase(),R=(0,o.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),l=(0,u.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(k.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(N,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(E,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},47271:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var l=n(39960),o=n(71217),i=n(21314);const s=(0,o.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.Z,{to:"/login"},"Login"))))},27883:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const l="label_htSN",o="icon_Nz7l";var i=n(65488),s=n(85162);const c=e=>"s-"+e,d=e=>a.createElement(i.Z,{defaultValue:c(0),values:e.children.map(((t,n)=>{const i=(e.highlighted||[]).includes(n),s=a.createElement("span",{className:(0,r.default)(l)},i&&a.createElement("span",{className:(0,r.default)(o)},e.hilightIcon||"\u26a0\ufe0f"),e.getLabel(n));return{value:c(n),label:s}}))},e.children.map(((e,t)=>a.createElement(s.Z,{value:c(t),key:t},e))))},74322:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const l="loader_FEpR",o="badge_oWqf",i="overlay_cqDg";var s=n(92814),c=n(51436);const d=e=>a.createElement("div",{className:(0,r.default)(l,e.overlay&&i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",o)},e.caption||"Laden..."))},31288:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(72389),r=n(71217),l=n(67294);const o=(0,r.Pi)((e=>{const[t,r]=l.useState();return l.useEffect((()=>{Promise.all([n.e(532),n.e(5303),n.e(1897),n.e(4729)]).then(n.bind(n,84729)).then((e=>{r(e)}))}),[]),(0,a.Z)()?t?l.createElement(t.default,e):l.createElement("div",null):l.createElement("div",null,e.model.text)}))},64320:(e,t,n)=>{n.d(t,{Z:()=>le});var a=n(83117),r=n(67294),l=n(98299),o=n(10412);const i=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},s=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},c=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,l=0;l<e.length;l++)r=e.charCodeAt(l),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")},d={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",brythonTurtleResult:"brythonTurtleResult_xUV1",brythonTurtleResultHead:"brythonTurtleResultHead_r_q_",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"};var m=n(86010),u=n(52616),p=n(71217),f=n(21314);const g=n(63818),b=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey);return r.createElement("script",{id:u.h5.scriptSource(t.codeId),type:"text/py_disabled",className:"brython-script"},g+'\nrun("""'+((t.code||"").replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")+'""", \'')+t.codeId+"')")}));var h=void 0;const y=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),v=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey),[a,l]=r.useState(!1);r.useEffect((()=>{let e=!0;return(e=>{if(h)return e();n.e(4981).then(n.bind(n,74981)).then((t=>Promise.all([n.e(6604).then(n.t.bind(n,56604,23)),n.e(4007).then(n.t.bind(n,4007,23)),n.e(4077).then(n.t.bind(n,44077,23)),n.e(7495).then(n.t.bind(n,57787,23)),n.e(2679).then(n.t.bind(n,82679,23)),n.e(6245).then(n.t.bind(n,66245,23))]).then((n=>{h=t.default,e()}))))})((()=>{e&&l(!0)})),()=>{e=!1}}),[]);const o=r.useCallback((n=>(null!==n&&n.editor&&("python"===e.lang&&n.editor.commands.addCommand({name:"execute",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:()=>t.execScript(document)}),n.editor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-s",mac:"Command-s"},exec:()=>{t.saveService.saveNow()}})),()=>{if(n&&n.editor){const e=n.editor.commands.commands.execute;e&&n.editor.commands.removeCommand(e,!0);const t=n.editor.commands.commands.save;t&&n.editor.commands.removeCommand(t,!0)}})),[t]);return r.createElement("div",{className:(0,m.default)(d.brythonCodeBlock,d.editor)},a?r.createElement(h,{className:d.brythonEditor,style:{width:"100%"},onPaste:e=>{t.versioned&&(t.setPastedEdit(!0),t.saveService.saveNow())},focus:!1,navigateToFileEnd:!1,maxLines:25,ref:o,mode:e.lang,theme:"dracula",keyBindings:"VSCode",onChange:e=>{t.setData({code:e})},readOnly:t.showRaw||!t.loaded,value:t.showRaw?t.rawScript:t.data.code,defaultValue:t.code,name:u.h5.aceEditor(t.codeId),editorProps:{$blockScrolling:!0},setOptions:{displayIndentGuides:!0,vScrollBarAlwaysVisible:!1,highlightGutterLine:!1},showPrintMargin:!1,highlightActiveLine:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!1,enableSnippets:!1,showGutter:!0}):r.createElement(y,{webKey:e.webKey,lang:e.lang}),"python"===e.lang&&r.createElement(b,{webKey:e.webKey}))}));var E=n(61193),_=n.n(E);const w=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}};var N=n(61212);const k=e=>Object.entries(e||{}).map((e=>e[0]+'="'+e[1]+'"')).join(" "),S=(e,t)=>{"root"===e.type?e.children.forEach((e=>{S(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},C=e=>{const t=[],{properties:n,tagName:a,type:r,children:l}=e;switch("root"===r&&l.forEach((e=>{t.push(...C(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push("<svg "+k(n)+">"),l.forEach((e=>{t.push(...C(e))})),t.push("</svg>");break;case"rect":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to}})),t.push("<rect "+k(n)+"></rect>");break;case"g":if(0===(l||[]).length)return t;t.push("<g "+k(n)+">"),l.forEach((e=>{t.push(...C(e))})),t.push("</g>");break;case"line":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push("<line "+k(n)+"></line>");break;case"circle":l.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push("<circle "+k(n)+"></circle>");break;case"text":var o="";l.forEach((e=>{switch(e.type){case"text":o=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to}})),t.push("<text "+k(n)+">"+o+"</text>");break;case"polygon":var i="0,0,0",s="0,0";l.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push("<polygon "+k(n)+' transform="translate('+s+") rotate("+i+')"></polygon>')}return t},x=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},R=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),l={viewBox:r.x-5+","+(r.y-5)+","+(r.width+10)+","+(r.height+10),width:r.width+10,height:r.height+10};var o=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+e+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",""+l.width)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+l.width),e.setAttribute("to",""+l.width)})),t.setAttribute("viewBox",l.viewBox),t.setAttribute("height",""+l.height),t.setAttribute("width",""+l.width),s.innerHTML=i+"\r\n"+t.outerHTML,c=Array.from(t.querySelectorAll("animate")).map(x).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,N.Q)(e);return t&&S(n,t),C(n).join("\n")})(""+i+o,l);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),u=document.createElement("a");u.href=m,u.download=c>0?t+"__"+(Math.round(10*c)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(u),u.click(),document.body.removeChild(u)};var L=n(92814),B=n(51436);const Z=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey),n=(0,f.oR)("documentStore");return r.createElement(_(),{onStop:w,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:d.brythonTurtleResult},r.createElement("div",{className:d.brythonTurtleResultHead},r.createElement("span",null,"Output"),r.createElement("span",{className:d.spacer}),r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:d.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(u.h5.turtleSvgContainer(t.codeId));e&&R(e,""+t.codeId,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(L.G,{icon:B.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:d.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(u.h5.turtleSvgContainer(t.codeId));e&&R(e,""+t.codeId,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(L.G,{icon:B.q7m}))),r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:d.slimStrippedButton,onClick:()=>n.setOpendTurtleModal(void 0)},r.createElement("span",{"aria-hidden":"true"},r.createElement(L.G,{icon:B.NBC})))),r.createElement("div",{id:u.h5.turtleResult(t.codeId),className:"brython-turtle-result"})))})),P=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey);return 0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join(""))?null:r.createElement("div",{className:d.brythonOut},t.logMessages.length>0&&r.createElement("pre",{style:{overflowX:"auto"}},t.logMessages.map(((e,t)=>r.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.output)))))}));var T=n(51417),K=n(68949);const A=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,m.default)(d.playButton,d.headerButton),title:"Code Ausf\xfchren"},r.createElement(L.G,{icon:t.executing?T.Bmx:B.zc,spin:t.executing}))})),M=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:l,lang:o,noCompare:i,download:s}=e;const[c,u]=r.useState(!1),p=(0,f.oR)("documentStore").find(l);if(!p)return null;return r.useEffect((()=>{let e;const t=(0,K.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(u(!0),e=setTimeout((()=>{u(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),r.createElement("div",{className:(0,m.default)(d.brythonCodeBlockHeader,d.brythonCodeBlockHeader,d.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:d.title},n),!p.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&r.createElement("span",{className:(0,m.default)("badge","badge--danger",d.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:d.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&r.createElement(L.G,{icon:B.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(L.G,{icon:B.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:d.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(L.G,{icon:B.X7o})),s&&!p.showRaw&&r.createElement("button",{className:(0,m.default)(d.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===o?".py":"."+o,r=n===o?p.webKey:n,l=r.endsWith(a)?r:""+r+a;e.download=l,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(L.G,{icon:B.q7m})),p.hasEdits&&!i&&r.createElement("button",{className:(0,m.default)(d.showRawButton,d.headerButton,p.showRaw?d.showRawButtonDisabled:void 0),onClick:(0,K.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?r.createElement(L.G,{icon:B.w49}):r.createElement(L.G,{icon:B.rxY}))),"python"===o&&r.createElement(A,{webKey:l}))})),I=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,K.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),window&&window.umami&&window.trackEvent("script-exec",{userId:n.userId,type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[u.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(M,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(v,{webKey:e.webKey,lang:e.lang}),"python"===e.lang&&r.createElement("div",{className:(0,m.default)(d.result)},r.createElement(P,{webKey:e.webKey}),t.opendTurtleModalWebKey===n.webKey&&r.createElement(Z,{webKey:e.webKey}),r.createElement("div",{id:u.h5.outputDiv(n.codeId)})))})),O=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,K.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(u.jS,n)}),(e=>{e.removeEventListener(u.jS,n)}));return r.createElement("div",{id:u.h5.component(t.codeId),ref:a})}));var D=n(47271),H=n(72389),z=n(74322),U=n(4817),V=n.n(U),G=n(87410),F=n(12624),j=n(45431);const W=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:G.Z.highlight(e,G.Z.languages.python,"python")}})},q=e=>{const{value:t,dragging:n,index:l,...o}=e;return r.createElement(j.Rl,{prefixCls:"rc-slider-tooltip",overlay:"V"+t,visible:n,placement:"top",key:l},r.createElement(j.HH,(0,a.Z)({value:t},o)))},Y=(0,p.Pi)((e=>{var t;const n=(0,f.oR)("documentStore"),a=(0,f.oR)("userStore"),l=n.find(e.webKey),[o,i]=r.useState(1),[s,c]=r.useState(!1);return r.useEffect((()=>(0,K.U5)((()=>{var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(t=>{var a;t&&t>0&&(i(1),s&&(null==(a=n.find(e.webKey))||a.loadVersions()))}))),[]),l.versioned?r.createElement("div",{className:(0,m.default)(d.codeHistory)},r.createElement("details",{open:s,onClick:e=>{e.preventDefault(),e.stopPropagation(),s||l.loadVersions(),c(!s)},className:(0,m.default)("alert alert--info",d.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},l.versionsLoaded?l.versions.length+" Versions":"Load Versions"),r.createElement(L.G,{className:(0,m.default)(d.faButton),color:"var(--ifm-color-primary)",spin:"loading"===l.versionsLoaded,icon:B.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),l.loadVersions()}})),r.createElement("div",{className:(0,m.default)(d.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,m.default)(d.versionControl)},r.createElement(F.Z,{value:o,handle:q,onChange:e=>{i(e)},min:1,max:l.versions.length-1,dots:l.versions.length<50})),r.createElement("div",{className:(0,m.default)(d.diffViewer)},l.versions.length>1&&r.createElement(V(),{leftTitle:l.versions[o-1].version,rightTitle:r.createElement("div",null,l.versions[o].version,l.versions[o].pasted&&(null==(t=a.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:l.versions[o-1].data.code,newValue:l.versions[o].data.code,renderContent:W}))))):null})),$=(0,p.Pi)((e=>{const t=(0,f.oR)("documentStore");(0,f.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey);return(0,H.Z)()?n?r.createElement("div",{className:(0,m.default)(d.wrapper,"notranslate")},!e.slim&&r.createElement(D.Z,null),r.createElement("div",{className:(0,m.default)(d.playgroundContainer,e.slim?d.containerSlim:d.containerBig,"live_py")},"python"===e.lang&&r.createElement(O,{webKey:e.webKey}),r.createElement(I,e),r.createElement(Y,{webKey:e.webKey}))):r.createElement(z.Z,null):r.createElement("div",null,"SSR")}));var J=n(25934),Q=n(10345);const X="playgroundWrapper_ADS_",ee="playgroundContainer_J_zN";function te(e){return r.createElement("div",{className:X},r.createElement("div",{className:ee},r.createElement(Q.Z,e)))}var ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return s(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=c(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?s(e):""+ae[n][a]},le=(oe=l.Z,function(e){var t,n,l;const s=(e.className||"").match(/language-(?<lang>\w*)/);let c=null!=(t=null==s||null==(n=s.groups)||null==(l=n.lang)?void 0:l.toLocaleLowerCase())?t:"";if("py"===c&&(c="python"),e.live_jsx)return r.createElement(te,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&o.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(oe,e);const t=e.children.replace(/\s*\n$/,""),n=re(e.title,t),[l]=r.useState(e.id||(0,J.Z)());return r.createElement($,(0,a.Z)({},e,{webKey:l,code:t,codeId:n,readonly:!!e.readonly,lang:c,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,versioned:!!e.versioned,noCompare:!!e.noCompare,title:i(e.title)||c}))}return r.createElement(oe,e)});var oe},22968:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(30109),r=n(67294),l=n(86010);const o="figure_mAmF",i=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(""+e)?""+e+t:""+e},s=["maxWidth","maxHeight","height","width"];const c="bib_Qjs2",d="visible_fInC",m="refItem_Eo4g";var u=n(92814),p=n(51436);const f=e=>{const{bib:t}=e,[n,a]=r.useState(!1);return r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)(c,n?d:void 0),onClick:()=>a(!n)},"@"),n&&r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)("badge badge--secondary",m)},"Autor: ",t.author),r.createElement("a",{href:t.licence_url,target:"_blank",className:m},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",t.licence)),t.edited&&r.createElement("span",{className:(0,l.default)("badge badge--secondary",m)},"Bearbeitet"),r.createElement("a",{href:t.source,target:"_blank",className:m},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},r.createElement(u.G,{icon:p.Xjp})))))},g="dl_tOps";var b=n(82593),h=n(72389),y=n(71217),v=n(21314),E=n(74322),_=n(34673),w=n(86720);const N=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},r.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})),k=(0,y.Pi)((e=>r.createElement("span",{className:(0,l.default)(w.Z.policy,"badge","badge--"+e.color)},e.name," ",r.createElement(u.G,{icon:p.nYk,onClick:e.onRemove})))),S=(0,y.Pi)((e=>{const[t,n]=r.useState(""),[a,o]=r.useState(""),[i,s]=r.useState(""),c=(0,v.oR)("policyStore"),d=(0,v.oR)("userStore"),m=c.findPolicy(e.webKey);return m?r.createElement("div",{className:(0,l.default)(w.Z.configContainer)},r.createElement("div",{className:(0,l.default)(w.Z.showControl)},r.createElement(u.G,{icon:m.isConfigOpen?p.nYk:p.cNd,onClick:()=>{m.showConfig(!m.isConfigOpen)}})),m.isConfigOpen&&r.createElement("div",{className:(0,l.default)(w.Z.config)},r.createElement("div",{className:(0,l.default)(w.Z.permissions)},Array.from(m.klasses).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>m.removePermission(e,"class"),color:"success"}))),Array.from(m.groups).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>m.removePermission(e,"group"),color:"danger"}))),Array.from(m.users).map(((e,t)=>r.createElement(k,{key:t,name:e,onRemove:()=>m.removePermission(e,"user"),color:"primary"})))),r.createElement("div",{className:(0,l.default)(w.Z.update)},r.createElement("input",{type:"text",placeholder:"Klasse",value:t,onChange:e=>n(e.target.value),disabled:m.locked,list:"solution-policy-for-classes"}),r.createElement("datalist",{id:"solution-policy-for-classes"},d.klasses.map(((e,t)=>r.createElement("option",{key:t,value:e})))),r.createElement("button",{disabled:m.locked,onClick:()=>{m.addPermission(t,"class"),n("")}},"Add"),r.createElement("input",{type:"text",placeholder:"Gruppe",value:a,onChange:e=>o(e.target.value),disabled:m.locked,list:"solution-policy-for-groups"}),r.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([...d.groups,...c.groups])).map(((e,t)=>r.createElement("option",{key:t,value:e})))),r.createElement("button",{disabled:m.locked,onClick:()=>{m.addPermission(a,"group"),o("")}},"Add"),r.createElement("input",{type:"email",placeholder:"User",value:i,onChange:e=>s(e.target.value),disabled:m.locked,list:"solution-policy-for-users"}),r.createElement("datalist",{id:"solution-policy-for-users"},d.users.map(((e,t)=>r.createElement("option",{key:t,value:e.email})))),r.createElement("button",{disabled:m.locked,onClick:()=>{m.addPermission(i,"user"),s("")}},"Add")))):null})),C=(0,y.Pi)((e=>{var t,n;const a=(0,v.oR)("policyStore"),o=(0,v.oR)("userStore"),i=(0,h.Z)();if((0,v.aV)(e.webKey),!i)return r.createElement("div",null,"SSR");const s=a.find(e.webKey);return s?r.createElement("div",{"data--web-key":e.webKey,className:(0,l.default)(w.Z.wrapper,"solution-wrapper")},s.show||null!=(t=o.current)&&t.admin?r.createElement(_.Z,{summary:r.createElement("summary",null,e.title||"L\xf6sung"," ",r.createElement(N,null),!s.show&&r.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,l.default)("alert alert--success",w.Z.solution),open:e.open},(null==(n=o.current)?void 0:n.admin)&&r.createElement(S,{webKey:s.webKey}),e.children):r.createElement("div",{className:(0,l.default)("alert",w.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",r.createElement(N,null))):r.createElement(E.Z,null)})),x={commentIcon:"commentIcon_BLFl",loaded:"loaded_rJ0e",controls:"controls_YZcg",delete:"delete_LrA6",button:"button_AaeX",colorPicker:"colorPicker_dFwr",color:"color_qBbq",red:"red_Tgca",orange:"orange_bnkZ",green:"green_BksA",yellow:"yellow_WdQp",blue:"blue_xZJ3",active:"active_oQHf",comments:"comments_O1_l",comment:"comment_jrM2"};var R=n(38684),L=n(31288),B=n(68949);const Z=e=>"tabpanel"===e.getAttribute("role")||e.classList.contains("markdown")||!e.parentElement?e:Z(e.parentElement),P=e=>{if(e.classList.contains("table"))return void(e.style.right="2px");const t=Z(e.parentElement);if(t){if("tabpanel"===t.getAttribute("role"))return void(e.style.right="2px");const n=t.getBoundingClientRect().right,a=e.parentElement.getBoundingClientRect().right-n-10;e.style.right=a+"px"}},T=(e,t)=>{if(e)return(0,B.aD)((n=>{n.preventDefault(),n.stopPropagation(),e.color=t}))},K=(0,y.Pi)((e=>{var t,n,a,o,i,s,c,d,m,u,p;const f=(0,v.oR)("commentStore"),{sidebar_custom_props:g}=(0,R.Z)(),b=r.useRef(null),[h,y]=r.useState(!1),E=f.find(g.id,e.type,e.nr),_=E.length>0;return r.useEffect((()=>{if(b.current){P(b.current);const e=()=>P(b.current);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}}),[b]),r.useEffect((()=>{f.notifyPresence(g.id,e.type,e.nr)}),[f]),r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.default)("notranslate",x.commentIcon,e.type,_&&x.loaded,(null==(t=E[0])?void 0:t.open)&&x.open),ref:b,onClick:()=>{_?E.forEach((e=>e.toggleOpen())):f.isLoggedIn?f.openComment(g.id,e.type,e.nr):window.alert("Melden Sie sich an, um Kommentare zu erfassen")},style:{"--comment-color":null==(n=E[0])?void 0:n.cssColor}},r.createElement("div",{className:(0,l.default)(x.controls,(null==(a=E[0])?void 0:a.showMenu)&&x.active),onMouseLeave:()=>{var e;null==(e=E[0])||e.setShowMenu(!1),y(!1)}},(null==(o=E[0])?void 0:o.showMenu)&&f.isMyView&&r.createElement(r.Fragment,null,r.createElement("span",{className:(0,l.default)(x.delete)},r.createElement("i",{className:(0,l.default)("mdi","mdi-trash-can",x.icon),style:{color:"var(--ifm-color-danger"},"data-toggle":"dropdown",onClick:e=>{e.stopPropagation(),e.preventDefault(),y(!0)}}),h&&r.createElement("div",{className:(0,l.default)(x.button,"button","button--danger"),onClick:e=>{e.stopPropagation(),e.preventDefault(),E[E.length-1].delete()}},"Ja, L\xf6schen!")),r.createElement("div",{className:(0,l.default)(x.colorPicker,"dropdown","dropdown--hoverable")},r.createElement("span",{className:(0,l.default)(x.color),onClick:e=>{e.preventDefault(),e.stopPropagation()}}),r.createElement("div",{className:"dropdown__menu"},r.createElement("span",{onClick:T(E[0],"red"),className:(0,l.default)("dropdown__link",x.color,x.red,"red"===(null==(i=E[0])?void 0:i.color)&&x.active)}),r.createElement("span",{onClick:T(E[0],"orange"),className:(0,l.default)("dropdown__link",x.color,x.orange,"orange"===(null==(s=E[0])?void 0:s.color)&&x.active)}),r.createElement("span",{onClick:T(E[0],"green"),className:(0,l.default)("dropdown__link",x.color,x.green,"green"===(null==(c=E[0])?void 0:c.color)&&x.active)}),r.createElement("span",{onClick:T(E[0],"blue"),className:(0,l.default)("dropdown__link",x.color,x.blue,"blue"===(null==(d=E[0])?void 0:d.color)&&x.active)}),r.createElement("span",{onClick:T(E[0],"yellow"),className:(0,l.default)("dropdown__link",x.color,x.yellow,"yellow"===(null==(m=E[0])?void 0:m.color)&&x.active)})))),r.createElement("i",{onMouseEnter:()=>{var e;return null==(e=E[0])?void 0:e.setShowMenu(!0)},className:(0,l.default)("mdi","mdi-comment-text-outline",x.icon)}))),(null==(u=E[0])?void 0:u.open)&&r.createElement("div",{className:x.comments,style:{"--comment-color":null==(p=E[0])?void 0:p.cssColor}},E.map(((e,t)=>r.createElement("div",{key:t+"@"+e.initializedAt,className:(0,l.default)(x.comment),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement(L.Z,{model:e,theme:"bubble",placeholder:"\ud83d\udcac ..."}))))))}));var A=n(27883),M=n(65488),I=n(85162);const O={...a.Z,Comment:K,Figure:function(e){const t=r.useRef(null),n=e.options;return n&&("size"in n&&(n.maxWidth="min(90vw, "+i(n.size)+", 100%)",n.maxHeight=i(n.size),delete n.size),n.height&&(n.maxWidth="min(90vw, 100%)",n.height=i(n.height),delete n.height),n.width&&(n.maxWidth="min(90vw, "+i(n.width)+", 100%)",n.width=i(n.width),delete n.width)),r.useEffect((()=>{if(!t.current)return;const e=t.current.firstChild;e&&n&&s.forEach((t=>{t in n&&(e.style[t]=n[t])}))}),[t]),r.createElement("figure",{className:(0,l.default)(o,"figure"),style:n,ref:t},e.children)},SourceRef:f,dl:function(e){return r.createElement("dl",{className:(0,l.default)(g)},e.children)},Answer:b.Z,Solution:C,Tabs:M.Z,GTabs:A.Z,TabItem:I.Z}},86720:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},63818:e=>{e.exports="from browser import document, window\nimport re\nimport sys\nimport time\n\nhas_turtle_import = False\nlog_line_number_shift = 0\n\ndef notify(node_id, data):\n    event = window.CustomEvent.new('bry_notify', {'detail': data})\n    document[f'py_{node_id}'].dispatchEvent(event)\n\nclass EventOutput:\n    encoding = 'utf-8'\n\n    def __init__(self, node_id, out_type):\n        self.node_id = node_id\n        self.out_type = out_type\n        self.buf = ''\n\n    def write(self, data):\n        self.buf += str(data)\n        self.flush()\n\n    def flush(self):\n        if len(self.buf) > 0:\n            notify(self.node_id, {'type': self.out_type, 'output': self.buf})\n        self.buf = ''\n\n    def __len__(self):\n        return len(self.buf)\n\nclass Trace:\n    def __init__(self):\n        self.buf = \"\"\n\n    def write(self, *data):\n        self.buf += \" \".join([str(x) for x in data])\n\n    def format(self):\n        \"\"\"Remove calls to function in this script from the traceback.\"\"\"\n        return self.buf\n\ndef syntax_error(args):\n    trace = Trace()\n    info, [filename, lineno, offset, line, *extra] = args\n    line_nr = lineno - log_line_number_shift if lineno > 0 else 0\n\n    trace.write(f\"  File {filename}, line {line_nr}\\n\")\n    indent = len(line) - len(line.lstrip())\n    trace.write(\"    \" + line.strip() + \"\\n\")\n    nb_marks = 1\n    if extra:\n        end_lineno, end_offset = extra\n        if end_lineno > lineno:\n            nb_marks = len(line) - offset\n        else:\n            nb_marks = end_offset - offset\n    nb_marks = max(nb_marks, 1)\n    trace.write(\"    \" + (offset - 1) * \" \" + \"^\" * nb_marks + \"\\n\")\n    trace.write(\"SyntaxError:\", info, \"\\n\")\n    return trace.buf\n\ndef format_exc():\n    trace = Trace()\n    exc_info = sys.exc_info()\n    exc_class = exc_info[0].__name__\n    exc_msg = str(exc_info[1])\n    tb = exc_info[2]\n    if exc_info[0] is SyntaxError:\n        return syntax_error(exc_info[1].args)\n    trace.write(\"Traceback (most recent call last):\\n\")\n    while tb is not None:\n        frame = tb.tb_frame\n        code = frame.f_code\n        name = code.co_name\n        filename = code.co_filename\n        line_nr = tb.tb_lineno - log_line_number_shift if tb.tb_lineno > 0 else 0\n        trace.write(f\"  File {filename}, line {line_nr}, in {name}\\n\")\n        if not filename.startswith(\"<\"):\n            src = open(filename, encoding='utf-8').read()\n            lines = src.split('\\n')\n            line = lines[tb.tb_lineno - 1]\n            trace.write(f\"    {line.strip()}\\n\")\n        tb = tb.tb_next\n    trace.write(f\"{exc_class}: {exc_msg}\\n\")\n    return trace.format()\n\ndef print_exc(file=None):\n    if file is None:\n        file = sys.stderr\n    trace = format_exc()\n    file.write(trace)\n    return trace\n\nTURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)', re.M)\nTURTLE_TEMPLATE = '''from browser import document\nimport turtle\nturtle.restart()\nturtle.set_defaults(\n  turtle_canvas_wrapper = document['{node_id}_turtle_result'],\n  turtle_canvas_id = '{node_id}_svg'\n)\n{py_script}\nturtle.done()\n'''\n\n\ndef run(code, node_id):\n    global has_turtle_import, log_line_number_shift\n    has_turtle_import = len(TURTLE_IMPORTS.findall(code)) > 0\n    log_line_number_shift = 7 if has_turtle_import else 0\n    py_script = TURTLE_TEMPLATE.format(node_id=node_id, py_script=code) if has_turtle_import else code\n\n    sys.stdout = EventOutput(node_id, 'stdout')\n    sys.stderr = EventOutput(node_id, 'stderr')\n    notify(node_id, {'type': 'start', 'time': time.time()})\n    try:\n        res_div = f'{node_id}_brython_result'\n        document[res_div].clear()\n        ns = {'__name__': node_id, 'RESULT_DIV': document[res_div]}\n        loc = {}\n        exec(py_script, ns)\n        # if len(code.splitlines()) < 10:\n        #    print('  --', '\\n'.join([f'{x}: {loc[x]}' for x in loc.keys() if not x.startswith('__')]))\n    except Exception as exc:\n        print_exc(file=sys.stderr)\n    finally:\n        notify(node_id, {'type': 'done', 'time': time.time()})\n    \n    sys.stdout.flush()\n    sys.stderr.flush()\n"}}]);