const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

document.addEventListener('DOMContentLoaded', ylesanneteTabel);
function ylesanneteTabel(e){
    
    const kl = new KL();
    kl.naitaYlesannet();
    e.preventDefault();
}

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);
   
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
function eemaldaYlesanne(e){
    const kl = new KL();
    const ls = new LS();
    kl.kustutaYlesanneTabelist(e.target);
    console.log(e.target.parentElement.parentElement.innerText);
    ls.kustutaYlesanneLS(e.target.parentElement.parentElement.innerText);
    e.preventDefault();
}

document.getElementById('clear-tasks').addEventListener('click', kustutaYl);
function kustutaYl(e){

    const kl = new KL();
    kl.kustutaKoikYlesanded();
    e.preventDefault();

}