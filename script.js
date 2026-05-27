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

let score = 0;

function correctGame(){

document.getElementById("game-result").innerHTML =
"✅ Excelente! Você protegeu o meio ambiente.";

score += 10;

document.getElementById("score").innerHTML = score;

}

function wrongGame(){

document.getElementById("game-result").innerHTML =
"❌ Essa ação prejudica a natureza.";

if(score > 0){
score -= 5;
}

document.getElementById("score").innerHTML = score;

}
async function getWeather(){

const apiKey = "SUA_API_KEY";

const city = "Curitiba";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

try{

const response = await fetch(url);

const data = await response.json();

document.getElementById("temp").innerHTML =
Math.round(data.main.temp) + " °C";

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";

document.getElementById("weather").innerHTML =
data.weather[0].description;

document.getElementById("wind").innerHTML =
Math.round(data.wind.speed * 3.6) + " km/h";

}catch(error){

console.log("Erro ao carregar clima");

}

}

getWeather();
