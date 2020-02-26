// inimese kirjeldus OOP abil
// klasside kasutus

class Isik {
    // konstruktor
    constructor(e, p, skp){
      this.eesnimi = e;
      this.perenimi = p;
      this.synnikuupaev = new Date(skp);
    }
    // tervitus meetod
    tervitus() {
      return `Tere, ${this.eesnimi} ${this.perenimi} !`;
    }
  
  // vanuse arvutamine
  vanuseArvutamine(){
    const vahe = Date.now() - this.synnikuupaev.getTime();
    const vanus = new Date(vahe);
    return vanus.getUTCFullYear() - 1970;
  }

// abiellus - uus perenimi
abiellus(uusPerenimi) {
    this.perenimi = uusPerenimi;
  };
  }

const pille = new Isik('Pille', 'Pall', '09-11-1994');
console.log(pille.tervitus());
pille.abiellus('Tamm');
console.log(pille.tervitus());
console.log(pille.vanuseArvutamine()); 