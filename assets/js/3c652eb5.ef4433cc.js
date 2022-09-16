"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[60986],{4025:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>v,frontMatter:()=>m,metadata:()=>s,toc:()=>l});var n=t(83117),i=(t(67294),t(3905));t(61839);const m={sidebar_custom_props:{id:"de38c04c-c7b6-4565-8778-dffc4686b4c2",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11"}},r="Listen Erzeugen",s={unversionedId:"EF-Python/Python/Listcomprehension",id:"EF-Python/Python/Listcomprehension",title:"Listen Erzeugen",description:"Oft w\xfcnscht man Listen, welche schon mit bestimmten Werten abgef\xfcllt sind, man sagt initialisiert sind.",source:"@site/docs/EF-Python/03-Python/03-Listcomprehension.md",sourceDirName:"EF-Python/03-Python",slug:"/EF-Python/Python/Listcomprehension",permalink:"/EF-Python/Python/Listcomprehension",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/03-Python/03-Listcomprehension.md",tags:[],version:"current",lastUpdatedAt:1663329869,formattedLastUpdatedAt:"16. Sept. 2022",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"de38c04c-c7b6-4565-8778-dffc4686b4c2",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/11"}},sidebar:"sidebar",previous:{title:"Listen 2D",permalink:"/EF-Python/Python/Listen-2D"},next:{title:"Referenzen",permalink:"/EF-Python/Python/referenzen/"}},p={},l=[{value:"Listen mit <code>range</code> erzeugen",id:"listen-mit-range-erzeugen",level:3},{value:"Listen mit <em>List Comprehension</em> erzeugen",id:"listen-mit-list-comprehension-erzeugen",level:3}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},o=d("Comment"),c=d("Answer"),N=d("Solution"),k={toc:l};function v(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"listen-erzeugen"},"Listen Erzeugen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(c,{type:"state",webKey:"a4fb080a-8feb-443d-bf2d-5d7ddc92f685",mdxType:"Answer"}),"Oft w\xfcnscht man Listen, welche schon mit bestimmten Werten abgef\xfcllt sind, man sagt initialisiert sind.",(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unten sehen Sie ein paar hilfreiche Beispiele. F\xfchren Sie diese aus und bearbeiten Sie die Aufgabe."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Markieren Sie anschliessend diese Aufgabe als erledigt."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Hier sehen Sie, wie man auf einfache Art und Weise eine Liste erzeugen und gleich mit bestimmten Werten f\xfcllen kann, man sagt ",(0,i.kt)("strong",{parentName:"p",className:"underline"},"intialisieren"),". Der Teil zwischen den ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," wird als Listen-Abstraktion (englisch ",(0,i.kt)("strong",{parentName:"p"},"list comprehension"),") bezeichnet."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"listen-mit-range-erzeugen"},"Listen mit ",(0,i.kt)("inlineCode",{parentName:"h3"},"range")," erzeugen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Mit dem von Schleifen bekannten ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," Befehl k\xf6nnen auch Listen erzeugt werden."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"range(max_zahl)")),(0,i.kt)("dd",{parentName:"dl"},"erzeugt einen Bereich von ",(0,i.kt)("inlineCode",{parentName:"dd"},"0")," bis (ohne mit!) ",(0,i.kt)("inlineCode",{parentName:"dd"},"max_zahl")),(0,i.kt)("dd",{parentName:"dl"},"z.B. ",(0,i.kt)("inlineCode",{parentName:"dd"},"range(5)")," => ",(0,i.kt)("inlineCode",{parentName:"dd"},"0, 1, 2, 3, 4")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"range(start, m)")),(0,i.kt)("dd",{parentName:"dl"},"erzeugt einen Bereich von ",(0,i.kt)("inlineCode",{parentName:"dd"},"start")," bis (ohne mit!) ",(0,i.kt)("inlineCode",{parentName:"dd"},"m")),(0,i.kt)("dd",{parentName:"dl"},"z.B. ",(0,i.kt)("inlineCode",{parentName:"dd"},"range(3, 7)")," => ",(0,i.kt)("inlineCode",{parentName:"dd"},"3, 4, 5, 6")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"range(s, m, schritt)")),(0,i.kt)("dd",{parentName:"dl"},"erzeugt einen Bereich von ",(0,i.kt)("inlineCode",{parentName:"dd"},"s")," bis (ohne mit!) ",(0,i.kt)("inlineCode",{parentName:"dd"},"m")," mit der gegebenen Schrittweite ",(0,i.kt)("inlineCode",{parentName:"dd"},"schritt")),(0,i.kt)("dd",{parentName:"dl"},"z.B. ",(0,i.kt)("inlineCode",{parentName:"dd"},"range(3, 13, 4)")," => ",(0,i.kt)("inlineCode",{parentName:"dd"},"3, 7, 11"))),(0,i.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Um aus einem Bereich (sog. ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),") eine Liste zu erzeugen, muss der Bereich mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"list()")," in eine Liste umgewandelt werden:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"one2ten = list(range(1, 11))\nprint('1 bis 10:', one2ten)\n\nodd_numbers = list(range(1, 20, 2))\nprint('Ungerade Zahlen:', odd_numbers)\n\nten2zero = list(range(10, -1, -1))\nprint('Von Zehn r\xfcckw\xe4rts:', ten2zero)\n")))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"listen-mit-list-comprehension-erzeugen"},"Listen mit ",(0,i.kt)("em",{parentName:"h3"},"List Comprehension")," erzeugen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"# Wert 1 in Liste setzen\n#     \\    ...f\xfcr alle Zahlen im Bereich 0 bis 10\n#      \\       /\nones = [1 for i in range(10)]\nprint(ones)\n")))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"liste-mit-1-initialisieren"},"Liste mit ",(0,i.kt)("inlineCode",{parentName:"h3"},"1")," initialisieren"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Liste mit 10 Elementen. Alle enthalten den Wert 1."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"# Wert 1 in Liste setzen\n#     \\    ...f\xfcr alle Zahlen im Bereich 0 bis 10\n#      \\       /\nones = [1 for i in range(10)]\nprint(ones)\n")))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"zahlen-von-0-bis-9"},"Zahlen von 0 bis 9"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Liste mit den Zahlen 0 bis 9 initialisieren:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"#  Aktuellen Wert des Schleifenz\xe4hlers i setzen\n#       \\    ...f\xfcr alle Zahlen im Bereich 0 bis 10\n#        \\       /\nzahlen = [i for i in range(10)]\nprint(zahlen)\n")))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"gerade-zahlen"},"Gerade Zahlen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Liste mit 10 geraden Zahlen, beginnend bei 0."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"gerade_zahlen = [2*i for i in range(10)]\nprint(gerade_zahlen)\n")))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(c,{type:"state",webKey:"306506df-f70e-4325-a3fd-30430288c666",mdxType:"Answer"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Initialisieren Sie mit ",(0,i.kt)("em",{parentName:"p"},"List Comprehension")," eine Liste mit den"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ersten zehn Quadratzahlen"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ersten zehn Zweierpotenzen"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"die Zweierpotenzen von ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"100"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{100}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"0")))))))))))))," bis ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"110"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{110}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"0")))))))))))))),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"die nat\xfcrlichen Zahlen r\xfcckw\xe4rts von 20 bis und mit 10"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=ab9518d2-b113-41da-9d1f-cd48f475c1fc",live_py:!0,id:"ab9518d2-b113-41da-9d1f-cd48f475c1fc"},"squares = [] # initialisierung anpassen!\npower2 = []\npower2_100 = []\ntwenty2ten = []\n\nprint(squares)\nprint(power2)\nprint(power2_100)\nprint(twenty2ten)\n")),(0,i.kt)(N,{webKey:"b54e6cc1-6863-4bcc-86a7-bfeb328b2a7b",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"squares = [x*x for x in range(10)]\npower2 = [2**x for x in range(10)]\npower2_100 = [2**(x+100) for x in range(10)]\ntwenty2ten = [20 - x for x in range(11)]\n\nprint(squares)\nprint(power2)\nprint(power2_100)\nprint(twenty2ten)\n"))))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"5x10-matrix"},(0,i.kt)("inlineCode",{parentName:"h3"},"5x10"),"-Matrix"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"5x10"),"-Matrix von lauter ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (5 Zeilen, 10 Spalten)"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"_print = print\ndef print(mat):\n    if type(mat).__name__ != 'list' or len(mat) < 1 or type(mat[0]).__name__ != 'list':\n        return _print(mat)\n    max_val = max([max(z) for z in mat])\n    pad_sz = len(str(max_val))\n    _print('['); [_print(f'  [{\", \".join(list(map(lambda v: str(v).rjust(pad_sz, \" \"), z)))}],') for z in mat]; _print(']')\n### PRE\nzeros_5x10 = [\n    [0 for j in range(10)] for i in range(5)\n]\nprint(zeros_5x10)\n")))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"5x10-matrix-durchnummeriert"},(0,i.kt)("inlineCode",{parentName:"h3"},"5x10"),"-Matrix, Durchnummeriert"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Elemente haben aufsteigende Werte, beginnend bei ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nDer"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"_print = print\ndef print(mat):\n    if type(mat).__name__ != 'list' or len(mat) < 1 or type(mat[0]).__name__ != 'list':\n        return _print(mat)\n    max_val = max([max(z) for z in mat])\n    pad_sz = len(str(max_val))\n    _print('['); [_print(f'  [{\", \".join(list(map(lambda v: str(v).rjust(pad_sz, \" \"), z)))}],') for z in mat]; _print(']')\n### PRE\nmatrix = [\n    [i * 10 + j for j in range(10)] for i in range(5)\n]\nprint(matrix)\n")))))}v.isMDXComponent=!0}}]);