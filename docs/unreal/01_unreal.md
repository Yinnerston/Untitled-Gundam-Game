# Unreal Engine

### Rider

`Shift + Shift`: Search anywhere

`Ctrl + Left Click`: Goto definition

### Class Hierarchy

https://www.tomlooman.com/ue4-gameplay-framework/

Object --> Actor --> Pawn --> Character --> SCharacter
- Object: base class
- Actor: Object that can be placed or spawned in.
  - Actors support damage out of the box.
  - `BeginPlay`: Use to setup basic logic, timers, etc after fully initialized
  - `Tick`: Called on every frame
  - `EndPlay`: Called when it is removed from the world
  - `GetComponentByClass`: Find a single component instanc eof a specific class
  - `GetActorLocation`
  - `NotifyActorBeginOverlap` + `GetOverlappingActors`
  - [Actor lifecycle](https://docs.unrealengine.com/5.3/en-US/unreal-engine-actor-lifecycle/)
- Pawn: Controlled by players or AI
- Character: pawn with implemented walking movement
- SCharacter: Our first C++ Class

Prefixes: UAFEI
- U : Classes deriving from UObject
- A : Deriving form actor
- F : Structs
- E : Enums
- I : Interfaces

Boilerplate:
- `GENERATED_BODY()` : 

### Engine Layout
- Viewport: Primary view where you can see the level visually
  - How RMB + WASD to move
  - G Game mode: Switch from player perspective to editor perspective 
  - Ctrl + Alt + Drag: Select objects in the bounding box
- Details Panel:
  - Lock panel to bind to currently selected Actor
- World Settings:
  - Kill-z : Kills actors that go below this z value

# Unreal Property System:
- UPROPERTY, UFUNCTION, UCLASS, USTRUCT, UENUM
- Used for marking up C++ fopr editor and blueprint access, network behaviour (multiplayer) and memory management

### First Hour with Unreal

- `Windows > Env. Light Mixer`: Add volumetric clouds, skylights, sky atmosphere etc.
- Project Settings: Define default character, gamemode, etc.
- World Settings: Define per level character, gamemode, etc.