'use strict';
// Задание 1.

/*
Дана строка:
  Я изучаю JavaScript
Как вывести 3-й символ? 1-й? Последний?

  Приветствуется решение несколькими способами

Решение должно быть залито в ваш репозиторий на github
*/

// Решение

let str = 'Я изучаю JavaScript';
console.log(str[3-1]);
console.log(str[0]);
console.log(str[str.length -1]);

console.log(str.slice(2,3));
console.log(str.slice(0,1));
console.log(str.slice(-1));

console.log(str.substring(3, 2));
console.log(str.substring(-1,1));
console.log(str.substring(str.length -1));

console.log(str.substr(2, 1));
console.log(str.substr(0, 1));
console.log(str.substr(-1, 1));

//============================================================================================================

// Задание 2.
/*
Можем ли мы заменить в строке:
  Я изучаю JavaScipt
символ ю на другой? Если да, то как?
  Можем ли заменить слово JavaScript на 'Frontend`?

Приветствуется решение несколькими способами

Решение должно быть залито в ваш репозиторий на github
*/

// Решение

str = 'Я изучаю JavaScript';

if (str.includes('ю')) {
  str = str.replace('ю', 'Ю');
}
console.log(str);
let changeWord = str.replace('JavaScript', 'Frontend')
console.log(changeWord);


//============================================================================================================

// Задание 3.

/*
Дан массив элементов
  [cat, dog, parrot, horse]

Как узнать индекс элемента parrot?

  Приветствуется решение несколькими способами

Решение должно быть залито в ваш репозиторий на github
*/

// Решение

let arr = ['cat', 'dog', 'parrot', 'horse'];
let element = 'parrot';
console.log(arr.indexOf(element));


//============================================================================================================

// Задание 4.


/*
Дан массив элементов
  [cat, dog, parrot, horse, fish, chicken, lion]

Как удалить элемент fish?
  Как удалить элемент cat?
  Как удалить последние 2 элемента?

  Приветствуется решение несколькими способами

Решение должно быть залито в ваш репозиторий на github
*/

// Решение

let arr2 =   ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];

let removeFish = arr2.splice(4, 1);
console.log(removeFish);
console.log(arr2);

let addCat = arr2.shift();
console.log(addCat);
console.log(arr2);

arr2 = arr2.slice(0, -2);
console.log(arr2);

//============================================================================================================

// Задание 5.

/*
Дан массив:

  [31, 10, `chicken`, 9, `fish`, `10`]

Оранжевым выделены строчные элементы

Необходимо получить массив в котором останутся только строки / элементы со значением 10

Решение должно быть залито в ваш репозиторий на github
*/

// Решение

let arr3 =  [31, 10, `chicken`, 9, `fish`, `10`];
let newArray =  arr3.filter(word => word === 10 || typeof word === "string");
console.log(newArray);


//============================================================================================================

// Задание 6.

/*

Вам дам объект

  ```
const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',
}
```

1) Необходимо вывести все свойства и значения в следующем виде

  ```
<property>: <value>
```

2) Необходимо вывести отфарматированные свойства и значения:

  ```
First name: Jack
Last name: Sparrow
Age: 25 ages
Where to find: Caribbean sea
```

Оба решения должны быть залиты в ваш репозиторий на github
*/


// Решение


const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',

};

/*
for (let property in person) {
  console.log(`${property}: ${person[property]}`);
};
*/


for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}


for (const [key, value] of Object.entries(person)) {
  let changedOjc;
  switch (key) {
    case 'firstName':
      changedOjc = `First name: ${value}`;
      break;
    case 'lastName':
      changedOjc = `Last name: ${value}`;
      break;
    case 'age':
      changedOjc = `Age: ${value} ages`;
      break;
    case 'location':
      changedOjc = `Where to find: ${value}`;
      break;
    default:
      changedOjc = 'default';
  }
  console.log(changedOjc);
}

//============================================================================================================

// Задание 7.

/*Написать функцию, которая будет сравнивать 2 объекта и возращать true или false.*/

// Решение


let obj1 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
    room: {
        number: 23,
        participants: ["john", "ann"]
    },
};
let obj2 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
    room: {
        number: 23,
        participants: ["john", "ann"]
    },
};


function deepEqual (obj1, obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);
}
console.log(deepEqual(obj1, obj2))