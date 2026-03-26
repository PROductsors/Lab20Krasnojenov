// 1 та 2. Клас Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Метод для представлення (Завдання 2)
    introduce() {
        console.log(`Привіт! Мене звати ${this.name}, мені ${this.age} років.`);
    }
}

// 4 Наслідування: Клас Student
class Student extends Person {
    constructor(name, age, course) {
        super(name, age); 
        this.course = course;
    }

    // Перевизначення методу introduce
    introduce() {
        console.log(`Я студент ${this.name}, навчаюся на ${this.course} курсі.`);
    }
}

// 5. Інкапсуляція
class BankAccount {
    #balance; 

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Метод для отримання значення
    getBalance() {
        return `Ваш баланс: ${this.#balance} грн.`;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }
}

// 6. Поліморфізм
class Animal {
    speak() {
        console.log("Тварина видає звук");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Собака гавкає.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Кіт нявкає.");
    }
}

// тест

console.log("--- Завдання 1, 2, 3 (Person) ---");
const person1 = new Person("Іван", 25);
const person2 = new Person("Олена", 30);
person1.introduce();
person2.introduce();

console.log("\n--- Завдання 4 (Student - Наслідування та Поліморфізм) ---");
const student = new Student("Марія", 20, 2);
student.introduce(); 

console.log("\n--- Завдання 5 (Інкапсуляція) ---");
const account = new BankAccount(1000);
console.log(account.getBalance()); 


console.log("\n--- Завдання 6 (Поліморфізм тварин) ---");
const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
