'use strict';
/*
2. Реализуйте функцию `array()` создающую функциональный объект, который
содержит массив в своем замыкании и обеспечивает следующий интерфейс доступа
к нему:
- Создание нового экземпляра `const a = array();`
- Получение элемента по индексу `a(i)`
- Добавление элемента в конец `a.push(value)`
- Удаление последнего элемента и получение его значения `a.pop()`

Пример использования:
```js
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined
```
*/

const array = () => {
  const dataArray = [];
  const accessMeth = (i) => dataArray[i];
  accessMeth.push = (val) => dataArray.push(val);
  accessMeth.pop = () => dataArray.pop();
  return accessMeth;
};

module.exports = { array };
