function createAccountOrLogin() {
    const nameInput = document.getElementById('name');
    const emailInput= document.getElementById('email');

    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);

    window.location.href = 'http://127.0.0.1:5500/src/projects/allProjects/allProjects.html'; // Projects Home Page
}