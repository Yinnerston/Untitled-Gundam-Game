"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_label:"Games with Javascript"},l="Making games with Javascript",o={unversionedId:"web-games/games_with_javascript",id:"web-games/games_with_javascript",title:"Making games with Javascript",description:"by engineer at Eko",source:"@site/docs/web-games/02_games_with_javascript.md",sourceDirName:"web-games",slug:"/web-games/games_with_javascript",permalink:"/Untitled-Gundam-Game/docs/web-games/games_with_javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-games/02_games_with_javascript.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Games with Javascript"},sidebar:"tutorialSidebar",previous:{title:"History of Web Tech: Why web is what it is",permalink:"/Untitled-Gundam-Game/docs/web-games/why_web_tech"},next:{title:"Games on the web",permalink:"/Untitled-Gundam-Game/docs/web-games/web_game"}},s={},p=[{value:"download an app is too much friction",id:"download-an-app-is-too-much-friction",level:3},{value:"How Can I start learning?",id:"how-can-i-start-learning",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"making-games-with-javascript"},"Making games with Javascript"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AfTqoNiWCvQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("p",null," by engineer at ",(0,n.kt)("a",{parentName:"p",href:"https://eko.com/"},"Eko")),(0,n.kt)("h3",{id:"download-an-app-is-too-much-friction"},"download an app is too much friction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Just make games with javascript instead "),(0,n.kt)("li",{parentName:"ul"},"Games on the browser started as server-side games (PHP)"),(0,n.kt)("li",{parentName:"ul"},"Web applets --\x3e Browser assigns space to run black-box applet code "),(0,n.kt)("li",{parentName:"ul"},"Macromedia FLASH / SHOCKWAVE: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Neatly packaged, bypass established publishing process"))),(0,n.kt)("li",{parentName:"ul"},"Iphone slowly kills Flash"),(0,n.kt)("li",{parentName:"ul"},"Developing web technologies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Canvas 2005: HTML element that draws graphics on the fly via javascript"),(0,n.kt)("li",{parentName:"ul"},"Web workers 2010: Web content runs scripts in background threads. Use these to run blocking background tasks such as fetching huge files or displaying real-time data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow for stopping synchronous operations: E.G. If you run some code that needs to yield to the main thread in a webworker instead, you can just kill the web worker if it times out without stopping the main thread "),(0,n.kt)("li",{parentName:"ul"},"Blocking on promises: Use Atomics.Wait in the worker and signal the main thread when done --\x3e Converts async browser API to server synchronous callbacks"))),(0,n.kt)("li",{parentName:"ul"},"WebGL 2011 : Javascript API for rendering high performance 2D and 3D graphics within any compatible web growser",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Uses ",(0,n.kt)("inlineCode",{parentName:"li"},"<canvas>")," compatible API"))),(0,n.kt)("li",{parentName:"ul"},"Web Audio 2012 : Audio on the web (audio sourceds, add effects, audio visualizations, apply spacial effects)"),(0,n.kt)("li",{parentName:"ul"},"Gamepad API 2013 : Introduces new events on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Window")," object for gamepad and controllers"),(0,n.kt)("li",{parentName:"ul"},"Web Sockets: Open a two-way interactive comunication session between browser and server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Send messages to a server from the browser, and recieve event-driven responses without having to poll the server for a reply"))),(0,n.kt)("li",{parentName:"ul"},"WebRTC : Open standard for real time communication for the web"),(0,n.kt)("li",{parentName:"ul"},"WebTransport : provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed"),(0,n.kt)("li",{parentName:"ul"},"Storage APIs:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Indexed DB : API for client side storage of significant amounts of structured data using indexes to enable high performance."),(0,n.kt)("li",{parentName:"ul"},"Web Storage API : API to store K/V pairs"))),(0,n.kt)("li",{parentName:"ul"},"WebGPU : API for performing operations, such as rendering and computation, on a Graphics Processing Unit"),(0,n.kt)("li",{parentName:"ul"},"Rendering Engines: For the web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML + CSS xD"),(0,n.kt)("li",{parentName:"ul"},"2d: PixiJS --\x3e Uses webGL and canvas"),(0,n.kt)("li",{parentName:"ul"},"3d: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ThreeJS --\x3e Three-JS-Fiber, Threlte (Svelte) "),(0,n.kt)("li",{parentName:"ul"},"Babylon"))))),(0,n.kt)("li",{parentName:"ul"},"Game Engines:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2d: Phaser"),(0,n.kt)("li",{parentName:"ul"},"Can also use other games engines like Unity or Unreal Engine and translate them to WebGL"))))),(0,n.kt)("li",{parentName:"ul"},"Examples of web games? Implemented in the browser with standardised web tech",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Agar.io 2005 --\x3e Precursor to modern (.io) web games"),(0,n.kt)("li",{parentName:"ul"},"Slowroads.io --\x3e Procedurally generated"),(0,n.kt)("li",{parentName:"ul"},"Prince of Persia JS"),(0,n.kt)("li",{parentName:"ul"},"JS13K games --\x3e JS games made under 13 kilobytes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Q13J --\x3e Quake in javascript"),(0,n.kt)("li",{parentName:"ul"},"Platformers"))),(0,n.kt)("li",{parentName:"ul"},"HexGL --\x3e Racing game"),(0,n.kt)("li",{parentName:"ul"},"Limiting technologies:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Candy Box 2 --\x3e HTML ONLY game"),(0,n.kt)("li",{parentName:"ul"},"Pure CSS Stack --\x3e HTML CSS ONLY stacking game"),(0,n.kt)("li",{parentName:"ul"},"The Mine --\x3e HTML CSS ONLY RPG game"))))),(0,n.kt)("li",{parentName:"ul"},"Isn't javascript game development pain?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sits on top of browser / tabs stack"),(0,n.kt)("li",{parentName:"ul"},"Scripting language that is uncompiled"),(0,n.kt)("li",{parentName:"ul"},"Single threaded"),(0,n.kt)("li",{parentName:"ul"},"No direct memory access"),(0,n.kt)("li",{parentName:"ul"},"No Hardware / OS access"),(0,n.kt)("li",{parentName:"ul"},"Browser implementation dependent"))),(0,n.kt)("li",{parentName:"ul"},"Why javascript then?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It runs everywhere. "),(0,n.kt)("li",{parentName:"ul"},"Who cares about performance --\x3e Our computers are so powerful nowadays anyways"),(0,n.kt)("li",{parentName:"ul"},"We optimise for fun"))),(0,n.kt)("li",{parentName:"ul"},"What is a game?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A series of interesting choices"),(0,n.kt)("li",{parentName:"ul"},"INPUT --\x3e GAME LOOP --\x3e OUTPUT")))),(0,n.kt)("h3",{id:"how-can-i-start-learning"},"How Can I start learning?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Webgamedev.com"),(0,n.kt)("li",{parentName:"ul"},"Gamemakers toolkit : Youtube channel"),(0,n.kt)("li",{parentName:"ul"},"Game mechanic explorer : E.G. Can use this to learn how to implement 2d homing missiles"),(0,n.kt)("li",{parentName:"ul"},"How to weigh an elephant : Made by the (second) GOAT John Romero",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Study anything by Romero or Carmack --\x3e These guys were great"),(0,n.kt)("li",{parentName:"ul"},'Listen to the audiobook of "Masters of Doom" --\x3e primary motivation')))))}c.isMDXComponent=!0}}]);