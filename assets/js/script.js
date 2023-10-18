const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');

function mostrarData(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

//EXTRA
// document.addEventListener('click', function(e) {
//     const el = e.target;
//     if(el.classList.contains('zerar')) {
//         console.log('Voce clicou em zerar')
//     }
// });
let segundos = 0;
let timer;
function iniciaRelogio() {
 timer = setInterval(function () {
    segundos++;
    relogio.classList.remove('pausado')
    relogio.innerHTML = mostrarData(segundos);
}, 1000);
}

function pausarTime() {
    setTimeout(function () {
    clearInterval(timer);
    relogio.classList.add('pausado')
},);
}

function zerarTime() {
    setTimeout(function () {
    clearInterval(timer)
    relogio.classList.remove('pausado')
    segundos = 0;
    relogio.innerHTML = `00:00:00`;
},);
}

iniciar.addEventListener('click', function(e){
    iniciaRelogio();
});
pausar.addEventListener('click', function(e){
    pausarTime();
});
zerar.addEventListener('click', function(e){
    zerarTime()
});
