import renderIcon from './render-icon'
import polyfills from './polyfills'
import selectors from './selectors'

renderIcon(selectors.react)

const button = document.querySelector(selectors.reactLoadButton)

button.addEventListener('click', () => renderIcon(selectors.reactLoad))
