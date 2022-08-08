console.log('taip tikrai as esu');



let rez = 1;

for (let i = 1; i < 6; i++) {

rez = rez * i;

}
console.log('*', rez);
 
console.log("---------------------------------------");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


/*

<  ---- >=
>  ---- <=
== ---- !=
|| --- &&

*/



let turiu = 500;

while(turiu <= 1000) {

turiu = turiu + 100;

}

console.log(turiu);

console.log("--------------------------------------");  


let iskrito;

let saugiklis = 10;

do {

    if(!(saugiklis--)) break;

    iskrito = rand(0,1) ? 'SKAICIUS' : 'HERBAS';
    console.log(iskrito)

}while(iskrito != 'B');


console.log(rand(1,5));

