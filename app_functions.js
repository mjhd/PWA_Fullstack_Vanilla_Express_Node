app.set_options = function(res, options) {
  res.header("Access-Control-Allow-Origin", '*')

  if(options && options.length)
    for (let option of options) {
      if (option.length == 2 && option[0] && option[1])
        res.header(option[0], option[1])
    }

  return res
}

app.assemble_document = function(head_name, styles_name, body_name) {
  let document_object = {}

  if(head_name)
    document_object.head = '<!DOCTYPE html><html lang="en"><head>' + fs.readFileSync(head_name, {encoding: "utf8", flag: 'r'})
  else
    return "INVALID HEAD"
  if(styles_name.length) {
    document_object.styles = ""
    for(let name of styles_name) {
      if(styles_name)
        document_object.styles += "<style>" + sass.compile(name).css.toString() + "</style>"
    }
  }
  document_object.body = "</head><body>"
  if(body_name)
    document_object.body += fs.readFileSync(body_name, {encoding: "utf8", flag: 'r'})
  document_object.tail = "</body></html>"

  return document_object
}