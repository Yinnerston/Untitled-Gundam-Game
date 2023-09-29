# ThreeJS

Build Tool: Use vite

Bundler:

### Transform Objects

Four types of transform:
- position: Vector3
- scale: Vector3
- rotation: Euler --> Use radians.
- quarternion: Another way of representing rotations --> Avoids gimbal lock

Two ways of rotation:
- Updating `rotation` or `quarternion` will update the other property 
- The order of axes of rotation is important to avoid gimbal lock. Use `object.rotation.reorder` toset the order axes are rotated
- Gimbal Lock: Rotating on one axis changes the other axis orientation, causing two axes to align and causing the loss of rotation on one axis

Units are arbitrary. You decide what a unit represents

AxesHelper: Visualises the axis

`lookAt(...)`" Rotate an object's `-z` axis towards the target automatically/
- Useful for keeping the camera on an object

Group: Use to group objects together in the scene graph so transforms can be collectively applied to themgi