// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Возвращает случайное целое число от min до max
}

// Задача 1
function task1() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30)); // Генерирует массив из 15 случайных чисел от -10 до 30
    const positiveSum = arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0); // Суммирует положительные числа
    const positiveCount = arr.filter(num => num > 0).length; // Подсчитывает количество положительных чисел
    const average = positiveSum / positiveCount; // Вычисляет среднее арифметическое положительных чисел

    document.getElementById('result1').innerHTML = `
        Массив: [${arr.join(', ')}]
        Среднее арифметическое положительных чисел: ${average.toFixed(2)}
    `;
}

// Задача 2
function task2() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30)); // Генерирует новый массив из 15 случайных чисел
    const originalArr = [...arr]; // Сохраняет оригинальный массив для вывода
    const modifiedArr = arr.map(num => num < 0 ? num * num : num); // Заменяет отрицательные числа на их квадрат

    document.getElementById('result2').innerHTML = `
        Исходный массив: [${originalArr.join(', ')}]
        Массив после замены: [${modifiedArr.join(', ')}]
    `;
}

// Задача 3
function task3() {
    const arr = Array.from({length: 15}, () => getRandomInt(-10, 30)); // Генерирует массив из 15 случайных чисел
    const positiveNums = arr.filter(num => num > 0); // Отбирает положительные числа
    const negativeNums = arr.filter(num => num < 0); // Отбирает отрицательные числа
    const zeroCount = arr.filter(num => num === 0).length; // Подсчитывает количество нулей

    const positiveAvg = positiveNums.length ?
        (positiveNums.reduce((acc, curr) => acc + curr, 0) / positiveNums.length).toFixed(2) : 0; // Среднее положительных
    const negativeAvg = negativeNums.length ?
        (negativeNums.reduce((acc, curr) => acc + curr, 0) / negativeNums.length).toFixed(2) : 0; // Среднее отрицательных

    document.getElementById('result3').innerHTML = `
        Массив: [${arr.join(', ')}]
        Среднее арифметическое положительных чисел: ${positiveAvg}
        Среднее арифметическое отрицательных чисел: ${negativeAvg}
        Количество нулей: ${zeroCount}
    `;
}

// Задача 4
function task4() {
    const ITERATIONS = 1000000; // Количество итераций для симуляции
    const RED = 0, BLACK = 1, WHITE = 2; // Определение цветов
    let redCount = 0; // Счетчик красных
    let maxRedStreak = 0; // Максимальная последовательность красных
    let currentRedStreak = 0; // Текущая последовательность красных

    for (let i = 0; i < ITERATIONS; i++) { // Цикл по количеству итераций
        const color = getRandomInt(0, 2); // Генерация случайного цвета (0 - красный, 1 - черный)
        
        if (color === RED) { // Если цвет красный
            currentRedStreak++; // Увеличиваем текущую последовательность красных
            redCount++; // Увеличиваем общий счетчик красных
            maxRedStreak = Math.max(maxRedStreak, currentRedStreak); // Обновляем максимальную последовательность, если нужно
        } else { 
            currentRedStreak = 0; // Сбрасываем текущую последовательность при выпадении не красного цвета
        }
    }

    document.getElementById('result4').innerHTML = `
        Всего красных выпало: ${redCount}
        Максимальное число красных подряд: ${maxRedStreak}
        Процент красных: ${((redCount / ITERATIONS) * 100).toFixed(2)}%
    `;
}
