(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return c}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return d}),n.d(e,"l",function(){return f}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});n(138),n(240),n(28),n(39),n(57),n(55),n(247),n(227),n(56);var i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,a=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",s=o(t);return r.test(s)?t:s+".html"+n}function p(t,e){var n=t.hash,s=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=o(e),s=0;s<t.length;s++)if(o(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:h(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var s=n.pages,r=n.themeConfig,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map(function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map(function(e){return t(e,n,i,s+1)}),collapsable:!1!==e.collapsable}}(t,s,u)}):[]}return[]}function g(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},227:function(t,e,n){"use strict";var i=n(8),s=n(20),r=n(135),a=n(136);n(137)("match",1,function(t,e,n,o){return[function(n){var i=t(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=i(t),u=String(this);if(!l.global)return a(l,u);var c=l.unicode;l.lastIndex=0;for(var h,p=[],d=0;null!==(h=a(l,u));){var f=String(h[0]);p[d]=f,""===f&&(l.lastIndex=r(u,s(l.lastIndex),c)),d++}return 0===d?null:p}]})},228:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){},238:function(t,e,n){},240:function(t,e,n){var i=n(1);i(i.S,"Array",{isArray:n(139)})},241:function(t,e,n){"use strict";var i=n(226),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(243).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(242).default},methods:{isActive:i.e}},r=(n(262),n(38)),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null);e.a=a.exports},242:function(t,e,n){"use strict";n.r(e);n(133);var i=n(241),s=n(244),r=n(226);var a={name:"SidebarLinks",components:{SidebarGroup:i.a,SidebarLink:s.a},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return"page"===e.type&&Object(r.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},o=n(38),l=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=l.exports},243:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(256),n(38)),r=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=r.exports},244:function(t,e,n){"use strict";n(55),n(260),n(133);var i=n(226);function s(t,e,n,s,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(t){Object(i.e)(s,n+"#"+t.slug)}))}var r={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),o=n.$themeConfig,l=n.$themeLocaleConfig,u=e.props,c=u.item,h=u.sidebarDepth,p=Object(i.e)(a,c.path),d="auto"===c.type?p||c.children.some(function(t){return Object(i.e)(a,c.basePath+"#"+t.slug)}):p,f="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):function(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}(t,c.path,c.title||c.path,d),g=[r.frontmatter.sidebarDepth,h,l.sidebarDepth,o.sidebarDepth,1].find(function(t){return void 0!==t}),v=l.displayAllHeaders||o.displayAllHeaders;return"auto"===c.type?[f,s(t,c.children,c.basePath,a,g)]:(d||v)&&c.headers&&!i.d.test(c.path)?[f,s(t,Object(i.c)(c.headers),c.path,a,g)]:f}},a=(n(261),n(38)),o=Object(a.a)(r,void 0,void 0,!1,null,null,null);e.a=o.exports},245:function(t,e,n){"use strict";n(246)("link",function(t){return function(e){return t(this,"a","href",e)}})},246:function(t,e,n){var i=n(1),s=n(16),r=n(27),a=/"/g,o=function(t,e,n,i){var s=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},247:function(t,e,n){"use strict";var i=n(134),s=n(8),r=n(248),a=n(135),o=n(20),l=n(136),u=n(90),c=n(16),h=Math.min,p=[].push,d=!c(function(){RegExp(4294967295,"y")});n(137)("split",2,function(t,e,n,c){var f;return f="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(s,t,e);for(var r,a,o,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,f=new RegExp(t.source,c+"g");(r=u.call(f,s))&&!((a=f.lastIndex)>h&&(l.push(s.slice(h,r.index)),r.length>1&&r.index<s.length&&p.apply(l,r.slice(1)),o=r[0].length,h=a,l.length>=d));)f.lastIndex===r.index&&f.lastIndex++;return h===s.length?!o&&f.test("")||l.push(""):l.push(s.slice(h)),l.length>d?l.slice(0,d):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var s=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,s,i):f.call(String(s),n,i)},function(t,e){var i=c(f,t,this,e,f!==n);if(i.done)return i.value;var u=s(t),p=String(this),g=r(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),b=new g(d?u:"^(?:"+u.source+")",m),_=void 0===e?4294967295:e>>>0;if(0===_)return[];if(0===p.length)return null===l(b,p)?[p]:[];for(var k=0,x=0,C=[];x<p.length;){b.lastIndex=d?x:0;var $,y=l(b,d?p:p.slice(x));if(null===y||($=h(o(b.lastIndex+(d?0:x)),p.length))===k)x=a(p,x,v);else{if(C.push(p.slice(k,x)),C.length===_)return C;for(var w=1;w<=y.length-1;w++)if(C.push(y[w]),C.length===_)return C;x=k=$}}return C.push(p.slice(k)),C}]})},248:function(t,e,n){var i=n(8),s=n(88),r=n(2)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||null==(n=i(a)[r])?e:s(n)}},249:function(t,e,n){"use strict";var i=n(228);n.n(i).a},250:function(t,e,n){"use strict";n(251)("trim",function(t){return function(){return t(this,3)}})},251:function(t,e,n){var i=n(1),s=n(27),r=n(16),a=n(252),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var s={},o=r(function(){return!!a[t]()||"​"!="​"[t]()}),l=s[t]=o?e(h):a[t];n&&(s[n]=l),i(i.P+i.F*o,"String",s)},h=c.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},252:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},253:function(t,e,n){"use strict";var i=n(229);n.n(i).a},254:function(t,e,n){"use strict";var i=n(230);n.n(i).a},255:function(t,e,n){var i=n(7),s=n(143),r=n(12).f,a=n(140).f,o=n(134),l=n(141),u=i.RegExp,c=u,h=u.prototype,p=/a/g,d=/a/g,f=new u(p)!==p;if(n(13)&&(!f||n(16)(function(){return d[n(2)("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),r=void 0===e;return!n&&i&&t.constructor===u&&r?t:s(f?new c(i&&!r?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&r?l.call(t):e),n?this:h,u)};for(var g=function(t){t in u||r(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},v=a(c),m=0;v.length>m;)g(v[m++]);h.constructor=u,u.prototype=h,n(21)(i,"RegExp",u)}n(142)("RegExp")},256:function(t,e,n){"use strict";var i=n(231);n.n(i).a},257:function(t,e,n){"use strict";var i=n(232);n.n(i).a},258:function(t,e,n){"use strict";var i=n(233);n.n(i).a},259:function(t,e,n){"use strict";var i=n(234);n.n(i).a},260:function(t,e,n){"use strict";var i=n(1),s=n(40)(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),i(i.P+i.F*r,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(89)("find")},261:function(t,e,n){"use strict";var i=n(235);n.n(i).a},262:function(t,e,n){"use strict";var i=n(236);n.n(i).a},263:function(t,e,n){"use strict";var i=n(237);n.n(i).a},264:function(t,e,n){"use strict";var i=n(238);n.n(i).a},266:function(t,e,n){"use strict";n.r(e);n(39),n(87),n(133),n(245);var i=n(226),s={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},r=n(38),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:a},created:function(){},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(249),Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),u=(n(227),n(28),n(240),n(138),n(250),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],r=0;r<e.length&&!(s.length>=5);r++){var a=e[r];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))s.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(s.length>=5);o++){var l=a.headers[o];i(l)&&s.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),c=(n(253),Object(r.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),h=(n(254),Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),p=(n(255),n(52)),d=(n(56),n(55),{components:{NavLink:a,DropdownTransition:n(243).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),f=(n(257),{components:{NavLink:a,DropdownLink:Object(r.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some(function(t){return t.path===a})||(a=r)),{text:l,link:a}})};return[].concat(Object(p.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),g=(n(258),Object(r.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:g,SearchBox:c,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},b=(n(259),Object(r.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports),_=n(241),k=n(244);function x(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[s+n]}}var C={props:["sidebarItems","item","open","collapsable","depth"],created:function(){console.log("sidebarItems",this.$page)},components:{SidebarGroup:_.a,SidebarLink:k.a},data:function(){return{}},computed:{title:function(){return console.log("title",this.$page.title),this.$page.title},headers:function(){return console.log("title",this.$page.title),this.$page.headers},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,x(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,x(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,r=t.docsBranch,a=void 0===r?"master":r,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,s,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{renderLink:function(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)},renderChildren:function(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(t){isActive(i,n+"#"+t.slug)}))},createEditLink:function(t,e,n,s,r){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r}}},$=(n(263),Object(r.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"row theme-gitfe-page"},[n("div",{staticClass:"col-md-10"},[n("Content",{staticClass:"theme-gitfe-content"})],1),t._v(" "),n("div",{staticClass:"col-md-2"},[n("div",{staticClass:"gitfe-page-toc"},[n("ul",{staticClass:"sidebar-links theme-gitfe-page-sider sidebar-sub-header"},t._l(t.headers,function(e){return n("li",[n("router-link",{attrs:{"active-class":"current",to:"#"+e.title}},[t._v(t._s(e.title))])],1)}),0)])])]),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),y={name:"Sidebar",components:{SidebarLinks:n(242).default,NavLinks:g},props:["items"]},w=(n(264),{components:{Home:l,Page:$,Sidebar:Object(r.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:b},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),L=Object(r.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null);e.default=L.exports}}]);