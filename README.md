# InviewActive

A JavaScript utility library that adds and removes classes to elements based on scrolling.

- When a specified element enters the viewport, an `active` class (default) is added
- When the element leaves the viewport, the `active` class is removed (configurable)

## Demo

[Demo Page](https://prjtest.com/kiyotd/inview-active/demo/)
Scroll to see elements fade in as the `active` class is applied.

## Installation

### Install from NPM

```shell
npm i @kiyotd/inview-active
```

### Install from Yarn

```shell
yarn add @kiyotd/inview-active
```

### Use from CDN

```html
<script src="https://unpkg.com/@kiyotd/inview-active@1.2.5/dist/browser.min.js"></script>
```

## Usage Examples

### JavaScript Example

```javascript
import { InviewActive } from "@kiyotd/inview-active";

new InviewActive({
  selectors: ['[data-active-target]', '.any-class-name'],
  rootMargin: "0px 0px -200px 0px",
  activeClassName: 'active',
  inActive: false,
  inActiveClassName: 'in-active',
  once: false,
});
```

```html
<div data-active-target>Selector using data attribute</div>
<div data-active-target>Selector using data attribute</div>
<div data-active-target>Selector using data attribute</div>
<div class="any-class-name">Selector using class name</div>
```

### CDN Example

```html
<script>
  window.addEventListener('DOMContentLoaded', () => {
    new InviewActive({
      selectors: ['.box1', '.box2'],
      rootMargin: "0px 0px -200px 0px",
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

<script src="https://unpkg.com/@kiyotd/inview-active@1.2.5/dist/browser.min.js"></script>
```

### CSS Example

```css
.box {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.box.active {
  opacity: 1;
}
```

## Options

| Option Name | Type | Description | Default Value |
|------------|-----|------|------------|
| selectors | string[] | Array of selectors (required) | - |
| rootMargin | string | Margin around the root intersection boundary | "0px 0px 0px 0px" |
| activeClassName | string | Class name to add when element enters viewport | "active" |
| inActive | boolean | Whether to add a class when element leaves viewport | false |
| inActiveClassName | string | Class name to add when element leaves viewport | "in-active" |
| once | boolean | Whether to keep the class after element leaves viewport | false |

### selectors Option

`string[]`
An array of selector strings. This is a required parameter.
You can specify any format that can be retrieved with querySelectorAll, such as class names (`.box`) or data attributes (`[data-active-target]`).

### rootMargin Option

`string`
Specified in the same format as the rootMargin property of IntersectionObserver.
Uses syntax similar to the CSS margin property to specify the margin around the intersection boundary.
For example, specifying "0px 0px -200px 0px" will detect intersection 200px above the bottom edge of the viewport.

For more details, see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).

### activeClassName Option

`string`
The class name to add when an element enters the viewport. Default is "active".

### inActive Option

`boolean`
Specifies whether to add a class when an element leaves the viewport. Default is false.

### inActiveClassName Option

`string`
The class name to add when an element leaves the viewport. Default is "in-active".
This is only effective when the inActive option is true.

### once Option

`boolean`
Specifies whether to maintain the class after an element leaves the viewport. Default is false.
When set to true, the active class will not be removed after the element has entered the viewport once and then leaves.

## How It Works

This library uses the IntersectionObserver API to detect element visibility.
It monitors elements that match the specified selectors and adds or removes classes when they enter or leave the viewport.

## Browser Compatibility

Works in modern browsers that support the IntersectionObserver API:
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using the [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/main/polyfill).

## License

MIT

## Author

[kiyotd](https://twitter.com/_kiyotd)
