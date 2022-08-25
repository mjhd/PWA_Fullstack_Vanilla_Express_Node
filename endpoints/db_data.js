app.get('/db_data', function (req, res) {
  res = app.app_functions.set_options(res)

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

    res.locals.DB_data = '{'
    con.query(app_sql, function (err, result) {
      if (err) throw err
      
      res.locals.DB_data += ('"name": "' + result[0].name + '",')
      res.locals.DB_data += ('"description": "' + result[0].description + '",')
    })

    
    con.query(data_sql, function (err, result) {
      if (err) throw err

      res.locals.DB_data += '"data" :['
      for(let entry of result)
        res.locals.DB_data += JSON.stringify(entry) + ((entry == result[result.length - 1]) ? "" : ",")
      res.locals.DB_data += "]}"

      res.end(res.locals.DB_data)
    })
  })
})