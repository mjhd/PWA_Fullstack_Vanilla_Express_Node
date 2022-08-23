import express from "express"
import fs from "fs"
import fetch from "node-fetch"
import mysql from "mysql"
import sass from "sass"
let app = express()

eval(fs.readFileSync("app_functions.js", {encoding: "utf8", flag: 'r'}))

app.get('/', function (req, res) {
  res = app.set_options(res)

  let document = app.assemble_document("head.html", ["style.scss"], "assets/choose.html")
  let DOM_data = document.body
  let endpoints = ["static_data", "api_data", "db_data"]

  for (let endpoint of endpoints)
    DOM_data += '<a href="' + endpoint + '" target="_blank">/' + endpoint + "</a><br /><br />"

  res.end(document.head + document.styles + DOM_data + document.tail)

  /*fs.readFile("head.html", 'utf8', function(err, data) {
    if (err) throw err
    head = data
    //console.log(data)
  })*/
})

eval(fs.readFileSync("endpoint_api_data.js", {encoding: "utf8", flag: 'r'}))
eval(fs.readFileSync("endpoint_db_data.js", {encoding: "utf8", flag: 'r'}))
eval(fs.readFileSync("endpoint_static_data.js", {encoding: "utf8", flag: 'r'}))

app.listen(8000)