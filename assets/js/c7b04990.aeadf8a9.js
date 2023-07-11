"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"WebGL"},l="WebGL",s={unversionedId:"webshowcase/webgl",id:"webshowcase/webgl",title:"WebGL",description:"Pixi.js 2D webgl renderer",source:"@site/docs/webshowcase/03_webgl.md",sourceDirName:"webshowcase",slug:"/webshowcase/webgl",permalink:"/Untitled-Gundam-Game/docs/webshowcase/webgl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/webshowcase/03_webgl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"WebGL"},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/Untitled-Gundam-Game/docs/webshowcase/frontend"}},i={},c=[{value:"Fundamentals",id:"fundamentals",level:3},{value:"Graphics Fundamentals:",id:"graphics-fundamentals",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webgl"},"WebGL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pixijs.com/"},"Pixi.js")," 2D webgl renderer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opengles-book.com/"},"OpenGl ES 3.0 Programming Guide")," guide book for learning OpenGL"),(0,a.kt)("p",null,"Good supplementary WebGL tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-T6EbWCq99c&list=PLPbmjY2NVO_X1U1JzLxLDdRn4NmtxyQQo"},"Andrew Adamson WebGL Tutorials")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scriptfoundry/WebGL2-Videos-Materials"},"Supplementary github page"))),(0,a.kt)("h3",{id:"fundamentals"},"Fundamentals"),(0,a.kt)("p",null,"HTML Canvas"),(0,a.kt)("p",null,"WebGL Rendering Context (gl): The interface we use to issue webGL commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can have multiple rendering contexts, each webGL canvas has its own rendering context"),(0,a.kt)("li",{parentName:"ul"},"Create shader, set GLSL source, compile shader and attach to program")),(0,a.kt)("p",null,"WebGL program linking 2 compiled shaders"),(0,a.kt)("h3",{id:"graphics-fundamentals"},"Graphics Fundamentals:"),(0,a.kt)("p",null,"WebGL is based off OpenGL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vertex & Fragment Shaders")))}d.isMDXComponent=!0}}]);