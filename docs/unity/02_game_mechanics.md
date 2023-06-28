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