app.get('/', function (req, res) {
  res = app.app_functions.set_options(res)


  let header = {
    'Accept': 'application/json'
  }
  fetch("https://pwafullstackvanillaexpressnode.mjhdev.repl.co/static_data", { headers: header })
  .then(function(result) {
    return result.text()
  })
  .then(function(data) {
    let document = app.app_functions.assemble_document("assets/head.html", ["assets/home_view.scss"])

    let app_data = JSON.parse(data)
    let total_made = 0.00
    let total_spent = 0.00

    let app_data_lists = {list: [], dates: [], made: [], spent: [], net: []}
    for (let entry of app_data.data){
      let made = parseFloat(entry.made.toFixed(2))
      let spent = parseFloat(entry.spent.toFixed(2))
      let net = parseFloat((made - spent).toFixed(2))

      let list = entry
      list.net = net

      app_data_lists.list.push(list)
      app_data_lists.dates.push(entry.date)
      app_data_lists.made.push(made)
      app_data_lists.spent.push(spent)
      app_data_lists.net.push(net)
      total_made += made
      total_spent += spent

    }

    let app_data_set = '<script type="text/javascript">window.app_data_lists = ' + JSON.stringify(app_data_lists) + "</script>"
    let DOM_data = '<div id="home_views"><div id="income_spending_data"></div><div id="income_spending_graph"></div></div>'
    let script_include = '<script src="income_spending_data.js"></script><script src="income_spending_graph.js"></script>'

    res.end(document.head + document.styles + app_data_set + document.body + DOM_data + script_include + document.tail)

  })
})