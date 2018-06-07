# ReactSVGPolyfill

> Dynamic SVG Sprite Polyfill for React

The missing React Component to polyfill dynamic SVG sprite icons in IE11.

## Installation

```
npm i react-svg-polyfill
```

## Usage

```
import React from 'react'
import ReactDOM from 'react-dom'
import ReactSVGPolyfill from 'react-svg-polyfill'

ReactDOM.render(
  <ReactSVGPolyfill
    href={`sprite.svg#${this.state.icon}`}
  />,
  document.querySelector('.react-outlet')
)
```
