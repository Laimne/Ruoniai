//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)



    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
         Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // pirma(a,b) {
        //let a =rand(a);
       // let b=rand(b);
       // console.log(a,b);
    
     //let max = Math.max(a<b);
     //let min = Math.min(a>b);
    
    
   // console.log(max || min);
     
   // }
    
 

2. //Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

let rez = 1;

for (let i = 1; i < 10; i++) {

rez = rez * i;

}
console.log('*', rez);


//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

let text = "0, 2, 4, 6, 8, 10";

for (let i = 0; i < 6; i++) {

text +="0, 2, 4, 6, 8, 10" + i + "<br>";

}
console.log('*', text);

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)


 
class Nso {

  static antena =3;

   constructor() {


   }
 


}

const ufo1 = new Nso();
const ufo2 = new Nso();

console.log(ufo1);
console.log(ufo2);

 







