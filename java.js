var itens = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
    var nomeProduto = document.querySelector("input[name=nome-produto]");
    var precoProduto = document.querySelector("input[name=valor-produto]");

    if (isNaN(precoProduto.value) || precoProduto.value.trim() === "") {
        alert("Por favor, insira um valor numérico válido para o preço do produto.");
        return;
    }

    itens.push(
        {
            nome: nomeProduto.value,
            preco: parseFloat(precoProduto.value).toFixed(2)
        }
    );

    let listaProduto = document.querySelector(`.lista-produtos`);
    let soma = 0;
    listaProduto.innerHTML = "";
    itens.map(function(val) {
        soma += parseFloat(val.preco);
        listaProduto.innerHTML += `
        <div class="lista-produto-single">
            <h3>` + val.nome + `</h3>
            <h3 class="preco-produto"><span>R$` + val.preco + `</span></h3>
        </div>
        `;
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector(".soma-produto h2");
    elementoSoma.innerHTML = `R$` + soma;
});

document.querySelector("button[name=limpar]").addEventListener("click", () => {
    itens = [];
    document.querySelector(`.lista-produtos`).innerHTML = "";
    document.querySelector(".soma-produto h2").innerHTML = " R$0,00";
});
