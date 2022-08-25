app.get('/income_spending_graph.js', function (req, res) {
  res = app.app_functions.set_options(res)
  res.sendFile("/home/runner/PWAFullstackVanillaExpressNode/assets/income_spending_graph.js")
})

app.get('/income_spending_data.js', function (req, res) {
  res = app.app_functions.set_options(res)
  res.sendFile("/home/runner/PWAFullstackVanillaExpressNode/assets/income_spending_data.js")
})