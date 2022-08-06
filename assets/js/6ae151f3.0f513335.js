"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=l,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63432:(e,t,r)=>{r.d(t,{ZP:()=>f});var n=r(83117),l=r(67294),a=r(92814),s=r(51436);const o={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var i=r(86010),c=r(96921);let p;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(p||(p={}));const m={[p.Holiday]:s.skR,[p.Event]:s.$nv,[p.Test]:s.Xf_,[p.Info]:s.YHc};class d extends l.Component{render(){const{align:e,icon:t,date:r}=this.props;var n=this.props.value;return r&&(n=(e=>{const t=e.getDay();return l.createElement("span",{style:{fontFamily:"monospace"}},c.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(r)),l.createElement("td",{align:e},n,t?" ":"",t)}}const u=e=>{var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1};class g extends l.Component{icon(){if(this.props.type)return l.createElement(a.G,{icon:m[this.props.type]})}render(){const{type:e,cells:t}=this.props,r={className:[]};this.props.className&&r.className.push(this.props.className),e&&r.className.push(o[e]);var a=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(a=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&u(new Date)===u(a)&&r.className.push(r.className+" "+o.currentWeek)}return l.createElement("tr",(0,n.Z)({},r,{className:(0,i.default)(...r.className)}),t.map(((e,t)=>{const r={value:e};return 0===t&&(r.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?r.align=this.props.alignments[t]:r.align="left",l.createElement(d,(0,n.Z)({},r,{key:t,date:this.props.dateIndex===t?a:void 0}))})))}}class f extends l.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return l.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,i.default)(o["ofi-table"],o[this.props.size],o[this.props.compact&&"compact"],o[this.props.celled&&"celled"],o[this.props.striped&&"striped"],o[this.props.collapsing&&"collapsing"],o[this.props.selectable&&"selectable"])},l.createElement("thead",null,this.props.header&&l.createElement("tr",null,this.props.header.map(((e,t)=>{var r;const n=((null==(r=this.props.alignments)?void 0:r.length)||0)>t?this.props.alignments[t]:"left";return l.createElement("th",{align:n,key:t},e)})))),l.createElement("tbody",null,t.map(((t,r)=>l.createElement(g,(0,n.Z)({alignments:this.props.alignments},t,{key:r,dateIndex:e}))))))}}},71346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var n=r(83117),l=(r(67294),r(3905)),a=r(63432),s=r(96921);const o=JSON.parse('[{"cells":["16.08.2022","Einstieg","ICT Einstieg"]},{"cells":["23.08.2022","ICT","BYOD Basics"]},{"cells":["30.08.2022","ICT","BYOD Basics"]},{"cells":["06.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["13.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["20.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["18.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["25.10.2022","ICT","Kurztest Office"],"type":"test"},{"cells":["01.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["08.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["15.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["17.11.2022","Notenschluss Zwischenzeugnis",""],"type":"event"},{"cells":["22.11.2022","Daten","Datenbanken"]},{"cells":["29.11.2022","Daten","Datenbanken"]},{"cells":["06.12.2022","Kantonaler Fachschaftstag",""],"type":"holiday"},{"cells":["13.12.2022","Daten","Datenbanken"]},{"cells":["20.12.2022","Daten","Datenbanken"]},{"cells":["27.12.2022","Winterferien",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien",""],"type":"holiday"},{"cells":["11.01.2023","Daten","Wiederholung"]},{"cells":["18.01.2023","Daten","Kurztest Daten"],"type":"test"},{"cells":["25.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["01.02.2023","Codes und Daten","Zahlensysteme"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]'),i=JSON.parse('[{"cells":["18.08.2022","A","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["25.08.2022","B","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["01.09.2022","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["08.09.2022","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["15.09.2022","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["22.09.2022","Sonderwoche","",""],"type":"holiday"},{"cells":["29.09.2022","Herbstferien","",""],"type":"holiday"},{"cells":["06.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["13.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["20.10.2022","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["27.10.2022","A","Programmieren 1","Unterprogramme"]},{"cells":["03.11.2022","B","Programmieren 1","Unterprogramme"]},{"cells":["10.11.2022","A","Programmieren 1","Parameter"]},{"cells":["17.11.2022","B","Programmieren 1","Parameter"]},{"cells":["24.11.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["01.12.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["08.12.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["15.12.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["22.12.2022","A","Programmieren 1","Verzweigungen"]},{"cells":["29.12.2022","Winterferien","",""],"type":"holiday"},{"cells":["06.01.2023","Winterferien","",""],"type":"holiday"},{"cells":["13.01.2023","B","Programmieren 1","Verzweigungen"]},{"cells":["20.01.2023","A","Programmieren 1","Mini Projekt"]},{"cells":["27.01.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","A","Programmieren 1","Mini Projekt"]},{"cells":["25.01.2023","Notenschluss","",""],"type":"event"},{"cells":["10.02.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","Semesterende","",""],"type":"event"}]'),c={sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},p="26e Informatik",m={unversionedId:"home",id:"version-26e/home",title:"26e Informatik",description:"<Tabs",source:"@site/versioned_docs/version-26e/home.md",sourceDirName:".",slug:"/home",permalink:"/26e/home",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-26e/home.md",tags:[],version:"26e",lastUpdatedAt:1659797285,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:.1,frontMatter:{sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},sidebar:"version-26e/sidebar",next:{title:"Browser",permalink:"/26e/ICT-Grundlagen/Browser"}},d={},u=[],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},f=g("Comment"),h=g("Tabs"),y=g("TabItem"),b={toc:u};function v(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"commentable"},(0,l.kt)("h1",{parentName:"div",id:"26e-informatik"},"26e Informatik"),(0,l.kt)(f,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,l.kt)(h,{defaultValue:"theorie",values:[{label:"Einzellektion",value:"theorie"},{label:"Praktikum",value:"hk"}],mdxType:"Tabs"},(0,l.kt)(y,{value:"theorie",mdxType:"TabItem"},(0,l.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:s.Fl,mdxType:"Table"})),(0,l.kt)(y,{value:"hk",mdxType:"TabItem"},(0,l.kt)(a.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:s.Fl,mdxType:"Table"}))))}v.isMDXComponent=!0}}]);