class Veiculo {
    constructor(tipo, tempoMedio, combustivelGasto, quilometragemRodada) {
        this.tipo = tipo;
        this.tempoMedio = tempoMedio;
        this.combustivelGasto = combustivelGasto;
        this.quilometragemRodada = quilometragemRodada;
        this.emManutencao = false; // Adicionando a propriedade de manutenção
    }

    marcarManutencao() {
        this.emManutencao = true;
    }

    liberarManutencao() {
        this.emManutencao = false;
    }

    podeSerLiberado() {
        return !this.emManutencao;
    }

    exibirDados() {
        return `
            Tipo: ${this.tipo}<br>
            Tempo Médio: ${this.tempoMedio} horas<br>
            Combustível Gasto: ${this.combustivelGasto} litros<br>
            Quilometragem Rodada: ${this.quilometragemRodada} km<br>
            Em Manutenção: ${this.emManutencao ? 'Sim' : 'Não'}
        `;
    }
}

module.exports = Veiculo;
