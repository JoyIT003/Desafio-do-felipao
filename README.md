# ⚔️ Meu Primeiro Projeto Épico: O Classificador de Heróis! 🛡️

Seja muito bem-vindo(a) ao meu repositório!

Este projeto representa um marco importante na minha jornada de aprendizado em programação. Ele é o resultado do primeiro desafio prático do bootcamp da **DIO (Digital Innovation One)**, onde coloquei a mão na massa para solidificar os fundamentos da lógica de programação com **JavaScript**.

## 🎯 O Objetivo do Desafio

A missão era clara: criar um sistema capaz de ler o nome e a quantidade de experiência (XP) de um herói de um jogo fictício e, com base nesse valor, definir qual a sua patente ou nível atual.

As regras de classificação vão desde o nível "Ferro" (para iniciantes com menos de 1.000 XP) até o lendário nível "Radiante" (para os mestres com mais de 10.000 XP).

## 💡 Como eu resolvi (A Lógica por trás do Código)

Para resolver esse quebra-cabeça, eu precisava usar quatro pilares da programação: Variáveis, Operadores, Laços de Repetição e Estruturas de Decisão.

Em vez de escrever uma montanha de `if` e `else if` repetitivos (o que deixaria o código gigante e difícil de manter), eu optei por uma abordagem mais limpa e escalável:

1.  **Organização dos Dados:** Criei uma "tabela de níveis" usando uma matriz de objetos em JavaScript. Cada linha dessa tabela contém o limite de XP e o nome do nível correspondente.
2.  **O "Motor" de Busca:** Utilizei um laço de repetição (`for`) para percorrer essa tabela automaticamente.
3.  **A Decisão:** Dentro do laço, o código verifica: "O XP do meu herói é menor ou igual ao limite desta linha?". Se for, bingo! Achamos o nível, gravamos a informação e paramos a busca (`break`).

Essa estrutura torna muito fácil adicionar novos níveis no futuro sem precisar reescrever a lógica principal!

## 🚀 Tecnologias Utilizadas

* **JavaScript:** A linguagem que deu vida à lógica.
* **Node.js:** Ambiente de execução para rodar o código JS fora do navegador.
* **Git & GitHub:** Para versionamento
