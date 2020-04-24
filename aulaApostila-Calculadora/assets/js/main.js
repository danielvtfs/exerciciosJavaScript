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

        // Salva a entrada do usuário para que possamos recuperá-la na próxima vez que
        // ele visitar
        save(montante.value, jurosAnual.value, anos.value, cep.value);

        // Anúncio: localiza e exibe financeiras locais, mas ignora erros de rede
        try {// Captura quaisquer erros que ocorram dentro destas chaves
            getCredoras(montante.value, jurosAnual.value, anos.value, cep.value);
        } catch (err) {
            /* E ignora esses erros */
        }

        // Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital
        chart(principal, juros, porMes, pagamentos);
    } else {
        // O resultado foi Not-a-Number ou infinito, o que significa que a entrada
        // estava incompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
        pagamentoMensal.innerHTML = ''; // Apaga o conteúdo desses elementos
        pagamentoTotal.innerHTML = '';
        jurosTotal.innerHTML = '';
        chart(); // Sem argumentos, apaga o gráfico
    }
}

// Salva a entrada do usuário como propriedades do objeto localStorage. Essas
// propriedades ainda existirão quando o usuário visitar no futuro
// Esse recurso de armazenamento não vai funcionar em alguns navegadores (o Firefox, por
// exemplo), se você executar o exemplo a partir de um arquivo local:// URL. Contudo,
// funciona com HTTP.
function save(montante, jurosAnual, anos, cep) {
    if (window.localStorage) { // Só faz isso se o navegador suportar
        localStorage.valorEmprestimo = montante;
        localStorage.jurosAnualEmprestimo = jurosAnual;
        localStorage.anosEmprestimo = anos;
        localStorage.cepEmprestimo = cep;

    }
}

// Tenta restaurar os campos de entrada automaticamente quando o documento é carregado
// pela primeira vez.
window.onload = function () {
    // Se o navegador suporta localStorage e temos alguns dados armazenados
    if (window.localStorage && this.localStorage.valorEmprestimo) {
        document.getElementById('montante').value = localStorage.valorEmprestimo;
        document.getElementById('juros-anual').value = localStorage.jurosAnualEmprestimo;
        document.getElementById('anos').value = localStorage.anosEmprestimo;
        document.getElementById('cep').value = localStorage.cepEmprestimo;
    }
}

// Passa a entrada do usuário para um script no lado do servidor que (teoricamente) pode
// retornar uma lista de links para financeiras locais interessadas em fazer empréstimos. Este
// exemplo não contém uma implementação real desse serviço de busca de financeiras. Mas
// se o serviço existisse, essa função funcionaria com ele.
function getCredoras(montante, jurosAnual, anos, cep) {
    // Se o navegador não suporta o objeto XMLHttpRequest, não faz nada
    if (!window.XMLHttpRequest) return;

    // Localiza o elemento para exibir a lista de financeiras
    let ad = document.getElementById('credores')
    if (!ad) return; // Encerra se não há ponto de saída

    // Codifica a entrada do usuário como parâmetros de consulta em uma URL
    let url = 'getCredoras.php' + "?amt=" + // Url do serviço mais
        encodeURIComponent(montante) + // dados do usuário na string de consulta
        "&apr=" + encodeURIComponent(jurosAnual) +
        "&yrs=" + encodeURIComponent(anos) +
        "&zip=" + encodeURIComponent(cep);

    // Busca o conteúdo desse URL usando o objeto XMLHttpRequest
    let req = new XMLHttpRequest(); // Inicia um novo pedido
    req.open('GET', url) // Um pedido GET da HTTP para o url
    req.send(null)  // Envia o pedido sem corpo

    // Antes de retornar, registra uma função de rotina de tratamento de evento que será
    // chamada em um momento posterior, quando a resposta do servidor de HTTP chegar.
    // Esse tipo de programação assíncrona é muito comum em JavaScript do lado do
    // cliente.
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            // Se chegamos até aqui, obtivemos uma resposta HTTP válida e completa
            let response = req.responseText; // Resposta HTTP como string
            let credores = JSON.parse(response); // Analisa em um array JS

            // Converte o array de objetos credores em uma string HTML
            let list = '';
            for (let i = 0; i < credores.length; i++) {
                list +=  "<li><a href='" + credores[i].url + "'>" +
                credores[i].name + "</a>";
            }

            // Exibe o código HTML no elemento acima.
            ad.innerHTML = "<ul>" + list + "</ul>" ;
        }
    }
}