"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11952],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),N=o(t),c=r,k=N["".concat(l,".").concat(c)]||N[c]||d[c]||m;return t?n.createElement(k,i(i({ref:a},s),{},{components:t})):n.createElement(k,i({ref:a},s))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,i=new Array(m);i[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<m;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},1631:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(86010);const m="container_DI4d",i="card_Dxen",p="fullscreen_Vq4o",l=e=>n.createElement("div",{className:(0,r.default)(i,"card")},n.createElement("iframe",{src:e.url+"/docs/about-me",className:(0,r.default)("card__image")}),n.createElement("div",{className:"card__footer"},n.createElement("a",{target:"_blank",href:e.url,className:(0,r.default)("button","button--primary","button--block")},"\ud83d\udc49 ",e.url))),o=e=>{const a=e.shuffle?e.urls.slice().sort((()=>Math.random()-.5)):e.urls;return n.createElement("div",{className:(0,r.default)(m,e.full&&p)},a.map(((e,a)=>n.createElement(l,{url:e,key:a}))))}},71107:(e,a,t)=>{t.d(a,{ZP:()=>c});var n=t(83117),r=t(67294);const m={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var i=t(86010),p=t(96921);let l;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(l||(l={}));const o={[l.Holiday]:"mdi-island",[l.Event]:"mdi-calendar",[l.Test]:"mdi-school",[l.Info]:"mdi-information"};class s extends r.Component{render(){const{align:e,icon:a,date:t}=this.props;var n=this.props.value;return t&&(n=(e=>{const a=e.getDay();return r.createElement("span",{style:{fontFamily:"monospace"}},p.p3[a],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(t)),r.createElement("td",{align:e},n,a?" ":"",a)}}const d=e=>{var a=new Date(e.getFullYear(),0,1),t=Math.floor((e.getTime()-a.getTime())/864e5);return Math.ceil(t/7)+1};class N extends r.Component{icon(){return this.props.icon?r.createElement("i",{className:(0,i.default)(this.props.icon,"mdi")}):this.props.type?r.createElement("i",{className:(0,i.default)(o[this.props.type],"mdi")}):void 0}render(){const{type:e,cells:a}=this.props,t={className:[]};this.props.className&&t.className.push(this.props.className),e&&t.className.push(m[e]);var p=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=a[this.props.dateIndex];"string"==typeof e&&(p=(e=>{const a=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(a&&a.groups)return new Date(a.groups.y+"-"+a.groups.m+"-"+a.groups.d)})(e))&&d(new Date)===d(p)&&t.className.push(t.className+" "+m.currentWeek)}return r.createElement("tr",(0,n.Z)({},t,{className:(0,i.default)(...t.className),style:{background:this.props.color}}),a.map(((e,a)=>{const t={value:e};return 0===a&&(t.icon=this.icon()),this.props.alignments&&this.props.alignments.length>a?t.align=this.props.alignments[a]:t.align="left",r.createElement(s,(0,n.Z)({},t,{key:a,date:this.props.dateIndex===a?p:void 0}))})))}}class c extends r.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),a=this.props.order?this.props.order(this.props.rows):this.props.rows;return r.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,i.default)(m["ofi-table"],m[this.props.size],m[this.props.compact&&"compact"],m[this.props.celled&&"celled"],m[this.props.striped&&"striped"],m[this.props.collapsing&&"collapsing"],m[this.props.selectable&&"selectable"])},r.createElement("thead",null,this.props.header&&r.createElement("tr",null,this.props.header.map(((e,a)=>{var t;const n=((null==(t=this.props.alignments)?void 0:t.length)||0)>a?this.props.alignments[a]:"left";return r.createElement("th",{align:n,key:a},e)})))),r.createElement("tbody",null,a.map(((a,t)=>r.createElement(N,(0,n.Z)({alignments:this.props.alignments},a,{key:t,dateIndex:e}))))))}}},58615:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(83117),r=(t(67294),t(3905)),m=t(71107),i=t(96921);const p=JSON.parse('[{"cells":["19.08.2022","Programmieren","Infrastruktur, Installation, Git, Markdown, Python Grundlagen"]},{"cells":["26.08.2022","Programmieren","Python Repetition"]},{"cells":["02.09.2022","Programmieren","Datenstrukturen - Listen"]},{"cells":["09.09.2022","Programmieren","Listen, 2D-Listen, Referenzen, Spielfeld"]},{"cells":["16.09.2022","Programmieren","Arbeiten am NumTrip Game"]},{"cells":["23.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["30.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["07.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["14.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["21.10.2022","Programmieren","Funktionen & Software Engineering"]},{"cells":["28.10.2022","Programmieren","Funktionen, \xdcbungen"]},{"cells":["04.11.2022","Programmieren","Funktionen, Scopes, Shadowing"]},{"cells":["11.11.2022","Programmieren","Informatik Biber, Eigene Website"]},{"cells":["18.11.2022","Programmieren",""]},{"cells":["25.11.2022","Programmieren",""]},{"cells":["02.12.2022","Programmieren",""]},{"cells":["09.12.2022","Programmieren",""]},{"cells":["16.12.2022","Programmieren","Test Programmieren"],"type":"test"},{"cells":["23.12.2022","Programmieren",""]},{"cells":["28.12.2022","Winterferien",""],"type":"holiday","icon":"mdi-weather-snowy-heavy"},{"cells":["05.01.2023","Winterferien",""],"type":"holiday","icon":"mdi-weather-snowy-heavy"},{"cells":["13.01.2023","Programmieren",""]},{"cells":["20.01.2023","Programmieren","Abgabe NumTrip und Lernjournal"],"type":"test"},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]');var l=t(1631);const o={sidebar_position:0,sidebar_label:"EF",sidebar_custom_props:{id:"15bccea3-bcb9-4bf9-9329-cacab8149b2b"}},s="EF Informatik",d={unversionedId:"home",id:"version-24ef/home",title:"EF Informatik",description:"am 2.12.2022",source:"@site/versioned_docs/version-24ef/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24ef/home",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",lastUpdatedAt:1669983104,formattedLastUpdatedAt:"2. Dez. 2022",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"EF",sidebar_custom_props:{id:"15bccea3-bcb9-4bf9-9329-cacab8149b2b"}},sidebar:"version-24ef/sidebar",next:{title:"Programmiersprachen",permalink:"/24ef/Programmieren/Programmiersprachen/"}},N={},c=[],k=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=k("Comment"),h=k("Solution"),g={toc:c};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"ef-informatik"},"EF Informatik"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"auftr\xe4ge"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Auftr\xe4ge"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"am-2122022"},"am 2.12.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"(Auftrag, Herr Hofer ist krank \ud83e\udd12)"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Benutzereingaben - besprechen Sie in 2-3er Gruppen, wie Sie Ihre Benutzereingabe implementiert haben. Versuchen Sie auch, sich gegenseitig zu helfen und in den Code reinzudenken, wenn es noch Probleme gibt"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Selbst\xe4ndig weiterarbeiten an Numtrip: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/felder-aufdecken"},"\ud83d\udc49 Felder Aufdecken")," und ev. ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/felder-auffuellen"},"\ud83d\udc49 Felder Auff\xfcllen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wichtig: In den letzten 10-15 Minuten halten Sie in einem neuen Blogeintrag fest, an was Sie heute garbeitet haben, wo Probleme aufgetreten sind, wo Sie Hilfe br\xe4uchten etc."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"Vergangene..."),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"am-18112022"},"am 18.11.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Benutzereingaben: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/try-except"},"\ud83d\udc49 Try-Except")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NumTrip: Eingabe und Start: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/user-input"},"\ud83d\udc49 Eingabe & Start")," "),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ev. Felder Aufdecken: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/felder-aufdecken"},"\ud83d\udc49 Felder Aufdecken")," "),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"am-18112022-1"},"am 18.11.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Texte untersuchen und ver\xe4ndern: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/strings"},"\ud83d\udc49 Strings")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NumTrip: Top-Down Entwurf: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/topdown-entwurf"},"\ud83d\udc49 Top Down")," "),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NumTrip: Eingabe und Start: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/user-input"},"\ud83d\udc49 Eingabe & Start")," "),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"am-11112022"},"am 11.11.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Teilnahme ",(0,r.kt)("em",{parentName:"p"},"Informatik Biber")," \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://wettbewerb.informatik-biber.ch"},"https://wettbewerb.informatik-biber.ch")," "),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"EF-Website: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Infrastruktur/Docusaurus"},"\ud83d\udc49 Docusaurus")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auf-den-11112022"},"auf den 11.11.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kapitel Lesen & ",(0,r.kt)("strong",{parentName:"p"},"\xdcbungen bearbeiten")," (Debuggen und Selbsttest): ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/referenzen"},"\ud83d\udc49 Referenzen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NumTrip ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/spielfeld-programmieren#refactoring-funktionen-verwenden"},"\ud83d\udc49 Aufgabe Refactoring")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auf-den-4112022"},"auf den 4.11.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kapitel Lesen & \xdcbungen bearbeiten (Debuggen und Selbsttest): ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/referenzen"},"\ud83d\udc49 Referenzen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcbung 1 & 2 bearbeiten: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/functions"},"\ud83d\udc49 Funktionen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Selbsttest Software Engineering ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Software-Engineering/Techniken#software-engineering"},"\ud83d\udc49 Selbsttest")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"(Allenfalls: unter ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition"},"\ud83d\udc49 Python Repetition")," \xdcbungen zu unbekannten Konzepten machen)"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auf-den-28102022"},"auf den 28.10.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kapitel Lesen: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Software-Engineering"},"\ud83d\udc49 Software Engineering")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kapitel Lesen: ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Software-Engineering/Techniken"},"\ud83d\udc49 Techniken SE")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgaben des Hangman Spiels fertigstellen. Fragen zu neu verwendeten Konzepten (",(0,r.kt)("inlineCode",{parentName:"p"},"if-else"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"funktionen"),") in die n\xe4chste Lektion mitbringen. ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Software-Engineering/Hangman"},"\ud83d\udc49 Techniken SE")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"(Allenfalls: unter ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition"},"\ud83d\udc49 Python Repetition")," \xdcbungen zu unbekannten Konzepten machen)"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"programm-am-16092022"},"Programm am 16.09.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/Listen-2D"},"\ud83d\udc49 Listen 2D"),":"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"L\xf6sungen \xfcberpr\xfcfen, Unklarheiten kl\xe4ren"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/Listcomprehension"},"\ud83d\udc49 Listen Erzeugen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen, untersuchen und bearbeiten"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/NumTrip/spielfeld-programmieren"},"\ud83d\udc49 Spielfeld programmieren")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/referenzen"},"\ud83d\udc49 Referenzen in Python")," (noch nicht abgeschlossen!)"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgaben bearbeiten"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})))))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auftr\xe4ge-auf-16092022"},"Auftr\xe4ge auf 16.09.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:10,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/Listen-2D"},"\ud83d\udc49 Listen 2D"),":"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgaben 1, 2a (",(0,r.kt)("inlineCode",{parentName:"p"},"create_from.py"),") L\xf6sung nachvollziehen"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgaben und 2b (",(0,r.kt)("inlineCode",{parentName:"p"},"diag.py"),") l\xf6sen."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Aufgabe 3 "WAS IST DENN HIER LOS?" l\xf6sen/lesen'),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:32,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Datenstruktur NumTrip festhalten..."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:33,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auftr\xe4ge-auf-09092022"},"Auftr\xe4ge auf 09.09.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:11,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/Listen-1D"},"\ud83d\udc49 Listen 1D"),":"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:34,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgaben 1, 2 und 3 fertig bearbeiten."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:35,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aufgabe 4 (Primzahlen): min. 20 Minuten Arbeiten und aktuellen Zustand commiten und pushen."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:36,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei Fragen: Auf Teams nachfragen..."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:37,mdxType:"Comment"})))))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wer bei Aufgabe 4 nicht weiterkommt, weil die Grundlagen aus dem Grundlagefach Informatik weit zur\xfcck sind: Schauen Sie sich die Repetitions-Kapitel von letzter Woche nochmals genauer an!"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:38,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/repeat"},"\ud83d\udc49 Wiederholungen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:39,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/variablen"},"\ud83d\udc49 Variablen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:40,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/verzweigung"},"\ud83d\udc49 Verzweigungen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:41,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auftr\xe4ge-auf-02092022"},"Auftr\xe4ge auf 02.09.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:12,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Abschnitt ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Programmiersprachen/"},"\ud83d\udc49 Programmiersprachen")," lesen"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:42,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Blogbeitrag schreiben ",(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/"},"\ud83d\udc49 Auftrag")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:43,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei Turtle-Repetition selbst\xe4ndig die Python-Grundlagen auffrischen, insbesondere:"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:44,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/repeat"},"\ud83d\udc49 Wiederholungen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:45,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/variablen"},"\ud83d\udc49 Variablen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:46,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Turtle-Repetition/verzweigung"},"\ud83d\udc49 Verzweigungen")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:47,mdxType:"Comment"})))))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"auftr\xe4ge-auf-2682022"},"Auftr\xe4ge auf 26.8.2022"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:13,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"details"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"VS Code installieren"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:48,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Git installieren"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:49,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Python installieren"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:50,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Github Account erstellen und Klonen (alle Aufgaben auf dieser Seite)"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:51,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Hintergr\xfcnde zu Git lesen"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:52,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Markdown Tutorial durchspielen und Steckbrief erfassen"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:53,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beispiel-Repository von ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bh0fer"},"@bh0fer"),": \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bh0fer/EF-Informatik"},"https://github.com/bh0fer/EF-Informatik")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:54,mdxType:"Comment"})))),(0,r.kt)(u,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})))),(0,r.kt)(h,{webKey:"0ba77b9b-e0c6-4b78-9a59-fa030b216c1b",title:"Websites",open:!0,mdxType:"Solution"},(0,r.kt)(l.Z,{urls:["https://GabrielMariethoz.github.io/EF-Informatik","https://Valayar.github.io/EF_Informatik","https://TheTahm.github.io/EF-Informatik","https://timonj0.github.io/EF_Informatik","https://jodokfehlmann.github.io/EF-Informatik","https://GraficPixelTDSM.github.io/EF-Informatik","https://Grashaum.github.io/EF-Informatik","https://Liloubrandi.github.io/EF_Informatik","https://arraky.github.io/EF-Info","https://No0ne155.github.io/ef_info","https://luiscarlosgarzacisneros.github.io/EFInformatik","https://zlataromanchuk.github.io/EF-Informatik","https://Gerhard-69.github.io/EF-Informatik","https://mcdelarosa.github.io/EF-Informatik","https://marioschoch.github.io/EF-Info","https://gaeschpu.github.io/Ef-Info","https://Malouu3.github.io/EF-Informatik"],shuffle:!0,mdxType:"Grid"})),(0,r.kt)("br",null),(0,r.kt)(m.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:p,order:(0,i.Fl)(),mdxType:"Table"}))}f.isMDXComponent=!0}}]);