(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5769)}])},7753:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(e){var t,r=e.src,i=e.webp,c=e.width,s=e.height,l=e.alt,u=e.loading,p=e.imgClassName,f=o(e,["src","webp","width","height","alt","loading","imgClassName"]);return(0,n.jsxs)("picture",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,{children:[i?(0,n.jsx)("source",{srcSet:i,type:"image/webp"}):null,(0,n.jsx)("img",{src:r,title:null!==(t=f.title)&&void 0!==t?t:l,width:c,height:s,alt:l,loading:u,className:p})]}))}},759:function(e,t,r){"use strict";function n(e,t){return JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:e,item:"https://mockupyour.app"+t}]})}r.d(t,{t:function(){return n},R:function(){return a}});var a=function(e){var t=e.ratingValue,n=e.ratingCount;return JSON.stringify({"@context":"https://schema.org","@type":["VideoGame","SoftwareApplication"],name:"Counter-Strike 1.6",image:r(2162),author:{"@type":"Organization",name:"Valve",url:"https://www.valvesoftware.com"},publisher:"Valve",genre:["Action (Shooter)","3D","1st Person"],operatingSystem:"Windows",applicationCategory:"GameApplication",softwareVersion:"1.6",aggregateRating:{"@type":"AggregateRating",ratingValue:t,ratingCount:n},offers:{"@type":"Offer",price:"0"}})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},c=r(6273),s=r(387),l=r(7190);var u={};function p(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),o=i.default.useMemo((function(){var t=a(c.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,m=o.as,h=e.children,d=e.replace,g=e.shallow,y=e.scroll,x=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,v=a(l.useIntersection({rootMargin:"200px"}),2),w=v[0],j=v[1],k=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=j&&r&&c.isLocalURL(f),t="undefined"!==typeof x?x:n&&n.locale,a=u[f+"%"+m+(t?"%"+t:"")];e&&!a&&p(n,f,m,{locale:t})}),[m,f,j,x,r,n]);var A={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:i}))}(e,n,f,m,d,g,y,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(f)&&p(n,f,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof x?x:n&&n.locale,O=n&&n.isLocaleDomain&&c.getDomainLocale(m,S,n&&n.locales,n&&n.domainLocales);A.href=O||c.addBasePath(c.addLocale(m,S,n&&n.defaultLocale))}return i.default.cloneElement(t,A)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=o.useRef(),l=a(o.useState(!1),2),u=l[0],p=l[1],f=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!c&&!u){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[f,u]};var o=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},5769:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),a=(r(7284),r(9008)),o=r(1163),i=r(1664),c=r(6010),s=r(7753),l=[{name:"Counter Strike 1.6 Download",href:"/"},{name:"CS 1.6 xtcs",href:"/counter-strike-1.6-xtcs-download"},{name:"CS 1.6 torrent",href:"/cs-1.6-torrent"},{name:"CS 1.6 protocol v48",href:"/cs-1.6-48-protocol"},{name:"CS 1.6 44 patch",href:"/cs-1.6-44-patch"},{name:"CS 1.6 CSGO Mod",href:"/cs-1.6-csgo-mod"},{name:"CS 1.6 for Windows 10",href:"/cs-1.6-windows-10"}];function u(){var e=(0,o.useRouter)();return(0,n.jsx)("nav",{className:"bg-red-900 overflow-x-auto sm:overflow-visible",children:(0,n.jsx)("div",{className:"max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"relative flex items-center justify-between py-5",children:(0,n.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[(0,n.jsx)("div",{className:"sm:flex-shrink-0 flex items-center",children:(0,n.jsx)(s.Z,{className:"hidden sm:block",imgClassName:"h-[50px] w-[100px] max-w-none",width:"100",height:"50",src:r(7301),webp:r(3077),alt:"counter strike game"})}),(0,n.jsx)("div",{className:"sm:ml-6",children:(0,n.jsx)("div",{className:"flex space-x-4 whitespace-nowrap sm:whitespace-normal",itemScope:!0,itemType:"https://schema.org/SiteNavigationElement",children:l.map((function(t){return(0,n.jsx)(i.default,{href:t.href,children:(0,n.jsx)("a",{itemProp:"url",className:(0,c.Z)(t.href===e.pathname?"bg-[#790c0c]":"","px-2 py-4 uppercase text-sm text-white"),"aria-current":t.href===e.pathname?"page":void 0,children:(0,n.jsx)("span",{itemProp:"name",children:t.name})})},t.href)}))})})]})})})})}var p=function(){return(0,n.jsx)("footer",{className:"bg-gray-900 border-t border-gray-700 text-gray-400",children:(0,n.jsx)("div",{className:"container mx-auto px-5",children:(0,n.jsxs)("div",{className:"py-6 flex flex-col lg:flex-row items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",itemScope:!0,itemType:"http://schema.org/Organization",children:["\xa9 All rights Reversed."," ",(0,n.jsx)("a",{className:"text-amber-300 ml-2",itemProp:"url",href:"https://mockupyour.app",children:(0,n.jsx)("span",{itemProp:"name",children:"mockupyour.app"})})]}),(0,n.jsx)("a",{target:"_blank",rel:"noopener",href:"https://www.hey.lt/details.php?id=cs16downloads",children:(0,n.jsx)("img",{width:"88",height:"31",src:"https://www.hey.lt/count.php?id=cs16downloads",alt:"Hey.lt - Nemokamas lankytoj\u0173 skaitliukas"})})]})})})},f=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{media:"(max-width: 999px)",srcSet:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",sizes:"100%"}),(0,n.jsx)("source",{media:"(min-width: 1000px)",srcSet:r(7543)}),(0,n.jsx)("source",{media:"(min-width: 1000px)",srcSet:r(4972),type:"image/webp"}),(0,n.jsx)("img",{src:r(7543),alt:"Counter-Strike 1.6",className:"absolute inset-x-0 top-0 z-[-1] w-full hidden lg:block"})]}),(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"relative main",children:(0,n.jsx)("main",{className:"min-h-screen container pt-6",children:t})}),(0,n.jsx)(p,{})]})},m=r(7294),h=r(759);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function y(e){var t,i,c,s,l=e.Component,u=e.pageProps,p=(0,o.useRouter)(),d=(null===(t=l.layoutProps)||void 0===t?void 0:t.meta)||{},y=null===(i=l.layoutProps)||void 0===i?void 0:i.schema,x="https://mockupyour.app"+p.pathname,b=null!==(c=d.title)&&void 0!==c?c:"mockup app",v=null!==(s=d.description)&&void 0!==s?s:"description...";return(0,m.useEffect)((function(){var e=function(){ga("send","pageview")};return p.events.on("routeChangeComplete",e),function(){p.events.off("routeChangeComplete",e)}}),[p.events]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:b}),(0,n.jsx)("meta",{name:"twitter:title",content:b},"twitter:title"),(0,n.jsx)("meta",{name:"description",content:v}),(0,n.jsx)("meta",{property:"og:title",content:b}),(0,n.jsx)("meta",{property:"og:description",content:v}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",content:"mockupyour.app"}),(0,n.jsx)("meta",{name:"application-name",content:"mockupyour.app"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#38bdf8"}),(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"og:url",content:"https://mockupyour.app"}),(0,n.jsx)("meta",{property:"og:image",content:"https://mockupyour.app"+r(2162)}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"canonical",href:x}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app",hrefLang:"en"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/pl",hrefLang:"pl"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/ru/counter-strike-download",hrefLang:"ru"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/ro",hrefLang:"ro"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/tr",hrefLang:"tr"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/sr",hrefLang:"sr"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/es",hrefLang:"es"}),(0,n.jsx)("link",{rel:"alternate",href:"https://mockupyour.app/mk",hrefLang:"mk"}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:(0,h.t)(b,p.pathname)}}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n                ga('create', '".concat("UA-107670880-1","', 'auto');\n                ga('send', 'pageview');")}}),y?(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:y}}):null]}),(0,n.jsx)(f,{children:(0,n.jsx)(l,g({},u))})]})}},7284:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},7301:function(e){e.exports={srcSet:"/_next/static/images/AK-47-100-f7c92ccfb713b4189a504ae9124d7fee.png 100w",images:[{path:"/_next/static/images/AK-47-100-f7c92ccfb713b4189a504ae9124d7fee.png",width:100,height:50}],src:"/_next/static/images/AK-47-100-f7c92ccfb713b4189a504ae9124d7fee.png",toString:function(){return"/_next/static/images/AK-47-100-f7c92ccfb713b4189a504ae9124d7fee.png"},placeholder:void 0,width:100,height:50}},3077:function(e){e.exports={srcSet:"/_next/static/images/AK-47-100-8b5a6d1cb59ad60254a3297e778b4430.webp 100w",images:[{path:"/_next/static/images/AK-47-100-8b5a6d1cb59ad60254a3297e778b4430.webp",width:100,height:50}],src:"/_next/static/images/AK-47-100-8b5a6d1cb59ad60254a3297e778b4430.webp",toString:function(){return"/_next/static/images/AK-47-100-8b5a6d1cb59ad60254a3297e778b4430.webp"},placeholder:void 0,width:100,height:50}},4972:function(e){e.exports="/_next/static/images/counter-strike-16-35ecaa42cfdac4819ff35cbef2401f21.jpg.webp"},2162:function(e){e.exports="/_next/static/images/header-8a64852f6f310c6b15146b8e10026b91.jpg.webp"},7543:function(e){e.exports="/_next/static/images/counter-strike-16-9c8ce8cdcf5266db6917f25eeb37dd84.jpg"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);