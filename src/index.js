//Desafio Calculadora de Partidas Rankeadas (iniciante)

let names = [
    { name: "Fulaninho", qntWins: 10, qntDefeat: 1 },
    //{ name: "Ciclano", qntWins: 20, qntDefeat: 1 },
    //{ name: "Beltrano", qntWins: 50, qntDefeat: 1 },
    //{ name: "Fulano", qntWins: 80, qntDefeat: 1 },
    //{ name: "Pet", qntWins: 90, qntDefeat: 1 },
    //{ name: "SlaMais", qntWins: 100, qntDefeat: 1 },
    //{ name: "MiauMiau", qntWins: 102, qntDefeat: 1 },
];

function saldoRank(qntWins, qntDefeat) {
    let saldo = qntWins - qntDefeat
    return saldo
}

for (let i = 0; i < names.length; i++) {
    let nameH = names[i];
    let level = saldoRank(nameH.qntWins, nameH.qntDefeat)
    let rank = "";

    if (level <= 10) {
        rank = "Ferro";
    } else if (level >= 11 && level <= 20) {
        rank = "Bronze";
    } else if (level >= 21 && level <= 50) {
        rank = "Prata";
    } else if (level >= 51 && level <= 80) {
        rank = "Ouro";
    } else if (level >= 81 && level <= 90) {
        rank = "Diamante";
    } else if (level >= 91 && level <= 100) {
        rank = "Lendario";
    } else {
        level >= 101
        rank = 'Imortal';
    }

    console.log("O personagem escolhido se chama: " + nameH.name + ", " +
        " esta no Rank: " + rank +
        " e possui um saldo de vitorias referente a: " + level)

}







