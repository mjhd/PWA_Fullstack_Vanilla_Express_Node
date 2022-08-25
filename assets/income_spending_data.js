window.addEventListener("load", function(){
  //console.log(window.app_data_lists)
  //console.log(window.balances)

  for(let i = 0; i < window.app_data.balances.length; i)
    window.app_data_lists.list[i]["balance"] = window.app_data.balances[i++]

  var data = window.app_data_lists.list

  new FancyGrid({
    renderTo: 'income_spending_data',
    width: 500,
    height: 275,
    data: data,
    selModel: {
      type: 'cells'
    },
    columns: [{
      index: 'date',      
      title: 'Date',
      type: 'string',
      width: 100
    },{
      index: 'made',
      title: 'Made',
      type: 'string',
      width: 100
    },{
      index: 'spent',
      title: 'Spent',
      type: 'string',
      width: 100
    },{
      index: 'net',
      title: 'Net',
      type: 'string',
      width: 100
    },{
      index: 'balance',
      title: 'Balance',
      type: 'string',
      width: 100
    }]
  })
})