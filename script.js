// =====================================================
// AGRINHO 2026
// SCRIPT PRINCIPAL - PARTE 1
// =====================================================

// ==========================================
// CONFIGURAÇÕES
// ==========================================

// Coloque sua chave do OpenWeather aqui
const OPENWEATHER_API_KEY = "SUA_CHAVE_OPENWEATHER";

// Coloque sua cidade
const CIDADE = "Joinville";

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if(loader){
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            },1000);
        }

    },1500);

});

// ==========================================
// SCROLL SUAVE
// ==========================================

function scrollToSection(id){

    const elemento =
    document.getElementById(id);

    if(elemento){

        elemento.scrollIntoView({
            behavior:"smooth"
        });

    }

}

// ==========================================
// DARK MODE
// ==========================================

const darkBtn =
document.getElementById("darkModeBtn");

if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark");

}

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

});

}

// ==========================================
// DATA E HORA
// ==========================================

function atualizarRelogio(){

const horaDiv =
document.getElementById("hora");

const dataDiv =
document.getElementById("data");

const estacaoDiv =
document.getElementById("estacao");

const agora = new Date();

if(horaDiv){

horaDiv.innerHTML =
"🕒 Hora: " +
agora.toLocaleTimeString("pt-BR");

}

if(dataDiv){

dataDiv.innerHTML =
"📅 Data: " +
agora.toLocaleDateString("pt-BR");

}

if(estacaoDiv){

const mes = agora.getMonth()+1;

let estacao = "";

if(mes>=12 || mes<=2){

estacao = "☀️ Verão";

}
else if(mes>=3 && mes<=5){

estacao = "🍂 Outono";

}
else if(mes>=6 && mes<=8){

estacao = "❄️ Inverno";

}
else{

estacao = "🌸 Primavera";

}

estacaoDiv.innerHTML =
"🌎 Estação: " + estacao;

}

}

setInterval(
atualizarRelogio,
1000
);

atualizarRelogio();

// ==========================================
// CLIMA OPENWEATHER
// ==========================================

async function carregarClima(){

if(
OPENWEATHER_API_KEY ===
"SUA_CHAVE_OPENWEATHER"
){

document.getElementById("cidade").innerHTML =
"⚠️ Adicione sua chave OpenWeather";

return;

}

try{

const url =

`https://api.openweathermap.org/data/2.5/weather?q=${CIDADE}&units=metric&lang=pt_br&appid=${OPENWEATHER_API_KEY}`;

const resposta =
await fetch(url);

const dados =
await resposta.json();

document.getElementById("cidade").innerHTML =
"📍 " + dados.name;

document.getElementById("temperatura").innerHTML =
"🌡 Temperatura: " +
Math.round(dados.main.temp) +
"°C";

document.getElementById("umidade").innerHTML =
"💧 Umidade: " +
dados.main.humidity +
"%";

document.getElementById("vento").innerHTML =
"🌬 Vento: " +
dados.wind.speed +
" km/h";

document.getElementById("descricao").innerHTML =
"☁️ " +
dados.weather[0].description;

}
catch(error){

console.log(error);

}

}

carregarClima();

// ==========================================
// DASHBOARD CHART.JS
// ==========================================

window.addEventListener("load",()=>{

const canvas =
document.getElementById(
"graficoAgro"
);

if(!canvas) return;

new Chart(canvas,{

type:"bar",

data:{

labels:[

"Água",
"Energia Solar",
"Reflorestamento",
"Produção Sustentável",
"Reciclagem"

],

datasets:[{

label:"Indicadores Sustentáveis",

data:[

90,
80,
70,
95,
85

]

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:true
}

}

}

});

});

// ==========================================
// MAPA LEAFLET
// ==========================================

window.addEventListener("load",()=>{

const mapaDiv =
document.getElementById("map");

if(!mapaDiv) return;

const map = L.map("map")
.setView(
[-26.3044,-48.8487],
10
);

L.tileLayer(
"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19
}
).addTo(map);

L.marker(
[-26.3044,-48.8487]
)

.addTo(map)

.bindPopup(
"🌱 Agricultura Sustentável"
)

.openPopup();

L.marker(
[-26.2500,-48.9000]
)

.addTo(map)

.bindPopup(
"🌳 Área de Preservação"
);

});

// ==========================================
// CURIOSIDADES
// ==========================================

