// Função para calcular o saldo de Rankeadas e determinar o nível do jogador
function calcularSaldoRankeadas(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    var nivel;

    // Para tomando uma decisãe no nível do jogador com base no equilíbrio das classificações

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo: saldo, nivel: nivel };
}

// Função principal para exibir a mensagem
function exibirMensagem(vitorias, derrotas) {
    var resultado = calcularSaldoRankeadas(vitorias, derrotas);
    console.log(`O Herói tem um saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
}

// Altere os valores aqui para diferentes quantidades de vitórias e derrotas:
exibirMensagem(85, 20); 
