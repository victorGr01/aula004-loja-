
let carrinho = [];

// Função para atualizar o texto do botão de esvaziar
function atualizarBotaoCarrinho() {
    const botao = document.getElementById('esvaziar');
    botao.textContent = `Esvaziar Carrinho (${carrinho.length})`;
}

// Função para mostrar o carrinho
function mostrarCarrinho() {
let itens = carrinho.map(item => `${item.produto} - R$${item.preco.toFixed(2)}`).join("\n");

if (itens === "") {
alert("Sem itens no carrinho");
} else if (confirm("Deseja continuar?")) {
alert("Você quer comprar os itens:\n" + itens);
window.location.href = "loading";
} else {
alert("Você clicou em Cancelar!");
}
}


// Função para comprar um produto
function comprar(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarBotaoCarrinho();
    atualizarTotal();  // Atualiza o total imediatamente
    alert(produto + " adicionado ao carrinho por R$" + preco.toFixed(2));
}

// Função para esvaziar o carrinho
function esvaziarCarrinho() {
    if (carrinho.length === 0) {
        alert("O carrinho já está vazio.");
    } else {
        carrinho = [];
        atualizarBotaoCarrinho();
        atualizarTotal();  // Atualiza o total quando o carrinho é esvaziado
        alert("Carrinho esvaziado com sucesso!");
    }
}

// Função para mostrar o total do carrinho
function mostrarTotal() {
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    const totalButton = document.getElementById('totalButton');
    totalButton.textContent = `Ver Total (R$${total.toFixed(2)})`;
    alert("Total do carrinho: R$" + total.toFixed(2));
}

// Função para atualizar o total e o texto do botão
function atualizarTotal() {
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    const totalButton = document.getElementById('totalButton');
    totalButton.textContent = `Ver Total (R$${total.toFixed(2)})`;
}

// Função para pesquisar produtos
function pesquisarProdutos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const produtos = document.querySelectorAll('.product');
    
    produtos.forEach(produto => {
        const nome = produto.getAttribute('data-name').toLowerCase();
        if (nome.includes(searchInput)) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
}