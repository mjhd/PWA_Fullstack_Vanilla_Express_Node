app.get('/api_data', function (req, res) {
  res = app.app_functions.set_options(res)

  let header = {
    'Accept': 'application/json',
    'Authorization': 'Bearer GRFzIeeQkGJ7qVOgPN0E'
  }
  fetch("https://the-one-api.dev/v2/book", { headers: header })
  .then(function(result){
    return result.text()
  })
  .then(function(data){
    let api_data = {}
    for(let book of JSON.parse(data).docs){
      api_data[book.name] = book._id
    }
    res.end(JSON.stringify(api_data))
  })
})