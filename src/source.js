import selectors from './selectors'

const select = document.querySelector(selectors.selectSource)
const previousSource = localStorage.getItem('source')

select.addEventListener('change', (event) => setSource(event.target.value))

const setSource = (value) => {
  localStorage.setItem('source', value)
  select.value = value

  addAttributes(value)
}

const addAttributes = (url) => {
  const uses = document.querySelectorAll(selectors.xlinkHref)

  for (let i = 0; i < uses.length; ++i) {
    const icon = uses[i].getAttribute('data-xlink-href')

    uses[i].setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      url + icon
    )
  }
}

if (previousSource || previousSource === '') {
  setSource(previousSource)
} else {
  addAttributes(select.value)
}

select.removeAttribute('disabled')
