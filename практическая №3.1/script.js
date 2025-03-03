// Задание 1 - анализ работы объекта
let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function() {
    alert("Привет!");
};

user.sayHi(); // Выведет "Привет!"

// Задание 2 - объект покупателя
let customer = {
    name: "Иван",
    age: 25,
    email: "ivan@mail.ru",
    phone: "+7-999-123-45-67",
    address: "ул. Пушкина, д. 10",
    orderCount: 5
};

// Вывод трех значений
console.log("Имя: " + customer.name);
console.log("Телефон: " + customer.phone);
console.log("Адрес: " + customer.address);

// Задание 3 - объекты и их взаимосвязь
let users = {
    user1: { id: 1, name: "Анна", age: 25 },
    user2: { id: 2, name: "Петр", age: 30 }
};

let orders = {
    order1: { userId: 1, dish: "Пицца", price: 500 },
    order2: { userId: 2, dish: "Суши", price: 1200 }
};

let restaurants = {
    rest1: { name: "Пиццерия", rating: 4.5 },
    rest2: { name: "Суши-бар", rating: 4.8 }
};

// Вывод заказов дороже 1000 рублей
for (let key in orders) {
    if (orders[key].price > 1000) {
        console.log("Дорогой заказ:", orders[key]);
    }
}

// Задание 4 - конструктор для группы
function Student(name) {
    this.name = name;
    this.isStudent = true;
}

let group = [
    new Student("Алексей"),
    new Student("Мария"),
    new Student("Дмитрий")
];

group.forEach(student => {
    console.log("Студент:", student.name);
});

// Задание 5 - расширенный конструктор студента
function StudentExtended(name, course, speciality) {
    this.name = name;
    this.course = course;
    this.speciality = speciality;

    this.introduce = function() {
        alert(`Меня зовут: ${this.name}, я учусь на ${this.course} курсе, специальность: ${this.speciality}`);
    };
}

let student1 = new StudentExtended("Николай", 3, "ИСП");
student1.introduce();
