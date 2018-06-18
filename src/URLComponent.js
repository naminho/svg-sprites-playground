import React, {Component} from 'react'
import selectors from './selectors'

const registerSelectChange = function() {
  const select = document.querySelector(selectors.selectSource)
  select.addEventListener('change', updateSelectValue.bind(this))
}

const updateSelectValue = function() {
  this.setState({
    url: getSelectValue()
  })
}

const getSelectValue = function() {
  return document.querySelector(selectors.selectSource).value
}

export default class URLComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: getSelectValue()
    }
  }

  componentDidMount() {
    registerSelectChange.bind(this)()
  }
}
