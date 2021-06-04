// for...in
// for...of
// ========================
// Iterator

let arrNames = ['Vova', 'Sara', 'Bob', 'Sveta'];

function namesIterator(arrNames) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < arrNames.length ?
                { value: arrNames[nextIndex++], done: false } :
                { done: true };
        }
    };
}

// let names = namesIterator(arrNames);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());



// ========================
// Generator

function* sayName() {
    yield [1, 3, 4, 45, 5];
    yield 200;
    yield 'Hello';
}


let names = sayName();

console.log(names.next());
console.log(names.next());
console.log(names.next());
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);