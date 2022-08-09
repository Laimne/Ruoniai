

const mas = [];

mas.push('Petras');
mas.push('Ona');
mas.push('Bebras' , 'kengura' ,'raganosis');
mas[1]='Barsukas';
//pakelia i virsu//
mas.unshift('Kazkas');

//NEATSPAUSDINA KAS BUVO, BET KAS YRA DABAR//
//FOTKE//
console.log([...mas]);



mas.pop();



mas.shift();


console.log(mas);
// suzinome kiek aukstu yra//
console.log(mas.length);



//masyvo atspausdinimas aukstais//
//antras elementas indeksas, pirmas  elementas gyventojas//


mas.forEach((gyventojas, aukstas) => console.log(++aukstas,gyventojas));

const mas2 =[];

mas2.push([5, 8, 12]);

mas2.push([45, 78, 112]);

mas2.push([50, 80, 120]);
mas2.push(null);


//console.table(mas2);

//console.log(mas2[1][2]);

mas2.forEach(aukstas => aukstas.forEach(skaicius => console.log(skaicius)));




