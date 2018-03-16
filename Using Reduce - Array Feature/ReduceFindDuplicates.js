var array1 = [6, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 7, 7];
array1.sort(function(a, b){return a > b} );
console.log(array1);

let c = [];
array1.reduce(
    (accumulator, currentValue) => {
        if (accumulator != currentValue) {
            return (accumulator = currentValue);
        } else {
            if (!c.includes(accumulator)) {
                c.push(accumulator);
                return (accumulator = currentValue);
            }
        }
    })
console.log(c);