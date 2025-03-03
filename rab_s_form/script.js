function validateForm() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('passwordError');
    
    // Проверка длины пароля
    if (password.length < 8) {
        errorElement.textContent = 'Пароль должен содержать минимум 8 символов';
        return false;
    }

    // Проверка наличия цифр
    if (!/\d/.test(password)) {
        errorElement.textContent = 'Пароль должен содержать хотя бы одну цифру';
        return false;
    }

    // Если форма валидна, сохраняем данные
    if (document.getElementById('remember').checked) {
        localStorage.setItem('username', document.getElementById('username').value);
    }

    return true;
}

// Загрузка сохраненного имени пользователя
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember').checked = true;
    }
}
