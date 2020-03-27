class KL {
    puhastaSisend(){
        document.getElementById('task').value = '';
    }

    
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
        
        kustutaYlesanneTabelist(kustutaElement){
            if(confirm('Kas soovid kustutada ülesannet?')){
                kustutaElement.parentElement.parentElement.remove();
            }
        }
    kustutaKoikYlesanded(){
        while(taskList.firstChild){
            document.querySelector('.collection').removeChild(taskList.firstChild);
            localStorage.clear();
        }
    }

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
