function focused() {
    const input = Array.from(document.querySelectorAll('input'));
    for (const el of input) {
        el.addEventListener('focus', () => {
            el.parentElement.className = "focused"
        });
        el.addEventListener('blur', () => {
            el.parentElement.className = ""
        });
    }
    

    
}