
console.log('-------------------------------------------');

const sp = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
  ];

//sp.forEach(el => console.log(el.name,el.color));

//console.log(x);

const map =sp.map(el => el.name);

console.log(map);

console.log('-------------------------------------------');

const map1 =sp.map(el =>({... el, name: 'X' +el.name, what:'nu na'}));

console.log(sp);
console.log(map);

console.log('-------------------------------------------');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//const_ ='555';
    
 const ats =[...Array(10)].map(_ => rand(1, 100))
 
  //console.log(Array(10));
  //console.log([Array(10)]);

  console.log(ats);

  console.log('-------------------------------------------');

  //sp.filter = sp.filter(el => )

  //const filter = sp.filter(el => el.type =='fish')

  //console.log(filter);

const filter = sp.filter(el => el.type =='car')

  //.map(el => ({...el ,name:  'ZIL'}));

  console.log(filter);

  
  console.log('-------------------------------------------');

  //KOKIOS SPALVOS BEBRAS -- filtras--gali buti naudojamas trinimui//

  const filter1 = sp.find(el => el.type == 'car').color;


  console.log(filter1);

  console.log('-------------------------------------------');

  const filter2 = sp.find(el => el.color == 'redc' && el.type =='animal');


  console.log(filter2 ? filter2.color : 'no no no');

  console.log('-------------------------------------------');

  //const filter3 = sp.filter3 (el => el.name !='Tomas');


  //console.log(filter3);


  console.log('-------------------------------------------');

  const filter4 = sp.filter(el => el.name != 'animal');

  console.log([...sp]);

 // sp.sort((a ,b ) => {
//
   // if (a. name > b.name) {
   //   return 1;
   // }
    //  if (a. name < b.name) {
    //    return 2;
    //  }
//
    //  return 0;
//
  //  });

    console.log([...sp]);

    console.log('-------------------------------------------');


  sp.sort((a, b) => b.id - a.id);

  console.log([...sp]); 

    // stringams didinti    "String.prototype.localeCompare()"//

    //sp.sort((a ,b) => a.name.localeCompare(b.name));

    console.log([...sp]);

    console.log('-------------------------------------------');

    sp.sort((a ,b) => b.name.localeCompare(a.name));

    console.log([...sp]);

    console.log('-------------------------------------------');


    //array.reducel tai yra sudetis, daugyba ir t.t.//


    const array1 = [1, 2, 3, 4, ];

    //array1.reduce((previousValue , currentValue)=>previousValue + currentValue ,
    //kai irasome skaiciu po kalelio pvz. daugyboje -tai tiek kartu tuos skaicius sudaugina);

    console.log(array1.reduce((previousValue , currentValue)=>previousValue + currentValue ));
 

    const array2 = [1, 2, 3, 4, ];
   
    console.log(array2.reduce((previousValue , currentValue)=>previousValue * currentValue, 2 ));


    console.log('-------------------------------------------');  

    const array3 = [1, 2, 3, 4,10 ];

    const initialValue = 0;
    const sumWithInitial = array3.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    console.log(sumWithInitial);



   


  
