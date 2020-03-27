class LS {
    loeYlesannet(){
        let ylesanded;
        if(localStorage.getItem('ylesanded') === null){
        ylesanded = [];
        } else { 
        ylesanded = JSON.parse(localStorage.getItem('ylesanded'));
        }
        return ylesanded;
    }
    salvestaYlesanne(r){
        const ylesanded = this.loeYlesannet();
        console.log(r);
        ylesanded.push(r);
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
    }
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