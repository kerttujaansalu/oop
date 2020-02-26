// inimese kirjeldus OOP abil
// Objekt.prototype
// inimese konstruktor

function Isik(n, skp){ //konstruktor 
    this.nimi = n;
    this.synnikuupaev = new Date(skp);

}
// väljasta täisnimi
Isik.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi}`;
}
// arvuta vanus
Isik.prototype.arvutaVanus = function(){
  const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
  const vanusDateKujul = new Date(vaheSekundites);
  const taisAasta = vanusDateKujul.getUTCFullYear();
  const vanus = taisAasta - 1970;
  return vanus;
    
  }
  const kerttu = new Isik('Kerttu', 'Jaansalu', '02-18-1999');
  const rudolf = new Isik('Rudolf', 'Saluoks', '05-23-1999');
  console.log(kerttu);
  console.log(rudolf.taisNimi()); 