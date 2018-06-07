import React, {Component} from 'react'
import PropTypes from 'prop-types'
let browserPolyfill = 'unchecked'

/**
 * Checks if the current browser requires the polyfill.
 **/
const browserRequiresPolyfill = () => {
  if (browserPolyfill !== 'unchecked') {
    return browserPolyfill
  }

  const newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/
  const webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/
  const edgeUA = /\bEdge\/.(\d+)\b/
  const inIframe = window.top !== window.self

  browserPolyfill = (
    newerIEUA.test(navigator.userAgent) ||
    (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 ||
    (navigator.userAgent.match(webkitUA) || [])[1] < 537 ||
    edgeUA.test(navigator.userAgent) &&
    inIframe
  )

  return browserPolyfill
}

/**
 * Renders an SVG Icon from a sprite with polyfill if necessary.
 **/
export default class ReactSVGPolyfill extends Component {
  /**
   * Adapts the state if new props arrive.
   **/
  static getDerivedStateFromProps(props, state) {
    if (!state || props.polyfill !== state.polyfill) {
      return {
        polyfill: props.polyfill || browserRequiresPolyfill()
      }
    }

    return null
  }

  /**
   * Constructor, sets whether the polyfill is required on the state.
   **/
  constructor(props) {
    super(props)
    this.state = ReactSVGPolyfill.getDerivedStateFromProps(props)
  }

  /**
   * Renders the icon with the polyfill.
   **/
  renderPolyfill () {
    const srcSplit = this.props.href.split("#")
    const url = srcSplit.shift()
    const id = srcSplit.join("#")

    return <p>Polyfill</p>
  }

  /**
   * Renders the icon, with or without polyfill, depending on the state.
   **/
  render () {
    if (this.state.polyfill) {
      return this.renderPolyfill()
    }

    return (
      <svg className="icon">
        <use xlinkHref={`assets/sprite.svg#${this.props.icon}`} />
      </svg>
    )
  }
}

ReactSVGPolyfill.propTypes = {
  href: PropTypes.string.isRequired,
  polyfill: PropTypes.bool,
}
