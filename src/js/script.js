class Alimento{
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
    new Alimento('Pão de Queijo', 7.00, 'Salgados'),
    new Alimento('Pão na Chapa', 5.00, 'Salgados'),
    new Alimento('Empada', 9.00, 'Salgados'),
    new Alimento('Quiche', 10.00, 'Salgados'),
    new Alimento('Torrada', 5.00, 'Salgados'),
    new Alimento('Croissant', 8.00, 'Salgados'),
    new Alimento('Sanduíche Natural', 8.00, 'Salgados'),
    new Alimento('Baguete', 10.00, 'Salgados'),
    new Alimento('Misto Quente', 7.00, 'Salgados'),
    new Alimento('Fatia de Bolo', 12.00, 'Doces'),
    new Alimento('Brownie', 8.00, 'Doces'),
    new Alimento('Cookies', 14.00, 'Doces'),
    new Alimento('Cheesecake', 20.00, 'Doces'),
    new Alimento('Torta', 28.00, 'Doces'),
    new Alimento('Palha Italiana', 13.00, 'Doces'),
    new Alimento('Brigadeiro Grande', 8.00, 'Doces')
]

const cardapio_bebida = [

    new Alimento('Cappuccino Tradicional', 8.00, 'Bebida'),
    new Alimento('Cappuccino com Desenho', 13.00, 'Bebida'),
    new Alimento('Chá', 7.00, 'Bebida'),
    new Alimento('Água Mineral', 3.00, 'Bebida'),
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

function criarCardAlimento(prato){
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
        const card = criarCardAlimento(prato)

        containerCardapio.appendChild(card)
    })
    cardapio_bebida.forEach(bebida => {
        const card = criarCardAlimento(bebida)

        containerCardapio.appendChild(card)
    })
} //fim da função renderizarCardápio

renderizarCardapio()

/* caso queira aplicar desconto:

cardapio_comida[0].aplicarDesconto(20) */
renderizarCardapio()