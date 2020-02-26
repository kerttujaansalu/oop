// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(n, skp){ //konstruktor 
    this.nimi = n;
    this.synnikuupaev = new Date(skp);

   // arvuta vanus 
   this.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
}
    
  }
  const kerttu = new Isik('Kerttu', 'Jaansalu', '02-18-1999');
  const rudolf = new Isik('Rudolf', 'Saluoks', '05-23-1999');
  console.log(kerttu.taisNimi());
  console.log(rudolf.taisNimi()); 