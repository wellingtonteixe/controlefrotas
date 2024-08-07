const Carro = require('./Carro');
const Caminhao = require('./Caminhao');
const Onibus = require('./Onibus');

// Criando instâncias de veículos
const meuCarro = new Carro(2, 50, 300, 'Sedan');
const meucarro2 = new Carro(3, 40, 200, 'SUV');
const meuCaminhao = new Caminhao(8, 150, 1200, 20);
const meuOnibus = new Onibus(5, 100, 600, 50);

// Marcando alguns veículos como em manutenção
meuCarro.marcarManutencao();
meuOnibus.marcarManutencao();

// Verificando e exibindo o estado de manutenção individualmente
console.log(meuCarro.podeSerLiberado() ? 'Carro pode ser liberado' : 'Carro está em manutenção');
console.log(meuCaminhao.podeSerLiberado() ? 'Caminhão pode ser liberado' : 'Caminhão está em manutenção');
console.log(meuOnibus.podeSerLiberado() ? 'Ônibus pode ser liberado' : 'Ônibus está em manutenção');
console.log(meucarro2.podeSerLiberado() ? 'carro2 carro pode ser liberado' : 'Outro carro está em manutenção');

// Exibindo os dados dos veículos
console.log(meuCarro.exibirDados());
console.log(meuCaminhao.exibirDados());
console.log(meuOnibus.exibirDados());