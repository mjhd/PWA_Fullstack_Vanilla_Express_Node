app.get('/static_data', function (req, res) {
  res = app.app_functions.set_options(res)
  res.sendFile("/home/runner/PWAFullstackVanillaExpressNode/assets/data.json")
})