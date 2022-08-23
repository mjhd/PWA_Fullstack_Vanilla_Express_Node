window.addEventListener("load", function(){
window.app_data_lists.net.unshift("net")
console.log(window.app_data_lists)

var chart = c3.generate({
    data: {
        columns: [
            window.app_data_lists.net
      ]}
  })
})