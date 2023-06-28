"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:".NET"},i=".NET Core",l={unversionedId:"dotnet/introduction",id:"dotnet/introduction",title:".NET Core",description:"Textbook - ASP.NET Core in Action 3rd Edition",source:"@site/docs/dotnet/01_introduction.md",sourceDirName:"dotnet",slug:"/dotnet/introduction",permalink:"/Untitled-Gundam-Game/docs/dotnet/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dotnet/01_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:".NET"},sidebar:"tutorialSidebar",previous:{title:"First 2D Game",permalink:"/Untitled-Gundam-Game/docs/unity/01_2d_game"},next:{title:"Website",permalink:"/Untitled-Gundam-Game/docs/website/"}},s={},c=[{value:"What can I build with .NET Core?",id:"what-can-i-build-with-net-core",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"net-core"},".NET Core"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.manning.com/books/asp-net-core-in-action-third-edition"},"Textbook - ASP.NET Core in Action 3rd Edition")),(0,a.kt)("h3",{id:"what-can-i-build-with-net-core"},"What can I build with .NET Core?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example ASP.NET Architecture",src:r(5926).Z,width:"1152",height:"550"})),(0,a.kt)("p",null,"Paradigms build on top of ASP.NET Core"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minimal APIs\u2014Simple HTTP APIs that can be consumed by mobile applications or browser-based single-page applications."),(0,a.kt)("li",{parentName:"ul"},"Web APIs\u2014An alternative approach to building HTTP APIs that adds more structure and features than minimal APIs."),(0,a.kt)("li",{parentName:"ul"},"gRPC APIs\u2014Used to build efficient binary APIs for server-to-server communication using the gRPC protocol."),(0,a.kt)("li",{parentName:"ul"},"Razor Pages\u2014Used to build page-based server-rendered applications."),(0,a.kt)("li",{parentName:"ul"},"MVC controllers\u2014Similar to Razor Pages. Model-View-Controller (MVC) controller applications are for server-based applications but without the page-based paradigm."),(0,a.kt)("li",{parentName:"ul"},"Blazor WebAssembly\u2014A browser-based single-page application framework that uses the WebAssembly standard, similar to JavaScript frameworks such as Angular, React, and Vue."),(0,a.kt)("li",{parentName:"ul"},"Blazor Server\u2014Used to build stateful applications, rendered on the server, that send UI events and page updates over WebSockets to provide the feel of a client-side single-page application but with the ease of development of a server-rendered application")))}u.isMDXComponent=!0},5926:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aspnet_core_example_architecture-3d3a16cab232c0a4e12b60b596f7f0cb.png"}}]);