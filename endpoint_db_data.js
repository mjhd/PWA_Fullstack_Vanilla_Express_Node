app.get('/db_data', function (req, res) {
  res = app.set_options(res)

  let app_sql = "SELECT * from app_data;"
  let data_sql = "SELECT * from places;"
  
  let con = mysql.createConnection({
    host: "remotemysql.com",
    user: "uOdiYKGflG",
    password: "pSY1mvpuwS",
  database:"uOdiYKGflG"
  })


  con.connect(function(err) {
    if (err) throw err

    console.log("Connected!")

    con.query(app_sql, function (err, result) {
      if (err) throw err
      
      res.locals.DOM_data = ("<h1>" + result[0].name + "</h1>")
      res.locals.DOM_data += ("<h2>" + result[0].description + "</h2>")
    })

    con.query(data_sql, function (err, result) {
      if (err) throw err

      let document = app.assemble_document("head.html", ["style.scss"])
      res.locals.DOM_data += "<table><thead><tr><td colspan=0><h3>Cities:</h3></td></tr></thead>"

      for(let entry of result)
          res.locals.DOM_data += "<tr><td><strong>" + entry.city + "</strong>:</td><td>" + entry.state + "</td><td>" + entry.country + "</td><td>" + entry.timezone + "</td><td></tr>"

      res.locals.DOM_data += "</table>"

      res.end(document.head + document.styles + document.body + res.locals.DOM_data + document.tail)
    })
  })
})