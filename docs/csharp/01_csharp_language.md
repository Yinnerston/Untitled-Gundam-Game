---
sidebar_label: "C# Language and .NET"
---

# C Language and .NET

Recommended Textbooks:
- *C# in Depth, 4th ed*., by Jon Skeet
- *Code Like a Pro in C#*, by Jort Rodenburg

### Why use C#

- We use C# in our chosen game engine [Unity](https://unity.com/)
- I'm learning .NET because it's a web framework written in C# too. I think it will be easier to have our codebase in one language so that new developers have an easier time contributing.

### What is C#?

[I'm following the microsoft docs](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/)

[Also reading through `Head First C#`](https://drive.google.com/file/d/15Y5aKcBjXt2kStfINNm01EO7y1qyJuF1/view?usp=sharing
)

- C# is a statically typed, object oriented language.
- Similar operation precedence to Javascript

### Types in C#

- **Value Type**: Directory contain their data
  - Tuples: concise syntax to group multiple data elements in a lightweight data structure
- **Reference Type**: Objects --> Store references
  - Class types: Base class of all other types object.
    - Defines data members and function members
    - Support single inheritance and polymorphism
    - Polymorphism: Can extend base class through method overriding
  - Interface types: User defined interfaces
    - 
  - Array types
  - Delegate types: represents references to methods with a particular parameter list and return type
    - Like function pointers, but OO and type-safe
- **Nullable types**: 
```csharp
    int? optionalInt = default; 
```

### Organizational concepts in C#

A hierarchy of organizational concepts:
- **programs**: Encapsulate namespace(s)
- **namespaces**: Organize related type(s)
- **types**: Contain member(s)
- **members**: Any element that that makes up a type. 
  - Static members: Belong to classes
  - Instance members: Belong to objects (instances of a class)
  - Members can be constants, fields, methods, properties, etc..
  - Accessibility: ``[public, private, protected, internal, protected internal, private protected]`
- **assemblies**: Compiled output of a program or library. Typically has a `.dll` or `.exe` file extension

### Methods and other function members

- **virtual** method: declared and implemented in a base class where any derived class may provide a more specific implementation
- **override** method: implemented in a derived class that modifies the behavior of the base class' implementation
- **abstract** method: declared in a base class that *must* be overridden in all derived classes
  - Virtual method with no implementation
- **Method overloading**: C# allows method overloading (unique signatures / unique params for methods of the same name)

Other function members include:
- Properties:
- Indexers:
- Constructors:
- Events:
- Finalizers:
- Operators:
- Expressions:
- Statements:

### Other features

- All collections share a unifying principle for iteration
  - All collections can be used with LINQ queries
- **LINQ queries**: SQL like syntax for composing queries on collections
  - Works with Memory, XML, databases, arrays, etc.. ALL COLLECTIONS!
```csharp
int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;
```
- C# supports `async` and `await`

# .NET Architecture

- C# programs run on .NET (virtual execution system called the common language runtime CLR)
  - CLR is an implementation of the common language interface (CLI) --> international standard
- C# is compiled into an intemediate language (IL) conforming to CLI
  - Intermediate language is compiled to machine code
- Execution of a C# Program:
  - Assembly loads CLR
  - Just in time (JIT) compilation converts the IL code to native machine instructions
  - CLR executes machine instructions directly on the processor


### What questions did I ask?

- What are generic classes used for?
- What is the main use case of delegate types? One use case seems to be mapping functions over arrays, but what other ways can this paradigm be applied?
- 

### What sounds interesting?
