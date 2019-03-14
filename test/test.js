import test from 'ava'
var axios = require('axios');

test('Test form exist', async t => {
    const res = await axios.post('http://localhost:3000/ville', {
        nom_ville: 'berlin'
      })
      let test = res.data.toString().includes('<title>berlin');
        t.is(test, true);
  });

  test('form', async t => {
    const res = await axios.get('http://localhost:3000/');
    let test = res.data.toString().includes('<form');
    t.is(test, true);
  });