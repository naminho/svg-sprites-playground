import React, {Component} from 'react'
import ReactSVGPolyfill from './ReactSVGPolyfill'

export default class DynamicIcon extends Component {
  constructor () {
    super()
    this.state = {
      icon: 'arrow-left'
    }
  }

  handleSwitch () {
    this.setState({
      icon: this.state.icon === 'arrow-left' ? 'arrow-right' : 'arrow-left'
    })
    this.forceUpdate()
    alert('update')
  }

  renderIcon () {
    if (this.props.polyfill) {
      return (
        <ReactSVGPolyfill
          key={0}
          href={`assets/sprite.svg#${this.state.icon}`}
        />
      )
    }

    return (
      <svg key={0} className="icon">
        <use xlinkHref={`assets/sprite.svg#${this.state.icon}`} />
      </svg>
    )
  }

  render () {
    return [
      this.renderIcon(),
      <br key={1} />,
      <button key={2} onClick={this.handleSwitch.bind(this)}>Switch</button>
    ]
  }
}
