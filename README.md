# README

This is a JavaScript utility.  

Scroll the screen and when the specified element
- When the specified element enters the screen, the `active` class is added.
- When the element goes out of the screen, the `active` class is removed.

![scroll-toggle-active-class](https://user-images.githubusercontent.com/41136135/236067205-c24c9387-0a69-4fb0-b3bc-b7d429c655a6.gif)

## Demo

[Demo](https://docs.kiyotd.com/scroll-toggle-active-class/demo/)  
Make sure the active class is assigned.

## CDN

### v1.0.12
```shell
<script src="https://unpkg.com/@kiyotd/scroll-toggle-active-class@1.0.12/main.js"></script>
````

## Examples

```html
<script>
window.addEventListener('DOMContentLoaded', () => {
  new ScrollToggleActiveClass({
    selectors: ['.box1', '.box2'], // Array of selectors. required
    offset: 0, // Offset from the top of the screen. Default: 0
    activeClassName: 'active', // Class name to be given once inside the screen. Default: 'active'
    once: true, // Off-screen does not remove class. Default: false
  });
});
</script>

<div class="box1">1</div>
<div class="box1">2</div>
<div class="box1">3</div>
<div class="box1">4</div>
<div class="box2">5</div>
<div class="box2">6</div>
<div class="box2">7</div>
<div class="box2">8</div>
```
