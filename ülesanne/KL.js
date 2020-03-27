class KL {

    // funktsioon välja puhastamiseks (kui oled vajutanud Lisa ülesanne), app.js ja KL.js
    puhastaSisend(){
        document.getElementById('task').value = '';
    }

    // funktsioon ülesande tekitamiseks tabelisse
    lisaYlesanneTabelisse (y){

       const li = document.createElement('li');
       li.className = 'collection-item';
       li.appendChild(document.createTextNode(y.ylesanne));
       const link = document.createElement('a');
       link.className = 'kustuta secondary-content';
       link.innerHTML = `<i class="fa fa-remove"></i>`;
       li.appendChild(link);
       taskList.appendChild(li);

    }
    // kustutab ühe ülesande listist, app.js ja KL.js
    kustutaYlesanneTabelist(kustutaElement){
        if(confirm('Soovid ülesannet kustutada?')){
            kustutaElement.parentElement.parentElement.remove();
        }
    }
    // kustutab kõik ülesanded listist ja local storagest korraga, app.js ja KL.js
    kustutaKoikYlesanded(){
        while(taskList.firstChild){
            document.querySelector('.collection').removeChild(taskList.firstChild);
            localStorage.clear();
        }
    }
    // näitab ülesannet listis ja local storages, app.js, KL.js, LS.js
    naitaYlesannet(){
        

        const ls = new LS();
        const kl = new KL();
        const ylesanded = ls.loeYlesannet();
        ylesanded.forEach(function(task){
            const ylesanne = new Ylesanne(task['ylesanne']);
            kl.lisaYlesanneTabelisse(ylesanne);
        })


    }
}
