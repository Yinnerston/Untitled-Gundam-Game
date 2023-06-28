---
sidebar_label: "First 2D Game"
---

# 2D Unity Game

### Cheat Sheet
- [Unity Cheat Sheet](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityHotkeys.html)
- Duplicate object : Ctrl + D
- 
### Game Design:

- Game overview screen:
- Player experience:

### Fundamental Concepts:

- GameObject: Fundamental building block in unity --> Represents every object
- Component: Functional pieces of every GameObject. Properties that define the behaviour of a GameObject.
- Sprite: 2D graphic object that comes from a bitmap image
  - Sprites are made from pixels
  - Unit: Unit in unity have no meaning. New assets default to 100 pixel s per unit
- Transformations
  - Rotate
  - Translate
  - Scale
- Methods are 3D by default. Override 2D versions of methods by appending 2D to the overriden method
- Serialize variables in unity: Append `SerializeField` to variables to allow changing the value in the unity inspector
  - Value in the inspector overrides the constant value defined in the code
```csharp
[SerializeField] float steerSpeed = 1f;
```
- Input System: Convert physical action to game information
  - Unity has an old and new system
  - Old: Uses string reference to input manager. Values in range [-1, 1].
    - "Horizontal" and "Vertical" Axis defined in your project settings --> We use these string references
  - New:
- FPS impacts how often the update function is called. FPS and updates are proportional
  - Need to multiple each movement by `time.deltaTime` to make movement framerate independent
- Collision:
  - Colliders (2D): Detects overlapping colliders
  - RigidBody (2D): Causes interaction between colliders in physics engine
  - Detect collisions (2D) with OnCollisionEnter2D
- Encapsulation with empty objects: TODO:
- References: Reference to other GameObject(s)
  - E.G. Used to fix camera's positions to player object
- [**Unity Execution Order**](https://docs.unity3d.com/Manual/ExecutionOrder.html):
  - Physics is fixed
  - Late Update: 
  

### Collision Detection

[Detailed Collision Documentation](https://docs.unity3d.com/Manual/CollidersOverview.html)

- **Mesh Collider** (3D) or **polygon collider** (2D) match the shape of the object the component is attached to 
- **Static colliders** : Create motionless objects such as floors using colliders without a RigidBody component 
- Physics material: Can attach physical properties to collision (e.g. surface materials like ice which are slippery)
- **Triggers**: Triggers are not considered as solid objects but have collision detection
  - **OnTriggerEnter** : Triggers callback event when another collider touches the trigger collider
  - Can give objects Tags. The string reference to a tag is checked OnTriggerEnter
- **OnCollisionEnter** : Callback to initiate action on collision (or OnCollisionEnter2D)
- See the collision matrix for all the interactions

### Best practices

- Different scripts for different behaviours