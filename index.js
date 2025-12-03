// 1. Variáveis
let nomeHeroi = "Manoel Gomes";
let xp = 8500;
let nivel = "";

// 2. Tabela de Níveis (Matriz)
const tabelaNiveis = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
];

// 3. Laço de Repetição para verificar o nível
for (let i = 0; i < tabelaNiveis.length; i++) {
    if (xp <= tabelaNiveis[i].limite) {
        nivel = tabelaNiveis[i].nome;
        break; 
    }
}

// Se passou de 10.000 (o laço terminou e não encontrou nada)
if (nivel === "") {
    nivel = "Radiante";
}

// 4. Saída (Atualizada)
console.log(`O Nível do Herói ${nomeHeroi} é ${nivel}`);