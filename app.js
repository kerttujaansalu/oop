// inimese kirjeldus OOP abil
// Prototüüpide pärilus
// isiku konstruktor
function Isik(e, p){

    this.eesnimi = e;
    this.perenimi = p;

}
// väljasta täisnimi
Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
  }
// klient konstruktor
function Klient(e, p, t, s){
    // konstruktori kasutamine
    Isik.call(this, e, p); 
    this.telefon = t;
    this.staatus = s;
  }

  // teiste meetodite/funktsioonide kasutamine
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame täisnimi funktsiooni Klient objektile
Klient.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi} - sinul on ${this.staatus} tase`;
  }

  const rudolf = new Klient('Rudolf', 'Saluoks', '2222 6666', 'hõbe');
  console.log(rudolf.taisNimi()); 