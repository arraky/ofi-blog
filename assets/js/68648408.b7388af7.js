"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[67865],{603905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,N=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},735130:function(e,t,a){var n=a(386010),r=a(496486),s=a(667294),i=a(296734),m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=function(e){return e.toUpperCase().replace(/\s+/g," ")};t.Z=function(){var e=s.useState(""),t=e[0],a=e[1],p=s.useState(m.join("")),o=p[0],c=p[1],d=s.useState(m),u=d[0],N=d[1],h=s.useState(m),k=h[0],g=h[1],f=s.useState(""),b=f[0],v=f[1],C=s.useState("text"),y=C[0],w=C[1];return s.useEffect((function(){N((0,r.differenceWith)(m,o.split(""),r.isEqual))}),[o]),s.useEffect((function(){if("text"===y&&0!==t.length&&o.length===m.length){var e=t.split("").map((function(e){return m.includes(e)?o[m.indexOf(e)]:e}));v(e.join(""))}}),[t,o,u]),s.useEffect((function(){if("cipher"===y&&0!==b.length&&o.length===m.length){var e=b.split("").map((function(e){return m.includes(e)?m[o.split("").indexOf(e)]:e}));a(e.join(""))}}),[b,o,u]),s.useEffect((function(){var e=o.split("");(0,r.uniq)(o.split("")).forEach((function(t){e.splice(e.indexOf(t),1)})),g((0,r.uniq)(e))}),[u]),s.createElement("div",{className:(0,n.default)("hero","shadow--lw",i.Z.container)},s.createElement("div",{className:"container"},s.createElement("p",{className:"hero__subtitle"},"Substitutions-Chiffre"),s.createElement("h4",null,"Klartext"),s.createElement("textarea",{className:(0,n.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);w("text"),a(l(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),s.createElement("div",{className:i.Z.stringInputContainer},s.createElement("h4",null,s.createElement("label",{htmlFor:"subs-key"},"Schl\xfcssel")),s.createElement("div",{className:(0,n.default)(i.Z.iv,"button-group")},s.createElement("input",{id:"subs-key",type:"text",placeholder:"Ein vollst\xe4ndiges Aplhabet",value:o,className:(0,n.default)(o.length!==m.length&&i.Z.invalid),onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);c(function(e){return e.toUpperCase().replace(/[^A-Z ]/g,"")}(e.target.value)),setTimeout((function(){e.target.setSelectionRange(t,t)}),0)}}),s.createElement("button",{className:(0,n.default)("button","button--primary","button--sm"),onClick:function(){c((0,r.shuffle)(m).join(""))}},"Zuf\xe4llig Setzen")),u.length>0&&s.createElement("div",null,s.createElement("span",null,"Im Schl\xfcssel fehlende Buchstaben:"),u.map((function(e){return s.createElement("span",{className:(0,n.default)("badge","badge--danger"),key:e},e)}))),k.length>0&&s.createElement("div",null,s.createElement("span",null,"Im Schl\xfcssel doppelt vorhandene Buchstaben:"),k.map((function(e){return s.createElement("span",{className:(0,n.default)("badge","badge--warning"),key:e},e)})))),s.createElement("h4",null,"Geheimtext"),s.createElement("textarea",{className:(0,n.default)(i.Z.input),value:b,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);w("cipher"),v(l(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Caesar Verschl\xfcsselter Geheimtext"})))}},779908:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var n=a(583117),r=a(480102),s=(a(667294),a(603905)),i=a(735130),m=["components"],l={title:"Substitution"},p="Monoalphabetische Substitution [^1]",o={unversionedId:"Kryptologie/Antike/substitution",id:"Kryptologie/Antike/substitution",title:"Substitution",description:"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine monoalphabetische Substitution genannt.",source:"@site/docs/Kryptologie/02-Antike/04-substitution.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/substitution",permalink:"/Kryptologie/Antike/substitution",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/04-substitution.md",tags:[],version:"current",lastUpdatedAt:1635004281,formattedLastUpdatedAt:"10/23/2021",sidebarPosition:4,frontMatter:{title:"Substitution"},sidebar:"sidebar",previous:{title:"Caesar-Chiffre",permalink:"/Kryptologie/Antike/Caesar"},next:{title:"Begriffe",permalink:"/Kryptologie/Antike/Begriff"}},c={},d=[{value:"Substitutions-Chiffre ausprobieren",id:"substitutions-chiffre-ausprobieren",level:2}],u={toc:d};function N(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"monoalphabetische-substitution-"},"Monoalphabetische Substitution ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine ",(0,s.kt)("strong",{parentName:"p"},"monoalphabetische Substitution")," genannt."),(0,s.kt)("p",null,"Das Verfahren wird \xabmonoalphabetisch\xbb genannt, weil zum Verschl\xfcsseln eines Textes nur ",(0,s.kt)("strong",{parentName:"p"},"ein Alphabet")," zum Einsatz kommt. Im Gegensatz dazu werden bei \xabpolyalphabetischen\xbb Verfahren f\xfcr die Verschl\xfcsselung eines einzigen Textes mehrere verschiedene Alphabete verwendet (siehe z.B. Vigen\xe8re)."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Monoalphabetische Substitution"),(0,s.kt)("th",{parentName:"tr",align:"left"}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Klartextalphabet"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"A")," ",(0,s.kt)("inlineCode",{parentName:"td"},"B")," ",(0,s.kt)("inlineCode",{parentName:"td"},"C")," ",(0,s.kt)("inlineCode",{parentName:"td"},"D")," ",(0,s.kt)("inlineCode",{parentName:"td"},"E")," ",(0,s.kt)("inlineCode",{parentName:"td"},"F")," ",(0,s.kt)("inlineCode",{parentName:"td"},"G")," ",(0,s.kt)("inlineCode",{parentName:"td"},"H")," ",(0,s.kt)("inlineCode",{parentName:"td"},"I")," ",(0,s.kt)("inlineCode",{parentName:"td"},"J")," ",(0,s.kt)("inlineCode",{parentName:"td"},"K")," ",(0,s.kt)("inlineCode",{parentName:"td"},"L")," ",(0,s.kt)("inlineCode",{parentName:"td"},"M")," ",(0,s.kt)("inlineCode",{parentName:"td"},"N")," ",(0,s.kt)("inlineCode",{parentName:"td"},"O")," ",(0,s.kt)("inlineCode",{parentName:"td"},"P")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,s.kt)("inlineCode",{parentName:"td"},"R")," ",(0,s.kt)("inlineCode",{parentName:"td"},"S")," ",(0,s.kt)("inlineCode",{parentName:"td"},"T")," ",(0,s.kt)("inlineCode",{parentName:"td"},"U")," ",(0,s.kt)("inlineCode",{parentName:"td"},"V")," ",(0,s.kt)("inlineCode",{parentName:"td"},"W")," ",(0,s.kt)("inlineCode",{parentName:"td"},"X")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Z"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Geheimtextalphabet"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"M")," ",(0,s.kt)("inlineCode",{parentName:"td"},"B")," ",(0,s.kt)("inlineCode",{parentName:"td"},"T")," ",(0,s.kt)("inlineCode",{parentName:"td"},"C")," ",(0,s.kt)("inlineCode",{parentName:"td"},"H")," ",(0,s.kt)("inlineCode",{parentName:"td"},"J")," ",(0,s.kt)("inlineCode",{parentName:"td"},"F")," ",(0,s.kt)("inlineCode",{parentName:"td"},"S")," ",(0,s.kt)("inlineCode",{parentName:"td"},"A")," ",(0,s.kt)("inlineCode",{parentName:"td"},"E")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,s.kt)("inlineCode",{parentName:"td"},"O")," ",(0,s.kt)("inlineCode",{parentName:"td"},"R")," ",(0,s.kt)("inlineCode",{parentName:"td"},"D")," ",(0,s.kt)("inlineCode",{parentName:"td"},"N")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Z")," ",(0,s.kt)("inlineCode",{parentName:"td"},"W")," ",(0,s.kt)("inlineCode",{parentName:"td"},"I")," ",(0,s.kt)("inlineCode",{parentName:"td"},"U")," ",(0,s.kt)("inlineCode",{parentName:"td"},"P")," ",(0,s.kt)("inlineCode",{parentName:"td"},"G")," ",(0,s.kt)("inlineCode",{parentName:"td"},"X")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,s.kt)("inlineCode",{parentName:"td"},"K")," ",(0,s.kt)("inlineCode",{parentName:"td"},"L")," ",(0,s.kt)("inlineCode",{parentName:"td"},"V"))))),(0,s.kt)("p",null,"Es ist ersichtlich, dass eine Entschl\xfcsselung nun viel aufw\xe4ndiger ist, da keine Alphabet-Verschiebung mehr stattfindet, sondern eine wilde Vertauschung (= Substitution) der Buchstaben."),(0,s.kt)("p",null,"Die Nachricht ",(0,s.kt)("inlineCode",{parentName:"p"},"EIN KLEINER RABE FLIEGT AM TAGE")," wird verschl\xfcsselt zu ",(0,s.kt)("inlineCode",{parentName:"p"},"HAD YOHADHI IMBH JOAHFP MR PMFH"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Die Tatsache, dass der Buchstabe ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," im obigen Beispiel \xabnicht\xbb verschl\xfcsselt wird (also auch im Geheimtext ein ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," ist), stellt \xfcberhaupt kein Problem dar \u2013 im Gegenteil, es w\xfcrde die Anzahl M\xf6glichkeiten einschr\xe4nken, wenn es verboten w\xe4re, dass einzelne Buchstaben auch unver\xe4ndert bleiben d\xfcrfen."))),(0,s.kt)("p",null,"Bei dieser Substitution h\xe4ngt die Anzahl m\xf6glicher Verschl\xfcsselungen von der Gr\xf6sse des zugrundeliegenden Zeichensatzes ab. Wenn ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," Zeichen verwendet werden, gibt es ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!")))))," unterschiedliche Verschl\xfcsselungen. ",(0,s.kt)("em",{parentName:"p"},"(",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!"))))),' bedeutet "n Fakult\xe4t" und ist das Produkt aller nat\xfcrlicher Zahlen bis zur angegebenen Zahl, Beispiel: ',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"24")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))),")"),"."),(0,s.kt)("h2",{id:"substitutions-chiffre-ausprobieren"},"Substitutions-Chiffre ausprobieren"),(0,s.kt)(i.Z,{mdxType:"Substitution"}),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=481987"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},296734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);