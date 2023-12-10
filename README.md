# `random-source`

A Web Component to randomly change audio or video sources.

**[Demo](https://daviddarnes.github.io/random-source/demo.html)**

## Examples

```html
<script type="module" src="random-source.js"></script>

<random-source>
  <audio controls>
    <source src="https://darn.es/sounds/daviddarnes.m4a" />
    <source src="https://darn.es/sounds/daviddarnes2.m4a" />
  </audio>
</random-source>
```

## Features

This Web Component allows you to:

- Randomly change the source of an `audio` or `video` element once the source has ended
- Trust that the first `source` element will always be used on load, to match default behaviour

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/random-source): `npm install @daviddarnes/random-source`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/random-source/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="random-source.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://www.unpkg.com/@daviddarnes/random-source@1.0.0/random-source.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/random-source@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
