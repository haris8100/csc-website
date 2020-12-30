(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"Highlight",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(82)),l={id:"state",title:"Get the state details from ISO2 Code",sidebar_label:"State Details"},o={unversionedId:"api/state",id:"api/state",isDocsHomePage:!1,title:"Get the state details from ISO2 Code",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/state.md",slug:"/api/state",permalink:"/docs/api/state",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/state.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1609348144,sidebar_label:"State Details",sidebar:"docs",previous:{title:"Get a list of States within country",permalink:"/docs/api/states-by-country"},next:{title:"Get the list of cities in a state",permalink:"/docs/api/cities-by-state-country"}},i=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]},{value:"Example Not Found Response",id:"example-not-found-response",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={rightToc:i,Highlight:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /v1/countries/[ciso]/states/[siso]",Object(c.b)("h2",{id:"security"},"Security"),Object(c.b)("p",null,"This api use API KEY as an authentication method."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Name: ",Object(c.b)(b,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(c.b)("li",{parentName:"ul"},"In: header")),Object(c.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Located in"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ciso"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"URL"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ISO2 Code of Country"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)(b,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"siso"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"URL"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ISO2 Code of State"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)(b,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("h2",{id:"response"},"Response"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"200"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return a details of state")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"401"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unauthorized.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"404"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Found.")))),Object(c.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "4008,",\n  "name": "Maharashtra,",\n  "country_id": "101,",\n  "country_code": "IN,",\n  "iso2": "MH"\n}\n')),Object(c.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),Object(c.b)("h2",{id:"example-not-found-response"},"Example Not Found Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "No State/Region found."\n}\n')))}p.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);