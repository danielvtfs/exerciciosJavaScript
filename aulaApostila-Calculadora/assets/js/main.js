"use strict"; // Usa o modo restrito da ECMAScript 5 nos navegadores que o suportam
/*
 * Este script define a função calculate() chamada pelas rotinas de tratamento de evento
 * no código HTML acima. A função lê valores de elementos <input>, calcula
 * as informações de pagamento de empréstimo, exibe o resultado em elementos <span>.
 * Também salva os dados do usuário, exibe links para financeiras e desenha um gráfico.
 */

function calculate() {
    // Pesquisa os elementos de entrada e saída no documento
    let montante = document.getElementById('montante');
    let jurosAnual = document.getElementById('juros-anual');
    let anos = document.getElementById('anos');
    let cep = document.getElementById('cep');
    let pagamentoMensal = document.getElementById('pagamento-mensal');
    let pagamentoTotal = document.getElementById('pagamento-total');
    let jurosTotal = document.getElementById('juros-totais');

    // Obtém a entrada do usuário através dos elementos de entrada. Presume que tudo isso
    // é válido.
    // Converte os juros de porcentagem para decimais e converte de taxa
    // anual para taxa mensal. Converte o período de pagamento em anos
    // para o número de pagamentos mensais.
    let principal = parseFloat(montante.value);
    let juros = parseFloat(jurosAnual.value) / 100 / 12;
    let pagamentos = parseFloat(anos.value) * 12;

    // Agora calcula o valor do pagamento mensal.
    let x = Math.pow(1 + juros, pagamentos) // Math.pow() calcula potências
    let porMes = (principal * x * juros) / (x - 1);

    // Se o resultado é um número finito, a entrada do usuário estava correta e
    // temos resultados significativos para exibir

    if (isFinite(porMes)) {
        // Preenche os campos de saída, arredondando para 2 casas decimais
        pagamentoMensal.innerHTML = porMes.toFixed(2);
        pagamentoTotal.innerHTML = (porMes * pagamentos).toFixed(2);
        jurosTotal.innerHTML = ((porMes * pagamentos) - principal).toFixed(2);

    } else {
        
    }
}
