class Sorter {
    constructor(arr){
        this.arr = arr;
    }
    add() {
        this.arr.push(...arguments);
        return this.arr.length;
    }
    length() {
        return this.arr.length;
    }
    sort(func) {
       
        this.arr.sort(func);
    }
    map() {
        return this.arr.map(function (item) {
            item += 1;
            item = item +"";
            return item;
        });
       
    }
    filter() {
        return this.arr.filter(function (item, i) {
            if (typeof (item) === 'number') {
                return item;
            }
        });
    }
    pushArray(array) {
        this.arr.push(...array);
    }
}
let arr = [1, 2, 3];

let sorter = new Sorter(arr);

//add
let addFunctionResult = sorter.add(1, '2', '3', '123');

console.log(arr);
console.log(addFunctionResult);

//length

let len = sorter.length();
console.log(len);

let qwe = new Sorter([2, 6]);
qwe.add(...arr);
console.log(qwe.length());

//sort
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

qwe.sort(compareNumeric);
console.log(qwe);
//map

let newArr = qwe.map();
console.log(newArr);

//filter
let filtredArr = qwe.filter();
console.log(filtredArr);

//pushArray

let newArray = [2, 6, 10];

qwe.pushArray(newArray);
console.log(qwe);