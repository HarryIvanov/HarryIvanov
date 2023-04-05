window.addEventListener("load", solve);

function solve() {
  const car = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuel = document.getElementById("fuel");
  const originalPrice = document.getElementById("original-cost");
  const sellPrice = document.getElementById("selling-price");
  const profit = document.getElementById('profit');
  const body = document.getElementById('table-body');
  const soldCars = document.getElementById('cars-list')

  const publish = document
    .getElementById("publish")
    .addEventListener("click", Publish);

  function Publish(event) {
    event.preventDefault();
    if (
      car.value == "" ||
      model.value == "" ||
      year.value == "" ||
      fuel.value == "" ||
      originalPrice.value == "" ||
      sellPrice.value == "" ||
      Number(originalPrice.value) > Number(sellPrice.value)
    ) {
      return
    }
    else {
      addCar (event, car.value, model.value, year.value, fuel.value, originalPrice.value, sellPrice.value) 
        car.value = "";
        model.value = "";
        year.value = "";
        fuel.value = "";
        originalPrice.value = "";
        sellPrice.value = ""
      
    }
    function addCar (event, _car, _model, _year, _fuel, _originalPrice, _sellPrice) {
      event.preventDefault()
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      const td7 = document.createElement("td");
      const editBtn = document.createElement("button");
      const sellBtn = document.createElement("button");
      tr.setAttribute("class", "row");
      editBtn.setAttribute("class", "action-btn edit")
      sellBtn.setAttribute("class", "action-btn sell");
      editBtn.textContent = "Edit";
      sellBtn.textContent = "Sell";
      td1.textContent = `${_car}`;
      td2.textContent = `${_model}`;
      td3.textContent = `${_year}`;
      td4.textContent = `${_fuel}`;
      td5.textContent = `${_originalPrice}`;
      td6.textContent = `${_sellPrice}`;
      td7.appendChild(editBtn);
      td7.appendChild(sellBtn);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);
      body.appendChild(tr);
      
      editBtn.addEventListener('click', () => Edit (event, _car, _model, _year, _fuel, _originalPrice, _sellPrice));
      sellBtn.addEventListener('click', () => Sell(event, _car, _model, _year, _fuel, _originalPrice, _sellPrice));
      
      function Edit (event, _car, _model, _year, _fuel, _originalPrice, _sellPrice) {
        event.preventDefault()
        tr.remove()
        car.value = _car
        model.value = _model
        year.value = _year
        fuel.value = _fuel
        originalPrice.value = _originalPrice
        sellPrice.value = _sellPrice
  
      }
      function Sell (event, _car, _model, _year, _fuel, _originalPrice, _sellPrice) {
        event.preventDefault()
        tr.remove();
        let diff = Number (_sellPrice) - Number (_originalPrice)
        let originalProfit = profit.textContent;
        let calc = Number (originalProfit) + Number (diff)
        profit.textContent = calc.toFixed(2);
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        li.setAttribute('class', 'each-list');
        span1.textContent = `${_car} ${_model}`;
        span2.textContent = `${_year}`;
        span3.textContent = `${diff}`;
        li.appendChild(span1)
        li.appendChild(span2)
        li.appendChild(span3)
        soldCars.appendChild(li)
        

      }
      
  
  
  
  
  
    } 
  }
  
}
