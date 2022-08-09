
function fun(a ,b) {

let suma = a+b;

return suma
}

console.log(fun(5, 8));

console.log('-------------------------------');

function fun2(a , b, c) {

    let suma  = a+b+c;

    return suma;
}
// a = u
// b = 8
// c = 7

const u = 10;
const g = 20;

console.log(fun2(u , g , 7));

//parametras yra kintama reiksme "a ir b"//
//argumentas konkreti reksme atiduodama i ta parametra//


console.log('-------------------------------');

function fun4(a = 200 , b = 42) {

    let suma  = a+b;

    return suma;
}
// a = k
// b = 8

const k = 10;

console.log(fun4(100, 100));
console.log(fun4(k, k));






console.log('-------------------------------');

function fun6 (...arg) {

console.log(arg);
}
fun6(5, 7);

fun6(5,7,8);



console.log('-------------------------------');

const daugyba = function() {
    return 5* 201;

}

function fun7   (f) {
    const rez = f();
    return rez;
}

console.log(fun7(daugyba));





