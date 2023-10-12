---
sidebar_label: "Responsive Design"
---

# Responsive Design

### Media Queries

**`@media` rules**: CSS Rules that query based on the dimensions / form factor of a user's device
- Media Query: Apply CSS based on rule when the media type matches and the condition is true
- Can specify media explicitly in CSS or use the `<link>` element with `media="mediaTypeHere"`
  - Can specify `type and (feature)` in the media attribute value

Example Media Query to set columns in an article to 2 when width is in the range (50em, 60em)
```css
@media (min-width: 50em) and (min-height: 60em) {
  article {
    column-count: 2;
  }
}
```

**Media Query Syntax**: `@media type and (feature)`
- You can join multiple media queries using `and`
- `orientation` feature: Check fi the browser is in landscape or portrait
- Default media type is `all`
- `min-width` feature: Useful media feature to apply styles when the browser is wider than a certain width
  - `max-width` feature applies styles below a certain width

**Media Breakpoints**: Point at which the media feature condition becomes true
- Best practice to set breakpoints based on your content rather than popular device sizes (these are subject to change on each technology release cycle)
- When to use media queries based on the height OR width?
  - Width: Most common. Use this for the vast majority of cases
  - height: Use cases include
    - Full screen landing pages (content must fit without scrolling)
    - On screen keyboard considerations
    - Horizontal scrolling
    - Fixed size headers and footers (then adjust the size of the header)
