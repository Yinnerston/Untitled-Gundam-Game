---
sidebar_label: "MVC & WebAPI"
---

# MVC & WebAPI

**Models**: Data model
**Views**: UI Components
**Controllers**: Handle browser requests, retrieve model data then return a response
[Service Layer](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/validating-with-a-service-layer-cs): Additional layer that separates validation logic from your controller

Ideas behind MVC:
- Separation of converns. E.G. Views don't handle business logic

### Controller

- MVC implements URL routing logic in this format: `/[Controller]/[ActionName]/[Parameters]`
- `public string Index()` : BaseURL method
- `MapControllerRoute` : URL template where you define parameters of a route
- Components of a route method
  - `IActionResult` : Interface for contracts that return the result of an action method. Generally return this or a something derived from ActionResult
  - `View` method : Renders the view
    - If the view is not specified, MVC defaults to using the view with the same name as the action method
    - E.G. `/HelloWorld/Index` --> `/Views/HelloWorld/Index.cshtml`
- **How to pass data from controllers to views?**
  - The preferred method is to use a View Model
  - **View Model** : Pass strongly typed models using the queryset as a parameter in the `View()` method. You can define the model to be passed to a view with a `@model` directive
  - Controllers can set `ViewData` K/V pairs which can be used in the Views through the `ViewData` dictionary. These models are not strongly typed.

### Views

- `Views/_ViewStart.cshtml` brings in shared layouts to each view
- [Layout](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout?view=aspnetcore-6.0) : Reduce duplicated code in views by specifying common structure in a webpage
  - The default page is named `_Layout.cshtml` by convention
  - ![Layouts Example](imgs/layouts.png)
- Views should avoid doing business logic or interacting with the db directly

### Models

- **DbContext** : Represents the unit of work
  - **KNOWS Entities that have been previously queried on it** --> This can introduce bugs
- DbSet

Register DbContext with the dependency injection container

Foreign Keys:
- A One-To-One relationship requires:
  - A primary key on the principal entity
    - Optional: Reference navigation to principal
    - By default, Id is the primary key
  - A foreign key on the dependent entity
    - Optional: Reference navigation to principal
    - By default, EF makes a property as a foreign key when its name matches with the principal entity's primary key
- Use `[ForeignKey(name)` to override the default attribute for a foreign key
  - https://www.entityframeworktutorial.net/code-first/foreignkey-dataannotations-attribute-in-code-first.aspx
```csharp
using System.ComponentModel.DataAnnotations.Schema;
public class Post  {  // principal
  public int Id { get; set; }
  public ICollection<Comment> Comments { get; set; }  // One to many relationship with Comment
}

public class Comment  { // dependent
  public int Id { get; set; }
  public int PostId { get; set; } // Reference to Post's PK makes this the foreign key
  public Post Post { get; set; }  // Reference navigation to principal
}
```

[Conditions & `DataAnnotation` Attributes on Entity attributes](https://learn.microsoft.com/en-us/ef/core/modeling/):
- `required` keyword : Used to prevent warning on uninitialized non-nullable values.
- Many-to-one relationships: Uze `ICollection<>`
- Can override `OnModelCreating` in your DbContext and do custom configuration with the fluent API
- `[Comment("")]`
- `[MaxLength(X)]`
- `[Unicode]` configured as unicode by default
- `[Column(Order = X)]`

Default Values
- `[DatabaseGenerated(DatabaseGeneratedOption.Identity)]` value generated on inserted entities
- `[DatabaseGenerated(DatabaseGeneratedOption.Computed)]` value generated on add or update
- ^ is equvalent to:
```csharp
modelBuilder.Entity<Blog>()
    .Property(b => b.Rating)
    .HasDefaultValue(3);
```
- EF Core doesn't specify a default way to set timestamps:
```csharp
modelBuilder.Entity<Blog>()
    .Property(b => b.Created)
    .HasDefaultValueSql("getdate()");
```
- Computed values:
```csharp
modelBuilder.Entity<Person>()
    .Property(p => p.DisplayName)
    .HasComputedColumnSql("[LastName] + ', ' + [FirstName]");
```

**JSON Columns**:
- [Release Notes](https://devblogs.microsoft.com/dotnet/announcing-ef7-release-candidate-2/)
- 

### Service Layer

### WebAPI

- Data Transfer Object (DTO)
- Visual studio makes creating CRUD APIs very easy. Just define a model then create a scaffold item to controller