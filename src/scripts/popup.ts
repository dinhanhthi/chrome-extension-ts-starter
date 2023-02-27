import browser from 'webextension-polyfill'

import '../styles/style.scss'

// An example of async send message
browser.runtime.sendMessage({ type: 'hello' }).then(response => {
  console.log('+++response', response)
})

browser.runtime.sendMessage({ type: 'login' }).then(response => {
  console.log('+++response', response)
})
