# README

This is a JavaScript utility.  

Scroll the screen and when the specified element
- When the specified element enters the screen, the `active` class is added.
- When the element goes out of the screen, the `active` class is removed.

[comment]: <> (画面をスクロールし、指定した要素が)

[comment]: <> (- 画面内に入ると`active`クラスを付与  )

[comment]: <> (- 画面外になると`active` クラスを削除)

## CDN

[comment]: <> (Using npm:)

[comment]: <> (```bash)

[comment]: <> (npm i @kiyotd/scroll-toggle-active-class)

[comment]: <> (```)

[comment]: <> (Using yarn:)

[comment]: <> (```bash)

[comment]: <> (yarn add @kiyotd/scroll-toggle-active-class)

[comment]: <> (```)

[comment]: <> (Using CDN:)

```shell
<script src="https://unpkg.com/@kiyotd/scroll-toggle-active-class@latest/main.js"></script>
```

[comment]: <> (## Documentation)

[comment]: <> ([docs]&#40;https://kiyotd-scroll-toggle-active-class.vercel.app/&#41;)

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
