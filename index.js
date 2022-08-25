import express from "express"
import fs from "fs"
import fetch from "node-fetch"
import mysql from "mysql"
import sass from "sass"
let app = express()

eval(fs.readFileSync("app_resources.js", {encoding: "utf8", flag: 'r'}))
eval(fs.readFileSync("app_functions.js", {encoding: "utf8", flag: 'r'}))

eval(fs.readFileSync("endpoints/static_data.js", {encoding: "utf8", flag: 'r'}))
eval(fs.readFileSync("endpoints/api_data.js", {encoding: "utf8", flag: 'r'}))
eval(fs.readFileSync("endpoints/db_data.js", {encoding: "utf8", flag: 'r'}))

eval(fs.readFileSync("app.js", {encoding: "utf8", flag: 'r'}))

app.listen(8000)