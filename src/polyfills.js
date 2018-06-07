import svgUseIt from 'svg-use-it'
import svg4everybody from 'svg4everybody'
import selectors from './selectors'

const polyfills = {
  svgUseIt,
  svg4everybody
}

const select = document.querySelector(selectors.select)
const previousPolyfill = localStorage.getItem('polyfill')

if (previousPolyfill) {
  select.value = previousPolyfill
}

select.addEventListener('change', (event) => addPolyfill(event))

const addPolyfill = (event) => {
  const value = select.value || event && event.target && event.target.value

  if (!polyfills[value]) {
    return
  }

  polyfills[value]()
}

const removePolyfill = () => {
  location.reload();
}

addPolyfill()
