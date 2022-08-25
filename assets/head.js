  window.app_functions = {}

  window.app_functions.get_balance = function(){
    return 538.50
  }
  
  window.app_functions.get_balances = function(nets) {
    let balances = []

    for (let net of nets){
      let new_balance = parseFloat(parseFloat(window.app_data.current_balance) + parseFloat(net)).toFixed(2)
      balances.push(new_balance)
      window.app_data.current_balance = new_balance
    }

    return balances
  }

window.addEventListener("load", function(){
  window.app_data = {}
  window.app_data.current_balance = window.app_functions.get_balance()
  window.app_data.balances = window.app_functions.get_balances(window.app_data_lists.net)
})