import React from 'react'
import ReactDOM from 'react-dom'
import DynamicIcon from './DynamicIcon'

export function renderStatic (selector, icon) {
  ReactDOM.render(
    <svg className="icon">
      <use xlinkHref={`assets/sprite.svg#${icon}`} />
    </svg>,
    document.querySelector(selector)
  )
}

export function renderDynamic (selector) {
  ReactDOM.render(
    <DynamicIcon />,
    document.querySelector(selector)
  )
}

export function renderPolyfill (selector) {
  ReactDOM.render(
    [
      <DynamicIcon key={0} polyfill={true} />,
      <DynamicIcon key={1} polyfill={true} />,
      <DynamicIcon key={2} polyfill={true} />
    ],
    document.querySelector(selector)
  )
}
