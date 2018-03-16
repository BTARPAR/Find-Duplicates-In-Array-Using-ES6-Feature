var array = [2,3,3,3,4,4,7,8,53,3,3,53];
let c = [];
array.filter((el, i, a) => {
    if(el == a[i+1] && !c.includes(el)){
        return c.push(el);
    }
} );
console.log(c);