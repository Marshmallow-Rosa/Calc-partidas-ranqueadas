// Função para calcular o nível de acordo com a quantidade de vitórias
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 90) { 
        nivel = "Ouro";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
let vitorias = 75;
let derrotas = 25;
let resultado = calcularNivel(vitorias, derrotas);
console.log (`O herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
