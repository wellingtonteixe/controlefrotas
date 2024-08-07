const Veiculo = require ('./Veiculo')

class Onibus extends Veiculo {
    constructor(tempoMedio, combustivelGasto, quilometragemRodada) {
        super('Carro', tempoMedio, combustivelGasto, quilometragemRodada);
    }

    exibirDados() {
        let tipoveiculo = 'Busao'
        return `
            Tipo: ${this.tipo}<br>
            Tempo Médio de Trânsito: ${this.tempoMedio.toFixed(2)} horas<br>
            Combustível Gasto: ${this.combustivelGasto.toFixed(2)} litros<br>
            Quilometragem Rodada: ${this.quilometragemRodada.toFixed(2)} km<br>
            Tipo de Veículo: Onibus
        `;
    }
}

module.exports = Onibus