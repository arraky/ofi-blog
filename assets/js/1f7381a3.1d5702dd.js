(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2088],{73830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(72389);const a={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",scroll:"scroll_u4Il",controls:"controls_xr2C"};var r=n(86010),s=n(67294),i=n(16187),l=n(92814),d=n(51436);const c=e=>{const[t,n]=(0,s.useState)(null),[c,m]=(0,s.useState)(-1),[u,p]=(0,s.useState)(e.width),[f,w]=(0,s.useState)(150),v=(0,o.Z)(),[b,k]=(0,s.useState)(!1);s.useEffect((()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)})),[]);const N=s.useRef(null),g=()=>{if(!N.current)return;const e=N.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;w(t)}},h=()=>{if(!N.current)return;const t=.98*N.current.getBoundingClientRect().width;g();let n=t,o=!1;e.width&&e.scale?n=Math.min(e.width*e.scale,t):e.width?n=Math.min(e.width,t):e.scale&&(n=e.scale*t),e.minWidth&&n<e.minWidth&&(n=e.minWidth,o=!0),o!==b&&k(o),p(n)},y=e=>{const{scrollX:n,scrollY:o}=window;m(c+e>t?1:c+e<1?t:c+e),setTimeout((()=>{window.scrollTo(n,o)}),0)};return v?s.createElement("div",{className:(0,r.default)(a.pdfWrapper,b&&a.overflowing,e.scroll&&a.scroll,(t<=1||void 0!==e.page)&&a.singlepage),ref:N},s.createElement("div",{style:{height:f+8+"px"}},s.createElement(i.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:o}=t;n(o),c<0&&m(e.page||1),h()},className:(0,r.default)(a.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},e.scroll&&Array.from({length:3},((e,t)=>s.createElement(i.T3,{pageNumber:t+1,width:u,onLoadSuccess:g,key:t}))),!e.scroll&&c>0&&s.createElement(i.T3,{pageNumber:c,width:u,onLoadSuccess:g}),!e.noDownload&&s.createElement("a",{href:e.file,className:(0,r.default)(a.download,"button","button--secondary","button--sm"),download:e.name},s.createElement(l.G,{icon:d.q7m})))),!e.scroll&&s.createElement("div",{className:(0,r.default)(a.controls)},t>1&&void 0===e.page&&s.createElement("div",{className:(0,r.default)("button-group")},s.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),onClick:()=>{y(-1)}},s.createElement(l.G,{icon:d.nP8})),s.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),disabled:!0},c||(t?1:"--")," / ",t||"--"),s.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),onClick:()=>{y(1)}},s.createElement(l.G,{icon:d.JYN}))))):s.createElement("div",null,"Loading...")}},16127:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(83117),a=(n(67294),n(3905)),r=n(73830);const s={sidebar_custom_props:{id:"36feb9ec-a273-4e66-be81-1d1145ffab32"}},i="Notizen",l={unversionedId:"Netzwerke-of/notes.nosync",id:"Netzwerke-of/notes.nosync",title:"Notizen",description:"2021",source:"@site/docs/Netzwerke-of/notes.nosync.md",sourceDirName:"Netzwerke-of",slug:"/Netzwerke-of/notes.nosync",permalink:"/Netzwerke-of/notes.nosync",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/notes.nosync.md",tags:[],version:"current",lastUpdatedAt:1661188205,formattedLastUpdatedAt:"22. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"36feb9ec-a273-4e66-be81-1d1145ffab32"}},sidebar:"sidebar",previous:{title:"Lernziele",permalink:"/Netzwerke-of/Pruefung"},next:{title:"Projekt",permalink:"/OFI-Projekt/projekt"}},d={},c=[{value:"2021",id:"2021",level:2}],m=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:c};function f(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"notizen"},"Notizen"),(0,a.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"2021"},"2021"),(0,a.kt)(m,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},'Fehler: "www" bei DNS-Hierarchie wird oft zusammengefasst (f\xfcr alle Seiten mit www)'),(0,a.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Fehler: DNS-Schritt und Routing wird oft vermischt/im gleichen Prozessschritt verortet "),(0,a.kt)(m,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(r.Z,{file:n(34466).Z,name:"03_run_rollenspiel_netzwerk.pdf",scroll:!0,page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})))}f.isMDXComponent=!0},34466:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/files/03_run_rollenspiel_netzwerk-a7d8e33433816deb2785f99a5b8a912a.pdf"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);