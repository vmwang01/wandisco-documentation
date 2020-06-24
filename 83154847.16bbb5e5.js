(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(250)),i={id:"adlsg2_troubleshooting",title:"Troubleshooting ADLS Gen2",sidebar_label:"ADLS Gen2"},c={id:"quickstarts/troubleshooting/adlsg2_troubleshooting",isDocsHomePage:!1,title:"Troubleshooting ADLS Gen2",description:"See the Useful information section for additional commands and help.",source:"@site/../docs/quickstarts/troubleshooting/adlsg2_troubleshooting.md",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/adlsg2_troubleshooting",sidebar_label:"ADLS Gen2",sidebar:"quickstarts",previous:{title:"Troubleshooting Hortonworks (HDP) Sandbox",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/hdp_sandbox_troubleshooting"},next:{title:"Troubleshooting Databricks Delta Lake",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/databricks_troubleshooting"}},l=[{value:"Rebuild",id:"rebuild",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}),"Useful information")," section for additional commands and help."),Object(a.b)("h2",{id:"rebuild"},"Rebuild"),Object(a.b)("p",null,"If you are using ADLS Gen2, delete the related directories from your ADLS Gen2 container (e.g. via the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-directory-file-acl-cli#delete-a-directory"}),"Azure CLI"),"):"),Object(a.b)("p",null,"For example, if your use case is ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_lhv_client-adlsg2_lan"}),"HDP Sandbox to Azure Databricks with LiveAnalytics"),", delete the following directories:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/apps"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"/wandisco")))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);