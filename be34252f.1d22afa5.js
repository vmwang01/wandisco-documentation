(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),a=(n(0),n(250)),i={id:"cdh_sandbox_troubleshooting",title:"Troubleshooting Cloudera (CDH) Sandbox",sidebar_label:"CDH Sandbox"},c={id:"quickstarts/troubleshooting/cdh_sandbox_troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Cloudera (CDH) Sandbox",description:"See the Useful information section for additional commands and help.",source:"@site/../docs/quickstarts/troubleshooting/cdh_sandbox_troubleshooting.md",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/cdh_sandbox_troubleshooting",sidebar_label:"CDH Sandbox",sidebar:"quickstarts",previous:{title:"General troubleshooting",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting"},next:{title:"Troubleshooting Hortonworks (HDP) Sandbox",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/hdp_sandbox_troubleshooting"}},s=[{value:"Common issues and resolutions",id:"common-issues-and-resolutions",children:[]},{value:"Rebuild",id:"rebuild",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}),"Useful information")," section for additional commands and help."),Object(a.b)("h2",{id:"common-issues-and-resolutions"},"Common issues and resolutions"),Object(a.b)("p",null,"This section will be updated once issues are reported."),Object(a.b)("h2",{id:"rebuild"},"Rebuild"),Object(a.b)("p",null,"Use these steps if looking to start over."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Stop and delete all containers, volumes and unused networks using:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose down -v"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You may need to clean up additional items depending on your deployment. Check the ",Object(a.b)("strong",{parentName:"p"},"rebuild")," section for your chosen distributions and plugins by navigating the options on the sidebar."),Object(a.b)("p",{parentName:"li"},"For example, if your use case is ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/installation/cdh_sandbox_lhv_client-adlsg2_lan"}),"CDH Sandbox to Azure Databricks with LiveAnalytics"),", check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/adlsg2_troubleshooting#rebuild"}),"ADLS Gen2")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/databricks_troubleshooting"}),"Databricks")," rebuild sections.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the setup script again (it will not prompt for any questions), followed by the docker compose ",Object(a.b)("inlineCode",{parentName:"p"},"up")," command to recreate the environment:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d")))))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);