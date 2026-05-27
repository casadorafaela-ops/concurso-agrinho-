window.addEventListener("load", () => {

document.getElementById("loader").style.display = "none";

});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const c = +counter.innerText;

const increment = target / 100;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter, 30);

}else{

counter.innerText = target + "%";

}

};

updateCounter();

});

function correct(){

document.getElementById("result").innerHTML =
"✅ Correto! A irrigação inteligente economiza água.";

}

function wrong(){

document.getElementById("result").innerHTML =
"❌ Resposta incorreta. Tente novamente.";

}
