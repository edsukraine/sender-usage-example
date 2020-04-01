const sender = require('edsukraine-sender')

const url = 'https://jsonplaceholder.typicode.com/users'

sender('GET', url)
  .then(data => console.log(data))
  .catch((e) => console.log('error', e))

const body = {
  name: 'Andrii',
  age: 29
}

sender('POST', url, body)
  .then(data => console.log(data))
  .catch(() => console.log('error'))
