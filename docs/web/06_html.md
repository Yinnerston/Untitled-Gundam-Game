---
sidebar_label: "HTML"
---

# HTML

Reviewing HTML to make an awesome animated webpage

https://web.dev/learn/html/overview/

### Elements

**Elements**: Content nested between the opening and closing tags
 - Tag name is the content in the brackets
Types of elements:
- Non-Replaced: Have opening and optional closing tags that surround them. May include text, other tags as sub-elements
- Replaced: Can be replaced by options (such as a UI widget), image file or raster.
- Void element: Self closing tags, often denoted by `<tag />`
  - Most replaced elements are void elements but not all
Tags have attributes which define the behaviour, linkage and functionality of elements
- Most attributes are name/value pairs
- XHTML style markup: Style to use lowercase letters for all element and attribute names, self-closing empty elements  
Default appearance of semantic elements is set by user-agent stylesheets
- Semantic means "relating to meaning"
- Semantics of an element is important for search engines and assistive technologies
- Different browsers may have different user-agent stylesheets (elements may be rendered differently between browsers)

### Document Object Model (DOM)

Nodes: Javascript object is created by the browser for each element and section of text encountered
[HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API): Access and control each HTML element via the DOM 
- HTMLElement interface: represents HTML element and all descendent nodes