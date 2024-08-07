const Veiculo = require ('./Veiculo')

class Carro extends Veiculo {
    constructor(tempoMedio, combustivelGasto, quilometragemRodada) {
        super('Carro', tempoMedio, combustivelGasto, quilometragemRodada);
    }

    exibirDados() {
        return `
            Tipo: ${this.tipo}<br>
            Tempo Médio de Trânsito: ${this.tempoMedio.toFixed(2)} horas<br>
            Combustível Gasto: ${this.combustivelGasto.toFixed(2)} litros<br>
            Quilometragem Rodada: ${this.quilometragemRodada.toFixed(2)} km<br>
            Tipo de Veículo: Carro
        `;
    }
}
module.exports = Carro