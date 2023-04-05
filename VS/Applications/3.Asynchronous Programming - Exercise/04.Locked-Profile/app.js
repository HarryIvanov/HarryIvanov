async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main')
    try {
        const res = await fetch (url);
        if (!res.ok) {
            const error = await res.json();
            throw new Error (error)
        }
        const data = await res.json();
        const values = Object.values(data);
        
        main.replaceChildren();
        let x = 0;
        values.forEach(e => {
            x++;
            const div = document.createElement('div');
            div.setAttribute('class', 'profile')
            main.appendChild(div)
            div.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${x}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${x}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${x}Username" value="${e.username}" disabled readonly />
				<div id="user${x}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${x}Email" value="${e.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${x}Age" value="${e.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
            `
            document.getElementById(`user${x}HiddenFields`).style.display = "none"
        });
       const showBtns = [...document.getElementsByTagName('button')].forEach(e => {
            e.addEventListener('click', showInfo)
       })

       function showInfo (e) {
        const btn = e.target;
        const userInfo = btn.parentNode;
    
        const info = userInfo.getElementsByTagName('div')[0];
        const locked = userInfo.querySelector('input[type="radio"]:checked').value;
        
        if (locked == "unlock") {
            if (btn.textContent == "Show more") {
                info.style.display = "block";
                btn.textContent = "Hide it";
            } else {
                info.style.display = 'none';
                btn.textContent = "Show more"
            }
        }
        
       }
       
       
    } catch (error) {
        alert(error.message)
    }

}    