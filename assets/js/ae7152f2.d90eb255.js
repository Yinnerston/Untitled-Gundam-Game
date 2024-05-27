"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={},l="ThreeJS",o={unversionedId:"threejs/general",id:"threejs/general",title:"ThreeJS",description:"Build Tool: Use vite",source:"@site/docs/threejs/01_general.md",sourceDirName:"threejs",slug:"/threejs/general",permalink:"/Untitled-Gundam-Game/docs/threejs/general",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/threejs/01_general.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/Untitled-Gundam-Game/docs/ideas/websites_i_like"},next:{title:"Graphics in more detail",permalink:"/Untitled-Gundam-Game/docs/threejs/graphics"}},s={},u=[{value:"Camera",id:"camera",level:3},{value:"Types of Camera Controls",id:"types-of-camera-controls",level:3},{value:"Transform Objects",id:"transform-objects",level:3},{value:"Geometries",id:"geometries",level:3},{value:"Animations",id:"animations",level:3},{value:"Textures",id:"textures",level:3},{value:"Fullscreen Applications",id:"fullscreen-applications",level:3},{value:"Debuggers",id:"debuggers",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"threejs"},"ThreeJS"),(0,n.kt)("p",null,"Build Tool: Use vite"),(0,n.kt)("p",null,"Bundler:"),(0,n.kt)("h3",{id:"camera"},"Camera"),(0,n.kt)("p",null,"Make sure the canvas' aspect ratio matches the camera!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/cameras/PerspectiveCamera"},(0,n.kt)("inlineCode",{parentName:"a"},"PerspectiveCamera")),": Camera that renders with human perspective"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Field of View (vertical): 45-75 recommended"),(0,n.kt)("li",{parentName:"ul"},"Aspect ratio: width / height of the render"),(0,n.kt)("li",{parentName:"ul"},"Near and far: Range of lengths in which objects are rendered",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Don't use extremely small values to prevent z-fighting (gpu might not distinguish between extremely small distances)"),(0,n.kt)("li",{parentName:"ul"},"Defaults to 1, 1000")))),(0,n.kt)("p",null,"OrthographicCamera: Renders without perspective. Object is the same size regardless of distance to camera"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"left, right, top, bottom: Distances in the direction you will render"),(0,n.kt)("li",{parentName:"ul"},"near and far"),(0,n.kt)("li",{parentName:"ul"},"You need to use the canvas ratio ",(0,n.kt)("inlineCode",{parentName:"li"},"const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 * aspectRatio, 1, - 1, 0.1, 100)")," to keep the same ratio of dimensions of the shape regardless of the aspect ratio",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Canvas can stretch which will otherwise stretch the threejs projection")))),(0,n.kt)("p",null,"ArrayCamera: Render the scene from multiple cameras on specific areas of the render"),(0,n.kt)("p",null,"StereoCamera: Two camera that mimic the eyes to create the parallex effect (use with VR)"),(0,n.kt)("p",null,"CubeCamera: 6 Renders based on each face of the cube (used in environment maps --\x3e reflections, shadows, etc.)"),(0,n.kt)("h3",{id:"types-of-camera-controls"},"Types of Camera Controls"),(0,n.kt)("p",null,"Can Listen on ",(0,n.kt)("inlineCode",{parentName:"p"},"mousemove")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't forget to normalise mouse coordinates to ","[0, 1]"," or ","[-0.5, 0.5]")),(0,n.kt)("p",null,"DeviceOrientationControls: Automatically retrieve the device orientation (useful for vr)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#examples/en/controls/OrbitControls"},"OrbitControls"),": Orbit an object in a spherical orbit"),(0,n.kt)("p",null,"FlyControls: Fly around and rotate the camera"),(0,n.kt)("p",null,"FirstPersonControls: Like FlyControl but with a fixed up axis"),(0,n.kt)("p",null,"PointerLockControls: Uses pointer lock JS API (WASD first person)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Makes the mouse disappear (use this as the FPS shooter camera)")),(0,n.kt)("p",null,"TrackballControls: Like OrbitControls but without vertical angle limit"),(0,n.kt)("p",null,"TransformControls: Let's you transform objects using AxesHelper. Let's you move objects around"),(0,n.kt)("p",null,"Damping: Dampening the control movement to increase smoothness"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check if controls has ",(0,n.kt)("inlineCode",{parentName:"li"},"enableDamping")," attribute")),(0,n.kt)("p",null,"Other considerations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FOV adjustment"),(0,n.kt)("li",{parentName:"ul"},"Sensitivity"),(0,n.kt)("li",{parentName:"ul"},"Zoom levels"),(0,n.kt)("li",{parentName:"ul"},"Invert Y Axis"),(0,n.kt)("li",{parentName:"ul"},"Accessibility: Reduce camera shake, stable horizon, ^")),(0,n.kt)("h3",{id:"transform-objects"},"Transform Objects"),(0,n.kt)("p",null,"Four types of transform:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"position: Vector3"),(0,n.kt)("li",{parentName:"ul"},"scale: Vector3"),(0,n.kt)("li",{parentName:"ul"},"rotation: Euler --\x3e Use radians."),(0,n.kt)("li",{parentName:"ul"},"quarternion: Another way of representing rotations --\x3e Avoids gimbal lock")),(0,n.kt)("p",null,"Two ways of rotation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updating ",(0,n.kt)("inlineCode",{parentName:"li"},"rotation")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"quarternion")," will update the other property "),(0,n.kt)("li",{parentName:"ul"},"The order of axes of rotation is important to avoid gimbal lock. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"object.rotation.reorder")," toset the order axes are rotated"),(0,n.kt)("li",{parentName:"ul"},"Gimbal Lock: Rotating on one axis changes the other axis orientation, causing two axes to align and causing the loss of rotation on one axis")),(0,n.kt)("p",null,"Units are arbitrary. You decide what a unit represents"),(0,n.kt)("p",null,"AxesHelper: Visualises the axis"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"lookAt(...)"),"\" Rotate an object's ",(0,n.kt)("inlineCode",{parentName:"p"},"-z")," axis towards the target automatically/"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Useful for keeping the camera on an object")),(0,n.kt)("p",null,"Group: Use to group objects together in the scene graph so transforms can be collectively applied to them"),(0,n.kt)("h3",{id:"geometries"},"Geometries"),(0,n.kt)("p",null,"Geometries are made of vertices, and can become either meshes (edges between vertices) or particles (each vertice is a particle)."),(0,n.kt)("p",null,"Face: Triangle between three vertices used in a mesh."),(0,n.kt)("p",null,"Build-in ThreeJS Geometries: There are > 15 geometries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://threejs.org/docs/?q=Geometry#api/en/core/BufferGeometry"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferGeometry")),": Core parent class of other geometries. Has a point in space with a position, UV coordinates, a normal and other attributes like colour or size."),(0,n.kt)("li",{parentName:"ul"},"PlaneGeometry: 2d plane"),(0,n.kt)("li",{parentName:"ul"},"TextGeometry: 3d text")),(0,n.kt)("p",null,"Revisiting BoxGeometry:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Width/Height/Depth Segments: Number of segmented rectangular faces along the sides"),(0,n.kt)("li",{parentName:"ul"},"Subdivision: Refers to the process of refining the complexity of a geometric shape by adding more vertices")),(0,n.kt)("p",null,"How do you create your own geometry?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Float32Array"),": Define x, y, z for each vertice"),(0,n.kt)("li",{parentName:"ul"},"Convert to ",(0,n.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html?q=BufferAttri#api/en/core/BufferAttribute"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferAttribute(arr, itemSize)")),": Stores data for an attribute associated with ",(0,n.kt)("inlineCode",{parentName:"li"},"BufferGeometry")),(0,n.kt)("li",{parentName:"ul"},"Add the ",(0,n.kt)("inlineCode",{parentName:"li"},"BufferAttribute")," to your mesh ",(0,n.kt)("inlineCode",{parentName:"li"},"BufferGeometry")," using ",(0,n.kt)("inlineCode",{parentName:"li"},'setAttribute("position", yourBufferAttribute)'),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"position"')," is an attribute used by the built-in ThreeJS shaders")))),(0,n.kt)("p",null,"Performance considerations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Used ",(0,n.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html?q=Buffer#api/en/core/BufferGeometry.index"},"indexes")," on your ",(0,n.kt)("inlineCode",{parentName:"li"},"BufferGeometry")," to reuse vertices")),(0,n.kt)("h3",{id:"animations"},"Animations"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Window: requestAnimationFrame()")," method: Tell the browser you want to update an animation. The browser paints the animationin the next repaint / frame."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Call this at the end of the animation loop / tick function")),(0,n.kt)("p",null,"GSAP: Javascript animation framework for the web"),(0,n.kt)("h3",{id:"textures"},"Textures"),(0,n.kt)("p",null,"An image is a 2D picture designed to be viewed by a human."),(0,n.kt)("p",null,"A texture is specially prepared data used for various purposes in 3D graphics."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The points that make up a texture are called ",(0,n.kt)("em",{parentName:"li"},"texels"))),(0,n.kt)("p",null,"Types of texture map:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Color/Diffuse/Albedo: Colour map applied on the geometry"),(0,n.kt)("li",{parentName:"ul"},"Alpha: Opacity map"),(0,n.kt)("li",{parentName:"ul"},"Height/Displacement: Adds surface details"),(0,n.kt)("li",{parentName:"ul"},"Normal: For shiny surfaces"),(0,n.kt)("li",{parentName:"ul"},"Ambied Occlusion: Fake shadows for more detail"),(0,n.kt)("li",{parentName:"ul"},"Metalness: Used for reflective surfaces"),(0,n.kt)("li",{parentName:"ul"},"Roughness: Light dissipation, often related to metalness")),(0,n.kt)("p",null,"Physics Based Rendering (PBR)"),(0,n.kt)("p",null,"How do you load textures?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"https://threejs.org/docs/#api/en/loaders/TextureLoader"},(0,n.kt)("inlineCode",{parentName:"a"},"TextureLoader"))," (optionally with a ",(0,n.kt)("inlineCode",{parentName:"li"},"LoadingManager"),")")),(0,n.kt)("p",null,"UV Mapping: How 2D textures are placed on 3D geometries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(u,v)\u27f6(x,y,z)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UV Unwrapping",src:a(2941).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"Texture transformations: Properties on textures"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"repeat: Repeats the texture by setting (wrapS and wrapT attributes for x, y wrapping)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"colorTexture.repeat"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"colorTexture.wrapS"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"colorTexture.wrapT")))),(0,n.kt)("li",{parentName:"ul"},"Offset: Offset UV coordinates of a texture"),(0,n.kt)("li",{parentName:"ul"},"Rotation: Rotate a texture around the pivot point (defaults to bottom left)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Change the pivot point with ",(0,n.kt)("inlineCode",{parentName:"li"},"center"))))),(0,n.kt)("p",null,"Filtering: When textures are too close or too far, we can have visual artifacts that reduce the quality of the texture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mipmapping"),": Technique of creating smaller versions of the texture, so the GPU can choose the most appropriate texture",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Texture size needs to be divisible by 2"))),(0,n.kt)("li",{parentName:"ul"},"Filters applied by ThreeJS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Minification Filter"),": The minification filter happens when the pixels of texture are smaller than the pixels of the render. In other words, the texture is too big for the surface, it covers.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"THREE.NearestFilter"),(0,n.kt)("li",{parentName:"ul"},"THREE.LinearFilter"),(0,n.kt)("li",{parentName:"ul"},"THREE.NearestMipmapNearestFilter"),(0,n.kt)("li",{parentName:"ul"},"THREE.NearestMipmapLinearFilter"),(0,n.kt)("li",{parentName:"ul"},"THREE.LinearMipmapNearestFilter"),(0,n.kt)("li",{parentName:"ul"},"THREE.LinearMipmapLinearFilter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Magnification Filter"),":The magnification filter works just like the minification filter, but when the pixels of the texture are bigger than the render's pixels. In other words, the texture too small for the surface it covers.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"THREE.NearestFilter: best for performance"),(0,n.kt)("li",{parentName:"ul"},"THREE.LinearFilter")))))),(0,n.kt)("p",null,"Optimizing textures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use sizes divisible by 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".jpg"),": Lossy but lighter (better for web generally)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".png"),": Lossless but heavier",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports transparency (alpha) whilst JPEG doesn't"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Basis"),": Small file, optimised for GPU")),(0,n.kt)("p",null,"Where to find textures? Consider:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"poliigon.com"),(0,n.kt)("li",{parentName:"ul"},"3dtextures.me"),(0,n.kt)("li",{parentName:"ul"},"arroway-textures.ch")),(0,n.kt)("h3",{id:"fullscreen-applications"},"Fullscreen Applications"),(0,n.kt)("p",null,"Remove margin around the canvas and fix the position"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"html,\nbody\n{\n    overflow: hidden;\n}\n\n.yourWebGLCanvas\n{\n    position: fixed;\n    top: 0;\n    left: 0;\n    outline: none;\n}\n")),(0,n.kt)("p",null,"Add event listener fo resize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('resize', () =>\n{\n    // Update sizes\n    sizes.width = window.innerWidth\n    sizes.height = window.innerHeight\n\n    // Update camera\n    camera.aspect = sizes.width / sizes.height\n    camera.updateProjectionMatrix()\n    \n    // Update renderer\n    renderer.setSize(sizes.width, sizes.height)\n    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))\n})\n")),(0,n.kt)("p",null,"Pixel Ratio: Physical to logical pixel mapping"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can cause jaggies (stair stepped edges)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Jaggies are prevented through optimal compression, vector graphics or anti-aliasing"))),(0,n.kt)("li",{parentName:"ul"},"To handle pixel ratio, use ",(0,n.kt)("inlineCode",{parentName:"li"},"renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))")," in the resize event",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Humans can't see pixel ratios > 2. Do this to prevent unnecessary pixel colourings"),(0,n.kt)("li",{parentName:"ul"},"Used when you move the window between screens with different resolutions")))),(0,n.kt)("p",null,"Going fullscreen: ",(0,n.kt)("inlineCode",{parentName:"p"},"canvas.requestFullscreen()")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"exit: ",(0,n.kt)("inlineCode",{parentName:"li"},"document.exitFullscreen()"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Can change the event to whatever you want to go fullscreen\nwindow.addEventListener('dblclick', () =>\n{\n    if(!document.fullscreenElement)\n    {\n        canvas.requestFullscreen()\n    }\n    else\n    {\n        document.exitFullscreen()\n    }\n})\n")),(0,n.kt)("h3",{id:"debuggers"},"Debuggers"),(0,n.kt)("p",null,"Example Debuggers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dat.GUI (lil-gui because vulnerabilities)"),(0,n.kt)("li",{parentName:"ul"},"control-panel"),(0,n.kt)("li",{parentName:"ul"},"ControlKit"),(0,n.kt)("li",{parentName:"ul"},"Uil"),(0,n.kt)("li",{parentName:"ul"},"Tweakpane"),(0,n.kt)("li",{parentName:"ul"},"Guify"),(0,n.kt)("li",{parentName:"ul"},"Oui")),(0,n.kt)("p",null,"lil-gui:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import GUI from 'lil-gui'\nconst gui = new GUI();\n// Add GUI value in range\ngui.add(yourObject, \"yourAttribute\").min(-10).max(10).step(0.01)\n// Example gui state obj\nconst parameters = {\n  color: 0xff0000,\n  spin: () =>\n  {\n      gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })\n  }\n}\n// Change values\ngui\n  .addColor(parameters, 'color')\n  .onChange(() =>\n  {\n      material.color.set(parameters.color)\n  })\ngui.add(parameters, 'spin')\n")))}c.isMDXComponent=!0},2941:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/uv-unwrapping-28aa1bbad73b2f58964844fee0050c40.png"}}]);