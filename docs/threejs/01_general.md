# ThreeJS

Build Tool: Use vite

Bundler:

### Camera

Make sure the canvas' aspect ratio matches the camera!

[`PerspectiveCamera`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera): Camera that renders with human perspective
- Field of View (vertical): 45-75 recommended
- Aspect ratio: width / height of the render
- Near and far: Range of lengths in which objects are rendered
  - Don't use extremely small values to prevent z-fighting (gpu might not distinguish between extremely small distances)
  - Defaults to 1, 1000

OrthographicCamera: Renders without perspective. Object is the same size regardless of distance to camera
- left, right, top, bottom: Distances in the direction you will render
- near and far
- You need to use the canvas ratio `const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 * aspectRatio, 1, - 1, 0.1, 100)` to keep the same ratio of dimensions of the shape regardless of the aspect ratio
  - Canvas can stretch which will otherwise stretch the threejs projection

ArrayCamera: Render the scene from multiple cameras on specific areas of the render

StereoCamera: Two camera that mimic the eyes to create the parallex effect (use with VR)

CubeCamera: 6 Renders based on each face of the cube (used in environment maps --> reflections, shadows, etc.)

### Types of Camera Controls

Can Listen on `mousemove`
- Don't forget to normalise mouse coordinates to [0, 1] or [-0.5, 0.5]

DeviceOrientationControls: Automatically retrieve the device orientation (useful for vr)

[OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls): Orbit an object in a spherical orbit

FlyControls: Fly around and rotate the camera

FirstPersonControls: Like FlyControl but with a fixed up axis

PointerLockControls: Uses pointer lock JS API (WASD first person)
- Makes the mouse disappear (use this as the FPS shooter camera)

TrackballControls: Like OrbitControls but without vertical angle limit

TransformControls: Let's you transform objects using AxesHelper. Let's you move objects around

Damping: Dampening the control movement to increase smoothness
- Check if controls has `enableDamping` attribute

Other considerations:
- FOV adjustment
- Sensitivity
- Zoom levels
- Invert Y Axis
- Accessibility: Reduce camera shake, stable horizon, ^

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

Group: Use to group objects together in the scene graph so transforms can be collectively applied to them

### Animations

`Window: requestAnimationFrame()` method: Tell the browser you want to update an animation. The browser paints the animationin the next repaint / frame.
- Call this at the end of the animation loop / tick function

GSAP: Javascript animation framework for the web
