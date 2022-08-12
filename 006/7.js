 //Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį,
 //elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas
 // pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30
//  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

// Uzdavinio sprendimas


console.log('dtddf');



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// const size =rand(10 ,30);


// let add = 0;

//for(let i = 0 ; i , size; i++) {
//  let arr = [...Array(rand(10, 20))].map(_=> rand(0, 10));
//   arr[arr.length -1] =add;
//   add = arr;

// }
// console.log(add);



  