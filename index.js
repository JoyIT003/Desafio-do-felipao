// 1. Definição de Variáveis
let nomeHeroi = "Poison";
let xp = 10500;
let nivel = "";

// 2. Estrutura de Decisão (If/Else If)
// Obs: Como usamos if/else if, não precisamos verificar o limite "inferior" 
// de cada faixa, pois a condição anterior já o excluiu.

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    // Se for maior ou igual a 10001
    nivel = "Radiante";
}

// 3. Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
