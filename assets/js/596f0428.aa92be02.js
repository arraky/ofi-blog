"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8896],{3239:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r="noLoginAlert_boZc",i=t(73727),l=t(71217),s=t(21314),o=(0,l.Pi)((function(){return(0,s.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,n,t){t.d(n,{Z:function(){return T}});var a=t(87462),r=t(67294),i=t(72389),l=t(71217),s=t(21314),o=t(78982),d=t(46858),c=r.createContext(void 0),u=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},m=function(e,n){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(n.webKey,n.type,{value:u(n),type:n.type,size:"array"===n.type?n.size:void 0});var t=function(){if(n.id){var e=function(){try{return(0,d.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,o.rV)(n.id,e);if(t&&t.value)return{data:{value:t.value,type:n.type,size:"array"===n.type?n.size:void 0},cleanup:function(){return(0,o.cl)(n.id,e)}}}};return"array"===n.type?e.getOrCreateDocument(n.webKey,"array",{value:u(n),type:n.type,size:n.size},t):e.getOrCreateDocument(n.webKey,n.type,{value:u(n),type:n.type},t)},g=(0,l.Pi)((function(e){var n=(0,s.o)("documentStore"),t=r.useState(m(n,e))[0];return(0,i.Z)()?r.createElement(c.Provider,{value:t},e.children):r.createElement("div",null,"Loading")})),p=t(26528),f={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},h=t(86010),v=(0,p.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){var n=e.value,t=n,a=void 0;if(v.test(n)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(n);a=f[i],t=""+n.replace(v,"")}return r.createElement("option",{value:n,className:a},t)},k=t(92814),y=t(51436),w=t(68949),N=(0,p.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),x=function(e){return f[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},E=(0,l.Pi)((function(e){var n,t=r.useState("unchecked"),a=t[0],i=t[1],l=r.useContext(c),s=function(e){i("unchecked"),l.setData({value:e,type:"string"})},o=function(n){var t=e.sanitizer?e.sanitizer:function(e){return e};i(t(n)===t(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,w.U5)((function(){return l.loaded}),(function(e){e&&o(l.data.value)}))}),[]),r.createElement("div",{className:f.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return s(e.target.value)},value:l.data.value,className:x(l.data.value),disabled:!l.loaded},e.select.map((function(e,n){return r.createElement(b,{value:e,key:n})}))):r.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&r.createElement("button",{onClick:function(){return o(l.data.value)},className:(0,h.default)(f[a],f.checkButton)},r.createElement(k.G,{icon:(n=a,"correct"===n?y.f8k:"wrong"===n?y.nYk:y.sph)})))})),z=(0,p.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),S=function(e){return f[function(e){if(z.test(e))return e.match(z).groups.klass}(e)]},D=(0,l.Pi)((function(e){var n=r.useContext(c),t=function(e,t){void 0===t&&(t=0);var a=[].concat(n.data.value.slice(0,t),[e],n.data.value.slice(t+1));n.setData(Object.assign({},n.data,{value:a}))};return r.createElement("div",{className:f.answer},e.label&&r.createElement("label",null,e.label),n.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return t(e.target.value,i)},value:a,className:S(a),disabled:!n.loaded},e.select.map((function(e,n){return r.createElement(b,{value:e,key:n})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return t(e.target.value,i)},value:a,disabled:!n.loaded||n.isReadonly})})))})),Z=void 0,A=(0,l.Pi)((function(e){var n=r.useState(!1),a=n[0],i=n[1],l=r.useState(!1),s=l[0],o=l[1],d=r.useRef(null),u=r.useContext(c),m=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(Z)return e();Promise.all([Promise.all([t.e(2930),t.e(6095),t.e(1167)]).then(t.t.bind(t,44290,23)),t.e(6095).then(t.t.bind(t,76095,23)),t.e(7891).then(t.t.bind(t,17891,23)),Promise.all([t.e(3312),t.e(1940)]).then(t.bind(t,11940)),Promise.all([t.e(3312),t.e(7617)]).then(t.bind(t,37617))]).then((function(n){Z=n[0].default;var t=n[1].default,a=n[2].default;t.register("modules/imageCompress",a),e()}))}((function(){e&&(o(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return Z&&s?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(Z,{ref:d,theme:"snow",readOnly:!u.loaded||u.isReadonly,className:(0,h.default)(f.quillAnswer,a?void 0:"disable-toolbar"),value:u.loaded?u.data.value||"":"Laden...",onChange:function(e,n,t,a){var r,i;r=e,void 0===i&&(i=0),s&&u.setData({value:r,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),K=t(3239),C=t(79265),L=(0,l.Pi)((function(){var e=r.useContext(c),n=e.legacyData;return n?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(c.Provider,{value:new C.Z(void 0,e.webKey,e.type,(function(){}),n,!0,!0)},"text"===e.data.type&&r.createElement(A,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(E,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(D,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),B=(0,l.Pi)((function(){return r.useContext(c).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),T=(0,l.Pi)((function(e){var n=(0,s.o)("msalStore");return r.createElement(g,(0,a.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(K.Z,null),n.loggedIn&&r.createElement(L,null),n.loggedIn&&r.createElement(B,null),"text"===e.type&&r.createElement(A,e),"string"===e.type&&r.createElement(E,e),"array"===e.type&&r.createElement(D,e)))}))},21314:function(e,n,t){t.d(n,{o:function(){return i}});var a=t(67294),r=t(32930),i=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,n,t){t.d(n,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,n,t){t.d(n,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,n,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(n){return}}(),n){var r=localStorage.getItem(n);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?t:l}return t}}var o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(d){return t}},l=function(e,n){try{if(n){var t=i(n,void 0,{expiry:Date.now()+r});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(n,JSON.stringify(t))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(n){var t=i(n,void 0,{expiry:e+r});t.expiry&&t.expiry>e&&localStorage.removeItem(n)})),localStorage.setItem("last_cleanup",""+e)}catch(n){return}}},24818:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=t(84384),s=t(77960),o=["components"],d={title:"Diagramme"},c="Excel Diagramme",u={unversionedId:"Excel/diagramme",id:"version-24w/Excel/diagramme",isDocsHomePage:!1,title:"Diagramme",description:"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder quantitativ (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder qualitativ (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann).",source:"@site/versioned_docs/version-24w/02-Excel/01-diagramme.md",sourceDirName:"02-Excel",slug:"/Excel/diagramme",permalink:"/24w/Excel/diagramme",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24w/02-Excel/01-diagramme.md",tags:[],version:"24w",sidebarPosition:1,frontMatter:{title:"Diagramme"},sidebar:"version-24w/sidebar",next:{title:"Statsistische Kenngr\xf6ssen",permalink:"/24w/Excel/Lageparameter"}},m=[{value:"Kreisdiagramm",id:"kreisdiagramm",children:[{value:"Vorgehen",id:"vorgehen",children:[],level:3}],level:2},{value:"Liniendiagramm",id:"liniendiagramm",children:[],level:2},{value:"S\xe4ulendiaramm",id:"s\xe4ulendiaramm",children:[],level:2},{value:"Balkendiagramm",id:"balkendiagramm",children:[],level:2}],g={toc:m};function p(e){var n=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"excel-diagramme"},"Excel Diagramme"),(0,i.kt)("p",null,"Daten k\xf6nnen alles M\xf6gliche sein: Messwerte, Ergebnisse von Umfragen, Beobachtungen und Z\xe4hlungen. Nicht alle diese Daten lassen sich \xfcberhaupt mit Hilfe von Zahlen erfassen. Man sollte sich daher klar machen, dass es verschiedene Typen von Daten gibt. Daten sind entweder ",(0,i.kt)("strong",{parentName:"p"},"quantitativ")," (alles, was sich z\xe4hlen und messen und \xfcberhaupt in Zahlen ausdr\xfccken l\xe4sst) oder ",(0,i.kt)("strong",{parentName:"p"},"qualitativ")," (alles, was man zwar beobachten und ordnen, aber nicht in Form von Zahlen angeben kann). "),(0,i.kt)("h2",{id:"kreisdiagramm"},"Kreisdiagramm"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"",options:{width:"350px"},isInline:!1,src:t(40719).Z,alt:"--width=350px",mdxType:"Image"})),(0,i.kt)("p",null,"Kreisdiagramme eignen sich dann besonders gut, wenn es um eine einfache Aufschl\xfcsselung in genau einer Dimension geht. Anders gesagt: Verwenden Sie Kreisdiagramme, wenn Sie anhand einer Variable die Unterschiede zwischen den einzelnen Gruppen aufzeigen m\xf6chten. ",(0,i.kt)("strong",{parentName:"p"},"Denken Sie immer daran, dass Kreisdiagramme nur dann eingesetzt werden sollten, wenn die Kategorien zusammengesetzt ein Ganzes ergeben."),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Kreisdiagramme werden f\xfcr die Darstellung verschiedener Anteile an einem Ganzen verwendet."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prozentuale Anteile der Augenfarben in der Klasse"),(0,i.kt)("li",{parentName:"ul"},"prozentualer Anteil der Haarfarben in der Bev\xf6lkerung"),(0,i.kt)("li",{parentName:"ul"},"prozentuale Anteile verschiedener Altersgruppen in der Gesellschaft")),(0,i.kt)("h3",{id:"vorgehen"},"Vorgehen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eine Tabelle mit der Kategorie und der effektiven Anzahl erzeugen. ",(0,i.kt)("strong",{parentName:"li"},"Die Summe aller Kategorien muss der Stichprobengr\xf6sse ",(0,i.kt)("em",{parentName:"strong"},"n")," entsprechen!"),(0,i.kt)("br",{parentName:"li"}),"Hilfreiche Feldfunktionen:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENN(A1:A12;"Schwarz")'),' -> Z\xe4hlt, wie oft der Wert "Schwarz" im Bereich ',(0,i.kt)("inlineCode",{parentName:"li"},"A1:A12")," vorkommt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'=Z\xc4HLENWENNS(A1:A12; ">=10"; A1:A12; "<20")')," -> Z\xe4hlt, wie viele Werte im Bereich ",(0,i.kt)("inlineCode",{parentName:"li"},"A1:A12")," zwischen 10 und 20 liegen. Bemerke, dass der Bereich zweimal angegeben werden muss.")))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"",options:{width:"300px"},isInline:!1,src:t(10144).Z,alt:"--width=300px",mdxType:"Image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ganze Tabelle ausw\xe4hlen und \xfcber ",(0,i.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>2D-Kreis")," ein Kreisdiagramm einf\xfcgen."),(0,i.kt)("li",{parentName:"ul"},"\xdcber ",(0,i.kt)("inlineCode",{parentName:"li"},"Diagrammentwurf>Diagrammelemente hinzuf\xfcgen")," die Datenbeschriftung hinzuf\xfcgen."),(0,i.kt)("li",{parentName:"ul"},"Mit einem Textfeld (",(0,i.kt)("inlineCode",{parentName:"li"},"Einf\xfcgen>Formen>Textfeld"),") ein Textfeld f\xfcr die Anzahl Datens\xe4tze (",(0,i.kt)("strong",{parentName:"li"},"n"),") hinzuf\xfcgen."),(0,i.kt)("li",{parentName:"ul"},"Rechtsklick auf eine weisse Fl\xe4che des Diagramms > ",(0,i.kt)("inlineCode",{parentName:"li"},"Als Bild speichern...")," ")),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Die Stichprobengr\xf6sse ",(0,i.kt)("strong",{parentName:"li"},"n")," muss angegeben werden (=Anzahl der Datenpunkte)"),(0,i.kt)("li",{parentName:"ul"},"Die Prozentwerte der einzelnen Kreissegmente m\xfcssen bei Diagrammen mit weniger als 10 Segmenten beschriftet werden."),(0,i.kt)("li",{parentName:"ul"},"Entweder in einer Legende oder direkt im Segment muss die Kategorie ersichtlich sein.")))),(0,i.kt)(s.Z,{type:"text",webKey:"0eaed76e-2add-4cba-8383-8ab0ad514565",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,i.kt)("h2",{id:"liniendiagramm"},"Liniendiagramm"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"surveymonkey",source:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/",licence:"Public Domain",licence_url:"",edited:!1},caption:"",options:{width:"550px"},isInline:!1,src:t(92961).Z,alt:"--width=550px",mdxType:"Image"})),(0,i.kt)("p",null,"Liniendiagramme werden f\xfcr die Visualisierung von Entwicklungen im zeitlichen Verlauf verwendet. Sie werden daher vor allem dann eingesetzt, wenn die ",(0,i.kt)("strong",{parentName:"p"},"langfristige Entwicklung")," von Ums\xe4tzen oder anderen Gr\xf6ssen, die f\xfcr Unternehmen oder Organisationen wichtig sind, gemessen werden sollen. Sie k\xf6nnen auch f\xfcr den ",(0,i.kt)("strong",{parentName:"p"},"Vergleich")," zweier Variablen \xfcber die Zeit genutzt werden. Im Beispiel wird gezeigt, wie die h\xf6here staatliche Unterst\xfctzung f\xfcr gesunde Lebensf\xfchrung sich \xfcber einen Zeitraum von f\xfcnf Jahren auf die Ums\xe4tze bei den S\xfcsswaren ausgewirkt hat."),(0,i.kt)(s.Z,{type:"text",webKey:"a6602f15-8ea2-4c83-bd65-244ae1af5e3c",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,i.kt)("h2",{id:"s\xe4ulendiaramm"},"S\xe4ulendiaramm"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(31992).Z,alt:"--width=400px",mdxType:"Image"})),(0,i.kt)("p",null,"S\xe4ulendiagramme kommen bei der Darstellung von Gr\xf6ssenvergleichen innerhalb eines Zeitraums vor.\nDas S\xe4ulendiagramm eignet sich besonders, um wenige Auspr\xe4gungen (bis ca. 15) zu veranschaulichen. Bei mehr Kategorien leidet die Anschaulichkeit und es sind Liniendiagramme zu bevorzugen. Auch im Falle von metrisch stetigen Daten eignet sich das S\xe4ulendiagramm nicht, es ist ein Histogramm zu bevorzugen."),(0,i.kt)(s.Z,{type:"text",webKey:"c4e2959c-ebd0-4635-b53c-60fa4ef7e301",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,i.kt)("h2",{id:"balkendiagramm"},"Balkendiagramm"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"",options:{width:"400px"},isInline:!1,src:t(81530).Z,alt:"--width=400px",mdxType:"Image"})),(0,i.kt)("p",null,"Das Balkendiagramm ist dem S\xe4ulendiagramm sehr \xe4hnlich. Es entspricht einem S\xe4ulendiagramm mit vertauschten Achsen. So werden aus den vertikalen S\xe4ulen horizontale Balken und es w\xe4chst bei zunehmender Stichprobengr\xf6sse in die L\xe4nge und nicht in die Breite. Besonders gut sind Balkendiagramme f\xfcr die Darstellung von Rangfolgen geeignet."),(0,i.kt)(s.Z,{type:"text",webKey:"6cdbdad0-872b-4590-ad80-fb83182a36d7",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"geeignetes-diagramm"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geeignetes Diagramm")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie das geeignete Diagramm f\xfcr die gegebene Ausgangslage."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie m\xf6chten die Ausgaben Ihres letzten Monatslohnes graphisch so darstellen, dass man sieht, wie gross die prozentualen Anteile der verschiedenen Ausgabeposten waren."),(0,i.kt)(s.Z,{type:"string",webKey:"4c6640db-f04d-4049-8e94-944d3359f5ba",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie wollen die Preise verschiedene Smartphones vergleichen."),(0,i.kt)(s.Z,{type:"string",webKey:"8fb7cc30-2565-415f-b227-60f35b5dcd95",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie wollen in einem Diagramm die Tagesh\xf6chst- und -tiefsttemperaturen des letzten Monats aufzeigen."),(0,i.kt)(s.Z,{type:"string",webKey:"71077fa7-e0de-4eef-b71b-7d9d05661fac",solution:"Liniendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie wollen grafisch darstellen, wie hoch der TV-Konsum jedes Lernenden in Ihrer Klasse w\xe4hrend einer Woche ist."),(0,i.kt)(s.Z,{type:"string",webKey:"4a081b61-f7f6-4bc3-995c-9d9d14b101d9",solution:"Balkendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie haben den Durchschnitt des t\xe4glichen TV-Konsums Ihrer Klasse ermittelt, und zwar w\xe4hrend den letzten sieben Tagen. Nun visualisieren Sie das Resultat."),(0,i.kt)(s.Z,{type:"string",webKey:"ae5eb985-4e04-413b-a55c-8570387ef199",solution:"S\xe4ulendiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sie haben bei einer Klassenumfrage die Meinungen Ihrer Mitlernenden \xfcber das Angebot der Schulmensa eingeholt. Sie wollen das Resultat in einem Diagramm darstellen."),(0,i.kt)(s.Z,{type:"string",webKey:"2309e16e-9d86-42a7-8e3b-2267dc4ef94a",solution:"Kreisdiagramm",select:["","Balkendiagramm","Liniendiagramm","S\xe4ulendiagramm","Kreisdiagramm"],mdxType:"Answer"}))),(0,i.kt)(s.Z,{type:"text",webKey:"b11e0a1f-bfdb-4133-add6-5b756f481625",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.surveymonkey.de/mp/basic-chart-types-for-reports/"},"www.surveymonkey.de"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},81530:function(e,n,t){n.Z=t.p+"assets/images/diagramm-balken-e59a1ee571540a71edec88ac6d5079b3.png"},40719:function(e,n,t){n.Z=t.p+"assets/images/diagramm-kreis-b1d599cee820977265f1d591e7cb48d6.png"},92961:function(e,n,t){n.Z=t.p+"assets/images/diagramm-linie-a51eda3237ad2aebf6e866f2e4d6ce01.png"},31992:function(e,n,t){n.Z=t.p+"assets/images/diagramm-saeulen-b3fe26d0a43799bb309c14b7bb2fd78f.png"},10144:function(e,n,t){n.Z=t.p+"assets/images/diagramme-kreis-tabelle-8de08a868585808b82f9d89f89720a1c.png"},26528:function(e,n,t){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.d(n,{Z:function(){return l}});var r=t(89611);function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}function l(){l=function(e,n){return new t(e,void 0,n)};var e=RegExp.prototype,n=new WeakMap;function t(e,a,i){var l=new RegExp(e,a);return n.set(l,i||n.get(e)),(0,r.Z)(l,t.prototype)}function s(e,t){var a=n.get(t);return Object.keys(a).reduce((function(n,t){return n[t]=e[a[t]],n}),Object.create(null))}return i(t,RegExp),t.prototype.exec=function(n){var t=e.exec.call(this,n);return t&&(t.groups=s(t,this)),t},t.prototype[Symbol.replace]=function(t,r){if("string"==typeof r){var i=n.get(this);return e[Symbol.replace].call(this,t,r.replace(/\$<([^>]+)>/g,(function(e,n){return"$"+i[n]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,t,(function(){var e=arguments;return"object"!==a(e[e.length-1])&&(e=[].slice.call(e)).push(s(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,t,r)},l.apply(this,arguments)}}}]);