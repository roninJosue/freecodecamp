function checkCashRegister(price, cash, cid) {
  const currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let arrChange = [];
  let change = cash - price;
  let totalRegister = 0;
  let lastIndex = 0;
  let key = true;
  let test = 0;

  for (let index = currency.length - 1; index >= 0; index--) {
    if (change >= currency[index][1] && key) {
      totalRegister += cid[index][1];
      lastIndex = index;
      key = false
    }
  }

  for (let i = 0; i < lastIndex; i++) {
    totalRegister += cid[i][1]
  }

  if (change > totalRegister) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }

  if (totalRegister === change) {
    return {
      status: "CLOSED",
      change: cid,
    };
  }

  while (change > -1 && lastIndex > -1) {
    let cantidadActualMonedas = cid[lastIndex][1];
    let valorMonedaActual = currency[lastIndex][1];

    while (change >= valorMonedaActual && cantidadActualMonedas > 0) {
      change = (change - valorMonedaActual).toFixed(2);
      cantidadActualMonedas = (cantidadActualMonedas - valorMonedaActual).toFixed(2)
      test = (test + valorMonedaActual)
    }

    if (test > 0) {
      let obj = {};
      obj[cid[lastIndex][0]] = test
      arrChange.push([cid[lastIndex][0], test])
      test = 0;
    }
    lastIndex--
  }


  return {
    'status': 'OPEN',
    'change': arrChange
  };
}

console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);
