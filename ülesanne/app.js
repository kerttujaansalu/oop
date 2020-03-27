const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

document.addEventListener('DOMContentLoaded', ylesanneteTabel);

//funktsioon tabeli tekitamiseks, kasutatakse app.js ja KL.js
function ylesanneteTabel(e){


    const kl = new KL();

    kl.naitaYlesannet();
    e.preventDefault();
}

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);

// funktsioon ülesannete listi lisamiseks, app.js, KL.js, LS.js
function lisaYlesanne(e){
    const taskInput = document.getElementById('task').value;

    const ylesanne = new Ylesanne(taskInput);

    const kl = new KL();
    const ls = new LS();

    if(taskInput == '' ){
        alert('Lisa ülesanne!', 'invalid');
    } else {
        kl.lisaYlesanneTabelisse(ylesanne);
        kl.puhastaSisend();
        ls.salvestaYlesanne(ylesanne);  
    }
    e.preventDefault();
}

document.querySelector('.collection').addEventListener('click', eemaldaYlesanne);

// kustutab üksikult ülesanded listist (kollase ristiga) ja local storagest, app.js, KL.js, LS.js
function eemaldaYlesanne(e){
    const kl = new KL();
    const ls = new LS();
    kl.kustutaYlesanneTabelist(e.target);
    console.log(e.target.parentElement.parentElement.innerText);
    ls.kustutaYlesanneLS(e.target.parentElement.parentElement.innerText);
    e.preventDefault();
}

document.getElementById('clear-tasks').addEventListener('click', kustutaYl);

// kustutab kõik ülesanded listist korraga (hall nupp), app.js, KL.js
function kustutaYl(e){

    const kl = new KL();
    kl.kustutaKoikYlesanded();
    e.preventDefault();

}