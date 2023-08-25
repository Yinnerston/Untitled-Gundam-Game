---
sidebar_label: "Frontend Design"
---

# Frontend Design

- https://rutar.org/writing/how-to-build-a-personal-webpage-from-scratch/
- https://welearncode.com/web-design-crash-course/
- 

### The Process

1. Start with the content. Design with the content and audience in mind
2. Start on pen and paper (MANY layout sketches)
3. Sketch the black / white HTML+CSS version with appropriate paddings and margins
4. Look for inspiration (awwwards.com, )
5. Pick a good font for display + typography (this matters a lot!)
6. Find a good colour palette (see inspiration websites, content, etc.)
7. Iterate

### Templating

Template processor: Consider using a static site generator to generate static webpages fro your content (markdown)
- Like Jinja/Django templating but the static webpage that is generated is deployed
- Examples of templating engines are: Jekyll, Hugo

Static Site Generators vs Javascript Frameworks
- Use Static Site Generators when: Content doesn't change too often, content can be directly served by a webserver without requiring a backend server
- Use Javascript Frameworks when: you're building a single-page application (SPA) with a highly interactive user interface, complex state management, and real-time updates

### Deployment

Netlify

Github Pages

Cloudflare Pages

### Svelte

Nice DX (dev experience) javascript framework that's like writing HTML