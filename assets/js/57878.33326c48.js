"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57878],{13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,c=void 0!==u&&u,a=i.absolute,f=void 0!==a&&a;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return f?e+l:l}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},24608:function(e,t,n){n.r(t);var r=n(67294),o=n(11022),i=n(95999);t.default=function(){return r.createElement(o.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},21314:function(e,t,n){n.d(t,{oR:function(){return u},ky:function(){return c},RN:function(){return a},aV:function(){return f}});var r=n(68949),o=n(67294),i=n(47678),u=function(e){return o.useContext(i.Nx)[e]},c=function(e,t,n,u,c,a){var f=o.useState(!1),l=f[0],s=f[1];o.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,n,u,c,a).finally((function(){s(!0)}))}),[]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){l&&r&&i.Ux.documentStore.provideDocument(e(),t,n,u,c,a,!0)}))}),[l]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){l&&!r&&i.Ux.documentStore.provideDocument(e(),t,n,u,c,a,!0)}))}),[l])},a=function(e){var t=o.useState(!1),n=t[0],u=t[1];o.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){u(!0)}))}),[]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])},f=function(e){var t=o.useState(!1),n=t[0],u=t[1];o.useEffect((function(){i.Ux.policyStore.provideAuthorization(e,!1).finally((function(){u(!0)}))}),[]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(t,r){n&&t&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n]),o.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&i.Ux.policyStore.provideAuthorization(e,!0)}))}),[n])}},64622:function(e,t,n){n.d(t,{Z:function(){return p}});var r,o=n(67294),i=n(42207),u=n(21314),c=n(73727),a=n(52263),f=n(10412),l=n(71217),s=n(86010),d="navBadge_3ua7",m="userBadge_3R-z",p=(r=i.Z,(0,l.Pi)((function(e){if(!f.Z.canUseDOM)return o.createElement(r,e);var t=(0,u.oR)("userStore"),n=function(e){return e.find((function(e){return e.path.length>1&&window.location.pathname.startsWith(e.path)}))}((0,a.Z)().globalData["docusaurus-plugin-content-docs"].default.versions);return"login"===e.to&&t.current?t.current.admin?o.createElement("div",{className:(0,s.default)(d,"dropdown","dropdown--hoverable")},o.createElement("button",{className:(0,s.default)("badge",t.isMyView?"badge--primary":"badge--warning")},t.currentView.name),o.createElement("ul",{className:"dropdown__menu"},t.byClass(null==n?void 0:n.name).map((function(e,n){return o.createElement("li",{key:n,onClick:function(){return t.setView(e)}},o.createElement("div",{className:(0,s.default)(m,"badge","badge--secondary","dropdown__link")},e.name))})))):o.createElement(c.rU,{to:"/"+e.to,className:"badge badge--primary margin--xs"},o.createElement("span",null,t.current.name)):o.createElement(r,e)})))}}]);