"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4339],{5892:function(e,t,n){var i=n(86010),a=n(67294),r=n(96734);t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],l=a.useState(""),s=l[0],o=l[1],c=a.useState(2),u=c[0],d=c[1],p=a.useState("text"),m=p[0],f=p[1],h=a.useState(0);h[0],h[1];return a.useEffect((function(){if(u&&"text"===m){var e=Array(u).fill("");t.split("").forEach((function(t,n){e[n%u]+=t})),o(e.join("\n").trim())}}),[t,u]),a.useEffect((function(){if(u&&"cipher"===m)if(0!==s.length){var e=s.split("\n"),i=(e=e.map((function(t){return t.padEnd(Math.max.apply(Math,e.map((function(e){return e.length})))," ")}))).join("").replace(/\t+/g," "),a=Math.ceil(i.length/u);i=i.padEnd(a*u," ");for(var r="",l=0;l<a;l++)for(var o=0;o<u;o++)r+=i.charAt(l+o*a);n(r)}else""!==t&&n("")}),[s,u]),a.createElement("div",{className:(0,i.default)("hero","shadow--lw",r.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Skytale"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,i.default)(r.Z.input),value:t,onChange:function(e){f("text");var t=Math.max(e.target.selectionStart,e.target.selectionEnd);n(e.target.value.replace(/\n/g," ")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("div",{className:r.Z.stringInputContainer},a.createElement("h4",null,a.createElement("label",{htmlFor:"skytale-key"},"Schl\xfcssel")),a.createElement("input",{id:"skytale-key",type:"number",min:1,max:26,placeholder:"Schl\xfcssel",value:u||"",onChange:function(e){d(Number.parseInt(e.target.value,10))}})),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,i.default)(r.Z.input),value:s,onChange:function(e){f("cipher"),o(e.target.value)},rows:5,placeholder:"Skytale Verschl\xfcsselter Geheimtext"})))}},34849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=n(84384),s=n(5892),o=["components"],c={title:"Skytale"},u="Skytale [^1]",d={unversionedId:"Kryptologie/Antike/Skytale",id:"Kryptologie/Antike/Skytale",title:"Skytale",description:'Um ca. 500 v. Chr. nutzten die Spartaner eine Skytale (griechisch f\xfcr "Stock" oder "Stab"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.',source:"@site/docs/Kryptologie/02-Antike/01-Skytale.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Skytale",permalink:"/Kryptologie/Antike/Skytale",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/01-Skytale.md",tags:[],version:"current",lastUpdatedAt:1634988183,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:1,frontMatter:{title:"Skytale"},sidebar:"sidebar",previous:{title:"Lernziele",permalink:"/Kryptologie/Lernziele"},next:{title:"Polybios-Chiffre",permalink:"/Kryptologie/Antike/Polybios"}},p=[{value:"Transposition",id:"transposition",children:[],level:2},{value:"Skytale ausprobieren",id:"skytale-ausprobieren",children:[],level:2}],m={toc:p};function f(e){var t=e.components,c=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"skytale-"},"Skytale ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Um ca. 500 v. Chr. nutzten die Spartaner eine ",(0,r.kt)("strong",{parentName:"p"},"Skytale"),' (griechisch f\xfcr "',(0,r.kt)("em",{parentName:"p"},"Stock"),'" oder "',(0,r.kt)("em",{parentName:"p"},"Stab"),'"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.'),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Unbekannt",source:"https://commons.wikimedia.org/wiki/File:Skytale.png",licence:"CC 3.0",licence_url:"Attribution-Share Alike 3.0 Unported",edited:!1},caption:"Nachbildung einer Skytale",options:{width:"300px"},isInline:!1,src:n(88973).Z,alt:"Nachbildung einer Skytale --width=300px",mdxType:"Image"})),(0,r.kt)("h2",{id:"transposition"},"Transposition"),(0,r.kt)("p",null,"Die Skytale ist ein Beispiel einer Verschl\xfcsselung durch Transposition. Das heisst, dass die Zeichen des Geheimtextes nicht ersetzt, sondern nur umgestellt (",(0,r.kt)("em",{parentName:"p"},"transponiert"),") werden."),(0,r.kt)("h2",{id:"skytale-ausprobieren"},"Skytale ausprobieren"),(0,r.kt)(s.Z,{mdxType:"Skytale"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=818731"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}},88973:function(e,t,n){t.Z=n.p+"assets/images/skytale-1e4ee9dd8e81ee7c5cfd12777f92a033.png"}}]);