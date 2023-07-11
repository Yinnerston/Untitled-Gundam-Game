---
sidebar_label: "Frontend"
---

# Web Showcase Frontend

### Javascript --> Typescript

- `interface`: Define type for object
  - Generics: Pass in other interfaces as types / templates for attributes of the interface
  - Inheritance: Interfaces can extend other interfaces
- Side Effects: Events that are causes by system in a limited scope, whose effects are felt outside of the scope

### React Patterns & Common pitfalls

[Simple react patterns](https://lucasmreis.github.io/blog/simple-react-patterns/)

[React patterns](https://reactpatterns.com/)

<!-- [React bits](https://github.com/vasanthk/react-bits) -->

[Common beginner mistakes with React](https://news.ycombinator.com/item?id=35108672)

- Simple view component with some logic: My current way of doing things
  - Most important consideration is the loading, error and success states 
- Container & View pattern (Higher order components / HOC): Separate logic and view into two separate components
  - Use cases:
    - When the logic grows too complicated that it necessitates splitting into a separate component --> I don't think I'll start with this pattern for new components
    - We can compose reuseability of the business logic with differing view layers. E.G. If you want to render different routes in different views --> so you use a logic component to remove a dependency on a particular view logic
  - What are the cons of this approach?
    - possible data fetching side effects when you have duplicates of this business logic component? --> Duplicate side effects
    - Every view has to understand the shape of the props passed by the HOC / logic component
- Render props pattern: Passing a render function in the props as to abstract view logic from the logic component
  - Possible performance issues with passing inline functions?
- Provider pattern: Gather data, put it in a React context object, then access the context object in a HOC and pass it as a prop to the intended component
  - Modern usage of the provider pattern is seen in state management libraries like React Context, using a global context object with context consumers
- Proxy Component: TODO:
- Children pass-through: Obselete with class components --> Replaced by lifting the state
- Event handlers: KISS --> Write single event handlers for hte componetn and switching on event.type
  - Simple events can call the imported actions using arrow functions

