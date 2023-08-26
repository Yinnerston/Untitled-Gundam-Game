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

### Colours (color property)

Colour codes are a hexadecimal `#XXXXXX` or `#XXXXXXXX` (last two hex values are opacity with 8 length hex string)

Define RBG colours with `rgb()` color function
- Can use [0, 255] or [0%, 100%]
- Add alpha channel with `rgba()`

HSL: Hue, Saturation, Lightness with `hsl()` function
- Can use [0deg, 360deg] or [0%, 100%]

![HSL chart](./img/hsl.svg)

Colours can also have [keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords) such as `rebeccapurple`

### Units in CSS

`ch` unit: CSS value that allows you to control the size of text based on it's actual contextual size 
- `ch` is based on the width of a `0` character

E.G: Limiting the width of a line to 70 characters
```css
p {
  font-size: 1.25rem;
  max-width: 70ch;
}
```

Usage of unitless numbers: For css properties like `line-height`, using unitless numbers indicates a ratio
- Bettter to use a unitless value for properties with ratios like `line-height: 1.5` because `font-size` can be inherited and thus defining a unitless `line-height` adjusts the line height relative to the `font-size`
- What properties use ratios when the value is a unitless number?
  - Filter, opacity, some transform functions, etc.

Usage of percentages: How are percentages calculated?
- `width`, `margin` or `padding`: Percentage of the parent's width regardless of direction

Dimensions: Attaching a unit to a number makes it a dimension.
- Lengths are dimensions that refer to distance
- **Absolute length**: Lengths revolving around a fixed base value
  - `cm`, `mm`, `Q` (Quarter-millimeters), `in` (inches)
  - `pc` (Pica: 1/6 of an inch)
  - `pt` (Point: 1/72th of an inch)
  - `px` (Pixel: 1/96th of an inch)
- **Relative Length**: Lengths revolving around a resizable base value (relative lengths are like percentages)
  - Relative to font-size:
    - `em`: Relative to current font size
    - `ex`: Height of the letter "x" == 0.5em 
    - `cap`: Height of capital letters
    - `ch`: Relative to the width of the "0"
    - `ic`, `rem`, `lh`, `rlh`
  - Relative to the viewport (browser window):
    - `vw`: 1% of viewport width (use to for resizing based on viewport width)
    - `vh`: 1% of viewport height (^ for height)
    - `vi`, `vb`, `vmin`, `vmax`

We saw angle units `deg` in HSL
- Can also use for rotation transforms

Resolution units like `dpi`: Use for serving up higher resolution images based on screen resolution

### CSS Layouts

Before CSS was widely adopted in browsers, devs used HTML table elements to layout their HTML pages
- Nowadays, `flexbox` and `grid` are used for layouts

`display` property: Determines whether an element is inline or block.
- Possible values are: `inline`, `block` or `flex`
- **Inline elements**: Elements that sit next to each other on the same line when possible.
- **Block elements**: Elements that create a new line for themselves. Block elements expand to the size of the available inline dimension, spans the full width in a horizontal writing mode
- `display: flex` makes the box a block-level box, and also converts its children to flex items

Flexbox & Grid: Two different layout mechanisms that create layout rules for multiple elements

### Flexbox Layout

Useful notes
- https://reactnative.dev/docs/flexbox
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**What problem does a Flexbox Layout solve?**

Flexbox is designed to provide a consistent layout on different screen sizes.

You will normally use a combination of `flex-direction`, `align-items`, and `justify-content` to achieve the right layout.

**What is a Flexbox layout?**

Flexbox is a layout mechanism for one-dimensional layouts.
- `flex` defines how your items are going to fill the available space along your mail axis
- `flex-direction` controls the direction in which the children of the node are laid out. Sets the **main axis**. The **cross axis** is perpendicular to the main axis.
  - Note: flex-direction is purely visual and setting this to `row-reverse` / `column-reverse` may have negative consequences
- `justify-content` describes how to align children within the **main axis** of their container.
  - Align children `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- `align-items` describes how to align children within the **cross axis** of their container.
- Items stay on the same axis

What is `flex-wrap`?

Flexbox doesn't wrap items unless you specify it (single line by default). `flex-wrap` will cause items to be wrapped into multiple lines along the main axis if required. 
- `wrap` or `nowrap` default.

Flexbox shortcuts:
- `flex:` can take up to three arguments `flex-grow flex-shrink flex-basis`. Recommended you use this shorthand instead of setting each individual property
  - Initial values are:
  - `flex-grow: 0`: Items do not grow --> Proportion of space in the flexbox the item takes up
  - `flex-shrink: 1`: Items can shrink smaller than their `flex-basis`
  - `flex-basis: auto`: Items have a base size of `auto`
- `flex-flow` is a shorthand for combining `flex-direction` and `flex-wrap`
- `place-content` is a shorthand for `justify-content` and `align-items`

### Grid Layout

What problem does a Grid Layout solve?

What is a Grid layout?

Grid is similar to flexbox but designed to control multi-access layouts. Grid gives you precise control of items in two dimensions

### Normal Layout (Normal   Flow)

If grid and flexbox are not being used, your elements display in normal flow.
- Normal Flow: Document flow is the arrangement of page elements, as defined by CSS positioning statements
- `display: inline-block`: Respects block margin and padding but still flows inline with the text
- `float` property: Wrap text around images with values `left`, `right` or `inherit`
- `column-count` property in lists: Use for multicolumn layout where the content at the end of one column flows into the next column
- `position` property: How an element is positioned in the normal flow and relative to others
  - `relative`: positioned relative to itself and also makes it the containing block of any child elements with `position: absolute` (children repositioned relative to this element).
  - `absolute`: breaks the element out of the current document flow
    - Can position elements anywhere you want such as using `top`, `bottom`, `left`, `right` in it's nearest relative parent (root element is also relative) 
    - All of the content surrounding an absolute element reflows to fill the remaining space left by that element.
  - `fixed`: behaves in a similar way to absolute, with its parent being the root `<html>` element
  - `sticky`: Has the fixed aspects of `fixed` and the more predictable document flow-honoring aspects of `relative`. When the viewport scrolls past the element, it stays anchored to the `top`, `bottom`, `left`, `right` values
    - E.G. Use this for sticky sidebar elements that follow the page when scrolling
  - `static`: Default value