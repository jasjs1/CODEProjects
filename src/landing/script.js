function createAccountOrLogin() {
    const nameInput = document.getElementById('name');
    const emailInput= document.getElementById('email');
    const passwordInput = document.getElementById('password');

    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
}