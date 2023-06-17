function createAccountOrLogin() {
    const nameInput = document.getElementById('name');
    const emailInput= document.getElementById('email');

    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);

    window.location.href = 'http://www.google.com';
}