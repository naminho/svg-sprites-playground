import {renderStatic, renderDynamic, renderPolyfill} from './render'
import polyfills from './polyfills'
import selectors from './selectors'

renderStatic(selectors.react, 'arrow-up')
renderDynamic(selectors.dynamic)
renderPolyfill(selectors.polyfill)

const button = document.querySelector(selectors.reactLoadButton)

button.addEventListener('click', () => renderStatic(selectors.reactLoad, 'plus'))
