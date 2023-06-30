---
sidebar_label: "Lessons from Django"
---

# Lessons from Django

I already have experience with the MVC paradigm through previous websites I've built with Django, Flask, and FastAPI.

### Razor Scaffolds vs Django Templates

### Nuget vs pip requirements.txt package managers

- Make sure to install versions that are compatible with your dependencies (e.g. .NET version, C# version, etc.)

### Models and migrations

Migrations
```bash
# goto Tools > NuGet Package Manager > Package Manager Console
# run in shell: InitialCreate is the name of our first migration
Add-Migration InitialCreate
Update-Database
```
Data context
