---
sidebar_label: "Revisitng OOP"
---

# Revisiting OOP

[C# is an object oriented language docs](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types)

I feel like I should revisit OOP
- See my **knowledge docs** [`COMP2511 OOP`](./assets/COMP2511%20OOP.docx)
- I want to explore the idea of "Why was OOP invented?"

### Why was the OOP paradigm created?

- https://news.ycombinator.com/item?id=24651580

### Quick OOP review

- Classes: Support inheritance
- Structs: Primarily for storing data
- Interface: Define constract that can be implemented by classes and structs.
- Enum: Set of constant values

### Design patterns

- **Singleton Pattern**: The Singleton pattern ensures that only one instance of a class exists throughout the application. It can be useful for managing global game objects or systems like a game manager or audio manager.
- **Factory Pattern**: The Factory pattern provides a way to create objects without exposing the creation logic to the client. It can be used when you need to instantiate different types of objects based on certain conditions or parameters.
- **Observer Pattern**: The Observer pattern establishes a one-to-many dependency between objects, where changes in one object trigger updates in other objects. This pattern is useful for event handling or creating systems that require communication between different components.
- **Command Pattern**: The Command pattern encapsulates a request as an object, allowing you to parameterize clients with different requests, queue or log requests, and support undo operations. It can be used for input handling, AI behaviors, or implementing an undo/redo system.
- **Strategy Pattern**: The Strategy pattern defines a family of algorithms, encapsulates them, and makes them interchangeable. It enables you to select algorithms at runtime, providing flexibility and avoiding code duplication. This pattern is useful for implementing different behaviors or strategies for AI or game mechanics.
- **Object Pooling Pattern**: The Object Pooling pattern pre-creates and maintains a group of reusable objects to improve performance by avoiding instantiation and destruction overhead. It is commonly used for managing bullets, particle effects, or other frequently created/destroyed objects.
- **Component Pattern**: The Component pattern is commonly used in Unity, where game objects are composed of smaller reusable components. Each component encapsulates a specific behavior or functionality, which can be easily added or removed from objects at runtime.
- **Flyweight Pattern**: The Flyweight pattern reduces memory usage by sharing common data across multiple objects. It can be useful for managing large sets of similar objects with shared properties, such as trees, rocks, or other environmental objects.
- **State Pattern**: The State pattern allows an object to alter its behavior when its internal state changes. It is useful for managing complex state machines or implementing behavior that depends on the state of an object.

### Design patterns to use with .NET

- **Strategy, observer, factory, command patterns** are shared with Unity and .NET
  - **Why**? Write some examples for how these patterns are used similarly and how they differ between game dev and web dev.
- **MVC (Model-View-Controller) Pattern**: The MVC pattern separates the concerns of data representation (Model), user interface (View), and application logic (Controller). It provides a clear separation of responsibilities and facilitates modular development and testability.
- **Repository Pattern**: The Repository pattern abstracts the data access layer, providing a consistent interface for interacting with data storage (e.g., databases). It helps decouple the application logic from specific data access technologies, making it easier to switch between different implementations.
- **Dependency Injection (DI) Pattern**: DI is a technique that allows you to inject dependencies into an object rather than letting the object create them itself. It promotes loose coupling and facilitates testability and flexibility. In .NET, you can use frameworks like ASP.NET Core's built-in DI container or third-party libraries like Autofac or Ninject.
- **Decorator Pattern**: The Decorator pattern allows you to add additional behavior or functionality to an object dynamically. It enables you to extend the functionality of classes without modifying their core implementation. This pattern can be useful for adding cross-cutting concerns like caching, logging, or authorization to your web server components.
- **Proxy Pattern**: The Proxy pattern provides a surrogate or placeholder object that controls access to another object. It can be useful for implementing caching, load balancing, or security mechanisms in your web server.
- **Template Method Pattern**: The Template Method pattern defines the skeleton of an algorithm in a base class and allows subclasses to override specific steps of the algorithm. It can be useful for defining a common structure for request handling, allowing subclasses to provide specific implementations.

