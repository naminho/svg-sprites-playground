import React from 'react'
import ReactDOM from 'react-dom'
import DynamicIcon from './DynamicIcon'
import URLComponent from './URLComponent'

class Icon extends URLComponent {
  render() {
    return (
      <span>
        <svg className="icon">
          <use xlinkHref={`${this.state.url}#${this.props.icon}`} />
        </svg>
        <br/>
      </span>
    )
  }
}

export function renderStatic (selector, icon) {
  ReactDOM.render(
    <Icon icon={icon} />,
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
