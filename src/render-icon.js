import React from 'react'
import ReactDOM from 'react-dom'

export default function (selector) {
  ReactDOM.render(
    <svg className="icon">
      <use xlinkHref="assets/sprite.svg#burger"></use>
    </svg>,
    document.querySelector(selector)
  )
}
