"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[50885],{92932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(83117),i=(t(67294),t(3905));t(61839);const r={sidebar_custom_props:{id:"de0fda33-050b-4e7e-8391-540eb8860e03",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/13"}}},m="Funktionen",o={unversionedId:"EF-Python/Python/functions/index",id:"EF-Python/Python/functions/index",title:"Funktionen",description:"Einleitung",source:"@site/docs/EF-Python/03-Python/11-functions/index.md",sourceDirName:"EF-Python/03-Python/11-functions",slug:"/EF-Python/Python/functions/",permalink:"/EF-Python/Python/functions/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/03-Python/11-functions/index.md",tags:[],version:"current",lastUpdatedAt:1666001717,formattedLastUpdatedAt:"17. Okt. 2022",frontMatter:{sidebar_custom_props:{id:"de0fda33-050b-4e7e-8391-540eb8860e03",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/13"}}},sidebar:"sidebar",previous:{title:"Referenzen",permalink:"/EF-Python/Python/referenzen/"},next:{title:"Some useful Links",permalink:"/EF-Python/Python/links.nosync"}},d={},s=[{value:"Einleitung",id:"einleitung",level:2}],p=(l="Comment",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var l;const u={toc:s};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"funktionen"},"Funktionen"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"einleitung"},"Einleitung"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Sie haben in Ihren Programmen schon lange ",(0,i.kt)("strong",{parentName:"p"},"Funktionen")," gebraucht, vielleicht ohne es zu merken. Zum Beispiel wenn Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"print(...)")," geschrieben haben. Aber auch ",(0,i.kt)("inlineCode",{parentName:"p"},"math.sqrt(...)")," (Wurzel ziehen) und ",(0,i.kt)("inlineCode",{parentName:"p"},"math.ceil(...)")," (Abrunden), welche Sie im Primzahlen-Programm gebraucht haben, sind Funktionen. Allerdings stammen diese zwei aus einem ",(0,i.kt)("strong",{parentName:"p"},"Modul"),", welches Sie mit ",(0,i.kt)("inlineCode",{parentName:"p"},"import math")," zuerst in Ihr Programm importieren mussten."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das hinschreiben eines ",(0,i.kt)("strong",{parentName:"p"},"Funktionsnamen")," in einem Programm  bezweckt bei der ",(0,i.kt)("strong",{parentName:"p"},"Ausf\xfchrung")," des Programms, dass an dieser Stelle die betreffende Funktion ausgef\xfchrt wird. Man spricht von einem Funktions-",(0,i.kt)("strong",{parentName:"p"},"Aufruf"),"."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Sobald ein Programm l\xe4nger, als nur ein paar Zeilen ist, spielen Funktionen eine wichtige Rolle. Man kann n\xe4mlich auch selber Funktionen schreiben, die man dann an verschiedenen Stellen aufrufen kann. Das hat folgende Vorteile:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dt",{parentName:"dl"},"\xdcbersichtlicher\n"),(0,i.kt)("dd",{parentName:"dl"},"Das Programm wird ",(0,i.kt)("strong",{parentName:"dd"},"\xfcbersichtlicher")," und besser verst\xe4ndlich, vor allem, wenn Sie f\xfcr Ihre Funktionen gute Namen w\xe4hlen."),(0,i.kt)("dd",{parentName:"dl"},"Die Lesbarkeit ist eine wichtige Qualit\xe4t von Programmen, weil diese meistens nicht nur von der Autorin bearbeitet werden."),(0,i.kt)("dt",{parentName:"dl"},"Kein doppelter Code\n"),(0,i.kt)("dd",{parentName:"dl"},"Man kann die Wiederholung von gleichlautenden Programmteilen ",(0,i.kt)("strong",{parentName:"dd"},"vermeiden"),". "),(0,i.kt)("dd",{parentName:"dl"},"Wenn dann sp\xe4ter eine \xc4nderung am Programm n\xf6tig wird, oder ein Fehler zu korrigieren ist, so muss man nur die betreffende Funktion \xe4ndern.")),(0,i.kt)(p,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Doch was sind Funktionen eigentlich?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("blockquote",null,(0,i.kt)("div",{parentName:"blockquote",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Eine Funktion ist eine ",(0,i.kt)("strong",{parentName:"p"},"Sequenz")," (Abfolge) von (Python-)Anweisungen, welche unter einem eigenen ",(0,i.kt)("strong",{parentName:"p"},"Namen"),", gefolgt von ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", zusammengefasst werden. Die Funktion kann als neuer ",(0,i.kt)("strong",{parentName:"p"},"Befehl")," verstanden werden, welche dann an anderen Stellen im Programm ",(0,i.kt)("strong",{parentName:"p"},"aufgerufen")," werden kann, indem man den Namen und ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," hinschreibt."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{maxWidth:"47%",flexBasis:"300px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="1-ohne-funktion.py"',reference:!0,title:'"1-ohne-funktion.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/1-ohne-funktion.py\n")))),(0,i.kt)("div",{parentName:"div",style:{maxWidth:"47%",flexBasis:"300px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="2-funktion.py"',reference:!0,title:'"2-funktion.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/2-funktion.py\n"))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Beispiele ",(0,i.kt)("inlineCode",{parentName:"p"},"1-ohne-funktion.py")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"2-funktion.py")," zeigen zweimal dasselbe Programm, einmal ohne Funktion, einmal mit Funktion. Im zweiten Beispiel sieht man, wie die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"count_down()")," definiert wird (Zeile 3 bis 14). In Zeile 3 steht der Name der Funktion, w\xe4hrend die Zeilen 4 bis 14 die Anweisungen enthalten, welche zur Funktion geh\xf6ren."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeile 17 zeigt, wie die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"count_down()")," aufgerufen wird."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"funktionen-mit-parameter"},"Funktionen mit Parameter"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Damit Funktionen noch flexibler eingesetzt werden k\xf6nnen, kann man ihnen beim Aufruf bestimmte Werte in Form von ",(0,i.kt)("strong",{parentName:"p"},"Parametern")," mitgeben. Dazu muss man bei der ",(0,i.kt)("strong",{parentName:"p"},"Definition")," der Funktion zwischen den ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," die Namen der Parameter angeben. Diese k\xf6nnen dann innerhalb der Funktion wie Variablen verwendet werden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beim ",(0,i.kt)("strong",{parentName:"p"},"Aufruf")," der Funktion gibt man in den ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," die ",(0,i.kt)("strong",{parentName:"p"},"aktuellen Werte")," an, mit denen die Funktion anschliessend arbeiten soll. Man nennt diese Werte beim Aufruf die ",(0,i.kt)("strong",{parentName:"p"},"Argumente"),". Das k\xf6nnen Zahlen, Texte, aber auch die Namen von anderen Variablen sein."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"wichtig"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Wichtig")),(0,i.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Parameter k\xf6nnen nur innerhalb der Funktion verwendet werden, zu welcher Sie geh\xf6ren. Ausserhalb der Funktion sind sie unbekannt. Weist man einem Parameter innerhalb einer Funktion einen neuen Wert zu, so geht dieser beim Verlassen der Funktion verloren."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das n\xe4chste Beispiel ",(0,i.kt)("inlineCode",{parentName:"p"},"3-function-with-parameter.py")," zeigt, wie die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"count_down()")," mit einem Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"zahl")," flexibler gemacht werden kann. Jetzt kann beim Aufruf der Funktion angegeben werden, wie lange der Count-down dauern soll. Das hat zur Folge, dass die Anweisungen f\xfcr die Eingabe der gew\xfcnschten Count-down-Zeit durch die Benutzer:in zur\xfcck ins Hauptprogramm verlagert werden m\xfcssen. Dies ist aber sowieso besser, da die Funktion so viel flexibler einsetzbar ist. Die Count-down-Zeit kann ja aus einer beliebigen Quelle stammen, nicht nur von der Konsole."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="3-function-with-parameter.py"',reference:!0,title:'"3-function-with-parameter.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/3-function-with-parameter.py\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"funktionen-mit-r\xfcckgabewert"},"Funktionen mit R\xfcckgabewert"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Viele Funktionen erzeugen bei ihrer Ausf\xfchrung ein Resultat, welches dann ausserhalb der Funktion weiterverwendet werden kann. Dazu gibt es die M\xf6glichkeit mit ",(0,i.kt)("inlineCode",{parentName:"p"},"return ...")," einen Wert als Resultat zur\xfcckzugeben. Die Funktion wird dann verlassen und der Wert steht an der Stelle des Aufrufs zur Verf\xfcgung und kann dort zum Beispiel einer weiteren Variablen zugewiesen werden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im foglenden Beispiel ",(0,i.kt)("inlineCode",{parentName:"p"},"4-function-with-result.py")," ist dieses Prinzip bei der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"lies_zahl()")," zu sehen, welche als Resultat eine die eingegebene Zahl zur\xfcckgibt."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="4-function-with-result.py"',reference:!0,title:'"4-function-with-result.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/4-function-with-result.py\n")))}k.isMDXComponent=!0}}]);