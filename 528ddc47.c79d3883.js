(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(82)),c={id:"all-countries",title:"Get a list of Countries",sidebar_label:"All Countries"},i={unversionedId:"api/all-countries",id:"api/all-countries",isDocsHomePage:!1,title:"Get a list of Countries",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/all-countries.md",slug:"/api/all-countries",permalink:"/docs/api/all-countries",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/all-countries.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1609348144,sidebar_label:"All Countries",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Get the country details from ISO2 Code",permalink:"/docs/api/country"}},l=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={rightToc:l,Highlight:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /v1/countries",Object(o.b)("h2",{id:"security"},"Security"),Object(o.b)("p",null,"This api use API KEY as an authentication method."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: ",Object(o.b)(s,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(o.b)("li",{parentName:"ul"},"In: header")),Object(o.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(o.b)("p",null,"No parameters"),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Code"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return a list of countries")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"401"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unauthorized.")))),Object(o.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 101,\n    "name": "India",\n    "iso2": "IN"\n  },\n  ...\n]\n')),Object(o.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')))}p.isMDXComponent=!0},82:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);