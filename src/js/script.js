class Prato{
    constructor(nome, preco, categoria){ //modelo do objeto
        this.nome = nome //o this aponta e traz a info
        this.preco = preco
        this.categoria = categoria
    }

    formatarPreco(){ //verbo, acao que vai executar
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }

    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual / 100)
    }
} //fim da classe

//instanciando objetos
const cardapio_comida = [ //lista
    new Prato('Pão de Queijo', 7.00, 'Salgados'),
    new Prato('Pão na Chapa', 5.50, 'Salgados'),
    new Prato('Empada', 9.00, 'Salgados'),
    new Prato('Quiche', , ''),
    new Prato('Torrada', , ''),
    new Prato('Croissant', , ''),
    new Prato('Sanduíche Natural', , ''),
    new Prato('Baguete', , ''),
    new Prato('Misto Quente', , ''),
    
]

const cardapio_bebida = [
    new Prato('Chá', 7.00, 'Bebida'),
    new Prato('Água Mineral', 3.00, 'Bebida'),
    new Prato('Cappuccino Tradicional', 8.00, 'Bebida'),
    new Prato('Cappuccino com Desenho', 13.00, 'Bebida')
]

console.log('=== Pratos ===') //mostra na tela
cardapio_comida.forEach(p => { //vai passar por cada item da lista
    console.log(`${p.nome} → ${p.formatarPreco()}`) //mostra os itens da lista na tela
})

console.log('=== Drinks ===')
cardapio_bebida.forEach(b => {
    console.log(`${b.nome} → ${b.formatarPreco()}`)
})

const containerCardapio = document.querySelector('#cardapio')

function criarCardPrato(prato){
    const card = document.createElement('div')
    card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm' //cria o nome da classe

    card.innerHTML = 
    `
    <h3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class='categoria fs-6 d-block mb-3'>${prato.categoria}</span>
    <div class='preco fs-5 fw-bold text-success'>${prato.formatarPreco()}</div>
    `


    card.addEventListener('click', () => {
        alert( //\n é quebra de linha
            `
            🍽️ ${prato.nome} \n
            📓 Categoria: ${prato.categoria}
            💰 Preço: ${prato.formatarPreco()}
            `
        )
    })

    return card
} //fim da função criar Card Prato

function renderizarCardapio(){
    containerCardapio.innerHTML = ''

    cardapio_comida.forEach(prato => {
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)
    })
    cardapio_bebida.forEach(bebida => {
        const card = criarCardPrato(bebida)

        containerCardapio.appendChild(card)
    })
} //fim da função renderizarCardápio

renderizarCardapio()

/* caso queira aplicar desconto:

cardapio_comida[0].aplicarDesconto(20) */
renderizarCardapio()