class LS {

    //näitab et ülesanne on local storages olemas, KL.js, LS.js
    loeYlesannet(){
        let ylesanded;
        if(localStorage.getItem('ylesanded') === null){
        ylesanded = [];
        } else { 
        ylesanded = JSON.parse(localStorage.getItem('ylesanded'));
        }
        return ylesanded;
    }

    // salvestab ülesande local storagesse, KL.js, LS.js
    salvestaYlesanne(r){
        const ylesanded = this.loeYlesannet();
        console.log(r);
        ylesanded.push(r);
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
    }

    // kustutab ülesande local storagest, KL.js, LS.js 
    kustutaYlesanneLS(e){

        const ylesanded = this.loeYlesannet();
        ylesanded.forEach(function(ylesanne, index){
            if(ylesanne.ylesanne === e){
                ylesanded.splice(index, 1);
            }
        });
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        
    }

} 