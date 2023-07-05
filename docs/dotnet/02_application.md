---
sidebar_label: "Application"
---

# Application

### Cheatsheet

- Run app = ctrl + f5 = dotnet run
- **Service**: Any class that provides functionality within an application. Modular components are exposed as services.
- Time to review **SOLID** :>
  - **Single Responsibility Principle**: Every class should be responsible for only a single piece of functionality
  - **Open closed**: Open for extension, but closed for modification
    - When splitting the behaviour of a class, it should be split so that the functionality can be extended not modified
    - Relating to inheritance and subclassing --> E.G. Classes such as Car or Bike should extend a Vehicle superclass, the Vehicle class shouldn't be modified for the subclasses
  - **Liskov Substitution**: You should be able to change an instance using a subtype and the code will still work
    - If a subclass throws an error on something it's superclass implements, this violates this principle
  - **Interface Segragation**: More interfaces are better than too little
    - Allows you to split classes without LSP violations
  - **Dependency Inversion / Inversion of Control**: register the dependencies of your application into a container, which you can use to create any service. You can use the container to create both your own customc application services and the framework services used by ASP.NET Core
    - Depend on abstractions like interfaces not concrete instances
- **WebApplication**: Configures middleware, register endpoints, starts 
- **Don't Repeat Yourself (DRY)**

### ASP.NET Entry

1. Create a WebApplicationBuilder instance.
2. Register the required services and configuration with the WebApplicationBuilder.
3. Call Build() on the builder instance to create a WebApplication instance.
4. Add middleware to the WebApplication to create a pipeline.
5. Map the endpoints in your application.
6. Call Run() on the WebApplication to start the server and handle requests.

### File Structure

- Properties: Controls how VS launches and debugs
- Dependencies: 
  - Database context is injected into the controller in the MVC paradigm. How does this work?
- Connected Services:
- `.csproj` file: Defines project targets (platform, nuget packages)
- `Program.cs` : Import middleware
- Shared views in MVC such as the menu layout go into the `Views/Shared` directory

