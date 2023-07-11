---
sidebar_label : Intro and Data Model
---

# Data Model

- Use singular not plural table names
- 
```mermaid
erDiagram
    User    {
        int id PK "To be added with Azure Active Directory B2C"
        string displayName
    }
    Post    {
        int id PK
        string title "StringLength=512"
        string description "StringLength=4096, optional=True"
        int postType "enum value of type PostType"
        jsonb postData "json storing url, etc."
        datetime createdAt "DefaultValue=getutcdate"
        enum PostType "integer choice YOUTUBE: 0, WEBSITE: 1, WEBGL_ANIMATION: 2, WEBGL_GAME: 3"
    }
    CommentPath }o--|{ Post : "closure table"
    CommentPath }o--|{ Comment : "closure table"
    Comment    {
    int id PK
    int post FK "Post"
    int user FK "User"
    string commentText "StringLength=4096"
    datetime createdAt "DefaultValue=getutcdate"
    boolean hasReplies "default=False. Denormalized count > 0 on descendents in CommentPath"
    int depth "DefaultValue=0. >=0"
    }
    CommentPath   {
        int id PK
        int post "Post"
        int ancestor FK "Comment"
        int descendent FK "Comment"
        int depth "DefaultValue=0. >=0"
        ordering order "Order by [post, ancestor]"
        constraint uniqueTogether "[post, ancestor, descendent]"
        index indices "[post, ancestor, descendent]"
    }

```