"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79044],{74311:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(83117),r=a(86010),i=a(67294),s=a(38134),l=a(9253),c=a(94831),d=a(14195),m=a(3023),o=a(75358),p=a(87226),u=a(14888),k=a(45810),h=a(63437),g=a(21314),A=a(68949),f=a(71217);const N="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),b={width:35,height:18},y=(0,f.Pi)((()=>{const[e,t]=i.useState("Hallo"),[a,f]=i.useState(!0),[y,E]=i.useState(!1),[v,I]=i.useState(!0),[x,S]=i.useState([]),q=(0,g.oR)("viewStore");return i.useEffect((()=>{var e,a,n,r;t((null==(e=q.textFrequency)?void 0:e.text)||"Hallo"),f((null==(a=q.textFrequency)?void 0:a.sortAlphabetic)||!0),E((null==(n=q.textFrequency)?void 0:n.onlyLetters)||!1),I((null==(r=q.textFrequency)?void 0:r.indicateUnusedChars)||!0)}),[]),i.useEffect((()=>(0,A.aD)((()=>{q.textFrequency={text:e,sortAlphabetic:a,onlyLetters:y,indicateUnusedChars:v}}))),[e,a,y,v]),i.useEffect((()=>{const t={};v&&N.forEach((e=>t[e]=0));let n=e.toUpperCase().replace(/\s/g," ");y&&(n=n.replace(/[^A-Z]/g,""));const r=n.length;if(n.split("").forEach((e=>{/\s/.test(e)||y&&!/[A-Z]/.test(e)||(t[e]=(t[e]||0)+1)})),0===r)return S([]);const i=Object.entries(t).map((e=>{let[t,a]=e;return{char:t,count:100*a/r}}));a?i.sort(((e,t)=>e.char>t.char?1:-1)):i.sort(((e,t)=>t.count-e.count)),S(i)}),[e,a,y,v]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",s.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"H\xe4ufigkeitsanalyse"),i.createElement("h4",null,"Klartext"),i.createElement("textarea",{className:(0,r.default)(s.Z.input),value:e,onChange:e=>t(e.target.value),rows:5}),i.createElement("div",null,i.createElement(k.Z,(0,n.Z)({id:"freq-sort-order",onChange:()=>f(!a),checked:a},b,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-sort-order"},a?"Sortiere alphabetisch":"Sortiere nach H\xe4ufigkeit")),i.createElement("div",null,i.createElement(k.Z,(0,n.Z)({id:"freq-filter",onChange:()=>E(!y),checked:y},b,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-filter"},y?"Nur Buchstaben":"Alle Zeichen")),i.createElement("div",null,i.createElement(k.Z,(0,n.Z)({id:"freq-indicate-unused",onChange:()=>I(!v),checked:v},b,{checkedIcon:!1,uncheckedIcon:!1}))," ",i.createElement("label",{htmlFor:"freq-indicate-unused"},v?"Platzhalter f\xfcr vorkommende Buchstaben":"Nur vorkommende Buchstaben")),i.createElement("div",{style:{maxWidth:"100%",overflowX:"auto",overflowY:"hidden"}},i.createElement("div",{style:{width:"max(98%, 500px)"}},i.createElement(h.Z,{options:{backgroundColor:"white"}},i.createElement(l.h,{width:"100%",height:400},i.createElement(c.v,{data:x,width:500,height:300,margin:{top:5,right:30,left:0,bottom:5}},i.createElement(d.q,{strokeDasharray:"3 3"}),i.createElement(m.K,{dataKey:"char"}),i.createElement(o.B,{unit:"%",name:"foo"}),i.createElement(p.$,{dataKey:"count",fill:"#ffba00"}),i.createElement(u.u,{formatter:(e,t,a)=>[e+" %","H\xe4ufigkeit"]}))))))))}))},63437:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(51436),r=a(92814),i=a(86010),s=a(14842),l=a(67294);const c={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},d={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},m=e=>{let{children:t,options:a}=e;const[n,m]=l.useState(void 0),[o,p]=l.useState("none"),u=l.useRef(null);return l.useEffect((()=>{if(["none","spin","ready"].includes(o))return;const e=setTimeout((()=>p("copied"===o?"ready":"none")),2e3);return()=>clearTimeout(e)}),[o]),l.useEffect((()=>{"none"!==o&&p("none")}),[t]),l.createElement(l.Fragment,null,l.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",d[o]),disabled:"spin"===o,onClick:()=>{if(null!==u.current){if("none"===o)return p("spin"),(0,s.SE)(u.current,a).then((e=>{m(e),p("ready")}));if("ready"===o)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{p("copied")})).catch((e=>{p("error"),console.warn(e)}))}catch(e){console.warn(e),p("error")}}}},l.createElement(r.G,{icon:c[o]})),l.createElement("div",{ref:u,className:"copy-container"},t))}},41338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>A,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(83117),r=(a(67294),a(3905)),i=a(74311);const s={sidebar_custom_props:{id:"0b4e3ced-74a8-4416-93ed-3934c34c320c",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=151207"}}},l="H\xe4ufigkeitsanalyse",c={unversionedId:"Kryptologie/Antike/frequency-analysis",id:"Kryptologie/Antike/frequency-analysis",title:"H\xe4ufigkeitsanalyse",description:"Buchstabenh\xe4ufigkeit in der deutschen Sprache",source:"@site/docs/Kryptologie/02-Antike/06-frequency-analysis.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/frequency-analysis",permalink:"/Kryptologie/Antike/frequency-analysis",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/06-frequency-analysis.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:6,frontMatter:{sidebar_custom_props:{id:"0b4e3ced-74a8-4416-93ed-3934c34c320c",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=151207"}}},sidebar:"sidebar",previous:{title:"Substitution",permalink:"/Kryptologie/Antike/substitution"},next:{title:"Vign\xe8re-Chiffre",permalink:"/Kryptologie/Antike/Vignere"}},d={},m=[{value:"Buchstabenh\xe4ufigkeit in der deutschen Sprache ",id:"buchstabenh\xe4ufigkeit-in-der-deutschen-sprache-",level:2},{value:"al-Kindi ",id:"al-kindi-",level:2},{value:"Entschl\xfcsselung durch H\xe4ufigkeitsanalyse",id:"entschl\xfcsselung-durch-h\xe4ufigkeitsanalyse",level:2},{value:"H\xe4ufigkeitsanalyse durchf\xfchren",id:"h\xe4ufigkeitsanalyse-durchf\xfchren",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=o("Comment"),u=o("Figure"),k=o("SourceRef"),h=o("Answer"),g={toc:m};function A(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"h\xe4ufigkeitsanalyse"},"H\xe4ufigkeitsanalyse"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"buchstabenh\xe4ufigkeit-in-der-deutschen-sprache-"},"Buchstabenh\xe4ufigkeit in der deutschen Sprache ",(0,r.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nicht alle Buchstaben kommen in der deutschen Sprache gleich h\xe4ufig vor. Nachfolgend findest du eine Auflistung der 10. h\xe4ufigsten Buchstaben der deutschen Sprache:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"1."),(0,r.kt)("th",{parentName:"tr",align:"center"},"2."),(0,r.kt)("th",{parentName:"tr",align:"center"},"3."),(0,r.kt)("th",{parentName:"tr",align:"center"},"4."),(0,r.kt)("th",{parentName:"tr",align:"center"},"5."),(0,r.kt)("th",{parentName:"tr",align:"center"},"6."),(0,r.kt)("th",{parentName:"tr",align:"center"},"7."),(0,r.kt)("th",{parentName:"tr",align:"center"},"8."),(0,r.kt)("th",{parentName:"tr",align:"center"},"9."),(0,r.kt)("th",{parentName:"tr",align:"center"},"10."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Buchstabe"),(0,r.kt)("td",{parentName:"tr",align:"center"},"E"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N"),(0,r.kt)("td",{parentName:"tr",align:"center"},"I"),(0,r.kt)("td",{parentName:"tr",align:"center"},"S"),(0,r.kt)("td",{parentName:"tr",align:"center"},"R"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"D"),(0,r.kt)("td",{parentName:"tr",align:"center"},"H"),(0,r.kt)("td",{parentName:"tr",align:"center"},"U")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"H\xe4ufigkeit"),(0,r.kt)("td",{parentName:"tr",align:"center"},"17,40 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"9,78 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7,55 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7,27 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7,00 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6,51 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6,15 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5,08 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4,76 %"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4,35 %")))),(0,r.kt)(p,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"al-kindi-"},"al-Kindi ",(0,r.kt)("sup",{parentName:"h2",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{style:{justifyContent:"space-between"},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im neunten Jahrhundert hat der arabische Gelehrte Ab\u016b Ya'q\u016bb ibn Ish\u0101q al-Kind\u012b (oder kurz al-Kindi) durch eine Analyse des Korans entdeckt, dass die einzelnen Zeichen der arabischen Schrift in bestimmten H\xe4ufigkeiten auftreten. In seiner Abhandlung \xfcber die Entzifferung kryptographischer Botschaften schrieb er Folgendes:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{noMargins:!0},mdxType:"Figure"},(0,r.kt)("img",{alt:"--no-margins",src:a(64823).Z,width:"143",height:"197"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(k,{parentName:"figcaption",bib:{author:"Unknown",source:"https://commons.wikimedia.org/wiki/File:Al-kindi.jpeg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine M\xf6glichkeit, eine verschl\xfcsselte Botschaft zu entziffern, vorausgesetzt, wir kennen ihre Sprache, besteht darin, einen anderen Klartext in derselben Sprache zu finden, der lang genug ist, um ein oder zwei Bl\xe4tter zu f\xfcllen, und dann zu z\xe4hlen, wie oft jeder Buchstabe vorkommt. Wir nennen den h\xe4ufigsten Buchstaben den \xabersten\xbb, den zweith\xe4ufigsten den \xabzweiten\xbb, den folgenden den \xabdritten\xbb und so weiter, bis wir alle Buchstaben in der Klartextprobe durchgez\xe4hlt haben. Dann betrachten wir den Geheimtext, den wir entschl\xfcsseln wollen, und ordnen auch seine Symbole. Wir finden das h\xe4ufigste Symbol und geben ihm die Gestalt des \xabersten\xbb Buchstabens der Klartextprobe, das zweith\xe4ufigste Symbol wird zum \xabzweiten\xbb Buchstaben, das dritth\xe4ufigste zum \xabdritten\xbb Buchstaben und so weiter, bis wir alle Symbole des Kryptogramms, das wir entschl\xfcsseln wollen, auf diese Weise zugeordnet haben."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"entschl\xfcsselung-durch-h\xe4ufigkeitsanalyse"},"Entschl\xfcsselung durch H\xe4ufigkeitsanalyse"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Durch die H\xe4ufigkeitsanalyse werden Geheimtexte, die durch eine monoalphabetische Substitution verschl\xfcsselt worden sind, grunds\xe4tzlich entzifferbar. Das heisst, sie k\xf6nnen ohne Kenntnis des Schl\xfcssels decodiert werden, indem eine H\xe4ufigkeitsanalyse vorgenommen wird. F\xfcr die Entzifferung einer Caesar-Chiffre gen\xfcgt es, den h\xe4ufigsten Buchstaben zu suchen und anschliessend denjenigen Schl\xfcssel zu w\xe4hlen, der E auf diesen h\xe4ufigsten Buchstaben abbildet."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"h\xe4ufigkeitsanalyse-durchf\xfchren"},"H\xe4ufigkeitsanalyse durchf\xfchren"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"FrequencyAnalysis"}),(0,r.kt)(h,{type:"text",webKey:"1c1320de-991f-4b0f-9a4c-3a9c71073b66",mdxType:"Answer"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Buchstabenh%C3%A4ufigkeit"},"Wikipedia")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Al-Kind%C4%AB"},"Qikipedia")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-2",className:"footnote-backref"},"\u21a9"))))))}A.isMDXComponent=!0},38134:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},64823:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"}}]);