document.getElementById('toggleButton').addEventListener('click', togglePasswordVisibility());

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('toggleButton');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.classList.remove('togglePasswordButton-view');
        toggleButton.classList.add('togglePasswordButton-hide');
    } else {
        passwordField.type = 'password';
        toggleButton.classList.remove('togglePasswordButton-hide');
        toggleButton.classList.add('togglePasswordButton-view');
    }
}