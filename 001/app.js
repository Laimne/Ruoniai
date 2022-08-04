console.log('taip as esu');



console.log ([...Array(11)].map(_=> 'a'+ Math.floor(Math.random()*16777215).toString(16).padEnd(6, 0)));



/*!--Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš
 mažesnės. Atspausdinkite rezultatą naudodami console.log()--*/


 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pirma() {
    let a=rand(0,4);
    let b=rand(0,4);
    console.log(a,b);

 let max = Math.max(a,b);
 let min = Math.min(a,b);

 
}

pirma()