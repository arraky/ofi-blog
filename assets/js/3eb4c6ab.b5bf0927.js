"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3699],{63432:function(e,t,l){l.d(t,{ZP:function(){return b}});var n,s,r=l(83117),a=l(3435),i=l(21073),o=l(67294),c=l(92814),p=l(51436),d={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},u=l(86010),h=l(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(s||(s={}));var m=((n={})[s.Holiday]=p.skR,n[s.Event]=p.$nv,n[s.Test]=p.Xf_,n[s.Info]=p.YHc,n),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,l=e.icon,n=e.date,s=this.props.value;return n&&(s=function(e){var t=e.getDay();return o.createElement("span",{style:{fontFamily:"monospace"}},h.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(n)),o.createElement("td",{align:t},s,l?" ":"",l)},t}(o.Component),f=function(e){var t=new Date(e.getFullYear(),0,1),l=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(l/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var l=t.prototype;return l.icon=function(){if(this.props.type)return o.createElement(c.G,{icon:m[this.props.type]})},l.render=function(){var e=this,t=this.props,l=t.type,n=t.cells,s={className:[]};this.props.className&&s.className.push(this.props.className),l&&s.className.push(d[l]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=n[this.props.dateIndex];"string"==typeof c&&(i=function(e){var t=e.match((0,a.Z)(/(\d+)\.(\d+)\.(\d+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&f(new Date)===f(i)&&s.className.push(s.className+" "+d.currentWeek)}return o.createElement("tr",(0,r.Z)({},s,{className:u.default.apply(void 0,s.className)}),n.map((function(t,l){var n={value:t};return 0===l&&(n.icon=e.icon()),e.props.alignments&&e.props.alignments.length>l?n.align=e.props.alignments[l]:n.align="left",o.createElement(y,(0,r.Z)({},n,{key:l,date:e.props.dateIndex===l?i:void 0}))})))},t}(o.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return o.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,u.default)(d["ofi-table"],d[this.props.size],d[this.props.compact&&"compact"],d[this.props.celled&&"celled"],d[this.props.striped&&"striped"],d[this.props.collapsing&&"collapsing"],d[this.props.selectable&&"selectable"])},o.createElement("thead",null,this.props.header&&o.createElement("tr",null,this.props.header.map((function(t,l){var n,s=((null==(n=e.props.alignments)?void 0:n.length)||0)>l?e.props.alignments[l]:"left";return o.createElement("th",{align:s,key:l},t)})))),o.createElement("tbody",null,this.props.rows.map((function(l,n){return o.createElement(g,(0,r.Z)({alignments:e.props.alignments},l,{key:n,dateIndex:t}))}))))},t}(o.Component)},85175:function(e,t,l){l.r(t),l.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var n=l(83117),s=l(80102),r=(l(67294),l(3905)),a=l(63432),i=JSON.parse('[{"cells":["04.02.2022","Codes und Daten","Textcodierung"]},{"cells":["11.02.2022","Codes und Daten","Farbdarstellung"]},{"cells":["18.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["25.02.2022","Codes und Daten","Grafikformate"]},{"cells":["04.03.2022","Codes und Daten","Kompression"]},{"cells":["11.03.2022","Codes und Daten","Anwendungen"]},{"cells":["18.03.2022","Codes und Daten","Wiederholung"]},{"cells":["25.03.2022","Codes und Daten","Test"],"type":"test"},{"cells":["01.04.2022","Codes und Daten","QR Codes"]},{"cells":["08.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["15.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["22.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["29.04.2022","Pr\xe4sentieren",""]},{"cells":["06.05.2022","Big Data",""]},{"cells":["13.05.2022","Big Data",""]},{"cells":["20.05.2022","Big Data",""]},{"cells":["27.05.2022","Auffahrt",""],"type":"holiday"},{"cells":["03.06.2022","Internet, Privatsph\xe4re, Datenschutz",""]},{"cells":["10.06.2022","Test",""],"type":"test"},{"cells":["17.06.2022","Sportwoche",""],"type":"holiday"},{"cells":["24.06.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Filmanlass",""],"type":"event"},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["08.07.2022","Schulschluss",""],"type":"holiday"}]'),o=["components"],c={sidebar_position:1},p="25h",d={unversionedId:"home",id:"version-25h/home",title:"25h",description:"<Table",source:"@site/versioned_docs/version-25h/home.mdx",sourceDirName:".",slug:"/home",permalink:"/25h/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/home.mdx",tags:[],version:"25h",lastUpdatedAt:1643489271,formattedLastUpdatedAt:"1/29/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-25h/sidebar",next:{title:"BYOD Basics",permalink:"/25h/category/byod-basics"}},u={},h=[{value:"Praktikum in Halbklassen",id:"praktikum-in-halbklassen",level:2}],m={toc:h};function y(e){var t=e.components,l=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"25h"},"25h"),(0,r.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,mdxType:"Table"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"1. Semester"),(0,r.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["20.08.2021","Einstieg","ICT Einstieg"]},{cells:["27.08.2021","ICT","BYOD-Basics"]},{cells:["03.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["10.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["17.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["24.09.2021","ICT","Kurztest Office"],type:"test"},{cells:["01.10.2021","Klassenwoche Leukerbad",""],type:"holiday"},{cells:["08.10.2021","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["29.10.2021","Codes und Daten","Zahlensysteme"]},{cells:["05.11.2021","Codes und Daten","Zahlensysteme"]},{cells:["12.11.2021","Codes und Daten","Farbdarstellung"]},{cells:["19.11.2021","Codes und Daten","Textcodierung"]},{cells:["03.12.2021","Codes und Daten","Textcodierung"]},{cells:["10.12.2021","Codes und Daten","QR Codes"]},{cells:["17.12.2021","Codes und Daten","Grafikformate"]},{cells:["24.12.2021","Winterferien",""],type:"holiday"},{cells:["31.12.2021","Winterferien",""],type:"holiday"},{cells:["07.01.2022","Winterferien",""],type:"holiday"},{cells:["14.01.2022","Codes und Daten","Anwendungen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["21.01.2022","Codes und Daten","Anwendungen"]},{cells:["28.01.2022","Codes und Daten","Test (schriftlich)"],type:"test"}],mdxType:"Table"}),(0,r.kt)("h2",{id:"praktikum-in-halbklassen"},"Praktikum in Halbklassen"),(0,r.kt)(a.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","","Erster Schultag",""],type:"holiday"},{cells:["23.08.2021","A","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["30.08.2021","B","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["06.09.2021","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["13.09.2021","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["20.09.2021","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.10.2021","","Klassenwoche",""],type:"holiday"},{cells:["08.10.2021","","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["25.10.2021","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.11.2021","A","Programmieren 1","Unterprogramme"]},{cells:["08.11.2021","B","Programmieren 1","Unterprogramme"]},{cells:["15.11.2021","A","Programmieren 1","Parameter"]},{cells:["22.11.2021","B","Programmieren 1","Parameter"]},{cells:["29.11.2021","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["06.12.2021","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["13.12.2021","A & B","Test Biologie",""],type:"event"},{cells:["20.12.2021","A & B","Test Programmieren 1","Schriftlich & Praktisch"],type:"test"},{cells:["24.12.2021","","Winterferien",""],type:"holiday"},{cells:["31.12.2021","","Winterferien",""],type:"holiday"},{cells:["03.01.2022","","Winterferien",""],type:"holiday"},{cells:["10.01.2022","A","\ud83d\udea7",""]},{cells:["17.01.2022","B","\ud83d\udea7",""]},{cells:["19.01.2022","","Notenschluss",""],type:"event"},{cells:["24.01.2022","A","\ud83d\udea7",""]}],mdxType:"Table"})))}y.isMDXComponent=!0}}]);