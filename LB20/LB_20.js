// 1. Створення класу User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Мене звати ${this.name}, мій email: ${this.email}`);
    }
}

// 2. Створення класу Admin, який наслідує User
class Admin extends User {
    constructor(name, email, role) {
        super(name, email); 
        this.role = role;   
    }

    displayRole() {
        console.log(`Користувач: ${this.name}, Роль: ${this.role}`);
    }
}


console.log("Завдання 1 та 2");

const simpleUser = new User("Олексій", "alex@example.com");
simpleUser.greet(); 


const adminUser = new Admin("Марія", "maria@admin.com", "Суперадмін");
adminUser.greet();       
adminUser.displayRole(); 

// 3. Реалізація інкапсуляції
class BankAccount {
    #balance; 

    constructor(initialBalance) {
        if (initialBalance < 0) {
            console.log("Початковий баланс не може бути від'ємним. Встановлено 0.");
            this.#balance = 0;
        } else {
            this.#balance = initialBalance;
        }
    }

    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.#balance} грн.`);
        } else {
            console.log("Сума поповнення має бути більшою за 0.");
        }
    }

   в
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Знято ${amount} грн. Залишок: ${this.#balance} грн.`);
        } else {
            console.log("Недостатньо коштів або некоректна сума.");
        }
    }

    
    getBalance() {
        return this.#balance;
    }
}


console.log("\nЗавдання 3");

const myAccount = new BankAccount(1000); 

myAccount.deposit(500);  
myAccount.withdraw(200); 
myAccount.withdraw(2000); 

