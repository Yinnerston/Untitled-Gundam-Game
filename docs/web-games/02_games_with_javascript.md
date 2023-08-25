---
sidebar_label: "Games with Javascript"
---

# Making games with Javascript

<iframe width="560" height="315" src="https://www.youtube.com/embed/AfTqoNiWCvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

 by engineer at [Eko](https://eko.com/)

### download an app is too much friction

- Just make games with javascript instead 
- Games on the browser started as server-side games (PHP)
- Web applets --> Browser assigns space to run black-box applet code 
- Macromedia FLASH / SHOCKWAVE: 
  - Neatly packaged, bypass established publishing process
- Iphone slowly kills Flash
- Developing web technologies
  - Canvas 2005: HTML element that draws graphics on the fly via javascript
  - Web workers 2010: Web content runs scripts in background threads. Use these to run blocking background tasks such as fetching huge files or displaying real-time data
    - Allow for stopping synchronous operations: E.G. If you run some code that needs to yield to the main thread in a webworker instead, you can just kill the web worker if it times out without stopping the main thread 
    - Blocking on promises: Use Atomics.Wait in the worker and signal the main thread when done --> Converts async browser API to server synchronous callbacks
  - WebGL 2011 : Javascript API for rendering high performance 2D and 3D graphics within any compatible web growser
    - Uses `<canvas>` compatible API
  - Web Audio 2012 : Audio on the web (audio sourceds, add effects, audio visualizations, apply spacial effects)
  - Gamepad API 2013 : Introduces new events on the `Window` object for gamepad and controllers
  - Web Sockets: Open a two-way interactive comunication session between browser and server
    - Send messages to a server from the browser, and recieve event-driven responses without having to poll the server for a reply
  - WebRTC : Open standard for real time communication for the web
  - WebTransport : provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed
  - Storage APIs:
    - Indexed DB : API for client side storage of significant amounts of structured data using indexes to enable high performance.
    - Web Storage API : API to store K/V pairs
  - WebGPU : API for performing operations, such as rendering and computation, on a Graphics Processing Unit
  - Rendering Engines: For the web
    - HTML + CSS xD
    - 2d: PixiJS --> Uses webGL and canvas
    - 3d: 
      - ThreeJS --> Three-JS-Fiber, Threlte (Svelte) 
      - Babylon
  - Game Engines:
    - 2d: Phaser
    - Can also use other games engines like Unity or Unreal Engine and translate them to WebGL
- Examples of web games? Implemented in the browser with standardised web tech
  - Agar.io 2005 --> Precursor to modern (.io) web games
  - Slowroads.io --> Procedurally generated
  - Prince of Persia JS
  - JS13K games --> JS games made under 13 kilobytes
    - Q13J --> Quake in javascript
    - Platformers
  - HexGL --> Racing game
  - Limiting technologies:
    - Candy Box 2 --> HTML ONLY game
    - Pure CSS Stack --> HTML CSS ONLY stacking game
    - The Mine --> HTML CSS ONLY RPG game
- Isn't javascript game development pain?
  - Sits on top of browser / tabs stack
  - Scripting language that is uncompiled
  - Single threaded
  - No direct memory access
  - No Hardware / OS access
  - Browser implementation dependent
- Why javascript then?
  - It runs everywhere. 
  - Who cares about performance --> Our computers are so powerful nowadays anyways
  - We optimise for fun
- What is a game?
  - A series of interesting choices
  - INPUT --> GAME LOOP --> OUTPUT


### How Can I start learning?

- Webgamedev.com
- Gamemakers toolkit : Youtube channel
- Game mechanic explorer : E.G. Can use this to learn how to implement 2d homing missiles
- How to weigh an elephant : Made by the (second) GOAT John Romero
  - Study anything by Romero or Carmack --> These guys were great
  - Listen to the audiobook of "Masters of Doom" --> primary motivation