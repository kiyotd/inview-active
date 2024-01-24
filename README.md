# README

This is a JavaScript utility.

Scroll the screen and when the specified element

- When the specified element enters the screen, the `active` class is added.
- When the element goes out of the screen, the `active` class is removed.

https://github.com/kiyotd/scroll-toggle-active-class/assets/41136135/b2cc7097-abf9-44e5-a41d-e508953bfc2f

## Demo

[Demo](https://docs.kiyotd.com/scroll-toggle-active-class/demo/)  
Make sure the active class is assigned.

## Installation

### Install from NPM

```shell
npm i @kiyotd/scroll-toggle-active-class
```

### Install from Yarn

```shell
yarn add @kiyotd/scroll-toggle-active-class
```

### from CDN

#### v1.0.21

```shell
<script src="https://unpkg.com/@kiyotd/scroll-toggle-active-class@1.0.21/dist/browser.min.js"></script>
````

## Examples

### in JavaScript

```javascript
import { ScrollToggleActiveClass } from "@kiyotd/scroll-toggle-active-class";

new ScrollToggleActiveClass({
  selectors: ['[data-active-target]', '.any-class-name'],
  offset: 0,
  activeClassName: 'active',
  inActive: false,
  inActiveClassName: 'in-active',
  once: false,
});
```

```html
<div data-active-target>Selector for any data attribute</div>
<div data-active-target>Selector for any data attribute</div>
<div data-active-target>Selector for any data attribute</div>
<div class="any-class-name">Selector by class name</div>
```

### CDN

```html

<script>
  window.addEventListener('DOMContentLoaded', () => {
    new ScrollToggleActiveClass({
      selectors: ['.box1', '.box2'],
      offset: 0,
      activeClassName: 'active',
      inActive: false,
      inActiveClassName: 'in-active',
      once: false,
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

<script src="https://unpkg.com/@kiyotd/scroll-toggle-active-class@1.0.21/dist/browser.min.js"></script>
</body>
```

## Options

### selectors

`string[]`
Array of selector strings. required.

### offset

`number`
Offset from the top of the screen. Default: 0

### activeClassName

`string`
Class name to be given once inside the screen. Default: 'active'

### inActive

`boolean`
Add a class when it is outside the screen. Default: false

### inActiveClassName

`string`
Class name to be given once outside the screen. Default: 'in-active'

### once

`boolean`
Off-screen does not remove class. Default: false
