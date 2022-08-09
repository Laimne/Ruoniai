

const mas = [];
//metodas push uzpildo masyva gyventojais//
mas.push('Petras');
mas.push('Ona');
mas.push('Bebras' , 'kengura' ,'raganosis');

//vietoj Onos galime ikelti barsuka, kai irasome 1, nes petras gyvena 0 aukste//
mas[1]='Barsukas';

//padaro lentele//
console.table(mas);


//pakelia i virsu ,sukuria nulini auksta ir viska pakelia i virsu//
mas.unshift('Kazkas');

//NEATSPAUSDINA KAS BUVO, BET KAS YRA DABAR//
//FOTKE//
console.log([...mas]);



//mas.pop();



//mas.shift();


console.log(mas);


// suzinome kiek aukstu yra//
console.log(mas.length);



//masyvo atspausdinimas aukstais//
//antras elementas indeksas, pirmas  elementas gyventojas//


//mas.forEach((gyventojas, aukstas) => console.log(++aukstas,gyventojas));//

//const mas2 =[];//

//mas2.push([5, 8, 12]);//

//mas2.push([45, 78, 112]);//

//mas2.push([50, 80, 120]);//
//mas2.push(null);//


//console.table(mas2);//

//console.log(mas2[1][2]);//

//mas2.forEach(aukstas => aukstas.forEach(skaicius => console.log(skaicius)));//



// for(let i = 0; i < mas.lenght; i++){//
//     console.log('Dabar:', i, mas[1]) ;//
//  }


//const ka = function(vienasGyventojas, aukstas){
//    console.log(''Dabar Fancy:' , aukstas, vienasGyventojas);
//}





// vienos eilutes kodas, g-gyventojas, i- aukstas , jei kconsoleje pridesime du++ generuos kiekviena gyventoja atskirai//
mas.forEach((g, i) => console.log(i, g));