const curiosidades = [

"🌱 Um hectare de floresta pode absorver toneladas de CO₂ por ano.",

"🚁 Drones ajudam a economizar água e defensivos agrícolas.",

"☀️ A energia solar já é utilizada em milhares de propriedades rurais.",

"🐝 Cerca de 75% das culturas agrícolas dependem de polinizadores.",

"💧 Sensores inteligentes reduzem desperdícios de irrigação.",

"🌳 Sistemas agroflorestais unem produção e preservação ambiental.",

"🤖 Inteligência Artificial já prevê pragas antes que elas apareçam.",

"🚜 Tratores autônomos já operam em várias regiões do mundo."

];

const botaoCuriosidade =
document.getElementById(
"gerarCuriosidade"
);

if(botaoCuriosidade){

botaoCuriosidade.addEventListener(
"click",
()=>{

const caixa =
document.getElementById(
"curiosidadeBox"
);

const indice =
Math.floor(
Math.random() *
curiosidades.length
);

caixa.innerHTML =
curiosidades[indice];

}
);

}

// ==========================================
// ANIMAÇÃO DOS CARDS
// ==========================================

window.addEventListener(
"scroll",
()=>{

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const topo =
card.getBoundingClientRect().top;

if(
topo <
window.innerHeight - 100
){

card.style.opacity = "1";

card.style.transform =
"translateY(0)";

}

});

}
);

// ==========================================
// PREPARAÇÃO DOS CARDS
// ==========================================

document.querySelectorAll(".card")
.forEach(card=>{

card.style.opacity = "0";

card.style.transform =
"translateY(50px)";

card.style.transition =
"all .8s ease";

});

// =====================================================
// FIM DA PARTE 1
// AGUARDE A PARTE 2
// =====================================================
// =====================================================
// AGRINHO 2026
// SCRIPT PRINCIPAL - PARTE 2
// =====================================================

// ==========================================
// QUIZ AGRINHO
// ==========================================

const perguntas = [

{
pergunta:"Qual tecnologia monitora lavouras pelo ar?",
respostas:[
"Drone",
"Arado",
"Carro",
"Enxada"
],
correta:0
},

{
pergunta:"O que significa sustentabilidade?",
respostas:[
"Produzir sem limites",
"Equilíbrio entre produção e preservação",
"Desmatar",
"Gastar mais água"
],
correta:1
},

{
pergunta:"Qual energia é renovável?",
respostas:[
"Diesel",
"Petróleo",
"Solar",
"Carvão"
],
correta:2
},

{
pergunta:"Qual tecnologia usa sensores no campo?",
respostas:[
"IoT",
"DVD",
"CD",
"Pendrive"
],
correta:0
},

{
pergunta:"A IA ajuda o agro a:",
respostas:[
"Prever pragas",
"Desmatar",
"Poluir",
"Destruir rios"
],
correta:0
},

{
pergunta:"O agro produz:",
respostas:[
"Alimentos",
"Apenas máquinas",
"Computadores",
"Prédios"
],
correta:0
},

{
pergunta:"A preservação das nascentes ajuda:",
respostas:[
"Os rios",
"Ninguém",
"As máquinas",
"O trânsito"
],
correta:0
},

{
pergunta:"Qual prática protege o solo?",
respostas:[
"Plantio direto",
"Queimada",
"Desmatamento",
"Erosão"
],
correta:0
}

];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta(){

const pergunta =
document.getElementById("pergunta");

const respostas =
document.getElementById("respostas");

if(!pergunta || !respostas) return;

pergunta.innerHTML =
perguntas[perguntaAtual].pergunta;

respostas.innerHTML = "";

perguntas[perguntaAtual]
.respostas
.forEach((resp,index)=>{

const btn =
document.createElement("button");

btn.innerHTML = resp;

btn.onclick = () => {

if(index === perguntas[perguntaAtual].correta){
pontuacao++;
}

perguntaAtual++;

if(perguntaAtual < perguntas.length){

carregarPergunta();

}else{

mostrarResultado();

}

};

respostas.appendChild(btn);

});

}

function mostrarResultado(){

let medalha = "🥉 Bronze";

if(pontuacao >= 6)
medalha = "🥈 Prata";

if(pontuacao >= 8)
medalha = "🥇 Ouro";

document.getElementById(
"quiz-container"
).innerHTML =

`
<h2>Resultado</h2>

<h3>${pontuacao}/${perguntas.length}</h3>

<h2>${medalha}</h2>

<p>
Parabéns por concluir o Quiz Agrinho!
</p>
`;

salvarRanking();

}

