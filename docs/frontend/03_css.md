---
sidebar_label: "CSS"
---

# CSS : Cascading Style Sheets

- https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS
- https://web.dev/learn/css
- https://reactnative.dev/docs/flexbox
- https://maintainablecss.com/chapters/introduction/
- W3C Spec: https://www.w3.org/Style/CSS/ --> Use to go deeper
- https://every-layout.dev/ --> TODO: interesting book by an author of web.dev CSS
- https://www.joshwcomeau.com/css/understanding-layout-algorithms/ --> TODO: Mental model shift on CSS

CSS Games:
- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://flexboxzombies.com/p/flexbox-zombies

What is CSS?
- Language for specifying how documents are presented to users (styles, layouts, etc.)

I have already learnt about these things in Teaser, but I want to learn more about them.
- Box model
- Cascade
- Specificity
- Flexbox
- Grid
- Z-Index

### The Box Model

Intrinsic sizing: Fits to the size of the content. The browser makes decisions on sizing based on the box's content size.

Extrinsic sizing: There's a limit of how much content you can add before it overflows out of the element's bounds

:::tip Overflow
> When a piece of content is too large for the box it's in 
:::

**The Box Model**:
- **Content box**: Area the content lives in
- **Padding box**: Space surrounding the content box set by the `padding` property
  - Scrollbars will occupy this space with overflow rules such as `overflow: auto` or `overflow: scroll`
- **Border box**: Space surrounding padding box set by the `border` property
- **Margin box**: Space around your box set by the `margin` property
  - Properties like `outline` and `box-shadow` occupy this space (they do not affect the size of the box itself)

![The box model](img/box-model.svg)

How to debug the box model?
- Use browser devtools (inspect from the dropdown menu in chrome)

Controlling the box model:

### CSS Syntax:

Example CSS rulesets:
```css
/* element selector */
h1 {
  color: red;
  font-size: 5em;
}
/* class selector */
.exampleClassName  {
  color: blue;
}

/* id selector */
#idSelectorName {
  color: green;
}

/* attribute selector */
[data-type='primary'] {
  color: red;
}

/* descendant combinator */
li p  {
  color: green;
}

/* adjacent sibling combinator */
h1 + p {
  font-size: 200%;
}
```
- **Selector**: Rules open with selctors that select the HTML element to style (`h1` in the example)
  - In the example above, we use an element/type selector (selects all `h1` elements)
  - The class selector uses a `.` on the class attribute specified in HTML
  - The id selector uses a `#` on the id attribute specified in HTML
  - Can combine the selectors such as `h1.className` which selects all `h1` elements with the class attribute "className"
  - Instruct CSS to look for attributes by wrapping the selector with square brackets `[ ]`.
    - Not including a value in the CSS rule looks for all elements containing that particular attribute regardless of value
- `{}` curly braces enclose the declarations
- **Declarations**: **Property** and **value** pairs
  - Property: Human readable identifyer indicating styling features
  - Value: Value of the property indicating the style
- **descendant combinator**: Spaces between the selectors denote selection based on nesting. So you can style things based on their location in a document
  - In the example, `li p` selects all `p` elements that is a descendent of a `li` element
- **adjacent sibling combinator**: Use the `+` symbol to style elements that come directly after another
  - `h1 + p` styles the `<p>` elements that come right after a `<h1>` element 
  
Styles based on State:
```css
a:link {
  color: blue;
}

a:visited {
  color: pink;
}

/* Your list will now either have red dots, or red numbers */
li::marker {
  color: red;
}

/* Style content highlighted by the user */
::selection {
  background: black;
  color: white;
}
```
- **Psuedo-classes**: Use the `:` symbol to target styles based on the state of an element
- **Pseudo-element**: keyword added to a selector that lets you style a specific part of the selected element using the `::` symbol

CSS Matching:
- Apply regex rules to matching
- Use grouping selectors to group multiple selectors together

```css
/* Case insensitive attribute selector */
[data-type='primary' s] {
  color: red;
}

/* A href that contains "example.com" */
[href*='example.com'] {
  color: red;
}

/* A href that starts with https */
[href^='https'] {
  color: green;
}

/* A href that ends with .com */
[href$='.com'] {
  color: blue;
}

/* Grouping selector applies a rule to all the following selectors */
strong,
em,
.my-class,
[lang] {
  color: red;
}

/* Universal selector */
* {}
```

How to add CSS:
- Link styles.css in the `<head>` element using `<link rel="stylesheet" href="styles.css" />`
- Internal stylesheet: Add `<style>` element (bad practice as can lead to inconsistencies imports, better to keep everything on a stylesheet)
- Inline styles: Use style attribute such as `style="..."` (bad practice same as internal stylesheets)

Comments: Use `/*` and end with `*/` to add comments

### Rules in CSS

The cascade algorithm is split into 4 distinct stages.

1. **Position and order of appearance**: the order of which your CSS rules appear
2. **Specificity**: an algorithm which determines which CSS selector has the strongest match
3. **Origin**: the order of when CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS
4. **Importance**: some CSS rules are weighted more heavily than others, especially with the !important rule type


**Cascade Rule**: The CSS rule that appears latest in the document replace conflicting styles that appear earlier in the stylesheet

**Specificity Rule**: There is an order of precendence between different types of selector
- This rule uses a point system by adding all the selectors together. So, if you combine multiple selectors such as `a.my-class.another-class[href]:hover`, it will be really hard to overwrite this with other CSS (solution: KISS! Use simple CSS rules when possible)
- Specificity selectors order (lowest to highest points)
  - Universal selector: 0 points
  - Elements, pseudo-element selectors: 1 point
  - Class, pseudo-class or attribute selector: 10 points
  - ID selector: 100 points
  - Inline Style attribute: 1000 points
  - `!important` rule: 10000 points
- E.G. `a[href="#]` is worth 11 points (1 from `a` element selector + 10 from `href` attribute selector)

| Specificity Category | Description | Example |
|---|---|---|
| Inline Styles | Styles directly on the element using the `style` attribute. | `<div style="...">` |
| IDs | Selectors using the ID of an element. | `#someId` |
| Classes, Attributes & Pseudo-classes | Selectors based on class, attribute or pseudo-class. | `.someClass`, `[type="text"]`, `:hover` |
| Elements & Pseudo-elements | Selectors based on element name or pseudo-element. | `h1`, `::before` |

How do I verify my CSS rules are working as intended?
- Use your browser DevTools (rule will be crossed out if it waas overridden)

`@rules`: Provide instruction for what CSS should perform or how it should behave
- `@import`: imports another stylesheet into your stylesheet
- `@media`: Create media queries that use conditional logic for applying CSS styles

E.G. Define a blue background if the browser viewport is wider than `30em`
```css
@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

### Functions in CSS

`calc`: Do simple math
```css
.box {
  width: calc(90% - 30px);
}
```

`transform` functions: Apply transformations to elements
- Values of the attribute `transform`
```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```
### CSS Inheritance

CSS inherits rules (rules cascade down)
- every HTML element has every CSS property defined by a default value
- If the parent HTML element has a inheritable CSS property set, the children will inherit the property's values

How do you explicitly inherit and control inheritance?
-  `inherit` keyword to inherit rules from parent elements
- `initial`: Reset to default value
- `unset`: If the property is inheritable this is the same as `inherit`, otherwise equalt o `initial`. Useful because some properties are not inheritable

