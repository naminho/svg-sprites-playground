import svgUseIt from 'svg-use-it'
import svg4everybody from 'svg4everybody'
import selectors from './selectors'

const polyfills = {
  svgUseIt,
  svg4everybody
}

const initialPageContent = document.documentElement.innerHTML

const addButton = document.querySelector(selectors.add)
const removeButton = document.querySelector(selectors.remove)

addButton.addEventListener('click', () => addPolyfill())
removeButton.addEventListener('click', () => removePolyfill())

const addPolyfill = () => {
  const value = document.querySelector(selectors.select).value
  polyfills[value]()
}

const removePolyfill = () => {
  document.documentElement.innerHTML = initialPageContent
}

addPolyfill()