window.addEventListener("load",()=>{

if(document.getElementById("pergunta")){

carregarPergunta();

}

});

// ==========================================
// RANKING LOCAL
// ==========================================

function salvarRanking(){

let ranking =

JSON.parse(
localStorage.getItem("rankingAgrinho")
) || [];

ranking.push({

data:new Date().toLocaleDateString(),

pontos:pontuacao

});

localStorage.setItem(
"rankingAgrinho",
JSON.stringify(ranking)
);

}

// ==========================================
// JOGO DE PLANTAR ÁRVORES
// ==========================================

window.addEventListener("load",()=>{

const canvas =
document.getElementById(
"gameCanvas"
);

if(!canvas) return;

const ctx =
canvas.getContext("2d");

let arvores = 0;

function desenharContador(){

ctx.clearRect(
0,
0,
200,
50
);

ctx.fillStyle="black";

ctx.font="20px Arial";

ctx.fillText(
"🌳 Árvores: " +
arvores,
20,
30
);

}

desenharContador();

canvas.addEventListener(
"click",
(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

ctx.fillStyle =
"green";

ctx.beginPath();

ctx.arc(
x,
y,
18,
0,
Math.PI*2
);

ctx.fill();

ctx.fillStyle =
"brown";

ctx.fillRect(
x-4,
y+15,
8,
20
);

arvores++;

desenharContador();

}
);

});

// ==========================================
// CHATBOT GEMINI
// ==========================================

// Troque pela sua chave
const GEMINI_API_KEY =
"SUA_CHAVE_GEMINI";

// ----------------------------------

async function enviarPergunta(){

const input =
document.getElementById(
"userInput"
);

const chat =
document.getElementById(
"chat-box"
);

const pergunta =
input.value.trim();

if(!pergunta) return;

chat.innerHTML +=

`
<p>
<strong>Você:</strong>
${pergunta}
</p>
`;

input.value = "";

if(
GEMINI_API_KEY ===
"SUA_CHAVE_GEMINI"
){

chat.innerHTML +=

`
<p>
<strong>AGRINHO IA:</strong>
Configure sua chave Gemini.
</p>
<hr>
`;

return;

}

try{

const resposta =
await fetch(

`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[

{
parts:[

{
text:

`
Você é AGRINHO IA.

Tema:
Agro Forte, Futuro Sustentável.

Responda de forma educativa.

Pergunta:

${pergunta}
`

}

]

}

]

})

}

);

const dados =
await resposta.json();

const texto =

dados.candidates?.[0]
?.content?.parts?.[0]
?.text ||

"Não foi possível responder.";

chat.innerHTML +=

`
<p>
<strong>AGRINHO IA:</strong>
${texto}
</p>
<hr>
`;

chat.scrollTop =
chat.scrollHeight;

}
catch(erro){

console.log(erro);

chat.innerHTML +=

`
<p>
Erro ao acessar Gemini.
</p>
`;

}

}

// ==========================================
// ENTER NO CHAT
// ==========================================

window.addEventListener("load",()=>{

const campo =
document.getElementById(
"userInput"
);

if(campo){

campo.addEventListener(
"keypress",
(e)=>{

if(e.key === "Enter"){

enviarPergunta();

}

}
);

}

});

// ==========================================
// CERTIFICADO
// ==========================================

function gerarCertificado(){

const nome =
prompt(
"Digite seu nome:"
);

if(!nome) return;

const texto =

`
CERTIFICADO

${nome}

participou do projeto

AGRINHO 2026

e demonstrou conhecimento
sobre sustentabilidade,
tecnologia e meio ambiente.

Pontuação:

${pontuacao}
`;

alert(texto);

}

// ==========================================
// MENSAGEM INICIAL DA IA
// ==========================================

window.addEventListener("load",()=>{

const chat =
document.getElementById(
"chat-box"
);

if(chat){

chat.innerHTML =

`
<p>

🤖 Olá!

Sou a AGRINHO IA.

Pergunte sobre:

🌱 Sustentabilidade

🚜 Agro

🤖 Tecnologia

💧 Água

🌳 Meio Ambiente

</p>

<hr>
`;

}

});

// ==========================================
// FINALIZAÇÃO
// ==========================================

console.log(

"AGRINHO 2026 carregado com sucesso."

);

// =====================================================
// FIM DO SCRIPT
// =====================================================
