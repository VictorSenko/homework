class Sorter {
    constructor(arr) {
        
        this.arr = arr; 
    }
    
    add() {
        this.arr.push(...arguments);
        return this.arr.length;

    }
    length() {
        return this.arr.length;
    }
    sort(callback) {
        for (let i = 0, counter = this.arr.length, len = this.arr.length; i < len; i++,counter--) {
            for (let j = 0; j < counter; j++) {
                if (typeof callback === 'function') {
                    if (callback(this.arr[j], this.arr[j + 1]) === 1) {
                        let a = this.arr[j + 1];
                        this.arr[j + 1] = this.arr[j];
                        this.arr[j] = a;
                    };
                }else if ((this.arr[j]+'') > (this.arr[j + 1]+'')) {
                    let a = this.arr[j + 1];
                    this.arr[j + 1] = this.arr[j];
                    this.arr[j] = a;
                }
            }
        }
    }
    map(callback) {
        for (let i = 0, len = this.arr.length; i < len; i++) {
            this.arr[i] = callback(this.arr[i], i, this.arr)[0];
        }
    }
    filter(callback) {
        for (let i = 0, len = this.arr.length; i < len; i++) {
            if (callback(this.arr[i], i, this.arr) === false) {
                this.arr.splice(i, 1);
            }
        }
    }
    pushArray(arr) {
        this.arr.push(...arr);
    }
}

let a = [1, 12, 5, 24,-9];
sorter = new Sorter(a);
console.log(sorter.valueOf());


/*add

console.log(sorter.add(1, 2, 3)); */

/*length

console.log(sorter.length()); */

/*sort
function sor(a, b) {
    return a < b ? 1 : -1;
}
sorter.sort(sor);
console.log(sorter); */

/*map
sorter.map(function (el, i) {
    el = el + i;
    return arguments;
});
console.log(sorter); */

/*filter
sorter.filter(function (el) {
    return el > 0;
});

console.log(sorter); */

/* pushArray
let b = [1, 2, 5];
sorter.pushArray(b);
console.log(sorter); */
