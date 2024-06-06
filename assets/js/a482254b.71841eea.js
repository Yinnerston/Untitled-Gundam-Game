"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Revisitng OOP"},o="Revisiting OOP",s={unversionedId:"csharp/oop_revisited",id:"csharp/oop_revisited",title:"Revisiting OOP",description:"C# is an object oriented language docs",source:"@site/docs/csharp/02_oop_revisited.md",sourceDirName:"csharp",slug:"/csharp/oop_revisited",permalink:"/Untitled-Gundam-Game/docs/csharp/oop_revisited",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/csharp/02_oop_revisited.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Revisitng OOP"},sidebar:"tutorialSidebar",previous:{title:"C# Language and .NET",permalink:"/Untitled-Gundam-Game/docs/csharp/csharp_language"},next:{title:"Language Features and Quirks",permalink:"/Untitled-Gundam-Game/docs/csharp/language_features_and_quirks"}},l={},c=[{value:"Why was the OOP paradigm created?",id:"why-was-the-oop-paradigm-created",level:3},{value:"Quick OOP review",id:"quick-oop-review",level:3},{value:"Design patterns",id:"design-patterns",level:3},{value:"Design patterns to use with .NET",id:"design-patterns-to-use-with-net",level:3},{value:"Design By Contract (DbC)",id:"design-by-contract-dbc",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"revisiting-oop"},"Revisiting OOP"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types"},"C# is an object oriented language docs")),(0,r.kt)("p",null,"I feel like I should revisit OOP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See my ",(0,r.kt)("strong",{parentName:"li"},"knowledge docs")," ",(0,r.kt)("a",{target:"_blank",href:a(7068).Z},(0,r.kt)("code",null,"COMP2511 OOP"))),(0,r.kt)("li",{parentName:"ul"},'I want to explore the idea of "Why was OOP invented?"')),(0,r.kt)("h3",{id:"why-was-the-oop-paradigm-created"},"Why was the OOP paradigm created?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24651580"},"https://news.ycombinator.com/item?id=24651580"))),(0,r.kt)("h3",{id:"quick-oop-review"},"Quick OOP review"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classes: Support inheritance"),(0,r.kt)("li",{parentName:"ul"},"Structs: Primarily for storing data"),(0,r.kt)("li",{parentName:"ul"},"Interface: Define constract that can be implemented by classes and structs."),(0,r.kt)("li",{parentName:"ul"},"Enum: Set of constant values")),(0,r.kt)("h3",{id:"design-patterns"},(0,r.kt)("a",{parentName:"h3",href:"https://refactoring.guru/design-patterns/catalog"},"Design patterns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Singleton Pattern"),": The Singleton pattern ensures that ",(0,r.kt)("strong",{parentName:"li"},"only one instance")," of a class exists throughout the application. It can be useful for managing global game objects or systems like a game manager or audio manager.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implementation: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make default constructor private"),(0,r.kt)("li",{parentName:"ul"},"Static creation method that creates the first object or returns a reference to the singleton object"))),(0,r.kt)("li",{parentName:"ul"},"Use cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log files"),(0,r.kt)("li",{parentName:"ul"},"Database class (for one database)"),(0,r.kt)("li",{parentName:"ul"},"Game world"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"Singleton Pattern",src:a(7287).Z,width:"541",height:"426"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Factory Pattern"),": The Factory pattern provides a way to create objects without exposing the creation logic to the client. It can be used when you need to instantiate different types of objects based on certain conditions or parameters.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implementation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define a method to create objects instead of using the object's constructor directly"),(0,r.kt)("li",{parentName:"ul"},"Subclass the factory to create different subclassed objects"))),(0,r.kt)("li",{parentName:"ul"},"Use case:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Resolve dependencies by ensuring the dependencies are resolved in the factory class"),(0,r.kt)("li",{parentName:"ul"},"Encapsulate complex initialization logic"),(0,r.kt)("li",{parentName:"ul"},"Payment gateways for different providers"),(0,r.kt)("li",{parentName:"ul"},"Data Loaders for different formats"),(0,r.kt)("li",{parentName:"ul"},"Auth providers for different auth providers"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Observer Pattern"),": The Observer pattern establishes a one-to-many dependency between objects, where changes in one object trigger updates in other objects. This pattern is useful for event handling or creating systems that require communication between different components.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any event driven programming"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"Observer pattern",src:a(3251).Z,width:"927",height:"341"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"Observer pattern UML",src:a(4302).Z,width:"1012",height:"312"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Command Pattern"),": The Command pattern encapsulates a request as an object, allowing you to parameterize clients with different requests, queue or log requests, and support undo operations. It can be used for input handling, AI behaviors, or implementing an undo/redo system.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implementation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Put business logic in a class implementing a Command interface that executes the functionality you want"))),(0,r.kt)("li",{parentName:"ul"},"Use cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Different UI elements reusing commands"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Strategy Pattern"),": The Strategy pattern defines a family of algorithms, encapsulates them, and makes them interchangeable. It enables you to select algorithms at runtime, providing flexibility and avoiding code duplication. This pattern is useful for implementing different behaviors or strategies for AI or game mechanics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Object Pooling Pattern"),": The Object Pooling pattern pre-creates and maintains a group of reusable objects to improve performance by avoiding instantiation and destruction overhead. It is commonly used for managing bullets, particle effects, or other frequently created/destroyed objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Component Pattern"),": The Component pattern is commonly used in Unity, where game objects are composed of smaller reusable components. Each component encapsulates a specific behavior or functionality, which can be easily added or removed from objects at runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flyweight Pattern"),": The Flyweight pattern reduces memory usage by sharing common data across multiple objects. It can be useful for managing large sets of similar objects with shared properties, such as trees, rocks, or other environmental objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State Pattern"),": The State pattern allows an object to alter its behavior when its internal state changes. It is useful for managing complex state machines or implementing behavior that depends on the state of an object.")),(0,r.kt)("h3",{id:"design-patterns-to-use-with-net"},"Design patterns to use with .NET"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Strategy, observer, factory, command patterns")," are shared with Unity and .NET",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Why"),"? Write some examples for how these patterns are used similarly and how they differ between game dev and web dev."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MVC (Model-View-Controller) Pattern"),": The MVC pattern separates the concerns of data representation (Model), user interface (View), and application logic (Controller). It provides a clear separation of responsibilities and facilitates modular development and testability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Repository Pattern"),": The Repository pattern abstracts the data access layer, providing a consistent interface for interacting with data storage (e.g., databases). It helps decouple the application logic from specific data access technologies, making it easier to switch between different implementations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependency Injection (DI) Pattern"),": DI is a technique that allows you to inject dependencies into an object rather than letting the object create them itself. It promotes loose coupling and facilitates testability and flexibility. In .NET, you can use frameworks like ASP.NET Core's built-in DI container or third-party libraries like Autofac or Ninject."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Decorator Pattern"),": The Decorator pattern allows you to add additional behavior or functionality to an object dynamically. It enables you to extend the functionality of classes without modifying their core implementation. This pattern can be useful for adding cross-cutting concerns like caching, logging, or authorization to your web server components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy Pattern"),": The Proxy pattern provides a surrogate or placeholder object that controls access to another object. It can be useful for implementing caching, load balancing, or security mechanisms in your web server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Template Method Pattern"),": The Template Method pattern defines the skeleton of an algorithm in a base class and allows subclasses to override specific steps of the algorithm. It can be useful for defining a common structure for request handling, allowing subclasses to provide specific implementations.")),(0,r.kt)("h3",{id:"design-by-contract-dbc"},"Design By Contract (DbC)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.eiffel.com/values/design-by-contract/introduction/"},"Building bug-free O-O software: An Introduction to Design by Contract")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Contracts are not maintained (not recommended) in .NET Core.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alternative is to use ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references"},(0,r.kt)("strong",{parentName:"a"},"Nullable Reference Types"))),(0,r.kt)("li",{parentName:"ul"},"I think pre/post conditions and invariants are still useful for documentation and readability purposes."),(0,r.kt)("li",{parentName:"ul"},"Don't have to have strict type checking but defining clauses will help me formalize my system")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/framework/debug-trace-profile/code-contracts"},"DBC in .NET framework")," --\x3e No longer supported by .NET Core"),(0,r.kt)("p",null,"How can you build reliable Object-Oriented software?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"static typing --\x3e Catches inconsistencies"),(0,r.kt)("li",{parentName:"ul"},"Garbage collection"),(0,r.kt)("li",{parentName:"ul"},"Reuseability? --\x3e How do you validate the problem"),(0,r.kt)("li",{parentName:"ul"},"Security")),(0,r.kt)("admonition",{title:"Quality software",type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"When quality is pursued, productivity follows")),(0,r.kt)("p",{parentName:"admonition"},"Carlo Ghezzi, Dino Mandrioli and Mehdi Jazayeri, SoftwareEngineering, Prentice Hall 1991")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is Design by Contract?\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We specify ",(0,r.kt)("strong",{parentName:"li"},"a contract between a routine and a potential caller"),". It contains the most important information that can be given about the routine: what each party in the contract must guarantee for a correct call, and what each party is entitled to in return."),(0,r.kt)("li",{parentName:"ul"},"To achieve this, we specify some  ",(0,r.kt)("strong",{parentName:"li"},"clauses"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"require")," : Input conditions or preconditions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ensure")," : Output conditions or postconditions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rescue")," : Mechanism to handle exceptions with strategies such as ",(0,r.kt)("strong",{parentName:"li"},"retry"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are the benefits of Design By Contract?\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we do not specify what a module should do, what ",(0,r.kt)("strong",{parentName:"li"},"guarantees")," do we have that a module will do it? (Law of exluded miracles)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seamlessness")," : We want to use a single notation and single set of concepts throughout the software lifecycle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standardised documentation"),": I define a short form of documentation below which strips all implementation information but retains the contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Handling exceptions")," : Exceptions are an inability to handle the contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Responses to exceptions under the DbC paradigm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retrying"),": Restore invariant and attempt again using the new strategy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organized panic"),": Restore invariant, terminate and report failure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"False Alarm"),": Continue (maybe take corrective measures)? This is the most unlikely scenario though.")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class DICTIONARY [ELEMENT]\nfeature\n    put (x: ELEMENT; key: STRING) is\n            -- Insert x so that it will be retrievable\n            -- through key.\n        require\n            count <= capacity\n            not key.empty \n        ensure\n            has (x)\n            item (key) = x\n            count = old count + 1\n        end\n\n    ... Interface specifications of other features ...\n\ninvariant\n    0 <= count\n    count <= capacity\nend\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Invariants"),": General clause which applies to an entire set of contracts defining a class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Class invariants"),": Describe properties which hold over all instances of a class"),(0,r.kt)("li",{parentName:"ul"},"Why? We use class invariants for configuration management and regression testing")),(0,r.kt)("p",null,"What to watch out for using DbC?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dishonest subcontracting: If you strengthen the precondition or weaken the postcondition, this can lead to disaster"),(0,r.kt)("li",{parentName:"ul"},"Should tests be the contract?"),(0,r.kt)("li",{parentName:"ul"},"Some problems can't be easily expressed as a contract."),(0,r.kt)("li",{parentName:"ul"},"Pre/Post conditions get exponentially more difficult with concurrency.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Do I need a model checker to verify the pre/post conditions? I can use promela")))))}m.isMDXComponent=!0},7068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/COMP2511 OOP-a74d72da24bfdcc984888ef16785d305.docx"},4302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/observer-pattern-diagram-23096fdfb3f0416a222e88ca4c74da35.png"},3251:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/observer-pattern-c8643f6d79a7f3391f91593938277b49.png"},7287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/singleton-pattern-ade6dcfce610cd57c4e6851cf2b61611.png"}}]);