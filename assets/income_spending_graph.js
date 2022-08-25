function balance_init(name, value){
  let balance = document.createElement("span")
  let balance_value = document.createElement("strong")
  balance.innerHTML = name + ": "
  balance_value.innerHTML = value
  balance.append(balance_value)
  document.getElementById("tables").append(balance)
}

window.addEventListener("load", function(){

  let balances = window.app_data.balances
  balances.unshift("balance")
  //window.app_data_lists.list.unshift("list")
  window.app_data_lists.made.unshift("made")
  window.app_data_lists.spent.unshift("spent")
  window.app_data_lists.net.unshift("net")

  let date_count = 0

  let income_spending_graph = c3.generate({
    bindto: '#income_spending_graph',
    data: {
      columns: [
        balances,
        window.app_data_lists.made,
        window.app_data_lists.spent,
        window.app_data_lists.net
      ],
      type: 'spline'
    },
    axis: {
      x: {
        tick: {
          format: function () { return window.app_data_lists.dates[date_count++] }
        }
      }
    },
    oninit: function(){
      //balance_init("Starting Balance", get_balance())
      //balance_init("Ending Balance", balances[balances.length - 1])
    }
  })
  //console.log(get_balances("balance", window.app_data_lists.net))
})