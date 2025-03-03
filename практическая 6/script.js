// Задание 1    
// Создаем исходный массив
const originalArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);

// Создаем новый массив с элементами, увеличенными на 10
const plusTenArray = originalArray.map(num => num + 10);

// Создаем новый массив с элементами, умноженными на 3
const timesThreeArray = originalArray.map(num => num * 3);

// Отображаем массивы на странице
document.getElementById('originalArray').textContent = originalArray.join(', ');
document.getElementById('plusTenArray').textContent = plusTenArray.join(', ');
document.getElementById('timesThreeArray').textContent = timesThreeArray.join(', ');


// Задание 2
// Создаем массив с годами рождения
const birthYears = Array.from({ length: 5 }, () => Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900);
const currentYear = new Date().getFullYear();

// Вычисляем возраст для каждого года рождения
const ages = birthYears.map(year => currentYear - year);

// Отображаем исходный массив и возраст на странице
document.getElementById('birthYears').textContent = birthYears.join(', ');
document.getElementById('ages').textContent = ages.join(', ');


// Задание 3
// Создаем массив пользователей
const users = [
    { name: 'Анна', role: 'user', canEdit: false },
    { name: 'Иван', role: 'admin', canEdit: true },
    { name: 'Мария', role: 'user', canEdit: false },
    { name: 'Петр', role: 'admin', canEdit: true },
    { name: 'Елена', role: 'moderator', canEdit: false }
];

// Фильтруем администраторов с правами редактирования
const admins = users.filter(user => user.role === 'admin' && user.canEdit);

// Создаем строку с именами администраторов
const adminNames = admins.map(admin => admin.name).join(', ');

// Отображаем результаты на странице
document.getElementById('allUsers').textContent = users.map(user => `${user.name} (${user.role})`).join(', ');
document.getElementById('admins').textContent = adminNames;


// Задание 4
// Создаем массив имен студентов
const studentNames = ['Анна', 'Иван', 'Мария', 'Петр', 'Елена'];

// Создаем массив с рандомными оценками студентов
const grades = studentNames.map(name => ({
    name: name,
    // Генерируем массив из 2 случайных целых оценок от 2 до 5
    grades: Array.from({ length: 2 }, () => Math.floor(Math.random() * (5 - 2 + 1)) + 2)
}));

// Вычисляем сумму всех оценок с помощью reduce
const totalGrade = grades.reduce((acc, student) => 
    acc + student.grades.reduce((sum, grade) => sum + grade, 0), 0);

// Вычисляем средний балл (делим на общее количество оценок)
const averageGrade = (totalGrade / (grades.length * 2)).toFixed(2);

// Отображаем результаты на странице
document.getElementById('studentGrades').textContent = 
    grades.map(student => `${student.name}: ${student.grades.join(', ')}`).join(' | ');
document.getElementById('averageGrade').textContent = averageGrade;


// Задание 5
// Создаем исходный массив строк
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// Создаем функцию высшего порядка
function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

// Создаем функцию для преобразования строк в 0 и 1
const binaryArray = mapForEach(strArray, function(item) {
    return item.length <= 3 ? 0 : 1;
});

// Отображаем результаты на странице
document.getElementById('originalStrings').textContent = strArray.join(', ');
document.getElementById('binaryResult').textContent = binaryArray.join(', ');
