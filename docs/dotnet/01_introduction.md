---
sidebar_label: ".NET"
---

# .NET Core

[Textbook - ASP.NET Core in Action 3rd Edition](https://www.manning.com/books/asp-net-core-in-action-third-edition)

[History of .NET Notes](../web/04_history_of_dotnet.md)

### What can I build with .NET Core?

![Example ASP.NET Architecture](imgs/aspnet_core_example_architecture.png)

Paradigms build on top of ASP.NET Core
- Minimal APIs—Simple HTTP APIs that can be consumed by mobile applications or browser-based single-page applications.
- Web APIs—An alternative approach to building HTTP APIs that adds more structure and features than minimal APIs.
- gRPC APIs—Used to build efficient binary APIs for server-to-server communication using the gRPC protocol.
- Razor Pages—Used to build page-based server-rendered applications.
- MVC controllers—Similar to Razor Pages. Model-View-Controller (MVC) controller applications are for server-based applications but without the page-based paradigm.
- Blazor WebAssembly—A browser-based single-page application framework that uses the WebAssembly standard, similar to JavaScript frameworks such as Angular, React, and Vue.
- Blazor Server—Used to build stateful applications, rendered on the server, that send UI events and page updates over WebSockets to provide the feel of a client-side single-page application but with the ease of development of a server-rendered application

### What do I want to know about ASP.NET Core?

- I want to know more about the MVC paradigm
  - Seems like using **WebAPI with React** is the best architecture decision FOR REACT
  - I need to improve my understanding of the traditional **MVC paradigm**
    - View Engine: By default supports Razor and ASPX (Web Forms)
    - Model --> Entity framework
    - Controller --> Typical register routes stuff
  - Blazor / Razor templating is equivalent to Django / Jinja2 templating?
- I want to understand the **tradeoffs** between WebAPI, MVC, Razor & Blazor
  - I want to scope my requirements and pick the correct technology BASED on those requirements
- **Architecture design**: abstracting the application and domain logic so it can be used elsewhere
  - https://github.com/jasontaylordev/CleanArchitecture/tree/net6.0
  - https://code-maze.com/cqrs-mediatr-in-aspnet-core/#:~:text=How%20MediatR%20facilitates%20CQRS%20and,is%20an%20important%20limitation%20here. 