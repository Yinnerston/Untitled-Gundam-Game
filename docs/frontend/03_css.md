---
sidebar_label: "CSS"
---

# CSS : Cascading Style Sheets

- https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS
- https://reactnative.dev/docs/flexbox
- https://maintainablecss.com/chapters/introduction/
- W3C Spec: https://www.w3.org/Style/CSS/ --> Use to go deeper

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

Example CSS:
```css
h1 {
  color: red;
  font-size: 5em;
}

.exampleClassName  {
  color: blue;
}

#idSelectorName {
  color: green;
}

li p  {
  color: green;
}

h1 + p {
  font-size: 200%;
}
```
- **Selector**: Rules open with selctors that select the HTML element to style (`h1` in the example)
  - In the example above, we use an element selector (selects all `h1` elements)
  - The class selector uses a `.` on the class attribute specified in HTML
  - The id selector uses a `#` on the id attribute specified in HTML
  - Can combine the selectors such as `h1.className` which selects all `h1` elements with the class attribute "className"
- `{}` curly braces enclose the declarations
- **Declarations**: **Property** and **value** pairs
  - Property: Different allowable values based
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
```
- Use the `:` symbol to target styles based on the state of an element


How to add CSS:
- Link styles.css in the `<head>` element using `<link rel="stylesheet" href="styles.css" />`
- Add `<style>` element (bad practice as can lead to inconsistencies imports, better to keep everything on a stylesheet)

