---
sidebar_label: "History of Web Tech: Why web is what it is"
---
# History of Web Tech: Why web is what it is

<iframe width="560" height="315" src="https://www.youtube.com/embed/3QEoJRjxnxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Why did Tim Burners Lee invent the web?
- "Information Management: A proposal": Wanted people to standardise and network on their notebooks
  - Idea of hypertext server
- First browsers invented stylesheets, built-in scripting
  - Next innovations were inline images
  - Was there a standardization process?

### How did web programming work?
- HTML
- PHP invented as a standardised scripting language in 1995 
  - Reasons for PHP: simplicity, ease of use and integration with HTML. Open source, connects to databases and had a large community to contribute to the growth of the language.
  - What has replaced PHP in the modern web dev ecosystem? 
    - Other server side languages like Django, Ruby (+ Ruby on Rails) and Javascript (with Node.js)
  - Why is PHP being replaced?
    - Type safety, scalability, security
- GUI wizard for frontend was invented 
  - Frontpage 1996: First web GUI wizard
  - Javascript was invented as a scripting language for the netscape browser
  - CSS was invented
- Accessibility was codified into law
- ASP.NET 2002 --> Active Server Pages is too messy, not object oriented
  - Developed by microsoft to allow programmers to build dynamic websites, applications and services
  - Sends BLOB of UI state from server to client --> Client performs action --> Updated BLOB is sent back to server to process updates --> New UI state is rendered and sent to client --> ...
- Ruby On Rails 2004: Invention of server side programming
  - Schema migrations, automated tests, `.yaml` as config
- Javascript is reborn 2008
  - Web 2.0 --> Companies can extract value from user generated content
    - They want good UIs because that attracts users
  - Google maps is reverse engineered --> AJAX: Asyncronous Javascript and XML
    - Requests in the background, update page dynamically
  - JQuery: Compress web API across browsers --> simplify HTML DOM tree traversal and manipulation across different platforms 
  - Browser dev tools?
    - Firebug 2007: Invention of inspect element with console, HTML view, network tracers
  - Responsive Design and Mobile?
    - Had to create mobile specific design --> Mobile first design standardized in 2010
- Invention of Node (javascript moves to the server)
  - Javascript is everywhere
- ![Evolution of frontend frameworks](./img/evolution-of-frameworks.png)
- Sophistication explosion 2015: Instagram used webpack and npm in 2013 so 
  - Typescript: Javascript with types
  - Kubernetes: We need to learn cloud orchestration
  - Webpack module bundler: We need bundling systems because typescript is compiled
- What reduces load on web developers? 2020-?
  - What if browsers handle framework / build jobs
    - HTTP3, web transport
    - Type erasure: run typescript in a browser without compiling
    - CSS nesting: Bake SASS into the browser (e.g. nest selectors)
  - Metaframeworks? So many frameworks we use frameworks to manage our frameworks.
    - NextJS, SvelteKit, Astro, etc.
      - SvelteKit: Supports both serverside (ASP.NET) and clientside (Javascript) rendering
  - Cloud Edge Delivery
