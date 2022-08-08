function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let iskrito;

do {


    iskrito = rand(0,1) ? 'S' : 'H';
    console.log(iskrito);
}