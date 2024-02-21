---
title: "Canvas Basics"
subtitle: "What is Canvas API and how to use it to add graphics and animations into website/application"
date: "2024-02-21"
id: 2
---
Apart from essential elements like text, photo, button; graphics and animations are also important parts that makes website/application more visual. 

As a Frontend developer, I am always interested in animations and want to add interesting, gorgeous effects into my works. Among several methods to add graphics into web/app, I usally pick "Using libraries, frameworks" to deal with animation in my past projects because of its efficiency and simplicity but recently, I was curious how to work with those effects without the helps of additional libraries. Founding out that the possible techniques to archive above purpose are: 1. Canvas API, 2. SVG with Web animation API, 3. DOM elements with Web animation API; I had special interest in the power of canvas when it gives me the ability to control graphics in pixel unit. 

This article will be the summary of what I learnt about Canvas API.

### 1. Introduction to Canvas API
The Canvas API provides a means for drawing graphics using HTML Canvas and Javascript. 

To work with Canvas API, first, we have to add an HTMLCanvasElement to DOM with `<canvas>` tag. 

HTML Canvas is a element which provide a container, in which we can use Javascript to create and manipulate displayed contents. After adding HTMLCanvasElement, we can now call getContext() on it to get the context object, which provides us the ability of creating and manipulating displayed contents. 

A small note here is that, Canvas API basically focuses on 2D graphics. We can access those two-demantional context by one of the following syntax:

```js
//create a CanvasRenderingContext2D object representing a two-dimentional rendering context
const context = canvasElement.getContext('2d'); 
```
OR

```js
//create ImageBitmapRenderingContext which provides ability of replacing content of the canvas with a ImageBitmap.
const context = canvasElement.getContext('bitmaprenderer');
```

Apart from above contexts, HTMLCanvasElement can also expose to one of the following context and be used by WebGL API or WebGPU API to draw hardware-accelerated 2D and 3D graphics:
- "webgl": available on browsers that implement WebGL version 1 only.
- "webgl2": available on browsers that implement WebGL version 2 only.
- "webgpu": available on browsers that implement WebGPU API only.
However, as mentioned in the lead, this post will just centre on Canvas API, especially CanvasRenderingContext2D.

### 2. Canvas API: A powerful way to add graphics into website
In the second part of this article, I want to deep dive on how to draw graphics using canvas 2D context. 

First, add an Canvas with an `id` into HTML file as below:

```html
<canvas id='canvas' width='400' height='400'></canvas>
```

We can set width, height for above canvas by adding `width` and `height` attributes to `<canvas>` tag as above. `width` and `height` must be numbers, represent size of canvas in CSS pixcels. If no width or height was set, canvas size will default to width 300px and height 150px. Note that set HTML canvas element's size with css will affect only on the container only, not the graphic drew by Javascipt insize it. This can make the graphs be screwed and not displayed as expected so always make sure that the two sizes are same values.

Then from now on, all other works will be hanlde by Javascript. Next thing to do is get canvas element and call getContext to create CanvasRenderingContext2D object:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
```

Now we can use context to draw graphics and manipulate animations on the screen!

Canvas API control graphics per pixcels. With a bit Math, we can use it to add many interesting visual effect on wer projects.

#### 2.1. Drawing graphics:

Let's start with static graphic!

Below are some examples how to draw simple shapes by using Canvas API 2D context

Rectangle

```js
ctx.fillStyle = 'red'; 
ctx.strokeStyle = 'green'; 
ctx.lineWidth = 10;
ctx.beginPath(); //Create a sub-path. Neccessary before start drawing any graphic.
ctx.fillRect(0, 0, 150, 75) //Draw a 150 x 75 solid rectangle start from position [0,0] of canvas. Rectangle fill color will be 'red' as set in line 1
ctx.strokeRect(10, 10, 75, 150) //Draw a 75 x 150 stroke rectangle start from position [10.10] of canvas. stroke should be 10px green lines as set in line 2 and 3
```

Circular arc

```js
ctx.beginPath();
ctx.arc(50, 50, 25, 0, 2*Math.PI); //Draw a circular arc which centres at point [50.50] of canvas. Arc starts at 0rad and ends at 2pi, apprears as a full circle. Its radius is 25px.
ctx.fill(); //Fill area inside recently draw path with color set by fillStyle. If fillStyle is not set, default value will be 'black'
ctx.stroke(); //Draw recent draw path with stroke color set by strokeStyle. If strokeSytle is not set, default value will be 'black'
```

Ellipse

```js
ctx.beginPath();
ctx.ellipse(80, 50, 60, 40, Math.PI/2, 0, 2*Math.PI); 
//Draw a elliptical arc which centres at point [80.50] of canvas. Its radius x and radius y are 60px and 40px
//ellipse rotates pi/2 rad (90 degree) and starts at 0 rad, ends at 2pi rad
ctx.fill(); //Fill area inside recently draw path with color set by fillStyle. 
ctx.stroke(); //Draw recent draw path with stroke color set by strokeStyle.
```

Lines

```js
//Draw a straight line from point [10, 10] to point [300,300] of the canvas
ctx.moveTo(10,10);
ctx.lineTo(300, 300);
ctx.stroke();

