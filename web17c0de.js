


// const numbers = [9,8,7,6,5,4,3,2,1];
// const result = numbers.reduce(
//     (acc, currentValue, currentIndex, array) => {
//         acc.sum += currentValue;
//         acc.product *= currentValue;
//         acc.conc += currentValue;
//         // Добавляем текущий индекс в массив
//         acc.indices.push(currentIndex);
//         // Логируем текущие значения (для понимания)
//         console.log(`Итерация ${currentIndex}:`);
//         console.log(`Текущий элемент: ${currentValue}`);
//         console.log(`Промежуточный результат:`+ acc.sum + ' ' + acc.product + " " + acc.indices.toString() + " " + acc.conc);
//         return acc;
//     },
//     // Начальное значение accumulator (acc)
//     { sum: 0, product: 1, indices: [], conc:"" }
// );
// console.log(result);
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
// ];
//
// const groupedByAge = people.reduce((acc, person) => {
//     acc[person.age] = acc[person.age] || [];
//     acc[person.age].push(person);
//     return acc;
// }, {});
//
// console.log(groupedByAge);

const keyValuePairs = [['name', 'Alice'], ['age', 25], ['city', 'New York']];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log(obj); // { name: 'Alice', age: 25, city: 'New York' }