// Task 1
// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// Answer Task 1

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const b = a1.concat(a2);
// console.log(b);

// ********************

// Task 2
// Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
// Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].

// Answer Task 2

// const myArray = [1, 2, 3];
// myArray.reverse();
// console.log(myArray);

// ********************

// Task 3
// Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
//  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//  Дан массив[1, 2, 3].Добавьте ему в начало элементы 4, 5, 6.

// Answer Task 3
// push
// let a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a);

// unshift
// let a = [1, 2, 3];
// let b = a.unshift(4, 5, 6);
// console.log(a);

// ********************

// Task 4
// Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
//  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
//  Дан массив['js', 'css', 'jq'].Выведите на экран последний элемент и удалите его.

// Answer Task 4
// shift
// let languages = ["js", "css", "jq"];
// let firstValue = languages[0];
// console.log(firstValue);
// let b = languages.shift();
// console.log(b);

// Answer Task 4
// pop
// const languages = ["js", "css", "jq"];
// const lastItem = languages[languages.length - 1];
// console.log(lastItem);
// languages.pop();
// console.log(languages);

// ********************

// Task 5
// Работа с slice
// Для решения задач данного блока вам понадобятся следующие методы: slice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
//  Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[4, 5].

// Answer Task 5
// let xd = [1, 2, 3, 4, 5];
// let bh = xd.slice(1, 2, 3);
// console.log(xd);
// console.log(bh);

// Answer Task 5
// let xd = [1, 2, 3, 4, 5];
// let bh = xd.slice(4,5);
// console.log(xd);
// console.log(bh);

// ********************

// Task 6
// Работа с splice
// Для решения задач данного блока вам понадобятся следующие методы: splice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//  Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// Answer Task 6
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let a = [1, 2, 3, 4, 5];
// a.splice(1, 2);
// console.log(a);

// Answer Task 6
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let a = [1, 2, 3, 4, 5];
// console.log(a);
// a.splice(-5, 1);
// a.splice(3, 1);
// console.log(a);

// --Answer Task 6
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let a = [1, 2, 3, 4, 5];
// a.splice(3, 2, "a", "b", "c", 4, 5);
// console.log(a);

// --Answer Task 6
//  Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let a = [1, 2, 3, 4, 5];
// a.splice(1, 4, "a", "b", 2, 3, 4, "c", 5, "e");
// console.log(a);

// ********************

// Task 7
// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.
//  Дан массив[3, 4, 1, 2, 7].Отсортируйте его.

// Answer Task 7
// let a = [3, 4, 1, 2, 7];
// a.sort();
// console.log(a);

// ********************

// Task 8
// Работа с forEach
// Для решения задач данного блока вам понадобятся следующие методы: forEach
// Дан массив со следующими объектами внутри:
// { firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’, },
// { firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’, },
// {
// firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,
// }
// Для каждого элемента выведите сообщение в консоль типа “Пользователь(имя)(фамилия)
// является(пол) и ему сейчас(возраст) лет”

// Answer Task 8

// let users = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   {
//     firstName: "Test`ya",
//     lastName: "Testovna",
//     age: 16,
//     gender: "female",
//   },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ];

// users.forEach((user) => {
//   console.log(
//     `Пользователь ${user.firstName} ${user.lastName} ему сейчас ${user.age} лет`
//   );
// });

// ********************

// Task 9
// Работа с map
// Для решения задач данного блока вам понадобятся следующие методы: map
// Дан массив со следующими объектами внутри: { firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’, },
// { firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’, },
// {
//     firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,
// }
// Создайте новый массив на основании старого массива, добавив каждому пользователю
// в новом массиве свойство telephoneNumber которое может быть или строкой или числом(на ваше усмотрение).

// Answer Task 9
// const users = [{ firstName: "Test", lastName: "Testovich", age: 42, gender: "male", },
//  { firstName: "User", lastName: "Userovich", age: 12, gender: "male", },
//  {firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female",},
//  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female", }]

// const newUsers = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ].map((object) => ({ ...object, telephoneNumber: "[0-9]" }));

// console.log(newUsers);

// ********************
// Task 10

// Работа с filter
// Для решения задач данного блока вам понадобятся следующие методы: filter
// Дан массив со следующими объектами внутри: { firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’, },
// { firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’, },
// {
//     firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,
// }, { firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99 },
// { firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’ }
// Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи,
//  у которых будет определенный пол.

// Answer Task 10
// const users = [
//   { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   {
//     firstName: "Test`ya",
//     lastName: "Testovna",
//     age: 16,
//     gender: "female",
//   },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
//   { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
//   { firstName: "Null", lastName: "Nullovich", gender: "male" },
// ];

// const adults = users.filter(({ age }) => age > 18);
// const adultsMale = users.filter(({ gender }) => gender == 'male' );
// console.log(adults);
// console.log(adultsMale);

// ********************

// Task 11
// Работа с flat
// Для решения задач данного блока вам понадобятся следующие методы: flat
// Дан следующий массив[1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]].
// Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.

// Answer Task 11
// let a = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];
// let b = a.flat(3);
// console.log(b);

// ********************
