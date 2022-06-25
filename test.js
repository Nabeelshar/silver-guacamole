
    fetch('https://toc.qidianunderground.org/api/v1/pages/public', {
  mode: 'no-cors',
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer key',
  },
})
.then(function (response) {
  return response.json()
})
.then(function (obj) {
  console.log(obj)
})
.catch(function (err) {
  console.log(err)
});