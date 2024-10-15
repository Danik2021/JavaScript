'use strict';

/* test task 

const counter = {
  value: 10,
  increment(value) {
    this.value += value;
    console.log('increment => this', this);
  },
  decrement(value) {
    this.value -= value;
    console.log('decrement => this', this);
  },
};

const updateCounter = (value, callback) => {
  callback(value);
};

updateCounter(22, counter.increment.bind(counter));
updateCounter(10, counter.decrement.bind(counter));

*/

/* Task 1 done 

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));
console.log(pizzaPalace.order('Big Mike'));

*/

/* Task 2 done

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
*/

/* Task 3 done

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  getOrdersLog() {
    return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

console.log(historyService.getOrdersLog());

console.log(historyService.getEmails());

console.log(historyService.getOrdersByEmail('solomon@topmail.net'));

*/

/* Додавання методу в prototype функції 
const Car = function ({ name, age }) {
  this.name = name;
  this.age = age;
};

const newUser = new Car({
  name: 'Gamlet',
  age: '68',
});

Car.prototype.sayHi = function (name) {
  console.log(`Welcome ${name}!`);
};

newUser.sayHi('Gamlet');
*/

// const prepareTea = () => 'greenTea';

// const getTea = numOfCups => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// const tea4TeamFCC = null;

// console.log(getTea(40));

// // 1. Змінна tea4TeamFCC повинна містити 40 чашок чаю для команди.
// // 2. Змінна tea4TeamFCC повинна містити чашки зеленого чаю.

/* Task 4 done 

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);

child.name = 'Jason';
child.age = 27;
*/

/* Task 5 done 

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

*/

/* test task 
const poly = {
  name: 'Poly',
  year: 128,
  team: 'Polys',
};

const chelsy = {
  name: 'Chelsy',
  year: 159,
  team: 'Chelsys',
};

const newUser = (message, callback) => {
  return callback.call(poly, message); // здесь `this` внутри `callback` будет ссылаться на `poly`
};

const commandCheck = function (message) {
  // используем функцию с `function`, чтобы правильно установить контекст `this`
  console.log(this); // теперь это будет `poly`
  return message;
};

console.log(newUser('Poly', commandCheck));

*/

/* Leagea of legends 

function Nps({ name, skill, type }) {
  (this.name = name), (this.skill = skill), (this.type = type);
}

Nps.prototype.mana = function (val) {
  console.log(`Mana: ${val}%`);
};

Nps.prototype.health = function (val) {
  console.log(`Health: ${val}%`);
};

const warwick = new Nps({
  name: 'Warwick',
  skill: 'Hunter',
  type: 'Killer',
});

const fiora = new Nps({
  name: 'Fiora',
  skill: 'swordswoman',
  type: 'duelist',
});

const yasuo = new Nps({
  name: 'Yasuo',
  skill: 'swordsman',
  type: 'Killer',
});

console.groupCollapsed('Leagea of legends');
console.log(yasuo.health(2157));
console.log(warwick.mana(0));
console.log(fiora.mana(100));
console.groupEnd();

*/

/* Task 6 done 

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const unikalElem = fruits => {
  return fruits.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 1;
      return acc;
    }
    acc[item] += 1;
    return acc;
  }, {});
};


// {kiwi: 3, apple: 2, orange: 1}

console.log(unikalElem(fruits));

*/

/* Task 7 done 

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function unikalMass(fruits) {
  return fruits.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    acc.push(item);
    return acc;
  }, []);
}
console.log(unikalMass(fruits));

*/

/* Task 8 done 

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let result = 0;
  for (const item in allUsers) {
    if (!allUsers[item].online) {
      continue;
    }
    result += 1;
  }
  return result;
}

console.log(countOnline(users));

*/

/* Class training 

class Champion {
  constructor({ name, stylius } = {}) {
    this.name = name;
    this.stylius = stylius;
  }

  getStylius() {
    console.log(`Name champion this is a ${this.name}, style ${this.stylius}`);
  }
}

const warwick = new Champion({
  name: 'Warwick',
  stylius: 'hunter',
});

console.log(warwick.getStylius());
*/

// class Champion {
//   constructor({ xp, armor, level }) {
//     this.xp = xp;
//     this.armor = armor;
//     this.level = level;
//   }

//   getXp = function (xp) {
//     console.log('Health: ', xp);
//   };
// }

// class Shooter extends Champion {
//   constructor({ name, range, accuracy, context, ...restProp } = {}) {
//     super(restProp);
//     this.name = name;
//     this.range = range;
//     this.accuracy = accuracy;
//     this.context = context;
//   }
// }

// const varus = new Shooter({
//   name: 'Varus',
//   xp: 1002,
//   armor: 2,
//   range: '120%',
//   accuracy: '93%',
//   level: 1,
//   context: this,
// });

// const obj = {
//   xp: 10002,
// };

// console.log(varus.getXp(1002));
