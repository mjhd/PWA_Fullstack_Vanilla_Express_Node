app.get('/api_data', function (req, res) {
  res = app.set_options(res)

  let header = {
    'Accept': 'application/json',
    'Authorization': 'Bearer GRFzIeeQkGJ7qVOgPN0E'
  }

  fetch("https://the-one-api.dev/v2/book", { headers: header })
  .then(function(result){
    return result.text()
  })
  .then(function(data){

    let app_data = JSON.parse(fs.readFileSync("package.json", {encoding: "utf8", flag: 'r'}))
    let books = JSON.parse(data).docs

    let document = app.assemble_document("head.html", ["style.scss"])
    let DOM_data = "<h1>" + app_data.name + "</h1><h2>" + app_data.description + "</h2>"

    DOM_data += "<table><thead><tr><td colspan=0><h3>LOTR books:</h3></td></tr><tr>"
    for (let cell of Object.keys(books[0]))
      DOM_data += "<td><h4>" + cell + ":<h4></td>"
    DOM_data += "</tr></thead>"

    
    for(let book of books)
      DOM_data += "<tr><td>" + book.name + ":</td><td><strong>" + book._id + "</strong></td><td></tr>"

    DOM_data += "</table>"
      
    res.end(document.head + document.styles + document.body + DOM_data + document.tail)
  })
})