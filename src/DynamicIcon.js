import React, {Component} from 'react'
import ReactSprite from 'react-sprite'
import selectors from './selectors'
import URLComponent from './URLComponent'

export default class DynamicIcon extends URLComponent {
  constructor (props) {
    super(props)
    // this.state already created in URLComponent
    this.state.icon = 'arrow-left'
  }

  handleSwitch () {
    this.setState({
      icon: this.state.icon === 'arrow-left' ? 'arrow-right' : 'arrow-left'
    })
  }

  renderIcon () {
    return (
      <ReactSprite
        key={0}
        className="icon"
        polyfill={this.props.polyfill}
        href={`${this.state.url}#${this.state.icon}`}
      />
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
