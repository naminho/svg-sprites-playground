import svgUseIt from 'svg-use-it'
import svg4everybody from 'svg4everybody'
import selectors from './selectors'

const polyfills = {
  svgUseIt,
  svg4everybody
}

const select = document.querySelector(selectors.select)
const previousPolyfill = localStorage.getItem('polyfill')

select.addEventListener('change', (event) => addPolyfill(event.target.value))

const addPolyfill = (value) => {
  localStorage.setItem('polyfill', value)
  select.value = value

  // Reload to make sure existing polyfills are removed
  if (previousPolyfill !== value) {
    location.reload()
  }

  if (!polyfills[value]) {
    return
  }

  polyfills[value]()
}

if (previousPolyfill) {
  addPolyfill(previousPolyfill)
}

select.removeAttribute('disabled')
