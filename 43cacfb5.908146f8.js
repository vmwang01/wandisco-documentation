(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(9),i=(r(0),r(250)),a={id:"w",title:"W",sidebar_label:"W"},c={id:"glossary/w",isDocsHomePage:!1,title:"W",description:"WANdisco",source:"@site/../docs/glossary/w.md",permalink:"/wandisco-documentation/docs/glossary/w",sidebar_label:"W",sidebar:"Glossary",previous:{title:"V",permalink:"/wandisco-documentation/docs/glossary/v"},next:{title:"X",permalink:"/wandisco-documentation/docs/glossary/x"}},s=[{value:"WANdisco",id:"wandisco",children:[]},{value:"WASB",id:"wasb",children:[]},{value:"Wildcard",id:"wildcard",children:[]},{value:"Writer",id:"writer",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"wandisco"},"WANdisco"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"W"),"ide ",Object(i.b)("strong",{parentName:"p"},"A"),"rea ",Object(i.b)("strong",{parentName:"p"},"N"),"etwork ",Object(i.b)("strong",{parentName:"p"},"Dis"),"tributed ",Object(i.b)("strong",{parentName:"p"},"Co"),"mputing. WANdisco is a leading provider of distributed software development solutions. By using WANdisco\u2019s unique replication technology, software development occurs anywhere without the constraints associated with far-flung distribution."),Object(i.b)("h2",{id:"wasb"},"WASB"),Object(i.b)("p",null,"See Azure Blob Storage. It stands for Windows Azure Storage Blob."),Object(i.b)("h2",{id:"wildcard"},"Wildcard"),Object(i.b)("p",null,"A symbol used to replace or represent one or more characters."),Object(i.b)("h2",{id:"writer"},"Writer"),Object(i.b)("p",null,'In the WANdisco Fusion\u2019s architecture, only one Fusion node/server per zone is allowed to write into a replicated filespace - this node is the "Writer" for that replicated folder. Therefore, if there is one replicated folder and two zones, there will be two writers for the replicated folder, one in each zone. If there are two replicated folders and two zones there will be four writers, two in each zone.'),Object(i.b)("p",null,"The writer for a replicated folder does not have to be the same node as the writer for another replicated folder, e.g. Node 1 may be the writer for /dir1/dir2 and /dir1/dir3 and Node 2 may be the writer for /dir1/dir4, which allows for load-balancing across Fusion servers within a zone. If a writer node fails, a new writer for that folder must be selected (set through the process for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.wandisco.com/bigdata/wdfusion/#doc_writer-status"}),"Writer Selection"),".)"),Object(i.b)("p",null,"An exception to this is when a Fusion node is started/restarted, it will check if any replicated folders do not have a writer assigned, and if not, elect itself as writer."))}d.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);