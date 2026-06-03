let score = 0;

function correta(){

score += 10;

document.getElementById("score").innerHTML = score;

document.getElementById("resultado").innerHTML =
"✅ Resposta correta!";
}

function errada(){

document.getElementById("resultado").innerHTML =
"❌ Resposta incorreta!";
}

async function getWeather(){

const apiKey = "SUA_API";

const city = "Curitiba";

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
);

const data = await response.json();

document.getElementById("temp").innerHTML =
Math.round(data.main.temp) + "°C";

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";

document.getElementById("weather").innerHTML =
data.weather[0].description;

}catch(error){

console.log(error);

}

}

getWeather();
