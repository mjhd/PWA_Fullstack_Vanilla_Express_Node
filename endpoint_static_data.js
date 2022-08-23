app.get('/static_data', function (req, res) {
  res = app.set_options(res)

  fs.readFile("assets/data.json", 'utf8', function(err, data) {
    if (err) throw err

    let document = app.assemble_document("assets/head_static.html", ["style.scss", "assets/static_data.scss"])

    let app_data = JSON.parse(data)
    let total_made = 0.00
    let total_spent = 0.00

    let script_include = '<script src="graph_static.js"></script>'

    let DOM_data = "<h1>" + app_data.title + "</h1>"
    DOM_data += "<h2>" + app_data.description + "</h2>"
    DOM_data += "<table><thead><tr><td colspan=0><h3>Daily income/spending:<h3></td></tr></thead>"

    let app_data_lists = {made: [], spent: [], net: []}
    for (let entry of app_data.data){
      let made = parseFloat(entry.made.toFixed(2))
      let spent = parseFloat(entry.spent.toFixed(2))
      let net = parseFloat((made - spent).toFixed(2))

      app_data_lists.made.push(made)
      app_data_lists.spent.push(spent)
      app_data_lists.net.push(net)
      total_made += made
      total_spent += spent

      DOM_data += "<tr><td><strong>" + entry.date + "</strong></td><td>$" + entry.made + "</td><td>$" + entry.spent + "</td><td>" + net + "</td></tr>"
    }
    DOM_data += "<table><thead><tr><td colspan=0><h3>Totals:</h3></td></tr></thead>"
    DOM_data += "<tr><td>MADE: $" + total_made.toFixed(2) + "</td><td>SPENT: $" + total_spent.toFixed(2) + "</td><td>NET: <strong>" + (total_made - total_spent).toFixed(2) + "</strong></td></tr>"
    DOM_data += '</table><div id="chart"></div>'
    DOM_data += '<script type="text/javascript">window.app_data_lists = ' + JSON.stringify(app_data_lists) + "</script>"

    res.end(document.head + document.styles + document.body + DOM_data + script_include + document.tail)
  })


app.get('/graph_static.js', function (req, res) {
  res = set_options(res)
  res.sendFile("/home/runner/FullstackVanillaExpressNode/assets/graph_static.js")
})
  


  
  /*let options = {
    root: path.join(__dirname)
  }*/
  //res.sendFile("data.json", options)
  //res.sendFile("/home/runner/APIExpressNode/data.json")
})