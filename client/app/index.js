// cria um array com os campos do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

// imprime o array campos no console
console.log(campos);

// obtem o elemento tbody
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    // cancelando a submissão do formulário
    event.preventDefault();

    // cria uma tr sem dados
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        // cria uma td sem dados
        var td = document.createElement('td');

        // atribui o valor do campo à td
        td.textContent = campo.value;

        // adiciona a td na tr
        tr.appendChild(td);
    });

    // nova td que armazenará o volume de negociação
    var tdVolulme = document.createElement('td');

    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolulme.textContent = campos[1].value * campos[2].value;

    // adicionando a td que faltava à tr
    tr.appendChild(tdVolulme);

    // adicionando a tr no tbody
    tbody.appendChild(tr);

    // limpa o campo da data
    campos[0].value = '';
    // limpa o campo da quantidade
    campos[1].value = 1;
    // limpa o campo de valor
    campos[2].value = 0;
    // foca no campo da data
    campos[0].focus(); 
});