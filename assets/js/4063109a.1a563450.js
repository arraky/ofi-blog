"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8471],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>D});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):M(M({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(i),D=r,u=c["".concat(o,".").concat(D)]||c[D]||N[D]||s;return i?n.createElement(u,M(M({ref:t},d),{},{components:i})):n.createElement(u,M({ref:t},d))}));function D(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,M=new Array(s);M[0]=c;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,M[1]=a;for(var l=2;l<s;l++)M[l]=i[l];return n.createElement.apply(null,M)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},65648:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(91189),r=i(67294),s=i(92814);const M="videoComponent_YfiL",a="headerClosed_s_Of",o="headerOpen_AzNA",l="minimize_pBQC",d="description_p2GN",N="title_YxV5",c="cardOpen_IEP6";var D=i(51436),u=i(86010);class g extends r.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",r.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:i}=e,{innerHeight:n}=window;t<n&&i>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:i,children:n}=this.props;return r.createElement("div",{ref:this.videoRef,className:M},this.state.open?r.createElement("div",{className:c},r.createElement("div",{className:o},e&&r.createElement("h5",{className:N},e),!this.props.expanded&&r.createElement("button",{className:(0,u.default)("button button--sm button--outline button--secondary",l),onClick:this.onClick},r.createElement(s.G,{icon:D.IQi})),n&&r.createElement("div",{className:d},n)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:"video/"+(i||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:D.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:a},r.createElement("div",{className:N},e||"Video"),n&&r.createElement("div",{className:d},n)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:"video/"+(i||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(s.G,{icon:D.IJ7,spin:!0}))))}}},92417:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>N});var n=i(83117),r=(i(67294),i(3905)),s=i(65648),M=i(44996);const a={title:"Cloud"},o="Cloud [^1]",l={unversionedId:"byod-basics/v25/ICT/Grundlegendes/cloud",id:"byod-basics/v25/ICT/Grundlegendes/cloud",title:"Cloud",description:"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.",source:"@site/docs/byod-basics/v25/002-ICT/1-Grundlegendes/5-cloud.mdx",sourceDirName:"byod-basics/v25/002-ICT/1-Grundlegendes",slug:"/byod-basics/v25/ICT/Grundlegendes/cloud",permalink:"/byod-basics/v25/ICT/Grundlegendes/cloud",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/002-ICT/1-Grundlegendes/5-cloud.mdx",tags:[],version:"current",lastUpdatedAt:1628779469,formattedLastUpdatedAt:"12. Aug. 2021",sidebarPosition:5,frontMatter:{title:"Cloud"},sidebar:"sidebar",previous:{title:"E-Mail",permalink:"/byod-basics/v25/ICT/Grundlegendes/E-Mail"},next:{title:"Sicherheit",permalink:"/category/sicherheit-1"}},d={},N=[{value:"Desktop-App",id:"desktop-app",level:2},{value:"Web-App",id:"web-app",level:2},{value:"Microsoft 365",id:"microsoft-365",level:2},{value:"OneDrive im Browser",id:"onedrive-im-browser",level:3},{value:"Teams-App",id:"teams-app",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},D=c("Figure"),u=c("SourceRef"),g={toc:N};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-"},"Cloud ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.\n\xdcblicherweise steht auf dem Server ebenfalls eine ",(0,r.kt)("a",{parentName:"p",href:"#Web-App"},"Web-App")," zu Verf\xfcgung, damit die Dateien im Browser betrachtet oder bearbeitet werden k\xf6nnen."),(0,r.kt)("h2",{id:"desktop-app"},"Desktop-App"),(0,r.kt)("p",null,"Damit die Desktop-App verwendet werden kann, muss diese erst auf dem Ger\xe4t installiert worden sein. Desktop-Apps bieten meistens einen gr\xf6sseren Funktionsumfang, k\xf6nnen ohne aktive Internetverbindung gestartet und verwendet werden und sind meist performanter."),(0,r.kt)("h2",{id:"web-app"},"Web-App"),(0,r.kt)("p",null,"Die Web-App wird beim \xd6ffnen des Dokuments vom Server des Anbieters heruntergeladen und im Browser (daher auf dem Prozessor des Laptops) ausgef\xfchrt."),(0,r.kt)(D,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Web-App Architektur",src:i(32330).Z,width:"640",height:"288"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Web-App Architektur",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(u,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/ict/writing/images/cloud-app.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Einzelne Berechnungen k\xf6nnen auch in die Cloud ausgelagert werden, z.B. die Autokorrektur in der Word Web-App:\nBei jeder \xc4nderung wird der aktuelle Abschnitt an die Cloud geschickt und auf Fehler \xfcberpr\xfcft:"),(0,r.kt)(s.Z,{src:(0,M.Z)("/video/cloud-webapp-word-autokorrektur.mp4"),title:"Autokorrektur in Word Onine",expanded:!0,mdxType:"Video"},(0,r.kt)("p",null,"Auf der rechten Seite ist der Datenaustausch, der f\xfcr die Autokorrektur notwendig ist, ",(0,r.kt)("strong",{parentName:"p"},"vom Laptop zur Cloud")," zu sehen. Bei ",(0,r.kt)("strong",{parentName:"p"},"jeder \xc4nderung")," des Dokuments wird der ",(0,r.kt)("strong",{parentName:"p"},"ganze Inhalt")," des aktuellen Abschnitts an die Cloud geschickt.")),(0,r.kt)("p",null,"Web-Apps brauchen eine ",(0,r.kt)("strong",{parentName:"p"},"aktive Internetverbindung")," und sind oft auch etwas langsamer als Desktop-Apps. Meist ist zudem der Funktionsumfang eingeschr\xe4nkt."),(0,r.kt)("h2",{id:"microsoft-365"},"Microsoft 365"),(0,r.kt)("h3",{id:"onedrive-im-browser"},"OneDrive im Browser"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"OneDrive im Browser")," kann eine Datei wahlweise in der Web-App oder in der Desktop-App ge\xf6ffnet werden. Mit einem Doppelklick wird die Datei in der Web-App ge\xf6ffnet. Klicke auf die drei vertikalen Punkte ",(0,r.kt)("inlineCode",{parentName:"p"},"\u22ee"),", dann auf \xd6ffnen und In der App \xf6ffnen, um die Datei in der Desktop-App zu \xf6ffnen."),(0,r.kt)(D,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:i(78260).Z,width:"822",height:"200"})),(0,r.kt)("h2",{id:"teams-app"},"Teams-App"),(0,r.kt)(D,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:i(37093).Z,width:"814",height:"146"})),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle (Bearbeitete): ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/writing/2-0-cloud"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},32330:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjI4OHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNNDUwLjU4Myw0Ni40NjRDNDUwLjU4MywyOS42ODMgNDYzLjc2NCwxNi4wNTkgNDgwLDE2LjA1OUM0OTYuMjM2LDE2LjA1OSA1MDkuNDE3LDI5LjY4MyA1MDkuNDE3LDQ2LjQ2NEM1MTguODU5LDMxLjkzMSA1MzcuOTQsMjUuOTg5IDU1MiwzMy4yMDNDNTY2LjA2LDQwLjQxOCA1NjkuODEsNTguMDc0IDU2MC4zNjksNzIuNjA3QzU3Ni43MjIsNjQuMjE2IDU5Ni41OSw2Ny41NDkgNjA0LjcwOCw4MC4wNDRDNjEyLjgyNSw5Mi41MzkgNjA2LjEzOSwxMDkuNDk2IDU4OS43ODYsMTE3Ljg4N0M2MDguNjY5LDExNy44ODcgNjI0LDEyOS42MDEgNjI0LDE0NC4wMjlDNjI0LDE1OC40NTggNjA4LjY2OSwxNzAuMTcyIDU4OS43ODYsMTcwLjE3MkM2MDYuMTM5LDE3OC41NjIgNjEyLjgyNSwxOTUuNTE5IDYwNC43MDgsMjA4LjAxNUM1OTYuNTksMjIwLjUxIDU3Ni43MjIsMjIzLjg0MiA1NjAuMzY5LDIxNS40NTJDNTY5LjgxLDIyOS45ODUgNTY2LjA2LDI0Ny42NDEgNTUyLDI1NC44NTVDNTM3Ljk0LDI2Mi4wNjkgNTE4Ljg1OSwyNTYuMTI3IDUwOS40MTcsMjQxLjU5NEM1MDkuNDE3LDI1OC4zNzYgNDk2LjIzNiwyNzIgNDgwLDI3MkM0NjMuNzY0LDI3MiA0NTAuNTgzLDI1OC4zNzYgNDUwLjU4MywyNDEuNTk0QzQ0MS4xNDEsMjU2LjEyNyA0MjIuMDYsMjYyLjA2OSA0MDgsMjU0Ljg1NUMzOTMuOTQsMjQ3LjY0MSAzOTAuMTksMjI5Ljk4NSAzOTkuNjMxLDIxNS40NTJDMzgzLjI3OCwyMjMuODQyIDM2My40MSwyMjAuNTEgMzU1LjI5MiwyMDguMDE1QzM0Ny4xNzUsMTk1LjUxOSAzNTMuODYxLDE3OC41NjIgMzcwLjIxNCwxNzAuMTcyQzM1MS4zMzEsMTcwLjE3MiAzMzYsMTU4LjQ1OCAzMzYsMTQ0LjAyOUMzMzYsMTI5LjYwMSAzNTEuMzMxLDExNy44ODcgMzcwLjIxNCwxMTcuODg3QzM1My44NjEsMTA5LjQ5NiAzNDcuMTc1LDkyLjUzOSAzNTUuMjkyLDgwLjA0NEMzNjMuNDEsNjcuNTQ5IDM4My4yNzgsNjQuMjE2IDM5OS42MzEsNzIuNjA3QzM5MC4xOSw1OC4wNzQgMzkzLjk0LDQwLjQxOCA0MDgsMzMuMjAzQzQyMi4wNiwyNS45ODkgNDQxLjE0MSwzMS45MzEgNDUwLjU4Myw0Ni40NjRaIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgPHRleHQgeD0iNDU0LjA4N3B4IiB5PSI2NC43MzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+Q2xvdWQ8L3RleHQ+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSI0MTYiIHk9IjE4NC4wNTkiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDMwLjcxMXB4IiB5PSIyMDcuMDQ2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPm1laW5lIERhdGVpPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTMyMCwzMkMzMjAsMjMuMTY5IDMxMi44MzEsMTYgMzA0LDE2TDMyLDE2QzIzLjE2OSwxNiAxNiwyMy4xNjkgMTYsMzJMMTYsMTYwQzE2LDE2OC44MzEgMjMuMTY5LDE3NiAzMiwxNzZMMzA0LDE3NkMzMTIuODMxLDE3NiAzMjAsMTY4LjgzMSAzMjAsMTYwTDMyMCwzMloiIHN0eWxlPSJmaWxsOnJnYigxNzYsMTkwLDE5Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIxMzcuMDMzcHgiIHk9IjM5LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5MYXB0b3A8L3RleHQ+CiAgICA8ZyBpZD0iQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMTI4LDczLjcwNUMxMjgsNjguNDE0IDEyMy43MDQsNjQuMTE3IDExOC40MTIsNjQuMTE3TDQxLjU4OCw2NC4xMTdDMzYuMjk2LDY0LjExNyAzMiw2OC40MTQgMzIsNzMuNzA1TDMyLDE1MC40MTJDMzIsMTU1LjcwNCAzNi4yOTYsMTYwIDQxLjU4OCwxNjBMMTE4LjQxMiwxNjBDMTIzLjcwNCwxNjAgMTI4LDE1NS43MDQgMTI4LDE1MC40MTJMMTI4LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNjIuNDQxcHgiIHk9Ijg3LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcHA8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQnJvd3NlciI+CiAgICAgICAgPHBhdGggZD0iTTMwNCw3My43MDVDMzA0LDY4LjQxNCAyOTkuNzA0LDY0LjExNyAyOTQuNDEyLDY0LjExN0wxNTMuNTg4LDY0LjExN0MxNDguMjk2LDY0LjExNyAxNDQsNjguNDE0IDE0NCw3My43MDVMMTQ0LDE1MC40MTJDMTQ0LDE1NS43MDQgMTQ4LjI5NiwxNjAgMTUzLjU4OCwxNjBMMjk0LjQxMiwxNjBDMjk5LjcwNCwxNjAgMzA0LDE1NS43MDQgMzA0LDE1MC40MTJMMzA0LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTg2LjcwNXB4IiB5PSI4OC4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnJvd3NlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJXZWItQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMjg4LDExNS4yNTlDMjg4LDExMy40OTIgMjg2LjU2NiwxMTIuMDU5IDI4NC44LDExMi4wNTlMMTYzLjIsMTEyLjA1OUMxNjEuNDM0LDExMi4wNTkgMTYwLDExMy40OTIgMTYwLDExNS4yNTlMMTYwLDE0MC44NTlDMTYwLDE0Mi42MjUgMTYxLjQzNCwxNDQuMDU5IDE2My4yLDE0NC4wNTlMMjg0LjgsMTQ0LjA1OUMyODYuNTY2LDE0NC4wNTkgMjg4LDE0Mi42MjUgMjg4LDE0MC44NTlMMjg4LDExNS4yNTlaIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxMzApO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjE4Mi41MTZweCIgeT0iMTMzLjE3MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5XZWItQXBwPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IldlYi1BcHAxIiBzZXJpZjppZD0iV2ViLUFwcCI+CiAgICAgICAgPHBhdGggZD0iTTU0NCwxMTUuMjI5QzU0NCwxMTMuNDYzIDU0Mi41NjYsMTEyLjAyOSA1NDAuOCwxMTIuMDI5TDQxOS4yLDExMi4wMjlDNDE3LjQzNCwxMTIuMDI5IDQxNiwxMTMuNDYzIDQxNiwxMTUuMjI5TDQxNiwxNDAuODI5QzQxNiwxNDIuNTk1IDQxNy40MzQsMTQ0LjAyOSA0MTkuMiwxNDQuMDI5TDU0MC44LDE0NC4wMjlDNTQyLjU2NiwxNDQuMDI5IDU0NCwxNDIuNTk1IDU0NCwxNDAuODI5TDU0NCwxMTUuMjI5WiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MzguNTE2cHgiIHk9IjEzMy4xNzFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+V2ViLUFwcDwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik00MDMuOTk5LDIwMi4wMDJMNDE2LDIwOEw0MDQuMDAxLDIxNC4wMDJDNDA3LjAwMSwyMTEuMDAyIDQwNi45OTksMjA1LjAwMiA0MDMuOTk5LDIwMi4wMDJaIi8+CiAgICA8cGF0aCBkPSJNODAsMTYwLjA1OUw4MCwyMDguMDU5QzgwLDIwOC4wNTkgMzUxLjUyMywyMDguMDExIDQwNi40LDIwOC4wMDIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8cGF0aCBkPSJNMzAwLDEzNC4wMjlMMjg4LDEyOC4wMjlMMzAwLDEyMi4wMjlDMjk3LDEyNS4wMjkgMjk3LDEzMS4wMjkgMzAwLDEzNC4wMjlaIi8+CiAgICA8cGF0aCBkPSJNNDE2LDEyOC4wMjlMMjk3LjYsMTI4LjAyOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxwYXRoIGQ9Ik00MDQsMTg2TDQxNiwxOTJMNDA0LDE5OEM0MDcsMTk1IDQwNywxODkgNDA0LDE4NloiLz4KICAgIDxwYXRoIGQ9Ik0yMjQsMTQ0LjA1OUwyMjQsMTkyTDQwNi40LDE5MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KPC9zdmc+Cg=="},78260:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/onedrive-open-64614cd17252de6f9eee8e961b1081ef.png"},37093:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/teams-open-7af7b912b0949a4680003cee7244d493.png"}}]);