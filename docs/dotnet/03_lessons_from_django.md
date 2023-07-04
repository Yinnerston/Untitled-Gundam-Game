---
sidebar_label: "Lessons from Django"
---

# Lessons from Django

I already have experience with the MVC paradigm through previous websites I've built with Django, Flask, and FastAPI.

- .NET supports hot reload from v6.0

### Razor Scaffolds vs Django Templates

- Razor Pages: HTML template page with associated C#
  - Layouts: The layout page controls the layout of each page
    - Imports HTML, Javascript and StyleSheets
    - Rendered where `@RenderBody()` is called
    - Layout property is set in `Pages/_ViewStart.cshtml`
  - Partials:
  - Templates:
  - Tag Helpers: Enable server-side code to render HTML. Denoted by the `@` prefix in the `.cshtml` file
- cshtml files : Markup engine language for the razor engine used to render serverside HTML pages. Consider these the equivalent to template files in Django or Jinja2.
  - cshtml.cs files:
  - `@page` and `@model YourApp.Pages.YourFolder.YourPage` directives transition html to razor page
    - `@page` : Can pass in route params
    - `@model YourApp.Pages.YourFolder.YourPage` specifies the type of model that is passed to the page
- `@RenderBody` : placeholder where all the page-specific views show up, wrapped in the layout page
- `@{...}` : The `{` and `}` characters enclose a block of c# code
- The `ViewData` dictionary : K/V store that passes data to the view
- `@namespace` Set the namespace in the template
  - Should I structure namespace based on file structure?

### Razor Page Models

Implementation of the **Page Controller pattern**, where there is a one-to-one mapping between pages and their controllers
- `public IActionResult OnGet()`: Initializes state for the page
- `public async Task<IActionResult> OnPostAsync`: Run when the page posts form data
- `Page()` method: Creates a `PageResult` object that renders the `.cshtml` page

### Nuget vs pip requirements.txt package managers

- Make sure to install versions that are compatible with your dependencies (e.g. .NET version, C# version, etc.)

### Models and migrations

Data Annotations: We can apply data annotations to model fields using attributes in the form of `[Annotation] DataType varName`
- [Validation with Data Annotation Validators](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/validation-with-the-data-annotation-validators-cs)
  - Example validators include:
    - `[Required]`, `[StringLength]`, `[RegularExpression]`, `[Range]`
- `[Display]` attribute: Specifies display name of a field
- `[DataType]` attribute: Specifies the type of data

Migrations
```bash
# goto Tools > NuGet Package Manager > Package Manager Console
# run in shell: InitialCreate is the name of our first migration. Change the name to whatever the name of your migration will be
Add-Migration InitialCreate
Update-Database
```
Data context : entry point for the LINQ to SQL framework.

How to set database connections?
- Use `ConnectionStrings` in `appsettings.json`

### Databases

**LocalDB**: Lightweight user-mode database for dev environment 
SQL Server Object Explorer (SSOX):
- Equivalent to admin console in Django
- Hotkey: `Ctrl + \` + `Ctrl + S`
**LINQ Queries**: 
- LINQ queries are lazily evaluated
- Can construct lambda expressions on LINQ queries such as conditional filters