(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3034],{73830:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(72389);const o={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",scroll:"scroll_u4Il",controls:"controls_xr2C"};var a=r(86010),i=r(67294),s=r(16187),d=r(92814),c=r(51436);const l=e=>{const[t,r]=(0,i.useState)(null),[l,m]=(0,i.useState)(-1),[u,p]=(0,i.useState)(e.width),[g,v]=(0,i.useState)(150),h=(0,n.Z)(),[f,y]=(0,i.useState)(!1);i.useEffect((()=>(window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k)})),[]);const b=i.useRef(null),w=()=>{if(!b.current)return;const e=b.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;v(t)}},k=()=>{if(!b.current)return;const t=.98*b.current.getBoundingClientRect().width;w();let r=t,n=!1;e.width&&e.scale?r=Math.min(e.width*e.scale,t):e.width?r=Math.min(e.width,t):e.scale&&(r=e.scale*t),e.minWidth&&r<e.minWidth&&(r=e.minWidth,n=!0),n!==f&&y(n),p(r)},N=e=>{const{scrollX:r,scrollY:n}=window;m(l+e>t?1:l+e<1?t:l+e),setTimeout((()=>{window.scrollTo(r,n)}),0)};return h?i.createElement("div",{className:(0,a.default)(o.pdfWrapper,f&&o.overflowing,e.scroll&&o.scroll,(t<=1||void 0!==e.page)&&o.singlepage),ref:b},i.createElement("div",{style:{height:g+8+"px"}},i.createElement(s.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:n}=t;r(n),l<0&&m(e.page||1),k()},className:(0,a.default)(o.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},e.scroll&&Array.from({length:3},((e,t)=>i.createElement(s.T3,{pageNumber:t+1,width:u,onLoadSuccess:w,key:t}))),!e.scroll&&l>0&&i.createElement(s.T3,{pageNumber:l,width:u,onLoadSuccess:w}),!e.noDownload&&i.createElement("a",{href:e.file,className:(0,a.default)(o.download,"button","button--secondary","button--sm"),download:e.name},i.createElement(d.G,{icon:c.q7m})))),!e.scroll&&i.createElement("div",{className:(0,a.default)(o.controls)},t>1&&void 0===e.page&&i.createElement("div",{className:(0,a.default)("button-group")},i.createElement("button",{className:(0,a.default)("button","button--secondary","button--sm"),onClick:()=>{N(-1)}},i.createElement(d.G,{icon:c.nP8})),i.createElement("button",{className:(0,a.default)("button","button--secondary","button--sm"),disabled:!0},l||(t?1:"--")," / ",t||"--"),i.createElement("button",{className:(0,a.default)("button","button--secondary","button--sm"),onClick:()=>{N(1)}},i.createElement(d.G,{icon:c.JYN}))))):i.createElement("div",null,"Loading...")}},45746:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(83117),o=(r(67294),r(3905)),a=r(73830);const i={sidebar_custom_props:{id:"eef47ba6-4d66-4671-9d23-4fd6557b0ee9"}},s="Kryptow\xe4hrung",d={unversionedId:"Cryptocurrency/Kryptowaehrung",id:"Cryptocurrency/Kryptowaehrung",title:"Kryptow\xe4hrung",description:"\xdcbersicht von P. Giger",source:"@site/docs/Cryptocurrency/01-Kryptowaehrung.md",sourceDirName:"Cryptocurrency",slug:"/Cryptocurrency/Kryptowaehrung",permalink:"/Cryptocurrency/Kryptowaehrung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Cryptocurrency/01-Kryptowaehrung.md",tags:[],version:"current",lastUpdatedAt:1659798183,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"eef47ba6-4d66-4671-9d23-4fd6557b0ee9"}},sidebar:"sidebar",previous:{title:"Vom USB-Stick starten",permalink:"/Computer/praktikum/os-from-usb"},next:{title:"Programmiersprachen",permalink:"/EF-Python/Programmiersprachen/"}},c={},l=[{value:"\xdcbersicht von P. Giger",id:"\xfcbersicht-von-p-giger",level:2},{value:"Foli von P. Giger",id:"foli-von-p-giger",level:2}],m=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:l};function g(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h1",{parentName:"div",id:"kryptow\xe4hrung"},"Kryptow\xe4hrung"),(0,o.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h1",{parentName:"div",id:"kryptow\xe4rhung"},"Kryptow\xe4rhung"),(0,o.kt)(m,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h2",{parentName:"div",id:"\xfcbersicht-von-p-giger"},"\xdcbersicht von P. Giger"),(0,o.kt)(m,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)(a.Z,{file:r(70004).Z,name:"Kryptow\xe4hrungen_Skript_Peter_Giger.pdf",scroll:void 0,page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h2",{parentName:"div",id:"foli-von-p-giger"},"Foli von P. Giger"),(0,o.kt)(m,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})))}g.isMDXComponent=!0},70004:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/files/Kryptow\xe4hrungen_Skript_Peter_Giger-fc603d9ca0a20527049841311b240f59.pdf"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);