function solve() {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const date = document.getElementById("birth");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");
  const hire = document.getElementById("add-worker");
  const total = document.getElementById("sum");
  const body = document.getElementById("tbody");

  hire.addEventListener("click", Hire);

  function Hire(event) {
    event.preventDefault();
    if (
      fname.value == "" ||
      lname.value == "" ||
      email.value == "" ||
      date.value == "" ||
      position.value == "" ||
      salary.value == ""
    ) {
        return
    }
    addWorker (event,fname.value,lname.value,email.value,date.value,position.value,salary.value) 
    fname.value = "";
    lname.value = "";
    email.value = "";
    date.value = "";
    position.value = "";
    salary.value = "";
        
    
    function addWorker (event, _fname, _lname, _email, _date, _position, _salary) {
        event.preventDefault()
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        const firedBtn = document.createElement('button')
        firedBtn.textContent = "Fired"
        firedBtn.setAttribute('class', 'fired')
        const editBtn = document.createElement('button')
        editBtn.textContent = "Edit"
        editBtn.setAttribute('class', 'edit')

        td1.textContent = `${_fname}`;
        td2.textContent = `${_lname}`;
        td3.textContent = `${_email}`;
        td4.textContent = `${_date}`;
        td5.textContent = `${_position}`;
        td6.textContent = `${_salary}`;
        
        td7.appendChild(firedBtn);
        td7.appendChild(editBtn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        body.appendChild(tr);

        let budget = total.textContent;
        let sum = Number (budget) + Number (_salary);
        total.textContent = sum.toFixed(2)

        editBtn.addEventListener('click', () => Edit (_fname, _lname, _email, _date, _position, _salary));
        firedBtn.addEventListener('click', () => Fire (_salary));
        
        function Edit (_fname, _lname, _email, _date, _position, _salary) {
            event.preventDefault();
            tr.remove();
            fname.value = _fname;
            lname.value = _lname;
            email.value = _email;
            date.value = _date;
            position.value = _position;
            salary.value = _salary;
            let budget = total.textContent;
            let sum = Number (budget) - Number (_salary);
            total.textContent = sum.toFixed(2);
            
        }
        function Fire (_salary) {
            tr.remove()
            let budget = total.textContent;
            let sum = Number (budget) - Number (_salary);
            total.textContent = sum.toFixed(2);
        }


    }
  }
}
solve();
