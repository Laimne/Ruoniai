// Eventai-- objektas kur sudeta kas turi vykti ,kas ka padare..mygtukas

//console.log('START');

//for (let i = 0; i < 4000; i++) {
//    String('kajjskkk');
// } ;

//console.log('END');

const keb = document.querySelector('button');

console.log(keb);

keb.addEventListener('click', () => {
    console.log('Valio');
    keb.style.display = 'none';
    setTimeout(() => {
        keb.style.display = 'block';
    }, 1000);
});

 //const keb = document.querySelector('button');

 //console.log(keb);

 //keb.addEventListener('click',() => {
   // console.log('Valio');
   // keb.style.display ='none';
   //setTimeout(() => {
   //     keb.style.display = 'block';

   // },1000 );
 //});


 //   const c = document.querySelector('.circle');
 //let count = 0;

 //const 

 // SPAGETI KODAS

const c = document.querySelector('.circle');
const h1 = document.querySelector('h1');
let count = 0;
let tid;
let balls = 10;
const start = () => {
    const timerId = setInterval(() => {
        c.style.top = rand(0, 90) + 'vh';
        c.style.left = rand(0, 90) + 'vw';
        balls--;
        if (!balls) {
            clearInterval(tid);
            c.style.display = 'none';
        }
        h1.innerText = 'Good: ' + count + ' Left:' + balls;
    }, 1000);
    return timerId
}
h1.innerText = 'Good: ' + count + ' Left:' + balls;

tid = start();

c.addEventListener('click', () => {
    clearInterval(tid);
    tid = start();
    c.style.top = rand(0, 90) + 'vh';
    c.style.left = rand(0, 90) + 'vw';
    balls--;
    if (!balls) {
        clearInterval(tid);
        c.style.display = 'none';
    }
    count++;
    h1.innerText = 'Good: ' + count + ' Left:' + balls;
    console.log(count);
})



