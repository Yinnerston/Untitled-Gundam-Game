"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Frontend Design"},i="Frontend Design",l={unversionedId:"frontend/frontend",id:"frontend/frontend",title:"Frontend Design",description:"- https://rutar.org/writing/how-to-build-a-personal-webpage-from-scratch/",source:"@site/docs/frontend/01_frontend.md",sourceDirName:"frontend",slug:"/frontend/frontend",permalink:"/Untitled-Gundam-Game/docs/frontend/frontend",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/01_frontend.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Frontend Design"},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/Untitled-Gundam-Game/docs/intro"},next:{title:"HTML",permalink:"/Untitled-Gundam-Game/docs/frontend/html"}},s={},p=[{value:"The Process",id:"the-process",level:3},{value:"Templating",id:"templating",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Svelte",id:"svelte",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frontend-design"},"Frontend Design"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rutar.org/writing/how-to-build-a-personal-webpage-from-scratch/"},"https://rutar.org/writing/how-to-build-a-personal-webpage-from-scratch/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://welearncode.com/web-design-crash-course/"},"https://welearncode.com/web-design-crash-course/")),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h3",{id:"the-process"},"The Process"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start with the content. Design with the content and audience in mind"),(0,a.kt)("li",{parentName:"ol"},"Start on pen and paper (MANY layout sketches)"),(0,a.kt)("li",{parentName:"ol"},"Sketch the black / white HTML+CSS version with appropriate paddings and margins"),(0,a.kt)("li",{parentName:"ol"},"Look for inspiration (awwwards.com, )"),(0,a.kt)("li",{parentName:"ol"},"Pick a good font for display + typography (this matters a lot!)"),(0,a.kt)("li",{parentName:"ol"},"Find a good colour palette (see inspiration websites, content, etc.)"),(0,a.kt)("li",{parentName:"ol"},"Iterate")),(0,a.kt)("h3",{id:"templating"},"Templating"),(0,a.kt)("p",null,"Template processor: Consider using a static site generator to generate static webpages fro your content (markdown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Like Jinja/Django templating but the static webpage that is generated is deployed"),(0,a.kt)("li",{parentName:"ul"},"Examples of templating engines are: Jekyll, Hugo")),(0,a.kt)("p",null,"Static Site Generators vs Javascript Frameworks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Static Site Generators when: Content doesn't change too often, content can be directly served by a webserver without requiring a backend server"),(0,a.kt)("li",{parentName:"ul"},"Use Javascript Frameworks when: you're building a single-page application (SPA) with a highly interactive user interface, complex state management, and real-time updates")),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Netlify"),(0,a.kt)("p",null,"Github Pages"),(0,a.kt)("p",null,"Cloudflare Pages"),(0,a.kt)("h3",{id:"svelte"},"Svelte"),(0,a.kt)("p",null,"Nice DX (dev experience) javascript framework that's like writing HTML"))}d.isMDXComponent=!0}}]);