//Draw Bezier curve line from point [20, 20] to point [150, 400], with 2 control points [100, 300] an [80, 80]
ctx.moveTo(20, 20);
ctx.bezierCurveTo(100, 300, 80, 80, 150, 400);
ctx.stroke();

//Draw quadratic Bezier curve from point [20, 20] to point [20, 300] with control points [20, 160]
ctx.moveTo(20, 20);
ctx.quadraticCurveTo(20, 160, 20, 300)
```

Base on the basic shapes, we can combine them to make complicated items!

#### 2.2. Adding Animations:

After drawing graphic with Canvas API, the next step is make it moving!

we can archive that by following below steps:
- Clear canvas
- Change position of the shapes slightly
- Redraw the shapes on new position
- Repeat the process to make the illutions that the shapes is moving

To repeat clear-redraw process on canvas, we can use `window.requestAnimationFrame()` or `setInterval()` method.

`setInterval()` is a quite familiar syntax that every Frontend Developer know. It is used for repeatly executing the function with a fixed time delay between each call. For example, we can draw a rectangle and make it move from right to left with this code:

```html
<canvas id='canvas' width='400' height='400'></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 0;
let y = 0;
ctx.fillStyle = 'red'; 
ctx.lineWidth = 10;
ctx.beginPath(); 
ctx.fillRect(x, y, 150, 75);
const moveRectInterval = setInterval(() => {
    x+=5 //Increase x coordinate of rectangles 5px every 100ms
    //Redraw rectangle if x < 400px, stop animation if x reaches 400
    if(x <= 400) {
    ctx.clearRect(0,0, 400, 400) //Clear all canvas
    ctx.beginPath();
    ctx.fillRect(x, y, 150, 75) //redraw rectangle in new position
    } else {
        clearInterval(moveRectInterval);
    }
}, [100])
```

However, not all the time you know how long should you delay between each clear-redraw circle, expecial with complicted animations while the rendering time might be varies on different devices and browsers. For this case, we have another window method: `requestAnimationFrame()`, to which you can pass your animated function as callback. It will make the animated function called repeatly after the previous one finish executing. Same with `setInterval()`, it comes with a method to cancel request, which is `cancelAnimationFrame()`.

Above "moving rectangle" can be rewrite with requestAnimationFrame as below:

```html
<canvas id='canvas' width='400' height='400'></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 0;
let y = 0;
ctx.fillStyle = 'red'; 
ctx.lineWidth = 10;
function animate() {
    let rqAnimationFrame;
    ctx.clearRect(0,0, 400, 400) 
    ctx.beginPath(); 
    ctx.fillRect(x, y, 150, 75);
    x+=5;
    if(x <= 400) {
    rqAnimationFrame = requestAnimationFrame(animate)
} else {
    cancelAnimationFrame(rqAnimationFrame)
}
}

animate();
```

In general, It's sugguested that requestAnimationFrame should be used not only because you don't need to manually set delay time between callbacks firing, it's also go with feature that will stop animations if current tab is inactive.

### 3. Canvas API in comparision with SVG

Although being very powerful , it is said that Canvas should be used only as backup of SVG. In the other words, always default to SVG and just switch to Canvas when you cannot use SVG (such as when you need to animate thousands of objects or controls each pixcels in the screen).

The reason for that is that, SVG is easier to start with and also more scalable. As SVG is vector, it is will not broken when shape is resizes. One more reason SVG is choosen over Canvas in most normal usecases is that SVG is a part of DOM. It means querySelector and DOM events are available in SVG. You can easily add function to change appearance or event toggle other action when user moves mouse over or clicks specific part of SVG while you have to calculate the position of each shapes per pixcels to archive the similar behavior in canvas.

The comparision between Canvas and SVG are summarized in below table:

|            |SVG <br>(Default option) | Canvas <br>(Backup option) |
| ---------------- | :------: | :----: |
| Type | Vector graphic | Pixcel graphic |
| Part of DOM (DOM methods and events are supported)| Yes  | No |
| Friendly with different resolusion and available in very large size| Yes | No |
| Able to work with massive number of objects| No | Yes|
| Able to work with other Media (Image, Video)| No | Yes |
| Off thread support| No | Yes |
| Animation performance| Normal | Good |

### 4. Conclusion

Canvas API requires more work to get started and is also harder to handle interactions and animations in comparision to SVG or using animation libraries method. In most common usecases, SVG is enough for dealing with graphics in application. 

However, it is still quite fun and interesting to be able drawing your own graphics and animations. If you want to build graphic for your web game, canvas is also the most proper choice as it provides you the posibility to create and control massive number of objects.

As a homwework after investigating Canvas API, I will replace current background of this personal website with canvas graphics and animations.
