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

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.(5 taškai)

function ciklas() {
  let a=rand(1,11);
  let b=rand(1,11);
  console.log(a,b);

let max = Math.max(a,b);
let min = Math.min(a,b);

console.log(max,  min);

}

console.log('------------------------------------------------------------------------------');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


class Nso {

  static antenna = 3;
  static allCount = 0;

  static addAllCount(c) {
      this.allCount = this.allCount + c;
  }

  static sayBu() {
      console.log('Būūūūū!');
      console.log(this.antenna);
  }

  constructor() {
      console.log('konstruojam');
      this.count = rand(2, 5);
      this.constructor.addAllCount(this.count);
  }

  sayBu2() {
      console.log('2 X Būūūūū!');
  }

  mars() {
      // console.log(`This UFO ship has ${this.count} ufonauts`);
      // console.log('Antennas:', this.constructor.antenna);
      // this.constructor.sayBu();
      this.sayBu2();
  }

  addCount(c) {
      this.count = this.count + c;
      this.constructor.addAllCount(c);
  }

}

class Ddo extends Nso {


  constructor() {
      super();
      console.log('konstruojam2');
  }


  sayBu2() {
      console.log('3 X Būūūūū!');
  }

  sayBu4() {
      console.log('4 X Būūūūū!');
  }

}

Nso.sayBu();

const ufo1 = new Nso();
const ufo2 = new Ddo();

console.log(ufo1);
console.log(ufo2);

ufo1.addCount(10);
ufo2.addCount(100);
ufo1.addCount(20);


console.log(ufo1);
console.log(ufo2);


console.log(Nso.allCount);
console.log(Ddo.allCount);





ufo1.mars();
ufo2.mars();

ufo2.sayBu4();

// Nso.antenna = 5;

// ufo1.mars();
// ufo2.mars();


let car = "Fiat";


function person (name, age) {
this.name = name;
this.age = age;

this.displayInfo = () => {

  console.log(`Mano vardas ${this.name}, mano amzius ${this.age}!`);
};

}

const personOne = new person("Laima", 55, true, [
  "JavaScript"
]);

personOne.displayInfo();
