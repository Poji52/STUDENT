// Задание 1
function showMessage() {
    let message = "Привет, я JavaScript!"; // Создаем сообщение
    alert(message); // Показываем сообщение в окне alert
}

// Задание 2
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value; // Получаем строку из поля ввода
    const cleanStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, ''); // Очищаем строку от неалфавитных символов и приводим к нижнему регистру
    const isPalindrome = cleanStr === cleanStr.split('').reverse().join(''); // Проверяем, является ли строка палиндромом
    document.getElementById('palindromeResult').textContent = 
        isPalindrome ? 'Это палиндром!' : 'Это не палиндром'; // Выводим результат проверки
}

// Задание 3
function processArray() {
    const arr = Array.from({length: 12}, () => Math.floor(Math.random() * 21) - 10); // Создаем массив из 12 случайных чисел от -10 до 10
    const processedArr = arr.map(num => num < 0 ? num * num : num); // Заменяем отрицательные числа на их квадрат
    document.getElementById('arrayResult').textContent = 
        `Исходный массив: ${arr}\nМассив с удвоенными отрц числ: ${processedArr}`; // Выводим исходный и обработанный массивы
}

// Задание 4
class User {
    constructor(name) {
        this.name = name; // Сохраняем имя пользователя
    }

    displayName() {
        return `Привет, ${this.name}!`; // Возвращаем приветственное сообщение с именем
    }
}

function createUser() {
    const name = document.getElementById('userNameInput').value; // Получаем имя из поля ввода
    const user = new User(name); // Создаем нового пользователя
    document.getElementById('userNameResult').textContent = user.displayName(); // Выводим приветственное сообщение
}

// Задание 5
class Clock {
    constructor({ template }) {
        this.template = template; // Сохраняем шаблон времени
    }

    render() {
        let date = new Date(); // Получаем текущее время
        let hours = date.getHours(); // Получаем часы
        let mins = date.getMinutes(); // Получаем минуты
        let secs = date.getSeconds(); // Получаем секунды

        // Форматируем время, добавляя ноль перед однозначными числами
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours) // Заменяем 'h' на часы
            .replace('m', mins) // Заменяем 'm' на минуты
            .replace('s', secs); // Заменяем 's' на секунды

        document.getElementById('clockResult').textContent = output; // Выводим текущее время
    }

    stop() {
        clearInterval(this.timer); // Останавливаем таймер
    }

    start() {
        this.render(); // Отображаем текущее время
        this.timer = setInterval(() => this.render(), 1000); // Запускаем таймер для обновления времени каждую секунду
    }
}

let clock = new Clock({template: 'h:m:s'}); // Создаем новый экземпляр часов с заданным шаблоном
clock.start(); // Запускаем часы

// Задание 6
class NameReverser {
    constructor(name) {
        this.name = name; // Сохраняем имя для реверсирования
    }

    reverse() {
        return this.name.split('').reverse().join(''); // Реверсируем имя и возвращаем его
    }
}

function reverseName() {
    const name = document.getElementById('reverseNameInput').value; // Получаем имя из поля ввода
    const reverser = new NameReverser(name); // Создаем экземпляр NameReverser
    document.getElementById('reverseNameResult').textContent = reverser.reverse(); // Выводим реверсированное имя
}
