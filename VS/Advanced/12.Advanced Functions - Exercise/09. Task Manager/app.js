function solve() {
    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');
    const [inputSection, openSection, progessSection, completeSection] = document.querySelectorAll('section');
    debugger;
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addToDo)
    function addToDo (e) {
        e.preventDefault();
        if (inputDate.value.trim() === ""
        || inputDesc.value.trim() === ""
        || inputTask.value.trim() === "") {
            return
        }
        console.log(("hello"));
        const article = document.createElement("article");
        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;
        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${inputDesc.value}`;
        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;
        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');
        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = "Start";
        startBtn.addEventListener('click', startArticle);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', deleteArticle);
        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(divBtns);

        inputDate.value = "";
        inputDesc.value = "";
        inputTask.value = "";
        
        openSection.lastElementChild.appendChild(article);
        function deleteArticle () {
            article.remove()
        }
        function startArticle () {
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = "Finish";
            finishBtn.addEventListener('click', finishArticle);
            divBtns.appendChild(finishBtn);
            progessSection.lastElementChild.appendChild(article);
        }
        function finishArticle () {
            divBtns.remove();
            completeSection.lastElementChild.appendChild(article);
        
    }
    
    }
      

}