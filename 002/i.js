function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const valioo = function() {

    const kitaFun = function() {
        return 'Cia buvo kitas Fun';
    }

    //if (rand(0,1)) {
    //    return 'Valioo!';
   // }
      //  return 'visai ne valio';
    //}

//console.log(valioo());



    let spalva;

    spalva='red';



    function color() {
console.log(spalva)

    }
    spalva='green';
    spalva='black';

    color();
    spalva='pink';

    color();
}
