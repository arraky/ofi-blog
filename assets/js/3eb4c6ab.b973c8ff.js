"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3699],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},163432:function(e,t,n){n.d(t,{ZP:function(){return b}});var r,l,s=n(583117),a=n(403435),o=n(21073),i=n(667294),c=n(592814),p=n(51436),u={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},d=n(386010),m=n(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(l||(l={}));var h=((r={})[l.Holiday]=p.skR,r[l.Event]=p.$nv,r[l.Test]=p.Xf_,r[l.Info]=p.YHc,r),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,r=e.date,l=this.props.value;return r&&(l=function(e){var t=e.getDay();return i.createElement("span",{style:{fontFamily:"monospace"}},m.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(r)),i.createElement("td",{align:t},l,n?" ":"",n)},t}(i.Component),y=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,o.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return i.createElement(c.G,{icon:h[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,r=t.cells,l={className:[]};this.props.className&&l.className.push(this.props.className),n&&l.className.push(u[n]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=r[this.props.dateIndex];"string"==typeof c&&(o=function(e){var t=e.match((0,a.Z)(/(\d+)\.(\d+)\.(\d+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&y(new Date)===y(o)&&l.className.push(l.className+" "+u.currentWeek)}return i.createElement("tr",(0,s.Z)({},l,{className:d.default.apply(void 0,l.className)}),r.map((function(t,n){var r={value:t};return 0===n&&(r.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?r.align=e.props.alignments[n]:r.align="left",i.createElement(f,(0,s.Z)({},r,{key:n,date:e.props.dateIndex===n?o:void 0}))})))},t}(i.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return i.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,d.default)(u["ofi-table"],u[this.props.size],u[this.props.compact&&"compact"],u[this.props.celled&&"celled"],u[this.props.striped&&"striped"],u[this.props.collapsing&&"collapsing"],u[this.props.selectable&&"selectable"])},i.createElement("thead",null,this.props.header&&i.createElement("tr",null,this.props.header.map((function(t,n){var r,l=((null==(r=e.props.alignments)?void 0:r.length)||0)>n?e.props.alignments[n]:"left";return i.createElement("th",{align:l,key:n},t)})))),i.createElement("tbody",null,this.props.rows.map((function(n,r){return i.createElement(g,(0,s.Z)({alignments:e.props.alignments},n,{key:r,dateIndex:t}))}))))},t}(i.Component)},385175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(583117),l=n(480102),s=(n(667294),n(603905)),a=n(163432),o=JSON.parse('[{"cells":["04.02.2022","Codes und Daten","Textcodierung"]},{"cells":["11.02.2022","Codes und Daten","Farbdarstellung"]},{"cells":["18.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["25.02.2022","Codes und Daten","Grafikformate"]},{"cells":["04.03.2022","Codes und Daten","Kompression"]},{"cells":["11.03.2022","Codes und Daten","Anwendungen"]},{"cells":["18.03.2022","Codes und Daten","Wiederholung"]},{"cells":["25.03.2022","Codes und Daten","Test"],"type":"test"},{"cells":["01.04.2022","Codes und Daten","QR Codes"]},{"cells":["08.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["15.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["22.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["29.04.2022","Big Data","Gesellschaft"]},{"cells":["06.05.2022","Big Data","Pr\xe4sentieren"]},{"cells":["13.05.2022","Big Data","Gesellschaft - Gruppendiskussion"]},{"cells":["20.05.2022","Big Data","Gesellschaft"]},{"cells":["27.05.2022","Auffahrt",""],"type":"holiday"},{"cells":["03.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["10.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["17.06.2022","Sportwoche",""],"type":"holiday"},{"cells":["24.06.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Filmanlass",""],"type":"event"},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["08.07.2022","Schulschluss",""],"type":"holiday"}]'),i=["components"],c={sidebar_position:1},p="25h",u={unversionedId:"home",id:"version-25h/home",title:"25h",description:"<Table",source:"@site/versioned_docs/version-25h/home.mdx",sourceDirName:".",slug:"/home",permalink:"/25h/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/home.mdx",tags:[],version:"25h",lastUpdatedAt:1643489271,formattedLastUpdatedAt:"29.1.2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-25h/sidebar",next:{title:"BYOD Basics",permalink:"/25h/category/byod-basics"}},d={},m=[{value:"Praktikum in Halbklassen",id:"praktikum-in-halbklassen",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"25h"},"25h"),(0,s.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,mdxType:"Table"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"1. Semester"),(0,s.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["20.08.2021","Einstieg","ICT Einstieg"]},{cells:["27.08.2021","ICT","BYOD-Basics"]},{cells:["03.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["10.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["17.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["24.09.2021","ICT","Kurztest Office"],type:"test"},{cells:["01.10.2021","Klassenwoche Leukerbad",""],type:"holiday"},{cells:["08.10.2021","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["29.10.2021","Codes und Daten","Zahlensysteme"]},{cells:["05.11.2021","Codes und Daten","Zahlensysteme"]},{cells:["12.11.2021","Codes und Daten","Farbdarstellung"]},{cells:["19.11.2021","Codes und Daten","Textcodierung"]},{cells:["03.12.2021","Codes und Daten","Textcodierung"]},{cells:["10.12.2021","Codes und Daten","QR Codes"]},{cells:["17.12.2021","Codes und Daten","Grafikformate"]},{cells:["24.12.2021","Winterferien",""],type:"holiday"},{cells:["31.12.2021","Winterferien",""],type:"holiday"},{cells:["07.01.2022","Winterferien",""],type:"holiday"},{cells:["14.01.2022","Codes und Daten","Anwendungen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["21.01.2022","Codes und Daten","Anwendungen"]},{cells:["28.01.2022","Codes und Daten","Test (schriftlich)"],type:"test"}],mdxType:"Table"}),(0,s.kt)("h2",{id:"praktikum-in-halbklassen"},"Praktikum in Halbklassen"),(0,s.kt)(a.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","","Erster Schultag",""],type:"holiday"},{cells:["23.08.2021","A","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["30.08.2021","B","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["06.09.2021","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["13.09.2021","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["20.09.2021","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.10.2021","","Klassenwoche",""],type:"holiday"},{cells:["08.10.2021","","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["25.10.2021","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.11.2021","A","Programmieren 1","Unterprogramme"]},{cells:["08.11.2021","B","Programmieren 1","Unterprogramme"]},{cells:["15.11.2021","A","Programmieren 1","Parameter"]},{cells:["22.11.2021","B","Programmieren 1","Parameter"]},{cells:["29.11.2021","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["06.12.2021","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["13.12.2021","A & B","Test Biologie",""],type:"event"},{cells:["20.12.2021","A & B","Test Programmieren 1","Schriftlich & Praktisch"],type:"test"},{cells:["24.12.2021","","Winterferien",""],type:"holiday"},{cells:["31.12.2021","","Winterferien",""],type:"holiday"},{cells:["03.01.2022","","Winterferien",""],type:"holiday"},{cells:["10.01.2022","A","\ud83d\udea7",""]},{cells:["17.01.2022","B","\ud83d\udea7",""]},{cells:["19.01.2022","","Notenschluss",""],type:"event"},{cells:["24.01.2022","A","\ud83d\udea7",""]}],mdxType:"Table"})))}f.isMDXComponent=!0}}]);