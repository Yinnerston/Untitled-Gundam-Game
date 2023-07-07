---
sidebar_label: "Language Features and Quirks"
---

# Language Features and Quirks

### What Questions do I have

The use of classes with the `I` prefix such as `IClassName`?

What is the async model in c#? Any quirks I need to know?

Decorators in c#?

```csharp
public TodoContext(DbContextOptions<TodoContext> options)
    : base(options)
```
- What does the `: base(options)` syntax represent?

Attributes: `[DataAttribute]` syntax using a annotation enclosed in `[` and `]` square brackets
- E.G. `[SerializeField]` exposes the serializable field in the Unity Editor? 
- Used to associate metadata or declarative information with code.

using statement --> Disposes of context after statement has completed execution
- We use this when seeding our first data data models in our web application. 
- Where would this feature be useful?

[Best way to compare strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)

Interfaces

Lambdas

LINQ

Null Coalescing operator / Nullable Reference Types
- [What does a `= null!;` assignment represent?](https://stackoverflow.com/questions/54724304/what-does-null-statement-mean)
- This is the null forgiving operator --> `null!` applies the `!` operator to the value null
  - Overrides nullability of `null` --> Tells compiler `null` is a non-null type
  - This allows null to be safely accessed
  - WARNING: This operator negates the compiler check for null safety. We shouldn't use it in our code.

Code Generators
- Source Generators

`yield return`
- IAsyncEnumerable
- Async Streaming
- TAP

Reflection

Roslyn analysers

Generics
- Extension methods
- Type guards

Expression Trees

IQueryable / Queryprovider
- convert to SQL 

Records

Pattern matching

Multithreading

Actions
- Side effects? For encapsulation?
