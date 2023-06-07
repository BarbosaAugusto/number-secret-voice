function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
	    <div>O número secreto é menor<i class="fa-solid fa-arrow-down"></i></div>
	    `
    } else {
        elementoChute.innerHTML += `
	    <div>O número secreto é maior<i class="fa-solid fa-arrow-up"></i></div>
	    `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
