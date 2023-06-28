---
sidebar_label: "History of .NET"
---

# History of .NET

<iframe width="560" height="315" src="https://www.youtube.com/embed/TKWj0cVhiE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How was C# created?

- Gates's Vision: Uncouple the language from the machine
- "First we shape of tools, then the tools shape us."
- Runtimes in the 90s:
- Libraries in the 90s:
- Base class libraries in the 90s:

### What is .NET?

- `.NET` is a server-side platform 
  - C# / F# / VB is converted to a Compiled Intermediate Language (CIL)
  - Just-In-Time compiler converts CIL to machine code 
  - Language =/= Framework. Different versions of languages have different compatibilities with `.NET`.
- What does `.NET` solve?
  - "It's windows all the way down" --> Why do we care?
- `.NET Framework` stopped at 4.8
  - Abstraction layer that was replaced by `.NET Core` which is now called `.NET`
- Why was the `.NET Core` framework created --> Reinventing .NET
  - Compilation /workload began to take too long due to too much added to the framework
  - Uses a different abstraction layer but has the same intermediate compiled languages
  - Think of .net core as a different abstraction layer that compiles into the same intermediate language
:::tip Versions
Versions of `.NET Core` after 5 are simply called `.NET`
:::
- `.NET Standard` bridges the gap of ??? --> Replaced by .NET 5.0
  - Unity
  - ^ Does it bridge all these into one abstraction layer?
- `.NET 6.0` collapses above abstraction layers into one ???
- Xamarin : platform for developing native mobile applications using .NET
  - Is this a pokemon? It evolved into `.NET MAUI`
- Mono : Open source implementation of .NET DEAD
- ASP.NET: Web application framework related to .NET


### History lessons from .NET

- Java was invented in 1995 as a platform independent language
- .NET Framework was invented in 2002 to fit the microsoft ecosystem. They are competitors
- Modern .NET is platform independent, especially given IaaS services that virtualise the operating system
- .NET was invented as a comprehensive development platform for windows applications and web services
- Why was .NET invented with Just-in-time (JIT) compilation?
  - Performance optimization: Runtime information allows the compiler to make optimizations based on the specific execution context. It can be highly optimized for target hardware compared to static compilation.
    - E.G Choosing SSE2 vector CPU instructions when the CPU supports them
    - System collects statistics about how the program is actually running in the environment, it can therefore recompile for optimal performance
    - Global code optimizations without losing the advantages of dynamic linking and without the overheads inherent to static compilers and linkers
- Why is .NET still around?
  - It's now cross-platform, there's an active open-source community and it's still supported by microsoft with integrations with microsoft products
- **[XAML](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0)** : Declarative markup language for creating the UI for a .NET app
- **[Windows Communication Foundation (WCF)](https://learn.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf)** : framework for building service-oriented applications
  - TODO: Examine in more detail

### [.NET Myths Dispelled](https://news.ycombinator.com/item?id=30654114)

- TODO:

### What questions did I ask?

-  What is the history of platform independent code?
   -  How does Java relate to .NET?
-  Are operating systems just part of the "plumbing" now?
   -  is this the idea of IaaS
- Why was .NET invented?
   -  What problem was Just-in-time compilation solving?
   -  Why did it survive? Why is it still supported?
   -  Is .NET serverside or clientside? Yes. .NET is a serverside MVC framework.
   -  Does .NET support unity??
-  Why is javascript interpreted?
   - Must run on multiple platforms --> Cannot be compiled to native machine code because it needs to run on many platforms
   - Must be embeddable in HTML pages --> Needs to dynamically handle events & callbacks from HTML elements so it needs to be interpreted unless you compile the entire webpage
-  What is a modern services dev?
   -  WebAPI?
   -  Microservices?
-  Web developers are used to lousy tools...
   -  [What are good tools?](./05_web_tooling.md)
-  What is XAML?
-  What is WCF?

### What questions did other people ask?

### What sounds interesting?
- Xamarin
- WebAPI vs these frameworks?
  - What do people mean when refering to web frameworks instead of frameworks like .NET ??
- Dotnet for beginners https://news.ycombinator.com/item?id=26882606
- Examples of best C# code https://news.ycombinator.com/item?id=33329079