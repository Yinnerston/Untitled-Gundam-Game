---
sidebar_label: "Game Mechanics in Unity"
---

# Game Mechanics in Unity

I'm recapping what I've learnt from making a 2D Microgame.

### General mechanics:

- Prefab: We can attach components to GameObjects then save them in our assets
  - The GameObjects can be deleted from the scene but saved as prefabs, where they will retain the components that are attached to them.
  - I use a bullet prefab with attached RigidBody2D and CircleCollider2D components as a prefab that is spawned in, but it does not start in the scene.

### Shooting Mechanics:

- Instantiate a Bullet prefab on mouse click from the current position of the weapon
  - Regulate the fire rate by?
  - Bullet prefabs have their own speed
  - Velocity vs updating translation
  - Bullets are RigidBody2D and Collider2D objects
    - This means that bullets have collision detection (Collider2D) and can be moved by the physics engine (RigidBody2D)

### Callbacks

- Callback for decrementing HP
```csharp
private IEnumerator f()
{
  yield return new WaitForSeconds(nSeconds);
}
StartCoroutine(f());
```
- Is this design pattern good? Possible raceBoro conditions?

### Screenspace and UI Elements

- Screen Space - Overlay: Renders UI over the screen entirely regardless of the active camera
- Screen Space - Camera: Same but displays only to a specific camera
  - E.G. Minimap
- World Space: Renders UI in the world itself
  - E.G. Quest icon in the world

Heads Up Display (HUD):
- Create UI Components like panels in the Canvas as constant scale HUD components

Minimaps: Cameras can be attached as 
- Create render texture in project assets
- Attach render texture to UI RawImage component
- Attach render texture to camera for your minimap
