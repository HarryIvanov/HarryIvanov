export function updateNav() {
    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');
    if (sessionStorage.getItem('userData') == null) {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    } else {
        const data = JSON.parse(sessionStorage.getItem('userData')).email;
        const user = document.querySelector('#user span')
        user.textContent = `Welcome, ${data}`
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    }
   
}




