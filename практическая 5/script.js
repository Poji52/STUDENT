// Задание1
// Проверка палиндрома 
const checkPalindrome = () => {
    const surname = document.getElementById('surname').value;
    const isPalindrome = surname.toLowerCase() === surname.toLowerCase().split('').reverse().join('');
    document.getElementById('palindromeResult').textContent = 
        isPalindrome ? 'Это палиндром!' : 'Это не палиндром';
};
// Задание 2
// Среднее значение массива 
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
// задание 3
// Дни до Нового года (стрелочная функция)
const daysUntilNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
};
// задание 4
// Функция для отображения результата на странице
const showDaysUntilNewYear = () => {
    const days = daysUntilNewYear();
    document.getElementById('newYearResult').textContent = 
        `До Нового года осталось ${days} дней!`;
};

// Пустая стрелочная функция
const emptyFunction = () => undefined;

// Операции с массивом 
const processArray = () => {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(num => parseInt(num.trim()));
    
    const sum = arr.reduce((a, b) => a + b, 0);
    const even = arr.filter(num => num % 2 === 0);
    const doubled = arr.map(num => num * 2);

    document.getElementById('arrayResults').innerHTML = 
        `Сумма: ${sum}<br>Четные: ${even.join(', ')}<br>Удвоенные: ${doubled.join(', ')}`;
};

// Фильтр email
const emails = [
    'user@gmail.com',
    'user@yahoo.com',
    'user@hotmail.com',
    'user@mail.ru'
];

const filterEmails = () => {
    const filter = document.getElementById('emailFilter').value.toLowerCase();
    const filteredEmails = emails.filter(email => 
        email.toLowerCase().includes(filter)
    );
    
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = filteredEmails
        .map(email => `<div class="email-item">${email}</div>`)
        .join('');
};

// Инициализация списка email при загрузке
window.onload = () => {
    filterEmails();
};
