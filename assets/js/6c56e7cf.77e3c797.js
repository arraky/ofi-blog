"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56338],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},497212:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(583117),i=t(480102),a=(t(667294),t(603905)),o=["components"],s={title:"Benutzerverwaltung"},u="Benutzerverwaltung [^1]",l={unversionedId:"Computer/os/Material/benutzerverwaltung",id:"Computer/os/Material/benutzerverwaltung",title:"Benutzerverwaltung",description:"Wenn ein Computer von mehr als einer Person benutzt werden kann, so ist es wichtig, dass die Daten der einzelnen Benutzerinnen\\* gesch\xfctzt sind und die Benutzerinnen einander nicht st\xf6ren k\xf6nnen.",source:"@site/docs/Computer/04-os/Material/10-benutzerverwaltung.md",sourceDirName:"Computer/04-os/Material",slug:"/Computer/os/Material/benutzerverwaltung",permalink:"/Computer/os/Material/benutzerverwaltung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/04-os/Material/10-benutzerverwaltung.md",tags:[],version:"current",lastUpdatedAt:1647182962,formattedLastUpdatedAt:"13.3.2022",sidebarPosition:10,frontMatter:{title:"Benutzerverwaltung"},sidebar:"sidebar",previous:{title:"3. Freie Open Source Software",permalink:"/Computer/os/foss"},next:{title:"Vom USB-Stick starten",permalink:"/Computer/praktikum/os-from-usb"}},c={},d=[],m={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benutzerverwaltung-"},"Benutzerverwaltung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Wenn ein Computer von mehr als einer Person benutzt werden kann, so ist es wichtig, dass die Daten der einzelnen Benutzerinnen","*"," gesch\xfctzt sind und die Benutzerinnen einander nicht st\xf6ren k\xf6nnen. "),(0,a.kt)("p",null,"F\xfcr jede Benutzerin braucht es einen isolierten Bereich, in welcher sie ihre Dateien speichern kann und welcher von den anderen Benutzerinnen nicht eingesehen werden kann, es sei denn, sie h\xe4tten dazu die n\xf6tigen Berechtigungen erhalten."),(0,a.kt)("p",null,"Betriebssysteme arbeiten zu diesem Zweck mit Benutzerkonten. F\xfcr jede Benutzerin braucht es ein eigenes Benutzerkonto. Dieses umfasst einen Benutzernamen, ein Passwort oder PIN und ein privater Ordner f\xfcr Dokumente etc."),(0,a.kt)("p",null,"Um die Daten einer Benutzerin vor unerlaubtem Zugriff zu sch\xfctzen, ordnet das Betriebssystem, genauer das Dateisystem, jedem Ordner und jeder Datei eine Benutzerin als Eigent\xfcmerin zu. Diese kann dann mit dem Ordner oder der Datei machen, was immer sie will (\xf6ffnen, bearbeiten, den Namen \xe4ndern, verschieben, l\xf6schen, etc.). Ausserdem k\xf6nnen auf einer Datei, oder einem Ordner Berechtigungen f\xfcr weitere Benutzerinnen angelegt werden, so dass auch diese mit der Datei, oder dem Ordner bestimmte Aktionen durchf\xfchren k\xf6nnen (lesen, bearbeiten, etc.).\nBetriebssysteme unterscheiden mindestens zwei Kategorien von Benutzerkonten: Administratorinnen und normale Benutzerinnen. Erstere k\xf6nnen auf einem Computer alles machen. Sie k\xf6nnen neue Benutzerkonten einrichten, bestehende l\xf6schen, den Zugang zu Ordnern und Dateien freigeben und sperren, oder auch neue Programme f\xfcr alle Benutzerinnen installieren."),(0,a.kt)("p",null,"Wer \xfcber ein Administratorkonto auf einem Rechner verf\xfcgt, beherrscht diesen Computer. Deshalb ist es so wichtig, dass dieses Konto, welches auf jedem Computer existiert, sehr gut gesch\xfctzt ist (z.B. durch ein starkes Passwort). \xdcblicherweise ist das Administratorkonto dasjenige, welches beim Installieren des Betriebssystems, oder beim erstmaligen Benutzen des Computers, angelegt wird.\nNormale Benutzerkonten erlauben das Benutzen des Computers f\xfcr die \xfcblichen Arbeiten (Dokumente erstellen, bearbeiten, im Internet surfen, etc.). Man sollte aus Sicherheitsgr\xfcnden auch auf einem nur pers\xf6nlich genutzten Computer immer ein normales Benutzerkonto einrichten, mit welchem man arbeitet. "),(0,a.kt)("p",null,"*"," Es sind explizit auch Benutzer gemeint."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: A. Scheidegger",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);