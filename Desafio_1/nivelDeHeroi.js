// # 1️⃣ Desafio Classificador de nível de Herói

// O Que deve ser utilizado

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP)
//de um herói, depois utilize uma estrutura de decisão para apresentar alguma
// das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante


// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**


// Definindo o nome e a quantidade de experiência (XP) do herói


let nomeHeroi = "Super Herói";
let xpHeroi = 58500; // Cambia o valor diferentes níveis

// estrutura de decisão com switch
let nivelHeroi;

switch (true) {
    case xpHeroi < 1000:
        nivelHeroi = "Ferro";
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";
}

// nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

