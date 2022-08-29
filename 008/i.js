console.log('sveki!');

const m = new Map();


//m.set('animal' , 'Bebras');
//m.set('girl' , 'Birute');
//m.set({labas: 'helo'},{kaTu: 'nieko'});


m.set('5' , {p:'pienas', q:5});
m.set('18' , {p:'kefyras', q:20});


if(m.has(18)) {
m.set(18,{p:'kefyras', q:m.get(18).q + (10)})
} else {
    m.set(18,{p:'kefyras', q:10})

}

const ar =[...m];

console.log(ar);

ar.sort((a,b) => a=>[1].q - b[1].q);

const m2 = new Map(ar);

console.log(m2);


m.set('18' , 'kefyras');


m.delete('pienasgirl');
m.delete('18');

//console.log('pienas', m.has(5));
//console.log('kefyras', m.has(18));

console.log(m);

console.log('----------------------------------------------------------');


class stikline {

    constructor(turis){
        this .turis = turis;
        this . kiekis = 0;

    }

ipilti(kiekis) {
    this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    }
    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis =0;
        return kiekis;
    }

    stiklinejeYra() {
console.log(`Stiklineje ${this.turis}ml yra ${this.kiekis}ml skyscio`);
    }
}

const s1 = new stikline(100);
const s2 = new stikline(150);
const s3 = new stikline(200);

// Komponentas

// Propsas

// Steitas


