// Carne - 400 gr por pessoa  + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa  + de 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa  + de 6 horas 1500 ml
// Crianças valem por 0,5

// Passo 1
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

// Passo 2
let resultado = document.getElementById("resultado");

// Passo 3
function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne</p>
    <p>${Math.ceil(qtdTotalCerveja / 350)} Latas de cerveja</p>
    <p>${Math.ceil(qtdTotalBebida / 2000)} Pet(s) de 2 litros de bebida</p>`
}

// Passo 4 - Criar as funções baseada na duração do churrasco que vai ser utilizada na função principal calcular() do passo 3
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}